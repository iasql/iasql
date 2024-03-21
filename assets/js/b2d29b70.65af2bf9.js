"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(f,s(s({ref:t},i),{},{components:a})):r.createElement(f,s({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:n,s[1]=u;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(87462),n=a(67294),l=a(86010),s=a(12466),u=a(16550),o=a(91980),c=a(67392),i=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,c]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var h=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=i.indexOf(t),r=c[a].value;r!==u&&(d(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":u===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function _(e){const t=(0,h.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},21517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),s=a(85162);const u={id:"aws_elasticache",title:"aws_elasticache",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},o=void 0,c={unversionedId:"modules/aws/aws_elasticache",id:"modules/aws/aws_elasticache",title:"aws_elasticache",description:"Tables",source:"@site/docs/modules/aws/aws_elasticache.md",sourceDirName:"modules/aws",slug:"/modules/aws/aws_elasticache",permalink:"/docs/next/modules/aws/aws_elasticache",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_elasticache",title:"aws_elasticache",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"aws_ecs_simplified",permalink:"/docs/next/modules/aws/aws_ecs_simplified"},next:{title:"aws_elb",permalink:"/docs/next/modules/aws/aws_elb"}},i={},d=[{value:"Tables",id:"tables",level:3},{value:"Enums",id:"enums",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{queryString:"view",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,n.kt)("h3",{id:"tables"},"Tables"),(0,n.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,n.kt)("a",{parentName:"p",href:"../../aws/tables/aws_elasticache_entity_cache_cluster.CacheCluster"},"cache_cluster")),(0,n.kt)("h3",{id:"enums"},"Enums"),(0,n.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,n.kt)("a",{parentName:"p",href:"../../aws/enums/aws_elasticache_entity_cache_cluster.Engine"},"engine"))),(0,n.kt)(s.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("details",{open:"true"},(0,n.kt)("summary",{mdxType:"summary"},"Manage Elasticache"),(0,n.kt)("codeblock",{language:"sql"},"--- installs the elasticache module\nSELECT * FROM iasql_install('<modules>');\n--- check cache_cluster is available\nSELECT * FROM cache_cluster WHERE cluster_id='<clusterId>';\n--- deletes the cache_cluster\nDELETE FROM cache_cluster\nWHERE cluster_id = '<newClusterId>';\n"))))))}f.isMDXComponent=!0}}]);