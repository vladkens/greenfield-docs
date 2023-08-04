"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6299],{92867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Basic File Management",order:1},o="Building with Greenfield SDK",l={unversionedId:"tutorials/native-dapp/sdk/file-management/overview",id:"tutorials/native-dapp/sdk/file-management/overview",title:"Basic File Management",description:"Several Chain API libraries are available. These libraries manage the low-level logic of connecting to Greenfield node, making requests, and handing the responses.",source:"@site/docs/tutorials/native-dapp/sdk/file-management/overview.md",sourceDirName:"tutorials/native-dapp/sdk/file-management",slug:"/tutorials/native-dapp/sdk/file-management/overview",permalink:"/greenfield-docs/docs/tutorials/native-dapp/sdk/file-management/overview",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/native-dapp/sdk/file-management/overview.md",tags:[],version:"current",frontMatter:{title:"Basic File Management",order:1},sidebar:"tutorialsSidebar",previous:{title:"Hosting a Website",permalink:"/greenfield-docs/docs/tutorials/native-dapp/cli/hosting-websites/overview"},next:{title:"Resumable Upload/Download",permalink:"/greenfield-docs/docs/tutorials/native-dapp/sdk/resumable-upload/overview"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Go-SDK Features",id:"go-sdk-features",level:2},{value:"Setup",id:"setup",level:2},{value:"Create a Go Project",id:"create-a-go-project",level:3},{value:"Test a simple function",id:"test-a-simple-function",level:3},{value:"Get Chain Data",id:"get-chain-data",level:2},{value:"Manage Wallet",id:"manage-wallet",level:2},{value:"Make a storage deal",id:"make-a-storage-deal",level:2},{value:"1. Create a main file",id:"1-create-a-main-file",level:3},{value:"2. Choose your own SP",id:"2-choose-your-own-sp",level:3},{value:"3. Create your bucket",id:"3-create-your-bucket",level:3},{value:"4. Upload your object",id:"4-upload-your-object",level:3},{value:"5. Object management",id:"5-object-management",level:3},{value:"5.1 Read object",id:"51-read-object",level:4},{value:"5.2 Update object visibility",id:"52-update-object-visibility",level:4},{value:"5.3 Delete object",id:"53-delete-object",level:4},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-with-greenfield-sdk"},"Building with Greenfield SDK"),(0,i.kt)("p",null,"Several Chain API libraries are available. These libraries manage the low-level logic of connecting to Greenfield node, making requests, and handing the responses."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk"},"go-sdk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk"},"js-sdk"))),(0,i.kt)("p",null,"In this tutorial we\u2019ll use the go-SDK library to interact with testnet."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before getting started, you should be familiar with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/greenfield-docs/docs/guide/introduction/overview"},"Greenfield basics")),(0,i.kt)("li",{parentName:"ul"},"Greenfield command line ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cmd#examples"},"examples"))),(0,i.kt)("p",null,"Also, make sure you have the following dependencies installed with the latest version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go version above 1.19")),(0,i.kt)("h2",{id:"go-sdk-features"},"Go-SDK Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"basic.go")," includes the basic functions to fetch the blockchain info."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"storage.go")," includes the most storage functions such as creating a bucket, uploading files, downloading files, heading, and deleting resources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group.go")," includes group-related functions such as creating a group and updating group member."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"payment.go")," includes the payment-related functions to a management payment account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"crosschain.go")," includes the cross-chain-related functions to transfer or mirror resources to BSC.")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"create-a-go-project"},"Create a Go Project"),(0,i.kt)("p",null,"Let\u2019s set up a Go project with the necessary dependencies."),(0,i.kt)("p",null,"Init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mkdir ~/hellogreenfield\n$ cd ~/hellogreenfield\n$ go mod init hellogreenfield\n")),(0,i.kt)("p",null,"Add SDK Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ go get github.com/bnb-chain/greenfield-go-sdk\n")),(0,i.kt)("p",null,"Edit go.mod to replace dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"replace (\n cosmossdk.io/api => github.com/bnb-chain/greenfield-cosmos-sdk/api v0.0.0-20230425074444-eb5869b05fe9\n cosmossdk.io/math => github.com/bnb-chain/greenfield-cosmos-sdk/math v0.0.0-20230425074444-eb5869b05fe9\n github.com/cometbft/cometbft => github.com/bnb-chain/greenfield-cometbft v0.0.1\n github.com/confio/ics23/go => github.com/cosmos/cosmos-sdk/ics23/go v0.8.0\n github.com/cosmos/cosmos-sdk => github.com/bnb-chain/greenfield-cosmos-sdk v0.2.1\n)\n")),(0,i.kt)("h3",{id:"test-a-simple-function"},"Test a simple function"),(0,i.kt)("p",null,"Now we\u2019re ready to connect to Greenfield testnet and interact with the storage provider APIs. Let\u2019s write a simple script to query the Greenfield version to verify if everything works as expected."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," file in your project and add the following code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'package main\n\u200b\nimport (\n "context"\n "log"\n\u200b\n "github.com/bnb-chain/greenfield-go-sdk/client"\n "github.com/bnb-chain/greenfield-go-sdk/types"\n)\n\u200b\nconst (\n rpcAddr     = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\n chainId     = "greenfield_5600-1"\n privateKey  = ""\n)\n\u200b\nfunc main() {\n account, err := types.NewAccountFromPrivateKey("test", privateKey)\n if err != nil {\n  log.Fatalf("New account from private key error, %v", err)\n }\n cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})\n if err != nil {\n  log.Fatalf("unable to new greenfield client, %v", err)\n }\n ctx := context.Background()\n nodeInfo, versionInfo, err := cli.GetNodeInfo(ctx)\n if err != nil {\n  log.Fatalf("unable to get node info, %v", err)\n }\n log.Printf("nodeInfo moniker: %s, go version: %s", nodeInfo.Moniker, versionInfo.GoVersion)\n height, err := cli.GetLatestBlockHeight(ctx)\n if err != nil {\n  log.Fatalf("unable to get latest block height, %v", err)\n }\n\u200b\n log.Printf("Current block height: %d", height)\n}\n')),(0,i.kt)("p",null,"Run the following command in your project directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go run main.go\n")),(0,i.kt)("p",null,"This will output something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2023/06/22 10:44:16 nodeInfo moniker: validator-a, go version: go version go1.20.4 linux/amd64\n2023/06/22 10:44:16 Current block height: 817082\n")),(0,i.kt)("p",null,"If everything is set up correctly, your code will be able to connect to the Greenfield node and return the chain data as shown above."),(0,i.kt)("h2",{id:"get-chain-data"},"Get Chain Data"),(0,i.kt)("p",null,"In the previous step, we created a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," file to demonstrate the basic steps to connect to the node and initialize a ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," to query chain data. Next, let\u2019s use some more functions.\nGet current chain head:\nWe can add the following code in main.go to query current head of the chain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'blockByHeight, err := cli.GetBlockByHeight(ctx,height)\n if err != nil {\n  log.Fatalf("unable to get block by height, %v", err)\n }\n log.Printf("Current block height: %d", blockByHeight.GetHeader())\n')),(0,i.kt)("p",null,"Get Address balance\nWith a given greenfield wallet address, you can query its balance by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAccountBalance")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'balance, err := cli.GetAccountBalance(ctx, account.GetAddress().String())\n if err != nil {\n  log.Fatalf("unable to get balance, %v", err)\n }\n log.Printf("%s Current balance: %s", account.GetAddress().String(), balance.String())\n')),(0,i.kt)("p",null,"Apart from the basic data queries shown above, there are many more features. Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/api-sdk/endpoints"},"JSON-RPC API Reference")," for all Greenfield API definitions."),(0,i.kt)("h2",{id:"manage-wallet"},"Manage Wallet"),(0,i.kt)("p",null,"Greenfield wallets hold addresses that you can use to manage objects, sign transactions, and pay for gas fees. In this section, we will demonstrate different ways to manage your wallet."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, let\u2019s make sure your connected node is running and the wallet address contains some testnet BNB."),(0,i.kt)("li",{parentName:"ol"},"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"li"},"account.go")," in the same project as earlier. This is where we\u2019ll write all out wallet-related code."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"account.go")," import modules and initialize your private key or mnemonic phrase.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'//import mnemonic\naccount, err := types.NewAccountFromMnemonic("test", mnemonic)\n//import private key\naccount, err := types.NewAccountFromPrivateKey("test", privateKey)\n')),(0,i.kt)("p",null,"Let\u2019s create a second wallet address so we can test transfers. The new address will be created locally and start with 0 token balance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'account2, _, err := types.NewAccount("test2")\n')),(0,i.kt)("p",null,"Now, let\u2019s try to transfer tBNB to this new address. Under the hood, this will create a transaction to transfer tBNB from fromAddress to toAddress, sign the transaction using SDK, and send the signed transaction to the Greenfield node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'transferTxHash, err := cli.Transfer(ctx, account2.GetAddress().String(), math.NewIntFromUint64(1000000000000000000), types2.TxOption{})\n if err != nil {\n  log.Fatalf("unable to send, %v", err)\n }\n log.Printf("Transfer response: %s", transferTxHash)\n\u200b\n waitForTx, err := cli.WaitForTx(ctx, transferTxHash)\n\u200b\n log.Printf("Wair for tx: %s", waitForTx.String())\n\u200b\n balance, err = cli.GetAccountBalance(ctx, account2.GetAddress().String())\n')),(0,i.kt)("p",null,"Run the code to test the transfer of tBNB:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go run account.go\n")),(0,i.kt)("p",null,"This will output something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'raw_log: \'[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"},{"key":"module","value":"bank"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"},{"key":"amount","value":"1BNB"}]},{"type":"coin_received","attributes":[{"key":"receiver","value":"0x78C3A3d10B1032bB2810366361dCE84E2e92eFCB"},{"key":"amount","value":"1BNB"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"0x78C3A3d10B1032bB2810366361dCE84E2e92eFCB"},{"key":"sender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"},{"key":"amount","value":"1BNB"}]},{"type":"message","attributes":[{"key":"sender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"}]}]}]\'\ntimestamp: "2023-06-22T20:02:19Z"\ntx:\n \'@type\': /cosmos.tx.v1beta1.Tx\n auth_info:\n   fee:\n     amount:\n     - amount: "6000000000000"\n       denom: BNB\n     gas_limit: "1200"\n     granter: ""\n     payer: ""\n   signer_infos:\n   - mode_info:\n       single:\n         mode: SIGN_MODE_EIP_712\n     public_key:\n       \'@type\': /cosmos.crypto.eth.ethsecp256k1.PubKey\n       key: AirjhHwjRcZ34op5yCKHtDkn91RDgFOY8cJmbHH6Tmlu\n     sequence: "12"\n   tip: null\n body:\n   extension_options: []\n   memo: ""\n   messages:\n   - \'@type\': /cosmos.bank.v1beta1.MsgSend\n     amount:\n     - amount: "1"\n       denom: BNB\n     from_address: 0x525482AB3922230e4D73079890dC905dCc3D37cd\n     to_address: 0x78C3A3d10B1032bB2810366361dCE84E2e92eFCB\n   non_critical_extension_options: []\n   timeout_height: "0"\n signatures:\n - FjUNT2dzpQZhCmVTLDGMEy1uR1NaNLeYjvqQiPr2xHM5xxeYP5Mic8CSxZtg3k4WHcAIEnQNcszqBi7fsgETagA=\ntxhash: DFC2CE0514FE334B5BCB6BC3EBCCCD7A6E16B4CAEDC4FFDBE3F2FA3B6E548E61\n')),(0,i.kt)("h2",{id:"make-a-storage-deal"},"Make a storage deal"),(0,i.kt)("p",null,"Storing data is one of the most important features of Greenfield. In this section, we\u2019ll walk through the end-to-end process of storing your data on the Greenfield network. We\u2019ll start by importing your data, then make a storage deal with a storage provider, and finally wait for the deal to complete."),(0,i.kt)("h3",{id:"1-create-a-main-file"},"1. Create a main file"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"storage.go")," file in your demo project and add the following boilerplate code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'func main() {\u200b\n    // initialize account\n    account, err: = types.NewAccountFromPrivateKey("test", privateKey)\n    log.Println("address info:", account)\u200b\n    if err != nil {\n        log.Fatalf("New account from private key error, %v", err)\n    }\n\n    //initialize client\n    cli, err: = client.New(chainId, rpcAddr, client.Option {\n        DefaultAccount: account\n    })\n    if err != nil {\n        log.Fatalf("unable to new greenfield client, %v", err)\n    }\n    ctx: = context.Background()\u200b\n        // 1. choose storage provider\n        \u200b\n        // 2. Create a bucket\n        \u200b\n        // 3. Upload your data and set a quota\n        \u200b\n}\n')),(0,i.kt)("h3",{id:"2-choose-your-own-sp"},"2. Choose your own SP"),(0,i.kt)("p",null,"You can query the list of SP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// get storage providers list\nspLists, err: = cli.ListStorageProviders(ctx, true)\nif err != nil {\n        log.Fatalf("fail to list in service sps")\n    }\n//choose the first sp to be the primary SP\nprimarySP: = spLists[0].GetOperatorAddress()\n')),(0,i.kt)("h3",{id:"3-create-your-bucket"},"3. Create your bucket"),(0,i.kt)("p",null,"Bucket can be private or public. You can customize it with options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VISIBILITY_TYPE_PUBLIC_READ"),(0,i.kt)("li",{parentName:"ul"},"VISIBILITY_TYPE_PRIVATE")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chargedQuota := uint64(100)\nvisibility := storageTypes.VISIBILITY_TYPE_PUBLIC_READ\nopts := types.CreateBucketOptions{Visibility: visibility, ChargedQuota: chargedQuota}\n")),(0,i.kt)("p",null,"To understand how does quota work, read this."),(0,i.kt)("h3",{id:"4-upload-your-object"},"4. Upload your object"),(0,i.kt)("p",null,"Objects can also be private or public.\nUploading objects is composed of two parts: create and put."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateObject")," gets an approval of creating an object and sends createObject txn to Greenfield network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PutObject")," supports the second stage of uploading the object to bucket.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// create and put object\ntxnHash, err := cli.CreateObject(ctx, bucketName, objectName, bytes.NewReader(buffer.Bytes()), types.CreateObjectOptions{})\n\u200b\nhandleErr(err, "CreateObject")\n\u200b\nerr = cli.PutObject(ctx, bucketName, objectName, int64(buffer.Len()),\n  bytes.NewReader(buffer.Bytes()), types.PutObjectOptions{TxnHash: txnHash})\nhandleErr(err, "PutObject")\n\u200b\nlog.Printf("object: %s has been uploaded to SP\\n", objectName)\n\u200b\nwaitObjectSeal(cli, bucketName, objectName)\n')),(0,i.kt)("p",null,"The primary SP syncs with secondary SPs to set up the data redundancy, and then it signs a ",(0,i.kt)("inlineCode",{parentName:"p"},"Seal"),' transaction with the finalized metadata for storage. If the primary SP determines that it doesn\'t want to store the file due to whatever reason, it can also "SealReject" the request.'),(0,i.kt)("h3",{id:"5-object-management"},"5. Object management"),(0,i.kt)("h4",{id:"51-read-object"},"5.1 Read object"),(0,i.kt)("p",null,"You can call ",(0,i.kt)("inlineCode",{parentName:"p"},"GetObject")," function to download data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// get object\n reader, info, err := cli.GetObject(ctx, bucketName, objectName, types.GetObjectOption{})\n handleErr(err, "GetObject")\n log.Printf("get object %s successfully, size %d \\n", info.ObjectName, info.Size)\n handleErr(err, "GetObject")\n objectBytes, err := io.ReadAll(reader)\n if !bytes.Equal(objectBytes, buffer.Bytes()) {\n  handleErr(errors.New("download content not same"), "GetObject")\n }\n')),(0,i.kt)("h4",{id:"52-update-object-visibility"},"5.2 Update object visibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can call ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdateBucketVisibility")," to change bucket visibility"),(0,i.kt)("li",{parentName:"ul"},"You can call ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdateObjectVisibility")," to change object visibility\n\u200b\u200b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"updateBucketTx, err := ccli.UpdateBucketVisibility(s.ClientContext, bucketName,\n  storageTypes.VISIBILITY_TYPE_PRIVATE, types.UpdateVisibilityOption{})\n")),(0,i.kt)("h4",{id:"53-delete-object"},"5.3 Delete object"),(0,i.kt)("p",null,"The function DeleteObject support deleting objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// delete object\n delTx, err := cli.DeleteObject(ctx, bucketName, objectName, types.DeleteObjectOption{})\n handleErr(err, "DeleteObject")\n _, err = cli.WaitForTx(ctx, delTx)\n if err != nil {\n  log.Fatalln("txn fail")\n }\n log.Printf("object: %s has been deleted\\n", objectName)\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Congratulations on making it all the way through this tutorial! In this tutorial, we learned the basics of interacting with the Greenfield network using SDK library."))}p.isMDXComponent=!0}}]);