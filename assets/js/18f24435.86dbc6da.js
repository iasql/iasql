"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=l,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),l=a(67294),r=a(86010),o=a(12466),s=a(16550),i=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,c]=b({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=i??u;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var k=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(u(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(_,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},42943:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));a(74866),a(85162);const r={id:"aws_elb_entity_load_balancer.LoadBalancer",title:"load_balancer",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},o=void 0,s={unversionedId:"modules/aws/tables/aws_elb_entity_load_balancer.LoadBalancer",id:"version-0.1.9/modules/aws/tables/aws_elb_entity_load_balancer.LoadBalancer",title:"load_balancer",description:"Table to manage AWS Load Balancers. Elastic Load Balancing automatically distributes your incoming traffic across multiple targets,",source:"@site/versioned_docs/version-0.1.9/modules/aws/tables/aws_elb_entity_load_balancer.LoadBalancer.md",sourceDirName:"modules/aws/tables",slug:"/modules/aws/tables/aws_elb_entity_load_balancer.LoadBalancer",permalink:"/docs/modules/aws/tables/aws_elb_entity_load_balancer.LoadBalancer",draft:!1,editUrl:null,tags:[],version:"0.1.9",frontMatter:{id:"aws_elb_entity_load_balancer.LoadBalancer",title:"load_balancer",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},i={},c=[{value:"Columns",id:"columns",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Table to manage AWS Load Balancers. Elastic Load Balancing automatically distributes your incoming traffic across multiple targets,\nsuch as EC2 instances, containers, and IP addresses, in one or more Availability Zones."),(0,l.kt)("p",null,"A load balancer serves as the single point of contact for clients. The load balancer distributes incoming application traffic across\nmultiple targets, such as EC2 instances, in multiple Availability Zones. This increases the availability of your application."),(0,l.kt)("p",null,"You add one or more listeners to your load balancer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elasticloadbalancing/"},"https://aws.amazon.com/elasticloadbalancing/")),(0,l.kt)("h2",{id:"columns"},"Columns"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"attributes"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"load_balancer_attribute"),"[]"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"availability","_","zones"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.kt)("p",null,"Reference to the associated availability zones for the load balancer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html")),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"canonical","_","hosted","_","zone","_","id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Hosted zone to route traffic to the load balancer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html"},"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html")),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"created","_","time"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"date")),(0,l.kt)("p",null,"Creation date"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"customer","_","owned","_","ipv4","_","pool"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Reference to an specific pool of address for ipv4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_LoadBalancer.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_LoadBalancer.html")),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"dns","_","name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Custom domain name to associate with your load balancer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html")),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"ip","_","address","_","type"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/aws/enums/aws_elb_entity_load_balancer.IpAddressType"},(0,l.kt)("inlineCode",{parentName:"a"},"ip_address_type"))),(0,l.kt)("p",null,"Whether to expose ipv4 or dual stack"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"load","_","balancer","_","arn"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"AWS ARN that identifies the load balancer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"load","_","balancer","_","name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Name to identify the load balancer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"load","_","balancer","_","type"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/aws/enums/aws_elb_entity_load_balancer.LoadBalancerTypeEnum"},(0,l.kt)("inlineCode",{parentName:"a"},"load_balancer_type"))),(0,l.kt)("p",null,"Type of load balancer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"region"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Region for the load balancer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"scheme"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/aws/enums/aws_elb_entity_load_balancer.LoadBalancerSchemeEnum"},(0,l.kt)("inlineCode",{parentName:"a"},"load_balancer_scheme"))),(0,l.kt)("p",null,"Schema for the load balancer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"security","_","groups"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/aws/tables/aws_security_group_entity.SecurityGroup"},(0,l.kt)("inlineCode",{parentName:"a"},"security_group")),"[]"),(0,l.kt)("p",null,"Reference to the associated security groups for the load balancer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-update-security-groups.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-update-security-groups.html")),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"state"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/aws/enums/aws_elb_entity_load_balancer.LoadBalancerStateEnum"},(0,l.kt)("inlineCode",{parentName:"a"},"load_balancer_state"))),(0,l.kt)("p",null,"Current status of the load balancer"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"subnets"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.kt)("p",null,"Reference to the associated subnets for a load balancer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/subnets-routing.html"},"https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/subnets-routing.html")),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"vpc"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/aws/tables/aws_vpc_entity_vpc.Vpc"},(0,l.kt)("inlineCode",{parentName:"a"},"vpc"))),(0,l.kt)("p",null,"Reference to the VPC associated with the load balancer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"See"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/new-aws-elastic-load-balancing-inside-of-a-virtual-private-cloud/"},"https://aws.amazon.com/blogs/aws/new-aws-elastic-load-balancing-inside-of-a-virtual-private-cloud/")))}d.isMDXComponent=!0}}]);