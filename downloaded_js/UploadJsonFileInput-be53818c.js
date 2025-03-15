import{_ as d,B as u,r as f,q as n,m as h,n as o,s as r,k as m,w as _,u as y,p as R}from"./index-13ff96f4.js";const g={components:{BaseParagraph:u},emits:["upload"],data(){return{file:void 0}},methods:{handleSelectFile(l){const e=l.target.files;if(e.length!==1){Toast.error({title:this.$t("ERROR"),description:"Please only select a single file to upload"});return}const a=e[0];if(a.type!=="application/json"){Toast.error({title:this.$t("ERROR"),description:"Please select a valid json file to upload"});return}const s=new FileReader;s.addEventListener("load",()=>{const t=s.result;try{JSON.parse(t)}catch{Toast.error({title:this.$t("ERROR"),description:"Please select a valid json file to upload"});return}this.file=a,this.$emit("upload",t)}),s.readAsText(e[0])}}},x={class:"flex align-end gap-8px"},B={class:"gcp-input-file",for:"uploadKeyFile"},F=o("i",{class:"icon icon-arrow-up icon-12px ml-4px"},null,-1);function k(l,e,a,s,t,i){const c=f("BaseParagraph");return n(),h("div",x,[o("label",B,[r(" Upload JSON file "),o("input",{id:"uploadKeyFile",name:"uploadKeyFile",type:"file",accept:".json",onInput:e[0]||(e[0]=p=>i.handleSelectFile(p))},null,32),F]),t.file?(n(),m(c,{key:0,color:"subdued",class:"italic"},{default:_(()=>[r(y(t.file.name),1)]),_:1})):R("",!0)])}const v=d(g,[["render",k]]);export{v as U};
