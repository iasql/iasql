"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),b=a,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),a=r(67294),l=r(86010),o=r(12466),u=r(16550),s=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,i]=f({queryString:r,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),y=(()=>{const e=s??d;return b({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),m(e)}),[i,m,l]),tabValues:l}}var y=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(d(t),s(n))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return a.createElement(_,(0,n.Z)({key:String(t)},e))}},21330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const l={id:"iasql_platform_entity.IasqlTables",title:"iasql_tables",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},o=void 0,u={unversionedId:"modules/builtin/tables/iasql_platform_entity.IasqlTables",id:"modules/builtin/tables/iasql_platform_entity.IasqlTables",title:"iasql_tables",description:"Table to track the list of tables used in iasql, and the related module.",source:"@site/docs/modules/builtin/tables/iasql_platform_entity.IasqlTables.md",sourceDirName:"modules/builtin/tables",slug:"/modules/builtin/tables/iasql_platform_entity.IasqlTables",permalink:"/docs/next/modules/builtin/tables/iasql_platform_entity.IasqlTables",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iasql_platform_entity.IasqlTables",title:"iasql_tables",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},s={},i=[],c={toc:i},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Table to track the list of tables used in iasql, and the related module."),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"module"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"iasql_module")),(0,a.kt)("p",null,"Module name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"table"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Table name"))}p.isMDXComponent=!0}}]);