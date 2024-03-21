"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||l;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(87462),a=n(67294),l=n(86010),s=n(12466),i=n(16550),o=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=f(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=d({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),_=(()=>{const e=o??p;return b({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{_&&i(_)}),[_]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var _=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function q(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),o(r))},b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:f},s,{className:(0,l.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(q,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function g(e){const t=(0,_.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},34010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),s=n(85162);const i={id:"iasql_functions_rpcs",title:"iasql_functions_rpcs",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},o=void 0,u={unversionedId:"modules/builtin/iasql_functions_rpcs",id:"version-0.1.9/modules/builtin/iasql_functions_rpcs",title:"iasql_functions_rpcs",description:"Functions",source:"@site/versioned_docs/version-0.1.9/modules/builtin/iasql_functions_rpcs.md",sourceDirName:"modules/builtin",slug:"/modules/builtin/iasql_functions_rpcs",permalink:"/docs/modules/builtin/iasql_functions_rpcs",draft:!1,editUrl:null,tags:[],version:"0.1.9",frontMatter:{id:"iasql_functions_rpcs",title:"iasql_functions_rpcs",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},c={},p=[{value:"Functions",id:"functions",level:3}],f={toc:p},b="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{queryString:"view",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_begin.IasqlBegin"},"iasql_begin")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_commit.IasqlCommit"},"iasql_commit")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_create_review.IasqlCreateReview"},"iasql_create_review")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_get_errors.IasqlGetErrors"},"iasql_get_errors")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_get_sql_for_transaction.IasqlGetSqlForTransaction"},"iasql_get_sql_for_transaction")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_get_sql_since.IasqlGetSqlSince"},"iasql_get_sql_since")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_help.IasqlHelp"},"iasql_help")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_install.IasqlInstall"},"iasql_install")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_modules_list.IasqlModulesList"},"iasql_modules_list")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_preview.IasqlPreview"},"iasql_preview")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_rollback.IasqlRollback"},"iasql_rollback")),(0,a.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"../../builtin/tables/iasql_functions_rpcs_iasql_uninstall.IasqlUninstall"},"iasql_uninstall"))),(0,a.kt)(s.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"})))}d.isMDXComponent=!0}}]);