"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9058],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),E=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=E(e.components);return a.createElement(o.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=E(t),u=i,_=l["".concat(o,".").concat(u)]||l[u]||d[u]||c;return t?a.createElement(_,r(r({ref:n},p),{},{components:t})):a.createElement(_,r({ref:n},p))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,r=new Array(c);r[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[l]="string"==typeof e?e:i,r[1]=s;for(var E=2;E<c;E++)r[E]=t[E];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),i=t(86010);const c={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(c.tabItem,r),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(87462),i=t(67294),c=t(86010),r=t(12466),s=t(16550),o=t(91980),E=t(67392),p=t(50012);function l(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,E.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function _(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),c=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(c),(0,i.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(a.location.search);n.set(c,e),a.replace({...a.location,search:n.toString()})}),[c,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,c=d(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:c}))),[o,E]=_({queryString:t,groupId:a}),[l,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,c]=(0,p.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&c.set(e)}),[t,c])]}({groupId:a}),R=(()=>{const e=o??l;return u({value:e,tabValues:c})?e:null})();(0,i.useLayoutEffect)((()=>{R&&s(R)}),[R]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);s(e),E(e),b(e)}),[E,b,c]),tabValues:c}}var R=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:E}=e;const p=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=E[t].value;a!==s&&(l(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},n)},E.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>p.push(e),onKeyDown:u,onClick:d},r,{className:(0,c.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n})}),t??n)})))}function m(e){let{lazy:n,children:t,selectedValue:a}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},c.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=b(e);return i.createElement("div",{className:(0,c.Z)("tabs-container",g.tabList)},i.createElement(v,(0,a.Z)({},e,n)),i.createElement(m,(0,a.Z)({},e,n)))}function k(e){const n=(0,R.Z)();return i.createElement(T,(0,a.Z)({key:String(n)},e))}},57508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>E,toc:()=>l});var a=t(87462),i=(t(67294),t(3905)),c=t(74866),r=t(85162);const s={id:"aws_vpc",title:"aws_vpc",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},o=void 0,E={unversionedId:"modules/aws/aws_vpc",id:"modules/aws/aws_vpc",title:"aws_vpc",description:"Tables",source:"@site/docs/modules/aws/aws_vpc.md",sourceDirName:"modules/aws",slug:"/modules/aws/aws_vpc",permalink:"/docs/next/modules/aws/aws_vpc",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_vpc",title:"aws_vpc",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"aws_sqs",permalink:"/docs/next/modules/aws/aws_sqs"},next:{title:"ssh_accounts",permalink:"/docs/next/modules/ssh/ssh_accounts"}},p={},l=[{value:"Tables",id:"tables",level:3},{value:"Enums",id:"enums",level:3}],d={toc:l},u="wrapper";function _(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{queryString:"view",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,i.kt)("h3",{id:"tables"},"Tables"),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_availability_zone.AvailabilityZone"},"availability_zone")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_dhcp_options.DhcpOptions"},"dhcp_options")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_elastic_ip.ElasticIp"},"elastic_ip")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_endpoint_gateway.EndpointGateway"},"endpoint_gateway")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_endpoint_interface.EndpointInterface"},"endpoint_interface")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_internet_gateway.InternetGateway"},"internet_gateway")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_nat_gateway.NatGateway"},"nat_gateway")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_network_acl.NetworkAcl"},"network_acl")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_peering_connection.PeeringConnection"},"peering_connection")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_route.Route"},"route")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_route_table.RouteTable"},"route_table")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_route_table_association.RouteTableAssociation"},"route_table_association")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_subnet.Subnet"},"subnet")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_vpc.Vpc"},"vpc")),(0,i.kt)("h3",{id:"enums"},"Enums"),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_endpoint_gateway.EndpointGatewayService"},"endpoint_gateway_service")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_endpoint_interface.EndpointInterfaceService"},"endpoint_interface_service")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_nat_gateway.ConnectivityType"},"connectivity_type")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_nat_gateway.NatGatewayState"},"nat_gateway_state")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_peering_connection.PeeringConnectionState"},"peering_connection_state")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_subnet.SubnetState"},"subnet_state")),(0,i.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,i.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_vpc.VpcState"},"vpc_state"))),(0,i.kt)(r.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("details",{open:"true"},(0,i.kt)("summary",{mdxType:"summary"},"Manage VPCs"),(0,i.kt)("codeblock",{language:"sql"},"--- installs the vpc module\nSELECT * FROM iasql_install('<modules>');\n--- adds a new vpc\nINSERT INTO vpc (cidr_block, tags, enable_dns_hostnames, enable_dns_support)\nVALUES ('192.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>-1\"}', true, true);\n--- adds a subnet\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block)\nSELECT (SELECT name FROM availability_zone WHERE region = '<region>' LIMIT 1), id, '192.<randIPBlock>.0.0/16'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- tries to update vpc tags\nUPDATE vpc SET tags = '{\"name\": \"<prefix>-2\"}' WHERE cidr_block='192.<randIPBlock>.0.0/16';\n--- checks that tags have been modified\nSELECT * FROM vpc WHERE cidr_block='192.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2';\n--- creates new DHCP options\nINSERT INTO dhcp_options (dhcp_configurations, tags) VALUES ('[{\"Key\":\"domain-name\",\"Values\":[{\"Value\":\"test-domain.com\"}]},{\"Key\":\"domain-name-servers\",\"Values\":[{\"Value\":\"8.8.8.8\"}]}]', '{\"name\":\"<prefix>-1\"}');\n--- checks addition of dhcp options\nSELECT *\nFROM dhcp_options\nWHERE tags ->> 'name' = '<prefix>-1';\n--- associates option with VPC\nUPDATE vpc SET dhcp_options_id = (SELECT id FROM dhcp_options WHERE tags ->> 'name' = '<prefix>-1') WHERE tags ->> 'name' = '<prefix>-2';;\n--- checks that VPC has the correct dhcp options\nSELECT dhcp_options_id FROM vpc WHERE tags ->> 'name' = '<prefix>-2' AND dhcp_options_id = (SELECT id FROM dhcp_options WHERE tags ->> 'name' = '<prefix>-1');\n--- sets the default dhcp options for the vpc\nUPDATE vpc SET dhcp_options_id = NULL WHERE tags ->> 'name' = '<prefix>-2';;\n--- deletes the dhcp options\nDELETE FROM dhcp_options WHERE tags ->> 'name' = '<prefix>-1';\n--- checks removal of dhcp options\nSELECT *\nFROM dhcp_options\nWHERE tags ->> 'name' = '<prefix>-1';\n--- tries to update vpc cidr\nUPDATE subnet SET cidr_block='191.<randIPBlock>.0.0/16' WHERE cidr_block='192.<randIPBlock>.0.0/16';\nUPDATE vpc SET cidr_block='191.<randIPBlock>.0.0/16' WHERE cidr_block='192.<randIPBlock>.0.0/16';\n--- checks that cidr have been modified\nSELECT * FROM vpc WHERE cidr_block='191.<randIPBlock>.0.0/16';\n--- creates a second vpc in another region\nINSERT INTO vpc (cidr_block, tags, enable_dns_hostnames, enable_dns_support, region)\nVALUES ('176.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>-peering-vpc\"}', true, true, 'us-east-1');\n--- adds a subnet to the vpc\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block, region)\nSELECT 'us-east-1a', id, '176.<randIPBlock>.1.0/24', 'us-east-1'\nFROM vpc\nWHERE tags ->> 'name' = '<prefix>-peering-vpc';\n--- creates a peering connection between the first and second vpc\nINSERT INTO peering_connection (requester_id, accepter_id, tags)\nVALUES ((SELECT id FROM vpc WHERE tags ->> 'name' = '<prefix>-2'),\n(SELECT id FROM vpc WHERE tags ->> 'name' = '<prefix>-peering-vpc'),\n'{\"name\": \"<prefix>-peering-connection-test\"}');\n--- checks the state for peering connection is active\nSELECT state\nFROM peering_connection\nWHERE tags ->> 'name' = '<prefix>-peering-connection-test';\n--- checks if routes from requester to accepter is added\nSELECT destination\nFROM route\nWHERE vpc_peering_connection_id = (SELECT peering_connection_id\nFROM peering_connection\nWHERE tags ->> 'name' = '<prefix>-peering-connection-test');\n--- changes the tags for the peering connection\nUPDATE peering_connection\nSET tags = '{\"name\": \"<prefix>-peering-connection-test-changed\"}'\nWHERE tags ->> 'name' = '<prefix>-peering-connection-test';\n--- checks the peering connection tags are changed\nSELECT *\nFROM peering_connection\nWHERE tags ->> 'name' = '<prefix>-peering-connection-test-changed';\n--- deletes the peering connection\nDELETE\nFROM peering_connection\nWHERE tags ->> 'name' = '<prefix>-peering-connection-test-changed';\n--- checks deletion of the peering connection\nSELECT *\nFROM peering_connection\nWHERE tags ->> 'name' = '<prefix>-peering-connection-test';\n--- deletes the subnet\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '191.<randIPBlock>.0.0/16'\n)\nDELETE FROM subnet\nUSING vpc\nWHERE vpc_id = vpc.id;\n--- deletes the vpc\nDELETE FROM security_group_rule\nWHERE security_group_id = (\nSELECT id\nFROM security_group\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n)\n);\nDELETE FROM route_table_association\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n);\nDELETE FROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n);\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n)\nDELETE FROM security_group\nUSING vpc\nWHERE vpc_id = vpc.id;\n\nDELETE FROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16';\n")),(0,i.kt)("details",{open:"true"},(0,i.kt)("summary",{mdxType:"summary"},"Manage Elastic IPs and NAT Gateways"),(0,i.kt)("codeblock",{language:"sql"},"--- installs the vpc module\nSELECT * FROM iasql_install('<modules>');\n--- adds a new vpc\nINSERT INTO vpc (cidr_block, tags, enable_dns_hostnames, enable_dns_support)\nVALUES ('192.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>-1\"}', true, true);\n--- check vpc is available\nSELECT * FROM vpc WHERE cidr_block='192.<randIPBlock>.0.0/16' AND state='available';\n--- check vpc has the right attributes\nSELECT * FROM vpc WHERE tags ->> 'name' = '<prefix>-1' AND enable_dns_hostnames and enable_dns_support;\n--- adds a subnet\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block)\nSELECT (SELECT name FROM availability_zone WHERE region = '<region>' LIMIT 1), id, '192.<randIPBlock>.0.0/16'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- adds a new elastic ip\nINSERT INTO elastic_ip (tags)\nVALUES ('{\"name\": \"<eip>\"}');\n--- check elastic ip count\nSELECT * FROM elastic_ip WHERE tags ->> 'name' = '<eip>';\n--- adds a private nat gateway\nINSERT INTO nat_gateway (connectivity_type, subnet_id, tags)\nSELECT 'private', id, '{\"Name\":\"<ng>\"}'\nFROM subnet\nWHERE cidr_block = '192.<randIPBlock>.0.0/16';\n--- checks private nat gateway count\nSELECT * FROM nat_gateway WHERE tags ->> 'Name' = '<ng>';\n--- adds a public nat gateway with existing elastic ip\nINSERT INTO nat_gateway (connectivity_type, subnet_id, tags, elastic_ip_id)\nSELECT 'public', subnet.id, '{\"Name\":\"<pubNg1>\"}', elastic_ip.id\nFROM subnet, elastic_ip\nWHERE cidr_block = '192.<randIPBlock>.0.0/16' AND elastic_ip.tags ->> 'name' = '<eip>';\n--- checks public nat gateway with existing elastic ip count\nSELECT * FROM nat_gateway WHERE tags ->> 'Name' = '<pubNg1>';\n--- adds a public nat gateway with no existing elastic ip\nINSERT INTO nat_gateway (connectivity_type, subnet_id, tags)\nSELECT 'public', subnet.id, '{\"Name\":\"<pubNg2>\"}'\nFROM subnet\nWHERE cidr_block = '192.<randIPBlock>.0.0/16';\n--- checks public nat gateway with no existing elastic ip count\nSELECT * FROM nat_gateway WHERE tags ->> 'Name' = '<pubNg2>';\n--- checks elastic IP count\nSELECT * FROM elastic_ip WHERE tags ->> 'Name' = '<pubNg2>';\n--- updates a elastic ip\nUPDATE elastic_ip\nSET tags = '{\"name\": \"<eip>\", \"updated\": \"true\"}'\nWHERE tags ->> 'name' = '<eip>';\n--- check elastic ip count\nSELECT * FROM elastic_ip WHERE tags ->> 'name' = '<eip>';\n--- updates a public nat gateway with existing elastic ip to be private\nUPDATE nat_gateway\nSET elastic_ip_id = NULL, connectivity_type = 'private'\nWHERE nat_gateway.tags ->> 'Name' = '<pubNg1>';\n--- checks public nat gateway with existing elastic ip to be private count\nSELECT * FROM nat_gateway WHERE tags ->> 'Name' = '<pubNg1>';\n--- updates a public nat gateway with no existing elastic ip\nUPDATE nat_gateway\nSET elastic_ip_id = elastic_ip.id, tags = '{\"Name\": \"<pubNg2>\", \"updated\": \"true\"}'\nFROM elastic_ip\nWHERE nat_gateway.tags ->> 'Name' = '<pubNg2>' AND elastic_ip.tags ->> 'name' = '<eip>';\n--- checks public nat gateway with no existing elastic ip count\nSELECT * FROM nat_gateway WHERE tags ->> 'Name' = '<pubNg2>';\n--- deletes a public nat gateways\nDELETE FROM nat_gateway\nWHERE tags ->> 'Name' = '<pubNg1>' OR tags ->> 'Name' = '<pubNg2>';\n--- checks public nat gateways count\nSELECT * FROM nat_gateway WHERE tags ->> 'Name' = '<pubNg1>' OR tags ->> 'Name' = '<pubNg2>';\n--- deletes a elastic ip created by the nat gateway\nDELETE FROM elastic_ip\nWHERE tags ->> 'Name' = '<pubNg2>';\n--- deletes a elastic ip\nDELETE FROM elastic_ip\nWHERE tags ->> 'name' = '<eip>';\n--- deletes a private nat gateway\nDELETE FROM nat_gateway\nWHERE tags ->> 'Name' = '<ng>';\n--- deletes the subnet\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16'\n)\nDELETE FROM subnet\nUSING vpc\nWHERE vpc_id = vpc.id;\n--- deletes the vpc\nDELETE FROM security_group_rule\nWHERE security_group_id = (\nSELECT id\nFROM security_group\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\n);\nDELETE FROM route_table_association\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n);\nDELETE FROM route\nWHERE route_table_id = (\nSELECT id\nFROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\n);\nDELETE FROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n);\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\nDELETE FROM security_group\nUSING vpc\nWHERE vpc_id = vpc.id;\n\nDELETE FROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16';\n")),(0,i.kt)("details",{open:"true"},(0,i.kt)("summary",{mdxType:"summary"},"Manage Endpoint Gateways"),(0,i.kt)("codeblock",{language:"sql"},"--- installs the vpc module\nSELECT * FROM iasql_install('<modules>');\n--- adds a new vpc\nINSERT INTO vpc (cidr_block, tags, enable_dns_hostnames, enable_dns_support)\nVALUES ('192.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>-1\"}', true, true);\n--- adds a subnet\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block)\nSELECT (SELECT name FROM availability_zone WHERE region = '<region>' LIMIT 1), id, '192.<randIPBlock>.0.0/16'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- adds a new s3 endpoint gateway\nINSERT INTO endpoint_gateway (service, vpc_id, tags)\nSELECT 's3', id, '{\"Name\": \"<s3VpcEndpoint>\"}'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- checks endpoint gateway count\nSELECT * FROM endpoint_gateway WHERE tags ->> 'Name' = '<s3VpcEndpoint>';\n--- checks endpoint gateway count\nSELECT * FROM endpoint_gateway WHERE tags ->> 'Name' = '<s3VpcEndpoint>';\n--- updates a endpoint gateway policy\nUPDATE endpoint_gateway\nSET policy = '<s3VpcEndpoint>'\nWHERE tags ->> 'Name' = '';\n--- checks endpoint_gateway policy update\nSELECT * FROM endpoint_gateway WHERE tags ->> 'Name' = '<s3VpcEndpoint>';\n--- updates a endpoint gateway tags\nUPDATE endpoint_gateway\nSET tags = '{\"Name\": \"<s3VpcEndpoint>\", \"updated\": \"true\"}'\nWHERE tags ->> 'Name' = '<s3VpcEndpoint>';\n--- checks endpoint_gateway policy update\nSELECT * FROM endpoint_gateway WHERE tags ->> 'Name' = '<s3VpcEndpoint>';\n--- deletes a endpoint_gateway\nDELETE FROM endpoint_gateway\nWHERE tags ->> 'Name' = '<dynamodbVpcEndpoint>';\n--- deletes the subnet\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16'\n)\nDELETE FROM subnet\nUSING vpc\nWHERE vpc_id = vpc.id;\n--- deletes the vpc\nDELETE FROM security_group_rule\nWHERE security_group_id = (\nSELECT id\nFROM security_group\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\n);\nDELETE FROM route_table_association\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n);\nDELETE FROM route\nWHERE route_table_id = (\nSELECT id\nFROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\n);\nDELETE FROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n);\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\nDELETE FROM security_group\nUSING vpc\nWHERE vpc_id = vpc.id;\n\nDELETE FROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16';\n")),(0,i.kt)("details",{open:"true"},(0,i.kt)("summary",{mdxType:"summary"},"Manage Endpoint Interfaces"),(0,i.kt)("codeblock",{language:"sql"},"--- installs the vpc module\nSELECT * FROM iasql_install('<modules>');\n--- adds a new vpc\nINSERT INTO vpc (cidr_block, tags, enable_dns_hostnames, enable_dns_support)\nVALUES ('192.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>-1\"}', true, true);\n--- adds a subnet\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block)\nSELECT (SELECT name FROM availability_zone WHERE region = '<region>' LIMIT 1), id, '192.<randIPBlock>.0.0/16'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- adds a new lambda endpoint interface\nINSERT INTO endpoint_interface (service, vpc_id, tags)\nSELECT 'lambda', id, '{\"Name\": \"<lambdaVpcEndpoint>\"}'\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- checks endpoint interface count\nSELECT * FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>';\n--- checks endpoint interface default subnet count\nSELECT * FROM endpoint_interface_subnets WHERE endpoint_interface_id=(SELECT id FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>');\n--- queries the vpcs to confirm the record is present\nSELECT * FROM vpc WHERE cidr_block = '192.<randIPBlock>.0.0/16';\n--- updates a endpoint interface policy\nUPDATE endpoint_interface\nSET policy = '<lambdaVpcEndpoint>'\nWHERE tags ->> 'Name' = '';\n--- checks endpoint_interface count\nSELECT * FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>';\n--- updates a endpoint interface tags\nUPDATE endpoint_interface\nSET tags = '{\"Name\": \"<lambdaVpcEndpoint>\", \"updated\": \"true\"}'\nWHERE tags ->> 'Name' = '<lambdaVpcEndpoint>';\n--- checks endpoint_interface count\nSELECT * FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>';\n--- removes the current endpoint subnets\nDELETE FROM endpoint_interface_subnets where endpoint_interface_id=(SELECT id FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>');\n--- adds new endpoint subnet\nINSERT INTO endpoint_interface_subnets (endpoint_interface_id, subnet_id) VALUES ((SELECT id FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>' LIMIT 1),\n(SELECT subnet.id FROM subnet INNER JOIN vpc ON vpc.id=subnet.vpc_id WHERE subnet.cidr_block='192.<randIPBlock>.0.0/16' LIMIT 1));\n--- checks endpoint_interface subnet count\nSELECT * FROM endpoint_interface_subnets WHERE endpoint_interface_id=(SELECT id FROM endpoint_interface WHERE tags ->> 'Name' = '<lambdaVpcEndpoint>');\n--- deletes a endpoint_interface\nDELETE FROM endpoint_interface\nWHERE tags ->> 'Name' = '<lambdaVpcEndpoint>';\n--- deletes the subnet\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16'\n)\nDELETE FROM subnet\nUSING vpc\nWHERE vpc_id = vpc.id;\n--- deletes the vpc\nDELETE FROM security_group_rule\nWHERE security_group_id = (\nSELECT id\nFROM security_group\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\n);\nDELETE FROM route_table_association\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n);\nDELETE FROM route\nWHERE route_table_id = (\nSELECT id\nFROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\n);\nDELETE FROM route_table\nWHERE vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n);\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16'\n)\nDELETE FROM security_group\nUSING vpc\nWHERE vpc_id = vpc.id;\n\nDELETE FROM vpc\nWHERE cidr_block = '192.<randIPBlock>.0.0/16';\n")),(0,i.kt)("details",{open:"true"},(0,i.kt)("summary",{mdxType:"summary"},"Manage Routing tables"),(0,i.kt)("codeblock",{language:"sql"},"--- installs the vpc module\nSELECT * FROM iasql_install('aws_vpc');\n--- checks each vpc has at least a route table\nSELECT vpc.vpc_id, COUNT(rt) as rt_count\nFROM vpc\nLEFT JOIN route_table rt on vpc.id = rt.vpc_id\nGROUP BY vpc.vpc_id;\n--- creates a new vpc\nINSERT INTO vpc (cidr_block, tags, region)\nVALUES ('10.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>\"}', '<region>');\n--- adds a subnet to the vpc\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block, region)\nSELECT (SELECT name FROM availability_zone WHERE region = '<region>' ORDER BY 1 DESC LIMIT 1),\nid,\n'10.<randIPBlock>.1.0/24',\n'<region>'\nFROM vpc\nWHERE tags ->> 'name' = '<prefix>';\n--- adds a new route table to the vpc in the region\nINSERT INTO route_table (vpc_id, tags, region)\nVALUES ((SELECT id FROM vpc WHERE tags ->> 'name' = '<prefix>'), '{\"name\":\"<prefix>\"}',\n'<region>');\n--- confirms that the default route is created\nSELECT *\nFROM route\nWHERE route_table_id = (SELECT id FROM route_table WHERE tags ->> 'name' = '<prefix>');\n--- checks there is no association for the route table\nSELECT *\nFROM route_table_association\nWHERE route_table_id = (SELECT id FROM route_table WHERE tags ->> 'name' = '<prefix>');\n--- associates the route table to the subnet\nINSERT INTO route_table_association (route_table_id, vpc_id, subnet_id)\nVALUES ((SELECT id FROM route_table WHERE tags ->> 'name' = '<prefix>'),\n(SELECT id FROM vpc WHERE tags ->> 'name' = '<prefix>'),\n(SELECT id\nFROM subnet\nWHERE cidr_block = '10.<randIPBlock>.1.0/24'\nAND availability_zone =\n(SELECT name FROM availability_zone WHERE region = '<region>' ORDER BY 1 DESC LIMIT 1)));\n--- checks whether the route table is associated to the subnet\nSELECT *\nFROM route_table_association\nWHERE route_table_id = (SELECT id FROM route_table WHERE tags ->> 'name' = '<prefix>');\n--- deletes the association\nDELETE\nFROM route_table_association\nWHERE route_table_id = (SELECT id FROM route_table WHERE tags ->> 'name' = '<prefix>');\n--- deletes the route table\nDELETE\nFROM route_table\nWHERE tags ->> 'name' = '<prefix>';\n--- deletes the subnet and vpc\nDELETE\nFROM subnet\nWHERE vpc_id = (SELECT id FROM vpc WHERE tags ->> 'name' = '<prefix>');\n\nDELETE\nFROM vpc\nWHERE tags ->> 'name' = '<prefix>';\n")),(0,i.kt)("details",{open:"true"},(0,i.kt)("summary",{mdxType:"summary"},"Manage Network ACLs"),(0,i.kt)("codeblock",{language:"sql"},"--- installs the vpc module\nSELECT * FROM iasql_install('<modules>');\n--- adds a new vpc\nINSERT INTO vpc (cidr_block, tags, enable_dns_hostnames, enable_dns_support)\nVALUES ('192.<randIPBlock>.0.0/16', '{\"name\":\"<prefix>-1\"}', true, true);\n--- adds a new network ACL\nINSERT INTO network_acl (vpc_id, entries, tags)\nVALUES ((SELECT id FROM vpc WHERE  tags ->> 'name' = '<prefix>-1'), '[]', '{\"name\":\"<prefix>-1\"}');\n--- adds a subnet\nINSERT INTO subnet (availability_zone, vpc_id, cidr_block, network_acl_id)\nSELECT (SELECT name FROM availability_zone WHERE region = '<region>' LIMIT 1), id, '192.<randIPBlock>.0.0/16',\n(SELECT id FROM network_acl WHERE  tags ->> 'name' = '<prefix>-1')\nFROM vpc\nWHERE is_default = false\nAND cidr_block = '192.<randIPBlock>.0.0/16';\n--- adds a new network ACL\nINSERT INTO network_acl (vpc_id, entries, tags)\nVALUES ((SELECT id FROM vpc WHERE  tags ->> 'name' = '<prefix>-1'), '[]', '{\"name\":\"<prefix>-2\"}');\n--- updates subnet to use default acl\nUPDATE subnet SET network_acl_id = NULL WHERE vpc_id=(SELECT id FROM vpc WHERE tags ->>'name' = '<prefix>-1') AND\ncidr_block = '192.<randIPBlock>.0.0/16';\n--- updates subnet to use a different acl\nUPDATE subnet SET network_acl_id = (SELECT id FROM network_acl WHERE tags ->> 'name' = '<prefix>-2') WHERE vpc_id=(SELECT id FROM vpc WHERE tags ->>'name' = '<prefix>-1') AND\ncidr_block = '192.<randIPBlock>.0.0/16';\n--- deletes the vpc\nDELETE FROM security_group_rule\nWHERE security_group_id = (\nSELECT id\nFROM security_group\nWHERE security_group.vpc_id = (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n)\n);\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n)\nDELETE FROM security_group\nUSING vpc\nWHERE vpc_id = vpc.id;\n\nWITH vpc as (\nSELECT id\nFROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16' AND tags ->> 'name' = '<prefix>-2'\n)\nDELETE FROM subnet\nUSING vpc WHERE vpc_id = vpc.id;\n\nDELETE FROM vpc\nWHERE cidr_block = '191.<randIPBlock>.0.0/16';\n"))))))}_.isMDXComponent=!0}}]);