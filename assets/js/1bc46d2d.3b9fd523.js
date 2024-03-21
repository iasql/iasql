"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),s=n(16550),i=n(91980),u=n(67392),p=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:r}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),_=(()=>{const e=i??d;return k({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{_&&s(_)}),[_]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var _=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==s&&(d(t),i(r))},k=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:k,onClick:c},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,_.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},93125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));n(74866),n(85162);const o={id:"aws_sdk.AwsSdkModule",title:"aws_sdk_module",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},l=void 0,s={unversionedId:"modules/aws/tables/aws_sdk.AwsSdkModule",id:"version-0.1.9/modules/aws/tables/aws_sdk.AwsSdkModule",title:"aws_sdk_module",description:"Columns",source:"@site/versioned_docs/version-0.1.9/modules/aws/tables/aws_sdk.AwsSdkModule.md",sourceDirName:"modules/aws/tables",slug:"/modules/aws/tables/aws_sdk.AwsSdkModule",permalink:"/docs/modules/aws/tables/aws_sdk.AwsSdkModule",draft:!1,editUrl:null,tags:[],version:"0.1.9",frontMatter:{id:"aws_sdk.AwsSdkModule",title:"aws_sdk_module",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},i={},u=[{value:"Columns",id:"columns",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"columns"},"Columns"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","acm"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","api","_","gateway"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","app","_","sync"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","cloudformation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","cloudfront"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","cloudwatch"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","cloudwatch","_","logs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","codebuild"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","codedeploy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","codepipeline"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","dynamo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","ec2"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","ecr"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","ecr","_","public"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","ecs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","elasticache"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","elb"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","iam"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","lambda"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","memory","_","db"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","rds"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","route53"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","s3"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","secret","_","manager"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","sns"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","sqs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","ssm"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"invoke","_","sts"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_sdk_invoker")))}c.isMDXComponent=!0}}]);