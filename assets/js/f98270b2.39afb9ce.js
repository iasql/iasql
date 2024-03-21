"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),s=n(86010),l=n(12466),o=n(16550),u=n(91980),i=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,i]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),k=(()=>{const e=u??p;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),h(e)}),[i,h,s]),tabValues:s}}var k=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==o&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},95381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const s={id:"aws_sqs_entity_queue.Queue",title:"queue",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},l=void 0,o={unversionedId:"modules/aws/tables/aws_sqs_entity_queue.Queue",id:"version-0.1.9/modules/aws/tables/aws_sqs_entity_queue.Queue",title:"queue",description:"Columns",source:"@site/versioned_docs/version-0.1.9/modules/aws/tables/aws_sqs_entity_queue.Queue.md",sourceDirName:"modules/aws/tables",slug:"/modules/aws/tables/aws_sqs_entity_queue.Queue",permalink:"/docs/modules/aws/tables/aws_sqs_entity_queue.Queue",draft:!1,editUrl:null,tags:[],version:"0.1.9",frontMatter:{id:"aws_sqs_entity_queue.Queue",title:"queue",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs"},u={},i=[{value:"Columns",id:"columns",level:2}],c={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"columns"},"Columns"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"arn"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The queue ARN."),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"delay","_","seconds"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The length of time, in seconds, for which the delivery of all messages in the queue is delayed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"fifo","_","queue"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Designates a queue as FIFO. If not specified, the queue will be created in standard mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"maximum","_","message","_","size"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The limit of how many bytes a message can contain before Amazon SQS rejects it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"message","_","retention","_","period"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The length of time, in seconds, for which Amazon SQS retains a message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name for the SQS queue"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html#queuename"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html#queuename")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"policy"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"policy")),(0,r.kt)("p",null,"The queue's policy. A valid Amazon Web Services policy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html"},"https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"receive","_","message","_","wait","_","time","_","seconds"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The length of time, in seconds, for which a ReceiveMessage action waits for a message to arrive."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html")),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"region"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Region for the SQS queue"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Amazon SQS assigns a unique identifier called a queue URL to each new queue."),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"visibility","_","timeout"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html")))}m.isMDXComponent=!0}}]);