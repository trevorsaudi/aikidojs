import{_ as f,H as h,f as p,B as g,M as _,N as C,z as B,gL as m,an as k,r as s,q as S,k as v,w as e,o as a,n as T,s as o,u as b}from"./index-13ff96f4.js";const w={emits:["close"],components:{BaseHeading:h,BaseButton:p,BaseParagraph:g,BaseModal:_,BaseSelect:C,InputSwitch:B},props:{repositories:Array},data(){return{isSaving:!1}},computed:{},methods:{handleClose(){this.$emit("close")},async handleDeleteConfiguration(){this.isSaving=!0;try{for(const t of this.repositories)await m(t.id);k.emit("gitlabChecksConfigurationUpdated"),this.handleClose()}finally{this.isSaving=!1}}}},x={class:"flex flex-column gap-8px"};function y(t,D,r,N,c,n){const i=s("BaseParagraph"),d=s("BaseHeading"),l=s("BaseButton"),u=s("BaseModal");return S(),v(u,{width:530,onClose:n.handleClose,canClose:!0},{header:e(()=>[a(i)]),content:e(()=>[T("div",x,[a(d,{as:"h3"},{default:e(()=>[o(b(t.$t("SETTINGS.INTEGRATIONS.GITLAB.DELETE_MODAL.TITLE",r.repositories.length)),1)]),_:1}),a(i,{color:"subdued",loose:""},{default:e(()=>[o(" Gitlab checks will be disabled for the selected repos. You can always set up the configuration again after. ")]),_:1})])]),footer:e(()=>[a(l,{onClicked:n.handleClose,variation:"plain",class:"ml-auto"},{default:e(()=>[o("Cancel")]),_:1},8,["onClicked"]),a(l,{onClicked:n.handleDeleteConfiguration,variation:"destructive","is-loading":c.isSaving},{default:e(()=>[o("Disable Configuration")]),_:1},8,["onClicked","is-loading"])]),_:1},8,["onClose"])}const I=f(w,[["render",y]]);export{I as default};
