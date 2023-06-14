"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7357],{34967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={title:"Query Bucket Read Quota",order:4},u="QueryBucketReadQuota",d={unversionedId:"api-sdk/storgae-provider-rest/query_bucket_read_quota",id:"api-sdk/storgae-provider-rest/query_bucket_read_quota",title:"Query Bucket Read Quota",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/query_bucket_read_quota.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/query_bucket_read_quota",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/query_bucket_read_quota",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/api-sdk/storgae-provider-rest/query_bucket_read_quota.md",tags:[],version:"current",frontMatter:{title:"Query Bucket Read Quota",order:4},sidebar:"apiReferenceSidebar",previous:{title:"Get Object",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_object"},next:{title:"List Bucket Read Records",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_bucket_read_records"}},s={},i=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Query a bucket read quota",id:"example-1-query-a-bucket-read-quota",level:3},{value:"Sample Response: Query a bucket read quota successfully",id:"sample-response-query-a-bucket-read-quota-successfully",level:3}],o={toc:i},p="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"querybucketreadquota"},"QueryBucketReadQuota"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to query bucket read quota. And it supports both ",(0,n.kt)("inlineCode",{parentName:"p"},"virutal-hosted-style")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Desscription"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(virutal-hosted-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"BucketName.gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(virutal-hosted-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("p",null,"You should set ",(0,n.kt)("inlineCode",{parentName:"p"},"BucketName")," in url host to determine which bucket do you want to query."),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#authorization-header"},"Authorization")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")))),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"None"),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read-quota"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Read quota path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year-month"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},'YearMonth is used to specify queried month, format "2023-03"')))),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?read-quota&year-month=YearMonth HTTP/1.1\nHost: BucketName.gnfd-testnet-sp-*.bnbchain.org\nAuthorization: Authorization\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Request-ID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"defines trace id, trace request in sp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"value is ",(0,n.kt)("inlineCode",{parentName:"td"},"application/xml"))))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"bucket name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BucketID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"bucket id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ReadQuotaSize"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"ReadQuotaSize is the greenfield chain bucket info's read quota size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SPFreeReadQuotaSize"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"SPFreeReadQuotaSize is the sp default free quota")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ReadConsumedSize"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"ReadConsumedSize is currently consumed size")))),(0,n.kt)("p",null,"If you failed to send request to get approval, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/common/error#sp-error-response-parameter"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\n\nXML Body\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use virutal-hosted-style."),(0,n.kt)("h3",{id:"example-1-query-a-bucket-read-quota"},"Example 1: Query a bucket read quota"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /?read-quota&year-month=2023-03 HTTP/1.1\nHost: myBucket.gnfd-testnet-sp-*.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\n")),(0,n.kt)("h3",{id:"sample-response-query-a-bucket-read-quota-successfully"},"Sample Response: Query a bucket read quota successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n<?xml version="1.0" encoding="UTF-8"?>\n<GetBucketReadQuotaResult>\n    <BucketName>myBucket</BucketName>\n    <BucketID>6u754</BucketID>\n    <ReadQuotaSize>20</ReadQuotaSize>\n    <SPFreeReadQuotaSize>10</SPFreeReadQuotaSize>\n    <ReadConsumedSize>5</ReadConsumedSize>\n</GetBucketReadQuotaResult>\n')))}k.isMDXComponent=!0}}]);