"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9485],{79573:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>v,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const a={title:"Overview",dir:{order:1},order:1},n=void 0,d={unversionedId:"guide/storage-provider/introduction/overview",id:"guide/storage-provider/introduction/overview",title:"Overview",description:"What is the Greenfield Storage Provider",source:"@site/docs/guide/storage-provider/introduction/overview.md",sourceDirName:"guide/storage-provider/introduction",slug:"/guide/storage-provider/introduction/overview",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/overview",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/storage-provider/introduction/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",dir:{order:1},order:1},sidebar:"guideSidebar",previous:{title:"Become Testnet Validator",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/become-testnet-validator"},next:{title:"Architecture",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/architecture"}},s={},l=[{value:"What is the Greenfield Storage Provider",id:"what-is-the-greenfield-storage-provider",level:2},{value:"How the Greenfield Storage Providers works",id:"how-the-greenfield-storage-providers-works",level:2}],c={toc:l},h="wrapper";function v(e){let{components:r,...t}=e;return(0,i.kt)(h,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-the-greenfield-storage-provider"},"What is the Greenfield Storage Provider"),(0,i.kt)("p",null,"Storage Providers (abbreviated SP) are storage service infrastructure providers.\nGreenfield validators and SPs form a pair synergy to provide the whole storage\nservice. Validators store the metadata and financial ledger with consensus, while\nSPs store the objects' real data, i.e. the payload data, use the Greenfield chain\nas the ledger and the single source of truth. SPs provide plenty of convenient\nservices for users and dApps to operate data on Greenfield."),(0,i.kt)("h2",{id:"how-the-greenfield-storage-providers-works"},"How the Greenfield Storage Providers works"),(0,i.kt)("p",null,'SPs need to register themselves first by depositing on the Greenfield blockchain\nas their "Service Stake". Greenfield validators will go through a dedicated\ngovernance procedure to vote for the SPs of their election. When the SPs join and\nleave the network, they have to follow a series of actions to ensure data redundancy\nfor the users; otherwise, their "Service Stake" will be fined. '),(0,i.kt)("p",null,"SPs provide publicly accessible APIs for users to upload, download, and manage data.\nThese APIs are very similar to Amazon S3 APIs so that existing developers may feel\nfamiliar enough to write code for it. Each SP can and will respond to users' requests\nto write (upload) and read (download) data, and serve as the gatekeeper for user permissions\nand authentications."),(0,i.kt)("p",null,"Also each SP has a good connection with the Greenfield network by maintaining its own\nlocal full node so that it can watch the state change directly and index data properly,\nsend transaction requests timely, manage local data correctly."),(0,i.kt)("p",null,"SPs are encouraged to advertise their information and prove to the community their\ncapability, as SPs have to provide a professional storage system with high-quality SLA."))}v.isMDXComponent=!0}}]);