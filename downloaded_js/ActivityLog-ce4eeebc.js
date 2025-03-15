import{_ as F,B as v,J as E,r as a,q as u,k as y,w as n,n as p,o as e,s as h,u as x,d as U,a2 as B,p as L,a3 as A,m as C,bn as z,aa as H,e as N,a6 as X,ai as R,F as S,t as D,a1 as G,al as W,bt as K,N as Q,K as Y,aR as q,S as J,I as Z,aw as ee}from"./index-13ff96f4.js";import{a as te}from"./reports-ed4978a9.js";import{u as oe}from"./useInfiniteScroll-47c60c9e.js";import{P as ae}from"./PageHeader-46c38a32.js";import{D as k,a as I}from"./DataTable-e31a825a.js";import{D as w,a as P}from"./DataTableCell-51c0104f.js";import{B as ne}from"./BreakSlashes-925eef0e.js";import{A as re}from"./ActionMenu-3e4470bf.js";import{D as se}from"./DateRangePicker-89d26e9f.js";import{F as ie}from"./FilterButton-bb5393a7.js";import{g as le}from"./repoName-872812ed.js";import{I as ce}from"./InputFilterDropdown-674351d9.js";const de={props:{record:Object},components:{DataTableCell:w,BaseParagraph:v,AvatarImage:E},computed:{userName(){return["manual","checklist","rule"].includes(this.record.source)?this.record.user_name??"user":"Aikido"},avatar(){return["manual","checklist","rule"].includes(this.record.source)?this.record.user_avatar:"/assets/icons/aikido.svg"}}},ue={class:"flex align-center gap-8px max-w-full"};function _e(t,s,i,c,l,o){const r=a("AvatarImage"),d=a("BaseParagraph"),_=a("DataTableCell");return u(),y(_,null,{default:n(()=>[p("div",ue,[e(r,{class:"size-24 inline-block rounded-10",name:o.userName,src:o.avatar},null,8,["name","src"]),e(d,{truncate:""},{default:n(()=>[h(x(o.userName),1)]),_:1})])]),_:1})}const pe=F(de,[["render",_e]]),me={props:{action:String,metadata:{type:Object,default:()=>({})}},components:{DataTableCell:w,BasePill:U,XTooltip:B},computed:{variation(){switch(this.action){case"ignored":return"gray-fill";case"auto_ignored":return"gray-fill";case"snoozed":return"gray-fill";case"unsnoozed":return"gray-fill";case"closed":return"green";case"re_open":return"orange";case"adjust_severity":return this.getAdjustSeverityVariation();case"autofix_pr_created":return"blue-140";default:return"gray"}},title(){switch(this.action){case"ignored":return"Ignored";case"auto_ignored":return"Auto ignored";case"snoozed":return"Snoozed";case"unsnoozed":return"Unsnoozed";case"closed":return"Closed";case"re_open":return"Reopened";case"adjust_severity":return"Severity";case"autofix_pr_created":return"Autofix PR";default:return this.action}},prefixIcon(){switch(this.action){case"auto_ignored":case"ignored":return"icon-hidden";case"snoozed":return"icon-snooze";default:return null}},suffixIcon(){switch(this.action){case"closed":return"icon-shield_check";case"adjust_severity":return this.getAdjustSeverityIcon();case"autofix_pr_created":return"icon-gh_pr";default:return null}},shouldShowTooltip(){return["adjust_severity"].includes(this.action)},tooltip(){if(!this.shouldShowTooltip)return"";switch(this.action){case"adjust_severity":return this.getAdjustSeverityTooltip();default:return""}}},methods:{isSeverityIncreased(){const t={CRITICAL:3,HIGH:2,MEDIUM:1,LOW:0},s=t[this.metadata.initial_severity],i=t[this.metadata.adjusted_severity];return s<i},getAdjustSeverityVariation(){return this.isSeverityIncreased()?"red":"green"},getAdjustSeverityIcon(){return this.isSeverityIncreased()?"icon-arrow-up":"icon-arrow-down"},getAdjustSeverityTooltip(){const t={CRITICAL:"Critical",HIGH:"High",MEDIUM:"Medium",LOW:"Low"},s=t[this.metadata.initial_severity],i=t[this.metadata.adjusted_severity];return`${s} -> ${i}`}}};function he(t,s,i,c,l,o){const r=a("XTooltip"),d=a("BasePill"),_=a("DataTableCell");return u(),y(_,null,{default:n(()=>[e(d,{variation:o.variation,title:o.title,icon:o.prefixIcon,"icon-suffix":o.suffixIcon},{default:n(()=>[o.shouldShowTooltip?(u(),y(r,{key:0},{default:n(()=>[h(x(o.tooltip),1)]),_:1})):L("",!0)]),_:1},8,["variation","title","icon","icon-suffix"])]),_:1})}const fe=F(me,[["render",he]]),ge={props:{timestamp:Number},computed:{formattedTimestamp(){return A.fromUnix(this.timestamp).format(A.AUDIT_LOG_FORMAT)}},components:{DataTableCell:w,BaseParagraph:v}};function ye(t,s,i,c,l,o){const r=a("BaseParagraph"),d=a("DataTableCell");return u(),y(d,null,{default:n(()=>[e(r,null,{default:n(()=>[h(x(o.formattedTimestamp),1)]),_:1})]),_:1})}const be=F(ge,[["render",ye]]),Fe={props:{record:Object},computed:{issue(){const{related_type:t,os_cve_id:s,aikido_rule_title:i,sast_rule_title:c,secret_file:l}=this.record.metadata.issue;switch(t){case"open_source":return s;case"leaked_secret":return"Exposed secret in "+l;case"cloud":return i??"Cloud issue";case"sast":return c??"SAST issue";default:return this.record.issue_id}}},components:{DataTableCell:w,BaseParagraph:v,BreakSlashes:ne}};function ve(t,s,i,c,l,o){const r=a("BreakSlashes"),d=a("BaseParagraph"),_=a("DataTableCell");return u(),y(_,null,{default:n(()=>[e(d,null,{default:n(()=>[e(r,{text:o.issue},null,8,["text"])]),_:1})]),_:1})}const xe=F(Fe,[["render",ve]]),Ce={props:{record:String},components:{DataTableCell:w,BasePill:U,BaseParagraph:v,XTooltip:B},computed:{ignoreReasons(){return this.record.metadata.auto_ignore_reasons},ignoreReasonsTitle(){return this.record.metadata.auto_ignore_reasons.map(t=>t.rule_shorthand)},pillLabel(){return this.$t("X_OTHERS",this.ignoreReasons.length-1)},reason(){return this.ignoreReasons[0].rule_shorthand??this.record.comment}}},we={class:"flex flex-1 align-center justify-between overflow-hidden gap-8px"},Te={key:0},Re={class:"ws-pre"};function Ae(t,s,i,c,l,o){const r=a("BaseParagraph"),d=a("BasePill"),_=a("XTooltip"),m=a("DataTableCell");return u(),y(m,null,{default:n(()=>[p("div",we,[e(r,{truncate:""},{default:n(()=>[h(x(o.reason),1)]),_:1}),o.ignoreReasons.length>1?(u(),C("div",Te,[e(d,{title:o.pillLabel},null,8,["title"]),e(_,null,{default:n(()=>[p("span",Re,x(o.ignoreReasonsTitle.slice(1).join(`
`)),1)]),_:1})])):L("",!0)])]),_:1})}const $=F(Ce,[["render",Ae]]),Se={props:{record:Object},components:{DataTableCell:w,BaseParagraph:v,AutoIgnoredCommentColumn:$,XTooltip:B},computed:{showCustomElement(){return this.record.action==="auto_ignored"},element(){return this.record.action==="auto_ignored"?$:null},isIgnoredViaRule(){return this.record.action==="ignored"&&this.record.source==="rule"},rawComment(){return this.isIgnoredViaRule?"Ignored via rule":this.record.comment},tooltipComment(){return this.record.metadata.ignore_rule_reason}}},Le={class:"flex gap-4px align-center"};function Be(t,s,i,c,l,o){const r=a("BaseParagraph"),d=a("XTooltip"),_=a("BaseIcon"),m=a("DataTableCell");return o.showCustomElement?(u(),y(z(o.element),{key:0,record:i.record},null,8,["record"])):(u(),y(m,{key:1},{default:n(()=>[p("div",Le,[e(r,null,{default:n(()=>[h(x(o.rawComment),1)]),_:1}),o.isIgnoredViaRule&&o.tooltipComment?(u(),y(_,{key:0,icon:"icon-information",size:12,class:"text-primary-aik-140 h-12px"},{default:n(()=>[e(d,{class:"ws-break-spaces"},{default:n(()=>[h(x(o.tooltipComment),1)]),_:1})]),_:1})):L("",!0)])]),_:1}))}const De=F(Se,[["render",Be]]),ke={props:{record:Object},components:{ActionMenu:re},computed:{actions(){return[{title:"Actions",items:[{label:"View detail",onClick:this.handleNavigateToDetail,icon:"icon-openLink"}]}]}},methods:{handleNavigateToDetail(){this.$router.push(`/issues/${this.record.grouped_issue_id}/detail`)}}};function Ie(t,s,i,c,l,o){const r=a("ActionMenu");return u(),y(r,{sections:o.actions,placement:"bottom-end"},{trigger:n(d=>[H(t.$slots,"trigger",{toggle:d.toggle})]),_:3},8,["sections"])}const Pe=F(ke,[["render",Ie]]),$e={props:{record:Object},components:{TimestampColumn:be,DataTableRow:P,DataTableCell:w,BaseParagraph:v,UserColumn:pe,AffectedIssueColumn:xe,StatusColumn:fe,ActivityLogEntryActionMenu:Pe,BaseIconButton:N,CommentColumn:De,RouterLink:X},computed:{locationName(){const{location:t}=this.record.metadata;return t.image_name?t.image_name:t.scm_repo_name?t.scm_repo_name:t.cloud_name},locationUrl(){const{location:t}=this.record.metadata;return t.image_id>0?`/container/${t.image_id}`:t.scm_repo_id>0?`/repositories/${t.scm_repo_id}`:`/clouds/${t.cloud_id}`}}},Ue=p("i",{class:"icon icon-12px icon-viewDetails valign-middle text-gray-100 hidden group-hover:block"},null,-1);function Ve(t,s,i,c,l,o){const r=a("TimestampColumn"),d=a("StatusColumn"),_=a("AffectedIssueColumn"),m=a("BaseParagraph"),b=a("RouterLink"),g=a("DataTableCell"),f=a("UserColumn"),T=a("CommentColumn"),V=a("BaseIconButton"),M=a("ActivityLogEntryActionMenu"),j=a("DataTableRow");return u(),y(j,null,{default:n(()=>[e(r,{timestamp:i.record.timestamp},null,8,["timestamp"]),e(d,{action:i.record.action,metadata:i.record.metadata},null,8,["action","metadata"]),e(_,{record:i.record},null,8,["record"]),e(g,null,{default:n(()=>[e(b,{class:"group flex align-center gap-4px overflow-hidden",to:o.locationUrl},{default:n(()=>[e(m,{truncate:!0},{default:n(()=>[h(x(o.locationName),1)]),_:1}),Ue]),_:1},8,["to"])]),_:1}),e(f,{record:i.record},null,8,["record"]),e(T,{record:i.record},null,8,["record"]),e(g,{spacing:"compact",alignment:"center",class:"data-table__cell--action"},{default:n(()=>[p("div",{class:"data-table__row__action-container",onClick:s[0]||(s[0]=R(()=>t.$refs.trigger.click(),["stop"]))},[e(M,{record:i.record},{trigger:n(O=>[e(V,{icon:"icon-actions",class:"data-table__row__action",onClick:O.toggle,ref:"trigger"},null,8,["onClick"])]),_:1},8,["record"])])]),_:1})]),_:1})}const Me=F($e,[["render",Ve]]),je={props:{records:{type:Array,default:()=>[]},title:String},components:{DataTable:k,DataTableHeader:I,DataTableRow:P,BaseParagraph:v,ActivityLogReportTableRow:Me},computed:{sortedRecords(){return[...this.records].sort((t,s)=>s.timestamp-t.timestamp)}}},Oe={colspan:"7"};function Ee(t,s,i,c,l,o){const r=a("DataTableHeader"),d=a("BaseParagraph"),_=a("DataTableRow"),m=a("ActivityLogReportTableRow"),b=a("DataTable");return u(),y(b,{class:"data-table--no-header"},{header:n(()=>[e(r,{width:"155px"}),e(r,{width:"130px"}),e(r,{width:"auto"}),e(r,{width:"auto"}),e(r,{width:"auto"}),e(r,{width:"auto"}),e(r,{width:"48px"})]),body:n(()=>[e(_,{class:"data-table__row--section-header"},{default:n(()=>[p("td",Oe,[e(d,null,{default:n(()=>[h(x(i.title),1)]),_:1})])]),_:1}),(u(!0),C(S,null,D(o.sortedRecords,g=>(u(),y(m,{key:g.id,record:g},null,8,["record"]))),128))]),_:1})}const ze=F(je,[["render",Ee]]),He={components:{DataTable:k,DataTableHeader:I,DataTableRow:P,BaseParagraph:v,DataTableCell:w,LoadingSkeleton:G}},Ne={colspan:"7"};function Xe(t,s,i,c,l,o){const r=a("DataTableHeader"),d=a("BaseParagraph"),_=a("DataTableRow"),m=a("LoadingSkeleton"),b=a("DataTableCell"),g=a("DataTable");return u(),y(g,{class:"data-table--no-header"},{header:n(()=>[e(r,{width:"155px"}),e(r,{width:"130px"}),e(r,{width:"auto"}),e(r,{width:"auto"}),e(r,{width:"auto"}),e(r,{width:"auto"}),e(r,{width:"48px"})]),body:n(()=>[e(_,{class:"data-table__row--section-header"},{default:n(()=>[p("td",Ne,[e(d,null,{default:n(()=>[h("Loading records...")]),_:1})])]),_:1}),(u(),C(S,null,D(10,f=>e(_,{key:f},{default:n(()=>[e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1}),e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1}),e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1}),e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1}),e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1}),e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1}),e(b,null,{default:n(()=>[e(m,{height:"16px"})]),_:1})]),_:2},1024)),64))]),_:1})}const Ge=F(He,[["render",Xe]]),We={props:{records:{type:Array,default:()=>[]},hasFetchedAllRecords:Boolean,isLoading:Boolean},emits:["bottomReached"],components:{DataTable:k,DataTableHeader:I,BaseParagraph:v,ActivityLogReportSection:ze,LoadingActivityLogReportSection:Ge,LoadingSpinner:W},data(){return{observer:null}},computed:{recordsGroupedByMonth(){let t={};for(const i of this.records){const{timestamp:c}=i,l=A.fromUnix(c),o=`${l.getYear()}_${l.getMonth()}`;t[o]=[...t[o]??[],i]}return Object.entries(t).sort(([i],[c])=>{const[l,o]=i.split("_").map(Number),[r,d]=c.split("_").map(Number);return l!==r?r-l:d-o}).reduce((i,[c,l])=>({...i,[c]:l}),{})}},methods:{getSectionKeyForTitle(t){const[s,i]=t.split("_"),c=new Date;return c.setMonth(parseInt(i,10)),`${A.fromDate(c).format(A.FULL_MONTH_FORMAT)} ${s}`}}},Ke={ref:"container",class:"flex flex-column gap-16px"},Qe={ref:"bottom",class:"text-center w-full mt-16px"},Ye={class:"data-table__bottom"},qe=p("hr",null,null,-1),Je={key:0,class:"flex align-center gap-8px"},Ze=p("hr",null,null,-1);function et(t,s,i,c,l,o){const r=a("DataTableHeader"),d=a("DataTable"),_=a("LoadingActivityLogReportSection"),m=a("ActivityLogReportSection"),b=a("LoadingSpinner"),g=a("BaseParagraph");return u(),C(S,null,[p("div",Ke,[e(d,null,{header:n(()=>[e(r,{width:"155px"},{default:n(()=>[h("Timestamp")]),_:1}),e(r,{width:"130px"},{default:n(()=>[h("Action")]),_:1}),e(r,{width:"auto"},{default:n(()=>[h("Affected issues")]),_:1}),e(r,{width:"auto"},{default:n(()=>[h("Location")]),_:1}),e(r,{width:"auto"},{default:n(()=>[h("User")]),_:1}),e(r,{width:"auto"},{default:n(()=>[h("Comments")]),_:1}),e(r,{width:"48px",alignment:"center"})]),_:1}),i.isLoading?(u(),y(_,{key:0})):(u(!0),C(S,{key:1},D(o.recordsGroupedByMonth,(f,T)=>(u(),y(m,{key:T,records:f,title:o.getSectionKeyForTitle(T)},null,8,["records","title"]))),128))],512),p("div",Qe,[p("div",Ye,[qe,i.hasFetchedAllRecords?(u(),y(g,{key:1,color:"gray"},{default:n(()=>[h("We have no more issues to show")]),_:1})):(u(),C("div",Je,[e(b,{color:"#6551F3",backgroundColor:"#E0DCFD"}),e(g,{color:"gray"},{default:n(()=>[h("Hang on, we're fetching more issues for you")]),_:1})])),Ze])],512)],64)}const tt=F(We,[["render",et]]),ot={components:{BaseParagraph:v,BasePopover:K,BaseSelect:Q,FilterButton:ie},emits:["filterSelected"],data(){return{repositories:[],clouds:[],actionFilter:void 0,repositoryFilter:void 0,cloudFilter:void 0}},async mounted(){await this.handleFetchLocations()},computed:{filter(){let t=[];if(this.actionFilter){const i=this.actionSelectValues.find(c=>c.id==this.actionFilter).title;t.push(i)}if(this.repositoryFilter&&t.push("repository"),this.cloudFilter&&t.push("cloud integration"),t.length!==0)return t.join(", ")},actionSelectValues(){return[{id:"ignored",title:"Ignored"},{id:"auto_ignored",title:"Auto ignored"},{id:"snoozed",title:"Snoozed"},{id:"unsnoozed",title:"Unsnoozed"},{id:"re_open",title:"Reopened"},{id:"adjust_severity",title:"Severity Change"},{id:"autofix_pr_created",title:"Autofix PR"}]},repositorySelectValues(){return this.repositories.filter(t=>!!t.active).map(t=>({id:t.id,title:le(t)}))},cloudSelectValues(){return this.clouds.map(t=>({id:t.id,title:t.name}))},hasFilter(){return!!this.repositoryFilter||!!this.cloudFilter||!!this.actionFilter}},methods:{async handleFetchRepos(){this.repositories=await Y(null,!1,!0)},async handleFetchClouds(){this.clouds=await q()},async handleFetchLocations(){await Promise.allSettled([this.handleFetchRepos(),this.handleFetchClouds()])},emitSelectedFilter(){this.$emit("filterSelected",{repositoryFilter:this.repositoryFilter,cloudFilter:this.cloudFilter,actionFilter:this.actionFilter})},reset(){this.actionFilter=void 0,this.repositoryFilter=void 0,this.cloudFilter=void 0},handleClearAll(){this.reset(),this.emitSelectedFilter()},handleChangeActionFilter(t){this.actionFilter=t,this.emitSelectedFilter()},handleChangeRepositoryFilter(t){this.repositoryFilter=t,this.cloudFilter=void 0,this.emitSelectedFilter()},handleChangeCloudFilter(t){this.cloudFilter=t,this.repositoryFilter=void 0,this.emitSelectedFilter()}}},at=p("i",{class:"icon icon-filter icon-12px"},null,-1),nt={key:0},rt={class:"text-primary-aik-100"},st={class:"action-menu w-320px"},it={class:"action-menu__section"},lt={class:"action-menu__section-title"},ct={class:"flex gap-16px align-center px-16px py-8px"},dt={class:"flex gap-16px align-center px-16px py-8px"},ut={class:"flex gap-16px align-center px-16px py-8px"};function _t(t,s,i,c,l,o){const r=a("i18n-t"),d=a("FilterButton"),_=a("BaseParagraph"),m=a("BaseSelect"),b=a("BasePopover");return u(),y(b,{placement:"bottom-start"},{trigger:n(g=>[e(d,{onClick:g.toggle,class:J({"filter-button--active":o.hasFilter})},{default:n(()=>[at,o.filter?(u(),C("span",nt,[e(r,{keypath:"QUEUE.QUICK_FILTER.LABEL"},{filter:n(()=>[p("span",rt,x(o.filter),1)]),_:1})])):L("",!0)]),_:2},1032,["onClick","class"])]),content:n(g=>[p("div",st,[p("div",it,[p("div",lt,[e(_,{color:"gray",class:"text--semi"},{default:n(()=>[h("Quick filters")]),_:1}),p("button",{class:"button-brand button--as-link",onClick:s[0]||(s[0]=R((...f)=>o.handleClearAll&&o.handleClearAll(...f),["prevent"]))}," Clear all filters ")]),p("div",ct,[e(_,{size:"small",class:"min-w-80px"},{default:n(()=>[h("Action")]),_:1}),e(m,{class:"flex-1",id:"repos",modelValue:l.actionFilter,"onUpdate:modelValue":[s[1]||(s[1]=f=>l.actionFilter=f),f=>{o.handleChangeActionFilter(f),g.close()}],options:o.actionSelectValues,onClick:s[2]||(s[2]=R(()=>{},["stop"])),placeholder:"All"},null,8,["modelValue","onUpdate:modelValue","options"])]),p("div",dt,[e(_,{size:"small",class:"min-w-80px"},{default:n(()=>[h("Repository")]),_:1}),e(m,{class:"flex-1",id:"repos",modelValue:l.repositoryFilter,"onUpdate:modelValue":[s[3]||(s[3]=f=>l.repositoryFilter=f),f=>{o.handleChangeRepositoryFilter(f),g.close()}],options:o.repositorySelectValues,onClick:s[4]||(s[4]=R(()=>{},["stop"])),placeholder:"All"},null,8,["modelValue","onUpdate:modelValue","options"])]),p("div",ut,[e(_,{size:"small",class:"min-w-80px"},{default:n(()=>[h("Cloud")]),_:1}),e(m,{class:"flex-1",id:"clouds",modelValue:l.cloudFilter,"onUpdate:modelValue":[s[5]||(s[5]=f=>l.cloudFilter=f),f=>{o.handleChangeCloudFilter(f),g.close()}],options:o.cloudSelectValues,onClick:s[6]||(s[6]=R(()=>{},["stop"])),placeholder:"All"},null,8,["modelValue","onUpdate:modelValue","options"])])])])]),_:1})}const pt=F(ot,[["render",_t]]),mt=50,ht={components:{PageHeader:ae,BaseParagraph:v,ActivityLogReportTable:tt,DateRangePicker:se,ActivityLogFilter:pt,InputFilterDropdown:ce,InputSearch:Z},setup(){const{fetch:t,reset:s,records:i,currentPage:c,isLoadingFirstPage:l,hasFetchedAllRecords:o,watchElement:r}=oe(te,mt);return{resetRecords:s,fetchRecords:t,records:i,currentPage:c,isLoading:l,hasFetchedAllRecords:o,watchElement:r}},data(){return{dateRangeFilter:{},activityLogFilter:{},selectedUserFilter:"user_only",search:""}},async mounted(){await this.fetchAuditLogRecords()},watch:{async isLoading(){this.isLoading||(await this.$nextTick(),this.watchElement(this.$refs.table.$refs.bottom,{threshold:0,rootMargin:"100px"}))}},computed:{breadcrumbs(){return[{label:"Reports",href:"/reports"},{label:"Activity log"}]},filters(){return{before:this.dateRangeFilter.to?this.dateRangeFilter.to.toUTC():null,after:this.dateRangeFilter.from?this.dateRangeFilter.from.toUTC():null,repository_id:this.activityLogFilter.repositoryFilter,cloud_id:this.activityLogFilter.cloudFilter,action_filter:this.activityLogFilter.actionFilter,user_filter:this.selectedUserFilter,search:this.search}},userFilterOptions(){return[{label:"People",value:"user_only",default:!0},{label:"All Users",value:"all"},{label:"Robot Users",value:"aikido_only"}]}},methods:{async fetchAuditLogRecords(){await this.fetchRecords(this.filters)},async handleUpdateDateRangeFilter(t){this.dateRangeFilter=t,await this.resetRecords(this.filters)},async handleUpdateFilter(t){this.activityLogFilter=t,await this.resetRecords(this.filters)},async onUserFilterChanged(t){this.selectedUserFilter=t,await this.resetRecords(this.filters)},onSearchChanged:ee(async function(t){await this.resetRecords(this.filters)},200)}},ft={class:"page-content"},gt={class:"flex align-center gap-8px mb-16px"};function yt(t,s,i,c,l,o){const r=a("BaseParagraph"),d=a("PageHeader"),_=a("InputSearch"),m=a("DateRangePicker"),b=a("InputFilterDropdown"),g=a("ActivityLogFilter"),f=a("ActivityLogReportTable");return u(),C(S,null,[e(d,{breadcrumbs:o.breadcrumbs,title:t.$t("ACTIVITY_LOG_REPORT")},{subTitle:n(()=>[e(r,{color:"gray"},{default:n(()=>[h("This page offers a chronological record of all actions taken on issues by your users.")]),_:1})]),_:1},8,["breadcrumbs","title"]),p("div",ft,[p("div",gt,[e(_,{modelValue:l.search,"onUpdate:modelValue":[s[0]||(s[0]=T=>l.search=T),o.onSearchChanged],spacing:"compact"},null,8,["modelValue","onUpdate:modelValue"]),e(m,{onUpdate:o.handleUpdateDateRangeFilter},null,8,["onUpdate"]),e(b,{modelValue:l.selectedUserFilter,options:o.userFilterOptions,"onUpdate:modelValue":o.onUserFilterChanged},null,8,["modelValue","options","onUpdate:modelValue"]),e(g,{onFilterSelected:o.handleUpdateFilter},null,8,["onFilterSelected"])]),e(f,{records:c.records,hasFetchedAllRecords:c.hasFetchedAllRecords,"is-loading":c.isLoading,ref:"table"},null,8,["records","hasFetchedAllRecords","is-loading"])])],64)}const Dt=F(ht,[["render",yt]]);export{Dt as default};
