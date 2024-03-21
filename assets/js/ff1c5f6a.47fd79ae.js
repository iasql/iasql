"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(b,u(u({ref:t},i),{},{components:r})):n.createElement(b,u({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,u[1]=s;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),o=r(86010),u=r(12466),s=r(16550),l=r(91980),c=r(67392),i=r(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[u,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=b({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),_=(()=>{const e=l??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{_&&s(_)}),[_]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var _=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:m}=(0,u.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==s&&(m(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:d},u,{className:(0,o.Z)("tabs__item",y.tabItem,u?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,_.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},51381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),u=r(85162);const s={id:"aws_memory_db",title:"aws_memory_db",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},l=void 0,c={unversionedId:"modules/aws/aws_memory_db",id:"modules/aws/aws_memory_db",title:"aws_memory_db",description:"Tables",source:"@site/docs/modules/aws/aws_memory_db.md",sourceDirName:"modules/aws",slug:"/modules/aws/aws_memory_db",permalink:"/docs/next/modules/aws/aws_memory_db",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_memory_db",title:"aws_memory_db",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"aws_lambda",permalink:"/docs/next/modules/aws/aws_lambda"},next:{title:"aws_opensearch",permalink:"/docs/next/modules/aws/aws_opensearch"}},i={},m=[{value:"Tables",id:"tables",level:3},{value:"Enums",id:"enums",level:3}],d={toc:m},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{queryString:"view",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",{id:"tables"},"Tables"),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_memory_db_entity_memory_db_cluster.MemoryDBCluster"},"memory_db_cluster")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/tables/aws_memory_db_entity_subnet_group.SubnetGroup"},"subnet_group")),(0,a.kt)("h3",{id:"enums"},"Enums"),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../aws/enums/aws_memory_db_entity_memory_db_cluster.NodeTypeEnum"},"node_type"))),(0,a.kt)(u.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("details",{open:"true"},(0,a.kt)("summary",{mdxType:"summary"},"Manage Memory DB"),(0,a.kt)("codeblock",{language:"sql"},"--- installs the memory db module\nSELECT * FROM iasql_install('<modules>');\n--- creates a subnet group\nINSERT INTO subnet_group (subnet_group_name)\nVALUES ('<subnetGroupName>');\n--- checks the subnet group was added\nSELECT *\nFROM subnet_group\nWHERE subnet_group_name = '<subnetGroupName>';\n--- changes the subnet group description\nUPDATE subnet_group\nSET description = 'Short desc'\nWHERE subnet_group_name = '<subnetGroupName>';\n--- creates a memory db cluster\nINSERT INTO memory_db_cluster (cluster_name, subnet_group_id)\nVALUES ('<clusterName>', (select id from subnet_group where subnet_group_name = '<subnetGroupName>'));\n\nINSERT INTO memory_db_cluster_security_groups (security_group_id, memory_db_cluster_id, region)\nVALUES ((select id from security_group where group_name = 'default' and region = '<region>'), (select id from memory_db_cluster where cluster_name = '<clusterName>'), '<region>');\n--- checks the memory db cluster was added\nSELECT *\nFROM memory_db_cluster\nWHERE cluster_name = '<clusterName>';\n--- changes the cluster description\nUPDATE memory_db_cluster\nSET description = 'Short desc'\nWHERE cluster_name = '<clusterName>';\n--- removes the memory db cluster\nDELETE FROM memory_db_cluster\nWHERE cluster_name = '<clusterName>';\n--- removes the subnet group\nDELETE FROM subnet_group\nWHERE subnet_group_name = '<subnetGroupName>';\n"))))))}b.isMDXComponent=!0}}]);