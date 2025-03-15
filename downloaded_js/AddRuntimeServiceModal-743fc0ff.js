import{_ as v,N as h,H as S,au as B,B as _,V as f,f as x,gq as b,an as k,r as l,q as i,k as C,w as I,n as s,o as r,m,F as V,t as y,u as w}from"./index-13ff96f4.js";import{S as R}from"./SelectRepoSearchable-f2be202e.js";import{B as T}from"./BaseCodeBlock-cec75629.js";import{B as E}from"./BaseRadioInput-a7ac3557.js";import{a as M}from"./service-39b61fa2.js";import{g as A}from"./runtimeSetup-d4572211.js";import"./repoName-872812ed.js";import"./InputSearchDropdown-02988f6b.js";import"./ActionMenu-3e4470bf.js";const N={emits:["close"],components:{BaseSelect:h,BaseRadioInput:E,BaseCodeBlock:T,BaseHeading:S,BaseConfirmModal:B,SelectRepoSearchable:R,BaseParagraph:_,InputText:f,BaseButton:x},data(){return{name:"",repoId:-1,environment:"production",language:"js"}},computed:{languageOptions(){return A().map(n=>({id:n.value,title:n.label}))}},methods:{async onSubmit(){const{service_id:n,token:t}=await this.createService();await this.$modal.show("RuntimeInstallInstructionsModal",{serviceId:n,token:t}),this.$router.push(`/runtime/services/${n}/events`)},async createService(){const n=await b({name:this.name,repoId:this.repoId,environment:this.environment,language:this.language});return k.emit("runtime.service.added"),n},onClose(){this.$emit("close")},handleEnvironmentSelect(n){this.environment=n},environmentOptions(){return M()}}},O={class:"flex flex-column gap-24px"},q=s("label",{class:"text-primary-aik-140 text--semi body--normal mb-8px block"},"Environment",-1),L={class:"flex gap-24px align-center"},U={class:"flex align-center gap-8px"},F=["for"];function H(n,t,P,Y,o,a){const u=l("InputText"),d=l("BaseSelect"),c=l("SelectRepoSearchable"),p=l("BaseRadioInput"),g=l("BaseConfirmModal");return i(),C(g,{width:800,title:"Protect Your App With Zen",description:"You'll need to install Zen in your app. The generated token will be used to report security events to Aikido.",buttonSubmitText:"Continue To Install",onSubmit:a.onSubmit,onSecondaryButtonClicked:a.onClose,onClose:a.onClose,allowBackgroundClose:!1},{default:I(()=>[s("div",O,[r(u,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=e=>o.name=e),name:"name",title:"App name",placeholder:"Name",required:!0},null,8,["modelValue"]),r(d,{modelValue:o.language,"onUpdate:modelValue":t[1]||(t[1]=e=>o.language=e),id:"language",label:"Language",options:a.languageOptions},null,8,["modelValue","options"]),r(c,{modelValue:o.repoId,"onUpdate:modelValue":t[2]||(t[2]=e=>o.repoId=e),label:"Choose a repository to link"},null,8,["modelValue"]),s("div",null,[q,s("div",L,[(i(!0),m(V,null,y(a.environmentOptions(),e=>(i(),m("div",U,[r(p,{modelValue:o.environment,name:"environment",value:e.id,id:e.id,onSelect:()=>a.handleEnvironmentSelect(e.id),checked:o.environment===e.id},null,8,["modelValue","value","id","onSelect","checked"]),s("label",{class:"text-primary-aik-140 text--semi-bold leading-18px cursor-pointer",for:e.id},w(e.title),9,F)]))),256))])])])]),_:1},8,["onSubmit","onSecondaryButtonClicked","onClose"])}const X=v(N,[["render",H]]);export{X as default};
