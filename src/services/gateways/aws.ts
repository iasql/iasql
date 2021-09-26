import {
  DescribeAvailabilityZonesCommand,
  DescribeImagesCommand,
  DescribeInstanceTypesCommand,
  DescribeInstancesCommand,
  DescribeRegionsCommand,
  EC2Client,
  Instance,
  RunInstancesCommand,
  paginateDescribeSecurityGroups,
  paginateDescribeSecurityGroupRules,
} from '@aws-sdk/client-ec2'
import { createWaiter, WaiterState } from '@aws-sdk/util-waiter'

type AWSCreds = {
  accessKeyId: string,
  secretAccessKey: string
}

type AWSConfig = {
  credentials: AWSCreds,
  region: string
}

export class AWS {
  private ec2client: EC2Client

  constructor(config: AWSConfig) {
    this.ec2client = new EC2Client(config)
  }

  // TODO remove once we populate the AMI table
  // the AMI id for the same AMI is different per region
  private async getAmiId() {
    // ubuntu free tier compatible image
    const amiType = 'ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*'
    // Defined to filter images that do not need to accept terms and subscribe to use this AWS Marketplace product
    const amiTypeRegex =
      /ubuntu\/images\/hvm-ssd\/ubuntu-focal-20\.04-amd64-server-[0-9]{8}$/
    const output = await this.ec2client.send(
      new DescribeImagesCommand({
        Filters: [
          {
            Name: 'name',
            Values: [amiType],
          },
        ],
      }),
    );
    return output.Images?.filter((i) => i.Name?.match(amiTypeRegex))
      .sort((a, b) => {
        if (a.CreationDate && b.CreationDate) {
          return (a.CreationDate).localeCompare(b.CreationDate)
        }
        return 0;
      })
      .pop()?.ImageId;
  }

  async newInstance(instanceType: string): Promise<string> {
    const amiId = await this.getAmiId();
    const instanceParams = {
      ImageId: amiId,
      InstanceType: instanceType,
      MinCount: 1,
      MaxCount: 1,
      SecurityGroupIds: [],
      TagSpecifications: [
        {
          ResourceType: 'instance',
          Tags: [{ Key: 'owner', Value: 'iasql-change-engine' }],
        },
      ],
      UserData: undefined,
    };
    const create = await this.ec2client.send(
      new RunInstancesCommand(instanceParams),
    );
    const instanceIds: string[] | undefined = create.Instances?.map((i) => i?.InstanceId ?? '');
    const input = new DescribeInstancesCommand({
      InstanceIds: instanceIds,
    });
    await createWaiter<EC2Client, DescribeInstancesCommand>(
      {
        client: this.ec2client,
        // all in seconds
        maxWaitTime: 180,
        minDelay: 1,
        maxDelay: 4,
      },
      input,
      async (client, cmd) => {
        try {
          const data = await client.send(cmd);
          for (const reservation of data?.Reservations ?? []) {
            for (const instance of reservation?.Instances ?? []) {
              if (instance.PublicIpAddress === undefined)
                return { state: WaiterState.RETRY };
            }
          }
          return { state: WaiterState.SUCCESS };
        } catch (e: any) {
          if (e.Code === 'InvalidInstanceID.NotFound')
            return { state: WaiterState.RETRY };
          throw e;
        }
      },
    );
    return instanceIds?.pop() ?? ''
  }

  async getInstances() {
    return await this.ec2client.send(new DescribeInstancesCommand({}))
  }

  async getInstanceTypes() {
    return await this.ec2client.send(new DescribeInstanceTypesCommand({}))
  }

  async getAMIs() {
    return await this.ec2client.send(new DescribeImagesCommand({}))
  }

  async getRegions() {
    return await this.ec2client.send(new DescribeRegionsCommand({}))
  }

  async getAvailabilityZones() {
    return await this.ec2client.send(new DescribeAvailabilityZonesCommand({}))
  }

  async getSecurityGroups() {
    const securityGroups = [];
    const paginator = paginateDescribeSecurityGroups({
      client: this.ec2client,
      pageSize: 25,
    }, {});
    for await (const page of paginator) {
      securityGroups.push(...(page.SecurityGroups ?? []));
    }
    return {
      SecurityGroups: securityGroups, // Make it "look like" the regular query again
    };
  }

  async getSecurityGroupRules() {
    const securityGroupRules = [];
    const paginator = paginateDescribeSecurityGroupRules({
      client: this.ec2client,
      pageSize: 25,
    }, {});
    for await (const page of paginator) {
      securityGroupRules.push(...(page.SecurityGroupRules ?? []));
    }
    return {
      SecurityGroupRules: securityGroupRules, // Make it "look like" the regular query again
    };
  }
}
