import{_ as r,an as t,e0 as s,r as n,q as a,m as c,o as d,p as l}from"./index-13ff96f4.js";import{B as u}from"./BaseCallout-aea0aba4.js";const v={components:{BaseCallout:u},props:{serviceId:{type:String,required:!0}},data(){return{service:null}},mounted(){this.loadService()},watch:{serviceId(){this.loadService()}},created(){t.on("runtime.service.updated",this.loadService)},beforeUnmount(){t.off("runtime.service.deleted",this.loadService)},methods:{async loadService(){this.serviceId&&this.serviceId>0?this.service=await s(this.serviceId):this.service=null},async onConfigureClicked(){await this.$modal.show("UpdateRuntimeServiceTokenModal",{service:this.service}),await this.loadService()}}},m={key:0,class:"mb-24px"};function p(h,f,_,C,e,o){const i=n("BaseCallout");return e.service&&!e.service.has_token?(a(),c("div",m,[d(i,{title:"You didn't generate a token yet",description:"You need to generate a token to be able to protect your app.",actionLabel:"Configure",onAction:o.onConfigureClicked,variation:"info"},null,8,["onAction"])])):l("",!0)}const g=r(v,[["render",p]]);export{g as R};
