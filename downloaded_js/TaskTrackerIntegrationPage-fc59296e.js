import{_ as S,r,q as l,m as j,o as n,w as i,s as u,u as k,n as h,au as L,N as A,I as B,al as D,Z as g,av as E,aw as U,k as _,p as y,F as R,t as V,K as z,ax as $,T as q,U as W,A as H,z as F,a2 as v,ay as X,az as K,aA as J,a8 as Y,X as G,H as Z,f as Q,aB as ee,aC as te,aD as M}from"./index-13ff96f4.js";import{P as ae}from"./PageHeader-46c38a32.js";import{B as w}from"./BaseCard-471d3203.js";import{I as x}from"./InputMultiSelect-21584437.js";import{g as C}from"./taskTrackerNaming-55adac3e.js";import{I as se}from"./InputSearchDropdown-02988f6b.js";import{g as oe}from"./issueTypes-85f86ea8.js";import{A as re}from"./vault-js.esm-b0648a80.js";import"./ActionMenu-3e4470bf.js";import"./InputCheckbox-81cb3ca6.js";import"./ScmSecurity-27bd32ff.js";const ne={components:{InputMultiSelect:x},emits:["updateLinkedRepos"],props:{projectInfo:{type:Object,required:!0},project_id:{type:Number,required:!0},repoOptions:{type:Array,required:!0}},methods:{updateLinkedRepos(e){this.$emit("updateLinkedRepos",{projectId:this.project_id,selectedRepoIds:e})}}},ie={class:"mb-24px"},ce={class:"text--semi-bold"};function le(e,t,a,c,o,s){const m=r("BaseParagraph"),p=r("InputMultiSelect");return l(),j("div",ie,[n(m,{size:"medium",semiBold:!0},{default:i(()=>[u(k(a.projectInfo.name),1)]),_:1}),n(m,{color:"subdued"},{default:i(()=>[h("span",ce,k(e.$t("X_REPOS",a.projectInfo.linked_repo_ids.length)),1),u(" connected ")]),_:1}),n(p,{class:"mt-8px",width:"unset",placeholder:"Select Repos",options:a.repoOptions,selectedItems:a.projectInfo.linked_repo_ids,"onUpdate:selectedItems":s.updateLinkedRepos,enableSearch:!0,enableCheckAll:!1,useFilterStyling:!1,truncateOptionsWidth:400},null,8,["options","selectedItems","onUpdate:selectedItems"])])}const de=S(ne,[["render",le]]),ue=e=>new Promise(t=>setTimeout(t,e)),pe={components:{BaseConfirmModal:L,BaseSelect:A,ProjectToRepoInput:de,InputSearch:B,LoadingSpinner:D},emits:["close","submit"],props:{projectRepoMap:{type:Object,required:!0},projects:{type:Array,required:!0},repos:{type:Array,required:!0},canEdit:{type:Boolean,default:!1},integrationId:{type:[Number,null],default:null}},data(){return{newProjectRepoMap:{},search:"",debouncedSearch:"",maxVisibleProjects:10,shouldShowLoadingDuringSearch:!0,isLoading:!0}},async mounted(){const e=Object.keys(this.projectRepoMap).length;e<100&&(this.shouldShowLoadingDuringSearch=!1,this.maxVisibleProjects=e);for(const[t,a]of Object.entries(this.projectRepoMap)){const c=this.getProjectName(t);if(!c)continue;const o={name:c,linked_repo_ids:a};this.newProjectRepoMap[t]=o}await ue(200),this.isLoading=!1},computed:{taskTrackerName(){return this.$t("TASK_TRACKER_"+g.data.issueTracker).replace(" issues","")},repoOptions(){return this.repos.map(e=>({value:e.id,label:this.getRepoName(e)}))},projectOptions(){return this.projects.map(e=>({id:e.id,title:e.title}))},projectText(){return C()},projectsText(){return C(!0)},filteredNewProjectRepoMap(){if(!this.debouncedSearch)return this.newProjectRepoMap;const e={};for(const[t,a]of Object.entries(this.newProjectRepoMap)){const c=a.name.toLowerCase(),o=this.debouncedSearch.toLowerCase();c.includes(o)&&(e[t]=a)}return e},visibleNewProjectRepoMap(){const t=[...Object.entries(this.filteredNewProjectRepoMap)].slice(0,this.maxVisibleProjects);return Object.fromEntries(t)},improveSearchMsg(){const e=Object.keys(this.newProjectRepoMap).length,t=Object.keys(this.visibleNewProjectRepoMap).length;if(e==t)return"";const a=t.length==1?this.projectText.toLowerCase():this.projectsText.toLowerCase();return`${t} ${a} displayed. Search to access all ${e}.`}},methods:{getProjectName(e){const t=this.projects.find(a=>a.id==e);return t?t.title:null},updateLinkedRepos(e){const{projectId:t,selectedRepoIds:a}=e,o={...this.newProjectRepoMap[t],linked_repo_ids:a};this.newProjectRepoMap[t]=o},getRepoOptionsForProject(e){const t=Object.entries(this.newProjectRepoMap).map(([a,c])=>a==e?[]:c.linked_repo_ids).flat(1);return this.repoOptions.map(a=>{const c=t.includes(a.value);let o="";return c&&(o=`This repo is already linked to ${this.getOtherLinkedProjectName(a.value,e)}`),{...a,disabled:c,disabledTooltip:o}})},getOtherLinkedProjectName(e,t){for(const[a,c]of Object.entries(this.newProjectRepoMap))if(a!=t&&c.linked_repo_ids.includes(e))return c.name},async handleMapReposToProjects(){const e={};for(const[t,a]of Object.entries(this.newProjectRepoMap))e[t]=a.linked_repo_ids;await E(e,this.integrationId),this.$toast.success(`We succesfully mapped your ${this.taskTrackerName} projects to your repos`),this.$emit("submit")},onUpdateSearch(e){this.isLoading=!0,this.filterProjectRepoMap(e)},filterProjectRepoMap:U(function(e){this.debouncedSearch=e,this.isLoading=!1},400),getRepoName(e){if(e.scm_repo_uid.includes("_aikidoclone_")){const t=e.path_to_scan||e.scm_repo_default_branch;return`${e.scm_repo_name} - ${t}`}return e.scm_repo_name}}},me={key:0,class:"mb-36px"},he={key:0,class:"mt-4px"},fe={key:1,class:"mt-16px"},ge={key:1,class:"flex justify-center align-center h-50px"};function Te(e,t,a,c,o,s){const m=r("InputSearch"),p=r("BaseParagraph"),T=r("LoadingSpinner"),f=r("ProjectToRepoInput"),d=r("BaseConfirmModal");return l(),_(d,{width:600,title:e.$t("MAP_REPOS_TO_PROJECTS.MODAL.TITLE",{taskTrackerName:s.taskTrackerName,projectName:s.projectsText}),headerText:e.$t("MAP_REPOS_TO_PROJECTS.MODAL.HEADER",{taskTrackerName:s.taskTrackerName,projectName:s.projectsText}),description:e.$t("MAP_REPOS_TO_PROJECTS.MODAL.DESC",{taskTrackerName:s.taskTrackerName,projectName:s.projectText}),buttonSubmitText:e.$t("MAP_REPOS_TO_PROJECTS.MODAL.BUTTON"),onSubmit:s.handleMapReposToProjects,onClose:t[1]||(t[1]=I=>e.$emit("close")),onSecondaryButtonClicked:t[2]||(t[2]=I=>e.$emit("close")),allowBackgroundClose:!1,disableSubmit:!e.$group.admin},{default:i(()=>[Object.keys(o.newProjectRepoMap).length>4?(l(),j("div",me,[n(m,{modelValue:o.search,"onUpdate:modelValue":[t[0]||(t[0]=I=>o.search=I),s.onUpdateSearch],spacing:"compact",placeholder:"Search projects",fullWidth:!0,disableDebounce:!0},null,8,["modelValue","onUpdate:modelValue"]),s.improveSearchMsg?(l(),j("div",he,[n(p,{color:"subdued"},{default:i(()=>[u(k(s.improveSearchMsg),1)]),_:1})])):y("",!0),Object.keys(s.visibleNewProjectRepoMap).length==0?(l(),j("div",fe,[n(p,{size:"medium",semiBold:""},{default:i(()=>[u("No projects found. Try adjusting your search term")]),_:1})])):y("",!0)])):y("",!0),o.isLoading&&o.shouldShowLoadingDuringSearch?(l(),j("div",ge,[n(T,{color:"#645dd7","background-color":"#d0cdff",width:24,height:24})])):(l(!0),j(R,{key:2},V(s.visibleNewProjectRepoMap,(I,P)=>(l(),j("div",{key:P},[n(f,{projectInfo:I,project_id:P,repoOptions:s.getRepoOptionsForProject(P),onUpdateLinkedRepos:s.updateLinkedRepos},null,8,["projectInfo","project_id","repoOptions","onUpdateLinkedRepos"])]))),128))]),_:1},8,["title","headerText","description","buttonSubmitText","onSubmit","disableSubmit"])}const _e=S(pe,[["render",Te]]),ke={components:{ProjectToRepoMappingModal:_e},emits:["projectToRepoMapped"],props:{projects:{type:Array,required:!0},canEdit:{type:Boolean,default:!1},integrationId:{type:[Number,null],default:null}},data(){return{shouldShowProjectToRepoMappingModal:!1,projectRepoMap:{},repos:[],isProjectRepoMapLoading:!1}},async mounted(){await this.loadDataForProjectToRepoMapping()},computed:{mapProjectToRepoDescription(){const e=Object.values(this.projectRepoMap).filter(a=>a.length>0).length,t=Object.keys(this.projectRepoMap).length;return`*${e} of ${t}* ${this.issueTrackerProjectName} are linked to repos`},issueTrackerName(){const e=g.data.issueTracker+"";return e.charAt(0).toUpperCase()+e.slice(1)},issueTrackerProjectName(){const e=C(!0);return this.issueTrackerName+" "+e}},methods:{async loadDataForProjectToRepoMapping(){this.isProjectRepoMapLoading=!0,await this.loadProjectRepoMap(),this.repos=await z(null,!1,!1,{skip:null,limit:null},"scm_repo_name",null,null,{},!0,0),this.isProjectRepoMapLoading=!1},async loadProjectRepoMap(){const{project_repo_map:e}=await $(this.integrationId);this.projectRepoMap=e},async onProjectToRepoMapped(){this.shouldShowProjectToRepoMappingModal=!1,this.$emit("projectToRepoMapped"),await this.loadProjectRepoMap()}}},je={key:1},ye={class:"text-gray-200 mb-12px"};function Ie(e,t,a,c,o,s){const m=r("XPreloader"),p=r("BaseParagraph"),T=r("BaseButton"),f=r("ProjectToRepoMappingModal"),d=q("markup");return o.isProjectRepoMapLoading?(l(),_(m,{key:0,size:"medium",class:"supercenter"})):(l(),j("div",je,[n(p,{size:"medium",bold:"",class:"mb-4px mt-32px"},{default:i(()=>[u(" Map Repos ")]),_:1}),h("div",ye,[W(h("span",null,null,512),[[d,s.mapProjectToRepoDescription]])]),n(T,{class:"mt-4px",size:"small",onClick:t[0]||(t[0]=I=>o.shouldShowProjectToRepoMappingModal=!0)},{default:i(()=>[u("Map Repos to "+k(s.issueTrackerProjectName),1)]),_:1}),o.shouldShowProjectToRepoMappingModal?(l(),_(f,{key:0,projectRepoMap:o.projectRepoMap,projects:a.projects,repos:o.repos,canEdit:a.canEdit,integrationId:a.integrationId,onClose:t[1]||(t[1]=I=>o.shouldShowProjectToRepoMappingModal=!1),onSubmit:s.onProjectToRepoMapped},null,8,["projectRepoMap","projects","repos","canEdit","integrationId","onSubmit"])):y("",!0)]))}const be=S(ke,[["render",Ie]]),Se=["github","gitlab","gitlab-server"],O=e=>e?H.data.group.scm_type=="selfscan"?!0:!Se.includes(e):!1,Pe={components:{BaseCard:w,BaseSelect:A,ProjectToRepoMappingSection:be,InputSearchDropdown:se},emits:["update:selectedProjectId","onProjectToRepoMapped"],props:{selectedProjectId:{type:String,required:!0},projectOptions:{type:Array,required:!0},projectsIsLoading:{type:Boolean,required:!0},canEdit:{type:Boolean,default:!1},integrationId:{type:[Object,null],default:null}},watch:{async projectsIsLoading(e){if(!e&&this.selectedProjectId!=-1&&(await this.$nextTick(),this.$refs.projectSearchDropdown.prefillSearch()),this.selectedProjectId!=-1||e||this.projectOptions.length<1)return;const t=this.projectOptions[0];this.$emit("update:selectedProjectId",t.id)}},computed:{issueTrackerName(){return this.$t("TASK_TRACKER_"+g.data.issueTracker).replace(" issues","")},projectName(){return C()},projectsName(){return C(!0)},issueTrackerProjectName(){return this.issueTrackerName+" "+this.projectsName},projectMappingCardTitle(){return this.shouldShowProjectToRepoMappingSection?`Map Repos to ${this.issueTrackerProjectName}`:"Default Project"},selectProjectDesc(){return`The ${this.projectName.toLowerCase()} proposed during manual ticket creation. Also serves as fallback during autocreation.`},shouldShowProjectToRepoMappingSection(){const e=g.data.issueTracker;return O(e)},formattedProjectOptions(){return this.projectOptions.map(e=>({value:e.id,label:e.title}))}},methods:{handleSelectedProjectIdUpdate(e){const t=e||-1;this.$emit("update:selectedProjectId",t)}}},Ce={class:"flex flex-column"};function Re(e,t,a,c,o,s){const m=r("BaseParagraph"),p=r("InputSearchDropdown"),T=r("ProjectToRepoMappingSection"),f=r("BaseCard");return l(),_(f,{title:s.projectMappingCardTitle,class:"w-calc-50p-24px wide-tablet_w-full"},{default:i(()=>[h("div",Ce,[n(m,{size:"medium",bold:""},{default:i(()=>[u("Default "+k(s.projectName),1)]),_:1}),n(m,{color:"subdued",class:"mt-4px mb-12px"},{default:i(()=>[u(k(s.selectProjectDesc),1)]),_:1}),n(p,{ref:"projectSearchDropdown",options:s.formattedProjectOptions,modelValue:a.selectedProjectId,"onUpdate:modelValue":s.handleSelectedProjectIdUpdate,isLoading:a.projectsIsLoading,disabled:!a.canEdit,ignoreSearchFilterWhenValueIsSelected:!0},null,8,["options","modelValue","onUpdate:modelValue","isLoading","disabled"])]),s.shouldShowProjectToRepoMappingSection?(l(),_(T,{key:0,projects:a.projectOptions,integrationId:a.integrationId,onProjectToRepoMapped:t[0]||(t[0]=d=>e.$emit("onProjectToRepoMapped"))},null,8,["projects","integrationId"])):y("",!0)]),_:1},8,["title"])}const we=S(Pe,[["render",Re]]),Ae={components:{BaseCard:w},emits:["update:tagName"],props:{tagName:{type:String,required:!0},canEdit:{type:Boolean,default:!1}},computed:{extraText(){return g.data.issueTracker=="linear"?"Labels need to exist in Linear.":""},allowMultipleTags(){return["linear","jira","jira-data-center"].includes(g.data.issueTracker)},defaultText(){let e="Labels are automatically appended to new tasks.";return this.allowMultipleTags&&(e+=" Add multiple by separating with a comma."),e},tagNamePlaceHolder(){return this.allowMultipleTags?"Label1,Label2":"Label"}}},Me={class:"flex flex-column"};function ve(e,t,a,c,o,s){const m=r("BaseParagraph"),p=r("InputText"),T=r("BaseCard");return l(),_(T,{title:"Set Default Label"},{default:i(()=>[h("div",Me,[n(m,{size:"medium",bold:""},{default:i(()=>[u("Default Label To Add")]),_:1}),n(m,{size:"small",color:"subdued",class:"mt-4px mb-12px"},{default:i(()=>[u(k(s.defaultText)+" ",1),s.extraText?(l(),j(R,{key:0},[u(k(s.extraText),1)],64)):y("",!0)]),_:1}),n(p,{modelValue:a.tagName,"onUpdate:modelValue":t[0]||(t[0]=f=>e.$emit("update:tagName",f)),placeholder:s.tagNamePlaceHolder,disabled:!a.canEdit},null,8,["modelValue","placeholder","disabled"])])]),_:1})}const xe=S(Ae,[["render",ve]]),Oe={components:{BaseCard:w,BaseSelect:A,InputSwitch:F,XTooltip:v,InputMultiSelect:x},emits:["update:autoCreateTasks","update:selectedSeverity","update:selectedDailyRate","update:selectedAutoCreationIssueTypes","update:selectedAllAutoCreationIssueTypes"],props:{autoCreateTasks:{type:Boolean,required:!0},selectedSeverity:{type:String,required:!0},selectedDailyRate:{type:Number,required:!0},selectedAutoCreationIssueTypes:{type:Array,required:!0},selectedAllAutoCreationIssueTypes:{type:Boolean,required:!0},canEdit:{type:Boolean,default:!1}},data(){return{severityOptions:[{id:"critical",title:"Critical"},{id:"high",title:"High"},{id:"medium",title:"Medium"},{id:"low",title:"Low"}]}},computed:{issueTrackerName(){return this.$t("TASK_TRACKER_"+g.data.issueTracker).replace(" issues","")},maxAllowedDailyTaskAmount(){return this.$featureflags.increase_automation_task_amount?20:5},canMapRepos(){const e=g.data.issueTracker;return O(e)},autoCreationIssueTypeOptions(){return oe().map(t=>({value:t,label:this.$t(`ISSUE_TYPE.${t}`)}))},visibleSelectedAutoCreationIssueTypes(){return this.selectedAllAutoCreationIssueTypes?this.autoCreationIssueTypeOptions.map(e=>e.value):this.selectedAutoCreationIssueTypes},selectedIssueTypesText(){return this.selectedAllAutoCreationIssueTypes?"all issue types":this.selectedAutoCreationIssueTypes.length==1?this.autoCreationIssueTypeOptions.find(t=>t.value==this.selectedAutoCreationIssueTypes[0]).label:this.selectedAutoCreationIssueTypes.length>1?`${this.selectedAutoCreationIssueTypes.length} issue types`:"all issue types"}}},Ne={class:"flex flex-column"},Le={class:"flex flex-column mt-24px"},Be={class:"flex flex-column gap-12px mt-24px"},De={key:0};function Ee(e,t,a,c,o,s){const m=r("InputSwitch"),p=r("BaseParagraph"),T=r("BaseSelect"),f=r("InputMultiSelect"),d=r("XTooltip"),I=r("BaseIcon"),P=r("InputText"),N=r("BaseCard");return l(),_(N,{title:"Autocreation"},{headerContent:i(()=>[n(m,{modelValue:a.autoCreateTasks,"onUpdate:modelValue":t[0]||(t[0]=b=>e.$emit("update:autoCreateTasks",b)),labelRightOn:"On",labelRightOff:"Off",disabled:!a.canEdit},null,8,["modelValue","disabled"])]),default:i(()=>[a.autoCreateTasks?(l(),j(R,{key:0},[h("div",Ne,[n(p,{size:"medium",bold:""},{default:i(()=>[u("On what severity should we create tasks?")]),_:1}),n(p,{size:"small",color:"subdued",class:"mt-4px mb-12px"},{default:i(()=>[u(" Aikido will automatically create tasks for new "),h("strong",null,k(a.selectedSeverity),1),u(" issues or higher. ")]),_:1}),n(T,{options:o.severityOptions,modelValue:a.selectedSeverity,"onUpdate:modelValue":t[1]||(t[1]=b=>e.$emit("update:selectedSeverity",b)),required:"",disabled:!a.canEdit},null,8,["options","modelValue","disabled"])]),h("div",Le,[n(p,{size:"medium",bold:""},{default:i(()=>[u("Which issue types should trigger task creation?")]),_:1}),n(p,{size:"small",color:"subdued",class:"mt-4px mb-12px"},{default:i(()=>[u(" Aikido will automatically create tasks for "),h("strong",null,k(s.selectedIssueTypesText),1),u(". ")]),_:1}),n(f,{selectedItems:s.visibleSelectedAutoCreationIssueTypes,"onUpdate:selectedItems":t[2]||(t[2]=b=>e.$emit("update:selectedAutoCreationIssueTypes",b)),isAllChecked:a.selectedAllAutoCreationIssueTypes,"onUpdate:isAllChecked":t[3]||(t[3]=b=>e.$emit("update:selectedAllAutoCreationIssueTypes",b)),options:s.autoCreationIssueTypeOptions,enableCheckAll:!0,enableSearch:!1,disabled:!a.canEdit,selectAllText:"All Issue Types",truncateOptionsWidth:400,width:"unset"},null,8,["selectedItems","isAllChecked","options","disabled"])]),h("div",Be,[n(p,{size:"medium",bold:"",class:"flex gap-4px"},{default:i(()=>[u(" How many tasks should be created a day? "),n(I,{icon:"icon-help",class:"cursor-help inline-flex"},{default:i(()=>[n(d,null,{default:i(()=>[u("We allow up to maximum "+k(s.maxAllowedDailyTaskAmount)+" auto created tasks a day to avoid overflowing your workflow",1)]),_:1})]),_:1})]),_:1}),n(P,{type:"number",min:1,max:s.maxAllowedDailyTaskAmount,modelValue:a.selectedDailyRate,"onUpdate:modelValue":t[4]||(t[4]=b=>e.$emit("update:selectedDailyRate",b)),disabled:!a.canEdit},null,8,["max","modelValue","disabled"])])],64)):(l(),_(p,{key:1,size:"small",color:"subdued"},{default:i(()=>[u(" Allow Aikido to create tasks automatically in "+k(s.issueTrackerName)+". ",1),s.canMapRepos?(l(),j("span",De,"It is recommended to have your repos mapped.")):y("",!0)]),_:1}))]),_:1})}const Ue=S(Oe,[["render",Ee]]),Ve={components:{BaseCard:w},emits:["update:defaultTaskType"],props:{defaultTaskType:{type:String,required:!0},canEdit:{type:Boolean,default:!1}}},ze={class:"flex flex-column"};function $e(e,t,a,c,o,s){const m=r("BaseParagraph"),p=r("InputText"),T=r("BaseCard");return l(),_(T,{title:"Set Default Task Type"},{default:i(()=>[h("div",ze,[n(m,{size:"medium",bold:""},{default:i(()=>[u("Default Task Type")]),_:1}),n(m,{size:"small",color:"subdued",class:"mt-4px mb-12px"},{default:i(()=>[u(" Aikido will automatically create tasks "),h("strong",null,k(a.defaultTaskType),1)]),_:1}),n(p,{modelValue:a.defaultTaskType,"onUpdate:modelValue":t[0]||(t[0]=f=>e.$emit("update:defaultTaskType",f)),placeholder:"Task",disabled:!a.canEdit},null,8,["modelValue","disabled"])])]),_:1})}const qe=S(Ve,[["render",$e]]),We={components:{ProjectMappingCard:we,DefaultLabelCard:xe,AutoCreationCard:Ue,DefaultTaskTypeCard:qe},props:{apideckConsumerIdentifier:{type:[String,null],default:null},integrationId:{type:[Number,null],default:null}},expose:["onSaveClick","warnLeaveWindow"],data(){return{defaultTaskType:"",tagName:"",projectsIsLoading:!1,projectOptions:[],selectedProjectId:-1,autoCreateTasks:!1,selectedSeverity:"critical",selectedDailyRate:1,initialSettings:{},selectedAllAutoCreationIssueTypes:!0,selectedAutoCreationIssueTypes:[]}},async created(){await Promise.allSettled([this.fetchSettings(),this.handleFetchProjects()])},computed:{canChangeDefaultTaskType(){return["jira","jira-data-center","azure-devops"].includes(g.data.issueTracker)},canChangeTag(){return["github","jira","jira-data-center","linear","gitlab-server","gitlab"].includes(g.data.issueTracker)},canEdit(){return!!this.$groupUser.admin},settingsToSave(){const e={auto_create_severity:this.autoCreateTasks?this.selectedSeverity:"none",auto_create_project_id:this.selectedProjectId,auto_create_daily_rate:this.selectedDailyRate,default_task_type:this.defaultTaskType,tag_name:this.tagName,auto_create_issue_types:this.autoCreateIssueTypesStr};return this.apideckConsumerIdentifier&&(e.apideck_consumer_identifier=this.apideckConsumerIdentifier),e},autoCreateIssueTypesStr(){return this.selectedAllAutoCreationIssueTypes?"all":[...this.selectedAutoCreationIssueTypes].sort((e,t)=>e==t?0:e>t?1:-1).join(",")}},methods:{async fetchSettings(){const{auto_create_severity:e,default_task_type:t,tag_name:a,auto_create_project_id:c,auto_create_daily_rate:o,auto_create_issue_types:s}=await X(this.apideckConsumerIdentifier);e!="none"?(this.autoCreateTasks=!0,this.selectedSeverity=e):this.selectedSeverity="critical",c!=-1&&(this.selectedProjectId=c),this.selectedDailyRate=o,this.defaultTaskType=t,this.tagName=a,s=="all"?this.selectedAllAutoCreationIssueTypes=!0:(this.selectedAllAutoCreationIssueTypes=!1,this.selectedAutoCreationIssueTypes=s.split(",")),this.initialSettings={auto_create_severity:e,default_task_type:t,tag_name:a,auto_create_project_id:c,auto_create_daily_rate:o,auto_create_issue_types:this.autoCreateIssueTypesStr}},async handleFetchProjects(){this.projectsIsLoading=!0,this.projectOptions=await K(this.apideckConsumerIdentifier),this.selectedProjectId<=0&&this.projectOptions.length===1&&(this.selectedProjectId=this.projectOptions[0].id),this.projectsIsLoading=!1},async onProjectToRepoMapped(){await this.fetchSettings()},async onSaveClick(){await J(this.settingsToSave),this.$toast.success("Settings successfully saved"),this.initialSettings={...this.settingsToSave}},async warnLeaveWindow(){if(!this.shouldShowLeaveWarning())return;await Y({headerText:"Unsaved Changes",title:"You have unsaved changes.",description:"Changes have been made on the page but have not been saved yet. Please select how you want to continue.",buttonSubmitText:"Save Changes",buttonCancelText:"Do Not Save"})&&await this.onSaveClick()},shouldShowLeaveWarning(){for(const e in this.initialSettings){const t=this.initialSettings[e],a=this.settingsToSave[e];if(e=="auto_create_project_id"&&t<=0){const o=(this.projectOptions[0]||{}).id||-1;if(a==o)continue}if(t!=a)return!0}return!1}}},He={class:"flex flex-wrap align-start wide-tablet_flex-column gap-24px"},Fe={class:"w-calc-50p-24px wide-tablet_w-full flex flex-column gap-24px"};function Xe(e,t,a,c,o,s){const m=r("ProjectMappingCard"),p=r("AutoCreationCard"),T=r("DefaultLabelCard"),f=r("DefaultTaskTypeCard");return l(),j("div",He,[n(m,{selectedProjectId:o.selectedProjectId,"onUpdate:selectedProjectId":t[0]||(t[0]=d=>o.selectedProjectId=d),projectOptions:o.projectOptions,projectsIsLoading:o.projectsIsLoading,integrationId:a.integrationId,onProjectToRepoMapped:s.onProjectToRepoMapped,canEdit:s.canEdit},null,8,["selectedProjectId","projectOptions","projectsIsLoading","integrationId","onProjectToRepoMapped","canEdit"]),h("div",Fe,[n(p,{autoCreateTasks:o.autoCreateTasks,"onUpdate:autoCreateTasks":t[1]||(t[1]=d=>o.autoCreateTasks=d),selectedSeverity:o.selectedSeverity,"onUpdate:selectedSeverity":t[2]||(t[2]=d=>o.selectedSeverity=d),selectedDailyRate:o.selectedDailyRate,"onUpdate:selectedDailyRate":t[3]||(t[3]=d=>o.selectedDailyRate=d),selectedAllAutoCreationIssueTypes:o.selectedAllAutoCreationIssueTypes,"onUpdate:selectedAllAutoCreationIssueTypes":t[4]||(t[4]=d=>o.selectedAllAutoCreationIssueTypes=d),selectedAutoCreationIssueTypes:o.selectedAutoCreationIssueTypes,"onUpdate:selectedAutoCreationIssueTypes":t[5]||(t[5]=d=>o.selectedAutoCreationIssueTypes=d),canEdit:s.canEdit},null,8,["autoCreateTasks","selectedSeverity","selectedDailyRate","selectedAllAutoCreationIssueTypes","selectedAutoCreationIssueTypes","canEdit"]),s.canChangeTag?(l(),_(T,{key:0,tagName:o.tagName,"onUpdate:tagName":t[6]||(t[6]=d=>o.tagName=d),canEdit:s.canEdit},null,8,["tagName","canEdit"])):y("",!0),s.canChangeDefaultTaskType?(l(),_(f,{key:1,defaultTaskType:o.defaultTaskType,"onUpdate:defaultTaskType":t[7]||(t[7]=d=>o.defaultTaskType=d),canEdit:s.canEdit},null,8,["defaultTaskType","canEdit"])):y("",!0)])])}const Ke=S(We,[["render",Xe]]),Je=async e=>{g.data.activeIssueTrackerIntegrations==null&&await g.fetchIssueTrackerIntegrationStatus();const a=g.data.activeIssueTrackerIntegrations.find(c=>c.id==e);return a||null},Ye={components:{XPreloader:G,PageHeader:ae,TaskTrackerSettingsBox:Ke,BaseHeading:Z,BaseButton:Q,XTooltip:v},data(){return{loaded:!1,connectedIntegration:null,currentIntegration:null,isApideckVaultOpen:!1}},async created(){const{fill_cache:e}=this.$route.query;await this.handleFetchIntegrationStatus(),e==1&&await this.fillCache(),this.loaded=!0},async beforeRouteLeave(){this.connectedIntegration&&await this.$refs.taskTrackerSettings.warnLeaveWindow()},computed:{breadcrumbs(){return[{label:"Settings",href:"/settings"},{label:"Integrations",href:"/settings/integrations"},{label:this.connectedIntegrationLabel}]},connectedIntegrationLabel(){return this.currentIntegration?this.currentIntegration.name:this.$t(`TASK_TRACKER_${this.connectedIntegration}`)},integrationId(){return this.$route.params.integration_id?this.$route.params.integration_id:null},apideckConsumerIdentifier(){return this.currentIntegration?this.currentIntegration.apideck_consumer_identifier:null}},methods:{async handleFetchIntegrationStatus(){if(await g.fetchIssueTrackerIntegrationStatus(),this.integrationId){this.fillIntegrationInfoWhenMultipleIntegrationsAreAvailable();return}g.data.issueTracker?this.connectedIntegration=g.data.issueTracker:(this.connectedIntegration=null,this.$router.push("/settings/integrations"))},async handleManageIssueTrackerIntegration(){if(this.isApideckVaultOpen)return;this.isApideckVaultOpen=!0;const e=await ee({integration_id:this.integrationId}),t=e.apideck_consumer_identifier,a=this.connectedIntegration;re.open({token:e.session_token,unifiedApi:"issue-tracking",serviceId:a,showAttribution:!1,onClose:async()=>{this.isApideckVaultOpen=!1,await te(t),await this.handleFetchIntegrationStatus()}})},async onSave(){this.connectedIntegration&&await this.$refs.taskTrackerSettings.onSaveClick()},async fillCache(){await M({maxProjects:10,apideck_consumer_identifier:this.apideckConsumerIdentifier}),M({apideck_consumer_identifier:this.apideckConsumerIdentifier},{no_disable_buttons:!0})},async fillIntegrationInfoWhenMultipleIntegrationsAreAvailable(){const e=await Je(this.integrationId);e||(this.connectedIntegration=null,this.$router.push("/settings/integrations")),this.currentIntegration=e,this.connectedIntegration=e.service}}},Ge={class:"flex align-center gap-16px"},Ze=["src"],Qe={class:"flex gap-8px"},et=h("span",{class:"text--bold"},"Manage integration",-1),tt=h("span",{class:"text--bold"},"Save Settings",-1),at={class:"page-content"};function st(e,t,a,c,o,s){const m=r("XPreloader"),p=r("BaseHeading"),T=r("BaseIcon"),f=r("BaseButton"),d=r("XTooltip"),I=r("PageHeader"),P=r("TaskTrackerSettingsBox");return o.loaded?(l(),j(R,{key:1},[n(I,{breadcrumbs:s.breadcrumbs},{title:i(()=>[h("div",Ge,[h("img",{src:`/assets/icons/${this.connectedIntegration}.svg`,height:"40",class:"rounded-2px"},null,8,Ze),n(p,{as:"h1"},{default:i(()=>[u(k(s.connectedIntegrationLabel),1)]),_:1})])]),rightContent:i(()=>[h("div",Qe,[n(f,{size:"medium",variation:"plain",onClick:s.handleManageIssueTrackerIntegration},{default:i(()=>[n(T,{icon:"icon-settings",class:"h-14px"}),et]),_:1},8,["onClick"]),h("div",null,[o.connectedIntegration?(l(),_(f,{key:0,size:"medium",onClick:s.onSave,disabled:!e.$groupUser.admin},{default:i(()=>[tt]),_:1},8,["onClick","disabled"])):y("",!0),e.$groupUser.admin?y("",!0):(l(),_(d,{key:1},{default:i(()=>[u("Only admins are allowed to change the task tracker settings")]),_:1}))])])]),_:1},8,["breadcrumbs"]),h("div",at,[o.connectedIntegration?(l(),_(P,{key:0,apideckConsumerIdentifier:s.apideckConsumerIdentifier,integrationId:s.integrationId,ref:"taskTrackerSettings",class:"mb-16px"},null,8,["apideckConsumerIdentifier","integrationId"])):y("",!0)])],64)):(l(),_(m,{key:0,class:"supercenter",theme:"transparent"}))}const ft=S(Ye,[["render",st]]);export{ft as default};
