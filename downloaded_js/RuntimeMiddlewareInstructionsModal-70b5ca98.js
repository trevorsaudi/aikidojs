import{_ as x,g as O,H as w,au as y,B as C,V as S,f as b,X as V,e0 as M,d_ as H,r as s,q as t,k as g,w as o,m as n,o as i,F as h,s as p,n as m,p as f,t as T}from"./index-13ff96f4.js";import{S as R}from"./SelectRepo-706cbd92.js";import{B as P}from"./BaseCodeBlock-cec75629.js";import{I as F}from"./InputFilterDropdown-674351d9.js";import{R as N}from"./RuntimeServiceTokenSection-7650cd85.js";import{d as _,g as A}from"./runtimeSetup-d4572211.js";import{S as X}from"./SlidingButtonGroup-ee0f3352.js";import"./repoName-872812ed.js";import"./FilterButton-bb5393a7.js";import"./ActionMenu-3e4470bf.js";import"./RuntimeCopyTokenModal-6b556039.js";const D={components:{SlidingButtonGroup:X,BaseLink:O,BaseHeading:w,BaseCodeBlock:P,BaseConfirmModal:y,SelectRepo:R,BaseParagraph:C,InputText:S,BaseButton:b,InputFilterDropdown:F,RuntimeServiceTokenSection:N,XPreloader:V},props:{serviceId:{type:String,default:""}},async created(){this.isLoading=!0,this.service=await M(this.serviceId),this.service&&this.service.language&&(this.selectedLanguageId=this.service.language,this.onLanguageChange()),this.latestVersions=await H(),this.isLoading=!1},watch:{selectedLanguageId(){this.onLanguageChange()}},computed:{implementationOptions(){return _(this.selectedLanguageId)},languageOptions(){return A().map(e=>({key:e.value,label:e.label,onAction:()=>{this.selectedLanguageId=e.value}}))},selectedImplementationOption(){return this.implementationOptions.find(e=>e.value===this.selectedImplementationOptionId)}},methods:{onLanguageChange(){const e=_(this.selectedLanguageId);e.length>0&&(this.selectedImplementationOptionId=e[0].value)}},data(){return{selectedLanguageId:"js",selectedImplementationOptionId:"express",latestVersions:[],service:void 0,isLoading:!1}}},j={key:0,class:"w-full h-500px"},q={key:0,class:"mb-32px"},z={class:"flex gap-8px mb-16px"},E=["innerHTML"],G={key:1},U=["innerHTML"],J={key:1};function K(e,l,Q,W,d,a){const I=s("XPreloader"),c=s("BaseHeading"),B=s("InputFilterDropdown"),u=s("BaseCodeBlock"),v=s("BaseParagraph"),L=s("BaseConfirmModal");return t(),g(L,{width:950,title:"Setting up rate limiting and user tracking",description:"",buttonSubmitText:"Close",onSubmit:l[1]||(l[1]=r=>e.$emit("close")),allowBackgroundClose:!1,hideSecondaryButton:!0},{default:o(()=>[d.isLoading?(t(),n("div",j,[i(I,{size:"medium",class:"absolute-centered"})])):(t(),n(h,{key:1},[a.implementationOptions.length>0?(t(),n("div",q,[i(c,{as:"h4",class:"mb-16px"},{default:o(()=>[p("Implementation")]),_:1}),m("div",z,[i(B,{disableActiveState:!0,options:a.implementationOptions,modelValue:d.selectedImplementationOptionId,"onUpdate:modelValue":l[0]||(l[0]=r=>d.selectedImplementationOptionId=r)},null,8,["options","modelValue"])]),typeof a.selectedImplementationOption.snippet=="string"?(t(),g(u,{key:0},{default:o(()=>[m("pre",{innerHTML:a.selectedImplementationOption.snippet.trim()},null,8,E)]),_:1})):f("",!0),Array.isArray(a.selectedImplementationOption.snippet)?(t(),n("div",G,[(t(!0),n(h,null,T(a.selectedImplementationOption.snippet,(r,k)=>(t(),n("div",{key:k,class:"flex flex-col gap-4px"},[i(u,{class:"w-full"},{default:o(()=>[m("pre",{innerHTML:r.trim()},null,8,U)]),_:2},1024)]))),128))])):f("",!0)])):(t(),n("div",J,[i(c,{as:"h4",class:"mb-16px"},{default:o(()=>[p("Implementation")]),_:1}),i(v,null,{default:o(()=>[p(" No middleware implementation options available for this language. ")]),_:1})]))],64))]),_:1})}const re=x(D,[["render",K]]);export{re as default};
