import{_,d as b,an as c,aV as h,ca as C,a0 as T,r as s,k as R,m as k,o as i,w as n,n as a,F as B,q as l}from"./index-13ff96f4.js";import{P as I}from"./PageHeader-46c38a32.js";const P={components:{BasePill:b,PageHeader:I},data(){return{searchTerm:"",repositories:[],isLoading:!0,isFetchingRepositories:!0}},watch:{$teamContext(){this.getRepositories()}},async mounted(){c.on("githubChecksConfigurationUpdated",this.getRepositories),await this.getRepositories(),this.isLoading=!1},beforeUnmount(){c.off("githubChecksConfigurationUpdated",this.getRepositories)},provide(){return{repositories:h(()=>this.repositories),isFetchingRepositories:h(()=>this.isFetchingRepositories)}},computed:{breadcrumbs(){return[{label:"Settings",href:"/settings/integrations"},{label:"GitHub CI"}]},repositoriesWithConfiguration(){return this.repositories.filter(t=>!!t.configuration)}},methods:{async getRepositories(){this.isFetchingRepositories=!0;const t={searchTerm:this.searchTerm};try{const e=await C(t);this.repositories=e}catch(e){T.isAxiosError(e)&&e.response.status===404?this.$toast.error({title:"Integration not enabled",description:"You do not have this integration enabled."}):this.$toast.error({title:"Unable to load configurations",description:e.message??"An unknown error occured"}),this.$router.push("/settings/integrations")}finally{this.isFetchingRepositories=!1}}}},v={class:"flex align-center gap-8px"},x=a("span",{class:"text--bold"},"CI Scan History",-1),y={class:"page-content"};function H(t,e,w,E,o,r){const u=s("XPreloader"),p=s("BasePill"),g=s("BaseButton"),d=s("PageHeader"),m=s("router-view");return o.isLoading?(l(),R(u,{key:0,class:"supercenter",size:"medium"})):(l(),k(B,{key:1},[i(d,{breadcrumbs:r.breadcrumbs,title:"GitHub CI"},{subTitle:n(()=>[a("div",v,[i(p,{title:t.$t("SETTINGS.INTEGRATIONS.GITHUB_CHECKS.HEADER.CONFIGURATIONS_TITLE",r.repositoriesWithConfiguration.length),variation:"gray-fill"},null,8,["title"])])]),rightContent:n(()=>[i(g,{size:"medium",variation:"tertiary",as:"link",to:"/settings/integrations/ci/checks/scans"},{default:n(()=>[x]),_:1})]),_:1},8,["breadcrumbs"]),a("div",y,[i(m,{searchTerm:o.searchTerm,"onUpdate:searchTerm":[e[0]||(e[0]=f=>o.searchTerm=f),r.getRepositories]},null,8,["searchTerm","onUpdate:searchTerm"])])],64))}const U=_(P,[["render",H]]);export{U as default};
