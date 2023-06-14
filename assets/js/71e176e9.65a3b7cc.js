"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5456],{1045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Billing and Payment",order:3},s="Billing and Payment",l={unversionedId:"guide/greenfield-blockchain/modules/billing-and-payment",id:"guide/greenfield-blockchain/modules/billing-and-payment",title:"Billing and Payment",description:"If you need a remind on the different type of fees, we invite you to the following page.",source:"@site/docs/guide/greenfield-blockchain/modules/billing-and-payment.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/billing-and-payment",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/greenfield-blockchain/modules/billing-and-payment.md",tags:[],version:"current",frontMatter:{title:"Billing and Payment",order:3},sidebar:"guideSidebar",previous:{title:"Storage Provider",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider"},next:{title:"Permission",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/permission"}},i={},c=[{value:"Concepts and Formulas",id:"concepts-and-formulas",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Formula",id:"formula",level:3},{value:"Key Workflow",id:"key-workflow",level:2},{value:"Deposit and Withdrawal",id:"deposit-and-withdrawal",level:3},{value:"Payment Stream",id:"payment-stream",level:3},{value:"Forced Settlement",id:"forced-settlement",level:3},{value:"Payment Account",id:"payment-account",level:3},{value:"Account Freeze and Resume",id:"account-freeze-and-resume",level:3},{value:"Storage Fee Price and Adjustment",id:"storage-fee-price-and-adjustment",level:3},{value:"Payment States",id:"payment-states",level:2},{value:"Payment module parameters",id:"payment-module-parameters",level:2},{value:"Payment moduel keepers",id:"payment-moduel-keepers",level:2},{value:"Messages",id:"messages",level:2},{value:"MsgCreatePaymentAccount",id:"msgcreatepaymentaccount",level:3},{value:"MsgDeposit",id:"msgdeposit",level:3},{value:"MsgWithdraw",id:"msgwithdraw",level:3},{value:"MsgDisableRefund",id:"msgdisablerefund",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"billing-and-payment"},"Billing and Payment"),(0,o.kt)("p",null,"If you need a remind on the different type of fees, we invite you to the ",(0,o.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/concept/billing-payment"},"following page"),"."),(0,o.kt)("p",null,"The fees are paid on Greenfield in the style of\n",(0,o.kt)("inlineCode",{parentName:"p"},"Stream")," from users to the SPs at a constant rate. The fees are charged\nevery second as they are used."),(0,o.kt)("h2",{id:"concepts-and-formulas"},"Concepts and Formulas"),(0,o.kt)("p",null,"Streaming is a constant by-the-second movement of funds from a sending\naccount to a receiving account. Instead of sending payment transactions\nnow and then, Greenfield records the static balance, the latest update\ntimestamp, and flow rate in its payment module, and calculates the\ndynamic balance with a formula using this data in the records. If the\nnet flow rate is not zero, the dynamic balance will change as time\nelapses."),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Payment Module:")," This module is a special ledger system designed\nto manage billing and payments on the Greenfield blockchain.\nFunds will be deposited or charged into it from users' balance or\npayment accounts via the Payment Module;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Stream Account"),': The Payment Module has its own ledger for\nbilling management. Users can deposit and withdraw funds into\ntheir corresponding "accounts" on the payment module ledger. These\naccounts are called ',(0,o.kt)("inlineCode",{parentName:"p"},"Stream Account"),", which will directly interact\nwith the stream payment functions and bill the users for the\nstorage and data service;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Payment Account"),": Payment account has been discussed in other\nsections of Part 1 and Part 3 already. It is actually a type of\nStream Account. Users can create different payment accounts and\nassociate it with different buckets for different purposes;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Payment Stream:")," Whenever the users add, delete or change a storage\nobject or download a data package, they add or change one or more\n",(0,o.kt)("inlineCode",{parentName:"p"},"payment streams")," for that service provided by SPs;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Flow Rate"),": The per-second rate at which a sender decreases its\nnet outflow stream and increases a receiver's net inflow stream\nwhen creating or updating a payment stream;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Netflow Rate"),": The per-second rate that an account's balance is\nchanging. It is the sum of the account's inbound and outbound\nflow rates;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sender"),": The stream account that starts the payment stream by\nspecifying a receiver and a flow rate at which its net flow\ndecreases;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Receiver"),": The stream account on the receiving end of one or more payment streams.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CRUD Timestamp"),": The timestamp that indicates when a user\ncreates, updates, or deletes a payment stream;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Delta Balance"),": The amount of the stream account's balance that has\nchanged since the latest CRUD timestamp due to the flow. It can be\npositive or negative;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Static Balance"),": The balance of the stream account at the latest\nCRUD timestamp;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dynamic Balance"),": The actual balance of a stream account. It is\nthe sum of the Static Balance and the Delta Balance."))),(0,o.kt)("p",null,"When a user's stream account is initiated in the payment module by\ndeposit, several fields will be recorded for this stream account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CRUD Timestamp")," - will be the timestamp at the time;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Static Balance")," - will be the deposit amount;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Netflow Rate")," - will be 0;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Buffer Balance")," - will be 0."))),(0,o.kt)("h3",{id:"formula"},"Formula"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{style:{color:"#6495ED"}},"Static Balance")," = Initial Balance at latest CRUD timestamp")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{style:{color:"#556B2F"}},"Delta Balance")," = Netflow Rate ","*"," Seconds elapsed since latest CRUD timestamp")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{style:{color:"#CD5C5C"}},"Current Balance")," = ",(0,o.kt)("span",{style:{color:"#6495ED"}},"Static Balance")," + ",(0,o.kt)("span",{style:{color:"#556B2F"}},"Delta Balance"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{style:{color:"#FFDEAD"}},"Buffer Balance")," = - Netflow Rate ","*"," pre-configed ReserveTime if Netflow Rate is negative")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"funds-flow",src:a(77053).Z,width:"982",height:"500"})),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("i",null,"How a User Receives Inflow and Outflow of Funds")),(0,o.kt)("p",null,"Every time a user creates, updates, or deletes a payment stream, many\nvariables in the above formulas will be updated and the users' stream accounts in the\npayment module will be settled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The net flow for the user's stream account in the payment module\nwill be re-calculated to net all of its inbound and outbound flow\nrates by adding/removing the new payment stream against the\ncurrent NetFlow Rate. (E.g. when a user creates a new object whose\nprice is \\$0.4/month, its NetFlow Rate will add -\\$0.4/month);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the NetFlow rate is negative, the associated amount of BNB will\nbe reserved in a buffer balance. It is used to avoid the dynamic\nbalance becoming negative. When the dynamic balance becomes under\nthe threshold, the account will be forced settled;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CRUD Timestamp will become the current timestamp;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Static Balance will be re-calculated. The previous dynamic balance\nwill be settled. The new static Balance will be the Current\nBalance plus the change of the Buffer Balance."))),(0,o.kt)("h2",{id:"key-workflow"},"Key Workflow"),(0,o.kt)("h3",{id:"deposit-and-withdrawal"},"Deposit and Withdrawal"),(0,o.kt)("p",null,"All users (including SPs) can deposit and withdraw BNB in the payment\nmodule. The ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticBalance")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamPayment"),' data struct will be\n"settled" first: the ',(0,o.kt)("inlineCode",{parentName:"p"},"CRUDTimeStamp")," will be updated and ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticBalance"),"\nwill be netted with ",(0,o.kt)("inlineCode",{parentName:"p"},"DeltaBalance"),". Then the deposit and withdrawal number\nwill try to add/reduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticBalance")," in the record. If the static\nbalance is less than the withdrawal amount, the withdrawal will fail."),(0,o.kt)("p",null,"Deposit and withdrawal via cross-chain will also be supported to enable\nusers to deposit and withdraw from BSC directly."),(0,o.kt)("p",null,"Specifically, the payment deposit can be triggered automatically during\nthe creation of objects or the addition of data packages. As long as\nusers have assets in their address accounts and payment accounts, the\npayment module may directly charge the users by moving the funds from\naddress accounts."),(0,o.kt)("h3",{id:"payment-stream"},"Payment Stream"),(0,o.kt)("p",null,"Payment streams are flowing in one direction. Whenever the users deposit\nfrom their address accounts into the stream accounts (including users'\ndefault stream account and created payment accounts), the funds first go\nfrom the users' address accounts to a system account maintained by the\nPayment Module, although the fund size and other payment parameters will\nbe recorded on the users' stream account, i.e. the ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamPayment")," record,\nin the Payment Module ledger. When the payment is settled, the funds\nwill go from the system account to SPs' address accounts according to\ntheir in-flow calculation."),(0,o.kt)("p",null,"Every time users do the actions below, their ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamRecord")," will\nbe updated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Creating an object will create new streams to the SPs;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deleting an object will delete associated streams to the SPs;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adjusting the read quota will\ncreate/delete/update the associated streams."))),(0,o.kt)("h3",{id:"forced-settlement"},"Forced Settlement"),(0,o.kt)("p",null,"If a user doesn't deposit for a long time, his previous deposit may be\nall used up for the stored objects. Greenfield has a forced settlement\nmechanism to ensure enough funds are secured for further service fees."),(0,o.kt)("p",null,"There are two configurations, ",(0,o.kt)("inlineCode",{parentName:"p"},"ReserveTime")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ForcedSettleTime"),". "),(0,o.kt)("p",null,"Let's take an example where the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReserveTime")," is 7 days and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForcedSettleTime")," is 1 day.\nIf a user wants to store an object at the price of\napproximately $0.1 per month($0.00000004/second), he must reserve fees\nfor 7 days in the buffer balance, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"$0.00000004 * 7 * 86400 =\n$0.024192"),". If the user deposits is $1 initially, the stream payment\nrecord will be as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CRUD Timestamp"),": 100;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Static Balance"),": $0.975808;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Netflow Rate"),": -$0.00000004/sec;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Buffer Balance"),": $0.024192."))),(0,o.kt)("p",null,"After 10000 seconds, the dynamic balance of the user will be ",(0,o.kt)("inlineCode",{parentName:"p"},"0.975808 - 10000 * 0.00000004 = 0.975408"),"."),(0,o.kt)("p",null,"After 24395200 seconds(approximately 282 days), the dynamic balance of\nthe user will become negative. Users should have some alarms for such\nevents that remind them to supply more funds in time."),(0,o.kt)("p",null,"If no more funds are supplied and the dynamic balance plus buffer\nbalance is under the forced settlement threshold, the account will be\nforcibly settled. All payment streams of the account will be closed and\nthe account will be marked as out of balance. The download speed for all\nobjects associated with the account or payment account will be\ndowngraded. The objects will be deleted by the SPs if no fund is\nprovided within the predefined threshold."),(0,o.kt)("p",null,"The forced settlement will also charge some fees which is another\nincentive for users to replenish funds proactively."),(0,o.kt)("p",null,"Let's say the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForceSettlementTime")," variable is set to 1 day. After 24913601\nseconds(approximately 288 days), the dynamic balance becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"0.975808 -\n24913601 *0.00000004 = -0.02073604"),", plus the buffer balance is\n$0.00345596. The forced settlement threshold is ",(0,o.kt)("inlineCode",{parentName:"p"},"86400* 0.00000004 =\n0.003456"),". The forced settlement will be triggered, and the record of the\nuser will become as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CRUD Timestamp"),": 24913701;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Static Balance"),": \\$0;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Netflow Rate"),": \\$0/sec;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Buffer Balance"),": \\$0."))),(0,o.kt)("p",null,'The validators will get the remaining $0.00345596 as a reward. The\naccount will be marked as "frozen" and his objects get downgraded\nby SPs.'),(0,o.kt)("p",null,"Every time a stream record is updated, Greenfield calculates the time\nwhen the account will be out of balance. So Greenfield can keep an\non-chain list to trace the timestamps for the potential forced\nsettlement. The list will be checked by the end of every block\nprocessing. When the block time passes the forced settlement timestamp,\nthe settlement of the associated stream accounts will be triggered\nautomatically."),(0,o.kt)("h3",{id:"payment-account"},"Payment Account"),(0,o.kt)("p",null,'Payment account is a special "Stream Account" type in the Payment\nModule. Users can create multiple payment accounts and have the\npermission to link buckets to different payment accounts to pay for\nstorage and data package.'),(0,o.kt)("p",null,"The payment accounts have the below traits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Every user can create multiple payment accounts. The payment\naccounts created by the user are recorded with a map on the\nGreenfield blockchain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The address format of the payment account is the same as normal\naccounts. It's derived by the hash of the user address and\npayment account index. The payment account only exists in the\nstorage payment module. Users can deposit into, withdraw from and\nquery the balance of payment accounts in the payment module, which\nmeans payment accounts cannot be used for transfer or staking.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Users can only associate their buckets with their payment accounts\nto pay for storage and bandwidth. Users cannot associate their own\nbuckets with others' payment accounts, and users cannot associate\nothers' buckets with their own payment accounts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The owner of a payment account is the user who creates it. The owner\ncan set it non-refundable. It\'s a one-way setting and can not be\nrevoked. Thus, users can set some objects as "public goods" which\ncan receive donations for storage and bandwidth while preserving\nthe ownership.'))),(0,o.kt)("h3",{id:"account-freeze-and-resume"},"Account Freeze and Resume"),(0,o.kt)("p",null,"If a payment account is out of balance, it will be settled and set a\nflag as out of balance."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NetflowRate")," will be set to 0, while the current settings of the\nstream pay will be backed up in another data structure. The download\nspeed for all objects under this account will be downgraded."),(0,o.kt)("p",null,"If someone deposits BNB tokens into a frozen account and the static balance is\nenough for reserved fees, the account will be resumed automatically. The\nstream pay will be recovered from the backup."),(0,o.kt)("p",null,"During the ",(0,o.kt)("inlineCode",{parentName:"p"},"OutOfBalance")," period, no objects can be associated with this\npayment account again, which results in no object can be created under\nthe bucket associated with the account."),(0,o.kt)("p",null,"If the associated object is deleted, the backup stream pay settings will\nbe changed accordingly to ensure it reflects the latest once the account\nis resumed."),(0,o.kt)("h3",{id:"storage-fee-price-and-adjustment"},"Storage Fee Price and Adjustment"),(0,o.kt)("p",null,"The storage fee prices are determined by the SPs who supply the storage service.\nThe cost of the SPs are composed of 3 parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The primary SP will store the whole object file;"),(0,o.kt)("li",{parentName:"ul"},"The secondary SPs will store part of the object file as a replica;"),(0,o.kt)("li",{parentName:"ul"},"The primary SP will supply all the download requests of the object.")),(0,o.kt)("p",null,"There are 3 different on-chain prices:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary SP Store Price;"),(0,o.kt)("li",{parentName:"ul"},"Primary SP Read Price;"),(0,o.kt)("li",{parentName:"ul"},"Secondary SP Store Price.")),(0,o.kt)("p",null,"Every SP can set their own store price and read price via on-chain transactions.\nWhile the secondary SP store price is calculated by averaging all SPs' store price."),(0,o.kt)("p",null,"The unit of price is a decimal, which indicates wei BNB per byte per second.\nE.g. the price is 0.027, means approximately $0.022 / GB / Month.\n(",(0,o.kt)("inlineCode",{parentName:"p"},"0.027 * (30 * 86400) * (1024 * 1024 * 1024) * 300 / 10 ** 18 \u2248 0.022"),", assume the BNB price is 300 USD) "),(0,o.kt)("p",null,"The storage fees are calculated and charged in bucket level.\nThe store price and read price is up to the SP of bucket.\nThe secondary store price is stored in the chain state and the same for all buckets.\nThe total size of all objects and per secondary SP served size in a bucket will be recorded in the bucket metadata.\nThe charge size will be used instead of the real size, e.g. files under 1KB will be charged as 1KB to cover the cost.\nThe payment bill will be calculated by the size statistics and prices, and it will be charged from\nthe stream account specified in the bucket to the SPs."),(0,o.kt)("h2",{id:"payment-states"},"Payment States"),(0,o.kt)("p",null,"The payment module keeps state of the following primary objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The stream payment ledger;"),(0,o.kt)("li",{parentName:"ul"},"The payment accounts and total account created by users;"),(0,o.kt)("li",{parentName:"ul"},"An AutoSettleRecord list to keep track of the auto-settle timestamp of the stream accounts.")),(0,o.kt)("p",null,"In addition, the payment module keeps the following indexes to manage the aforementioned state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"StreamRecord Index. ",(0,o.kt)("inlineCode",{parentName:"li"},"address -> StreamRecord"),";"),(0,o.kt)("li",{parentName:"ul"},"PaymentAccount Index. ",(0,o.kt)("inlineCode",{parentName:"li"},"address -> PaymentAccount"),";"),(0,o.kt)("li",{parentName:"ul"},"PaymentAccountCount Index. ",(0,o.kt)("inlineCode",{parentName:"li"},"address -> PaymentAccountCount"),";"),(0,o.kt)("li",{parentName:"ul"},"AutoSettleRecord Index. ",(0,o.kt)("inlineCode",{parentName:"li"},"settle-timestamp | address -> 0"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'message StreamRecord {\n  string account = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  int64 crud_timestamp = 2;\n  string netflow_rate = 3 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n  string staticBalance = 4 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n  string bufferBalance = 5 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n  string lockBalance = 6 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n  int32 status = 7;\n  int64 settleTimestamp = 8;\n  repeated OutFlow outFlows = 9 [(gogoproto.nullable) = false];\n}\n\nmessage PaymentAccount {\n  string addr = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string owner = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  bool refundable = 3;\n}\n\nmessage PaymentAccountCount {\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  uint64 count = 2;\n}\n\nmessage AutoSettleRecord {\n  int64 timestamp = 1;\n  string addr = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')),(0,o.kt)("h2",{id:"payment-module-parameters"},"Payment module parameters"),(0,o.kt)("p",null,"The payment module contains the following parameters,\nthey can be updated with governance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'message Params {\n  // Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month\n  uint64 reserve_time = 1 [(gogoproto.moretags) = "yaml:\\"reserve_time\\""];\n  // The maximum number of payment accounts that can be created by one user\n  uint64 payment_account_count_limit = 2 [(gogoproto.moretags) = "yaml:\\"payment_account_count_limit\\""];\n  // Time duration threshold of forced settlement.\n  // If dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled.\n  uint64 forced_settle_time = 3 [(gogoproto.moretags) = "yaml:\\"forced_settle_time\\""];\n  // the maximum number of accounts that will be forced settled in one block\n  uint64 max_auto_force_settle_num = 4 [(gogoproto.moretags) = "yaml:\\"max_auto_force_settle_num\\""];\n  // The denom of fee charged in payment module\n  string fee_denom = 5 [(gogoproto.moretags) = "yaml:\\"fee_denom\\""];\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"reserve_time"),(0,o.kt)("td",{parentName:"tr",align:"center"},"uint64"),(0,o.kt)("td",{parentName:"tr",align:"center"},"15552000 (180 days)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"payment_account_count_limit"),(0,o.kt)("td",{parentName:"tr",align:"center"},"uint64"),(0,o.kt)("td",{parentName:"tr",align:"center"},"200")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"forced_settle_time"),(0,o.kt)("td",{parentName:"tr",align:"center"},"uint64"),(0,o.kt)("td",{parentName:"tr",align:"center"},"604800 (7 days)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"max_auto_force_settle_num"),(0,o.kt)("td",{parentName:"tr",align:"center"},"uint64"),(0,o.kt)("td",{parentName:"tr",align:"center"},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fee_denom"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"BNB")))),(0,o.kt)("h2",{id:"payment-moduel-keepers"},"Payment moduel keepers"),(0,o.kt)("p",null,"The payment module keeper provides access to query the parameters,\npayment account owner, storage price and several ways to update the ledger."),(0,o.kt)("p",null,"Currently, it's only used by the storage module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type PaymentKeeper interface {\n    GetParams(ctx sdk.Context) paymenttypes.Params\n    IsPaymentAccountOwner(ctx sdk.Context, addr string, owner string) bool\n    GetStoragePrice(ctx sdk.Context, params paymenttypes.StoragePriceParams) (price paymenttypes.StoragePrice, err error)\n    ApplyFlowChanges(ctx sdk.Context, from string, flowChanges []paymenttypes.OutFlow) (err error)\n    ApplyUserFlowsList(ctx sdk.Context, userFlows []paymenttypes.UserFlows) (err error)\n    UpdateStreamRecordByAddr(ctx sdk.Context, change *paymenttypes.StreamRecordChange) (ret *paymenttypes.StreamRecord, err error)\n}\n")),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"msgcreatepaymentaccount"},"MsgCreatePaymentAccount"),(0,o.kt)("p",null,"Used to create new payment account for a user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'message MsgCreatePaymentAccount {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator is the address of the stream account that created the payment account\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')),(0,o.kt)("h3",{id:"msgdeposit"},"MsgDeposit"),(0,o.kt)("p",null,"Used to deposit BNB tokens to a stream account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'message MsgDeposit {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator is the message signer for MsgDeposit and the address of the account to deposit from\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // to is the address of the account to deposit to\n  string to = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // amount is the amount to deposit\n  string amount = 3 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("h3",{id:"msgwithdraw"},"MsgWithdraw"),(0,o.kt)("p",null,"Used to withdraw BNB tokens from a stream account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'message MsgWithdraw {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator is the message signer for MsgWithdraw and the address of the receive account\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // from is the address of the account to withdraw from\n  string from = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // amount is the amount to withdraw\n  string amount = 3 [\n    (cosmos_proto.scalar) = "cosmos.Int",\n    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("h3",{id:"msgdisablerefund"},"MsgDisableRefund"),(0,o.kt)("p",null,"Used to make a stream account non-refundable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'message MsgDisableRefund {\n  option (cosmos.msg.v1.signer) = "owner";\n\n  // owner is the message signer for MsgDisableRefund and the address of the payment account owner\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // addr is the address of the payment account to disable refund\n  string addr = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')))}p.isMDXComponent=!0},77053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04-Funds-Flow-6427f84b2e439b031ad3515245bb7329.jpg"}}]);