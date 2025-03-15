import{_ as F,M as T,B as M,H as P,f as S,r as n,q as a,k as h,w as t,o as i,s as l,u as d,n as g,m as _,t as C,F as u}from"./index-13ff96f4.js";import{R}from"./RepositoryDetailCheckFileEntry-e151c779.js";import{L}from"./lock-files-cdbb050f.js";const D=new RegExp(/requirements.*\.txt/,"i"),I={components:{BaseModal:T,BaseParagraph:M,RepositoryDetailCheckFileEntry:R,BaseHeading:P,BaseButton:S},props:{scannedLockfiles:{type:Array,required:!1}},computed:{files(){const e={};for(const s in L){let o=L[s];o=o.filter(f=>!(!this.$featureflags.enable_trivy_rootfs&&f==".gemspec")),e[s]=o}return e}},methods:{handleCloseModal(){this.$emit("close")},getMatchedFilesForLockfile(e){return this.scannedLockfiles.filter(s=>s.target_path.toLowerCase().endsWith(e.toLowerCase())||e=="Unmanaged C/C++ Dependency"&&s.target_path.endsWith("conanfile.txt")?!0:e!=="requirements.txt"?!1:D.test(s.target_path))},goToLicenses(e){this.$router.push(`/licenses?repositoryId=${e.repo_id}&depTargetPath=${e.id}`)},goToLicensesForC(e){this.$router.push(`/licenses?repositoryId=${e.repo_id}&language=C`)}}},O={class:"flex flex-column gap-12px"},w={class:"flex gap-4px flex-column"};function N(e,s,o,f,U,r){const p=n("BaseParagraph"),k=n("BaseHeading"),B=n("RepositoryDetailCheckFileEntry"),y=n("BaseButton"),E=n("BaseModal");return a(),h(E,{width:700,onClose:r.handleCloseModal},{header:t(()=>[i(p,{color:"gray"},{default:t(()=>[l(d(this.$t("SUPPORTED_LOCK_FILES_MODAL.TITLE")),1)]),_:1})]),content:t(()=>[g("div",O,[i(k,{as:"h3"},{default:t(()=>[l(d(this.$t("SUPPORTED_LOCK_FILES_MODAL.DESCRIPTION")),1)]),_:1}),g("div",w,[(a(!0),_(u,null,C(r.files,(x,m)=>(a(),_(u,{key:m},[i(p,{bold:!0,class:"mt-8px"},{default:t(()=>[l(d(m),1)]),_:2},1024),(a(!0),_(u,null,C(x,c=>(a(),_(u,{key:c},[o.scannedLockfiles?(a(),h(B,{key:0,fileExtension:c,matchedFiles:r.getMatchedFilesForLockfile(c),onTargetPathClicked:r.goToLicenses,onShowUsageClicked:r.goToLicensesForC},null,8,["fileExtension","matchedFiles","onTargetPathClicked","onShowUsageClicked"])):(a(),h(p,{key:1,class:"pl-8px",loose:!0},{default:t(()=>[l(d(c),1)]),_:2},1024))],64))),128))],64))),128))])])]),footer:t(()=>[i(y,{variation:"plain",onClicked:r.handleCloseModal,class:"ml-auto"},{default:t(()=>[l("Okay")]),_:1},8,["onClicked"])]),_:1},8,["onClose"])}const H=F(I,[["render",N]]);export{H as S};
