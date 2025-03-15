import{_ as D,f as x,x as B,X as P,A as C,aJ as E,aK as R,r as a,m,k as l,p as d,o as e,n as p,w as t,F as k,q as n,s,t as S}from"./index-13ff96f4.js";import{D as O,a as M}from"./DataTable-e31a825a.js";import{P as H}from"./PageHeader-46c38a32.js";import{I as L}from"./IdeTokenRow-7fefc747.js";import{a as N}from"./DataTableCell-51c0104f.js";import{O as G}from"./OverviewEmptyState-c8440b9c.js";import{G as W}from"./GenericIllustration-4aca88e5.js";import{A as X}from"./ActionMenu-3e4470bf.js";const V={components:{PageHeader:H,DataTable:O,BaseButton:x,BaseIcon:B,DataTableHeader:M,XPreloader:P,IdeTokenRow:L,DataTableRow:N,OverviewEmptyState:G,GenericIllustration:W,ActionMenu:X},data(){return{tokens:[],isLoading:!0}},async mounted(){this.hasAccessToIdeIntegration||(Toast.error({title:this.$t("ERROR"),description:"This page is not available for your account"}),go("/settings/integrations")),await this.loadIdeTokens(),this.isLoading=!1},computed:{breadcrumbs(){return[{label:"Settings",href:"/settings"},{label:"Integrations",href:"/settings/integrations"},{label:"IDE"},{label:"Windsurf"}]},showEmptyState(){return!this.isLoading&&this.tokens.length===0},actions(){return[{title:"Duration",items:[{label:"Indefinite",onClick:()=>this.createAccessToken("indefinite")},{label:"One week",onClick:()=>this.createAccessToken("one_week")}]}]},hasAccessToIdeIntegration(){return!!(this.$featureflags.enable_vs_code_ide_plugin||C.isPayingProAndNotTrial())}},methods:{async loadIdeTokens(){this.tokens=await E("windsurf")},async createAccessToken(i){const _=await R(i,"windsurf");this.loadIdeTokens(),await this.$modal.show("CopyTokenModal",{token:_})},openAdoptionStatsModal(){this.$modal.show("IdeAdoptionModal",{ide:"windsurf"})}}},z={key:1,class:"page-content"},U={class:"flex align-center mb-24px gap-12px"},q=p("i",{class:"icon icon-information"},null,-1),F={colspan:"5"};function J(i,_,K,j,f,o){const h=a("XPreloader"),g=a("PageHeader"),u=a("BaseButton"),I=a("BaseIcon"),T=a("ActionMenu"),r=a("DataTableHeader"),w=a("IdeTokenRow"),b=a("GenericIllustration"),y=a("OverviewEmptyState"),A=a("DataTableRow"),v=a("DataTable");return n(),m(k,null,[f.isLoading?(n(),l(h,{key:0,theme:"light",class:"supercenter"})):d("",!0),e(g,{title:"Windsurf IDE Plugin",breadcrumbs:o.breadcrumbs},null,8,["breadcrumbs"]),o.hasAccessToIdeIntegration?(n(),m("div",z,[p("div",U,[e(u,{as:"outside-link",size:"small",variation:"tertiary",class:"ml-auto",target:"_blank",href:"https://help.aikido.dev/doc/windsurf-ide/docI1rXlfsqc"},{default:t(()=>[q,s(" Setup Instructions ")]),_:1}),i.$groupUser.admin?(n(),l(u,{key:0,size:"small",variation:"tertiary",onClick:o.openAdoptionStatsModal},{default:t(()=>[s(" Adoption Stats ")]),_:1},8,["onClick"])):d("",!0),e(T,{sections:o.actions,placement:"bottom-end"},{trigger:t(c=>[e(u,{class:"ml-auto",size:"small",ref:"trigger",onClick:c.toggle},{default:t(()=>[s(" Generate Personal Access Token "),e(I,{icon:"icon-caret_down",class:"flex"})]),_:2},1032,["onClick"])]),_:1},8,["sections"])]),e(v,null,{header:t(()=>[e(r,{width:"auto"},{default:t(()=>[s("User")]),_:1}),e(r,{width:"200px"},{default:t(()=>[s("Created at")]),_:1}),e(r,{width:"200px"},{default:t(()=>[s("Expires at")]),_:1}),e(r,{width:"200px"},{default:t(()=>[s("Last Used at")]),_:1}),e(r,{width:"48px",alignment:"center"})]),body:t(()=>[(n(!0),m(k,null,S(f.tokens,c=>(n(),l(w,{token:c,key:c.id,onRevoked:o.loadIdeTokens},null,8,["token","onRevoked"]))),128)),o.showEmptyState?(n(),l(A,{key:0},{default:t(()=>[p("td",F,[e(y,{title:"No Windsurf IDE tokens registered",description:"Create your PAT for Windsurf IDE here.",variation:"empty",onOnAction:o.createAccessToken},{default:t(()=>[e(b)]),_:1},8,["onOnAction"])])]),_:1})):d("",!0)]),_:1})])):d("",!0)],64)}const ne=D(V,[["render",J]]);export{ne as default};
