import{_ as C,X as S,g as V,H,au as M,B as A,V as R,f as N,e0 as P,d_ as D,r,q as o,k as b,w as n,m as d,o as e,F as x,s as a,n as i,p as g,t as F}from"./index-13ff96f4.js";import{S as G}from"./SelectRepo-706cbd92.js";import{B as K}from"./BaseCodeBlock-cec75629.js";import{I as U}from"./InputFilterDropdown-674351d9.js";import{g as k,a as _,b as v}from"./runtimeSetup-d4572211.js";import{S as X}from"./SlidingButtonGroup-ee0f3352.js";import"./repoName-872812ed.js";import"./FilterButton-bb5393a7.js";import"./ActionMenu-3e4470bf.js";const E={components:{XPreloader:S,SlidingButtonGroup:X,BaseLink:V,BaseHeading:H,BaseCodeBlock:K,BaseConfirmModal:M,SelectRepo:G,BaseParagraph:A,InputText:R,BaseButton:N,InputFilterDropdown:U},props:{serviceId:{type:String,default:""},token:{type:String,default:""}},async created(){this.isLoading=!0,this.serviceId&&(this.service=await P(this.serviceId),this.service&&this.service.language&&(this.selectedLanguageId=this.service.language,this.onLanguageChange())),this.latestVersions=await D(),this.isLoading=!1},watch:{selectedLanguageId(){this.onLanguageChange()}},computed:{gitHubURL(){const t=k().find(l=>l.value===this.selectedLanguageId);return t==null?void 0:t.github},installOptions(){return _(this.selectedLanguageId,this.latestVersions)},selectedInstallOption(){return _(this.selectedLanguageId,this.latestVersions).find(t=>t.value===this.selectedInstallOptionId)},implementationOptions(){return v(this.selectedLanguageId)},languageOptions(){return k().map(t=>({key:t.value,label:t.label,onAction:()=>{this.selectedLanguageId=t.value}}))},selectedImplementationOption(){return this.implementationOptions.find(t=>t.value===this.selectedImplementationOptionId)},submitText(){return this.token&&this.isCopied?"Close":this.token?"Copy token":"Close"}},methods:{copyToken(){window.isSecureContext&&navigator.clipboard.writeText(this.token),this.$toast.success("Token copied to clipboard"),this.isCopied=!0},handleSubmit(){if(this.token&&this.isCopied)return this.$emit("close");if(this.token)return this.copyToken();this.$emit("close")},onLanguageChange(){const t=_(this.selectedLanguageId,this.latestVersions);t.length>0&&(this.selectedInstallOptionId=t[0].value);const l=v(this.selectedLanguageId);l.length>0&&(this.selectedImplementationOptionId=l[0].value)}},data(){return{isCopied:!1,selectedInstallOptionId:"npm",selectedLanguageId:"js",selectedImplementationOptionId:"express",latestVersions:[],service:void 0,isLoading:!1}}},Z={key:0,class:"w-full h-500px"},z=i("i",{class:"icon icon-github icon-12px valign-middle mr-4px"},null,-1),j={class:"border-1 border-surface-orange-80 py-8px px-16px rounded-4px bg-surface-orange-20 mb-32px"},q={key:0,class:"mb-32px"},W={class:"flex"},J={class:"mb-32px"},Q=["innerHTML"],Y={key:1,class:"mb-32px"},$={class:"flex gap-8px mb-16px"},ee=["innerHTML"],te={key:1},ne=["innerHTML"],se={class:"mb-32px"},oe={key:0},ie=i("code",null,"AIKIDO_TOKEN",-1),ae={key:1},le=i("code",null,"AIKIDO_TOKEN",-1);function re(t,l,f,de,c,s){const L=r("XPreloader"),O=r("BaseLink"),p=r("BaseParagraph"),m=r("BaseHeading"),B=r("SlidingButtonGroup"),I=r("InputFilterDropdown"),h=r("BaseCodeBlock"),y=r("InputText"),T=r("BaseConfirmModal");return o(),b(T,{width:800,title:"How To Install Zen",description:"Select the stack you are using and follow the instructions to install Zen.",buttonSubmitText:s.submitText,onSubmit:s.handleSubmit,allowBackgroundClose:!1,hideSecondaryButton:!0},{default:n(()=>[c.isLoading?(o(),d("div",Z,[e(L,{size:"medium",class:"absolute-centered"})])):(o(),d(x,{key:1},[e(p,{class:"-mt-24px mb-32px"},{default:n(()=>[e(O,{href:s.gitHubURL,target:"_blank",rel:"noopener noreferrer"},{default:n(()=>[z,a(" View on GitHub ")]),_:1},8,["href"])]),_:1}),i("div",j,[e(p,{size:"small",color:"orange"},{default:n(()=>[a("We recommend testing Zen locally or on staging before deploying to production.")]),_:1})]),this.serviceId?g("",!0):(o(),d("div",q,[e(m,{as:"h4",class:"mb-16px"},{default:n(()=>[a("Language")]),_:1}),i("div",W,[e(B,{actions:s.languageOptions,"initial-selected-button":c.selectedLanguageId},null,8,["actions","initial-selected-button"])])])),i("div",J,[e(m,{as:"h4",class:"mb-16px"},{default:n(()=>[a("Installation")]),_:1}),e(I,{options:s.installOptions,modelValue:c.selectedInstallOptionId,"onUpdate:modelValue":l[0]||(l[0]=u=>c.selectedInstallOptionId=u),class:"mb-16px",disableActiveState:!0},null,8,["options","modelValue"]),e(h,{class:"mb-8px overflow-x-auto"},{default:n(()=>[i("pre",{innerHTML:s.selectedInstallOption.snippet.trim()},null,8,Q)]),_:1})]),s.implementationOptions.length>0?(o(),d("div",Y,[e(m,{as:"h4",class:"mb-16px"},{default:n(()=>[a("Implementation")]),_:1}),i("div",$,[e(I,{disableActiveState:!0,options:s.implementationOptions,modelValue:c.selectedImplementationOptionId,"onUpdate:modelValue":l[1]||(l[1]=u=>c.selectedImplementationOptionId=u)},null,8,["options","modelValue"])]),typeof s.selectedImplementationOption.snippet=="string"?(o(),b(h,{key:0},{default:n(()=>[i("pre",{innerHTML:s.selectedImplementationOption.snippet.trim()},null,8,ee)]),_:1})):g("",!0),Array.isArray(s.selectedImplementationOption.snippet)?(o(),d("div",te,[(o(!0),d(x,null,F(s.selectedImplementationOption.snippet,(u,w)=>(o(),d("div",{key:w,class:"flex flex-col gap-4px"},[e(h,{class:"w-full"},{default:n(()=>[i("pre",{innerHTML:u.trim()},null,8,ne)]),_:2},1024)]))),128))])):g("",!0)])):g("",!0),i("div",se,[e(m,{as:"h4",class:"mb-8px"},{default:n(()=>[a("Token")]),_:1}),f.token?(o(),d("div",oe,[e(p,{class:"mb-8px",loose:""},{default:n(()=>[a(" This token is shown only once. If lost, you can regenerate it. Add this token as "),ie,a(" in your environment variables. ")]),_:1}),e(y,{name:"token",modelValue:f.token,disabled:!0,ref:"input",class:"truncate flex-1"},null,8,["modelValue"])])):(o(),d("div",ae,[e(p,{class:"mb-8px",loose:""},{default:n(()=>[a(" The token is shown when creating an app. If lost, you can regenerate it. Add this token as "),le,a(" in your environment variables. ")]),_:1})]))])],64))]),_:1},8,["buttonSubmitText","onSubmit"])}const be=C(E,[["render",re]]);export{be as default};
