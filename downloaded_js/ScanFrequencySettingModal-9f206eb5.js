import{_ as B,au as _,d as C,r as a,q as n,k as r,w as c,n as l,o as u,s as g,m,F as y,t as F,S as p,u as v,p as N}from"./index-13ff96f4.js";import{B as x}from"./BaseRadioInput-a7ac3557.js";const q={components:{BaseConfirmModal:_,BaseRadioInput:x,BasePill:C},emits:["close","submit"],props:{scanFrequencyOptions:{type:Array,required:!0},initialScanFrequency:{type:String,default:null}},data(){return{selectedFrequency:null}},mounted(){const t=this.scanFrequencyOptions.find(i=>!i.disabled&&i.id==this.initialScanFrequency);if(t){this.selectedFrequency=t.id;return}const s=this.scanFrequencyOptions.find(i=>!i.disabled);s&&(this.selectedFrequency=s.id)},methods:{handleSelectOption(t){this.selectedFrequency=t},onSubmit(){this.$emit("submit",this.selectedFrequency)}}},E=l("hr",{class:"divider w-full"},null,-1),k={class:"mt-24px"},A=["for"];function M(t,s,i,T,o,d){const b=a("BaseParagraph"),S=a("BaseRadioInput"),f=a("BasePill"),h=a("BaseConfirmModal");return n(),r(h,{width:484,title:t.$t("SCAN_FREQUENCY.MODAL.TITLE"),description:t.$t("SCAN_FREQUENCY.MODAL.DESC"),buttonSubmitText:t.$t("SCAN_FREQUENCY.MODAL.BUTTON"),onSubmit:d.onSubmit,onClose:s[0]||(s[0]=e=>t.$emit("close")),onSecondaryButtonClicked:s[1]||(s[1]=e=>t.$emit("close"))},{default:c(()=>[l("div",null,[E,l("div",k,[u(b,{class:"mb-12px",size:"medium",semiBold:""},{default:c(()=>[g("Scanning Frequency")]),_:1}),(n(!0),m(y,null,F(i.scanFrequencyOptions,e=>(n(),m("label",{for:e.id,class:p(["flex gap-8px mb-12px align-center",{disabled:e.disabled}])},[u(S,{name:"scanFrequency",id:e.id,value:e.id,disabled:e.disabled,checked:o.selectedFrequency===e.id,onSelect:()=>d.handleSelectOption(e.id)},null,8,["id","value","disabled","checked","onSelect"]),l("div",{class:p(["paragraph paragraph--small text-carbon-60 cursor-pointer",{"text-shadow-bold-carbon-100 text-carbon-100":o.selectedFrequency===e.id}])},v(e.title),3),e.tag?(n(),r(f,{key:0,title:e.tag,variation:"purple"},null,8,["title"])):N("",!0)],10,A))),256))])])]),_:1},8,["title","description","buttonSubmitText","onSubmit"])}const w=B(q,[["render",M]]);export{w as S};
