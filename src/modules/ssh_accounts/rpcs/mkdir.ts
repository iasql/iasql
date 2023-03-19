import { SshAccounts } from '..';
import { Context, RpcBase, RpcInput, RpcResponseObject } from '../../interfaces';

export class SshMkdir extends RpcBase {
  /**
   * @internal
   */
  module: SshAccounts;
  /**
   * @internal
   */
  outputTable = {
    status: 'varchar',
  } as const;
  /**
   * @internal
   */
  inputTable: RpcInput = {
    serverName: 'varchar',
    path: 'varchar',
  };

  call = async (
    _dbId: string,
    _dbUser: string,
    ctx: Context,
    serverName: string,
    path: string,
  ): Promise<RpcResponseObject<typeof this.outputTable>[]> => {
    const sshClient = await ctx.getSshClient(serverName);
    await sshClient.sftp().mkdir(path);
    return [{ status: 'created' }]; // If it reaches here, it was successful
  };

  constructor(module: SshAccounts) {
    super();
    this.module = module;
    super.init();
  }
}
