"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5525],{36472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"How to deploy Piece Store",order:5},r=void 0,s={unversionedId:"guide/storage-provider/run-book/piece-store",id:"guide/storage-provider/run-book/piece-store",title:"How to deploy Piece Store",description:"Greenfield SP is a storage infrastructure for Greenfield decentralized storgage platform. Greenfield SP uses PieceStore to store users' payload data.",source:"@site/docs/guide/storage-provider/run-book/piece-store.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/piece-store",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/piece-store",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/piece-store.md",tags:[],version:"current",frontMatter:{title:"How to deploy Piece Store",order:5},sidebar:"guideSidebar",previous:{title:"Run Mainnet SP Node",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-mainnet-SP-node"},next:{title:"SP Config",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/config"}},l={},d=[{value:"Shards",id:"shards",level:2},{value:"IAMType",id:"iamtype",level:2},{value:"AKSK",id:"aksk",level:3},{value:"SA",id:"sa",level:3},{value:"How to get temporary credentials",id:"how-to-get-temporary-credentials",level:4},{value:"Supported Storage Type",id:"supported-storage-type",level:2},{value:"Amazon S3",id:"amazon-s3",level:3},{value:"Alibaba Cloud OSS",id:"alibaba-cloud-oss",level:3},{value:"Backblaze B2",id:"backblaze-b2",level:3},{value:"MinIO",id:"minio",level:3},{value:"File",id:"file",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Greenfield SP is a storage infrastructure for Greenfield decentralized storgage platform. Greenfield SP uses ",(0,i.kt)("inlineCode",{parentName:"p"},"PieceStore")," to store users' payload data."),(0,i.kt)("h1",{id:"piecestore-config"},"PieceStore Config"),(0,i.kt)("p",null,"When creating a PieceStore, there are the following options to configure underlying storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[PieceStore]\nShards = 0\n\n[PieceStore.Store]\nStorage = ''\nBucketURL = ''\nMaxRetries = 0\nMinRetryDelay = 0\nTLSInsecureSkipVerify = false\nIAMType = ''\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Storage"),": Specify the underlying storage to be used by PieceStore, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage = 's3'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BucketURL"),": Specify the underlying storage access address, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"BucketURL = 'https://mybucket.s3.us-ease-1.amazonaws.com'"),". Safer way sets bucket url via environment variable, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"export BUCKET_URL=https://mybucket.s3.us-ease-1.amazonaws.com"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MaxRetries"),": Specify the max retry count when there are something worong doing an operation on the underlying storage, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"MaxRetries = 3"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MinRetryDelay"),": Specify the min retry delay when there are something worong doing an operation on the underlying storage, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"MinRetryDelay = 10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TLSInsecureSkipVerify"),": Specify whether you disable ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS")," when sending ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP")," requests, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"TLSInsecureSkipVerify = false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IAMType"),": Specify which authentication you will use to access the uderlying storage, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"IAMType = 'AKSK'"),".")),(0,i.kt)("h2",{id:"shards"},"Shards"),(0,i.kt)("p",null,"When creating a PieceStore, multiple buckets can be defined as the underlying storgae through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Shards")," option. Based on the sharding, SP can distribute the files to multiple buckets according to the hashed value of the file name. Data sharding technology can distribute the load of concurrent writing of large-scale data to multiple buckets, thereby improving the writing performance."),(0,i.kt)("p",null,"The following are points to note when using the data sharding function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Shards")," option accepts an integer between 0 and 256, indicating how many Buckets the files will be scattered into. The default value is 0, indicating that the data sharding function is not enabled."),(0,i.kt)("li",{parentName:"ul"},"Only multiple buckets under the same object storage can be used."),(0,i.kt)("li",{parentName:"ul"},"The integer wildcard ",(0,i.kt)("inlineCode",{parentName:"li"},"%d")," needs to be used to specify the buckets, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"http://10.180.42.161:9000%d"),". Buckets can be created automatically by SP when creating PieceStore."),(0,i.kt)("li",{parentName:"ul"},"The data sharding is set at the time of creation and cannot be modified after creation. You cannot increase or decrease the number of buckets, nor cancel the shards function.")),(0,i.kt)("p",null,"For example, the following config creates PieceStore with 5 shards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[PieceStore]\nShards = 5\n\n[PieceStore.Store]\nStorage = 'minio'\nBucketURL = 'http://10.180.42.161:9000/mybucket%d'\nIAMType = 'AKSK'\n")),(0,i.kt)("p",null,"After SP initialized through the above command, PieceStore will create 5 buckets named ",(0,i.kt)("inlineCode",{parentName:"p"},"mybucket0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mybucket1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mybucket2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mybucket3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mybucket4"),"."),(0,i.kt)("h2",{id:"iamtype"},"IAMType"),(0,i.kt)("p",null,"PieceStore supports two authentication modes: ",(0,i.kt)("inlineCode",{parentName:"p"},"AKSK")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SA"),"."),(0,i.kt)("h3",{id:"aksk"},"AKSK"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"AKSK")," mode, PieceStore will access object storage by using ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessKeyID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),". If users use s3 as object storage, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"AWSAccessKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_KEY")," into environment variables which are more secure."),(0,i.kt)("p",null,"Permanent access credentials generally have two parts, Access Key, Secret Key, while temporary access credentials generally include three parts, Access Key, Secret Key and token, and temporary access credentials have an expiration time, usually between a few minutes and a few hours."),(0,i.kt)("h3",{id:"sa"},"SA"),(0,i.kt)("p",null,"Service Account (abbreviated as SA) is a more secure way for object storage system to authenticate users. In this mode, you needn't to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessKeyID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),". If you deploy your SP in Kubernetes, we recommend you using SA to access object storage. AWS S3 can read this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html"},"documentation")," to learn how to use SA."),(0,i.kt)("h4",{id:"how-to-get-temporary-credentials"},"How to get temporary credentials"),(0,i.kt)("p",null,"Different cloud vendors have different acquisition methods. Generally, the Access Key, Secret Key and ARN representing the permission boundary of the temporary access credential are required as parameters to request access to the STS server of the cloud service vendor to obtain the temporary access credential. This process can generally be simplified by the SDK provided by the cloud vendor. For example, Amazon S3 can refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html"},"link")," to obtain temporary credentials, and Alibaba Cloud OSS can refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/object-storage-service/latest/use-a-temporary-credential-provided-by-sts-to-access-oss"},"link"),"."),(0,i.kt)("p",null,"Temporary credentials are also set into environment variables such as s3 by ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_SESSION_TOKEN"),", minio by ",(0,i.kt)("inlineCode",{parentName:"p"},"MINIO_SESSION_TOKEN")," and so on. Due to there is an expiration time in temporary credentials, this is used in test mode."),(0,i.kt)("h2",{id:"supported-storage-type"},"Supported Storage Type"),(0,i.kt)("p",null,"PieceStore now supports the following storage system. If the listed storage systems don't conatin that you want to use, feel free to submit a requirement ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/issues"},"issue"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#amazon-s3"},"Amazon S3")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"s3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#alibaba-cloud-oss"},"Alibaba Cloud OSS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aliyunfs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#backblaze-b2"},"Backblaze B2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"b2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#minio"},"MinIO")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"minio"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#file"},"File")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file"))))),(0,i.kt)("h3",{id:"amazon-s3"},"Amazon S3"),(0,i.kt)("p",null,"S3 supports ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html"},"two styles of endpoint URI"),": virtual hosted-style and path-style. The differences are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual-hosted-style: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<bucket>.s3.<region>.amazonaws.com")),(0,i.kt)("li",{parentName:"ul"},"Path-style: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://s3.<region>.amazonaws.com/<bucket>"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<region>")," should be replaced with specific region code, e.g. the region code of US East (N. Virginia) is ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east-1"),". All the available region codes can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"here"),". If you use s3 as the underlying storage, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage = s3")," in config.toml."),(0,i.kt)("p",null,"PieceStore use environment variables of S3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'// AWSAccessKey defines env variable name for aws access key\nAWSAccessKey = "AWS_ACCESS_KEY"\n// AWSSecretKey defines env variable name for aws secret key\nAWSSecretKey = "AWS_SECRET_KEY"\n// AWSSessionToken defines env variable name for aws session token\nAWSSessionToken = "AWS_SESSION_TOKEN"\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the S3 bucket has public access (anonymous access is supported), please set ",(0,i.kt)("inlineCode",{parentName:"p"},"AWSAccessKey")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSignRequest"),".")),(0,i.kt)("h3",{id:"alibaba-cloud-oss"},"Alibaba Cloud OSS"),(0,i.kt)("p",null,"Please follow this ",(0,i.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/basics-for-beginners/latest/obtain-an-accesskey-pair"},"document")," to learn how to get access key and secret key. Alibaba Cloud also supports using Security Token Service (STS) to authorize temporary access to OSS. If you use OSS as the underlying storage, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage = aliyunfs")," in config.toml."),(0,i.kt)("p",null,"PieceStore use environment variables of Alibaba Cloud OSS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'// AliyunAccessKey defines env variable name for aliyun access key\nAliyunAccessKey = "ALIBABA_CLOUD_ACCESS_KEY"\n// AliyunSecretKey defines env variable name for aliyun secret key\nAliyunSecretKey = "ALIBABA_CLOUD_SECRET_KEY"\n// AliyunSessionToken defines env variable name for aliyun session token\nAliyunSessionToken = "ALIBABA_CLOUD_SESSION_TOKEN"\n// AliyunRegion defines env variable name for aliyun oss region\nAliyunRegion = "ALIBABA_CLOUD_OSS_REGION"\n')),(0,i.kt)("h3",{id:"backblaze-b2"},"Backblaze B2"),(0,i.kt)("p",null,"To use Backblaze B2 as a storage system for Greenfield SP, you need to create ",(0,i.kt)("a",{parentName:"p",href:"https://www.backblaze.com/docs/cloud-storage-application-keys"},"application key")," firstly. Application Key ID and Application Key respectively corresponds to Access Key and Secret Key. If you use Backblaze B2 as the underlying storage, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage = b2")," in config.toml."),(0,i.kt)("p",null,"PieceStore use environment variables of Backblaze B2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'// B2AccessKey defines env variable name for minio access key\nB2AccessKey = "B2_ACCESS_KEY"\n// B2SecretKey defines env variable name for minio secret key\nB2SecretKey = "B2_SECRET_KEY"\n// B2SessionToken defines env variable name for minio session token\nB2SessionToken = "B2_SESSION_TOKEN"\n')),(0,i.kt)("h3",{id:"minio"},"MinIO"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," is a high-performance, S3 compatible object store. You can visit the official website to learn how to deploy and maintain a MinIO cluster or you can purchase minio service. If you use MinIO as the underlying storage, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage = minio")," in config.toml."),(0,i.kt)("p",null,"PieceStore use environment variables of MinIO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'// MinioRegion defines env variable name for minio region\nMinioRegion = "MINIO_REGION"\n// MinioAccessKey defines env variable name for minio access key\nMinioAccessKey = "MINIO_ACCESS_KEY"\n// MinioSecretKey defines env variable name for minio secret key\nMinioSecretKey = "MINIO_SECRET_KEY"\n// MinioSessionToken defines env variable name for minio session token\nMinioSessionToken = "MINIO_SESSION_TOKEN"\n')),(0,i.kt)("h3",{id:"file"},"File"),(0,i.kt)("p",null,"When running Greenfield SP in your local machine, you can use local disk to test SP basic functions. The default storage path for root user is ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/piecestore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.piecestore/local")," for ordinary users in Linux and macOS. In Windows system, the default path is ",(0,i.kt)("inlineCode",{parentName:"p"},"C:/piecestore/local"),"."),(0,i.kt)("p",null,"Local storage is usually only used to help users understand how Greenfield SP works and to give users an experience on the basic features of Greenfield SP. The created PieceStore storage can only be used on a single machine. This is not recommended in production environment."))}u.isMDXComponent=!0}}]);