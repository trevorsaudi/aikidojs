import{C as x}from"./ConnectedCloudsOverviewTable-416aad6c.js";import{E as N}from"./EmptyMetricsIllutstration-491e438a.js";import{S as P}from"./SettingsEmptyState-8e8644cd.js";import{D as R,a as A}from"./DataTable-e31a825a.js";import{D as L,a as D}from"./DataTableCell-51c0104f.js";import{_ as C,B as M,e as V,x as W,a2 as $,ag as B,r as a,q as c,m as p,o as e,w as t,s as r,u as h,n as f,k as _,p as T,ah as j,ai as O,F as w,a1 as z,t as I}from"./index-13ff96f4.js";import{C as H}from"./CloudActionMenu-eae2a866.js";import{D as X}from"./DataTableLastScanColumn-e155b78a.js";import{B as F}from"./BaseStatusLabel-0ccd2806.js";import"./cloudLimitations-520d943e.js";import"./BaseCallout-aea0aba4.js";import"./DeleteCloudModal-fcf43857.js";import"./ActionMenu-3e4470bf.js";import"./ConfigureCloudModal-3285b63a.js";import"./SelectTeam-d51b76ec.js";import"./StackedAvatars-4925baeb.js";import"./dateFns-a344cb79.js";import"./index-b87db690.js";const G={props:{cloud:Object,scanningProgress:Number},components:{BaseParagraph:M,CloudActionMenu:H,DataTableCell:L,BaseIconButton:V,BaseIcon:W,DataTableLastScanColumn:X,BaseStatusLabel:F,XTooltip:$},computed:{isNotAccessible(){return!!this.cloud.is_not_accessible},sourceIcon(){return this.cloud.type=="aws"?"icon-location_aws":this.cloud.type=="gcp"?"icon-gcp":this.cloud.type=="azure"?"icon-azure":this.cloud.type=="digocean"?"icon-digitalocean":""},hasTeams(){return B.hasTeams}}},U={class:"flex flex-1 justify-between align-center overflow-hidden"},Y=f("i",{class:"icon icon-critical"},null,-1),q={class:"flex align-center justify-between w-full"},J={class:"ws-pre"},K=f("div",{class:"shimmer shimmer--blue"},null,-1),Q=[K];function Z(i,m,n,b,y,d){const o=a("BaseIcon"),s=a("DataTableCell"),l=a("BaseParagraph"),S=a("XTooltip"),v=a("BaseStatusLabel"),E=a("DataTableLastScanColumn"),k=a("BaseIconButton"),u=a("CloudActionMenu");return c(),p(w,null,[e(s,null,{default:t(()=>[e(o,{size:"16",icon:d.sourceIcon,color:"#737283"},null,8,["icon"])]),_:1}),e(s,null,{default:t(()=>[e(l,{truncate:""},{default:t(()=>[r(h(n.cloud.account_purpose),1)]),_:1})]),_:1}),e(s,null,{default:t(()=>[f("div",U,[e(l,{truncate:""},{default:t(()=>[r(h(n.cloud.name),1)]),_:1}),d.isNotAccessible?(c(),_(l,{key:0,color:"danger",class:"flex align-center gap-4px"},{default:t(()=>[Y,r(" This cloud could not be scanned ")]),_:1})):T("",!0)])]),_:1}),e(s,null,{default:t(()=>[e(l,{truncate:""},{default:t(()=>[r(h(n.cloud.account_id),1)]),_:1})]),_:1}),d.hasTeams?(c(),_(s,{key:0,class:"desktop-small_hidden"},{default:t(()=>[f("div",q,[e(l,{class:"truncate"},{default:t(()=>{var g;return[r(h(((g=n.cloud.linked_teams[0])==null?void 0:g.name)||"-"),1)]}),_:1}),n.cloud.linked_teams.length>1?(c(),_(v,{key:0,class:"direction-ltr",size:"compact"},{default:t(()=>[r(h(i.$t("X_OTHERS",n.cloud.linked_teams.length-1))+" ",1),e(S,null,{default:t(()=>[f("span",J,h(n.cloud.linked_teams.map(g=>g.name).join(`
`)),1)]),_:1})]),_:1})):T("",!0)])]),_:1})):T("",!0),e(s,null,{default:t(()=>[n.scanningProgress&&n.scanningProgress>0&&n.scanningProgress<100?(c(),p("div",{key:0,class:"loading-bar",style:j({width:`${n.scanningProgress}%`})},Q,4)):(c(),_(E,{key:1,"last-scanned-at":n.cloud.last_scanned_at},null,8,["last-scanned-at"]))]),_:1}),e(s,{spacing:"compact",alignment:"center"},{default:t(()=>[f("div",{class:"data-table__row__action-container",onClick:m[0]||(m[0]=O(()=>i.$refs.trigger.click(),["stop"]))},[e(u,{cloud:n.cloud},{trigger:t(g=>[e(k,{onClicked:g.toggle,icon:"icon-actions",class:"data-table__row__action",ref:"trigger"},null,8,["onClicked"])]),_:1},8,["cloud"])])]),_:1})],64)}const ee=C(G,[["render",Z]]),te={components:{LoadingSkeleton:z,DataTableRow:D,DataTableCell:L},methods:{calculateDynamicWidth(i=90){return`${Math.random()*(i-20)+20}%`}}};function ne(i,m,n,b,y,d){const o=a("LoadingSkeleton"),s=a("DataTableCell"),l=a("DataTableRow");return c(),_(l,null,{default:t(()=>[e(s,null,{default:t(()=>[e(o,{height:"16px"})]),_:1}),e(s,null,{default:t(()=>[e(o,{height:"16px"})]),_:1}),e(s,null,{default:t(()=>[e(o,{height:"16px",width:d.calculateDynamicWidth()},null,8,["width"])]),_:1}),e(s,null,{default:t(()=>[e(o,{height:"16px"})]),_:1}),e(s,null,{default:t(()=>[e(o,{height:"16px"})]),_:1}),e(s,null,{default:t(()=>[e(o,{height:"16px"})]),_:1})]),_:1})}const ae=C(te,[["render",ne]]),oe={props:{clouds:Array,isLoading:Boolean,showEmptyState:Boolean,scanningProgress:Object,onConnectNewCloud:Function},components:{CloudIntegrationsOverviewTableRow:ee,CloudIntegrationsOverviewTableRowLoading:ae,SettingsEmptyState:P,EmptyMetricsIllutstration:N,DataTable:R,DataTableHeader:A,DataTableRow:D},methods:{handleNavigateToCloud(i){this.$router.push(`/clouds/${i}`)}},computed:{hasTeams(){return B.hasTeams}}},se={key:0,class:"mt-24px"};function le(i,m,n,b,y,d){const o=a("DataTableHeader"),s=a("CloudIntegrationsOverviewTableRowLoading"),l=a("CloudIntegrationsOverviewTableRow"),S=a("DataTableRow"),v=a("DataTable"),E=a("EmptyMetricsIllutstration"),k=a("SettingsEmptyState");return c(),p(w,null,[e(v,{isLoading:n.isLoading,class:"fixed-desktop-table"},{header:t(()=>[e(o,{width:"48px",alignment:"center"},{default:t(()=>[r("Type")]),_:1}),e(o,{width:"15%"},{default:t(()=>[r("Purpose")]),_:1}),e(o,{width:"auto"},{default:t(()=>[r("Name")]),_:1}),e(o,{width:"auto"},{default:t(()=>[r("Account id")]),_:1}),d.hasTeams?(c(),_(o,{key:0,width:"170px",class:"desktop-small_hidden"},{default:t(()=>[r("Teams")]),_:1})):T("",!0),e(o,{width:"115px"},{default:t(()=>[r("Last scan")]),_:1}),e(o,{width:"48px",alignment:"center"})]),body:t(()=>[n.isLoading?(c(),p(w,{key:0},I(3,u=>e(s,{key:u})),64)):(c(!0),p(w,{key:1},I(n.clouds,u=>(c(),_(S,{key:u.id,clickable:"",onClick:O(()=>d.handleNavigateToCloud(u.id),["stop"])},{default:t(()=>[e(l,{cloud:u,scanningProgress:n.scanningProgress[u.id]},null,8,["cloud","scanningProgress"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["isLoading"]),n.showEmptyState?(c(),p("div",se,[e(k,{title:i.$t("SETTINGS.CLOUDS.OVERVIEW.EMPTY_STATE_TITLE"),description:i.$t("SETTINGS.CLOUDS.OVERVIEW.EMPTY_STATE_DESCRIPTION"),actionLabel:i.$t("SETTINGS.CLOUDS.OVERVIEW.EMPTY_STATE_ACTION_LABEL"),onAction:n.onConnectNewCloud},{default:t(()=>[e(E)]),_:1},8,["title","description","actionLabel","onAction"])])):T("",!0)],64)}const ce=C(oe,[["render",le]]),ie={components:{ConnectedCloudsOverviewTable:x,CloudIntegrationsOverviewTable:ce}};function re(i,m,n,b,y,d){const o=a("CloudIntegrationsOverviewTable"),s=a("ConnectedCloudsOverviewTable");return c(),_(s,null,{table:t(l=>[e(o,{clouds:l.clouds,scanningProgress:l.scanningProgress,isLoading:l.isLoading,showEmptyState:l.showEmptyState,onConnectNewCloud:l.onConnectNewCloud},null,8,["clouds","scanningProgress","isLoading","showEmptyState","onConnectNewCloud"])]),_:1})}const Le=C(ie,[["render",re]]);export{Le as default};
