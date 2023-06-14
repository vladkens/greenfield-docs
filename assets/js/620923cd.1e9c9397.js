"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4070],{75962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"List Groups By Name And Prefix",order:8},i="ListGroupsByNameAndPrefix",s={unversionedId:"api-sdk/storgae-provider-rest/get_group_list",id:"api-sdk/storgae-provider-rest/get_group_list",title:"List Groups By Name And Prefix",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/get_group_list.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/get_group_list",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_group_list",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/api-sdk/storgae-provider-rest/get_group_list.md",tags:[],version:"current",frontMatter:{title:"List Groups By Name And Prefix",order:8}},p={},o=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: List Groups By Name And Prefix",id:"example-1-list-groups-by-name-and-prefix",level:3},{value:"Sample Response: Get Group lists successfully",id:"sample-response-get-group-lists-successfully",level:3}],d={toc:o},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"listgroupsbynameandprefix"},"ListGroupsByNameAndPrefix"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to query a list of group by given prefix/name/source-type. This API only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#authorization-header"},"Authorization")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")))),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"The request does not have a path parameter."),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group-query"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"group-query is only used for routing location, and it does not need to pass any value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"name defines the name to be searched in the group records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prefix"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"prefix the prefix of the group name,    if you search with 'app%coin', the system will return groups that start with 'app' and have 'coin' anywhere in the rest of the string, like 'applicationcoin', 'app_bitcoin', 'app123coinabc', etc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source-type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"source-type must in SOURCE_TYPE_ORIGIN SOURCE_TYPE_BSC_CROSS_CHAIN SOURCE_TYPE_MIRROR_PENDING")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"limit defines the maximum number of results that should be returned in response, default 50 and maximum 1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"offset defines the position in the list from where to start returning results, default 0 and maximum 100000")))),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"The request does not have a request body."),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nAuthorization: Authorization\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"value is ",(0,n.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groups"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"groups defines the information of the group list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"count defines the total groups amount")))),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/common/error#sp-error-response-parameter"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\n\nJSON Body\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-list-groups-by-name-and-prefix"},"Example 1: List Groups By Name And Prefix"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org/?group-query&source-type=SOURCE_TYPE_ORIGIN&limit=10&offset=100&name=e&prefix=t\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nX-Gnfd-User-Address: user address string\n")),(0,n.kt)("h3",{id:"sample-response-get-group-lists-successfully"},"Sample Response: Get Group lists successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n{\n    "groups": [\n        {\n            "group": {\n                "owner": "0x91D7deA99716Cbb247E81F1cfB692009164a967E",\n                "group_name": "test",\n                "source_type": 0,\n                "id": "1",\n                "extra": "\\"{\\\\\\"description\\\\\\":\\\\\\"no description\\\\\\",\\\\\\"imageUrl\\\\\\":\\\\\\"www.images.com/image1\\\\\\"}\\""\n            },\n            "operator": "0x91D7deA99716Cbb247E81F1cfB692009164a967E",\n            "create_at": "41269",\n            "create_time": "1683537260",\n            "update_at": "41806",\n            "update_time": "1683538508",\n            "removed": true\n        },\n        {\n            "group": {\n                "owner": "0x3560a48bb05A1065Be2988fb5B890f220adFea82",\n                "group_name": "testGroup",\n                "source_type": 0,\n                "id": "2",\n                "extra": "\\"{\\\\\\"description\\\\\\":\\\\\\"no description\\\\\\",\\\\\\"imageUrl\\\\\\":\\\\\\"www.images.com/image1\\\\\\"}\\""\n            },\n            "operator": "0x0000000000000000000000000000000000000000",\n            "create_at": "144203",\n            "create_time": "1683777034",\n            "update_at": "144203",\n            "update_time": "1683777034",\n            "removed": false\n        },\n        {\n            "group": {\n                "owner": "0x3FB2B6E513095BfbbB923A8799d40673e446ecEc",\n                "group_name": "testGroup",\n                "source_type": 0,\n                "id": "3",\n                "extra": "\\"{\\\\\\"description\\\\\\":\\\\\\"no description\\\\\\",\\\\\\"imageUrl\\\\\\":\\\\\\"www.images.com/image1\\\\\\"}\\""\n            },\n            "operator": "0x0000000000000000000000000000000000000000",\n            "create_at": "144228",\n            "create_time": "1683777092",\n            "update_at": "144235",\n            "update_time": "1683777108",\n            "removed": true\n        },\n        {\n            "group": {\n                "owner": "0x3FB2B6E513095BfbbB923A8799d40673e446ecEc",\n                "group_name": "testGroup",\n                "source_type": 0,\n                "id": "3",\n                "extra": "\\"{\\\\\\"description\\\\\\":\\\\\\"no description\\\\\\",\\\\\\"imageUrl\\\\\\":\\\\\\"www.images.com/image1\\\\\\"}\\""\n            },\n            "operator": "0x0000000000000000000000000000000000000000",\n            "create_at": "144228",\n            "create_time": "1683777092",\n            "update_at": "144235",\n            "update_time": "1683777108",\n            "removed": true\n        },\n        {\n            "group": {\n                "owner": "0x3FB2B6E513095BfbbB923A8799d40673e446ecEc",\n                "group_name": "testGroup",\n                "source_type": 0,\n                "id": "3",\n                "extra": "\\"{\\\\\\"description\\\\\\":\\\\\\"no description\\\\\\",\\\\\\"imageUrl\\\\\\":\\\\\\"www.images.com/image1\\\\\\"}\\""\n            },\n            "operator": "0x0000000000000000000000000000000000000000",\n            "create_at": "144228",\n            "create_time": "1683777092",\n            "update_at": "144235",\n            "update_time": "1683777108",\n            "removed": true\n        }\n    ],\n    "count": "5"\n}\n')))}m.isMDXComponent=!0}}]);