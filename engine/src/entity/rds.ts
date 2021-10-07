import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { AvailabilityZone, Tag, SecurityGroup } from '.';
import { awsPrimaryKey } from '../services/aws-primary-key';
import { noDiff } from '../services/diff';
import { Source, source } from '../services/source-of-truth';

export enum LicenseModel {
  LICENSE_INCLUDED = 'license-included',
  BRING_YOUR_OWN_LICENSE = 'bring-your-own-license',
  GENERAL_PUBLIC_LICENSE = 'general-public-license',
}

export enum StorageType {
  STANDARD = 'standard',
  GP2 = 'gp2',
  IO1 = 'io1',
}

export type MonitoringIntervals = 0 | 1 | 5 | 10 | 15 | 30 | 60;

// TODO complete instance schema
@source(Source.DB)
@Entity()
export class RDS {
  @noDiff
  @PrimaryGeneratedColumn()
  id: number;

  @awsPrimaryKey
  @Column({
    nullable: true
  })
  dbiResourceId?: string;

  // TODO: add constraints
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#dbinstanceidentifier
  @Column({ 
    unique: true, 
  })
  dbInstanceIdentifier: string;

  // TODO: range vary based on storage type and engine
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#allocatedstorage
  @Column({
    type: 'int',
  })
  allocatedStorage: number;

  @Column({
    nullable: true,
  })
  autoMinorVersionUpgrade?: boolean;

  // Only defined if MultiAZ is off
  @ManyToOne(() => AvailabilityZone, { eager: true, })
  @JoinColumn({
    name: 'availability_zone_id',
  })
  availabilityZone: AvailabilityZone;
  
  // TODO: Add constraints
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#backupretentionperiod
  @Column({
    default: 1,
    nullable: true,
  })
  backupRetentionPeriod?: number;

  @Column({
    nullable: true,
  })
  characterSetName?: string;

  @Column({
    default: false,
    nullable: true,
  })
  copyTagsToSnapshot?: boolean;

  // TODO: Update with FK to cluster entity once implemented
  @Column({
    nullable: true,
  })
  dbClusterIdentifier?: string;

  // TODO: Update FK to intance class table
  @Column()
  dbInstanceClass: string;

  // TODO: Constraints per database engine?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#dbname
  @Column({
    nullable: true,
  })
  dbName?: string;

  // TODO: Update with FK to DBParameterGroup table?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#dbparametergroupname
  @Column({
    nullable: true,
  })
  dbParameterGroups?: string;

  // TODO: Update with FK to DB Security groups table?
  @Column({
    nullable: true,
  })
  dbSecurityGroups?: string;

  @Column({
    nullable: true,
    default: false,
  })
  deletionProtection?: boolean;

  // TODO: Update to array and fix relationship type (many to many) once Domain entity is defined
  @Column({
    nullable: true,
  })
  domainMemberships?: string;

  // TODO: many to may relation eventually
  @Column({
    nullable: true,
  })
  enableCloudwatchLogsExports?: string;

  @Column({
    nullable: true,
  })
  enableCustomerOwnedIp?: boolean;

  
  @Column({
    nullable: true,
    default: false,
  })
  enableIAMDatabaseAuthentication?: boolean;

  @Column({
    nullable: true,
  })
  enablePerformanceInsights?: boolean;

  // TODO: enum or FK to table with versioning include?
  @Column()
  engine: string;

  // TODO: DescribeDBEngineVersions
  @Column({
    nullable: true,
  })
  engineVersion?: string;

  // TODO: Add constraints?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#iops
  @Column({
    nullable: true,
  })
  iops?: number;
  
  @Column({
    nullable: true,
  })
  kmsKeyId?: string;

  @Column({
    nullable: true,
  })
  licenseModel?: LicenseModel;

  // TODO: How to handle this just for creation time and do not store it in DB?
  // TODO: Apply constraints?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#masteruserpassword
  @noDiff
  @Column({
    nullable: true,
  })
  masterUserPassword?: string;

  // TODO: Apply constraints?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#masterusername
  @Column({
    nullable: true,
  })
  masterUsername?: string;

  @Column({
    nullable: true,
  })
  maxAllocatedStorage?: number;

  // TODO: add constraint If MonitoringRoleArn is specified, then you must also set MonitoringInterval to a value other than 0.??
  @Column({
    default: 0,
  })
  monitoringInterval: MonitoringIntervals;

  @Column({
    nullable: true,
  })
  monitoringRoleArn?: string;

  @Column({
    nullable: true,
  })
  multiAZ?: boolean;

  // Just for oracle
  @Column({
    nullable: true,
  })
  ncharCharacterSetName?: string;
  
  // TODO: Update relationship and create groups entity
  @Column({
    nullable: true,
  })
  optionGroupName?: string;


  @Column({
    nullable: true,
  })
  performanceInsightsKMSKeyId?: string;

  @Column({
    nullable: true,
  })
  performanceInsightsRetentionPeriod?: number;

  // TODO: add constraint per engine?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#port
  @Column({
    nullable: true,
  })
  port?: number; 

  // TODO: add constraint?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#preferredbackupwindow
  @Column({
    nullable: true,
  })
  preferredBackupWindow?: string;

  // TODO: add constraint?
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/interfaces/createdbinstancecommandinput.html#preferredmaintenancewindow
  @Column({
    nullable: true,
  })
  preferredMaintenanceWindow?: string;

  // TODO: Implement processor features entity and fix column type
  @Column({
    nullable: true,
  })
  processorFeatures?: string;

  // TODO: constraint 0 - 15
  @Column({
    nullable: true,
    default: 1,
  })
  promotionTier?: number;

  @Column({
    nullable: true,
  })
  publiclyAccessible?: boolean;

  @Column({
    nullable: true,
  })
  storageEncrypted?: boolean;

  @Column({
    nullable: true,
  })
  storageType?: StorageType;

  @ManyToMany(() => Tag, { cascade: true, })
  @JoinTable()
  tags: Tag[];

  @Column({
    nullable: true,
  })
  tdeCredentialArn?: string;

  // TODO: how to handle this for creation
  @Column({
    nullable: true,
  })
  tdeCredentialPassword?: string;
  
  @Column({
    nullable: true,
  })
  timezone?: string;

  @ManyToMany(() => SecurityGroup, { eager: true, })
  @JoinTable()
  vpcSecurityGroups: SecurityGroup;
}
