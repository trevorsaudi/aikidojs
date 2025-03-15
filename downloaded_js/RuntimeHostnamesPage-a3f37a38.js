import{_ as S,r as o,q as d,k as R,w as e,o as t,a1 as N,m as T,t as I,F as H,B as $,a2 as P,d as O,f as U,z as A,I as q,e0 as M,aw as X,a3 as x,n as c,ed as j,s as r,p as D,u as p}from"./index-13ff96f4.js";import{a as k,D as C}from"./DataTableCell-51c0104f.js";import{a as B,D as z}from"./DataTable-e31a825a.js";import{a as G}from"./dateFns-a344cb79.js";import{R as Y}from"./RuntimeNoTokenCallout-f395432e.js";import{X as Z}from"./XPagination-8f16f099.js";import{I as J}from"./InputFilterDropdown-674351d9.js";import{O as K}from"./OverviewEmptyState-c8440b9c.js";import{R as Q}from"./RuntimeIllustration-4912df3a.js";import{u as W}from"./useInfiniteScroll-47c60c9e.js";import{R as tt}from"./RuntimeBarChart-79838118.js";import"./index-b87db690.js";import"./BaseCallout-aea0aba4.js";import"./FilterButton-bb5393a7.js";import"./ActionMenu-3e4470bf.js";import"./index-fdfd2f30.js";const et={emits:["viewInstructions"],components:{RuntimeIllustration:Q,OverviewEmptyState:K},computed:{title(){return"No outbound domains found"},description(){return"Zen automatically collects your outbound domains when doing HTTP requests in your apps"},actionLabel(){return"View install instructions"}}};function at(a,n,h,_,u,s){const l=o("RuntimeIllustration"),m=o("OverviewEmptyState");return d(),R(m,{title:s.title,description:s.description,actionLabel:s.actionLabel,variation:"empty",onOnAction:n[0]||(n[0]=f=>a.$emit("viewInstructions"))},{default:e(()=>[t(l)]),_:1},8,["title","description","actionLabel"])}const nt=S(et,[["render",at]]),ot={components:{DataTableHeader:B,DataTableRow:k,DataTableCell:C,LoadingSkeleton:N}};function st(a,n,h,_,u,s){const l=o("LoadingSkeleton"),m=o("DataTableCell"),f=o("DataTableRow");return d(),T(H,null,I(6,g=>t(f,{key:g},{default:e(()=>[t(m,null,{default:e(()=>[t(l,{height:"22px"})]),_:1}),t(m,null,{default:e(()=>[t(l,{height:"22px"})]),_:1}),t(m,null,{default:e(()=>[t(l,{height:"22px"})]),_:1}),t(m,null,{default:e(()=>[t(l,{height:"22px"})]),_:1})]),_:2},1024)),64)}const it=S(ot,[["render",st]]),lt={components:{RuntimeHostnameRowSkeleton:it,RuntimeBarChart:tt,BaseParagraph:$,XTooltip:P,RuntimeHostnamesEmptyState:nt,InputFilterDropdown:J,RuntimeNoTokenCallout:Y,BasePill:O,DataTable:z,DataTableCell:C,DataTableHeader:B,BaseButton:U,DataTableRow:k,XPagination:Z,InputSwitch:A,InputSearch:q},setup(){const{records:a,isLoading:n,fetch:h,reset:_,refresh:u,watchElement:s}=W(j,100,l=>l,{stopPaginationBehaviour:"eager"});return{hostnames:a,isFetchingRecords:n,fetchHostnames:h,resetHostnames:_,refreshHostnames:u,watchElement:s}},data(){return{initialLoading:!0,loading:!0,search:"",daysToShow:30,formatter:new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short",maximumFractionDigits:1})}},computed:{serviceId(){return this.$route.params.serviceId},shouldShowEmptyState(){return!this.loading&&this.hostnames.length===0},enrichedHostnames(){return this.hostnames.map(a=>({...a,last_seen_at_relative:G(a.last_seen_at)}))},lastSeenAfter(){const a=new Date;return a.setDate(a.getDate()-this.daysToShow),a.setHours(0,0,0,0),a.getTime()/1e3},timeRangeOptions(){return[7,30,90,180,365].map(n=>({label:this.$t(`RUNTIME.TIME_RANGE.${n}_days`),value:n}))}},async mounted(){if(await Promise.all([this.loadHostnames(),this.loadService()]),this.loading=!1,!this.service){this.$router.push("/runtime/services");return}this.$breadcrumbs.show({breadcrumbs:[{label:this.$t("RUNTIME_PROTECTION"),href:"/runtime"},{label:this.service.name}]}),await this.$nextTick(),this.watchElement(this.$refs.tableBottom,{threshold:0,rootMargin:"400px"})},methods:{async loadHostnames(){await this.resetHostnames({serviceId:this.serviceId,search:this.search,last_seen_after:this.lastSeenAfter}),this.initialLoading=!1},async loadService(){this.service=await M(this.serviceId)},handleFilterChanged:X(async function(){await this.loadHostnames()},400),formatValue(a){return this.formatter.format(a)},formatTotalRequests(a){return a>0?this.formatter.format(a):"-"},getChartData(a){return[{title:"Requests",color:"#e0dcfd",data:a.map(n=>({label:x.fromUnix(n.timestamp).format(x.US_FRIENDLY_SHORT_DATE),value:n.hits}))}]}}},rt={class:"flex flex-column gap-16px"},ut={class:"mb-16px flex align-center justify-between"},mt={class:"flex gap-8px"},ct=c("i",{class:"icon icon-information icon-12px valign-middle ml-4px text-carbon-80"},null,-1),dt={class:"flex justify-between gap-16px align-center px-16px w-full"},pt={style:{height:"50px",width:"100px"}},ht={colspan:"4"},_t={ref:"tableBottom"};function ft(a,n,h,_,u,s){const l=o("RuntimeNoTokenCallout"),m=o("InputSearch"),f=o("InputFilterDropdown"),g=o("XTooltip"),w=o("DataTableHeader"),E=o("RuntimeHostnameRowSkeleton"),b=o("BaseParagraph"),v=o("DataTableCell"),L=o("RuntimeBarChart"),y=o("DataTableRow"),V=o("RuntimeHostnamesEmptyState"),F=o("DataTable");return d(),T("div",rt,[c("div",null,[t(l,{serviceId:s.serviceId},null,8,["serviceId"]),c("div",ut,[c("div",mt,[t(m,{modelValue:u.search,"onUpdate:modelValue":[n[0]||(n[0]=i=>u.search=i),s.handleFilterChanged],spacing:"compact",disableDebounce:!0},null,8,["modelValue","onUpdate:modelValue"]),t(f,{modelValue:u.daysToShow,"onUpdate:modelValue":[n[1]||(n[1]=i=>u.daysToShow=i),n[2]||(n[2]=i=>s.loadHostnames())],options:s.timeRangeOptions,disableActiveState:!0},null,8,["modelValue","options"])])]),t(F,null,{header:e(()=>[t(w,{width:"auto"},{default:e(()=>[r(" Hostname "),ct,t(g,null,{default:e(()=>[r(" This list might include hostnames that the application attempted to connect to, but the connection was not successful (e.g., due to firewall blocks, timeouts, or SSRF protection). ")]),_:1})]),_:1}),t(w,{width:"120px"},{default:e(()=>[r("Port")]),_:1}),t(w,{width:"200px"},{default:e(()=>[r("Requests last 7 days")]),_:1}),t(w,{width:"200px"},{default:e(()=>[r("Last Seen")]),_:1})]),body:e(()=>[u.initialLoading?(d(),R(E,{key:0})):D("",!0),(d(!0),T(H,null,I(s.enrichedHostnames,i=>(d(),R(y,{key:i.id,class:"text-blue-dark"},{default:e(()=>[t(v,null,{default:e(()=>[t(b,{class:"truncate-left"},{default:e(()=>[r(p(i.hostname)+" ",1),t(g,null,{default:e(()=>[r(p(i.hostname),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(v,null,{default:e(()=>[t(b,null,{default:e(()=>[r(p(i.port),1)]),_:2},1024)]),_:2},1024),t(v,{spacing:"none"},{default:e(()=>[c("div",dt,[c("div",pt,[t(L,{"chart-data":s.getChartData(i.hits.per_day),padding:{top:10},"format-value":s.formatValue},null,8,["chart-data","format-value"])]),t(b,null,{default:e(()=>[r(p(s.formatTotalRequests(i.hits.total)),1)]),_:2},1024)])]),_:2},1024),t(v,null,{default:e(()=>[t(b,null,{default:e(()=>[r(p(i.last_seen_at_relative),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),s.shouldShowEmptyState?(d(),R(y,{key:1},{default:e(()=>[c("td",ht,[t(V,{onViewInstructions:n[3]||(n[3]=i=>a.$modal.show("RuntimeInstallInstructionsModal"))})])]),_:1})):D("",!0)]),_:1}),c("div",_t,null,512)])])}const Lt=S(lt,[["render",ft]]);export{Lt as default};
