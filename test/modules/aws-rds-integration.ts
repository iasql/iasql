import config from '../../src/config';
import * as iasql from '../../src/services/iasql';
import {
  defaultRegion,
  execComposeDown,
  execComposeUp,
  finish,
  getPrefix,
  runCommit,
  runInstall,
  runQuery,
  runRollback,
  runUninstall,
} from '../helpers';

const prefix = getPrefix();
const dbAlias = 'rdstest';
const parameterGroupName = `${prefix}${dbAlias}pg`;
const engineFamily = `postgres13`;

const commit = runCommit.bind(null, dbAlias);
const rollback = runRollback.bind(null, dbAlias);
const query = runQuery.bind(null, dbAlias);
const install = runInstall.bind(null, dbAlias);
const uninstall = runUninstall.bind(null, dbAlias);
const region = defaultRegion();
const modules = ['aws_security_group', 'aws_rds', 'aws_vpc'];

jest.setTimeout(960000);
beforeAll(async () => await execComposeUp());
afterAll(async () => await execComposeDown());

let username: string, password: string;

describe('RDS Integration Testing', () => {
  it('creates a new test db elb', done => {
    (async () => {
      try {
        const { user, password: pgPassword } = await iasql.connect(dbAlias, 'not-needed', 'not-needed');
        username = user;
        password = pgPassword;
        if (!username || !password) throw new Error('Did not fetch pg credentials');
        done();
      } catch (e) {
        done(e);
      }
    })();
  });

  it('installs the aws_account module', install(['aws_account']));

  it(
    'inserts aws credentials',
    query(
      `
    SELECT * FROM iasql_begin();
    INSERT INTO aws_credentials (access_key_id, secret_access_key)
    VALUES ('${process.env.AWS_ACCESS_KEY_ID}', '${process.env.AWS_SECRET_ACCESS_KEY}')
  `,
      undefined,
      false,
      () => ({ username, password }),
    ),
  );

  it('syncs the regions', commit());

  it(
    'sets the default region',
    query(
      `
    SELECT * FROM iasql_begin();
    UPDATE aws_regions SET is_default = TRUE WHERE region = '${region}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('installs the rds module', install(modules));

  it(
    'creates an RDS instance',
    query(
      `
    SELECT * FROM iasql_begin();
    BEGIN;
      INSERT INTO rds (db_instance_identifier, allocated_storage, db_instance_class, master_username, master_user_password, availability_zone, engine, backup_retention_period)
        VALUES ('${prefix}test', 20, 'db.t3.micro', 'test', 'testpass', (SELECT name FROM availability_zone WHERE region = '${region}' LIMIT 1), 'postgres:13.4', 0);
      INSERT INTO rds_security_groups (rds_id, security_group_id) SELECT
        (SELECT id FROM rds WHERE db_instance_identifier='${prefix}test'),
        (SELECT id FROM security_group WHERE group_name='default' AND region = '${region}');
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('undo changes', rollback());

  it(
    'check adds a new repository',
    query(
      `
    SELECT *
    FROM rds
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'check adds a new repository',
    query(
      `
    SELECT *
    FROM rds_security_groups
    INNER JOIN rds ON rds.id = rds_security_groups.rds_id
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'creates an RDS instance',
    query(
      `
    SELECT * FROM iasql_begin();
    BEGIN;
      INSERT INTO rds (db_instance_identifier, allocated_storage, db_instance_class, master_username, master_user_password, availability_zone, engine, backup_retention_period)
        VALUES ('${prefix}test', 20, 'db.t3.micro', 'test', 'testpass', (SELECT name FROM availability_zone WHERE region = '${region}' LIMIT 1), 'postgres:13.4', 0);
      INSERT INTO rds_security_groups (rds_id, security_group_id) SELECT
        (SELECT id FROM rds WHERE db_instance_identifier='${prefix}test'),
        (SELECT id FROM security_group WHERE group_name='default' AND region = '${region}');
    COMMIT;
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies the change', commit());

  it(
    'check adds a new repository',
    query(
      `
    SELECT *
    FROM rds
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check adds a new repository',
    query(
      `
    SELECT *
    FROM rds_security_groups
    INNER JOIN rds ON rds.id = rds_security_groups.rds_id
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'changes the postgres version',
    query(
      `
    SELECT * FROM iasql_begin();
    UPDATE rds SET engine = 'postgres:13.5' WHERE db_instance_identifier = '${prefix}test';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies the change', commit());

  it(
    'creates an RDS parameter group',
    query(
      `
    SELECT * FROM iasql_begin();
    INSERT INTO parameter_group (name, family, description)
    VALUES ('${parameterGroupName}', '${engineFamily}', '${parameterGroupName} desc');
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies the change', commit());

  it(
    'check parameter group insertion',
    query(
      `
    SELECT *
    FROM parameter_group
    WHERE name = '${parameterGroupName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check all modifiable boolean parameters are not true',
    query(
      `
    SELECT params ->> 'ParameterValue' as value
    FROM parameter_group, jsonb_array_elements(parameters) as params
    WHERE name = '${parameterGroupName}' AND params ->> 'DataType' = 'boolean' AND params ->> 'IsModifiable' = 'true';
  `,
      (res: any[]) => expect(res.every(r => r['value'] === '1')).toBeFalsy(),
    ),
  );

  it(
    'changes all boolean parameters for the new parameter group to be true',
    query(
      `
    WITH parameters AS (
      SELECT name, params
      FROM parameter_group,
          jsonb_array_elements(parameters) params
      WHERE name = '${parameterGroupName}' AND params ->> 'DataType' = 'boolean' AND params->> 'IsModifiable' = 'true'
    ), updated_parameters AS (
      select name, jsonb_set(params, '{ParameterValue}', '1', true) updated_params
      from parameters
    )
    UPDATE parameter_group
    SET parameters = (
      SELECT jsonb_agg(updated_params)
      FROM updated_parameters
      WHERE updated_parameters.name = parameter_group.name
    );
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('applies the change', commit());

  it(
    'check all modifiable boolean parameters are true',
    query(
      `
    SELECT params ->> 'ParameterValue' as value
    FROM parameter_group, jsonb_array_elements(parameters) as params
    WHERE name = '${parameterGroupName}' AND params ->> 'DataType' = 'boolean' AND params ->> 'IsModifiable' = 'true';
  `,
      (res: any[]) => expect(res.every(r => r['value'] === '1')).toBeTruthy(),
    ),
  );

  it('uninstalls the rds module', uninstall(['aws_rds']));

  it('installs the rds module', install(['aws_rds']));

  it(
    'check instance count after uninstall',
    query(
      `
    SELECT *
    FROM rds
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'check parameter group count after uninstall',
    query(
      `
    SELECT *
    FROM parameter_group
    WHERE name = '${parameterGroupName}';
  `,
      (res: any[]) => expect(res.length).toBe(1),
    ),
  );

  it(
    'removes the RDS instance',
    query(
      `
    SELECT * FROM iasql_begin();
    DELETE FROM rds
    WHERE db_instance_identifier = '${prefix}test';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check rds delete count',
    query(
      `
    SELECT *
    FROM rds
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('applies the change', commit());

  it(
    'check rds delete count',
    query(
      `
    SELECT *
    FROM rds
    WHERE db_instance_identifier = '${prefix}test';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it(
    'removes the parameter group and it parameters',
    query(
      `
    SELECT * FROM iasql_begin();
    DELETE FROM parameter_group
    WHERE name = '${parameterGroupName}';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it(
    'check parameter group count after delete',
    query(
      `
    SELECT *
    FROM parameter_group
    WHERE name = '${parameterGroupName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('applies the change', commit());

  it(
    'check parameter group count after delete',
    query(
      `
    SELECT *
    FROM parameter_group
    WHERE name = '${parameterGroupName}';
  `,
      (res: any[]) => expect(res.length).toBe(0),
    ),
  );

  it('deletes the test db', done => void iasql.disconnect(dbAlias, 'not-needed').then(...finish(done)));
});

describe('RDS install/uninstall', () => {
  it('creates a new test db', done => {
    (async () => {
      try {
        const { user, password: pgPassword } = await iasql.connect(dbAlias, 'not-needed', 'not-needed');
        username = user;
        password = pgPassword;
        if (!username || !password) throw new Error('Did not fetch pg credentials');
        done();
      } catch (e) {
        done(e);
      }
    })();
  });

  it('installs the aws_account module', install(['aws_account']));

  it(
    'inserts aws credentials',
    query(
      `
    SELECT * FROM iasql_begin();
    INSERT INTO aws_credentials (access_key_id, secret_access_key)
    VALUES ('${process.env.AWS_ACCESS_KEY_ID}', '${process.env.AWS_SECRET_ACCESS_KEY}')
  `,
      undefined,
      false,
      () => ({ username, password }),
    ),
  );

  it('syncs the regions', commit());

  it(
    'sets the default region',
    query(
      `
    SELECT * FROM iasql_begin();
    UPDATE aws_regions SET is_default = TRUE WHERE region = 'us-east-1';
  `,
      undefined,
      true,
      () => ({ username, password }),
    ),
  );

  it('installs the RDS module', install(modules));

  it('uninstalls the RDS module', uninstall(modules));

  it('installs all modules', done =>
    void iasql.install([], dbAlias, config.db.user, true).then(...finish(done)));

  it('uninstalls the RDS module', uninstall(['aws_rds']));

  it('installs the RDS module', install(['aws_rds']));

  it('deletes the test db', done => void iasql.disconnect(dbAlias, 'not-needed').then(...finish(done)));
});
