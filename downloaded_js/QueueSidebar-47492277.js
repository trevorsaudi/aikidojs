import{_ as b,r as n,q as l,m as k,n as i,o as u,w as a,S as x,f as v,x as F,Z as G,A as q,k as I,s as O,p as c,F as D,e as z,B as A,an as S,cv as N,cw as C,cx as w,cy as B,cz as L,cA as E,cB as Q,bU as V,u as j,af as H,cC as U}from"./index-13ff96f4.js";import{I as P,S as J}from"./SidebarActionMenu-1bf6804b.js";import W from"./CreateTicketModal-c14deeb1.js";const Z={props:{groupedIssue:Object,groupedIssues:Array,forStatus:String},computed:{isLoaded(){return!!this.groupedIssue},allGroupedIssueIds(){return this.groupedIssues.map(e=>e.id)},currentGroupedIssueId(){return this.groupedIssue.id},nextGroupedIssueId(){const e=this.allGroupedIssueIds.indexOf(this.currentGroupedIssueId);if(e>=this.allGroupedIssueIds.length-1)return null;const t=this.allGroupedIssueIds[e+1];return this.groupedIssues.find(p=>p.id===t).is_blurred?null:t},previousGroupedIssueId(){const e=this.allGroupedIssueIds.indexOf(this.currentGroupedIssueId);return e<=0?null:this.allGroupedIssueIds[e-1]}},methods:{handleScrollIntoView(e){var t;(t=document.getElementById(e))==null||t.scrollIntoView({behavior:"smooth",block:"center"})}}},K={class:"sidebar__footer-container"},X={class:"sidebar__footer"},Y={class:"flex align-center"},$=i("i",{class:"icon icon-arrow-left"},null,-1),ee=i("i",{class:"icon icon-arrow-right"},null,-1),se=i("i",{class:"icon icon-openLink"},null,-1),te=i("span",null,"View Detail",-1);function re(e,t,s,p,o,r){const d=n("RouterLink");return l(),k("div",K,[i("div",X,[i("div",Y,[u(d,{to:`${e.$route.path}?sidebarIssue=${r.previousGroupedIssueId}`,class:x(["link link-hover text--normal flex align-center px-8px py-12px gap-8px text-primary-aik-20",{disabled:r.previousGroupedIssueId===null}]),onClick:t[0]||(t[0]=()=>r.handleScrollIntoView(r.previousGroupedIssueId))},{default:a(()=>[$]),_:1},8,["to","class"]),u(d,{to:`${e.$route.path}?sidebarIssue=${r.nextGroupedIssueId}`,class:x(["link link-hover text--normal flex align-center px-8px py-12px gap-8px text-primary-aik-20",{disabled:r.nextGroupedIssueId===null}]),onClick:t[1]||(t[1]=()=>r.handleScrollIntoView(r.nextGroupedIssueId))},{default:a(()=>[ee]),_:1},8,["to","class"])]),u(d,{to:`/issues/${r.currentGroupedIssueId}/detail?status=${s.forStatus}`,class:"link link-hover text--normal flex align-center p-16px gap-8px mr-32px text-primary-aik-20",target:"_blank"},{default:a(()=>[se,te]),_:1},8,["to"])])])}const oe=b(Z,[["render",re]]),ne={props:{groupedIssue:Object},components:{BaseButton:v,CreateTicketModal:W,BaseIcon:F},data(){return{showAddTaskModal:!1}},computed:{issueTrackerIcon(){switch(G.data.issueTracker){case"github":return"icon-github";case"gitlab":case"gitlab-server":return"icon-Gitlab";case"linear":return"icon-linear";case"asana":return"icon-asana";case"clickup":return"icon-clickup";case"azure-devops":return"icon-azure";case"jetbrains-youtrack":return"icon-jetbrains-youtrack";case"monday":return"icon-monday-dot-com";case"shortcut":return"icon-shortcut";case"jira-data-center":default:return"icon-JIRA"}}},methods:{handleCreateTicket(){if(q.hasExpiredFullTrial()&&!this.$featureflags.force_enable_task_trackers)return this.$modal.show("UpgradeAccountModal");this.showAddTaskModal=!0}}};function ue(e,t,s,p,o,r){var f,h;const d=n("BaseIcon"),g=n("BaseButton"),m=n("CreateTicketModal");return l(),k(D,null,[((f=s.groupedIssue)==null?void 0:f.tasks.length)==0&&((h=s.groupedIssue)==null?void 0:h.status)!="closed"?(l(),I(g,{key:0,variation:"blue",onClick:r.handleCreateTicket,size:"small"},{default:a(()=>[u(d,{class:"flex align-center",icon:r.issueTrackerIcon,color:"#f9f9f9"},null,8,["icon"]),O("Open a task ")]),_:1},8,["onClick"])):c("",!0),o.showAddTaskModal?(l(),I(m,{key:1,issueGroupId:s.groupedIssue.id,onCancel:t[0]||(t[0]=_=>o.showAddTaskModal=!1),onCreated:t[1]||(t[1]=_=>o.showAddTaskModal=!1)},null,8,["issueGroupId"])):c("",!0)],64)}const ie=b(ne,[["render",ue]]),ae={emits:["itemSnoozed"],components:{IssueGroupDetail:P,QueueSidebarFooter:oe,SidebarActionMenu:J,BaseIconButton:z,QueueSidebarTask:ie,BaseParagraph:A,BaseButton:v},props:{showClosedOnly:{type:Boolean,default:!1},showSnoozedOnly:{type:Boolean,default:!1},showIgnoredOnly:{type:Boolean,default:!1},groupedIssues:{type:Array,required:!1},filterRepoId:{type:Number,default:-1},filterCloudRepoId:{type:Number,default:-1},filterCloudId:{type:Number,default:-1},filterDomainId:{type:Number,default:-1},filterInstanceGroupId:{type:Number,default:-1},filterMyTeams:{type:Boolean,default:!1},excludeContainers:{type:Boolean,default:!1},filterOutOfSla:{type:Boolean,default:!1},filterDueSoon:{type:Boolean,default:!1},severityFilter:{type:[String,void 0],default:void 0}},data(){return{singleIssueFilter:null,groupedIssueId:null,groupedIssue:null,isMounted:!1}},provide(){return{theme:"dark"}},async created(){document.addEventListener("keydown",this.escapeHandler),S.on("request-queue-sidebar-close",this.onRequestSidebarClose);const{sidebarIssue:e}=this.$route.query;e&&(this.groupedIssueId=parseInt(e,10))},setup(){const{width:e}=N();return{width:e}},mounted(){this.isMounted=!0},beforeUnmount(){C(),this.width>w&&B(),document.removeEventListener("keydown",this.escapeHandler),S.off("request-queue-sidebar-close",this.onRequestSidebarClose)},watch:{"$route.query.sidebarSingleIssueFilter"(){this.$route.query.sidebarSingleIssueFilter&&this.$route.query.sidebarSingleIssueFilter>0?this.singleIssueFilter=parseInt(this.$route.query.sidebarSingleIssueFilter):this.singleIssueFilter=-1},"$route.query"(){const{sidebarIssue:e}=this.$route.query;!e&&this.groupedIssueId&&(this.groupedIssueId=null),e&&parseInt(e,10)!==this.groupedIssueId&&(this.groupedIssueId=parseInt(e,10))},showSidebar(){this.showSidebar?(L(),E()):(C(),this.width>w&&B())}},computed:{showSidebar(){return!!this.groupedIssueId},showReScanButton(){const e=["open_source","cloud"];return!!this.groupedIssue&&e.includes(this.groupedIssue.type)},forStatus(){return this.groupedIssue.issues.every(e=>e.status==="ignored")?"ignored":this.showClosedOnly?"closed":this.showSnoozedOnly?"snoozed":this.showIgnoredOnly?"ignored":"open"},hasIssueTrackerIntegration(){return!!G.data.issueTracker},detailUrl(){return this.groupedIssue?`/issues/${this.groupedIssueId}/detail?status=${this.forStatus}`:`/issues/${this.groupedIssueId}/detail`}},methods:{escapeHandler(e){e.key==="Escape"&&this.handleCloseSidebar()},handleCloseSidebar(e=!1){if(!this.showSidebar||!e&&Q())return;const{sidebarIssue:t,...s}=V();this.$router.replace({query:s}),this.$emit("sidebarClosed")},onRequestSidebarClose(e={}){const t=e.ignoreOpenModal||!1;this.handleCloseSidebar(t)}}},le={key:0,class:"sidebar scrollbar-simple-carbon-60--inverted"},de={class:"p-24px pt-16px flex flex-column flex-1"},ce={class:"mb-32px flex justify-between align-center"},Ie={class:"text-14px flex gap-12px"},pe={class:"flex align-center gap-12px"},fe=i("i",{class:"icon icon-caret_down text-white"},null,-1);function he(e,t,s,p,o,r){const d=n("BaseIconButton"),g=n("BaseIcon"),m=n("RouterLink"),f=n("QueueSidebarTask"),h=n("BaseParagraph"),_=n("BaseButton"),T=n("SidebarActionMenu"),M=n("IssueGroupDetail"),R=n("QueueSidebarFooter");return o.isMounted?(l(),I(U,{key:0,to:"#queue-sidebar-portal"},[u(H,{name:"sidebar-slide"},{default:a(()=>[r.showSidebar?(l(),k("div",le,[i("div",de,[i("div",ce,[i("div",Ie,[u(d,{inverted:"",size:"large",icon:"icon-close text-white",onClick:r.handleCloseSidebar},null,8,["onClick"]),u(m,{to:r.detailUrl,class:"text-white text--normal p-5px text-14px h-28px hover_bg-carbon-80 rounded-6px",target:"_blank"},{default:a(()=>[u(g,{icon:"icon-openLink",size:18})]),_:1},8,["to"])]),i("div",pe,[r.hasIssueTrackerIntegration?(l(),I(f,{key:0,"grouped-issue":o.groupedIssue},null,8,["grouped-issue"])):c("",!0),u(T,{"issue-group":o.groupedIssue,filterRepoId:s.filterRepoId,filterImageId:s.filterCloudRepoId,filterCloudId:s.filterCloudId,filterDomainId:s.filterDomainId,filterInstanceGroupId:s.filterInstanceGroupId},{trigger:a(y=>[u(_,{size:"small",variation:"secondary",altHover:!0,onClick:y.toggle},{default:a(()=>[u(h,{color:"white"},{default:a(()=>[O(j(e.$t("ACTIONS")),1)]),_:1}),fe]),_:2},1032,["onClick"])]),_:1},8,["issue-group","filterRepoId","filterImageId","filterCloudId","filterDomainId","filterInstanceGroupId"])])]),u(M,{ref:"IssueGroupDetail",groupedIssueId:o.groupedIssueId,showClosedOnly:s.showClosedOnly,showSnoozedOnly:s.showSnoozedOnly,showIgnoredOnly:s.showIgnoredOnly,filterRepoId:s.filterRepoId,filterCloudRepoId:s.filterCloudRepoId,filterCloudId:s.filterCloudId,filterInstanceGroupId:s.filterInstanceGroupId,filterDomainId:s.filterDomainId,singleIssueFilter:o.singleIssueFilter,filterMyTeams:s.filterMyTeams,excludeContainers:s.excludeContainers,filterOutOfSla:s.filterOutOfSla,filterDueSoon:s.filterDueSoon,severityFilter:s.severityFilter,onGroupedIssueLoaded:t[0]||(t[0]=y=>o.groupedIssue=y)},null,8,["groupedIssueId","showClosedOnly","showSnoozedOnly","showIgnoredOnly","filterRepoId","filterCloudRepoId","filterCloudId","filterInstanceGroupId","filterDomainId","singleIssueFilter","filterMyTeams","excludeContainers","filterOutOfSla","filterDueSoon","severityFilter"])]),o.groupedIssue&&s.groupedIssues?(l(),I(R,{key:0,groupedIssue:o.groupedIssue,groupedIssues:s.groupedIssues,forStatus:r.forStatus},null,8,["groupedIssue","groupedIssues","forStatus"])):c("",!0)])):c("",!0)]),_:1})])):c("",!0)}const ye=b(ae,[["render",he]]);export{ye as Q};
