import{_ as E,B as N,a2 as L,d as x,an as _,b9 as b,dw as S,a3 as C,A as B,bg as z,bh as U,dx as G,c6 as F,r as n,k as l,m as h,o as d,w as c,n as u,F as O,q as i,ah as K,p as s,s as g,S as k,u as m}from"./index-13ff96f4.js";import{P as M}from"./PageHeader-46c38a32.js";import{X as V}from"./XTabs-d492da26.js";import{b as W}from"./dateFns-a344cb79.js";import{C as X}from"./CloudRepoIssuesOverview-62da5c2a.js";import{N as H}from"./NoAccess-b1a75b5c.js";import"./index-b87db690.js";import"./FeedActionsMenu-6d8ea3a2.js";import"./ActionMenu-3e4470bf.js";import"./FilterButton-bb5393a7.js";import"./InputMultiSelect-21584437.js";import"./InputCheckbox-81cb3ca6.js";import"./BaseRadioInput-a7ac3557.js";import"./DateRangePicker-89d26e9f.js";import"./BreakSlashes-925eef0e.js";import"./export-427c6d83.js";import"./QueueTable-de6aabd1.js";import"./DataTableCell-51c0104f.js";import"./IssueGroupSeverityColumn-7631c77a.js";import"./SidebarActionMenu-1bf6804b.js";import"./CreateAutoFixProgressFlow-8111d22c.js";import"./RadioButtonList-1d4cdaad.js";import"./EnableIntegrationModal-48b01f56.js";import"./focusModePreference-150f170e.js";import"./TableListHeader-e50d01d1.js";import"./DataTable-e31a825a.js";import"./BaseLabel-a1c0ca00.js";import"./AIText-891d4f7b.js";import"./UnignoreIssue-5dff8957.js";import"./CreateTicketModal-c14deeb1.js";import"./ManualInputSearchDropdown-6a7ece3e.js";import"./InputSearchDropdown-02988f6b.js";import"./repoName-872812ed.js";import"./taskTrackerNaming-55adac3e.js";import"./taskTrackerIcon-504ea566.js";import"./autofixable-c6560249.js";import"./autofixSastIssues-779ec5b4.js";import"./lock-files-cdbb050f.js";import"./BaseCodeBlock-cec75629.js";import"./string-814c5ffd.js";import"./ButtonMultiOption-12e505fb.js";import"./transform-c376ec3f.js";import"./linear-efb37b7f.js";import"./arc-12e4470a.js";import"./BaseForm-4c6fa06f.js";import"./BaseCard-471d3203.js";import"./AccordionContainer-09dc0ed4.js";import"./trycatch-83445d5b.js";import"./licenses-6ab38515.js";import"./BaseStatusLabel-0ccd2806.js";import"./DataTableSeverityIndicator-48ffb8dc.js";import"./IssueGroupTypeColumn-03f014b0.js";import"./BracesIcon-0a8568f4.js";import"./BoxIcon-9908469f.js";import"./StackedAvatars-4925baeb.js";import"./QueueSidebar-47492277.js";import"./QueueQuickFilter-70881bd4.js";import"./languages-12749071.js";import"./SlaEmptyState-a5a9e243.js";import"./OverviewEmptyState-c8440b9c.js";import"./GenericIllustration-4aca88e5.js";import"./slaEmptyState-e877fc05.js";import"./useInfiniteScroll-47c60c9e.js";const q=t=>t/1e9,Y=t=>t/1e6,j=t=>{const r=q(t);if(r>=1)return`${r.toFixed(2)}GB`;const a=Y(t);return`${Math.round(a)}MB`},J={components:{PageHeader:M,BaseParagraph:N,XTooltip:L,CloudRepoIssuesOverview:X,BasePill:x,NoAccess:H,XTabs:V},data(){return{loaded:!1,cloudRepo:null,meta:null,scanningProgress:null,hasNoAccess:!1,tab:this.$route.name}},created(){_.on(b,this.handleScanEvent),_.on(S,this.handleRepoDiscoveryEvent)},beforeUnmount(){_.off(b,this.handleScanEvent),_.off(S,this.handleRepoDiscoveryEvent)},async mounted(){await this.loadData(),this.loaded=!0},watch:{async cloudRepoId(){this.cloudRepoId&&await this.loadData()},"$route.name"(){this.tab=this.$route.name}},computed:{latestImageTag(){return this.cloudRepo.latest_tag?this.cloudRepo.latest_tag:this.latestImageDigest?"Untagged":null},latestImageDigest(){return this.cloudRepo.latest_digest?this.cloudRepo.latest_digest:null},cloudRepoName(){return this.cloudRepo?this.cloudRepo.name:""},scannerKind(){return this.cloudRepo.registry_source?"Aikido scanner":this.cloudRepo.cloud_type==="aws"?"AWS Inspector":this.cloudRepo.cloud_type==="gcp"?"GCP Container Analysis":null},cloudRepoId(){return this.$route.params.cloudRepoId},cloudRepoDistributionInfo(){return this.cloudRepo.distribution_info&&!this.cloudRepoDistributionInfo!==""?this.cloudRepo.distribution_info:null},subtitle(){return`${this.cloudRepo.open_issues} issues`},breadcrumbs(){var t,r,a;return this.$route.meta.from.name=="cloudDetailImages"?[{label:"Clouds",href:"/clouds"},{label:(t=this.cloudRepo)==null?void 0:t.cloud_name,href:`/clouds/${(r=this.cloudRepo)==null?void 0:r.cloud_id}`},{label:this.$t("CLOUD_IMAGES"),href:`/clouds/${(a=this.cloudRepo)==null?void 0:a.cloud_id}/images`},{label:this.cloudRepoName}]:[{label:"Containers",href:"/containers"},{label:this.cloudRepoName}]},isScanning(){return!!this.scanningProgress&&this.scanningProgress>0&&this.scanningProgress<100},lastScan(){var t;return((t=this.meta)==null?void 0:t.last_scanned_at)>0?`Last scan ${W(this.meta.last_scanned_at)} ago`:"No scans just yet"},nextScanTime(){return null},registryLocation(){return this.publicRegistryKind=="docker"||this.cloudRepo.registry_source==="docker-hub"?"DockerHub":this.publicRegistryKind=="aws-ecr"?"AWS ECR":this.publicRegistryKind=="github"?"Github":this.cloudRepo.cloud_name?this.cloudRepo.cloud_name:this.cloudRepo.registry_source=="acr"?"ACR":this.cloudRepo.registry_source=="github"?"Github":this.cloudRepo.registry_source=="gitlab"?"Gitlab":this.cloudRepo.registry_source=="gitlab-self"?"Gitlab Self-Managed":this.cloudRepo.registry_source=="digitalocean"?"DigitalOcean":this.cloudRepo.registry_source=="scaleway"?"Scaleway":this.cloudRepo.registry_source=="cloudsmith"?"Cloudsmith":this.cloudRepo.registry_source=="artifactory"?"JFrog Artifactory":this.cloudRepo.registry_source=="harbor"?"Harbor":this.cloudRepo.registry_source=="quay"?"Quay":this.cloudRepo.registry_source=="gcp-container-registry"?"GCP Container Registry":this.cloudRepo.registry_source=="gcp-artifact-registry"?"GCP Artifact Registry":this.cloudRepo.registry_source=="aws"?"AWS ECR":this.cloudRepo.registry_source=="sonatype-nexus"?"Sonatype Nexus":"self-reported SBOM"},isRegistryDigitalocean(){return this.cloudRepo.registry_source==="digitalocean"},registryLocationIcon(){return this.publicRegistryKind=="docker"||this.cloudRepo.registry_source==="docker-hub"?"icon-docker":this.publicRegistryKind=="aws-ecr"?"icon-location_aws":this.publicRegistryKind=="github"?"icon-github":this.cloudRepo.cloud_type==="aws"||this.cloudRepo.registry_source==="aws"?"icon-location_aws":this.cloudRepo.cloud_type==="gcp"||this.cloudRepo.registry_source==="gcp-container-registry"||this.cloudRepo.registry_source==="gcp-artifact-registry"?"icon-gcp":this.cloudRepo.registry_source==="gitlab"?"icon-Gitlab":this.cloudRepo.registry_source==="github"?"icon-github":this.cloudRepo.registry_source==="gitlab-self"?"icon-Gitlab":this.cloudRepo.cloud_type=="azure"||this.cloudRepo.registry_source=="acr"?"icon-azure":""},registryLocationIconSvg(){return this.cloudRepo.registry_source=="digitalocean"?"digitalocean-black":this.cloudRepo.registry_source=="scaleway"?"scaleway-black":this.cloudRepo.registry_source=="cloudsmith"?"cloudsmith-black":this.cloudRepo.registry_source=="artifactory"?"artifactory-black":this.cloudRepo.registry_source=="harbor"?"harbor-black":this.cloudRepo.registry_source=="quay"?"quay-black":!1},registryLocationUrl(){return this.cloudRepo.cloud_id?`/clouds/${this.cloudRepo.cloud_id}`:"/settings/container-image-registry"},cloudRepoTag(){return this.latestImageTag||this.cloudRepo.tag},hasCloudRepoTag(){return!!this.cloudRepoTag},registryName(){return this.cloudRepo.is_public?"Public":this.cloudRepo.cloud_id||!this.cloudRepo.registry_name?null:this.cloudRepo.registry_name},formattedContainerSize(){return!this.cloudRepo||this.cloudRepo.size_in_bytes<1?null:j(this.cloudRepo.size_in_bytes)},formattedLastPushedAt(){var t;return!((t=this.cloudRepo)!=null&&t.last_pushed_at)||this.cloudRepo.last_pushed_at<1?null:C.fromUnix(this.cloudRepo.last_pushed_at).format(C.US_FRIENDLY_DATE_WITH_TIME_AND_YEAR)},tabs(){return[{title:this.$t("ISSUES"),id:"containerDetail"},{title:this.$t("CLOUD_DETAIL.TABS.CHECKS"),id:"containerDetailChecks"}]},publicRegistryKind(){return this.cloudRepo.is_public?this.cloudRepo.name.startsWith("public.ecr.aws")?"aws-ecr":this.cloudRepo.name.startsWith("ghcr.io")?"github":"docker":null}},methods:{async handleStartScan(){if(this.scanningProgress=1,B.hasExpiredFullTrial()&&this.cloudRepo.last_scanned_at>0)return this.$modal.show("UpgradeAccountModal");this.cloudRepo.cloud_id>0?await z(this.cloudRepo.cloud_id,"scan"):await U({cloud_repo_id:this.cloudRepoId},{no_disable_buttons:!0}),this.$toast.success({title:this.$t("SUCCESS"),description:"Scan successfully started"}),Toast.success({title:this.$t("NOTIFICATIONS.SCAN_STARTED.TITLE"),description:"We started the container scan successfully, we'll report the issues back soon."})},async loadCloudRepoDetails(){try{this.cloudRepo=await G(this.cloudRepoId)}catch(t){if(t instanceof F.AxiosError&&t.response.status===498){this.hasNoAccess=!0;return}}this.meta={last_scanned_at:this.cloudRepo.last_scanned_at,next_scan_at:null}},async loadData(){await Promise.allSettled([this.loadCloudRepoDetails()])},async handleScanEvent(t){const{type:r,progress:a,cloudRepoId:y,failureType:o}=t;if(y==this.cloudRepoId)if(r==="progress_update"){if(this.scanningProgress>a)return;this.scanningProgress=a}else r==="completed"?(this.scanningProgress=100,_.emit("cloudRepoScanFinished"),this.loadData()):r==="failure"&&(delete this.scanningProgress,this.loadData(),r==="failure"&&o==="unauthorized"?this.$toast.error({title:"Unauthorized",description:"We were unable to access your repository. Please check your credentials."}):Toast.error("We were unable to complete the scan for this repository"))},handleRepoDiscoveryEvent(t){const{type:r,failureType:a}=t;r==="failure"&&a==="unauthorized"&&this.$toast.error({title:"Unauthorized",description:"We were unable to access your registry. Please check your credentials."})},async editTagFilter(){if(this.cloudRepo.is_public)return;(await this.$modal.show("EditCloudRepoTagFilterModal",{cloudRepoId:this.cloudRepoId,currentTag:this.cloudRepo.tag})).type=="saved"&&await this.loadData()}}},Q={key:0,class:"loading-overlay"},Z=u("div",{class:"shimmer shimmer--purple shimmer--rtl"},null,-1),$=[Z],ee={class:"flex gap-8px flex-wrap"},te={key:3},re={key:0},oe=u("br",null,null,-1),ie={key:1},se=u("br",null,null,-1),ae={key:2},ne=u("br",null,null,-1),le={key:3},ce=u("i",{class:"icon icon-calender icon-12px valign-middle ml-8px"},null,-1),ue={class:"page-content"};function de(t,r,a,y,o,e){const I=n("XPreloader"),T=n("NoAccess"),p=n("BasePill"),f=n("XTooltip"),w=n("RouterLink"),D=n("XTabs"),v=n("BaseParagraph"),P=n("PageHeader"),A=n("router-view");return o.loaded?o.hasNoAccess?(i(),l(T,{key:1,type:"container"})):(i(),h(O,{key:2},[d(P,{breadcrumbs:e.breadcrumbs,title:e.cloudRepoName},{rightContent:c(()=>[u("button",{class:k(["button-brand button--primary button--rounded button--normal button--border button--with-progress ws-nowrap",[e.isScanning&&"button--in-progress"]]),onClick:r[0]||(r[0]=(...R)=>e.handleStartScan&&e.handleStartScan(...R))},[e.isScanning?(i(),h("div",Q,[u("div",{class:"loading-bar",style:K({width:`${o.scanningProgress}%`})},$,4)])):s("",!0),g(" Start scan ")],2)]),subTitle:c(()=>[u("div",ee,[d(p,{title:e.subtitle,variation:"green"},null,8,["title"]),d(p,{class:"cursor-pointer",icon:"icon-settings",title:"Configure",variation:"gray-fill",onClick:r[1]||(r[1]=R=>t.$modal.show("RepositoryArchitectureConfigurationModal",{image:o.cloudRepo}))}),d(w,{to:e.registryLocationUrl},{default:c(()=>[d(p,{title:e.registryLocation,icon:e.registryLocationIcon,iconSvg:e.registryLocationIconSvg,variation:"gray-fill"},null,8,["title","icon","iconSvg"]),e.scannerKind?(i(),l(f,{key:0},{default:c(()=>[g(m(e.scannerKind),1)]),_:1})):s("",!0)]),_:1},8,["to"]),e.registryName?(i(),l(p,{key:0,title:e.registryName,variation:"gray-fill"},null,8,["title"])):s("",!0),o.cloudRepo.region&&o.cloudRepo.region!=="global"?(i(),l(p,{key:1,title:o.cloudRepo.region,variation:"gray-fill"},null,8,["title"])):s("",!0),e.cloudRepoDistributionInfo?(i(),l(p,{key:2,title:e.cloudRepoDistributionInfo,class:"text--capitalize",variation:"gray-fill"},null,8,["title"])):s("",!0),e.hasCloudRepoTag?(i(),h("div",te,[d(p,{title:e.cloudRepoTag,baseIcon:"icon-tag",class:k({"cursor-pointer":!o.cloudRepo.is_public}),variation:"gray-fill",onClick:e.editTagFilter},null,8,["title","class","onClick"]),o.cloudRepo.tag||e.latestImageDigest?(i(),l(f,{key:0},{default:c(()=>[o.cloudRepo.tag?(i(),h("span",re,[g(" Aikido will scan the latest image that matches this tag nightly: "+m(this.cloudRepo.tag),1),oe])):s("",!0),e.latestImageDigest?(i(),h("span",ie,[g("Last scanned digest: "+m(e.latestImageDigest),1),se])):s("",!0),e.formattedLastPushedAt?(i(),h("span",ae,[g("Pushed at: "+m(e.formattedLastPushedAt),1),ne])):s("",!0),e.formattedContainerSize?(i(),h("span",le,m(e.formattedContainerSize),1)):s("",!0)]),_:1})):s("",!0)])):s("",!0)])]),tabs:c(()=>[d(D,{tabs:e.tabs,modelValue:o.tab,"onUpdate:modelValue":r[2]||(r[2]=R=>o.tab=R),class:"page-tabs",useRouterLinks:!0},null,8,["tabs","modelValue"])]),footerRightContent:c(()=>[o.meta?(i(),l(v,{key:0,color:"subdued"},{default:c(()=>[g(m(e.lastScan)+" ",1),ce,e.nextScanTime?(i(),l(f,{key:0},{default:c(()=>[g(m(e.nextScanTime),1)]),_:1})):s("",!0)]),_:1})):s("",!0)]),_:1},8,["breadcrumbs","title"]),u("div",ue,[d(A,{cloudRepoId:e.cloudRepoId,cloudRepo:o.cloudRepo},null,8,["cloudRepoId","cloudRepo"])])],64)):(i(),l(I,{key:0,class:"supercenter",theme:"transparent"}))}const St=E(J,[["render",de]]);export{St as default};
