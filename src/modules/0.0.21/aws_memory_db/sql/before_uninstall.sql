ALTER TABLE "memory_db_cluster" DROP CONSTRAINT "FK_memory_db_cluster_region";
ALTER TABLE "subnet_group" DROP CONSTRAINT "FK_subnet_group_region";

ALTER TABLE subnet_group DROP CONSTRAINT check_subnet_group_subnets;
DROP FUNCTION "check_subnet_group_subnets";

DROP TRIGGER IF EXISTS check_subnets_by_subnet_group ON subnet;
DROP FUNCTION "check_subnets_by_subnet_group";

ALTER TABLE subnet_group DROP CONSTRAINT IF EXISTS check_subnet_group_subnets_same_vpc;
DROP FUNCTION "check_subnet_group_subnets_same_vpc";
