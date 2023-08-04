"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4807],{92511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>u});var s=a(87462),r=(a(67294),a(3905)),i=a(26389),n=a(94891),l=(a(75190),a(47507)),m=a(24310),o=a(63303),p=(a(75035),a(85162));const d={id:"slashing-params",title:"SlashingParams",description:"Params queries the parameters of slashing module",sidebar_label:"SlashingParams",hide_title:!0,hide_table_of_contents:!0,api:{description:"Params queries the parameters of slashing module",operationId:"SlashingParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{type:"object",properties:{signed_blocks_window:{type:"string",format:"int64"},min_signed_per_window:{type:"string",format:"byte"},downtime_jail_duration:{type:"string"},slash_fraction_double_sign:{type:"string",format:"byte"},slash_fraction_downtime:{type:"string",format:"byte"}},description:"Params represents the parameters used for by the slashing module."}},title:"QueryParamsResponse is the response type for the Query/Params RPC method"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},method:"get",path:"/cosmos/slashing/v1beta1/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SlashingParams",description:{content:"Params queries the parameters of slashing module",type:"text/plain"},url:{path:["cosmos","slashing","v1beta1","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,g={unversionedId:"greenfield-api/slashing-params",id:"greenfield-api/slashing-params",title:"SlashingParams",description:"Params queries the parameters of slashing module",source:"@site/docs/greenfield-api/slashing-params.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/slashing-params",permalink:"/greenfield-docs/docs/greenfield-api/slashing-params",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"slashing-params",title:"SlashingParams",description:"Params queries the parameters of slashing module",sidebar_label:"SlashingParams",hide_title:!0,hide_table_of_contents:!0,api:{description:"Params queries the parameters of slashing module",operationId:"SlashingParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{type:"object",properties:{signed_blocks_window:{type:"string",format:"int64"},min_signed_per_window:{type:"string",format:"byte"},downtime_jail_duration:{type:"string"},slash_fraction_double_sign:{type:"string",format:"byte"},slash_fraction_downtime:{type:"string",format:"byte"}},description:"Params represents the parameters used for by the slashing module."}},title:"QueryParamsResponse is the response type for the Query/Params RPC method"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},method:"get",path:"/cosmos/slashing/v1beta1/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SlashingParams",description:{content:"Params queries the parameters of slashing module",type:"text/plain"},url:{path:["cosmos","slashing","v1beta1","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"OracleParams",permalink:"/greenfield-docs/docs/greenfield-api/oracle-params"},next:{title:"SigningInfos",permalink:"/greenfield-docs/docs/greenfield-api/signing-infos"}},h={},u=[{value:"SlashingParams",id:"slashingparams",level:2}],y={toc:u},f="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"slashingparams"},"SlashingParams"),(0,r.kt)("p",null,"Params queries the parameters of slashing module"),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"params"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Params represents the parameters used for by the slashing module.")),(0,r.kt)(m.Z,{collapsible:!1,name:"signed_blocks_window",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"min_signed_per_window",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"downtime_jail_duration",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"slash_fraction_double_sign",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"slash_fraction_downtime",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "params": {\n    "signed_blocks_window": "string",\n    "min_signed_per_window": "string",\n    "downtime_jail_duration": "string",\n    "slash_fraction_double_sign": "string",\n    "slash_fraction_downtime": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);