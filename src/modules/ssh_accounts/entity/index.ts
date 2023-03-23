import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { cloudId } from '../../../services/cloud-id';

/**
 * This table holds ssh credentials for your servers.
 * Currently only supports public/private key access (where the server already has your public key
 * to validate responses generated by your private key). This key may optionally be locked by a
 * passcode, which must also be provided in that case.
 *
 */
@Entity()
export class SshCredentials {
  /**
   * @private
   * Internal ID field for storing accounts
   */
  @PrimaryGeneratedColumn()
  @cloudId
  id: number;

  /**
   * @public
   * The name you wish to give to the server. Must be unique for all servers as it is used as a join
   * column by other server modules to indicate which server the data came from.
   */
  @Column({ unique: true })
  name: string;

  /**
   * @public
   * The server hostname, may also be an IP address
   */
  @Column()
  hostname: string;

  /**
   * @public
   * The server's ssh port. Defaults to 22
   */
  @Column({ default: 22, type: 'smallint' })
  port: number;

  /**
   * @public
   * The username to connect to the server
   */
  @Column()
  username: string;

  /**
   * @public
   * The private key for connecting to the server. Alternate SSH mechanisms not yet available.
   */
  @Column({ type: 'text' })
  privateKey: string;

  /**
   * @public
   * The passphrase to the private key, if one is present
   */
  @Column({ nullable: true })
  keyPassphrase?: string;
}
