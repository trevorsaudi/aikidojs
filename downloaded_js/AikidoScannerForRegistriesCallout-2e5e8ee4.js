import{_ as c,B as g,a2 as m,r as i,q as u,m as d,o as a,w as r,n,s as l,ai as y,bL as x,p as T}from"./index-13ff96f4.js";import{B as w}from"./BaseCallout-aea0aba4.js";const k={props:{cloudRepository:Object},components:{BaseParagraph:g,XTooltip:m},methods:{async handleLinkCloudRepoToCodeRepo(){(await this.$modal.show("LinkCloudRepoToCodeRepoModal",{cloudRepository:this.cloudRepository})).type=="saved"&&this.$emit("linked")}}},A={class:"flex flex-1 justify-between align-center"},b={class:"flex align-center text-surface-orange-120"},I=n("i",{class:"icon icon-critical text-inherit mr-4px"},null,-1),N=n("i",{class:"icon icon-link text-inherit mr-4px"},null,-1),R=n("span",{class:"link blue"},"Link",-1),S=[N,R];function v(o,e,h,p,C,t){const s=i("XTooltip"),f=i("BaseParagraph");return u(),d("div",A,[a(f,{class:"flex"},{default:r(()=>[n("span",b,[I,l(" Unlinked "),a(s,null,{default:r(()=>[l("Aikido will not be able to deduplicate/group everything perfectly")]),_:1})]),n("a",{href:"#",onClick:e[0]||(e[0]=y((..._)=>t.handleLinkCloudRepoToCodeRepo&&t.handleLinkCloudRepoToCodeRepo(..._),["stop"])),class:"flex align-center text-blue-accent ml-16px px-12px py-6px rounded-8px hover_bg-blue-ultra-light"},S)]),_:1})])}const F=c(k,[["render",v]]),L={components:{BaseCallout:w},inject:["registries"],data(){return{cloudsWithContainerConfigurationIssues:[],cloudsWithoutContainerConfigurationIssues:[]}},async mounted(){await this.loadCloudsWithContainerConfigurationIssues()},computed:{hasRegistries(){return this.registries.length>0},relevantCloudsWithContainerConfigurationIssues(){return this.cloudsWithContainerConfigurationIssues.filter(o=>!this.cloudsWithoutContainerConfigurationIssues.some(e=>e.type==o.type))},shouldShowEnableContainerScannerForCloudCallout(){return this.hasRegistries?!1:this.relevantCloudsWithContainerConfigurationIssues.length>0},cloudType(){return this.relevantCloudsWithContainerConfigurationIssues.length<1?null:this.relevantCloudsWithContainerConfigurationIssues[0].type},cloudNames(){return this.relevantCloudsWithContainerConfigurationIssues.map(o=>o.name).join(", ")}},methods:{onAction(){this.cloudType&&(this.cloudType==="gcp"&&this.$modal.show("FixContainerAnalysisDisabledForGcpCloud"),this.cloudType==="aws"&&this.$modal.show("FixContainerAnalysisDisabledForAwsCloud"))},onSecondaryAction(){if(!this.cloudType)return;let o="https://help.aikido.dev/doc/aikido-scanner-for-aws-ecr/docwbhIaoZTj";this.cloudType=="gcp"&&(o="https://help.aikido.dev/doc/container-scanning-for-gcp-artifact-registry-with-the-aikido-scanner/docWcFDn1baw"),window.open(o,"_blank")},async loadCloudsWithContainerConfigurationIssues(){const{clouds:o,well_configured_clouds:e}=await x();this.cloudsWithContainerConfigurationIssues=o,this.cloudsWithoutContainerConfigurationIssues=e}}},W={key:0,class:"mb-24px"};function B(o,e,h,p,C,t){const s=i("BaseCallout");return t.shouldShowEnableContainerScannerForCloudCallout?(u(),d("div",W,[a(s,{title:o.$t("CALLOUTS.CONTAINERS_NOT_SCANNED.TITLE"),description:o.$t("CALLOUTS.CONTAINERS_NOT_SCANNED.DESC",{cloudNames:t.cloudNames}),variation:"danger",actionLabel:"Enable Container Scanner",secondaryActionLabel:"More Info",onAction:t.onAction,onSecondaryAction:t.onSecondaryAction},null,8,["title","description","onAction","onSecondaryAction"])])):T("",!0)}const O=c(L,[["render",B]]);export{O as A,F as L};
