import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm'

import { AwsSecurityGroup } from '../../aws_security_group@0.0.1/entity'
import { cloudId, } from '../../../services/cloud-id'

export enum LoadBalancerSchemeEnum {
  INTERNAL = "internal",
  INTERNET_FACING = "internet-facing"
}

export enum LoadBalancerStateEnum {
  ACTIVE = "active",
  ACTIVE_IMPAIRED = "active_impaired",
  FAILED = "failed",
  PROVISIONING = "provisioning"
}

export enum LoadBalancerTypeEnum {
  APPLICATION = "application",
  GATEWAY = "gateway",
  NETWORK = "network"
}

export enum IpAddressType {
  DUALSTACK = "dualstack",
  IPV4 = "ipv4"
}

@Entity()
export class AwsLoadBalancer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  loadBalancerName: string;

  @Column({
    nullable: true,
  })
  @cloudId
  loadBalancerArn?: string;

  @Column({
    nullable: true,
  })
  dnsName?: string;

  @Column({
    nullable: true,
  })
  canonicalHostedZoneId?: string;

  @Column({
    nullable: true,
    type: 'timestamp with time zone'
  })
  createdTime?: Date;

  @Column({
    type: 'enum',
    enum: LoadBalancerSchemeEnum,
  })
  scheme: LoadBalancerSchemeEnum;

  @Column({
    nullable: true,
    type: 'enum',
    enum: LoadBalancerStateEnum,
  })
  state?: LoadBalancerStateEnum;

  @Column({
    type: 'enum',
    enum: LoadBalancerTypeEnum,
  })
  loadBalancerType: LoadBalancerTypeEnum;

  @Column()
  vpc: string;

  // Not in the mapper since is just needed as input for the creation and retrieve endpoints
  // do not return any information related to the subnets
  @Column("varchar", { array: true, nullable: true, })
  subnets?: string[];

  @Column("varchar", { array: true, nullable: true, })
  availabilityZones?: string[];

  @ManyToMany(() => AwsSecurityGroup)
  @JoinTable({
    name: 'aws_load_balancer_security_groups',
  })
  securityGroups?: AwsSecurityGroup[];

  @Column({
    type: 'enum',
    enum: IpAddressType,
  })
  ipAddressType: IpAddressType;

  @Column({
    nullable: true,
  })
  customerOwnedIpv4Pool?: string;
}
