"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7546],{74055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Transaction Lifecycle",order:7},s="Transaction Lifecycle",r={unversionedId:"guide/concept/transaction-lifecycle",id:"guide/concept/transaction-lifecycle",title:"Transaction Lifecycle",description:"This document describes the lifecycle of a transaction from creation to the committed state changes.",source:"@site/docs/guide/concept/transaction-lifecycle.md",sourceDirName:"guide/concept",slug:"/guide/concept/transaction-lifecycle",permalink:"/greenfield-docs/docs/guide/concept/transaction-lifecycle",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/concept/transaction-lifecycle.md",tags:[],version:"current",frontMatter:{title:"Transaction Lifecycle",order:7},sidebar:"guideSidebar",previous:{title:"Data Integrity and Availability",permalink:"/greenfield-docs/docs/guide/concept/data-availability"},next:{title:"Data Storage",permalink:"/greenfield-docs/docs/guide/concept/data-storage"}},l={},c=[{value:"Creation",id:"creation",level:2},{value:"Transaction Creation",id:"transaction-creation",level:3},{value:"Transaction Creation via Command Line",id:"transaction-creation-via-command-line",level:4},{value:"Gas and Fees",id:"gas-and-fees",level:5},{value:"CLI Example",id:"cli-example",level:5},{value:"Add transactions to the Mempool",id:"add-transactions-to-the-mempool",level:2},{value:"Types of Checks",id:"types-of-checks",level:3},{value:"Decoding the transactions",id:"decoding-the-transactions",level:3},{value:"Confirm the transactions messages (ValidateBasic)",id:"confirm-the-transactions-messages-validatebasic",level:3},{value:"AnteHandler",id:"antehandler",level:3},{value:"Gas Payment Process",id:"gas-payment-process",level:3},{value:"Discard or Addition of transactions to Mempool",id:"discard-or-addition-of-transactions-to-mempool",level:3},{value:"Inclusion in a Block",id:"inclusion-in-a-block",level:2},{value:"State Changes",id:"state-changes",level:2},{value:"DeliverTx ABCI function",id:"delivertx-abci-function",level:3},{value:"Commit the Block",id:"commit-the-block",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,i.kt)("p",null,"This document describes the lifecycle of a transaction from creation to the committed state changes.\nThe majority of this page is copied from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/basics/tx-lifecycle"},"Cosmos-sdk Docs"),".\nTransaction definition is described in a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/core/transactions.md"},"different doc"),".\nThe transaction will be referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),"."),(0,i.kt)("h2",{id:"creation"},"Creation"),(0,i.kt)("h3",{id:"transaction-creation"},"Transaction Creation"),(0,i.kt)("p",null,"There are various ways to create transactions.\nWhile the command-line is a straightforward method to interact with an application, transactions can also be generated through a ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/grpc-rest"},"gRPC or REST interface")," or another entry point specified by the application developer.\nThe interaction between the user and the application varies based on the web interface or wallet they use.\nFor example, users can create ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," through platforms like ",(0,i.kt)("a",{parentName:"p",href:"https://lunie.io/#/"},"Lunie.io")," and sign them using a Ledger Nano S."),(0,i.kt)("h4",{id:"transaction-creation-via-command-line"},"Transaction Creation via Command Line"),(0,i.kt)("p",null,"One of the main application interfaces is the command-line interface. The transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," can be created by the user\ninputting a command in the following format from the ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/"},"command-line"),", providing the type of transaction\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"[command]"),", arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"[args]"),", and configurations such as gas prices in ",(0,i.kt)("inlineCode",{parentName:"p"},"[flags]"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx [command] [args] [flags]\n")),(0,i.kt)("p",null,"This command will automatically ",(0,i.kt)("strong",{parentName:"p"},"create")," the transaction, ",(0,i.kt)("strong",{parentName:"p"},"sign")," it using the account's private key, and ",(0,i.kt)("strong",{parentName:"p"},"broadcast"),"\nit to the specified peer node."),(0,i.kt)("p",null,"There are several required and optional flags for transaction creation. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--from")," flag specifies which ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/concept/accounts"},"account"),"\nthe transaction is originating from. For example, if the transaction is sending coins, the funds will be drawn from the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," address."),(0,i.kt)("h5",{id:"gas-and-fees"},"Gas and Fees"),(0,i.kt)("p",null,"Additionally, there are several ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/"},"flags")," users can use to indicate how much they are willing to pay in ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/concept/gas-fees"},"fees"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gas")," refers to how much ",(0,i.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/concept/gas-fees"},"gas"),". Different from other cosmos blockchain where gas represents computational\nresources, on greenfield blockchain, the gas of a transaction is predefined. It is suggested to be estimated by providing ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),"\nas the value for ",(0,i.kt)("inlineCode",{parentName:"li"},"--gas"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gas-prices")," specifies how much the user is willing to pay per unit of gas, which can be one or multiple denominations of tokens.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"li"},"--gas-prices=5000000000BNB")," means the user is willing to pay 5Gwei BNB per unit of gas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--fees")," specifies how much in fees the user is willing to pay in total."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--timeout-height")," specifies a block timeout height to prevent the tx from being committed past a certain height.")),(0,i.kt)("p",null,"The ultimate value of the fees paid is equal to the gas multiplied by the gas prices. In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"fees = ceil(gas * gasPrices)"),".\nThus, since fees can be calculated using gas prices and vice versa, the users specify only one of the two."),(0,i.kt)("p",null,"Later, validators decide whether to include the transaction in their block by comparing the given or calculated\n",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," to their local ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," will be rejected if its ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," is not high enough, so users\nare incentive to pay more."),(0,i.kt)("h5",{id:"cli-example"},"CLI Example"),(0,i.kt)("p",null,"Users of the application ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," can enter the following command into their CLI to generate a transaction to send\n1000wei BNB from a ",(0,i.kt)("inlineCode",{parentName:"p"},"senderAddress")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"recipientAddress"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd tx send <recipientAddress> 1000BNB --from <senderAddress> --gas auto\n")),(0,i.kt)("h2",{id:"add-transactions-to-the-mempool"},"Add transactions to the Mempool"),(0,i.kt)("p",null,"Each full-node (running Tendermint) that receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," sends an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/abci/abci.html#messages"},"ABCI message"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", to the application layer to check for validity, and receives an ",(0,i.kt)("inlineCode",{parentName:"p"},"abci.ResponseCheckTx"),".\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," passes the checks, it will be added to the Mempool of each node. The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/mempool/"},(0,i.kt)("strong",{parentName:"a"},"Mempool")),"\nis an in-memory pool of transactions that is unique to each node, and the transaction will remain pending until it is included in a block.\nhonest nodes will discard ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," if it is found to be invalid.\nPrior to consensus, nodes continuously check incoming transactions and gossip them to their peers."),(0,i.kt)("p",null,"In this section, we will provide you with details on the functions that are used to add a transaction to the Mempool and how they work."),(0,i.kt)("h3",{id:"types-of-checks"},"Types of Checks"),(0,i.kt)("p",null,"The full-nodes perform stateless, then stateful checks on ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," during the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," ABCI function, with the goal to\nidentify and reject an invalid transaction as early on as possible to avoid wasted computation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Stateless"))," checks do not require nodes to access state - light clients or offline nodes can do\nthem - and are thus less computationally expensive. Stateless checks include making sure addresses\nare not empty, enforcing non-negative numbers, and other logic specified in the definitions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Stateful"))," checks validated transactions and messages based on a committed state.\nSome examples of the checks that a transaction goes through include verifying that the necessary values are present and\ncan be transacted, checking if the sender is authorized to transact or has the correct ownership,\nand ensuring that the address has sufficient funds.\nAt any given moment, full-nodes typically have multiple versions\nof the application's internal state for different purposes. For example, nodes will execute state\nchanges while in the process of verifying transactions, but still need a copy of the last committed\nstate in order to answer queries - they should not respond using state with uncommitted changes."),(0,i.kt)("p",null,"In order to verify a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),", full-nodes call the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," ABCI function, which includes both ",(0,i.kt)("em",{parentName:"p"},"stateless")," and ",(0,i.kt)("em",{parentName:"p"},"stateful"),"\nchecks. Further validation happens later in the ",(0,i.kt)("a",{parentName:"p",href:"#delivertx"},(0,i.kt)("inlineCode",{parentName:"a"},"DeliverTx"))," stage. ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," goes\nthrough several steps, beginning with decoding ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),"."),(0,i.kt)("h3",{id:"decoding-the-transactions"},"Decoding the transactions"),(0,i.kt)("p",null,"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is received by the application from the underlying consensus engine (e.g. Tendermint), it is still in\nits encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte")," form and needs to be unmarshaled in order to be processed. Then,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"runTx")," function is executed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"runTxModeCheck")," mode. This mode runs all checks but\nexit before executing messages and writing state changes."),(0,i.kt)("h3",{id:"confirm-the-transactions-messages-validatebasic"},"Confirm the transactions messages (ValidateBasic)"),(0,i.kt)("p",null,"Messages ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," are extracted from ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg"),"\ninterface implemented by the module developer is run for each transaction.\nTo discard obviously invalid messages, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," type calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method very early in the\nprocessing of the message in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," transactions.\n",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," can include only ",(0,i.kt)("strong",{parentName:"p"},"stateless")," checks (checks that do not require access to the state)."),(0,i.kt)("h3",{id:"antehandler"},"AnteHandler"),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic")," method have done the checking, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler"),"s are run. The ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," is a set of\nmodules that check transactions validity. Technically, they are optional, but in practice,\nthey are very often present to perform signature verification, gas calculation, fee deduction and other\ncore operations related to blockchain transactions."),(0,i.kt)("p",null,"A copy of the cached context is provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler"),", which performs limited checks specified\nfor the transaction type. Using a copy allows the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," to do stateful checks for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," without\nmodifying the last committed state, and revert to the original if the execution fails."),(0,i.kt)("h3",{id:"gas-payment-process"},"Gas Payment Process"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),", which keeps a ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," that will track how much gas has been used during the execution of ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),",\nis initialized. The user-provided amount of gas for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is known as ",(0,i.kt)("inlineCode",{parentName:"p"},"GasWanted"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"GasConsumed")," parameter,\nthe amount of gas consumed during the execution, ever exceeds the ",(0,i.kt)("inlineCode",{parentName:"p"},"GasWanted")," amount, the execution will stop and the changes\nmade to the cached copy of the state won't be committed. Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," ABCI function sets the amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"GasUsed"),"\nat the same value as ",(0,i.kt)("inlineCode",{parentName:"p"},"GasConsumed")," and returns it in the result.\nAfter calculating the gas and fee values, validator-nodes check that the user-specified\n",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," is greater than their locally defined ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices"),"."),(0,i.kt)("h3",{id:"discard-or-addition-of-transactions-to-mempool"},"Discard or Addition of transactions to Mempool"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," fails at any point during ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),", it is discarded, and the transaction lifecycle ends at that point. Otherwise, if it passes ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," successfully, the default protocol is to relay it to peer\nnodes and add it to the Mempool so that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," becomes a candidate to be included in the next block."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"mempool")," serves the purpose of keeping track of transactions seen by all full-nodes.\nFull-nodes keep a ",(0,i.kt)("strong",{parentName:"p"},"mempool cache")," of the last ",(0,i.kt)("inlineCode",{parentName:"p"},"mempool.cache_size")," transactions they have seen, as a first line of\ndefense to prevent replay attacks. Ideally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mempool.cache_size")," is large enough to encompass all\nthe transactions in the full mempool. If the mempool cache is too small to keep track of all\nthe transactions, ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," is responsible for identifying and rejecting replayed transactions."),(0,i.kt)("p",null,"Currently existing preventative measures include fees and a ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence")," (nonce) counter to distinguish\nreplayed transactions from identical but valid ones. If an attacker tries to spam nodes with many\ncopies of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),", full-nodes keeping a mempool cache will reject identical copies instead of running\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," function on all of them. Even if the copies have incremented ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence")," numbers, attackers are\ndisincentivized by the need to pay fees."),(0,i.kt)("p",null,"Validator nodes keep a mempool to prevent replay attacks, just as full-nodes do, but also use it as\na pool of unconfirmed transactions in preparation of block inclusion. Note that even if a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),"\npasses all checks at this stage, it is still possible to be found invalid later on, because\n",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," does not fully validate the transaction (i.e. it does not actually execute the messages)."),(0,i.kt)("h2",{id:"inclusion-in-a-block"},"Inclusion in a Block"),(0,i.kt)("p",null,"Consensus occurs in ",(0,i.kt)("strong",{parentName:"p"},"rounds"),", during which validator nodes agree on which transactions to accept.\nEach round begins with a proposer creating a block of the most\nrecent transactions and ends with ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/introduction/ecosystem#validators"},(0,i.kt)("strong",{parentName:"a"},"validators")),",\nspecial full-nodes with voting power responsible\nfor consensus, agreeing to accept the block or go with a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," block instead. Validator nodes\nexecute the consensus algorithm, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/consensus/consensus.html#terms"},"Tendermint BFT"),",\nconfirming the transactions using ABCI requests to the application, in order to come to this agreement."),(0,i.kt)("p",null,"The first step of consensus is the ",(0,i.kt)("strong",{parentName:"p"},"block proposal"),". One proposer amongst the validators is chosen\nby the consensus algorithm to create and propose a block - in order for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," to be included, it\nmust be in this proposer's mempool."),(0,i.kt)("h2",{id:"state-changes"},"State Changes"),(0,i.kt)("p",null,"The next step of the consensus is to execute the transactions to fully validate them. All full-nodes\nthat receive a block proposal from the correct proposer execute the transactions by calling the ABCI functions\n",(0,i.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," for each transaction,\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock"),". While each full-node runs everything\nlocally, this process yields a single, unambiguous result, since the messages' state transitions are deterministic and transactions are\nexplicitly ordered in the block proposal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"        -----------------------\n        |Receive Block Proposal|\n        -----------------------\n                  |\n              v\n        -----------------------\n        | BeginBlock          |\n        -----------------------\n                  |\n              v\n        -----------------------\n        | DeliverTx(tx0)      |\n        | DeliverTx(tx1)      |\n        | DeliverTx(tx2)      |\n        | DeliverTx(tx3)      |\n        |   .         |\n        |   .         |\n        |   .         |\n        -----------------------\n                  |\n              v\n        -----------------------\n        | EndBlock        |\n        -----------------------\n                  |\n              v\n        -----------------------\n        | Consensus       |\n        -----------------------\n                  |\n              v\n        -----------------------\n        | Commit          |\n        -----------------------\n")),(0,i.kt)("h3",{id:"delivertx-abci-function"},"DeliverTx ABCI function"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," ABCI function, defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," type, does the bulk of the\nstate transitions: the function is executed for each transaction in the block in sequential order as committed\nto during consensus. Under the hood, ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," is almost identical to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," function but calls the\n",(0,i.kt)("inlineCode",{parentName:"p"},"runTx")," function in the deliver mode instead of using the check mode.\nInstead of using their ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState"),", full-nodes use ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Decoding:")," Since ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," is an ABCI call, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is received in the encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte")," form.\nFirst, the nodes unmarshal the transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxConfig")," defined in the app.\nThen, they call ",(0,i.kt)("inlineCode",{parentName:"p"},"runTx")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"runTxModeDeliver"),", which is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx"),"\nbut also executes and writes state changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Checks and AnteHandler:")," Full-nodes call the ",(0,i.kt)("inlineCode",{parentName:"p"},"validateBasicMsgs")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," again. This second check\nhappens because they may not have seen the same transactions during the addition to Mempool stage\nand a malicious proposer may have included invalid ones. One difference here is that the\n",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," will not compare the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-prices")," variable to the node's ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices")," variable since that value is local\nto each node - differing values across nodes would yield nondeterministic results.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MsgServiceRouter"),":")," While ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTx")," would have exited, ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliverTx")," continues to run\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"runMsgs")," function to fully execute each ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service method within the transaction.\nSince the transaction may have messages from different modules, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," type needs to know which module\nto find the appropriate handler. This is achieved using the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgServiceRouter")," router so that it can be processed by\nthe module's Protobuf ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Msg")," service:")," Protobuf ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service is responsible for executing each message in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," and causes\nstate transitions to persist in ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverTxState"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PostHandlers:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"PostHandler"),"s run after the execution of the message. If they fail, the state change of ",(0,i.kt)("inlineCode",{parentName:"p"},"runMsgs"),",\nas well of ",(0,i.kt)("inlineCode",{parentName:"p"},"PostHandlers")," are both reverted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Gas:")," While a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is being delivered, a ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," is used to keep track of how much\ngas is being used; if execution completes, ",(0,i.kt)("inlineCode",{parentName:"p"},"GasUsed")," is set and returned to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"abci.ResponseDeliverTx"),". If execution halts because ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockGasMeter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," has run out or something else goes\nwrong, a deferred function at the end appropriately errors or panics."))),(0,i.kt)("p",null,"If there are any failed state changes resulting from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," being invalid or ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," running out,\nthe transaction processing terminates and any state changes are reverted. Invalid transactions in a\nblock proposal cause validator nodes to reject the block and vote for a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," block instead."),(0,i.kt)("h3",{id:"commit-the-block"},"Commit the Block"),(0,i.kt)("p",null,"The final step is for the nodes to commit the block and state changes. Validator nodes\nperform the previous step of executing state transitions in order to validate the transactions,\nthen sign the block to confirm it. Full nodes that are not validators do not\nparticipate in consensus - i.e. they cannot vote - but listen for votes to understand whether they should commit the state changes."),(0,i.kt)("p",null,"When they receive enough validator votes (2/3+ ",(0,i.kt)("em",{parentName:"p"},"precommits")," weighted by voting power), full nodes commit to a new block to be added to the blockchain and\nfinalize the state transitions in the application layer. A new state root is generated to serve as\na merkle proof for the state transitions. Applications use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit"),"\nABCI method inherited from ",(0,i.kt)("inlineCode",{parentName:"p"},"Baseapp"),"; it syncs all the state transitions by\nwriting the ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState")," into the application's internal state. As soon as the state changes are\ncommitted, ",(0,i.kt)("inlineCode",{parentName:"p"},"checkState")," start afresh from the most recently committed state and ",(0,i.kt)("inlineCode",{parentName:"p"},"deliverState"),"\nresets to ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," in order to be consistent and reflect the changes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes"),": "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not all blocks have the same number of transactions, and it is possible for consensus to\nresult in a ",(0,i.kt)("inlineCode",{parentName:"li"},"nil")," block or one with none at all. "),(0,i.kt)("li",{parentName:"ul"},"In a public blockchain network, it is possible\nfor validators to be ",(0,i.kt)("strong",{parentName:"li"},"byzantine"),", or malicious, which may prevent a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tx")," from being committed in\nthe blockchain. Possible malicious behaviors include the proposer deciding to censor a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tx")," by\nexcluding it from the block or a validator voting against the block.")),(0,i.kt)("p",null,"At this point, the transaction lifecycle of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," is over: nodes have verified its validity,\ndelivered it by executing its state changes, and committed those changes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," itself,\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte")," form, is stored in a block and appended to the blockchain."))}h.isMDXComponent=!0}}]);