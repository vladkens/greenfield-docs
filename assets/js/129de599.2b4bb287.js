"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9989],{72118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"List Buckets By Bucket IDs"},l="ListBucketsByBucketIDs",i={unversionedId:"api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids",id:"api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids",title:"List Buckets By Bucket IDs",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids.md",tags:[],version:"current",frontMatter:{title:"List Buckets By Bucket IDs"},sidebar:"apiReferenceSidebar",previous:{title:"List Objects By Object IDs",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_object_ids"},next:{title:"Verify Permission",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/verify_permission"}},d={},p=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: a list of buckets by bucket ids",id:"example-1-a-list-of-buckets-by-bucket-ids",level:3},{value:"Sample Response: Query a list of buckets by bucket ids successfully",id:"sample-response-query-a-list-of-buckets-by-bucket-ids-successfully",level:3}],u={toc:p},o="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listbucketsbybucketids"},"ListBucketsByBucketIDs"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to query a list of buckets metadata info by buckets ids. This API only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")))),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/reference/gnfd_headers#authorization-header"},"Authorization")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")))),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("p",null,"The request does not have a path parameter."),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buckets-query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"buckets-query is only used for routing location, and it does not need to pass any value")))),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"ids defines defines the IDs of the buckets")))),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org?buckets-query\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nContent-Type: application/json\nContent-Length: length\n{\n    "ids": []\n}\n')),(0,r.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,r.kt)("p",null,"The response returns the following HTTP headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buckets"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"buckets defines the information of the bucket list")))),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nJSON Body\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples given all use path-style."),(0,r.kt)("h3",{id:"example-1-a-list-of-buckets-by-bucket-ids"},"Example 1: a list of buckets by bucket ids"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST / HTTP/1.1\nHost: gnfd-testnet-sp-1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nContent-Type: application/json\nContent-Length: length\n{\n    "ids": [1,2,333]\n}\n')),(0,r.kt)("h3",{id:"sample-response-query-a-list-of-buckets-by-bucket-ids-successfully"},"Sample Response: Query a list of buckets by bucket ids successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n{\n    "buckets": {\n        "1": null,\n        "2": null,\n        "333": {\n            "bucket_info": {\n                "owner": "0x2a7646d7D73e7D1952DbAD66f063dD532111F6af",\n                "bucket_name": "bg-0521-buc-02-00020-00000",\n                "visibility": 2,\n                "id": "333",\n                "source_type": 0,\n                "create_at": "1685464514",\n                "payment_address": "0x2a7646d7D73e7D1952DbAD66f063dD532111F6af",\n                "primary_sp_address": "0x55f2b3729036567dA574b8640F3eCeDBA590CEE9",\n                "charged_read_quota": "0",\n                "billing_info": {\n                    "price_time": "0",\n                    "total_charge_size": "0",\n                    "secondary_sp_objects_size": []\n                },\n                "bucket_status": 1\n            },\n            "removed": false,\n            "delete_at": "1685730423",\n            "delete_reason": "testnet cleanup",\n            "operator": "0x2a7646d7D73e7D1952DbAD66f063dD532111F6af",\n            "create_tx_hash": "0xbef8ad7f68b89d8bdaff41d195e93df80478a94830fa3f8e31c66435084d1532",\n            "update_tx_hash": "0xd606897a39a94ea0f702f12ce1d17f580bc5653538ff91bb421e6a485b8df2e4",\n            "update_at": "123911",\n            "update_time": "1685644023"\n        }\n    }\n}\n')))}k.isMDXComponent=!0}}]);