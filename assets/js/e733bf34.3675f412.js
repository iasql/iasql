"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14709],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,m=d["".concat(l,".").concat(p)]||d[p]||_[p]||i;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(67294),a=r(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:r,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},n)}},74866:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(87462),a=r(67294),i=r(86010),o=r(12466),s=r(16550),l=r(91980),c=r(67392),u=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}function _(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??d(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function E(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=_(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,c]=m({queryString:r,groupId:t}),[d,E]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,u.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),g=(()=>{const e=l??d;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),E(e)}),[c,E,i]),tabValues:i}}var g=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),_=e=>{const n=e.currentTarget,r=u.indexOf(n),t=c[r].value;t!==s&&(d(n),l(t))},p=e=>{let n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n)},c.map((e=>{let{value:n,label:r,attributes:o}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:p,onClick:_},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===n})}),r??n)})))}function T(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function R(e){const n=E(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(f,(0,t.Z)({},e,n)),a.createElement(T,(0,t.Z)({},e,n)))}function v(e){const n=(0,g.Z)();return a.createElement(R,(0,t.Z)({key:String(n)},e))}},86554:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(87462),a=(r(67294),r(3905)),i=r(74866),o=r(85162);const s={id:"aws_ecs_fargate",title:"aws_ecs_fargate",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},l=void 0,c={unversionedId:"modules/aws/aws_ecs_fargate",id:"modules/aws/aws_ecs_fargate",title:"aws_ecs_fargate",description:"Tables",source:"@site/docs/modules/aws/aws_ecs_fargate.md",sourceDirName:"modules/aws",slug:"/modules/aws/aws_ecs_fargate",permalink:"/docs/next/modules/aws/aws_ecs_fargate",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_ecs_fargate",title:"aws_ecs_fargate",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"aws_ecr",permalink:"/docs/next/modules/aws/aws_ecr"},next:{title:"aws_ecs_simplified",permalink:"/docs/next/modules/aws/aws_ecs_simplified"}},u={},d=[{value:"Tables",id:"tables",level:3},{value:"Functions",id:"functions",level:3},{value:"Enums",id:"enums",level:3}],_={toc:d},p="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},_,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{queryString:"view",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",{id:"tables"},"Tables"),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_ecs_fargate_entity_cluster.Cluster"},"cluster")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_ecs_fargate_entity_container_definition.ContainerDefinition"},"container_definition")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_ecs_fargate_entity_service.Service"},"service")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_ecs_fargate_entity_task_definition.TaskDefinition"},"task_definition")),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_ecs_fargate_rpcs_deploy_service.DeployServiceRPC"},"deploy_service")),(0,a.kt)("h3",{id:"enums"},"Enums"),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/enums/aws_ecs_fargate_entity_container_definition.TransportProtocol"},"transport_protocol")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/enums/aws_ecs_fargate_entity_service.AssignPublicIp"},"assign_public_ip")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/enums/aws_ecs_fargate_entity_task_definition.CpuMemCombination"},"cpu_mem_combination")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/enums/aws_ecs_fargate_entity_task_definition.TaskDefinitionStatus"},"task_definition_status"))),(0,a.kt)(o.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("details",{open:"true"},(0,a.kt)("summary",{mdxType:"summary"},"Manage ECS"),(0,a.kt)("codeblock",{language:"sql"},"--- installs the ecs module and its dependencies\nSELECT * FROM iasql_install('<modules>');\n--- adds a new cluster\nINSERT INTO cluster (cluster_name)\nVALUES('<clusterName>');\n--- check cluster insertion\nSELECT *\nFROM cluster\nWHERE cluster_name = '<clusterName>';\n--- adds service dependencies\nBEGIN;\nINSERT INTO security_group\n(description, group_name)\nVALUES\n('<securityGroup>', '<securityGroup>');\nINSERT INTO security_group_rule\n(is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\nSELECT true, '-1', -1, -1, '0.0.0.0/0', '<securityGroup>', id\nFROM security_group\nWHERE group_name = '<securityGroup>';\nINSERT INTO target_group\n(target_group_name, target_type, protocol, port, vpc, health_check_path)\nVALUES\n('<serviceTargetGroupName>', 'ip', 'HTTP',<hostPort>, null, '/health');\nINSERT INTO load_balancer\n(load_balancer_name, scheme, vpc, load_balancer_type, ip_address_type)\nVALUES\n('<serviceLoadBalancerName>', 'internet-facing', null, 'application', 'ipv4');\nINSERT INTO load_balancer_security_groups\n(load_balancer_id, security_group_id)\nVALUES\n((SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>'),\n(SELECT id FROM security_group WHERE group_name = '<securityGroup>' LIMIT 1));\nINSERT INTO listener\n(load_balancer_id, port, protocol, action_type, target_group_id)\nVALUES\n((SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>'),<hostPort>, 'HTTP', 'forward',\n(SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>'));\nCOMMIT;\n--- adds container dependencies\nBEGIN;\nINSERT INTO log_group (log_group_name)\nVALUES ('<logGroupName>');\nINSERT INTO iam_role (role_name, assume_role_policy_document, attached_policies_arns)\nVALUES ('<taskExecRoleName>', '<taskRolePolicyDoc>', array['<taskPolicyArn>']);\nCOMMIT;\n--- adds a new task definition\nINSERT INTO task_definition (\"family\", task_role_name, execution_role_name, cpu_memory)\nVALUES ('<tdFamily>', '<taskExecRoleName>', '<taskExecRoleName>', '<tdCpuMem>');\n--- check task_definition insertion\nSELECT *\nFROM task_definition\nWHERE family = '<tdFamily>' AND status IS NULL;\n--- adds a new container definition\nBEGIN;\nINSERT INTO container_definition (\"name\", image, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id, log_group_id)\nVALUES('<containerName>', '<image>',<containerEssential>,<containerMemoryReservation>,<hostPort>,<containerPort>, '<protocol>', '{ \"test\": 2}', (select id from task_definition where family = '<tdFamily>' and status is null and region = '<region>' limit 1), (select id from log_group where log_group_name = '<logGroupName>' and region = '<region>'));\nINSERT INTO container_definition (\"name\", image, tag, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id, log_group_id)\nVALUES('<containerNameTag>', '<image>', '<imageTag>', false,<containerMemoryReservation>,<protocol>,<tdFamily>, '<region>', '{ \"test\": 2}', (select id from task_definition where family = '<logGroupName>' and status is null and region = '<region>' limit 1), (select id from log_group where log_group_name = '<containerNameDigest>' and region = '<image>'));\nINSERT INTO container_definition (\"name\", image, digest, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id, log_group_id)\nVALUES('<imageDigest>', '<containerMemoryReservation>', '<protocol>', false,<tdFamily>,<region>,<logGroupName>, '<region>', '{ \"test\": 2}', (select id from task_definition where family = '' and status is null and region = '' limit 1), (select id from log_group where log_group_name = '' and region = ''));\nCOMMIT;\n--- check task_definition insertion\nSELECT *\nFROM task_definition\nWHERE family = '<tdFamily>';\n--- check container definition insertion\nSELECT *\nFROM container_definition\nWHERE name = '<containerNameDigest>' AND image = '<image>' AND digest = '<imageDigest>';\n--- adds a new service\nBEGIN;\nINSERT INTO service (\"name\", desired_count, subnets, assign_public_ip, cluster_id, task_definition_id, target_group_id)\nVALUES ('<serviceName>',<serviceDesiredCount>, (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true and vpc.region = '<region>' limit 3)), 'ENABLED', (SELECT id FROM cluster WHERE cluster_name = '<clusterName>'), (select id from task_definition where family = '<tdFamily>' and region = '<region>' order by revision desc limit 1), (SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>' and region = '<region>'));\n\nINSERT INTO service_security_groups (service_id, security_group_id)\nVALUES ((SELECT id FROM service WHERE name = '<serviceName>'), (select id from security_group where group_name = '<securityGroup>' and region = '<region>' limit 1));\nCOMMIT;\n--- tries to update a task definition\nWITH td AS (\nSELECT revision\nFROM task_definition\nWHERE family = '<tdFamily>' AND status = '<tdActive>'\nORDER BY family, revision DESC\nLIMIT 1\n)\nUPDATE task_definition SET revision = 55 WHERE family = '<tdFamily>' AND revision IN (SELECT revision FROM td) ;\n--- check service insertion\nSELECT *\nFROM service\nWHERE name = '<serviceName>';\n--- tries to update a service (update)\nUPDATE service SET desired_count =<serviceName>WHERE name = '';\n--- tries to update a service (replace)\nUPDATE service SET name = '<newServiceName>' WHERE name = '<serviceName>';\n--- deletes service\nBEGIN;\ndelete from service_security_groups\nusing service\nwhere name = '<newServiceName>';\n\ndelete from service\nwhere name = '<newServiceName>';\n\n\nCOMMIT;\n--- deletes container definitons\nbegin;\ndelete from container_definition\nusing task_definition\nwhere container_definition.task_definition_id = task_definition.id and task_definition.family = '<tdFamily>';\n\ndelete from task_definition\nwhere family = '<tdFamily>';\n\ndelete from iam_role\nwhere role_name = '<taskExecRoleName>';\n\ndelete from log_group\nwhere log_group_name = '<logGroupName>';\ncommit;\n--- deletes service dependencies\nBEGIN;\nDELETE FROM listener\nWHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>')\nand port =<hostPort>and protocol = 'HTTP' and action_type = 'forward'\nand target_group_id = (SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>');\n\nDELETE FROM load_balancer_security_groups\nWHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>');\n\nDELETE FROM load_balancer\nWHERE load_balancer_name = '<serviceLoadBalancerName>';\n\nDELETE FROM target_group\nWHERE target_group_name = '<serviceTargetGroupName>';\n\nDELETE FROM security_group_rule\nUSING security_group\nWHERE group_name = '<securityGroup>';\n\nDELETE FROM security_group\nWHERE group_name = '<securityGroup>';\nCOMMIT;\n--- deletes the cluster\ndelete from cluster\nwhere cluster_name = '<newClusterName>';\n")),(0,a.kt)("details",{open:"true"},(0,a.kt)("summary",{mdxType:"summary"},"Integrate with aws_ecr private repos"),(0,a.kt)("codeblock",{language:"sql"},"--- installs the ecs module and its dependencies\nSELECT * FROM iasql_install('<modules>');\n--- adds a new cluster\nINSERT INTO cluster (cluster_name)\nVALUES('<clusterName>');\n--- check cluster insertion\nSELECT *\nFROM cluster\nWHERE cluster_name = '<clusterName>';\n--- adds service dependencies\nBEGIN;\nINSERT INTO security_group\n(description, group_name)\nVALUES\n('<securityGroup>', '<securityGroup>');\nINSERT INTO security_group_rule\n(is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\nSELECT true, '-1', -1, -1, '0.0.0.0/0', '<securityGroup>', id\nFROM security_group\nWHERE group_name = '<securityGroup>';\nINSERT INTO target_group\n(target_group_name, target_type, protocol, port, vpc, health_check_path)\nVALUES\n('<serviceTargetGroupName>', 'ip', 'HTTP',<hostPort>, null, '/health');\nINSERT INTO load_balancer\n(load_balancer_name, scheme, vpc, load_balancer_type, ip_address_type)\nVALUES\n('<serviceLoadBalancerName>', 'internet-facing', null, 'application', 'ipv4');\nINSERT INTO load_balancer_security_groups\n(load_balancer_id, security_group_id)\nVALUES\n((SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>'),\n(SELECT id FROM security_group WHERE group_name = '<securityGroup>' LIMIT 1));\nINSERT INTO listener\n(load_balancer_id, port, protocol, action_type, target_group_id)\nVALUES\n((SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>'),<hostPort>, 'HTTP', 'forward',\n(SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>'));\nCOMMIT;\n--- check target group insertion\nSELECT *\nFROM target_group\nWHERE target_group_name = '<serviceTargetGroupName>';\n--- check load balancer insertion\nSELECT *\nFROM load_balancer\nWHERE load_balancer_name = '<serviceLoadBalancerName>';\n--- adds a new ECR\nINSERT INTO repository\n(repository_name)\nVALUES\n('<repositoryName>');\n--- adds a new role\nINSERT INTO iam_role (role_name, assume_role_policy_document, attached_policies_arns)\nVALUES ('<taskExecRoleName>', '<taskRolePolicyDoc>', array['<taskPolicyArn>']);\n--- adds a new task definition\nINSERT INTO task_definition (\"family\", task_role_name, execution_role_name, cpu_memory)\nVALUES ('<tdRepositoryFamily>', '<taskExecRoleName>', '<taskExecRoleName>', '<tdCpuMem>');\n--- adds a new container definition\nBEGIN;\nINSERT INTO container_definition (\"name\", repository_id, region, tag, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id)\nVALUES('<containerNameRepository>', (select id from repository where repository_name = '<repositoryName>' and region = '<region>'), (select region from repository where repository_name = '<repositoryName>'), '<imageTag>',<containerEssential>,<containerMemoryReservation>,<hostPort>,<containerPort>, '<protocol>', '{ \"test\": 2}', (select id from task_definition where family = '<tdRepositoryFamily>' and status is null and region = '<region>' limit 1));\nINSERT INTO container_definition (\"name\", repository_id, region, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id)\nVALUES('<containerNameRepository>dgst', (select id from repository where repository_name = '<repositoryName>' and region = '<region>'), (select region from repository where repository_name = '<repositoryName>'), false,<containerMemoryReservation>,<protocol>,<tdRepositoryFamily>, '<region>', '{ \"test\": 2}', (select id from task_definition where family = '' and status is null and region = '' limit 1));\nCOMMIT;\n--- check task_definition insertion\nSELECT *\nFROM task_definition\nWHERE family = '<tdRepositoryFamily>';\n--- check container definition insertion\nSELECT *\nFROM container_definition\nWHERE name = '<containerNameRepository>' AND repository_id = (select id from repository where repository_name = '<repositoryName>' and region = '<region>') AND tag = '<imageTag>';\n--- adds a new service\nBEGIN;\nINSERT INTO service (\"name\", desired_count, subnets, assign_public_ip, cluster_id, task_definition_id, target_group_id)\nVALUES ('<serviceRepositoryName>',<serviceDesiredCount>, (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true and vpc.region = '<region>' limit 3)), 'ENABLED', (SELECT id FROM cluster WHERE cluster_name = '<clusterName>'), (select id from task_definition where family = '<tdRepositoryFamily>' and region = '<region>' order by revision desc limit 1), (SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>' and region = '<region>'));\n\nINSERT INTO service_security_groups (service_id, security_group_id)\nVALUES ((SELECT id FROM service WHERE name = '<serviceRepositoryName>'), (select id from security_group where group_name = '<securityGroup>' and region = '<region>' limit 1));\nCOMMIT;\n--- check service insertion\nSELECT *\nFROM service\nWHERE name = '<serviceRepositoryName>';\n--- check service_security_groups insertion\nSELECT *\nFROM service_security_groups\nWHERE service_id = (SELECT id FROM service WHERE name = '<serviceRepositoryName>');\n--- deletes service\nBEGIN;\ndelete from service_security_groups\nusing service\nwhere name = '<serviceRepositoryName>';\n\ndelete from service\nwhere name = '<serviceRepositoryName>';\nCOMMIT;\n--- deletes container definitons\nbegin;\ndelete from container_definition\nusing task_definition\nwhere container_definition.task_definition_id = task_definition.id and task_definition.family = '<tdRepositoryFamily>';\n\ndelete from task_definition\nwhere family = '<tdRepositoryFamily>';\n\ndelete from repository\nwhere repository_name = '<repositoryName>';\ncommit;\n--- deletes service dependencies\nBEGIN;\nDELETE FROM listener\nWHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>')\nand port =<hostPort>and protocol = 'HTTP' and action_type = 'forward'\nand target_group_id = (SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>');\n\nDELETE FROM load_balancer_security_groups\nWHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>');\n\nDELETE FROM load_balancer\nWHERE load_balancer_name = '<serviceLoadBalancerName>';\n\nDELETE FROM target_group\nWHERE target_group_name = '<serviceTargetGroupName>';\n\nDELETE FROM security_group_rule\nUSING security_group\nWHERE group_name = '<securityGroup>';\n\nDELETE FROM security_group\nWHERE group_name = '<securityGroup>';\nCOMMIT;\n--- tries to update cluster (replace)\nUPDATE cluster SET cluster_name = '<newClusterName>' WHERE cluster_name = '<clusterName>';\n--- deletes the cluster\ndelete from cluster\nwhere cluster_name = '<newClusterName>';\n")),(0,a.kt)("details",{open:"true"},(0,a.kt)("summary",{mdxType:"summary"},"Integrate with aws_ecr public repos"),(0,a.kt)("codeblock",{language:"sql"},"--- installs the ecs module and its dependencies\nSELECT * FROM iasql_install('<modules>');\n--- adds a new cluster\nINSERT INTO cluster (cluster_name)\nVALUES('<clusterName>');\n--- adds service dependencies\nBEGIN;\nINSERT INTO security_group\n(description, group_name)\nVALUES\n('<securityGroup>', '<securityGroup>');\nINSERT INTO security_group_rule\n(is_egress, ip_protocol, from_port, to_port, cidr_ipv4, description, security_group_id)\nSELECT true, '-1', -1, -1, '0.0.0.0/0', '<securityGroup>', id\nFROM security_group\nWHERE group_name = '<securityGroup>';\nINSERT INTO target_group\n(target_group_name, target_type, protocol, port, vpc, health_check_path)\nVALUES\n('<serviceTargetGroupName>', 'ip', 'HTTP',<hostPort>, null, '/health');\nINSERT INTO load_balancer\n(load_balancer_name, scheme, vpc, load_balancer_type, ip_address_type)\nVALUES\n('<serviceLoadBalancerName>', 'internet-facing', null, 'application', 'ipv4');\nINSERT INTO load_balancer_security_groups\n(load_balancer_id, security_group_id)\nVALUES\n((SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>'),\n(SELECT id FROM security_group WHERE group_name = '<securityGroup>' LIMIT 1));\nINSERT INTO listener\n(load_balancer_id, port, protocol, action_type, target_group_id)\nVALUES\n((SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>'),<hostPort>, 'HTTP', 'forward',\n(SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>'));\nCOMMIT;\n--- adds a new public ECR\nINSERT INTO public_repository\n(repository_name)\nVALUES\n('<publicRepositoryName>');\n--- adds a new task definition\nINSERT INTO task_definition (\"family\", cpu_memory)\nVALUES ('<tdPublicRepositoryFamily>', '<tdCpuMem>');\n--- adds a new container definition\nINSERT INTO container_definition (\"name\", public_repository_name, tag, essential, memory_reservation, host_port, container_port, protocol, env_variables, task_definition_id)\nVALUES('<containerNamePublicRepository>', '<publicRepositoryName>', '<imageTag>',<containerEssential>,<containerMemoryReservation>,<hostPort>,<containerPort>, '<protocol>', '{ \"test\": 2}', (select id from task_definition where family = '<tdPublicRepositoryFamily>' and status is null and region = '<region>' limit 1));\n--- check container definition insertion\nSELECT *\nFROM container_definition\nWHERE name = '<containerNamePublicRepository>' AND public_repository_name = '<publicRepositoryName>' AND tag = '<imageTag>';\n--- check task_definition insertion\nSELECT *\nFROM task_definition\nWHERE family = '<tdPublicRepositoryFamily>';\n--- check public_repository insertion\nSELECT *\nFROM public_repository\nWHERE repository_name = '<publicRepositoryName>';\n--- adds a new service\nBEGIN;\nINSERT INTO service (\"name\", desired_count, subnets, assign_public_ip, cluster_id, task_definition_id, target_group_id)\nVALUES ('<servicePublicRepositoryName>',<serviceDesiredCount>, (select array(select subnet_id from subnet inner join vpc on vpc.id = subnet.vpc_id where is_default = true and vpc.region = '<region>' limit 3)), 'ENABLED', (SELECT id FROM cluster WHERE cluster_name = '<clusterName>'), (select id from task_definition where family = '<tdPublicRepositoryFamily>' order by revision desc limit 1), (SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>' and region = '<region>'));\n\nINSERT INTO service_security_groups (service_id, security_group_id)\nVALUES ((SELECT id FROM service WHERE name = '<servicePublicRepositoryName>'), (select id from security_group where group_name = '<securityGroup>' and region = '<region>' limit 1));\nCOMMIT;\n--- check service insertion\nSELECT *\nFROM service\nWHERE name = '<servicePublicRepositoryName>';\n--- deletes service\nBEGIN;\ndelete from service_security_groups\nusing service\nwhere name = '<servicePublicRepositoryName>';\n\ndelete from service\nwhere name = '<servicePublicRepositoryName>';\nCOMMIT;\n--- deletes container definitions\nbegin;\ndelete from container_definition\nusing task_definition\nwhere container_definition.task_definition_id = task_definition.id and task_definition.family = '<tdPublicRepositoryFamily>';\n\ndelete from task_definition\nwhere family = '<tdPublicRepositoryFamily>';\n\ndelete from public_repository\nwhere repository_name = '<publicRepositoryName>';\ncommit;\n--- deletes service dependencies\nBEGIN;\nDELETE FROM listener\nWHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>')\nand port =<hostPort>and protocol = 'HTTP' and action_type = 'forward'\nand target_group_id = (SELECT id FROM target_group WHERE target_group_name = '<serviceTargetGroupName>');\n\nDELETE FROM load_balancer_security_groups\nWHERE load_balancer_id = (SELECT id FROM load_balancer WHERE load_balancer_name = '<serviceLoadBalancerName>');\n\nDELETE FROM load_balancer\nWHERE load_balancer_name = '<serviceLoadBalancerName>';\n\nDELETE FROM target_group\nWHERE target_group_name = '<serviceTargetGroupName>';\n\nDELETE FROM security_group_rule\nUSING security_group\nWHERE group_name = '<securityGroup>';\n\nDELETE FROM security_group\nWHERE group_name = '<securityGroup>';\nCOMMIT;\n--- deletes the cluster\ndelete from cluster\nwhere cluster_name = '<newClusterName>';\n"))))))}m.isMDXComponent=!0}}]);