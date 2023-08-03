"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9296],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(o),g=n,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var d=2;d<s;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},7451:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const s={title:"SP Common Issues",order:5},i=void 0,a={unversionedId:"guide/storage-provider/run-book/common-issues",id:"guide/storage-provider/run-book/common-issues",title:"SP Common Issues",description:"This is a list of solutions to common SP deployment issues",source:"@site/docs/guide/storage-provider/run-book/common-issues.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/common-issues",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/common-issues",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/common-issues.md",tags:[],version:"current",frontMatter:{title:"SP Common Issues",order:5},sidebar:"guideSidebar",previous:{title:"SP Config",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/config"},next:{title:"Contribute",permalink:"/greenfield-docs/docs/contribute"}},l={},d=[{value:"On-chain Proposal",id:"on-chain-proposal",level:2},{value:"1. Why is Proposal Rejected?",id:"1-why-is-proposal-rejected",level:3},{value:"2. Why is Proposal Failed",id:"2-why-is-proposal-failed",level:3},{value:"SP node issues",id:"sp-node-issues",level:2},{value:"1. Address not found issue",id:"1-address-not-found-issue",level:3},{value:"Description",id:"description",level:4},{value:"Root Cause",id:"root-cause",level:4},{value:"Solution",id:"solution",level:4},{value:"2. Database Configuration Issue",id:"2-database-configuration-issue",level:3},{value:"Description",id:"description-1",level:4},{value:"Root Cause",id:"root-cause-1",level:4},{value:"Solution",id:"solution-1",level:4},{value:"3. Object Sealed State Issue",id:"3-object-sealed-state-issue",level:3},{value:"Description",id:"description-2",level:4},{value:"Root Cause",id:"root-cause-2",level:4},{value:"Solution",id:"solution-2",level:4},{value:"4. P2P Issue",id:"4-p2p-issue",level:3},{value:"Description",id:"description-3",level:4},{value:"Root Cause",id:"root-cause-3",level:4},{value:"Solution",id:"solution-3",level:4},{value:"5.MinIO Authentication Issue",id:"5minio-authentication-issue",level:3},{value:"Description",id:"description-4",level:4},{value:"Root Cause",id:"root-cause-4",level:4},{value:"Solution",id:"solution-4",level:4},{value:"6. SP Standard Test Issue",id:"6-sp-standard-test-issue",level:3},{value:"Description",id:"description-5",level:4},{value:"Root Cause",id:"root-cause-5",level:4},{value:"Solutiion",id:"solutiion",level:4},{value:"dCellar Integration issues",id:"dcellar-integration-issues",level:2},{value:"1. No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.",id:"1-no-access-control-allow-origin-header-is-present-on-the-requested-resource",level:3},{value:"Solution",id:"solution-5",level:4},{value:"2. when an OPTION request is made, I get OPTIONS 405 (Method Not Allowed) error.",id:"2-when-an-option-request-is-made-i-get-options-405-method-not-allowed-error",level:3},{value:"Root cause",id:"root-cause-6",level:4},{value:"Solution",id:"solution-6",level:4}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a list of solutions to common SP deployment issues"),(0,n.kt)("h2",{id:"on-chain-proposal"},"On-chain Proposal"),(0,n.kt)("h3",{id:"1-why-is-proposal-rejected"},"1. Why is Proposal Rejected?"),(0,n.kt)("p",null,"If your proposal received less than 2/3 of ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," votes from validators, your propoosal will be rejected."),(0,n.kt)("h3",{id:"2-why-is-proposal-failed"},"2. Why is Proposal Failed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reason 1: The proposal initiator address does not have balance of ",(0,n.kt)("strong",{parentName:"li"},"1k BNB")," as deposit"),(0,n.kt)("li",{parentName:"ul"},"Reason 2: The proposal initiator address does not grant gov module to spend 1k BNB, as instructed ",(0,n.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/run-testnet-SP-node#1-authorization"},"here"))),(0,n.kt)("h2",{id:"sp-node-issues"},"SP node issues"),(0,n.kt)("h3",{id:"1-address-not-found-issue"},"1. Address not found issue"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"After starting SP binary, see the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'rpc error: code = NotFound desc = rpc error: code = NotFound desc = account 0x12334567890 not found: key not found"\n')),(0,n.kt)("h4",{id:"root-cause"},"Root Cause"),(0,n.kt)("p",null,"It's not possiible to find information about a newly created address on chain."),(0,n.kt)("h4",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Before starting your SP, transfer BNB to all of your 5 addresses."),(0,n.kt)("h3",{id:"2-database-configuration-issue"},"2. Database Configuration Issue"),(0,n.kt)("h4",{id:"description-1"},"Description"),(0,n.kt)("p",null,"After starting SP binary, see the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'Table "block_syncer.master_db" does not exist\nFailed to get db config from config file\n')),(0,n.kt)("h4",{id:"root-cause-1"},"Root Cause"),(0,n.kt)("p",null,"Data source name(dsn) is not set in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.toml"),"."),(0,n.kt)("h4",{id:"solution-1"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[BlockSyncer]\nModules = ['epoch','bucket','object','payment','group','permission','storage_provider','prefix_tree']\nDsn = [BsDB_User]:[BsDB_Passwd]@tcp([BsDB_Address])/[BsDB_Database?parseTime=true&multiStatements=true&loc=Local\n")),(0,n.kt)("h3",{id:"3-object-sealed-state-issue"},"3. Object Sealed State Issue"),(0,n.kt)("h4",{id:"description-2"},"Description"),(0,n.kt)("p",null,"After uploading a file, you see an error message:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Message: object has not been sealed state\n")),(0,n.kt)("p",null,"From SP log, you see the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'{"t":"2023-07-10T11:34:50.856+0800","l":"error","caller":"gfspapp/sign_server.go:42","msg":"failed to seal object","error":"code_space:\\"signer\\" http_status_code:400 inner_code:120002 description:\\"failed to broadcast seal object tx, error: failed to broadcast tx, resp code: 13\\" "}\n')),(0,n.kt)("h4",{id:"root-cause-2"},"Root Cause"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Seal address")," does not have enough BNB to sign seal transactions"),(0,n.kt)("h4",{id:"solution-2"},"Solution"),(0,n.kt)("p",null,"Transfer BNB to ",(0,n.kt)("inlineCode",{parentName:"p"},"Seal address"),"."),(0,n.kt)("h3",{id:"4-p2p-issue"},"4. P2P Issue"),(0,n.kt)("h4",{id:"description-3"},"Description"),(0,n.kt)("p",null,"After uploading a file, you see an error message:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'{"t":"2023-07-05T10:22:37.365Z","I":"warn","caller":"p2pnode/node.go:223","msg":"failed to get sufficient approvals","task_key":"ReplicatePieceApproval-bucketimage-1-object:OAT.png-id:215241","expect":6,"accepted":0} {"t":"2023-07-05T10:22:37.365Z","I":"error","caller":"p2p/p2p_task.go:39","msg":"failed to get sufficient approvals as secondary sp","task_key":"ReplicatePieceApproval-bucketimage-1-object:OAT.png-id:215241","accept":0,"min":6,"max":6} {"t":"2023-07-05T10:22:37.365Z","I":"error","caller":"gfspapp/p2p_server.go:29","msg":"failed to get replicate piece approval from p2p","task_key":"ReplicatePieceApproval-bucketimage-1-object:OAT.png-id:215241","error":"code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr "} {"t":"2023-07-05T10:22:37.369Z","I":"error","caller":"executor/execute_replicate.go:58","msg":"failed get approvals","task_key":"Replicating-bucketimage-1- object:OAT.png-id:215241","error":"code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr "} {"t":"2023-07-05T10:22:37.376Z","I":"info","caller":"gfspapp/manage_server.go:158","msg":"begin to handle reported task","task_key":"Replicating-bucketimage-1-object:OAT.png-id:215241","task_info":"key[Replicating-bucketimage-1-object:OAT.png-id:215241], type[ReplicatePieceTask], priority[255], limit[memory:25165824 tasks:1 tasks_high_priorityl ], create[1688552547], update[1688552547], timeout[90], retry[1], max_retry[3], runner[127.0.0.1], error[code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr ]"} {"t":"2023-07-05T10:22:37.376Z","I":"error","caller":"manager/manage_task.go:176","msg":"handler error replicate piece task","task_key":"Replicating-bucketimage-1-object:OAT.png-id:215241","task_info":"key[Replicating-bucketimage-1-object:OAT.png-id:215241], type[ReplicatePieceTask], priority[255], limit[memory:25165824 tasks:1 tasks_high_priorityl ], create[1688552547], update[1688552547], timeout[90], retry[1], max_retry[3], runner[127.0.0.1], error[code_space:\\"p2py http_status_code:404 inner_code:70002 description:yinsufficient approvals as secondary spr ]","error":"code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr "}\n\n')),(0,n.kt)("h4",{id:"root-cause-3"},"Root Cause"),(0,n.kt)("p",null,"SP is not connected with other SPs in P2P network"),(0,n.kt)("h4",{id:"solution-3"},"Solution"),(0,n.kt)("p",null,"check ","[P2P]"," setting in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.toml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[P2P]\n# p2p node msg Secp256k1 encryption key, it is different from other SP's addresses\nP2PPrivateKey = '${p2p_private_key}'\nP2PAddress = '0.0.0.0:9933'\nP2PAntAddress = '${load_balance_doamin:port}'\nP2PBootstrap = [\"16Uiu2HAkvgrSt4oUNZ8rWe2qpimLDajyqD6Ca7LV7n9FkzzPNDQh@k8s-gftestne-p2pexter-bc25ac70bc-a31e9596d87054c3.elb.us-east-1.amazonaws.com:9933\"]\nP2PPingPeriod = 0\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"P2PAntAddress")," is your load balance address. If you don't have a load balance address, you should have a public IP and use it in ",(0,n.kt)("inlineCode",{parentName:"p"},"P2PAddress"),".\n",(0,n.kt)("inlineCode",{parentName:"p"},"P2PBootstrap")," consists of ",(0,n.kt)("inlineCode",{parentName:"p"},"[node_id1@ip1:port1, node_id2@ip1:port2]"),", you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"P2PAntAddress")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"P2PAddress")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"ip:port"),". Public nodes URL can bbe found ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/endpoints"},"here")),(0,n.kt)("h3",{id:"5minio-authentication-issue"},"5.MinIO Authentication Issue"),(0,n.kt)("h4",{id:"description-4"},"Description"),(0,n.kt)("p",null,"Cannot config Minio as storage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'{"t":"2023-07-17T18:05:40.245+0800","l":"debug","caller":"storage/object_storage.go:15","msg":"created minio storage at endpoint http://172.17.0.2:9000/hashquark"}\nJul 17 18:05:41 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:05:40.245+0800","l":"info","caller":"storage/minio.go:37","msg":"new minio store succeeds","bucket":"hashquark"}\nJul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"storage/s3.go:147","msg":"S3 failed to head bucket","error":"NoCredentialProviders: no valid providers in chain. Deprecated.\\n\\tFor verbose messaging see aws.Config.CredentialsChainVerboseErrors"}\nJul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"piece/piece_store.go:88","msg":"failed to head bucket","error":"NoCredentialProviders: no valid providers in chain. Deprecated.\\n\\tFor verbose messaging see aws.Config.CredentialsChainVerboseErrors"}\nJul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"piece/piece_store.go:77","msg":"failed to check bucket due to storage is not configured rightly ","error":"deny access bucket","object":"minio://hashquark/"}\nJul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"piece/piece_store.go:21","msg":"failed to create storage","error":"deny access bucket"}\n')),(0,n.kt)("h4",{id:"root-cause-4"},"Root Cause"),(0,n.kt)("p",null,"This is a MinIO authentication"),(0,n.kt)("h4",{id:"solution-4"},"Solution"),(0,n.kt)("p",null,"You can refer ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/piece-store#minio"},"here"),"."),(0,n.kt)("h3",{id:"6-sp-standard-test-issue"},"6. SP Standard Test Issue"),(0,n.kt)("h4",{id:"description-5"},"Description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\n2023/07/26 19:06:03.543395 [INFO] GID 41, Uploading file - object: 2q4l5v4v3z, bucket: sc1bw\ndefault error msg : <html>\n<head><title>413 Request Entity Too Large</title></head>\n<body>\n<center><h1>413 Request Entity Too Large</h1></center>\n<hr><center>nginx/1.18.0 (Ubuntu)</center>\n</body>\n</html>\n{"level":"error","time":"2023-07-26T13:06:03-06:00","message":"do API error, url: https://sc1bw.gnfd-testnet-sp.epotter-qa.io/2q4l5v4v3z, err: statusCode 413 : code : unknown error  request-id  (Message: <html>\\r\\n<head><title>413 Request Entity Too Large</title></head>\\r\\n<body>\\r\\n<center><h1>413 Request Entity Too Large</h1></center>\\r\\n<hr><center>nginx/1.18.0 (Ubuntu)</center>\\r\\n</body>\\r\\n</html>)"}\n2023/07/26 19:06:03.543395 [INFO] GID 41, Uploading file - object: 2q4l5v4v3z, bucket: sc1bw\ndefault error msg : <html>\n<head><title>413 Request Entity Too Large</title></head>\n<body>\n<center><h1>413 Request Entity Too Large</h1></center>\n<hr><center>nginx/1.18.0 (Ubuntu)</center>\n</body>\n</html>\n{"level":"error","time":"2023-07-26T13:06:03-06:00","message":"do API error, url: https://sc1bw.gnfd-testnet-sp.epotter-qa.io/2q4l5v4v3z, err: statusCode 413 : code : unknown error  request-id  (Message: <html>\\r\\n<head><title>413 Request Entity Too Large</title></head>\\r\\n<body>\\r\\n<center><h1>413 Request Entity Too Large</h1></center>\\r\\n<hr><center>nginx/1.18.0 (Ubuntu)</center>\\r\\n</body>\\r\\n</html>)"}\n')),(0,n.kt)("h4",{id:"root-cause-5"},"Root Cause"),(0,n.kt)("p",null,"Nginx does not support large file"),(0,n.kt)("h4",{id:"solutiion"},"Solutiion"),(0,n.kt)("p",null,"Enlarge ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy-boody-size")),(0,n.kt)("h2",{id:"dcellar-integration-issues"},"dCellar Integration issues"),(0,n.kt)("h3",{id:"1-no-access-control-allow-origin-header-is-present-on-the-requested-resource"},"1. No 'Access-Control-Allow-Origin' header is present on the requested resource."),(0,n.kt)("p",null,"Error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Access to XMLHttpRequest at 'https://fbgtest.gnfd-testnet-sp.fbgx.ai/?read-quota&year-month=2023-07' from origin 'https://dcellar.io' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.\n\n")),(0,n.kt)("h4",{id:"solution-5"},"Solution"),(0,n.kt)("p",null,"Add these headers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Access-Control-Allow-Credentials:\ntrue\nAccess-Control-Allow-Headers:\nDNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization,X-Gnfd-Unsigned-Msg,X-Gnfd-Txn-Hash,Date,X-Gnfd-Object-ID,X-Gnfd-Piece-Index,X-Gnfd-Redundancy-Index,Address,X-Gnfd-User-Address,X-Gnfd-App-Domain,X-Gnfd-App-Reg-Nonce,X-Gnfd-App-Reg-Public-Key,X-Gnfd-App-Reg-Expiry-Date\nAccess-Control-Allow-Methods:\nGET, PUT, POST, DELETE, PATCH, OPTIONS\nAccess-Control-Allow-Origin:\n*\nAccess-Control-Expose-Headers:\n*, X-Gnfd-Request-ID,X-Gnfd-Signed-Msg,X-Gnfd-Object-ID,X-Gnfd-Integrity-Hash,X-Gnfd-Piece-Hash\nAccess-Control-Max-Age:\n1728000\n")),(0,n.kt)("h3",{id:"2-when-an-option-request-is-made-i-get-options-405-method-not-allowed-error"},"2. when an OPTION request is made, I get OPTIONS 405 (Method Not Allowed) error."),(0,n.kt)("h4",{id:"root-cause-6"},"Root cause"),(0,n.kt)("p",null,"The 405 Method Not Allowed error occurs when the web server is configured in a way that does not allow you to perform a specific action for a particular URL. It\u2019s an HTTP response status code that indicates that the request method is known by the server but is not supported by the target resource.The 405 Method Not Allowed error occurs when the web server is configured in a way that does not allow you to perform a specific action for a particular URL. It\u2019s an HTTP response status code that indicates that the request method is known by the server but is not supported by the target resource."),(0,n.kt)("h4",{id:"solution-6"},"Solution"),(0,n.kt)("p",null,"Your application is likely running on a server using one of these three popular webserver software: Apache, nginx, or Cloudflare. Check your configuration files for your web server software for unintentional redirect or request handling instructions."))}u.isMDXComponent=!0}}]);