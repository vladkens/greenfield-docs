"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9709],{686:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>g,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Gas and Fees",order:3},i="Gas and Fees",g={unversionedId:"guide/concept/gas-fees",id:"guide/concept/gas-fees",title:"Gas and Fees",description:"This document describes how Greenfield charge fee to different transaction types.",source:"@site/docs/guide/concept/gas-fees.md",sourceDirName:"guide/concept",slug:"/guide/concept/gas-fees",permalink:"/greenfield-docs/docs/guide/concept/gas-fees",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/concept/gas-fees.md",tags:[],version:"current",frontMatter:{title:"Gas and Fees",order:3},sidebar:"guideSidebar",previous:{title:"Key Management",permalink:"/greenfield-docs/docs/guide/concept/key-management"},next:{title:"Billing and Payment",permalink:"/greenfield-docs/docs/guide/concept/billing-payment"}},d={},s=[{value:"Introduction to <code>Gas</code> and <code>Fees</code>",id:"introduction-to-gas-and-fees",level:2},{value:"GasHub",id:"gashub",level:2},{value:"Block Gas Meter",id:"block-gas-meter",level:3},{value:"Fee Table",id:"fee-table",level:2}],p={toc:s},m="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gas-and-fees"},"Gas and Fees"),(0,r.kt)("p",null,"This document describes how Greenfield charge fee to different transaction types."),(0,r.kt)("h2",{id:"introduction-to-gas-and-fees"},"Introduction to ",(0,r.kt)("inlineCode",{parentName:"h2"},"Gas")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"Fees")),(0,r.kt)("p",null,"In the Cosmos SDK, ",(0,r.kt)("inlineCode",{parentName:"p"},"gas")," unit is designated to track resource consumption during execution."),(0,r.kt)("p",null,"On application-specific blockchains such as Greenfield, computational cost of storage is no\nlonger the main factor in determining transaction fees, but rather, it is the incentive mechanism\nof Greenfield. For instance, creating and deleting a storage object use similar I/O and computational\nresources, but Greenfield encourages users to delete unused storage objects to optimize storage space,\nresulting in lower transaction fees."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Greenfield Blockchain has taken a different approach from the gas meter design in Cosmos SDK. Instead,\nit has redesigned the gashub module to calculate gas consumption based on the type and content of the transaction,\nrather than just the consumption of storage and computational resources.")),(0,r.kt)("p",null,"Unlike networks like Ethereum, Greenfield transactions do not feature a gas price field.\nInstead, they consist of a fee and a gas wanted field. The gas price is inferred during the transaction pre-execution process,\nand the transactions are queued based on the gas price"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This means that Greenfield does not refund any excess gas fees to the transaction sender.\nTherefore, when constructing transactions, it is important to exercise caution when specifying the fees."))),(0,r.kt)("h2",{id:"gashub"},"GasHub"),(0,r.kt)("p",null,"All transaction types need to register their gas calculation logic to gashub. Currently, four types of calculation logic\nare supported:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_FixedType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_FixedType struct {\n    FixedType *MsgGasParams_FixedGasParams \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_GrantType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_GrantType struct {\n    GrantType *MsgGasParams_DynamicGasParams \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_MultiSendType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_MultiSendType struct {\n    MultiSendType *MsgGasParams_DynamicGasParams \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MsgGasParams_GrantAllowanceType"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MsgGasParams_GrantAllowanceType struct {\n    GrantAllowanceType *MsgGasParams_DynamicGasParams \n}\n")),(0,r.kt)("h3",{id:"block-gas-meter"},"Block Gas Meter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ctx.BlockGasMeter()")," serves as the gas meter designed to monitor and restrict gas consumption per block."),(0,r.kt)("p",null,"However, certain types of transactions may incur a high cost in Greenfield, leading to significant gas consumption.\nConsequently, Greenfield refrains from imposing any gas usage constraints on a block. Instead, Greenfield sets a block\nsize limit, preventing blocks from exceeding 1MB in size and mitigating the risk of excessively large blocks."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is no gas limitation of a block on Greenfield Blockchain.")),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("p",null,"Please note that the gas fee can be updated through governance and may not be immediately reflected in this\ndocumentation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Msg Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Gas Used"),(0,r.kt)("th",{parentName:"tr",align:null},"Gas Price"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected Fee(assuming BNB $300)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authz.MsgExec"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authz.MsgRevoke"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bank.MsgSend"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distribution.MsgSetWithdrawAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distribution.MsgWithdrawDelegatorReward"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distribution.MsgWithdrawValidatorCommission"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feegrant.MsgRevokeAllowance"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gov.MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gov.MsgSubmitProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+08"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gov.MsgVote"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+07"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gov.MsgVoteWeighted"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+07"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracle.MsgClaim"),(0,r.kt)("td",{parentName:"tr",align:null},"1.00E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0015")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slashing.MsgUnjail"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgBeginRedelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgCancelUnbondingDelegation"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgCreateValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+08"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgEditValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+07"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgUndelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bridge.MsgTransferOut"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sp.MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sp.MsgEditStorageProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+07"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staking.MsgCreateStorageProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+08"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgCopyObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgDeleteObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgCreateBucket"),(0,r.kt)("td",{parentName:"tr",align:null},"2.40E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0036")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgCreateGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"2.40E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0036")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgCreateObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgDeleteBucket"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgDeleteGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgLeaveGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgRejectSealObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+04"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgSealObject"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+02"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgUpdateGroupMember"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgCreatePaymentAccount"),(0,r.kt)("td",{parentName:"tr",align:null},"2.00E+05"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgPutPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"2.40E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0036")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgDeletePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgWithdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage.MsgDisableRefund"),(0,r.kt)("td",{parentName:"tr",align:null},"1.20E+03"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authz.MsgGrant"),(0,r.kt)("td",{parentName:"tr",align:null},"8e2 + 8e2 per item"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0012 per item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bank.MsgMultiSend"),(0,r.kt)("td",{parentName:"tr",align:null},"8e2 + 8e2 per item"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0012 per item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feegrant.MsgGrantAllowance"),(0,r.kt)("td",{parentName:"tr",align:null},"8e2 + 8e2 per item"),(0,r.kt)("td",{parentName:"tr",align:null},"5 gwei"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0012 per item")))))}o.isMDXComponent=!0}}]);