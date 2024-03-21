"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5,slug:"/review"},o="Peer review infrastructure changes",s={unversionedId:"how-to/review",id:"how-to/review",title:"Peer review infrastructure changes",description:"Engineering teams move from using cloud UIs to IaC because cloud infrastructure changes can lead to outages more often than business logic changes. As a result, it is a DevOps best practice to code review infrastructure changes using IaC tools, showing the preview of the resulting change in pull requests to raise the quality bar and reduce the possibility of mistakes.",source:"@site/docs/how-to/review.md",sourceDirName:"how-to",slug:"/review",permalink:"/docs/next/review",draft:!1,editUrl:"https://github.com/alantech/iasql/tree/main/site/docs/how-to/review.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/review"},sidebar:"docs",previous:{title:"Replicate changes across infra environments",permalink:"/docs/next/envs"},next:{title:"Telemetry",permalink:"/docs/next/telemetry"}},l={},c=[{value:"IaSQL Preview",id:"iasql-preview",level:2},{value:"SQL changes",id:"sql-changes",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"peer-review-infrastructure-changes"},"Peer review infrastructure changes"),(0,r.kt)("p",null,"Engineering teams move from using cloud UIs to IaC because cloud infrastructure changes can lead to outages more often than business logic changes. As a result, it is a DevOps best practice to code review infrastructure changes using IaC tools, showing the ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," of the resulting change in pull requests to raise the quality bar and reduce the possibility of mistakes."),(0,r.kt)("p",null,"The standard practice for code review of database changes is to write the changes via a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Schema_migration"},"migration system")," such that the changes are executed after approval. We do not recommend that cloud infrastructure changes done with IaSQL follow this pattern for two reasons: first, these migration tools often do not support data changes, only schema changes, and the IaSQL schema is defined by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/module"},"modules")," that can be upgraded and changed over time, and second, you lose all of the feedback the database can give you on whether or not your SQL statements are valid and what impact they will have on your cloud infrastructure."),(0,r.kt)("p",null,"Instead, we recommend complex, or delicate, infrastructure changes should be treated as transactions in IaSQL. ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/transaction"},"IaSQL transactions"),' are a bit different from normal DB transactions in that they lock all database changes from propagating into the cloud but do not lock the changes from being viewed by other database connections, making them "multiuser", so others can inspect the changes, and can preview what they would do with the ',(0,r.kt)("a",{parentName:"p",href:"/docs/next/modules/builtin/iasql_functions"},(0,r.kt)("inlineCode",{parentName:"a"},"iasql_preview"))," function, similar to Pulumi\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," or Terraform\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"plan"),"."),(0,r.kt)("p",null,"But, reviewable artifacts are still very useful to summarize and explain the intent behind a proposed set of changes, so we have created an easy-to-follow yet comprehensive convention to review infrastructure changes within transactions which:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"works with any cloud identity and access management structure"),(0,r.kt)("li",{parentName:"ul"},"works with IaSQL schema upgrades"),(0,r.kt)("li",{parentName:"ul"},"works with any version control system, not just GitHub, without the need for privileged access"),(0,r.kt)("li",{parentName:"ul"},"preserves the ability to ",(0,r.kt)("inlineCode",{parentName:"li"},"iasql_preview")," changes in development and get the type-safety feedback from the dashboard editor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Create review for an infrastructure change within a transaction"',title:'"Create',review:!0,for:!0,an:!0,infrastructure:!0,change:!0,within:!0,a:!0,'transaction"':!0},"-- First, we open a new transaction with `iasql_begin`\nSELECT * FROM iasql_begin();\n-- Then we make the infrastructure changes we need.\n-- If a SQL statement is invalid, Postgres will prevent it\n-- from running and it won't end up in the transaction, so\n-- we can use it as our IDE.\nUPDATE log_group SET log_group_name = 'test' WHERE id = 4;\n-- We create the review artifact with `iasql_create_review`, providing\n-- a title and a description of why we're doing this.\nSELECT * FROM iasql_create_review('My infra change', 'Why this change is necessary')\n")),(0,r.kt)("p",null,"The output of ",(0,r.kt)("inlineCode",{parentName:"p"},"iasql_create_review")," is markdown-formatted text and will look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# My infra change\n\nWhy this change is necessary\n\n## IaSQL Preview\n\n| action | table_name | id | description |\n| --- | --- | --- | --- |\n| update | log_group | 4 | quickstart-log-group\\|us-east-2 |\n\n## SQL changes\n\n```sql\n\nUPDATE log_group\nSET log_group_name = 'quickstart-log-group', log_group_arn = 'test', creation_time = '2023-01-25T11:17:14.045+00:00', region = (SELECT region FROM aws_regions WHERE region = 'us-east-2')\nWHERE log_group_name = 'quickstart-log-group' AND log_group_arn = 'arn:aws:logs:us-east-2:257682470237:log-group:quickstart-log-group:*' AND creation_time = '2023-01-25T11:17:14.045+00:00' AND region = (SELECT region FROM aws_regions WHERE region = 'us-east-2');\n```\n")),(0,r.kt)("p",null,"The above string should be pasted into a markdown file within a version-controlled repository of your choosing and submitted for review by the relevant team members. Once the change has been approved and merged, come back to the transaction in the SQL REPL and simply commit it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Commit transaction once reviews has been accepted"',title:'"Commit',transaction:!0,once:!0,reviews:!0,has:!0,been:!0,'accepted"':!0},"SELECT * FROM iasql_commit();\n")),(0,r.kt)("p",null,"Finally, find below the visualization in markdown of the above string:"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"my-infra-change"},"My infra change"),(0,r.kt)("p",null,"Why this infra change is necessary"),(0,r.kt)("h2",{id:"iasql-preview"},"IaSQL Preview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"action"),(0,r.kt)("th",{parentName:"tr",align:null},"table_name"),(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"log_group"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"quickstart-log-group","|","us-east-2")))),(0,r.kt)("h2",{id:"sql-changes"},"SQL changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nUPDATE log_group\nSET log_group_name = 'quickstart-log-group', log_group_arn = 'test', creation_time = '2023-01-25T11:17:14.045+00:00', region = (SELECT region FROM aws_regions WHERE region = 'us-east-2')\nWHERE log_group_name = 'quickstart-log-group' AND log_group_arn = 'arn:aws:logs:us-east-2:257682470237:log-group:quickstart-log-group:*' AND creation_time = '2023-01-25T11:17:14.045+00:00' AND region = (SELECT region FROM aws_regions WHERE region = 'us-east-2');\n\n")))}g.isMDXComponent=!0}}]);