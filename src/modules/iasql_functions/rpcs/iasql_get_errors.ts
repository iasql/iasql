import { IasqlFunctions } from '..';
import { TypeormWrapper } from '../../../services/typeorm';
import { Context, RpcBase, RpcResponseObject } from '../../interfaces';

/**
 * Method to list the error messages produced by `iasql_commit` or `iasql_rollback`
 *
 * Returns following columns:
 * - ts: Error message timestamp
 * - message: Error message
 *
 * @example
 * ```sql
 * SELECT * FROM iasql_get_errors();
 * ```
 *
 * @see https://iasql.com/docs/function/
 *
 */
export class IasqlGetErrors extends RpcBase {
  /**
   * @internal
   */
  module: IasqlFunctions;
  /**
   * @internal
   */
  outputTable = {
    ts: 'timestamp with time zone',
    message: 'varchar',
  } as const;
  call = async (
    _dbId: string,
    _dbUser: string,
    ctx: Context,
  ): Promise<RpcResponseObject<typeof this.outputTable>[]> => {
    const query = `
      select ts, message
      from iasql_audit_log
      where change_type = 'ERROR'
      order by ts desc limit 500;
    `;
    const errors = await (ctx.orm as TypeormWrapper).query(query);
    return errors;
  };

  constructor(module: IasqlFunctions) {
    super();
    this.module = module;
    super.init();
  }
}