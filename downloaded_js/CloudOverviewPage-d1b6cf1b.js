import{_ as T,f as x,B as E,a2 as w,an as s,a3 as c,aR as B,dW as A,A as O,bg as R,r as o,m as P,o as n,w as l,n as C,S as V,F as k,q as m,s as u,k as D,u as h,p as N}from"./index-13ff96f4.js";import{P as y}from"./PageHeader-46c38a32.js";import{X as U}from"./XTabs-d492da26.js";import{b as X}from"./dateFns-a344cb79.js";import{g as L}from"./scans-7651948f.js";import"./index-b87db690.js";const H={components:{PageHeader:y,BaseButton:x,XTabs:U,BaseParagraph:E,XTooltip:w},watch:{tab(){this.$router.push({name:this.tab})},$teamContext(){this.loadClouds()}},data(){return{tab:this.$route.name,tabs:[{title:this.$t("CLOUD_ISSUES_OVERVIEW"),id:"cloudOverviewList"},{title:this.$t("CLOUD_OVERVIEW.TABS.CHECKS"),id:"cloudOverviewChecks"}],isLoading:!0,clouds:[],cloudRules:[],scanning:{},meta:null}},created(){s.on("cloudAdded",this.loadClouds),s.on("cloudEdited",this.loadClouds),s.on("cloudDeleted",this.loadClouds)},beforeUnmount(){s.off("cloudAdded",this.loadClouds),s.off("cloudEdited",this.loadClouds),s.off("cloudDeleted",this.loadClouds)},async mounted(){await Promise.allSettled([this.loadClouds(),this.loadCloudRules()]),this.loadCloudMeta()},computed:{breadcrumbs(){let t=[{label:"Clouds"}];return this.tab==="cloudOverviewChecks"&&t.push({label:this.$t("CHECKS")}),t},connectedCloudsCount(){return this.clouds.length},subtitle(){return this.$t("X_CONNECTED_CLOUDS",this.connectedCloudsCount)},hasNonAccessibleCloud(){return this.nonAccessibleClouds.length>0},nonAccessibleClouds(){return this.clouds.filter(t=>!!t.is_not_accessible)},lastScan(){var t;return(t=this.meta)!=null&&t.last_scanned_at?`Last scan ${X(this.meta.last_scanned_at)} ago`:null},nextScanTime(){var t;return(t=this.meta)!=null&&t.next_scan_at?`Next scan on ${c.fromUnix(this.meta.next_scan_at).format(c.SHORT_DATE_FORMAT)}`:null}},methods:{async loadClouds(){this.clouds=await B(),this.isLoading=!1},async loadCloudRules(){this.cloudRules=await A()},async loadCloudMeta(){this.meta=await L("cloud")},async handleStartAllScans(){if(O.hasExpiredFullTrial())return this.$modal.show("UpgradeAccountModal");let t=[];this.clouds.forEach(a=>t.push(R(a.id,"scan"))),(await Promise.allSettled(t)).forEach(a=>{if(a.status==="fulfilled"){const r=this.scanning[a.value]??0;r&&r===100&&(this.scanning[a.value]=1)}})}}},I=C("i",{class:"icon icon-calender icon-12px valign-middle ml-8px"},null,-1);function F(t,i,a,r,d,e){const _=o("BaseButton"),b=o("XTabs"),f=o("XTooltip"),p=o("BaseParagraph"),g=o("PageHeader"),S=o("router-view");return m(),P(k,null,[n(g,{breadcrumbs:e.breadcrumbs,title:"Clouds",subtitle:e.subtitle},{rightContent:l(()=>[n(_,{disabled:e.connectedCloudsCount===0,onClicked:e.handleStartAllScans,variation:"primary",border:!0},{default:l(()=>[u(" Start scan ")]),_:1},8,["disabled","onClicked"])]),tabs:l(()=>[n(b,{class:"page-tabs",tabs:d.tabs,modelValue:d.tab,"onUpdate:modelValue":i[0]||(i[0]=v=>d.tab=v)},null,8,["tabs","modelValue"])]),footerRightContent:l(()=>[d.meta?(m(),D(p,{key:0,color:"subdued"},{default:l(()=>[u(h(e.lastScan)+" ",1),I,n(f,null,{default:l(()=>[u(h(e.nextScanTime),1)]),_:1})]),_:1})):N("",!0)]),_:1},8,["breadcrumbs","subtitle"]),C("div",{class:V(["page-content",[e.hasNonAccessibleCloud&&"pt-32px"]])},[n(S)],2)],64)}const j=T(H,[["render",F]]);export{j as default};
