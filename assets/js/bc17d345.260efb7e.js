"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4041],{35368:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={title:"Greenfield SP RESTful APIs Headers",order:2},s=void 0,d={unversionedId:"api-sdk/storgae-provider-rest/reference/gnfd_headers",id:"api-sdk/storgae-provider-rest/reference/gnfd_headers",title:"Greenfield SP RESTful APIs Headers",description:"Authorization header",source:"@site/docs/api-sdk/storgae-provider-rest/reference/gnfd_headers.md",sourceDirName:"api-sdk/storgae-provider-rest/reference",slug:"/api-sdk/storgae-provider-rest/reference/gnfd_headers",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/reference/gnfd_headers",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api-sdk/storgae-provider-rest/reference/gnfd_headers.md",tags:[],version:"current",frontMatter:{title:"Greenfield SP RESTful APIs Headers",order:2},sidebar:"apiReferenceSidebar",previous:{title:"Virtual Hosting of Buckets",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/reference/virtual_hosting_of_buckets"},next:{title:"Blockchain Events",permalink:"/greenfield-docs/docs/api-sdk/events"}},o={},c=[{value:"Authorization header",id:"authorization-header",level:2},{value:"Authentication type",id:"authentication-type",level:3},{value:"Encryption algorithm type",id:"encryption-algorithm-type",level:3},{value:"The step of generating authorization header",id:"the-step-of-generating-authorization-header",level:3},{value:"Authorization header example",id:"authorization-header-example",level:3},{value:"Code examples in Greenfield Go SDK",id:"code-examples-in-greenfield-go-sdk",level:3},{value:"X-Gnfd-Unsigned-Msg header",id:"x-gnfd-unsigned-msg-header",level:2},{value:"CreateBucket approval",id:"createbucket-approval",level:3},{value:"CreateBucket approval unsigned msg example",id:"createbucket-approval-unsigned-msg-example",level:3},{value:"CreateBucket code examples in Greenfield Go SDK",id:"createbucket-code-examples-in-greenfield-go-sdk",level:3},{value:"CreateObject approval",id:"createobject-approval",level:3},{value:"CreateObject approval unsigned msg example",id:"createobject-approval-unsigned-msg-example",level:3},{value:"X-Gnfd-Signed-Msg",id:"x-gnfd-signed-msg",level:2},{value:"CreateBucket approval signed msg example",id:"createbucket-approval-signed-msg-example",level:3},{value:"CreateObject approval signed msg example",id:"createobject-approval-signed-msg-example",level:3}],l={toc:c},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"authorization-header"},"Authorization header"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Authortization")," header is an array which contains four parts: authentication type, encryption algorithm type, signed message and signature. The following will be explained separately."),(0,r.kt)("h3",{id:"authentication-type"},"Authentication type"),(0,r.kt)("p",null,"Authentication type represents which authentication mode the users want to use. Now there are three supported authentication modes: ",(0,r.kt)("inlineCode",{parentName:"p"},"authTypeV1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PersonalSign"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OffChainAuth"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"authTypeV1")," require users to use ",(0,r.kt)("inlineCode",{parentName:"p"},"private key")," for authentication. This mode is used in ",(0,r.kt)("inlineCode",{parentName:"p"},"greenfield-go-sdk"),". We recommend users using this mode when calling Greenfield SP RESTful APIs."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PersonalSign")," is used for verify wallet personal signature from a certain dapp website, which is not able to access users' ",(0,r.kt)("inlineCode",{parentName:"p"},"private key")," but can interact with users by using wallets."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OffChainAuth"),' Once the dapp and user set up the "off chain auth" user account key in SPs (see ',(0,r.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docsguide/storage-provider/services/auth.html"},"details"),") , users can communicate with SP without needing to make any explicit signature for most interactions (e.g. download private files, get SP approvals when create objects/buckets)"),(0,r.kt)("h3",{id:"encryption-algorithm-type"},"Encryption algorithm type"),(0,r.kt)("p",null,"Greenfield SP RESTful APIs use ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDSA-secp256k1")," to sign ",(0,r.kt)("inlineCode",{parentName:"p"},"SignedMsg")," field to get ",(0,r.kt)("inlineCode",{parentName:"p"},"Signature")," field. Users can refer these two libraries to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"Signature")," field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256k1"},"secp256k1"))),(0,r.kt)("h3",{id:"the-step-of-generating-authorization-header"},"The step of generating authorization header"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a canonical request\nCreate a canonical request by concatenating the following strings, separated by newline characters. This helps ensure that the signature that you calculate and the signature that Greenfield SP calculates can match.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTPMethod\nCanonicalUri\nCanonicalQueryString\nCanonicalHeaders\nSignedHeaders\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTPMethod: The HTTP method."),(0,r.kt)("li",{parentName:"ul"},"CanonicalUri: The URI-encoded version of the absolute path component URL (everything between the host and the question mark character (?) that starts the query string parameters). If the absolute path is empty, use a forward slash character ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),"."),(0,r.kt)("li",{parentName:"ul"},"CanonicalQueryString \u2013 The URL-encoded query string parameters, separated by ampersands (&). Percent-encode reserved characters, including the space character. Encode names and values separately. If there are empty parameters, append the equals sign to the parameter name before encoding. After encoding, sort the parameters alphabetically by key name. If there is no query string, use an empty string ",(0,r.kt)("inlineCode",{parentName:"li"},'""'),"."),(0,r.kt)("li",{parentName:"ul"},"CanonicalHeaders \u2013 The request headers, that will be signed, and their values, separated by newline characters. Header names must use lowercase characters, must appear in alphabetical order, and must be followed by a colon ",(0,r.kt)("inlineCode",{parentName:"li"},":"),". For the values, trim any leading or trailing spaces, convert sequential spaces to a single space, and separate the values for a multi-value header using commas. You must include the host header (HTTP/1.1) or any x-gnfd-* headers in the signature. You can optionally include other standard headers in the signature, such as content-type."),(0,r.kt)("li",{parentName:"ul"},"SignedHeaders \u2013 The list of headers that you included in CanonicalHeaders, separated by semicolons ",(0,r.kt)("inlineCode",{parentName:"li"},";"),". This indicates which headers are part of the signing process. Header names must use lowercase characters and must appear in alphabetical order.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a hash of the canonical request\nFirst create a hash (digest) of the canonical request using ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256")," algorithm. The hash of the canonical request is a slice of byte. Second use ",(0,r.kt)("inlineCode",{parentName:"p"},"Keccak256")," algorithm to get Keccak256 hash and convert this to lowercase hexadecimal characters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Calculate the signature\nAfter you create the string to sign, you are ready to calculate the signature for the authentication information that you'll add to your request. Use your private key, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256k1"},"secp256k1")," to generate Signature.And you should convert this to lowercase hexadecimal characters."))),(0,r.kt)("p",null,"SP verifies the Authortization signature content to obtain the sender's address and check the sender's permission. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1"},"Ethereum-secp256k1")," lib provides two functions: RecoverPubkey and VerifySignature that helps recover user address and whether data has been tampered with."),(0,r.kt)("h3",{id:"authorization-header-example"},"Authorization header example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Authorization = auth_type + "ECDSA-secp256k1 " + string-to-sign + ":" + Signature\nstring-to-sign = crypto.Keccak256(sha256(canonical request)\nSignature = privateKey.secp256k1-Sign(string-to-sign)\n\nAuthorization: authTypeV1 ECDSA-secp256k1, SignedMsg=70d03c8d65eb304fefc6d358168db4cfe9305a82dae54bb6a8dc4fbfa7461ca2, Signature=53e2f098411c5df46b71111337a5cf48bf254ba4a8516996445626619c4f10ac57a5ba081154272ed9e0334a338db39bf74f6de0f3c252fd27890fb81cffd29d00\n')),(0,r.kt)("h3",{id:"code-examples-in-greenfield-go-sdk"},"Code examples in Greenfield Go SDK"),(0,r.kt)("p",null,"The Greenfield Go SDK includes source code on GitHub that shows how to sign Greenfield SP API requests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/develop/client/api_client.go#L477"},"SignRequest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-common/blob/master/go/http/gen_sign_str.go#L87"},"MsgToSign"))),(0,r.kt)("h2",{id:"x-gnfd-unsigned-msg-header"},"X-Gnfd-Unsigned-Msg header"),(0,r.kt)("h3",{id:"createbucket-approval"},"CreateBucket approval"),(0,r.kt)("p",null,"When users send a ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateBucket approval")," request, the request data is encoded in X-Gnfd-Unsigned-Msg header. CreateBucket approval contains ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_approval#msgcreatebucket"},"7 fields"),". Users should provide the creator address, bucketName and primary SP address. The other fields is optional. Users should verify the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateBucket approval")," request. MsgCreateBucket encodes in ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf json")," format and converts to lowercase hexadecimal characters."),(0,r.kt)("h3",{id:"createbucket-approval-unsigned-msg-example"},"CreateBucket approval unsigned msg example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Suppose the user wants to make a create bucket request as follows:\ncreator = "0x14539343413EB47899B0935287ab1111Df891d04"\nbucketName = "gnfd1"\nvisibility = "VISIBILITY_TYPE_PRIVATE"\npaymentAddress = "0x8e424c6Db42Ad9A5d91b24e20b5f603eC70abbA3"\nprimarySpAddress = "0x21c6ff21DD7012DE1CCf9055f2eB234A44a1d3fB"\nexpiredHeight = 0\nsig = nil\nchargedReadQuota = 64\n\n# Use protobuf json marshal to get json string, the result is:\n{\n    "bucket_name": "gnfd1",\n    "charged_read_quota": "64",\n    "creator": "0x14539343413EB47899B0935287ab1111Df891d04",\n    "payment_address": "0x8e424c6Db42Ad9A5d91b24e20b5f603eC70abbA3",\n    "primary_sp_address": "0x21c6ff21DD7012DE1CCf9055f2eB234A44a1d3fB",\n    "primary_sp_approval": {\n        "expired_height": "0",\n        "sig": null\n    },\n    "visibility": "VISIBILITY_TYPE_PRIVATE"\n}\n\n# Users should convert json string to byte array. Then convert byte array to get lowercase hexadecimal string result and the result will be put into X-Gnfd-Unsigned-Msg header.\nX-Gnfd-Unsigned-Msg: 7b226275636b65745f6e616d65223a22676e666431222c22636861726765645f726561645f71756f7461223a223634222c2263726561746f72223a22307831343533393334333431334542343738393942303933353238376162313131314466383931643034222c227061796d656e745f61646472657373223a22307838653432346336446234324164394135643931623234653230623566363033654337306162624133222c227072696d6172795f73705f61646472657373223a22307832316336666632314444373031324445314343663930353566326542323334413434613164336642222c227072696d6172795f73705f617070726f76616c223a7b22657870697265645f686569676874223a2230222c22736967223a6e756c6c7d2c227669736962696c697479223a225649534942494c4954595f545950455f50524956415445227d\n')),(0,r.kt)("h3",{id:"createbucket-code-examples-in-greenfield-go-sdk"},"CreateBucket code examples in Greenfield Go SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/develop/client/api_bucket.go#LL113"},"CreateBucket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/develop/client/api_bucket.go#L64"},"GetCreateBucketApproval"))),(0,r.kt)("h3",{id:"createobject-approval"},"CreateObject approval"),(0,r.kt)("p",null,"When users send a ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateObject approval")," request, the request data is encoded in X-Gnfd-Unsigned-Msg header. CreateObject approval contains ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_approval#msgcreateobject"},"10 fields"),". Users should provide the creator address, bucketName, objectName and payload data. The other fields is optional. Users should verify the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateObject approval")," request. MsgCreateObject encodes in protobuf json format and converts to lowercase hexadecimal characters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/develop/client/api_object.go#L98"},"CreateObject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/develop/client/api_object.go#L526"},"GetCreateObjectApproval"))),(0,r.kt)("h3",{id:"createobject-approval-unsigned-msg-example"},"CreateObject approval unsigned msg example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Suppose the user wants to make a create object request as follows:\ncreator = "0x14539343413EB47899B0935287ab1111Df891d04"\nbucketName = "gnfd1"\nobjectName = "myobject"\npayloadSize = 2048\nvisibility = "VISIBILITY_TYPE_PRIVATE"\ncontentType = "image/jpeg"\nexpiredHeight = 0\nsig = nil\nexpectChecksums = ["/v6ljJzIDPXduF53SkOdi8bt7GK73pVTDwq4N8qwbo8=", "BCp9ZKWB7y7pg/IQWIAcw1ZjtwXmxV9i+o4PGOzHCYk=", "TJ/iTQh4vyxmW8Ovpcr8ake9L0zm6GrTObhOKhgG+vY=", "QW7N9tm0i+ZajFEHIwSRbkUyq7BltN/WNCvGdzNec+Q=", "GKjb5A/cXxNx7L/c9P+xjfBXfZ1J6rffla3mdVy3Piw=", "oc09LXqM8jZcIEqFyxrFBD6qO5yNGGRvLntN01U753g=", "R4/dCYCqjlIdjmvaou1lGCIL245jsmlWWAG2qREa01M="]\nexpectSecondarySpAddresses = ["0xf040BaaD4966842dAF83a536048a25Cf8eFF9ea0", "0xC117E319CE0C54C1C5F0e3E59B6647c5a5F0c3a8", "0x6dE810250b34059657e2C820D675232a9D884659", "0xca807A58caF20B6a4E3eDa3531788179E5bc816b", "0x20Bb76D063a6d2B18B6DaBb2aC985234a4B9eDe0", "0xa35eD99A0b4D26Bf7F74DC9D81FbfAB6A7f103Df"]\n\n# Users should convert json string to byte array. Then convert byte array to get lowercase hexadecimal string result and the result will be put into X-Gnfd-Unsigned-Msg header.\n{\n    "bucket_name": "gnfd1",\n    "content_type": "image/jpeg",\n    "creator": "0x14539343413EB47899B0935287ab1111Df891d04",\n    "expect_checksums": ["/v6ljJzIDPXduF53SkOdi8bt7GK73pVTDwq4N8qwbo8=", "BCp9ZKWB7y7pg/IQWIAcw1ZjtwXmxV9i+o4PGOzHCYk=", "TJ/iTQh4vyxmW8Ovpcr8ake9L0zm6GrTObhOKhgG+vY=", "QW7N9tm0i+ZajFEHIwSRbkUyq7BltN/WNCvGdzNec+Q=", "GKjb5A/cXxNx7L/c9P+xjfBXfZ1J6rffla3mdVy3Piw=", "oc09LXqM8jZcIEqFyxrFBD6qO5yNGGRvLntN01U753g=", "R4/dCYCqjlIdjmvaou1lGCIL245jsmlWWAG2qREa01M="],\n    "expect_secondary_sp_addresses": ["0xf040BaaD4966842dAF83a536048a25Cf8eFF9ea0", "0xC117E319CE0C54C1C5F0e3E59B6647c5a5F0c3a8", "0x6dE810250b34059657e2C820D675232a9D884659", "0xca807A58caF20B6a4E3eDa3531788179E5bc816b", "0x20Bb76D063a6d2B18B6DaBb2aC985234a4B9eDe0", "0xa35eD99A0b4D26Bf7F74DC9D81FbfAB6A7f103Df"],\n    "object_name": "myobject",\n    "payload_size": "2048",\n    "primary_sp_approval": {\n        "expired_height": "0",\n        "sig": null\n    },\n    "redundancy_type": "REDUNDANCY_EC_TYPE",\n    "visibility": "VISIBILITY_TYPE_PRIVATE"\n}\n\nX-Gnfd-Unsigned-Msg: 7b226275636b65745f6e616d65223a22676e666431222c22636f6e74656e745f74797065223a22696d6167652f6a706567222c2263726561746f72223a22307831343533393334333431334542343738393942303933353238376162313131314466383931643034222c226578706563745f636865636b73756d73223a5b222f76366c6a4a7a494450586475463533536b4f646938627437474b3733705654447771344e387177626f383d222c22424370395a4b574237793770672f49515749416377315a6a7477586d785639692b6f3450474f7a4843596b3d222c22544a2f69545168347679786d57384f7670637238616b65394c307a6d364772544f62684f4b6867472b76593d222c225157374e39746d30692b5a616a46454849775352626b55797137426c744e2f574e437647647a4e65632b513d222c22474b6a6235412f6358784e78374c2f6339502b786a664258665a314a367266666c61336d645679335069773d222c226f6330394c58714d386a5a634945714679787246424436714f35794e474752764c6e744e303155373533673d222c2252342f64435943716a6c49646a6d76616f75316c4743494c3234356a736d6c57574147327152456130314d3d225d2c226578706563745f7365636f6e646172795f73705f616464726573736573223a5b22307866303430426161443439363638343264414638336135333630343861323543663865464639656130222c22307843313137453331394345304335344331433546306533453539423636343763356135463063336138222c22307836644538313032353062333430353936353765324338323044363735323332613944383834363539222c22307863613830374135386361463230423661344533654461333533313738383137394535626338313662222c22307832304262373644303633613664324231384236446142623261433938353233346134423965446530222c22307861333565443939413062344432364266374637344443394438314662664142364137663130334466225d2c226f626a6563745f6e616d65223a22e4b8ade69687222c227061796c6f61645f73697a65223a2232303438222c227072696d6172795f73705f617070726f76616c223a7b22657870697265645f686569676874223a2230222c22736967223a6e756c6c7d2c22726564756e64616e63795f74797065223a22524544554e44414e43595f45435f54595045222c227669736962696c697479223a225649534942494c4954595f545950455f50524956415445227d\n')),(0,r.kt)("h2",{id:"x-gnfd-signed-msg"},"X-Gnfd-Signed-Msg"),(0,r.kt)("p",null,"X-Gnfd-Signed-Msg is a HTTP response header. SP server will add approval signature to data parsed from ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Gnfd-Unsigned-Msg"),". Users should use hex decode to decode it into byte array. Then use protobuf json unmarshal byte array. Finnaly broadcast txn to Greenfield chain."),(0,r.kt)("h3",{id:"createbucket-approval-signed-msg-example"},"CreateBucket approval signed msg example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Suppose users get the following signed msg\nX-Gnfd-Signed-Msg: 7b226275636b65745f6e616d65223a22676e666431222c22636861726765645f726561645f71756f7461223a223634222c2263726561746f72223a22307831343533393334333431334542343738393942303933353238376162313131314466383931643034222c227061796d656e745f61646472657373223a22307838653432346336446234324164394135643931623234653230623566363033654337306162624133222c227072696d6172795f73705f61646472657373223a22307832316336666632314444373031324445314343663930353566326542323334413434613164336642222c227072696d6172795f73705f617070726f76616c223a7b22657870697265645f686569676874223a2230222c22736967223a6e756c6c7d2c227669736962696c697479223a225649534942494c4954595f38238c8121223189231812\n\n# use protobuf json unmarshal in string format\n{\n    "bucket_name": "gnfd1",\n    "charged_read_quota": "64",\n    "creator": "0x14539343413EB47899B0935287ab1111Df891d04",\n    "payment_address": "0x8e424c6Db42Ad9A5d91b24e20b5f603eC70abbA3",\n    "primary_sp_address": "0x21c6ff21DD7012DE1CCf9055f2eB234A44a1d3fB",\n    "primary_sp_approval": {\n        "expired_height": "100060",\n        "sig": "MTI4OTIzODNoZGo="\n    },\n    "visibility": "VISIBILITY_TYPE_PRIVATE"\n}\n')),(0,r.kt)("h3",{id:"createobject-approval-signed-msg-example"},"CreateObject approval signed msg example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Suppose users get the following signed msg\nX-Gnfd-Signed-Msg: 7b226275636b65745f6e616d65223a22676e666431222c22636f6e74656e745f74797065223a22696d6167652f6a706567222c2263726561746f72223a22307831343533393334333431334542343738393942303933353238376162313131314466383931643034222c226578706563745f636865636b73756d73223a5b222f76366c6a4a7a494450586475463533536b4f646938627437474b3733705654447771344e387177626f383d222c22424370395a4b574237793770672f49515749416377315a6a7477586d785639692b6f3450474f7a4843596b3d222c22544a2f69545168347679786d57384f7670637238616b65394c307a6d364772544f62684f4b6867472b76593d222c225157374e39746d30692b5a616a46454849775352626b55797137426c744e2f574e437647647a4e65632b513d222c22474b6a6235412f6358784e78374c2f6339502b786a664258665a314a367266666c61336d645679335069773d222c226f6330394c58714d386a5a634945714679787246424436714f35794e474752764c6e744e303155373533673d222c2252342f64435943716a6c49646a6d76616f75316c4743494c3234356a736d6c57574147327152456130314d3d225d2c226578706563745f7365636f6e646172795f73705f616464726573736573223a5b22307866303430426161443439363638343264414638336135333630343861323543663865464639656130222c22307843313137453331394345304335344331433546306533453539423636343763356135463063336138222c22307836644538313032353062333430353936353765324338323044363735323332613944383834363539222c22307863613830374135386361463230423661344533654461333533313738383137394535626338313662222c22307832304262373644303633613664324231384236446142623261433938353233346134423965446530222c22307861333565443939413062344432364266374637344443394438314662664142364137663130334466225d2c226f626a6563745f6e616d65223a22e4b8ade69687222c227061796c6f61645f73697a65223a2232303438222c227072696d6172795f73705f617070726f76616c223a7b226372723392882393932392a3292323939120210b\n\n# use protobuf json unmarshal in string format\n{\n    "bucket_name": "gnfd1",\n    "content_type": "image/jpeg",\n    "creator": "0x14539343413EB47899B0935287ab1111Df891d04",\n    "expect_checksums": ["/v6ljJzIDPXduF53SkOdi8bt7GK73pVTDwq4N8qwbo8=", "BCp9ZKWB7y7pg/IQWIAcw1ZjtwXmxV9i+o4PGOzHCYk=", "TJ/iTQh4vyxmW8Ovpcr8ake9L0zm6GrTObhOKhgG+vY=", "QW7N9tm0i+ZajFEHIwSRbkUyq7BltN/WNCvGdzNec+Q=", "GKjb5A/cXxNx7L/c9P+xjfBXfZ1J6rffla3mdVy3Piw=", "oc09LXqM8jZcIEqFyxrFBD6qO5yNGGRvLntN01U753g=", "R4/dCYCqjlIdjmvaou1lGCIL245jsmlWWAG2qREa01M="],\n    "expect_secondary_sp_addresses": ["0xf040BaaD4966842dAF83a536048a25Cf8eFF9ea0", "0xC117E319CE0C54C1C5F0e3E59B6647c5a5F0c3a8", "0x6dE810250b34059657e2C820D675232a9D884659", "0xca807A58caF20B6a4E3eDa3531788179E5bc816b", "0x20Bb76D063a6d2B18B6DaBb2aC985234a4B9eDe0", "0xa35eD99A0b4D26Bf7F74DC9D81FbfAB6A7f103Df"],\n    "object_name": "myobject",\n    "payload_size": "2048",\n    "primary_sp_approval": {\n        "expired_height": "300451",\n        "sig": "dXd1dzI4MzIyMzgz"\n    },\n    "redundancy_type": "REDUNDANCY_EC_TYPE",\n    "visibility": "VISIBILITY_TYPE_PRIVATE"\n}\n')))}u.isMDXComponent=!0}}]);