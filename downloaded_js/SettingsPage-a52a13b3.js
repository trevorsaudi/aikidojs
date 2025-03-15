import{_ as d,d as g,B as b,J as _,K as O,L as I,r as t,m as R,o as s,w as o,n as l,F as w,q as f,u as S}from"./index-13ff96f4.js";import{X as T}from"./XTabs-d492da26.js";import{P as A}from"./PageHeader-46c38a32.js";const E={components:{PageHeader:A,XTabs:T,BasePill:g,BaseParagraph:b,AvatarImage:_},data(){return{tab:this.$route.name,activeRepositories:[],activeUsers:[]}},async mounted(){await Promise.allSettled([this.loadRepositories(),this.loadUsers()])},watch:{"$route.name"(){this.tab=this.$route.name},$teamContext(){Promise.allSettled([this.loadRepositories(),this.loadUsers()])}},computed:{tabs(){let e=[{title:"General",id:"accountOverview"}];return this.$groupUser.is_team_restricted?e.push({title:this.$t("INTEGRATIONS"),id:"integrationsOverview"}):e.push({title:this.$t("USERS"),id:"userOverview"},{title:"Teams",id:"teamOverview"},{title:this.$t("REPOSITORIES"),id:"repositoryOverview"},{title:this.$t("CLOUD_INTEGRATIONS"),id:"cloudOverview"},{title:this.$t("CONTAINER_IMAGE_REGISTRY"),id:"containerImageRegistryOverview"},{title:"Domains & APIs",id:"domainsOverview"},{title:this.$t("INTEGRATIONS"),id:"integrationsOverview"},{title:"SLA settings",id:"slaSettingsOverview"}),e},breadcrumbs(){let e=[{label:"Settings",href:"/settings"}];return this.tab==="accountOverview"?e.push({label:"Account"}):this.tab==="userOverview"?e.push({label:"Users"}):this.tab==="teamOverview"?e.push({label:"Teams"}):this.tab==="cloudOverview"?e.push({label:"Clouds"}):this.tab==="repositoryOverview"?e.push({label:"Repositories"}):this.tab==="integrationsOverview"?e=e.concat([{label:this.$t("INTEGRATIONS")}]):this.tab==="slaSettingsOverview"?e=e.concat([{label:"SLA Settings"}]):this.tab==="containerImageRegistryOverview"?e=e.concat([{label:this.$t("CONTAINER_IMAGE_REGISTRY")}]):this.tab==="domainsOverview"&&(e=e.concat([{label:"Domains & APIs"}])),e},groupName(){var e;return(e=this.$group)==null?void 0:e.name},groupAvatar(){return this.$group.avatar},pillTitle(){return`${this.activeRepositories.length} active repos`}},methods:{async loadRepositories(){const e=await O();this.activeRepositories=e.filter(i=>i.active)},async loadUsers(){this.$groupUser.can_access_settings&&(this.activeUsers=await I(1))}}},N={class:"flex align-center gap-16px"},P=l("i",{class:"icon icon-14px icon-user"},null,-1),$={class:"text-carbon-60"},U={class:"page-content"};function B(e,i,x,C,r,a){const n=t("AvatarImage"),c=t("BasePill"),u=t("BaseParagraph"),v=t("XTabs"),p=t("PageHeader"),m=t("router-view");return f(),R(w,null,[s(p,{title:a.groupName,breadcrumbs:a.breadcrumbs},{avatar:o(()=>[s(n,{class:"size-64 inline-block",name:a.groupName,src:a.groupAvatar},null,8,["name","src"])]),subTitle:o(()=>[l("div",N,[s(c,{variation:"green",title:e.$t("ACTIVE_REPOSITORIES",r.activeRepositories.length)},null,8,["title"]),s(u,{class:"flex align-center gap-8px"},{default:o(()=>[P,l("span",$,S(e.$t("ACTIVE_MEMBERS",r.activeUsers.length)),1)]),_:1})])]),tabs:o(()=>[s(v,{tabs:a.tabs,modelValue:r.tab,"onUpdate:modelValue":i[0]||(i[0]=h=>r.tab=h),class:"page-tabs",useRouterLinks:!0},null,8,["tabs","modelValue"])]),_:1},8,["title","breadcrumbs"]),l("div",U,[s(m)])],64)}const L=d(E,[["render",B]]);export{L as default};
