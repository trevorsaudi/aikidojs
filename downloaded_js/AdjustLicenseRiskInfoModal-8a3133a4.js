import{_ as g,M as v,B as _,H as B,f as L,N as M,cF as w,an as C,r as a,q as S,k as y,w as e,o,s as t,n,u as h}from"./index-13ff96f4.js";import{o as R}from"./licenses-6ab38515.js";const V={props:{licenseType:String,count:Number},emits:["close"],components:{BaseModal:v,BaseParagraph:_,BaseHeading:B,BaseButton:L,BaseSelect:M,InputTextArea:w},data(){return{riskLevel:null,riskLevelErrorMessage:null,reason:null,reasonErrorMessage:null,isSaving:!1}},watch:{riskLevel(){this.hasSelectedRiskLevel&&this.riskLevelErrorMessage!==null&&(this.riskLevelErrorMessage=null)},reason(){this.hasValidReason&&this.reasonErrorMessage!==null&&(this.reasonErrorMessage=null)}},computed:{options(){return[{id:"critical",title:"Critical"},{id:"high",title:"High"},{id:"medium",title:"Medium"},{id:"low",title:"Low"}]},hasValidReason(){return this.reason===null?!1:this.reason.trim()!==""},hasSelectedRiskLevel(){return this.riskLevel!==null}},methods:{handleCloseModal(){this.$emit("close")},async handleOverwriteLicenseRiskInfo(){if(!this.hasSelectedRiskLevel){this.riskLevelErrorMessage="You must select a risk level";return}if(!this.hasValidReason){this.reasonErrorMessage="You must enter a reason for adjusting the risk";return}this.isSaving=!0,this.reason=this.reason.trim();try{await R(this.licenseType,this.riskLevel,this.reason),this.handleCloseModal(),this.$toast.success({title:"License risk updated",description:"You have successfully updated the license risk information"}),C.emit("licenseRiskUpdated")}finally{this.isSaving=!1}}}},x={class:"flex flex-column gap-12px"};function E(T,l,c,I,s,i){const d=a("BaseParagraph"),m=a("BaseHeading"),p=a("BaseSelect"),k=a("InputTextArea"),u=a("BaseButton"),f=a("BaseModal");return S(),y(f,{width:600,onClose:i.handleCloseModal},{header:e(()=>[o(d,{color:"gray"},{default:e(()=>[t("Adjust license risk info")]),_:1})]),content:e(()=>[n("div",x,[o(m,{as:"h3"},{default:e(()=>[t("Do you want to change the risk level of "),n("strong",null,h(c.licenseType)+"?",1)]),_:1}),o(d,{size:"medium"},{default:e(()=>[t(" Select the risk level you'd like to assign to this license type below. This will impact "),n("strong",null,h(c.count),1),t(" packages.")]),_:1}),o(p,{label:"Select new risk level",options:i.options,modelValue:s.riskLevel,"onUpdate:modelValue":l[0]||(l[0]=r=>s.riskLevel=r),error:s.riskLevelErrorMessage},null,8,["options","modelValue","error"]),o(k,{name:"reason",title:"Provide a reason",placeholder:"Reason (optional)",modelValue:s.reason,"onUpdate:modelValue":l[1]||(l[1]=r=>s.reason=r),rows:"5",error:s.reasonErrorMessage},null,8,["modelValue","error"])])]),footer:e(()=>[o(u,{onClicked:i.handleCloseModal,variation:"plain",class:"ml-auto"},{default:e(()=>[t("Cancel")]),_:1},8,["onClicked"]),o(u,{onClicked:i.handleOverwriteLicenseRiskInfo,"is-loading":s.isSaving},{default:e(()=>[t("Confirm")]),_:1},8,["onClicked","is-loading"])]),_:1},8,["onClose"])}const N=g(V,[["render",E]]);export{N as default};
