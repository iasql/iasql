"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76863],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(a),f=r,p=m["".concat(c,".").concat(f)]||m[f]||d[f]||i;return a?n.createElement(p,l(l({ref:t},u),{},{components:a})):n.createElement(p,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),s=a(16550),c=a(91980),o=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,o]=p({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),E=(()=>{const e=c??m;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{E&&s(E)}),[E]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),b(e)}),[o,b,i]),tabValues:i}}var E=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=o[a].value;n!==s&&(m(t),c(n))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function h(e){const t=(0,E.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},90459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),l=a(85162);const s={id:"aws_acm",title:"aws_acm",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},c=void 0,o={unversionedId:"modules/aws/aws_acm",id:"version-0.1.9/modules/aws/aws_acm",title:"aws_acm",description:"Tables",source:"@site/versioned_docs/version-0.1.9/modules/aws/aws_acm.md",sourceDirName:"modules/aws",slug:"/modules/aws/aws_acm",permalink:"/docs/modules/aws/aws_acm",draft:!1,editUrl:null,tags:[],version:"0.1.9",frontMatter:{id:"aws_acm",title:"aws_acm",hide_table_of_contents:!0,custom_edit_url:null,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"aws_account",permalink:"/docs/modules/aws/aws_account"},next:{title:"aws_api_gateway",permalink:"/docs/modules/aws/aws_api_gateway"}},u={},m=[{value:"Tables",id:"tables",level:3},{value:"Functions",id:"functions",level:3},{value:"Enums",id:"enums",level:3}],d={toc:m},f="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{queryString:"view",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"components",label:"Components",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"tables"},"Tables"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_acm_entity_certificate.Certificate"},"certificate")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_acm_rpcs_import.CertificateImportRpc"},"certificate_import")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/tables/aws_acm_rpcs_request.CertificateRequestRpc"},"certificate_request")),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_acm_entity_certificate.certificateRenewalEligibilityEnum"},"certificate_renewal_eligibility")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_acm_entity_certificate.certificateStatusEnum"},"certificate_status")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"../../aws/enums/aws_acm_entity_certificate.certificateTypeEnum"},"certificate_type"))),(0,r.kt)(l.Z,{value:"code-examples",label:"Code examples",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("details",{open:"true"},(0,r.kt)("summary",{mdxType:"summary"},"Managing certificates"),(0,r.kt)("codeblock",{language:"sql"},"--- installs the aws_account module\nSELECT * FROM iasql_install('aws_account');\n--- adds a new certificate\nINSERT INTO certificate (domain_name)\nVALUES ('<domainName>');\n--- check adds new certificate\nSELECT *\nFROM certificate\nWHERE domain_name = '<domainName>';\n--- check adds new certificate\nSELECT *\nFROM certificate\nWHERE domain_name = '<domainName>';\n--- uninstalls the acm module\nSELECT * FROM iasql_uninstall('<modules>');\n")),(0,r.kt)("details",{open:"true"},(0,r.kt)("summary",{mdxType:"summary"},"Importing a certificate"),(0,r.kt)("codeblock",{language:"sql"},"--- installs the acm module\nSELECT * FROM iasql_install('<modules>');\n--- adds a new certificate to import\nSELECT * FROM certificate_import('<cert>', '<key>', '<region>', '{}', '{ \"toUpdate\": \"value\", \"toDelete\": \"value2\" }');\n--- updates a certificate tags\nUPDATE certificate\nSET tags = '{ \"toUpdate\": \"value2\", \"newTag\": \"value3\" }'\nWHERE domain_name = '<domainName>';\n--- deletes a certificate imported\nDELETE FROM certificate\nWHERE domain_name = '<domainName>';\n--- import a certificate in non-default region\nSELECT * FROM certificate_import('<cert>', '<key>', 'us-east-1', '{}');\n--- verifies the certificate in the non-default region is created\nSELECT *\nFROM certificate\nWHERE domain_name = '<domainName>';\n")),(0,r.kt)("details",{open:"true"},(0,r.kt)("summary",{mdxType:"summary"},"Requesting a certificate"),(0,r.kt)("codeblock",{language:"sql"},"--- installs the aws_account module\nSELECT * FROM iasql_install('aws_account');\n--- installs the acm module alone\nSELECT * FROM iasql_install('aws_acm');\n--- adds a new certificate to request\nSELECT * FROM certificate_request('<domainName>', 'DNS', '<region>', '{}', '{ \"toUpdate\": \"value\", \"toDelete\": \"value2\" }');\n--- check new certificate added and validated\nSELECT *\nFROM certificate\nWHERE domain_name = '<domainName>' AND status='ISSUED';\n--- updates a certificate tags\nUPDATE certificate\nSET tags = '{ \"toUpdate\": \"value2\", \"newTag\": \"value3\" }'\nWHERE domain_name = '<domainName>';\n--- deletes a certificate requested\nDELETE FROM certificate\nWHERE domain_name = '<domainName>';\n--- creates a certificate request in non-default region\nSELECT * FROM certificate_request('<domainName>', 'DNS', 'us-east-1', '{}');\n--- checks the certificate in non-default region is created and validated\nSELECT *\nFROM certificate\nWHERE domain_name = '<domainName>'\nAND status = 'ISSUED'\nAND region = 'us-east-1';\n"))))))}p.isMDXComponent=!0}}]);