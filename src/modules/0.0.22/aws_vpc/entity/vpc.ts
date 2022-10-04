import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

// todo: import { cloudId } from '../../../../services/cloud-id';
import { AwsRegions } from '../../aws_account/entity';

export enum VpcState {
  AVAILABLE = 'available',
  PENDING = 'pending',
}

@Unique('uq_vpc_region', ['id', 'region'])
@Unique('uq_vpc_id_region', ['vpcId', 'region'])
@Entity()
export class Vpc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  @Index({ unique: true, where: 'vpc_id IS NOT NULL' })
  // todo: @cloudId
  vpcId?: string;

  @Column()
  cidrBlock: string;

  @Column({
    nullable: true,
    type: 'enum',
    enum: VpcState,
  })
  state?: VpcState;

  @Column({
    default: false,
  })
  isDefault: boolean;

  @Column({
    type: 'json',
    nullable: true,
  })
  tags?: { [key: string]: string };

  @Column({
    type: 'character varying',
    nullable: false,
    default: () => 'default_aws_region()',
  })
  @ManyToOne(() => AwsRegions, { nullable: false })
  @JoinColumn({ name: 'region' })
  // todo: @cloudId
  region: string;
}
