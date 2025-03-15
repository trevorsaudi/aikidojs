import{_ as B,M as k,B as v,H as w,f as b,X as U,V as C,an as y,r as i,q as d,k as T,w as e,o as s,s as a,n as o,m as h,F as V,t as I,u as g}from"./index-13ff96f4.js";import{r as R}from"./webhooks-7a1ad9af.js";import{I as M}from"./InputCheckbox-81cb3ca6.js";import{B as E}from"./BaseRadioInput-a7ac3557.js";const z={components:{BaseModal:k,BaseParagraph:v,BaseHeading:w,BaseButton:b,XPreloader:U,InputCheckbox:M,BaseRadioInput:E,InputText:C},emits:["saved","close"],data(){return{eventType:null,eventTypes:["issue.open.created","issue.snoozed","issue.ignored.manual","ci.gate.failed"],targetUrl:null,targetUrlError:null,eventOptions:[{id:"issue.open.created",description:"when a new issue is created and it is not auto-ignored"},{id:"issue.snoozed",description:"when an issue got snoozed"},{id:"issue.ignored.manual",description:"when an issue got manually ignored"},{id:"ci.gate.failed",description:"when a CI gate failed"}]}},async mounted(){this.isLoading=!1},watch:{targetUrl(){this.isValidTargetUrl&&this.targetUrlError!==null&&(this.targetUrlError=null)}},computed:{issueEventTypes(){return this.eventTypes.filter(c=>c.includes("issue."))},isConfirmButtonDisabled(){return!this.isValidTargetUrl||!this.eventType},isValidTargetUrl(){return this.targetUrl!==null&&this.targetUrl!==""}},methods:{handleCloseModal(){this.$emit("close")},async handleRegisterWebhook(){if(!this.isValidTargetUrl){this.targetUrlError="You must enter a targetUrl of what these credentials are for";return}await R({targetUrl:this.targetUrl,eventType:this.eventType}),y.emit("webhookCreated"),this.$emit("saved")}}},H={class:"relative flex flex-column gap-12px"},P={class:"flex flex-column gap-8px"},S={class:"flex flex-column gap-12px"},W={class:"flex flex-column gap-8px"},D={class:"flex flex-wrap gap-12px"},N={class:"flex gap-8px align-center"},A=["for"],F={class:"text--semi-bold"};function L(c,u,X,q,r,l){const n=i("BaseParagraph"),m=i("BaseHeading"),f=i("InputText"),_=i("BaseRadioInput"),p=i("BaseButton"),x=i("BaseModal");return d(),T(x,{width:650,onClose:l.handleCloseModal},{header:e(()=>[s(n,{color:"gray"},{default:e(()=>[a("Register webhooks")]),_:1})]),content:e(()=>[o("div",H,[s(m,{as:"h3"},{default:e(()=>[a("Register a webhook")]),_:1}),s(n,{size:"medium"},{default:e(()=>[a(" Register a webhook to get notifications for events happening in your Aikido workspace. ")]),_:1}),o("div",P,[s(f,{modelValue:r.targetUrl,"onUpdate:modelValue":u[0]||(u[0]=t=>r.targetUrl=t),title:"Add webhook endpoint",placeholder:"https://webhooks.example.com/aikido",error:r.targetUrlError},null,8,["modelValue","error"])]),s(n,{size:"medium"},{default:e(()=>[a(" Select the event type that you want to receive notifications for ")]),_:1}),o("div",S,[o("div",W,[s(n,{bold:""},{default:e(()=>[a("Issues")]),_:1}),o("div",D,[(d(!0),h(V,null,I(r.eventOptions,t=>(d(),h("div",N,[s(_,{name:t.id,id:t.id,value:t.id,checked:r.eventType==t.id,onSelect:Y=>r.eventType=t.id},null,8,["name","id","value","checked","onSelect"]),o("label",{for:t.id,class:"cursor-pointer"},[s(n,null,{default:e(()=>[o("span",F,g(t.id),1),a(": "+g(t.description),1)]),_:2},1024)],8,A)]))),256))])])])])]),footer:e(()=>[s(p,{onClicked:l.handleCloseModal,variation:"plain",class:"ml-auto"},{default:e(()=>[a("Cancel")]),_:1},8,["onClicked"]),s(p,{onClicked:l.handleRegisterWebhook,disabled:l.isConfirmButtonDisabled},{default:e(()=>[a(" Create webhook ")]),_:1},8,["onClicked","disabled"])]),_:1},8,["onClose"])}const Q=B(z,[["render",L]]);export{Q as default};
