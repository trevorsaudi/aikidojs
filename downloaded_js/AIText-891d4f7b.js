import{_ as p,M as A,f as C,B as F,cF as k,H as O,an as N,df as h,cH as y,r as n,q as I,k as D,w as a,o,s as r,u as d,n as _,p as x,m as R,aa as T}from"./index-13ff96f4.js";import{I as v}from"./InputCheckbox-81cb3ca6.js";const L={props:{show:Boolean,issue:Object,selectedRule:Object,handleBulkIssues:{type:Boolean,default:!1},issues:{type:Array,default:()=>[]}},components:{BaseModal:A,BaseButton:C,BaseParagraph:F,InputTextArea:k,BaseHeading:O,InputCheckbox:v},emits:["cancel","confirm"],data(){return{reason:"",error:void 0,isFlaggedAsFalsePositive:!1,isIgnoring:!1}},methods:{handleCancel(){this.$emit("cancel"),this.reason=""},async handleFinish(){this.isIgnoring=!0;const{target:e}=this.selectedRule;this.reason=this.reason.trim();let s=null;e==="issue_id"?s=this.handleIngoreSingleIssue():s=this.handleCreateIgnoreRule(),await s.then(()=>{N.emit("issueUpdated",{id:this.issue.id}),this.$emit("confirm"),Toast.success({title:this.$t("NOTIFICATIONS.ISSUE_IGNORED.TITLE"),description:this.$t("NOTIFICATIONS.ISSUES.ISSUE_IGNORED_SUCCESS")}),this.reason="",this.isIgnoring=!1}).catch(t=>{this.error=t.response.data.reason_phrase,this.isIgnoring=!1})},async handleIngoreSingleIssue(){if(this.handleBulkIssues){await Promise.allSettled(this.issues.map(e=>h(e.id,this.reason,{disable_toasts:!0},this.isFlaggedAsFalsePositive)));return}await h(this.issue.id,this.reason,{disable_toasts:!0},this.isFlaggedAsFalsePositive)},async handleCreateIgnoreRule(){const{target:e,value:s}=this.selectedRule;let t="exact_match";(this.issue.type==="leaked_secret"||this.issue.type==="open_source"||this.issue.type==="sast"||this.issue.type==="malware")&&(t="starts_with"),e==="package"&&(t="exact_match"),await y(e,s,"ignore",this.reason,this.issue.repo_id,t,{disable_toasts:!0},this.issue.cloud_repo_id,this.isFlaggedAsFalsePositive)}}},w={class:"flex flex-column gap-12px"};function P(e,s,t,m,i,c){const l=n("BaseParagraph"),g=n("BaseHeading"),f=n("InputTextArea"),B=n("InputCheckbox"),E=n("BaseButton"),S=n("BaseModal");return t.show?(I(),D(S,{key:0,onClose:c.handleCancel,error:i.error,allowBackgroundClose:!1},{header:a(()=>[o(l,{color:"gray"},{default:a(()=>[r(d(e.$t("IGNORE_ISSUE_FEEDBACK_MODAL.TITLE")),1)]),_:1})]),content:a(()=>[_("div",w,[o(g,{as:"h3"},{default:a(()=>[r(d(e.$t("IGNORE_ISSUE_FEEDBACK_MODAL.BODY")),1)]),_:1}),o(l,{size:"medium",loose:""},{default:a(()=>[r(d(e.$t("IGNORE_ISSUE_FEEDBACK_MODAL.LABEL")),1)]),_:1})]),o(f,{name:"reason",placeholder:e.$t("IGNORE_ISSUE_FEEDBACK_MODAL.PLACEHOLDER"),modelValue:i.reason,"onUpdate:modelValue":s[0]||(s[0]=u=>i.reason=u),rows:"5"},null,8,["placeholder","modelValue"])]),footer:a(()=>[_("div",null,[o(B,{modelValue:i.isFlaggedAsFalsePositive,"onUpdate:modelValue":s[1]||(s[1]=u=>i.isFlaggedAsFalsePositive=u),name:"falsePositive",class:"hover_bg-transparent"},{default:a(()=>[o(l,null,{default:a(()=>[r("Send to Aikido to flag as false positive")]),_:1})]),_:1},8,["modelValue"])]),o(E,{onClicked:c.handleFinish,class:"ml-auto",isLoading:i.isIgnoring},{default:a(()=>[r(d(e.$t("IGNORE_ISSUE_FEEDBACK_MODAL.FINISH")),1)]),_:1},8,["onClicked","isLoading"])]),_:1},8,["onClose","error"])):x("",!0)}const G=p(L,[["render",P]]),U={},$={class:"bg-primary-aik-20 text-primary-aik-120 text--semi"};function b(e,s,t,m,i,c){const l=n("BaseIcon");return I(),R("mark",$,[o(l,{icon:"icon-ai-sparkle",size:14,color:"#3d3192"}),T(e.$slots,"default")])}const H=p(U,[["render",b]]);export{H as A,G as I};
