import { MigrationInterface, QueryRunner } from 'typeorm';

export class awsCloudfront1673870934315 implements MigrationInterface {
  name = 'awsCloudfront1673870934315';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "distribution"
                             (
                                 "id"                     SERIAL            NOT NULL,
                                 "distribution_id"        character varying,
                                 "domain_name"            character varying,
                                 "caller_reference"       character varying,
                                 "comment"                character varying NOT NULL DEFAULT '',
                                 "enabled"                boolean           NOT NULL DEFAULT true,
                                 "is_ipv6_enabled"        boolean,
                                 "web_acl_id"             character varying,
                                 "default_cache_behavior" json              NOT NULL,
                                 "origins"                json              NOT NULL,
                                 "e_tag"                  character varying,
                                 "status"                 character varying,
                                 CONSTRAINT "PK_187eaf203ccf9018df51b40108c" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "distribution"`);
  }
}