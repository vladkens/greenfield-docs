"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5186],{22727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),n=a(94891),o=a(75190),l=a(47507),p=a(24310),d=a(63303),m=(a(75035),a(85162));const c={id:"query-lock-fee",title:"QueryLockFee",description:"Queries lock fee for storing an object",sidebar_label:"QueryLockFee",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries lock fee for storing an object",operationId:"QueryLockFee",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{amount:{type:"string"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"primary_sp_address",description:"primary_sp_address is the address of the primary sp.",in:"query",required:!1,schema:{type:"string"}},{name:"create_at",description:"create_at define the block timestamp when the object created.",in:"query",required:!1,schema:{type:"string",format:"int64"}},{name:"payload_size",description:"payloadSize is the total size of the object payload.",in:"query",required:!1,schema:{type:"string",format:"uint64"}}],method:"get",path:"/greenfield/storage/lock_fee",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryLockFee",description:{content:"Queries lock fee for storing an object",type:"text/plain"},url:{path:["greenfield","storage","lock_fee"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"primary_sp_address is the address of the primary sp.",type:"text/plain"},key:"primary_sp_address",value:""},{disabled:!1,description:{content:"create_at define the block timestamp when the object created.",type:"text/plain"},key:"create_at",value:""},{disabled:!1,description:{content:"payloadSize is the total size of the object payload.",type:"text/plain"},key:"payload_size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,u={unversionedId:"greenfield-api/query-lock-fee",id:"greenfield-api/query-lock-fee",title:"QueryLockFee",description:"Queries lock fee for storing an object",source:"@site/docs/greenfield-api/query-lock-fee.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-lock-fee",permalink:"/greenfield-docs/docs/greenfield-api/query-lock-fee",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-lock-fee",title:"QueryLockFee",description:"Queries lock fee for storing an object",sidebar_label:"QueryLockFee",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries lock fee for storing an object",operationId:"QueryLockFee",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{amount:{type:"string"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"primary_sp_address",description:"primary_sp_address is the address of the primary sp.",in:"query",required:!1,schema:{type:"string"}},{name:"create_at",description:"create_at define the block timestamp when the object created.",in:"query",required:!1,schema:{type:"string",format:"int64"}},{name:"payload_size",description:"payloadSize is the total size of the object payload.",in:"query",required:!1,schema:{type:"string",format:"uint64"}}],method:"get",path:"/greenfield/storage/lock_fee",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryLockFee",description:{content:"Queries lock fee for storing an object",type:"text/plain"},url:{path:["greenfield","storage","lock_fee"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"primary_sp_address is the address of the primary sp.",type:"text/plain"},key:"primary_sp_address",value:""},{disabled:!1,description:{content:"create_at define the block timestamp when the object created.",type:"text/plain"},key:"create_at",value:""},{disabled:!1,description:{content:"payloadSize is the total size of the object payload.",type:"text/plain"},key:"payload_size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"ListObjectsByBucketId",permalink:"/greenfield-docs/docs/greenfield-api/list-objects-by-bucket-id"},next:{title:"StorageParams",permalink:"/greenfield-docs/docs/greenfield-api/storage-params"}},f={},g=[{value:"QueryLockFee",id:"querylockfee",level:2}],k={toc:g},h="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"querylockfee"},"QueryLockFee"),(0,s.kt)("p",null,"Queries lock fee for storing an object"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"primary_sp_address",description:"primary_sp_address is the address of the primary sp.",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"create_at",description:"create_at define the block timestamp when the object created.",in:"query",required:!1,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"payload_size",description:"payloadSize is the total size of the object payload.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "amount": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);