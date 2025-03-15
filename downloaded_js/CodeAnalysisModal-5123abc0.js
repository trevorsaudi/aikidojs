import{A as L,_ as C,f as E,a2 as z,r as a,q as i,m as l,F as T,t as A,k as m,p as h,n as o,S as I,ai as v,s as d,u as g,o as f,w as c,bn as O,au as q,d as G,a3 as F,Z as j,ga as X,hi as H,hj as J,c$ as Z,cR as Y,c7 as K}from"./index-13ff96f4.js";import{O as Q}from"./OverviewEmptyState-c8440b9c.js";import{G as $}from"./GenericIllustration-4aca88e5.js";import{F as ee,g as te}from"./scmTypeIcons-6c938021.js";import{B as se}from"./BaseCard-471d3203.js";import{I as re,A as ie}from"./AIText-891d4f7b.js";import{U as ne}from"./UnignoreIssue-5dff8957.js";import oe from"./CreateTicketModal-c14deeb1.js";import{F as ae,f as le,a as ce}from"./tracesParser-98d7d961.js";import{i as ue}from"./autofixable-c6560249.js";import{g as de}from"./taskTrackerIcon-504ea566.js";import{b as he}from"./dateFns-a344cb79.js";import{a as me}from"./autofixSastIssues-779ec5b4.js";import"./InputCheckbox-81cb3ca6.js";import"./ManualInputSearchDropdown-6a7ece3e.js";import"./ActionMenu-3e4470bf.js";import"./InputSearchDropdown-02988f6b.js";import"./repoName-872812ed.js";import"./taskTrackerNaming-55adac3e.js";import"./index-b87db690.js";const fe=s=>{switch(L.data.group.scm_type){case"github":return ge(s);case"bitbucket":return be(s);case"gitlab":case"gitlab_server":return we(s);case"azure_devops":return ke(s);default:return""}},pe=(s,t,r,u)=>{switch(L.data.group.scm_type){case"github":return ye(s,t,r);case"bitbucket":return _e(s,t,r);case"gitlab":case"gitlab_server":return Te(s,t,r);case"azure_devops":return Ie(s,t,r,u);default:return""}},ge=s=>{const t=s.split("/blob/"),r=t[0],n=t[1].split("/")[0];return`${r}/blob/${n}`},ye=(s,t,r)=>`${s}/${t}#L${r}`,be=s=>{const t=s.split("/src/"),r=t[0],n=t[1].split("/")[0];return`${r}/src/${n}`},_e=(s,t,r)=>`${s}/${t}#lines-${r}`,we=s=>{const t=s.split("/-/blob/"),r=t[0],n=t[1].split("/")[0];return`${r}/-/blob/${n}`},Te=(s,t,r)=>`${s}/${t}#L${r}`,ke=s=>{const t=s.split("?"),r=t[0],n=t[1].split("&"),e=["path","line","lineEnd"],b=n.filter(p=>{const k=p.split("=")[0];return!e.includes(k)}).join("&");return`${r}?${b}`},Ie=(s,t,r,u)=>`${s}&path=${t}&line=${r}&lineEnd=${u}`,Ce={components:{BaseButton:E,XTooltip:z},emits:["moreIndicatorClicked"],props:{entry:{type:Object,required:!0},baseScmRepoUrl:{type:String,default:""}},async mounted(){await this.calculateNodeLinkPosition()},computed:{fileUrl(){return!this.baseScmRepoUrl||!this.entryLine||!this.entry.region?"":pe(this.baseScmRepoUrl,this.entry.uri,this.entryLine,this.entry.region.endLine)},entryLine(){return this.entry.calledAtLine+1}},methods:{async calculateNodeLinkPosition(){if(!this.entry.children||this.entry.children.length<2)return;await this.$nextTick();const t=this.$refs.branch.offsetWidth,r=this.$refs.verticalTreeNode,u=r[0].$el,n=r[r.length-1].$el,e=u.offsetWidth/2,y=n.offsetWidth/2,b=this.$refs.nodeLink,p=t-e-y,x=(this.$refs.entry.offsetWidth-t)/2+e;b.style.width=`${p}px`,b.style.left=`${x}px`},onContentClick(){this.fileUrl&&window.open(this.fileUrl,"_blank")}}},xe={class:"entry",ref:"entry"},Se={key:0,class:"branch",ref:"branch"},ve={key:1,class:"node-link-container"},Fe={class:"node-link",ref:"nodeLink"},Le={class:"content"},Ae=o("svg",{class:"arrow-end",width:"6",height:"5",viewBox:"0 0 6 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 0L3 5L0 0H6Z",fill:"currentColor"})],-1);function Ue(s,t,r,u,n,e){const y=a("VerticalTreeNode",!0),b=a("XTooltip");return i(),l("div",xe,[r.entry.children&&r.entry.children.length>0?(i(),l("div",Se,[(i(!0),l(T,null,A(r.entry.children,p=>(i(),m(y,{key:p.functionUri,entry:p,baseScmRepoUrl:r.baseScmRepoUrl,ref_for:!0,ref:"verticalTreeNode",onMoreIndicatorClicked:t[0]||(t[0]=k=>s.$emit("moreIndicatorClicked",k))},null,8,["entry","baseScmRepoUrl"]))),128))],512)):h("",!0),r.entry.children&&r.entry.children.length>1?(i(),l("div",ve,[o("div",Fe,null,512)])):h("",!0),o("div",Le,[Ae,r.entry.isMoreIndicator?(i(),l("div",{key:1,class:"text-primary-aik-140 px-18px py-8px rounded-16px border-1 border-carbon-20 max-w-400px text-carbon-60 cursor-pointer hover_bg-carbon-5",onClick:t[2]||(t[2]=v(()=>s.$emit("moreIndicatorClicked",r.entry),["prevent","stop"]))},g(r.entry.functionUri),1)):(i(),l("div",{key:0,class:I(["text-primary-aik-140 px-18px py-8px rounded-16px border-1 border-carbon-20 max-w-400px truncate-left",{"cursor-pointer hover_bg-carbon-5":e.fileUrl}]),onClick:t[1]||(t[1]=v((...p)=>e.onContentClick&&e.onContentClick(...p),["prevent","stop"]))},[d(g(r.entry.functionUri)+" ",1),f(b,null,{default:c(()=>[d(g(r.entry.functionUri)+" ",1),e.entryLine?(i(),l(T,{key:0},[d("at line "+g(e.entryLine),1)],64)):h("",!0)]),_:1})],2))])],512)}const Be=C(Ce,[["render",Ue]]),Me={components:{VerticalTreeNode:Be},emits:["moreIndicatorClicked"],props:{data:{type:Object,required:!0},treeNodeComponent:{type:String,default:"VerticalTreeNode"},baseScmRepoUrl:{type:String,default:""}},data(){return{resizeCounter:0}},created(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){++this.resizeCounter}}},Pe={class:"VerticalTreeChart"};function Re(s,t,r,u,n,e){return i(),l("div",Pe,[(i(),m(O(r.treeNodeComponent),{key:n.resizeCounter,entry:r.data,baseScmRepoUrl:r.baseScmRepoUrl,onMoreIndicatorClicked:t[0]||(t[0]=y=>s.$emit("moreIndicatorClicked",y))},null,40,["entry","baseScmRepoUrl"]))])}const U=C(Me,[["render",Re]]),Ne={components:{FullscreenModal:ae,VerticalTreeChart:U},emits:["close","back"],props:{tracesTree:{type:Object,required:!0},baseScmRepoUrl:{type:String,default:""}},methods:{handleClose(){this.$emit("close")},handleBack(){this.$emit("back")}}},Ve={class:"border-1 border-carbon-20 rounded-8px"},We={class:"px-24px py-12px bg-carbon-5 rounded-t-8px"},De={class:"rounded-b-8px"},Ee={class:"overflow-x-auto"};function ze(s,t,r,u,n,e){const y=a("BaseParagraph"),b=a("VerticalTreeChart"),p=a("FullscreenModal");return i(),m(p,{header:"",onClose:e.handleClose,onConfirm:e.handleBack,confirmButtonText:"Go Back",cancelButtonText:"Close",buttonSize:"large"},{default:c(()=>[o("div",Ve,[o("div",We,[f(y,{bold:""},{default:c(()=>[d("How you're using it")]),_:1})]),o("div",De,[o("div",Ee,[f(b,{data:r.tracesTree,baseScmRepoUrl:r.baseScmRepoUrl},null,8,["data","baseScmRepoUrl"])])])])]),_:1},8,["onClose","onConfirm"])}const Oe=C(Ne,[["render",ze]]),qe={components:{BaseConfirmModal:q,OverviewEmptyState:Q,GenericIllustration:$,FileContentViewer:ee,BaseCard:se,BasePill:G,UnignoreIssue:ne,CreateTicketModal:oe,IgnoreIssueFeedbackModal:re,AIText:ie,VerticalTreeChart:U,FullCodeTreeModal:Oe},props:{issueId:{type:Number,required:!0},groupedIssueId:{type:Number,required:!0}},emits:["close","submit"],data(){return{tracesTree:{},filePreviewInfo:{},codeFlows:[],issue:{},groupedIssue:{},isLoading:!1,shouldShowEmptyState:!1,showIgnoreIssueFlow:!1,showUnignoreIssueFlow:!1,showCreateTicketFlow:!1,fullModalWidth:1280,verticalTracesTree:{},showFullTreeChartModal:!1}},async mounted(){this.$route.query.codeAnalysis!=this.issueId&&this.$router.replace({path:this.$route.path,query:{...this.$route.query,codeAnalysis:this.issueId}}),this.calculateModalWidth(),this.isLoading=!0,await this.loadData()},computed:{shouldShowModal(){return!(this.showIgnoreIssueFlow||this.showUnignoreIssueFlow||this.showCreateTicketFlow||this.showFullTreeChartModal)},title(){return this.isSuccessfullyLoaded?this.issue.title:""},width(){return this.isSuccessfullyLoaded?this.fullModalWidth:600},isSuccessfullyLoaded(){return!(this.isLoading||this.shouldShowEmptyState||!this.groupedIssue.id||!this.issue.id)},description(){if(!this.isSuccessfullyLoaded)return"";const s=this.issue.last_detected_at;return`Info found ${he(s)} ago.`},descriptionTooltip(){if(!this.isSuccessfullyLoaded)return"";const s=this.issue.last_detected_at;return F.fromUnix(s).format(F.FULL_DATE_TIME_FORMAT_PASSIVE)},issueLines(){return[this.issue.start_line,this.issue.end_line]},hasLLMAassessment(){return this.issue.aikido_score_reasons.some(s=>s.rule.startsWith("llm_assessment_"))},fileContentData(){return this.fileContentDataLivePreview},fileContentDataLivePreview(){if(!this.filePreviewInfo.file_contents)return null;const s=this.filePreviewInfo.file_path.split("."),t=s.length>1?s[s.length-1]:"";return{fileName:this.filePreviewInfo.file_path,fileLang:t,content:this.filePreviewInfo.file_contents,startLine:1}},highlightedLineNumbers(){if(!this.filePreviewInfo.file_contents)return[];const{start_line:s,end_line:t}=this.filePreviewInfo.issue;if(s==t)return[s-1];let r=[];for(let u=s;u<=t;u++)r.push(u-1);return r},autoTriageScoring(){return this.issue.aikido_score_reasons.find(s=>s.rule.startsWith("llm_assessment_"))},autoTriageSummary(){return!this.autoTriageScoring||!this.autoTriageScoring.llm_summary?"No AI Autotriage Summary available":this.autoTriageScoring.llm_summary},issueImpact(){return this.autoTriageScoring?this.autoTriageScoring.rule.replace("llm_assessment_",""):null},issueImpactText(){switch(this.issueImpact){case"auto_ignore":return"no impact";case"safe":return"no impact";case"lowest":return"very low";case"low":return"low";case"medium":return"medium";case"high":return"high";case"highest":return"very high";default:return""}},issueImpactClass(){switch(this.issueImpact){case"auto_ignore":case"safe":case"lowest":case"low":return"text-color-success";case"medium":return"text-surface-orange-100";case"high":case"highest":return"text-color-danger";default:return""}},aikidoRecommendationText(){switch(this.issueImpact){case"auto_ignore":case"safe":return this.issue.status=="ignored"?" and has already been ignored. If you do not agree, you can unignore the issue.":". We recommend to take a final look and ignore the issue if you agree it is safe.";case"lowest":case"low":return"We recommend to take a final look and ignore the issue if you agree it is safe.";case"medium":return"We recommend to take a look to see whether it is exploitable and fix or ignore the issue.";case"high":return"We recommend planning time to fix this issue.";case"highest":return"We recommend fixing the issue as soon as possible.";default:return"We recommend to take a final look to see whether it is exploitable and fix or ignore the issue."}},issueImpactPillText(){switch(this.issueImpact){case"auto_ignore":case"safe":return"No impact";case"lowest":return"Very low priority to fix";case"low":return"Low priority to fix";case"medium":return"Medium priority to fix";case"high":return"High priority to fix";case"highest":return"Very high priority to fix";default:return"Inconclusive"}},issueImpactPillIcons(){switch(this.issueImpact){case"auto_ignore":case"safe":case"lowest":return["icon-arrow-down","icon-arrow-down"];case"low":return["icon-arrow-down"];case"medium":return["="];case"high":return["icon-arrow-up"];case"highest":return["icon-arrow-up","icon-arrow-up"];default:return[]}},issueImpactPillVariation(){switch(this.issueImpact){case"auto_ignore":case"safe":case"lowest":case"low":return"green";case"medium":return"blue";case"high":case"highest":return"red";default:return"gray-outline"}},isIssueAutoFixable(){return ue(this.issue,this.groupedIssue.programming_language,!0)},scmTypeIcon(){return te()},hasIssueTrackerIntegrationEnabled(){return!!j.data.issueTracker},taskTrackerIcon:de,primaryAction(){return this.issue.status=="ignored"?{label:"Unignore issue",icon:"icon-hidden",buttonVariation:"plain",handler:()=>this.showUnignoreIssueFlow=!0}:this.isIssueAutoFixable?{label:"Preview Autofix",icon:this.scmTypeIcon,buttonVariation:"primary",handler:this.handleAutofixPreview}:this.hasIssueTrackerIntegrationEnabled?{label:"Create Task",icon:this.taskTrackerIcon,buttonVariation:"plain",handler:()=>this.showCreateTicketFlow=!0}:{label:"Got it",icon:"",buttonVariation:"primary",handler:()=>this.onClose()}},secondaryAction(){return this.issue.status=="ignored"?{}:{label:"Ignore Issue",icon:"icon-hidden",handler:()=>this.showIgnoreIssueFlow=!0}},shouldShowBottomLeftButtons(){return this.isSuccessfullyLoaded?(this.autoTriageScoring||this.$user.is_aikido_support,!0):!1},selectedIgnoreRule(){return{target:"issue_id",value:this.issue.id}},hasTraces(){return!(!this.$featureflags.enable_code_paths||!this.tracesTree||!this.tracesTree.children||this.tracesTree.children.length==0)},baseScmRepoUrl(){return this.issue.reference_url?fe(this.issue.reference_url):""},showRightPanel(){return!!(this.hasLLMAassessment||this.hasTraces)}},methods:{async loadData(){this.shouldShowEmptyState=!1,await Promise.allSettled([this.loadFilePreviewInfo(),this.loadIssueCodeFlows(),this.loadTracesTree(),this.loadIssueInfo()]),this.isLoading=!1},async loadTracesTree(){const s=await X(this.issueId,{disable_toasts:!0}),t=JSON.parse(JSON.stringify(s.traces_tree)),r=JSON.parse(JSON.stringify(s.traces_tree));this.tracesTree=le(t),this.verticalTracesTree=ce(r)},async loadFilePreviewInfo(){this.filePreviewInfo=await H(this.issueId,{disable_toasts:!0})},async loadIssueCodeFlows(){this.codeFlows=await J(this.issueId,{disable_toasts:!0})},async loadIssueInfo(){const s=await Z(this.groupedIssueId,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,this.issueId);this.groupedIssue=s,this.issue=s.issues.find(t=>t.id==this.issueId)},async onStartTracesScan(){await Y(this.issue.repo_id,-1,this.groupedIssue.id),this.$toast.success("Traces scan successfully started. Results will be visible shortly."),this.isLoading=!0},onSubmit(){this.$emit("submit")},sendFeedback(){this.onClose(),this.$modal.show("AutoTriageFeedbackModal",{issue:this.issue})},openTracesModal(s,t="traces"){this.onClose(),this.$modal.show("TracesChartModal",{issueId:this.issue.id,issueTitle:this.issue.title,issueLines:this.issueLines,initialTab:t})},calculateModalWidth(){const s=window.innerWidth;this.fullModalWidth=s*.9},async handleAutofixPreview(){await me([this.issue],!0,this.issue.title,!0),this.onClose()},onClose(){const s={...this.$route.query};delete s.codeAnalysis,this.$router.replace({path:this.$route.path,query:s}),this.$emit("close")},handleVerticalTreeChartClicked(s){this.showFullTreeChartModal=!0}}},Ge={key:0,class:"h-250px relative"},je={key:1},Xe={key:2,class:"flex gap-16px min-h-400px desktop-small_flex-column"},He={key:0,class:"flex flex-column gap-16px w-533px desktop-small_w-full"},Je={class:"border-1 border-carbon-20 rounded-8px"},Ze={class:"px-24px py-12px bg-carbon-5 rounded-t-8px flex justify-between items-center"},Ye={key:0},Ke={key:0,class:"pill__label"},Qe={class:"pill__label"},$e={class:"rounded-b-8px px-24px py-12px"},et={class:"border-1 border-carbon-20 rounded-8px"},tt={class:"px-24px py-12px bg-carbon-5 rounded-t-8px"},st={class:"rounded-b-8px px-24px py-12px"},rt={key:1,class:"border-1 border-carbon-20 rounded-8px"},it={class:"px-24px py-12px bg-carbon-5 rounded-t-8px"},nt={class:"rounded-b-8px"},ot={class:"overflow-x-auto"},at={class:"buttons modal-button-section"};function lt(s,t,r,u,n,e){const y=a("XPreloader"),b=a("GenericIllustration"),p=a("OverviewEmptyState"),k=a("FileContentViewer"),_=a("BaseParagraph"),x=a("BaseIcon"),B=a("BasePill"),M=a("AIText"),P=a("VerticalTreeChart"),S=a("BaseButton"),R=a("BaseConfirmModal"),N=a("IgnoreIssueFeedbackModal"),V=a("UnignoreIssue"),W=a("CreateTicketModal"),D=a("FullCodeTreeModal");return i(),l(T,null,[e.shouldShowModal?(i(),m(R,{key:0,width:e.width,title:e.title,allowBackgroundClose:!e.isSuccessfullyLoaded,hideSecondaryButton:!e.isSuccessfullyLoaded||!e.secondaryAction.label,hideSubmit:!e.isSuccessfullyLoaded,description:e.description,descriptionTooltip:e.descriptionTooltip,descriptionClass:"text-carbon-60 text-12px--important",buttonSubmitText:e.primaryAction.label,buttonSubmitVariation:e.primaryAction.buttonVariation,buttonSubmitIcon:e.primaryAction.icon,onSubmit:e.primaryAction.handler,buttonSecondaryText:e.secondaryAction.label,buttonSecondaryIcon:e.secondaryAction.icon,onSecondaryButtonClicked:e.secondaryAction.handler,onClose:e.onClose},K({default:c(()=>[n.isLoading?(i(),l("div",Ge,[f(y,{class:"absolute-centered mt-12px",size:"large"})])):n.shouldShowEmptyState?(i(),l("div",je,[f(p,{title:"No Code Analysis Available Yet",description:"Aikido can provide you with code analysis and autotriage this issue for you.",actionLabel:"Start Code Analysis",onOnAction:e.onStartTracesScan},{default:c(()=>[f(b)]),_:1},8,["onOnAction"])])):e.fileContentData?(i(),l("div",Xe,[o("div",{class:I(["scrollbar-simple-carbon-60--inverted desktop-small_w-full",{"w-calc-full-550px":e.showRightPanel,"w-full":!e.showRightPanel}])},[f(k,{class:"max-h-500px overflow-y-auto scrollbar-simple-carbon-60--inverted",fileName:e.fileContentData.fileName,fileLang:e.fileContentData.fileLang,content:e.fileContentData.content,highlightedLineNumbers:e.highlightedLineNumbers,contentStartLine:e.fileContentData.startLine,codeFlows:n.codeFlows,fileUrl:n.issue.reference_url},null,8,["fileName","fileLang","content","highlightedLineNumbers","contentStartLine","codeFlows","fileUrl"])],2),e.showRightPanel?(i(),l("div",He,[e.hasLLMAassessment?(i(),l(T,{key:0},[o("div",Je,[o("div",Ze,[f(_,{bold:""},{default:c(()=>[d("Aikido Recommendation")]),_:1}),f(B,{variation:e.issueImpactPillVariation},{default:c(()=>[e.issueImpactPillIcons.length>0?(i(),l("span",Ye,[(i(!0),l(T,null,A(e.issueImpactPillIcons,w=>(i(),l(T,{key:w},[w=="="?(i(),l("p",Ke,"=")):(i(),m(x,{key:1,icon:w,size:12,class:"inline-flex align-center justify-center"},null,8,["icon"]))],64))),128))])):h("",!0),o("p",Qe,g(e.issueImpactPillText),1)]),_:1},8,["variation"])]),o("div",$e,[e.issueImpact=="safe"||e.issueImpact=="auto_ignore"?(i(),m(_,{key:0,color:"dark-gray"},{default:c(()=>[d(" According to Aikido, this issue has "),o("span",{class:I(["text--semi-bold",e.issueImpactClass])},g(e.issueImpactText),3),d(" at all"+g(e.aikidoRecommendationText),1)]),_:1})):(i(),m(_,{key:1,color:"dark-gray"},{default:c(()=>[e.issueImpact?(i(),l(T,{key:0},[d(" According to Aikido, this is a "),o("span",{class:I(["text--semi-bold",e.issueImpactClass])},g(e.issueImpactText),3),d(" impact issue. ")],64)):h("",!0),d(" "+g(e.aikidoRecommendationText),1)]),_:1}))])]),o("div",et,[o("div",tt,[f(_,{bold:""},{default:c(()=>[d("AI Autotriage Summary")]),_:1})]),o("div",st,[e.autoTriageScoring.llm_summary?(i(),m(_,{key:0},{default:c(()=>[f(M,null,{default:c(()=>[d(g(e.autoTriageSummary),1)]),_:1})]),_:1})):(i(),m(_,{key:1,color:"dark-gray"},{default:c(()=>[d(g(e.autoTriageSummary),1)]),_:1}))])])],64)):h("",!0),e.hasTraces?(i(),l("div",rt,[o("div",it,[f(_,{bold:""},{default:c(()=>[d("How you're using it")]),_:1})]),o("div",nt,[o("div",ot,[f(P,{class:"cursor-zoom-in",data:n.verticalTracesTree,baseScmRepoUrl:e.baseScmRepoUrl,onMoreIndicatorClicked:t[0]||(t[0]=w=>n.showFullTreeChartModal=!0),onClick:e.handleVerticalTreeChartClicked},null,8,["data","baseScmRepoUrl","onClick"])])])])):h("",!0)])):h("",!0)])):h("",!0)]),_:2},[e.shouldShowBottomLeftButtons?{name:"bottomLeftContent",fn:c(()=>[o("div",at,[e.autoTriageScoring?(i(),m(S,{key:0,variation:"plain",class:"inline-block text-transform-none",onClick:e.sendFeedback},{default:c(()=>[d(" Send Feedback ")]),_:1},8,["onClick"])):h("",!0),s.$user.is_aikido_support?(i(),m(S,{key:1,variation:"plain",class:"inline-block text-transform-none",onClick:e.openTracesModal},{default:c(()=>[d(" View Call Tree ")]),_:1},8,["onClick"])):h("",!0),s.$user.is_aikido_support?(i(),m(S,{key:2,variation:"plain",class:"inline-block text-transform-none",onClick:t[1]||(t[1]=w=>e.openTracesModal(w,"llm-assessment"))},{default:c(()=>[d(" View LLM Assessment ")]),_:1})):h("",!0)])]),key:"0"}:void 0]),1032,["width","title","allowBackgroundClose","hideSecondaryButton","hideSubmit","description","descriptionTooltip","buttonSubmitText","buttonSubmitVariation","buttonSubmitIcon","onSubmit","buttonSecondaryText","buttonSecondaryIcon","onSecondaryButtonClicked","onClose"])):h("",!0),f(N,{show:n.showIgnoreIssueFlow,selectedRule:e.selectedIgnoreRule,issue:n.issue,onCancel:t[2]||(t[2]=()=>e.onClose()),onConfirm:t[3]||(t[3]=()=>e.onClose())},null,8,["show","selectedRule","issue"]),n.showUnignoreIssueFlow?(i(),m(V,{key:1,onCancel:t[4]||(t[4]=()=>e.onClose()),issue:n.issue,show:n.showUnignoreIssueFlow},null,8,["issue","show"])):h("",!0),n.showCreateTicketFlow?(i(),m(W,{key:2,issue:n.issue,isForSingleIssue:!0,onCreated:t[5]||(t[5]=()=>e.onClose()),onCancel:t[6]||(t[6]=()=>e.onClose())},null,8,["issue"])):h("",!0),n.showFullTreeChartModal?(i(),m(D,{key:3,tracesTree:n.tracesTree,baseScmRepoUrl:e.baseScmRepoUrl,onBack:t[7]||(t[7]=w=>n.showFullTreeChartModal=!1),onClose:t[8]||(t[8]=()=>e.onClose())},null,8,["tracesTree","baseScmRepoUrl"])):h("",!0)],64)}const Lt=C(qe,[["render",lt]]);export{Lt as default};
