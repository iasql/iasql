create table region (
  region_id int generated always as identity,
  region_name varchar(30),
  endpoint varchar(60),
  opt_in_status varchar(20),
  primary key(region_id)
);

create table tag (
  tag_id int generated always as identity,
  key varchar(50),
  value varchar(500),
  primary key(tag_id)
);

create table availability_zone (
  availability_zone_id int generated always as identity,
  state availability_zone_state,
  opt_in_status availability_zone_opt_in_status,
  messages varchar(100) array,
  region_id int,
  zone_name varchar(30),
  zone_id varchar(30),
  group_name varchar(30),
  network_border_group varchar(30),
  zone_type varchar(30),
  parent_zone_id int null,
  primary key(availability_zone_id),
  constraint fk_region foreign key(region_id) references region(region_id)
);

create table instance_type (
  instance_type_id int generated always as identity,
  instance_type instance_type_values,
  current_generation boolean,
  free_tier_eligible boolean,
  supported_usage_classes usage_class_type array,
  supported_root_device_types device_type array,
  supported_virtualization_types virtualization_type_values array,
  bare_metal boolean,
  hypervisor instance_type_hypervisor,
  processor_info processor_info_type,
  v_cpu_info v_cpu_info_type,
  memory_info memory_info_type,
  instance_storage_supported boolean,
  instance_storage_info instance_storage_info_type,
  ebs_info ebs_info_type,
  network_info network_info_type,
  gpu_info gpu_info_type,
  fpga_info fpga_info_type,
  placement_group_info placement_group_info_type,
  inference_accelerator_info inference_accelerator_info_type,
  hibernation_supported boolean,
  burstable_performance_supported boolean,
  dedicated_hosts_supported boolean,
  auto_recovery_supported boolean,
  supported_boot_modes boot_mode_values,
  primary key(instance_type_id)
);

create table instance_type_by_region (
  instance_type_by_region_id int generated always as identity,
  instance_type_id int not null,
  region_id int not null,
  primary key(instance_type_by_region_id),
  constraint fk_region foreign key(region_id) references region(region_id),
  constraint fk_instance_type foreign key(instance_type_id) references instance_type(instance_type_id)
);

create table instance_type_by_availability_zone (
  instance_type_by_availability_zone_id int generated always as identity,
  instance_type_id int not null,
  availability_zone_id int not null,
  primary key(instance_type_by_availability_zone_id),
  constraint fk_availability_zone foreign key(availability_zone_id) references availability_zone(availability_zone_id),
  constraint fk_instance_type foreign key(instance_type_id) references instance_type(instance_type_id)
);

create table ami (
  ami_id int generated always as identity,
  architecture architecture_values,
  creation_date timestamp,
  image_id varchar(50),
  image_location varchar(300),
  image_type image_type_values,
  public boolean,
  kernel_id varchar(50),
  owner_id varchar(20),
  platform ami_platform_values,
  platform_details varchar(50),
  usage_operation varchar(50),
  product_codes product_code array,
  ramdisk_id varchar(50),
  state image_state,
  block_device_mappings block_device_mapping array,
  description varchar(500),
  ena_support boolean,
  hypervisor hypervisor_type,
  image_owner_alias varchar(50),
  name varchar(300),
  root_device_name varchar(50),
  root_device_type device_type,
  sriov_net_support varchar(50),
  state_reason state_reason_type,
  virtualization_type virtualization_type_values,
  boot_mode boot_mode_values,
  deprecation_time timestamp,
  primary key(ami_id)
);

create table ami_tag (
  ami_tag_id int generated always as identity,
  ami_id int not null,
  tag_id int not null,
  primary key(ami_tag_id),
  constraint fk_ami foreign key(ami_id) references ami(ami_id),
  constraint fk_tag foreign key(tag_id) references tag(tag_id)
);