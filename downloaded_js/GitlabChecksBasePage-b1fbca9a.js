import{_ as f,f as _,d as b,an as c,aV as l,cf as C,a0 as k,Z as R,r as s,k as v,m as B,o as i,w as a,n,F as I,q as d,s as x}from"./index-13ff96f4.js";import{P as y}from"./PageHeader-46c38a32.js";const G={components:{BaseButton:_,BasePill:b,PageHeader:y},data(){return{repositories:[],isLoading:!0,isFetchingRepositories:!0}},async mounted(){c.on("gitlabChecksConfigurationUpdated",this.getRepositories),await this.getRepositories(),this.isLoading=!1},beforeUnmount(){c.off("gitlabChecksConfigurationUpdated",this.getRepositories)},watch:{$teamContext(){this.getRepositories()}},provide(){return{repositories:l(()=>this.repositories),isFetchingRepositories:l(()=>this.isFetchingRepositories)}},computed:{breadcrumbs(){return[{label:"Settings",href:"/settings/integrations"},{label:"GitLab Checks"}]},repositoriesWithConfiguration(){return this.repositories.filter(e=>!!e.configuration)}},methods:{async getRepositories(e){this.isFetchingRepositories=!0;try{const t=await C(e);this.repositories=t}catch(t){k.isAxiosError(t)&&t.response.status===404?this.$toast.error({title:"Integration not enabled",description:"You do not have this integration enabled."}):this.$toast.error({title:"Unable to load configurations",description:t.message??"An unknown error occured"}),this.$router.push("/settings/integrations")}finally{this.isFetchingRepositories=!1}},async handleUninstallIntegration(){(await this.$modal.show("UninstallGitlabCiServiceModal")).type==="saved"&&(this.$toast.success({title:"Integration removed",description:"The Gitlab MR checks integration has been removed successfully"}),R.fetchGitlabChecksIntegrationStatus(),this.$router.push("/settings/integrations"))}}},T={class:"flex align-center gap-8px"},w={class:"flex gap-16px"},P=n("span",{class:"text--bold"},"CI Scan History",-1),U={class:"page-content"};function F(e,t,N,S,h,o){const g=s("XPreloader"),u=s("BasePill"),r=s("BaseButton"),p=s("PageHeader"),m=s("router-view");return h.isLoading?(d(),v(g,{key:0,class:"supercenter",size:"medium"})):(d(),B(I,{key:1},[i(p,{breadcrumbs:o.breadcrumbs,title:"GitLab Checks"},{subTitle:a(()=>[n("div",T,[i(u,{title:e.$t("SETTINGS.INTEGRATIONS.GITLAB.HEADER.CONFIGURATIONS_TITLE",o.repositoriesWithConfiguration.length),variation:"gray-fill"},null,8,["title"])])]),rightContent:a(()=>[n("div",w,[i(r,{variation:"plain",size:"medium",onClick:o.handleUninstallIntegration},{default:a(()=>[x("Uninstall")]),_:1},8,["onClick"]),i(r,{size:"medium",variation:"tertiary",as:"link",to:"/settings/integrations/ci/checks/scans"},{default:a(()=>[P]),_:1})])]),_:1},8,["breadcrumbs"]),n("div",U,[i(m,{onReloadRepositories:o.getRepositories},null,8,["onReloadRepositories"])])],64))}const $=f(G,[["render",F]]);export{$ as default};
