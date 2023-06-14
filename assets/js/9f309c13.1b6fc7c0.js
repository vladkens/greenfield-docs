"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8477],{78896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var r=a(87462),n=(a(67294),a(3905)),i=a(26389),s=a(94891),l=(a(75190),a(47507)),p=a(24310),o=a(63303),d=(a(75035),a(85162));const m={id:"current-plan",title:"CurrentPlan queries the current upgrade plan.",description:"CurrentPlan queries the current upgrade plan.",sidebar_label:"Current Plan",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CurrentPlan",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{plan:{type:"array",items:{type:"object",properties:{name:{type:"string",description:'Sets the name for the upgrade. This name will be used by the upgraded\nversion of the software to apply any special "on-upgrade" commands during\nthe first BeginBlock method after the upgrade is applied. It is also used\nto detect whether a software version can handle a given upgrade. If no\nupgrade handler with this name has been set in the software, it will be\nassumed that the software is out-of-date when the upgrade Time or Height is\nreached and the software will exit.'},height:{type:"string",format:"int64",description:"The height at which the upgrade must be performed.\nOnly used if Time is not set."},info:{type:"string",title:"Any application specific upgrade info to be included on-chain\nsuch as a git commit that validators could automatically upgrade to"}},description:"Plan specifies information about a planned upgrade and when it should occur."},description:"plan is the current upgrade plan."}},description:"QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"CurrentPlan queries the current upgrade plan.",method:"get",path:"/cosmos/upgrade/v1beta1/current_plan",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"CurrentPlan queries the current upgrade plan.",description:{type:"text/plain"},url:{path:["cosmos","upgrade","v1beta1","current_plan"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,c={unversionedId:"greenfield-api/current-plan",id:"greenfield-api/current-plan",title:"CurrentPlan queries the current upgrade plan.",description:"CurrentPlan queries the current upgrade plan.",source:"@site/docs/greenfield-api/current-plan.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/current-plan",permalink:"/greenfield-docs/docs/greenfield-api/current-plan",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"current-plan",title:"CurrentPlan queries the current upgrade plan.",description:"CurrentPlan queries the current upgrade plan.",sidebar_label:"Current Plan",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CurrentPlan",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{plan:{type:"array",items:{type:"object",properties:{name:{type:"string",description:'Sets the name for the upgrade. This name will be used by the upgraded\nversion of the software to apply any special "on-upgrade" commands during\nthe first BeginBlock method after the upgrade is applied. It is also used\nto detect whether a software version can handle a given upgrade. If no\nupgrade handler with this name has been set in the software, it will be\nassumed that the software is out-of-date when the upgrade Time or Height is\nreached and the software will exit.'},height:{type:"string",format:"int64",description:"The height at which the upgrade must be performed.\nOnly used if Time is not set."},info:{type:"string",title:"Any application specific upgrade info to be included on-chain\nsuch as a git commit that validators could automatically upgrade to"}},description:"Plan specifies information about a planned upgrade and when it should occur."},description:"plan is the current upgrade plan."}},description:"QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"CurrentPlan queries the current upgrade plan.",method:"get",path:"/cosmos/upgrade/v1beta1/current_plan",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"CurrentPlan queries the current upgrade plan.",description:{type:"text/plain"},url:{path:["cosmos","upgrade","v1beta1","current_plan"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"Applied Plan",permalink:"/greenfield-docs/docs/greenfield-api/applied-plan"},next:{title:"ModuleVersions",permalink:"/greenfield-docs/docs/greenfield-api/module-versions"}},h={},g=[{value:"CurrentPlan",id:"currentplan",level:2}],f={toc:g},y="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"currentplan"},"CurrentPlan"),(0,n.kt)("p",null,"Current Plan queries the current upgrade plan."),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"plan"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"plan is the current upgrade plan.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'Sets the name for the upgrade. This name will be used by the upgraded\nversion of the software to apply any special "on-upgrade" commands during\nthe first BeginBlock method after the upgrade is applied. It is also used\nto detect whether a software version can handle a given upgrade. If no\nupgrade handler with this name has been set in the software, it will be\nassumed that the software is out-of-date when the upgrade Time or Height is\nreached and the software will exit.'},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"The height at which the upgrade must be performed.\nOnly used if Time is not set."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"info",required:!1,schemaName:"Any application specific upgrade info to be included on-chain\nsuch as a git commit that validators could automatically upgrade to",qualifierMessage:void 0,schema:{type:"string",title:"Any application specific upgrade info to be included on-chain\nsuch as a git commit that validators could automatically upgrade to"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "plan": [\n    {\n      "name": "string",\n      "height": "string",\n      "info": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);