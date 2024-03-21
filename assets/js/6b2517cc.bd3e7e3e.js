"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),_=r,m=p["".concat(u,".").concat(_)]||p[_]||d[_]||l;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=_;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),o=a(16550),u=a(91980),i=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function _(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!_({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=u??p;return _({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!_({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var b=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==o&&(p(t),u(n))},_=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:_,onClick:d},s,{className:(0,l.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},82353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),s=a(85162);const o={id:"aws_vpc_entity",title:"aws_vpc_entity",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},u=void 0,i={unversionedId:"modules/aws/aws_vpc_entity",id:"modules/aws/aws_vpc_entity",title:"aws_vpc_entity",description:"Tables",source:"@site/docs/modules/aws/aws_vpc_entity.md",sourceDirName:"modules/aws",slug:"/modules/aws/aws_vpc_entity",permalink:"/docs/next/modules/aws/aws_vpc_entity",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_vpc_entity",title:"aws_vpc_entity",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},c={},p=[{value:"Tables",id:"tables",level:3},{value:"Enums",id:"enums",level:3}],d={toc:p},_="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(_,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{queryString:"view",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"tables"},"Tables"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_availability_zone.AvailabilityZone"},"availability_zone")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_dhcp_options.DhcpOptions"},"dhcp_options")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_elastic_ip.ElasticIp"},"elastic_ip")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_endpoint_gateway.EndpointGateway"},"endpoint_gateway")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_endpoint_interface.EndpointInterface"},"endpoint_interface")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_internet_gateway.InternetGateway"},"internet_gateway")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_nat_gateway.NatGateway"},"nat_gateway")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_network_acl.NetworkAcl"},"network_acl")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_peering_connection.PeeringConnection"},"peering_connection")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_route.Route"},"route")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_route_table.RouteTable"},"route_table")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_route_table_association.RouteTableAssociation"},"route_table_association")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_subnet.Subnet"},"subnet")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_vpc_entity_vpc.Vpc"},"vpc")),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_endpoint_gateway.EndpointGatewayService"},"endpoint_gateway_service")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_endpoint_interface.EndpointInterfaceService"},"endpoint_interface_service")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_nat_gateway.ConnectivityType"},"connectivity_type")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_nat_gateway.NatGatewayState"},"nat_gateway_state")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_peering_connection.PeeringConnectionState"},"peering_connection_state")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_subnet.SubnetState"},"subnet_state")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_vpc_entity_vpc.VpcState"},"vpc_state"))),(0,r.kt)(s.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"})))}m.isMDXComponent=!0}}]);