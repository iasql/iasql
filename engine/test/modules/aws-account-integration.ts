import * as iasql from '../../src/services/iasql'
import {
  execComposeDown,
  execComposeUp,
  finish,
  runApply,
  runQuery,
  runSync,
} from '../helpers'

jest.setTimeout(360000);

beforeAll(execComposeUp);

afterAll(execComposeDown);

const dbAlias = 'accounttest';
const apply = runApply.bind(null, dbAlias);
const sync = runSync.bind(null, dbAlias);
const query = runQuery.bind(null, dbAlias);

describe('AwsAccount Integration Testing', () => {
  it('does not create a test DB with fake credentials', (done) => void iasql.add(
    dbAlias,
    'us-west-2',
    'fake',
    'credentials',
    'not-needed').then(
      () => done(new Error('Should not have succeeded')),
      () => done(),
    ));

  it('creates a new test db with the same name', (done) => void iasql.add(
    dbAlias,
    'us-west-2',
    process.env.AWS_ACCESS_KEY_ID ?? 'barf',
    process.env.AWS_SECRET_ACCESS_KEY ?? 'barf',
    'not-needed').then(...finish(done)));

  it('inserts a second, useless row into the aws_account table', query(`
    INSERT INTO aws_account (access_key_id, secret_access_key, region_id)
    VALUES ('fake', 'creds', 1)
  `));

  it('does absolutely nothing when you apply this', apply);

  it('removes the useless row', query(`
    DELETE FROM aws_account WHERE access_key_id = 'fake'
  `));

  it('creates a new region', query(`
    INSERT INTO region (name, endpoint, opt_in_status)
    VALUES ('second-star-to-the-right', 'and-straight-on-til-morning', false)
  `));

  it('not removed when you apply as it is a cloud source-of-truth table', apply);

  it('still there', query(`
    SELECT * FROM region WHERE name = 'second-star-to-the-right'
  `, (res: any[]) => expect(res.length).toBe(1)));

  it('actually removes it when you re-sync the db', sync);

  it('really gone', query(`
    SELECT * FROM region WHERE name = 'second-star-to-the-right'
  `, (res: any[]) => expect(res.length).toBe(0)));

  it('deletes a region', query(`
    DELETE FROM availability_zone
    USING region
    WHERE region.name = 'eu-west-1'
    AND availability_zone.region_id = region.id;
    DELETE FROM region WHERE name = 'eu-west-1';
  `));

  it('restores it when you re-sync the db', sync);

  it('is back', query(`
    SELECT * FROM region WHERE name = 'eu-west-1'
  `, (res: any[]) => expect(res.length).toBe(1)));

  it('deletes all vpc and subnet records', query(`
    DELETE FROM aws_subnet;
    DELETE FROM aws_vpc;
  `));

  it('restores them even on apply since they are db source-of-truth', apply);

  it('has all subnets again', query(`
    SELECT * FROM aws_subnet
  `, (res: any[]) => expect(res.length).toBeGreaterThan(0)));

  it('has all vpcs again', query(`
    SELECT * FROM aws_vpc
  `, (res: any[]) => expect(res.length).toBeGreaterThan(0)));

  it('creates a new availability zone', query(`
    INSERT INTO availability_zone (state, opt_in_status, region_id, zone_name, zone_id, group_name, network_border_group)
    VALUES ('available', 'not-opted-in', 1, 'fake zone', 'fake', 'fakery', 'fACK');
  `));

  it('not removed when you apply as it is a cloud source-of-truth table', apply);

  it('still there', query(`
    SELECT * FROM availability_zone WHERE zone_name = 'fake zone'
  `, (res: any[]) => expect(res.length).toBe(1)));

  it('actually removes it when you re-sync the db', sync);

  it('really gone', query(`
    SELECT * FROM availability_zone WHERE zone_name = 'fake zone'
  `, (res: any[]) => expect(res.length).toBe(0)));

  describe('availability zone deletion', () => {
    let availabilityZoneName = '';

    beforeAll(query(`
      SELECT zone_name FROM availability_zone WHERE parent_zone_id IS NULL LIMIT 1;
    `, (res: any[]) => availabilityZoneName = res[0].zone_name));

    it('deletes an availability zone', (done) => query(`
      DELETE FROM availability_zone WHERE zone_name = '${availabilityZoneName}';
    `)(done));

    it('is restored with a sync', sync);

    it('really there', (done) => query(`
      SELECT * FROM availability_zone WHERE zone_name = '${availabilityZoneName}'
    `, (res: any[]) => expect(res.length).toBe(1))(done));
  });
});
