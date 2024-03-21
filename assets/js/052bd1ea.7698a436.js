"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9718],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,b=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(b,s(s({ref:t},l),{},{components:a})):n.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1,slug:"/database"},s="Database",i={unversionedId:"concepts/db",id:"version-0.1.9/concepts/db",title:"Database",description:"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database.",source:"@site/versioned_docs/version-0.1.9/concepts/db.md",sourceDirName:"concepts",slug:"/database",permalink:"/docs/database",draft:!1,editUrl:"https://github.com/alantech/iasql/tree/main/site/versioned_docs/version-0.1.9/concepts/db.md",tags:[],version:"0.1.9",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/database"},sidebar:"docs",previous:{title:"Telemetry",permalink:"/docs/telemetry"},next:{title:"Module",permalink:"/docs/module"}},d={},c=[],l={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database"},"Database"),(0,r.kt)("p",null,"An IaSQL Database feels a lot like a Postgres database. Because that is what it is: a 100% standard Postgres database with zero extensions, and anything you can do with a Postgres database you can do with an IaSQL database."),(0,r.kt)("p",null,"But it is administered a bit differently from a standard Postgres database. IaSQL mediates between the database and your cloud infrastructure, so the database has been configured with a few affordances for IaSQL in mind."),(0,r.kt)("p",null,"The first piece you may note are a pair of tables: ",(0,r.kt)("inlineCode",{parentName:"p"},"iasql_module")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"iasql_dependencies"),". These tables represent the ",(0,r.kt)("a",{parentName:"p",href:"/docs/module"},"modules")," you have installed and what dependencies, if any, they require. You may have also noted that these tables are read-only for your account and you cannot manipulate their contents. You can think of them as a non-linear migration system and IaSQL installs or uninstalls these modules based on your requests to it via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/builtin/iasql_functions"},"IaSQL PostgreSQL functions"),". You can use a standard migration system in tandem with this system, for tracking the state of your infrastructure and allowing for easy rollback, but instead of managing the schema you're managing the data in the tables."),(0,r.kt)("p",null,"There's nothing stopping you from adding your own custom tables, such as adding your own metadata tables to associate with your infrastructure, but IaSQL will ignore them at best, and get tripped up if a foreign key prevents a deletion it expects to be able to do."),(0,r.kt)("p",null,"IaSQL can change resources in your cloud account based on what you created with ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT/UPDATE/DELETE")," statements in your database. However, the next thing that is different from a normal Postgres database is that IaSQL can mutate your database state outside of your own connection to it. IaSQL periodically propagates the changes between your database and your cloud infrastructure and so for both convenience and to resolve dependency issues in other modules IaSQL will update columns in your database with new data. For instance, creating a new EC2 instance will cause it to then insert the AWS-controlled ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_id")," into the database automatically for you. Similarly, creating a new EC2 instance through the AWS console will eventually be picked by IaSQL and reflected in the database as a completely new record."),(0,r.kt)("p",null,"You can also provide the same AWS credentials to two IaSQL databases, but that will cause issues outside of one being treated as read-write and the other as read-only: the two sources of truth for your infrastructure would clash and undo each others' work when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iasql_commit()")," on them and that might not be immediately obvious. Having one database indirectly change the values for another database (on an IaSQL ",(0,r.kt)("a",{parentName:"p",href:"/docs/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"transaction")),") is different from your regular database usage."))}p.isMDXComponent=!0}}]);