import{_ as M,B as I,d as v,x as P,dn as T,A as F,r,m as B,n as i,o as e,w as t,k as y,p as w,F as L,q as h,s,ai as S,S as m,u}from"./index-13ff96f4.js";import{R as A}from"./RuleComplianceStatus-63f521b6.js";import{S as V}from"./SupportedLockFilesModal-4d6e0a8a.js";import{D as z,a as H}from"./DataTable-e31a825a.js";import{a as N,D as O}from"./DataTableCell-51c0104f.js";import{c as E}from"./ScmSecurity-27bd32ff.js";import"./RepositoryDetailCheckFileEntry-e151c779.js";import"./lock-files-cdbb050f.js";const W={components:{BaseParagraph:I,RuleComplianceStatus:A,SupportedLockFilesModal:V,DataTable:z,DataTableHeader:H,DataTableRow:N,DataTableCell:O,BasePill:v,BaseIcon:P},data(){return{rules:[],showSupportedLockFilesModal:!1}},inject:["repository"],async created(){this.rules=await T(this.repository.id)},computed:{showBanner(){var o,c;return((c=(o=this.rules.open_source_dependency_monitoring)==null?void 0:o.target_paths)==null?void 0:c.length)===0},scannedDependencyFiles(){var o;return((o=this.rules.open_source_dependency_monitoring)==null?void 0:o.target_paths)??[]},toRepoDetailSastPage(){return`/repositories/${this.repository.id}/sast`},toRepoDetailIacPage(){return`/repositories/${this.repository.id}/iac`},toRepoOverviewAccessControlPage(){return"/repositories/access_control"},toMalwareDetectionPage(){return"/reports/malware/software-supply-chain-attacks"},toRepoOverviewMobilePage(){return"/repositories/mobile"}},methods:{getRuleIssueCount(o){var c;return((c=this.rules[o])==null?void 0:c.issue_count)??0},getRuleComplianceStatus(o){var c;return((c=this.rules[o])==null?void 0:c.compliance_status)??"disabled"},handleShowSupportedLockFilesModal(){this.showSupportedLockFilesModal=!0},handleHideSupportedLockFilesModal(){this.showSupportedLockFilesModal=!1},getRuleComplianceStatusClass(o){var C;const c=((C=this.rules[o])==null?void 0:C.compliance_status)??"disabled";return c==="complying"?"text-color-success":c==="failing"?"text-color-danger bg-danger-10p":""},async handleOpenDomainConfigurationModal(){await this.$modal.show("RepositoryArchitectureConfigurationModal",{repository:this.repository})},redirectToCustomSastRuleAddPage(){if(!F.isPayingAndNoProTrial()&&!this.$featureflags.force_enable_custom_sast_rules){const o="Hi, I would like to enable Custom SAST Rules.";window.Intercom("showNewMessage",o);return}this.$router.push("/repositories/sast/custom/add")},shouldShowRow(o){var c;return["secrets"].includes(o)&&((c=this.$group)==null?void 0:c.scm_type)=="selfscan"?!1:o=="scm_security"?E():!0}}},j={class:"bg-white rounded-8px"},q=i("i",{class:"icon icon-box icon-14px text-carbon-60"},null,-1),Y=i("span",{class:"px-4px text--semi"},"View monitored lockfiles",-1),G=i("i",{class:"icon icon-secrets icon-14px text-carbon-60"},null,-1),J=i("i",{class:"icon icon-license icon-14px text-carbon-60"},null,-1),K=i("i",{class:"icon icon-code icon-14px text-carbon-60"},null,-1),Q=i("span",{class:"px-4px text--semi paragraph paragraph--small"},"Create custom rule",-1),U=i("span",{class:"px-4px text--semi"},"View SAST rules",-1),X=i("i",{class:"icon icon-IasC icon-14px text-carbon-60"},null,-1),Z=i("span",{class:"px-4px text--semi"},"View IaC rules",-1),$=i("i",{class:"icon icon-critical icon-14px text-carbon-60"},null,-1),ee=i("span",{class:"px-4px text--semi"},"View malware monitor",-1),te=i("span",{class:"px-4px text--semi"},"View mobile rules",-1),ae=i("span",{class:"px-4px text--semi"},"View access control rules",-1);function le(o,c,C,se,R,a){const f=r("DataTableHeader"),l=r("DataTableCell"),n=r("BaseParagraph"),_=r("BasePill"),d=r("RuleComplianceStatus"),p=r("DataTableRow"),g=r("router-link"),k=r("BaseIcon"),x=r("DataTable"),b=r("SupportedLockFilesModal");return h(),B(L,null,[i("div",j,[e(x,null,{header:t(()=>[e(f,{width:"48px",alignment:"center"},{default:t(()=>[s("Type")]),_:1}),e(f,{width:"auto"},{default:t(()=>[s("Checks")]),_:1}),e(f,{width:"auto"},{default:t(()=>[s("Description")]),_:1}),e(f,{width:"140px",alignment:"center"},{default:t(()=>[s("Compliance")]),_:1}),e(f,{width:"80px",alignment:"center"},{default:t(()=>[s("Issues")]),_:1})]),body:t(()=>[e(p,{clickable:"",href:`/repositories/${a.repository.id}?type=open_source`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[q]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Open source dependency monitoring")]),_:1}),i("a",{onClick:c[0]||(c[0]=S((...D)=>a.handleShowSupportedLockFilesModal&&a.handleShowSupportedLockFilesModal(...D),["stop","prevent"])),class:"ml-auto inline-flex link"},[e(_,{variation:"purple",size:"compact"},{default:t(()=>[Y]),_:1})])]),_:1}),e(l,null,{default:t(()=>[e(n,{loose:!0},{default:t(()=>[s(" We monitor 3rd party dependencies you are using in your app for any known vulnerabilities. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("open_source_dependency_monitoring")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("open_source_dependency_monitoring")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("open_source_dependency_monitoring")),1)]),_:1})]),_:1})]),_:1},8,["href"]),a.shouldShowRow("secrets")?(h(),y(p,{key:0,clickable:"",href:`/repositories/${a.repository.id}?type=leaked_secret`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[G]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Exposed secrets monitoring")]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{loose:!0},{default:t(()=>[s(" We are monitoring your application for any secrets which have been accidentally exposed in your source code, currently or at one point in the past. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("leaked_secrets_monitoring")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("leaked_secrets_monitoring")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("leaked_secrets_monitoring")),1)]),_:1})]),_:1})]),_:1},8,["href"])):w("",!0),e(p,{clickable:"",href:`/licenses?repositoryId=${a.repository.id}`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[J]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("License management")]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(n,{loose:!0},{default:t(()=>[s(" Aikido checks the licenses of all your dependencies to make sure you are legally permitted to make use of them. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("license_monitoring")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("license_monitoring")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("license_monitoring")),1)]),_:1})]),_:1})]),_:1},8,["href"]),e(p,{clickable:"",href:`/repositories/${a.repository.id}?type=sast`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[K]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("SAST")]),_:1}),e(_,{class:"ml-auto cursor-pointer h-20px",variation:"green",size:"compact",onClick:S(a.redirectToCustomSastRuleAddPage,["prevent"])},{default:t(()=>[Q]),_:1},8,["onClick"]),e(g,{class:"ml-8px link",to:a.toRepoDetailSastPage},{default:t(()=>[e(_,{variation:"purple",size:"compact"},{default:t(()=>[U]),_:1})]),_:1},8,["to"])]),_:1}),e(l,null,{default:t(()=>[e(n,{loose:!0},{default:t(()=>[s(" Static application security testing. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("sast_monitoring")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("sast_monitoring")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("sast_monitoring")),1)]),_:1})]),_:1})]),_:1},8,["href"]),e(p,{clickable:"",href:`/repositories/${a.repository.id}?type=iac`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[X]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("IaC")]),_:1}),e(g,{class:"ml-auto link",to:a.toRepoDetailIacPage},{default:t(()=>[e(_,{variation:"purple",size:"compact"},{default:t(()=>[Z]),_:1})]),_:1},8,["to"])]),_:1}),e(l,null,{default:t(()=>[e(n,{loose:!0},{default:t(()=>[s(" Infrastructure as Code testing. Check which files we can monitor in your application. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("iac_monitoring")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("iac_monitoring")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("iac_monitoring")),1)]),_:1})]),_:1})]),_:1},8,["href"]),e(p,{clickable:"",href:`/repositories/${a.repository.id}?type=malware`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[$]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Malware detection")]),_:1}),e(g,{class:"ml-auto link",to:a.toMalwareDetectionPage},{default:t(()=>[e(_,{variation:"purple",size:"compact"},{default:t(()=>[ee]),_:1})]),_:1},8,["to"])]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s(" Aikido checks for dependencies which are actually containing malware. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("malware")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("malware")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("malware")),1)]),_:1})]),_:1})]),_:1},8,["href"]),e(p,{clickable:"",href:`/repositories/${a.repository.id}?type=mobile`},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(k,{icon:"icon-mobile",color:"#737283"})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Mobile issues")]),_:1}),e(g,{class:"ml-auto link",to:a.toRepoOverviewMobilePage},{default:t(()=>[e(_,{variation:"purple",size:"compact"},{default:t(()=>[te]),_:1})]),_:1},8,["to"])]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s(" Mobile manifest file monitoring. ")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("mobile")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("mobile")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("mobile")),1)]),_:1})]),_:1})]),_:1},8,["href"]),a.shouldShowRow("scm_security")?(h(),y(p,{key:1,href:`/repositories/${a.repository.id}?type=scm_security`,clickable:""},{default:t(()=>[e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(k,{icon:"icon-git",color:"#737283"})]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s(u(o.$t("SCM_TYPE_"+o.$group.scm_type))+" Access Control issues",1)]),_:1}),e(g,{class:"ml-auto link",to:a.toRepoOverviewAccessControlPage},{default:t(()=>[e(_,{variation:"purple",size:"compact"},{default:t(()=>[ae]),_:1})]),_:1},8,["to"])]),_:1}),e(l,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Aikido makes sure access to source code is secure and changes are monitored.")]),_:1})]),_:1}),e(l,{class:m(a.getRuleComplianceStatusClass("scm_security")),spacing:"compact",alignment:"center"},{default:t(()=>[e(d,{status:a.getRuleComplianceStatus("scm_security")},null,8,["status"])]),_:1},8,["class"]),e(l,{spacing:"compact",alignment:"center"},{default:t(()=>[e(n,null,{default:t(()=>[s(u(a.getRuleIssueCount("scm_security")),1)]),_:1})]),_:1})]),_:1},8,["href"])):w("",!0)]),_:1})]),R.showSupportedLockFilesModal?(h(),y(b,{key:0,scannedLockfiles:a.scannedDependencyFiles,onClose:a.handleHideSupportedLockFilesModal},null,8,["scannedLockfiles","onClose"])):w("",!0)],64)}const me=M(W,[["render",le]]);export{me as default};
