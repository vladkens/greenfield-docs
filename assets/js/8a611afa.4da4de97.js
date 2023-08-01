"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9798],{15632:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Get Bucket Meta"},i="GetBucketMeta",d={unversionedId:"api-sdk/storgae-provider-rest/get_bucket_meta",id:"api-sdk/storgae-provider-rest/get_bucket_meta",title:"Get Bucket Meta",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/get_bucket_meta.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/get_bucket_meta",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_bucket_meta",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api-sdk/storgae-provider-rest/get_bucket_meta.md",tags:[],version:"current",frontMatter:{title:"Get Bucket Meta"},sidebar:"apiReferenceSidebar",previous:{title:"Get Object Meta",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_object_meta"},next:{title:"Virtual Hosting of Buckets",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/reference/virtual_hosting_of_buckets"}},s={},p=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Bucket",id:"bucket",level:3},{value:"StreamRecord",id:"streamrecord",level:3},{value:"BucketStatus",id:"bucketstatus",level:3},{value:"StreamAccountStatus",id:"streamaccountstatus",level:3},{value:"VisibilityType",id:"visibilitytype",level:3},{value:"SourceType",id:"sourcetype",level:3},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Get Object Meta",id:"example-1-get-object-meta",level:3},{value:"Sample Response: Get Object Meta successfully",id:"sample-response-get-object-meta-successfully",level:3}],u={toc:p},m="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getbucketmeta"},"GetBucketMeta"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to get bucket meta by bucket name. And it supports both ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual-hosted-style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(virtual-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName.gnfd-testnet-sp-*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(virtual-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")))),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket-meta"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket-meta is only used for routing location, and it does not need to pass any value")))),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"The request does not have a request body."),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?bucket-meta HTTP/1.1\nHost: BucketName.gnfd-testnet-sp-*.bnbchain.org\n")),(0,r.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bucket"},"Bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"bucket defines the bucket meta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream_record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#streamrecord"},"StreamRecord")),(0,r.kt)("td",{parentName:"tr",align:null},"stream_record defines the stream payment record of a stream account")))),(0,r.kt)("h3",{id:"bucket"},"Bucket"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner is the object owner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName is the name of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Visibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#visibilitytype"},"VisibilityType")),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility defines the highest permissions for bucket. When an bucket is public, everyone can access it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"Uint"),(0,r.kt)("td",{parentName:"tr",align:null},"Id is the unique identification for bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SourceType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sourcetype"},"SourceType")),(0,r.kt)("td",{parentName:"tr",align:null},"SourceType defines which chain the user should send the bucket management transactions to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateAt"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"CreateAt define the block timestamp when the bucket created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PrimarySPAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"PrimarySPAddress is the unique address of the primary sp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PaymentAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"payment_address is the address of the payment account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota defines the traffic quota for read in bytes per month.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BucketStatus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bucketstatus"},"BucketStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"BucketStatus define the status of the bucket")))),(0,r.kt)("h3",{id:"streamrecord"},"StreamRecord"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account is the account address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CrudTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"CrudTimestamp defines latest update timestamp of the stream record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NetflowRate"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"NetflowRate defines the per-second rate that an account's balance is changing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StaticBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"StaticBalance defines the balance of the stream account at the latest CRUD timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BufferBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"BufferBalance defines reserved balance of the stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LockBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"LockBalance defines the locked balance of the stream account after it puts a new object and before the object is sealed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#streamaccountstatus"},"StreamAccountStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Status defines the status of the stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SettleTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"SettleTimestamp defines the unix timestamp when the stream account will be settled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OutFlowCount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"OutFlowCount defines the count of its out flows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FrozenNetflowRate"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"FrozenNetflowRate defines the frozen netflow rate, which is used when resuming stream account")))),(0,r.kt)("h3",{id:"bucketstatus"},"BucketStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket status is created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket status is discontinued")))),(0,r.kt)("h3",{id:"streamaccountstatus"},"StreamAccountStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account")))),(0,r.kt)("h3",{id:"visibilitytype"},"VisibilityType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is unspecified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is public read")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is private")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility type is inherit")))),(0,r.kt)("h3",{id:"sourcetype"},"SourceType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE_TYPE_ORIGIN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE_TYPE_BSC_CROSS_CHAIN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE_TYPE_MIRROR_PENDING")))),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\n\nBody\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples given all use virtual-hosted-style."),(0,r.kt)("h3",{id:"example-1-get-object-meta"},"Example 1: Get Object Meta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?bucket-meta HTTP/1.1\nHost: uvfzo.gnfd-testnet-sp-1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\n")),(0,r.kt)("h3",{id:"sample-response-get-object-meta-successfully"},"Sample Response: Get Object Meta successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n{\n    "bucket": {\n        "bucket_info": {\n            "owner": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",\n            "bucket_name": "uvfzo",\n            "visibility": 1,\n            "id": "7155",\n            "source_type": 0,\n            "create_at": "1687942206",\n            "payment_address": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",\n            "primary_sp_address": "0x87Cc08944D8f63F006F9939f82Fcdb0E723B0C79",\n            "charged_read_quota": "7372800000000",\n            "billing_info": {\n                "price_time": "0",\n                "total_charge_size": "0",\n                "secondary_sp_objects_size": []\n            },\n            "bucket_status": 1\n        },\n        "removed": false,\n        "delete_at": "1688719854",\n        "delete_reason": "testnet cleanup",\n        "operator": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",\n        "create_tx_hash": "0x099908c60dd0fc8692384ff0fce83b9515b4f314b0e16e3b350b012541e42d87",\n        "update_tx_hash": "0xdc78c1bc350f518f07a0407fd80300b6a496e963674f5e9c77531c2d3aa3788f",\n        "update_at": "110511",\n        "update_time": "1688115054"\n    },\n    "stream_record": {\n        "account": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",\n        "crud_timestamp": "1688964834",\n        "netflow_rate": "-25715663",\n        "static_balance": "0",\n        "buffer_balance": "399929990976000",\n        "lock_balance": "6095481984000",\n        "status": 0,\n        "settle_timestamp": "1704430434",\n        "out_flows": [\n            {\n                "to_address": "0x21109411DDEF406C075c8fE000a3ee15110aF9D0",\n                "rate": "9338893"\n            },\n            {\n                "to_address": "0x2e66aa9e1Ae23a4A683E6d71a3C8162c566C98fb",\n                "rate": "30196"\n            },\n            {\n                "to_address": "0x3c883b6edF3e199faC735a7b2b012ebAf5371C01",\n                "rate": "1793809"\n            },\n            {\n                "to_address": "0x6554D1898eb7d0174CFB834ce6f73dD42cd284BE",\n                "rate": "7153123"\n            },\n            {\n                "to_address": "0x873AF49af2CC09055741Fb7476dBdc7c397636F5",\n                "rate": "1787769"\n            },\n            {\n                "to_address": "0x9C244D795175DC9F933786e60D6af325adA7AD62",\n                "rate": "1793809"\n            },\n            {\n                "to_address": "0xB373a07A981264419134451F44016a8E64DeD059",\n                "rate": "1781731"\n            },\n            {\n                "to_address": "0xE183689c42dBF8aE6b8D406BFb53D3169731DEDF",\n                "rate": "1781730"\n            },\n            {\n                "to_address": "0xdF5F0588f6B09f0B9E58D3426252db25Dc74E7a1",\n                "rate": "254603"\n            }\n        ]\n    }\n}\n')))}k.isMDXComponent=!0}}]);