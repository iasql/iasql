"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},i),{},{components:r})):a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(16550),u=r(91980),c=r(67392),i=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),y=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var y=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=i.indexOf(t),a=c[r].value;a!==s&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>i.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function _(e){const t=(0,y.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},12330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));r(74866),r(85162);const o={id:"aws_ec2_rpcs_import.KeyPairImportRpc",title:"key_pair_import",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},l=void 0,s={unversionedId:"modules/aws/tables/aws_ec2_rpcs_import.KeyPairImportRpc",id:"modules/aws/tables/aws_ec2_rpcs_import.KeyPairImportRpc",title:"key_pair_import",description:"Method for importing EC2 keypairs, based on a local one.",source:"@site/docs/modules/aws/tables/aws_ec2_rpcs_import.KeyPairImportRpc.md",sourceDirName:"modules/aws/tables",slug:"/modules/aws/tables/aws_ec2_rpcs_import.KeyPairImportRpc",permalink:"/docs/next/modules/aws/tables/aws_ec2_rpcs_import.KeyPairImportRpc",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"aws_ec2_rpcs_import.KeyPairImportRpc",title:"key_pair_import",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},u={},c=[],i={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Method for importing EC2 keypairs, based on a local one."),(0,n.kt)("p",null,"Returns following columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name: The name for the created key"),(0,n.kt)("li",{parentName:"ul"},"status: OK if the certificate was imported successfully"),(0,n.kt)("li",{parentName:"ul"},"message: Error message in case of failure")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"See"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/ec2/import-key-pair.html"},"https://docs.aws.amazon.com/cli/latest/reference/ec2/import-key-pair.html")))}m.isMDXComponent=!0}}]);