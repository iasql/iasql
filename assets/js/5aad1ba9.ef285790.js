"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),u=r(16550),s=r(91980),c=r(67392),i=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var y=r(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==u&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function _(e){const t=(0,y.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},70925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const o={id:"aws_route53_entity_resource_records_set.RecordType",title:"record_type",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},l=void 0,u={unversionedId:"modules/aws/enums/aws_route53_entity_resource_records_set.RecordType",id:"modules/aws/enums/aws_route53_entity_resource_records_set.RecordType",title:"record_type",description:"Different types of records that can be created on a recordset",source:"@site/docs/modules/aws/enums/aws_route53_entity_resource_records_set.RecordType.md",sourceDirName:"modules/aws/enums",slug:"/modules/aws/enums/aws_route53_entity_resource_records_set.RecordType",permalink:"/docs/next/modules/aws/enums/aws_route53_entity_resource_records_set.RecordType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_route53_entity_resource_records_set.RecordType",title:"record_type",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},s={},c=[{value:"Values",id:"values",level:2}],i={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Different types of records that can be created on a recordset"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html"},"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html")),(0,a.kt)("h2",{id:"values"},"Values"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"A")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"A")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"AAAA")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"AAAA")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"CAA")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"CAA")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"CNAME")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"CNAME")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"DS")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"DS")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MX")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"MX")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"NAPTR")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"NAPTR")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"NS")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"NS")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"PTR")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"PTR")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SOA")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"SOA")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SPF")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"SPF")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SRV")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"SRV")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"TXT")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"TXT")))}d.isMDXComponent=!0}}]);