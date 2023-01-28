---
id: "aws_ec2_entity_registered_instance.RegisteredInstance"
title: "Table: registered_instance"
displayed_sidebar: "docs"
sidebar_label: "SQL"
sidebar_position: 0
custom_edit_url: null
---

Table to track the EC2 instances that are registered into load balancers

**`Example`**

```sql TheButton[Associate an EC2 instance to a load balancer]="Associate an EC2 instance to a load balancer"
INSERT INTO registered_instance (instance, target_group_id) SELECT (SELECT id FROM instance WHERE tags ->> 'name' = 'test-vm'), (SELECT id FROM target_group WHERE target_group_name = 'test-target-group');

UPDATE registered_instance SET port = '80' FROM instance WHERE instance.id = registered_instance.instance AND target_group_id = (SELECT id FROM target_group WHERE target_group_name = 'test-target-group')
AND instance.tags ->> 'name' = 'test-vm';

DELETE FROM registered_instance USING instance WHERE instance.tags ->> 'name' = 'test-vm' AND instance.id = registered_instance.instance;
```

**`See`**

 - https://github.com/iasql/iasql/blob/main/test/modules/aws-ec2-integration.ts#L614
 - https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html

## Columns

• **instance**: [`instance`](aws_ec2_entity_instance.Instance.md)

Reference to the instance to associate with the specific load balancer

• `Optional` **port**: `number`

Port to expose in that association

• **region**: `string`

Region for the VM association

• **target\_group**: [`target_group`](aws_elb_entity_target_group.TargetGroup.md)

Reference to the target group for the association