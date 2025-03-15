import{_ as h,M as f,B as _,f as B,H as C,V as g,gV as w,an as v,gW as x,r as n,q as D,k as I,w as e,o as a,s,n as P,u as V}from"./index-13ff96f4.js";const b={props:{service:Object},components:{BaseModal:f,BaseParagraph:_,BaseButton:B,BaseHeading:C,InputText:g},emits:["close"],data(){return{isDownloading:!1,url:this.service.url}},async mounted(){},computed:{disableConfirmButton(){return!this.url||this.url.trim()===""}},methods:{handleClose(){this.$emit("close")},async handleConfirm(){try{this.isDownloading=!0,await w({serviceId:this.service.id,url:this.url}),v.emit("runtime.service.updated",this.service),await x({serviceId:this.service.id}),this.handleClose()}finally{this.isDownloading=!1}}}};function k(y,i,d,O,t,o){const l=n("BaseParagraph"),c=n("BaseHeading"),u=n("InputText"),r=n("BaseButton"),p=n("BaseModal");return D(),I(p,{width:650,onClose:o.handleClose},{header:e(()=>[a(l)]),content:e(()=>[a(c,{as:"h3"},{default:e(()=>[s("Download OpenAPI spec for "),P("strong",null,V(d.service.name),1)]),_:1}),a(l,{size:"medium"},{default:e(()=>[s(" Download an OpenAPI spec of the REST endpoints that Zen has observed for your app so far. Provide the app URL to include it in the OpenAPI spec. ")]),_:1}),a(u,{modelValue:t.url,"onUpdate:modelValue":i[0]||(i[0]=m=>t.url=m),name:"url",title:"Public app URL",placeholder:"https://www.example.com",required:!1},null,8,["modelValue"])]),footer:e(()=>[a(r,{variation:"plain",onClick:o.handleClose,class:"ml-auto"},{default:e(()=>[s("Cancel")]),_:1},8,["onClick"]),a(r,{onClick:o.handleConfirm,"is-loading":t.isDownloading,disabled:o.disableConfirmButton},{default:e(()=>[s("Confirm")]),_:1},8,["onClick","is-loading","disabled"])]),_:1},8,["onClose"])}const M=h(b,[["render",k]]);export{M as default};
