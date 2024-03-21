"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13085],{14247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(67294),l=t(86010),r=t(10833),i=t(35281),c=t(93117),s=t(45042),o=t(39407);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(r.FG,{className:(0,l.Z)(f??i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(r.d,{title:t,description:d}),a.createElement(c.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement("article",null,a.createElement(s.Z,null,a.createElement(n,null)))),!v&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},39407:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),l=t(67294),r=t(86010),i=t(93743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.Z)(c.tableOfContents,"thin-scrollbar",n)},l.createElement(i.Z,(0,a.Z)({},t,{linkClassName:s,linkActiveClassName:o})))}},93743:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(87462),l=t(67294),r=t(86668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=o(c,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=l.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const p=(0,r.L)(),g=m??p.tableOfContents.minHeadingLevel,h=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:h});return d((0,l.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:h}}),[s,o,g,h])),l.createElement(f,(0,a.Z)({toc:E,className:t,linkClassName:s},v))}},71171:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(87462),l=t(67294),r=t(35742);var i=t(90814);var c=t(39960);var s=t(34673);var o=t(92503);function m(e){return l.createElement(o.Z,e)}var d=t(86010);const u={containsTaskList:"containsTaskList_kggB"};const f={img:"img_CujE"};var v=t(23612),p=t(11875);const g={head:function(e){const n=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(r.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&n.includes(e.props?.mdxType)))?l.createElement("code",e):l.createElement(i.Z,e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){return l.createElement(i.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=l.Children.toArray(e.children),t=n.find((e=>l.isValidElement(e)&&"summary"===e.props?.mdxType)),r=l.createElement(l.Fragment,null,n.filter((e=>e!==t)));return l.createElement(s.Z,(0,a.Z)({},e,{summary:t}),r)},ul:function(e){return l.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,d.Z)(n,n?.includes("contains-task-list")&&u.containsTaskList))}));var n},img:function(e){return l.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,d.Z)(n,f.img))}));var n},h1:e=>l.createElement(m,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(m,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(m,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(m,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(m,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(m,(0,a.Z)({as:"h6"},e)),admonition:v.Z,mermaid:p.Z,codeblock:i.Z}}}]);