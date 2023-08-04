"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5726],{77972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var n=a(87462),r=(a(67294),a(3905)),s=a(26389),i=a(94891),l=a(75190),c=a(47507),m=a(24310),o=a(63303),p=(a(75035),a(85162));const d={id:"payment-account",title:"PaymentAccount",description:"PaymentAccount",sidebar_label:"PaymentAccount",hide_title:!0,hide_table_of_contents:!0,api:{escription:"Queries a PaymentAccount by index.",operationId:"PaymentAccount",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{payment_account:{type:"object",properties:{addr:{type:"string",title:"the address of the payment account"},owner:{type:"string",title:"the owner address of the payment account"},refundable:{type:"boolean",title:"whether the payment account is refundable"}},title:"PaymentAccount defines a payment account"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"addr",in:"path",required:!0,schema:{type:"string"}}],description:"PaymentAccount",method:"get",path:"/greenfield/payment/payment_account/{addr}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"PaymentAccount",description:{type:"text/plain"},url:{path:["greenfield","payment","payment_account",":addr"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,u={unversionedId:"greenfield-api/payment-account",id:"greenfield-api/payment-account",title:"PaymentAccount",description:"PaymentAccount",source:"@site/docs/greenfield-api/payment-account.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/payment-account",permalink:"/greenfield-docs/docs/greenfield-api/payment-account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"payment-account",title:"PaymentAccount",description:"PaymentAccount",sidebar_label:"PaymentAccount",hide_title:!0,hide_table_of_contents:!0,api:{escription:"Queries a PaymentAccount by index.",operationId:"PaymentAccount",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{payment_account:{type:"object",properties:{addr:{type:"string",title:"the address of the payment account"},owner:{type:"string",title:"the owner address of the payment account"},refundable:{type:"boolean",title:"whether the payment account is refundable"}},title:"PaymentAccount defines a payment account"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"addr",in:"path",required:!0,schema:{type:"string"}}],description:"PaymentAccount",method:"get",path:"/greenfield/payment/payment_account/{addr}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"PaymentAccount",description:{type:"text/plain"},url:{path:["greenfield","payment","payment_account",":addr"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"PaymentAccountAll",permalink:"/greenfield-docs/docs/greenfield-api/payment-account-all"},next:{title:"PaymentAccountCountAll",permalink:"/greenfield-docs/docs/greenfield-api/payment-account-count-all"}},h={},f=[{value:"PaymentAccount",id:"paymentaccount",level:2}],g={toc:f},b="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"paymentaccount"},"PaymentAccount"),(0,r.kt)("p",null,"PaymentAccount"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"addr",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"payment_account"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"addr",required:!1,schemaName:"the address of the payment account",qualifierMessage:void 0,schema:{type:"string",title:"the address of the payment account"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"the owner address of the payment account",qualifierMessage:void 0,schema:{type:"string",title:"the owner address of the payment account"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"refundable",required:!1,schemaName:"whether the payment account is refundable",qualifierMessage:void 0,schema:{type:"boolean",title:"whether the payment account is refundable"},mdxType:"SchemaItem"}))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "payment_account": {\n    "addr": "string",\n    "owner": "string",\n    "refundable": true\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);