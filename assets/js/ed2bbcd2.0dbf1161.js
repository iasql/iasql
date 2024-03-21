"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93077],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(a),p=r,b=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),o=a(16550),u=a(91980),i=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),_=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{_&&o(_)}),[_]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var _=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==o&&(d(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function E(e){const t=(0,_.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},21248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),s=a(85162);const o={id:"iasql_platform",title:"iasql_platform",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},u=void 0,i={unversionedId:"modules/builtin/iasql_platform",id:"modules/builtin/iasql_platform",title:"iasql_platform",description:"Tables",source:"@site/docs/modules/builtin/iasql_platform.md",sourceDirName:"modules/builtin",slug:"/modules/builtin/iasql_platform",permalink:"/docs/next/modules/builtin/iasql_platform",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iasql_platform",title:"iasql_platform",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"iasql_functions",permalink:"/docs/next/modules/builtin/iasql_functions"},next:{title:"aws_account",permalink:"/docs/next/modules/aws/aws_account"}},c={},d=[{value:"Tables",id:"tables",level:3},{value:"Enums",id:"enums",level:3}],m={toc:d},p="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{queryString:"view",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"tables"},"Tables"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_platform_entity.IasqlAuditLog"},"iasql_audit_log")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_platform_entity.IasqlTables"},"iasql_tables")),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../builtin/enums/iasql_platform_entity.AuditLogChangeType"},"audit_log_change_type"))),(0,r.kt)(s.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("details",{open:"true"},(0,r.kt)("summary",{mdxType:"summary"},"iasql_audit_log functionality"),(0,r.kt)("codeblock",{language:"sql"},"--- installs the aws_account module\nSELECT * FROM iasql_install('aws_account');\n--- inserts aws credentials\nINSERT INTO aws_credentials (access_key_id, secret_access_key)\nVALUES ('<AWS_ACCESS_KEY_ID>', '<AWS_SECRET_ACCESS_KEY>');\n--- should work with no arguments retrieving all logs\nSELECT * FROM iasql_get_sql_since();\n--- should work with a valid text timestamp\nSELECT * FROM iasql_get_sql_since('2023-01-01T12:00:00');\n--- should work with a dynamic date\nSELECT * FROM iasql_get_sql_since(now() + interval '2 seconds');\n--- installs the aws_elb module\nSELECT * FROM iasql_install('aws_elb');\n--- begin a transaction\nSELECT * FROM iasql_begin();\n--- adds a new load balancer\nBEGIN;\nINSERT INTO load_balancer (load_balancer_name, scheme, vpc, load_balancer_type, ip_address_type, attributes, availability_zones)\nVALUES ('<lbName>', '<lbScheme>', null, '<lbType>', '<lbIPAddressType>', ';\n--- checks sql sub-query tables load_balancer and security_group for load_balancer_security_group join table\nSELECT * FROM iasql_get_sql_since();\n--- checks timestamp update\nSELECT *\nFROM iasql_audit_log\nWHERE change_type = 'INSERT' AND table_name IN ('load_balancer_security_groups', 'load_balancer');\n")),(0,r.kt)("details",{open:"true"},(0,r.kt)("summary",{mdxType:"summary"},"List tables functionality"),(0,r.kt)("codeblock",{language:"sql"},"--- compare iasql_tables with iasql_modules_installed\nSELECT *\nFROM iasql_modules_installed()\nWHERE module_name NOT LIKE 'iasql_%'\nAND module_name != 'aws_sdk'\nAND concat_ws('@', module_name, module_version) NOT IN (SELECT module\nFROM iasql_tables);\n"))))))}b.isMDXComponent=!0}}]);