import{_ as A,eA as L,eB as P,V as N,g as T,f as U,B as z,as as V,K as j,r as l,q as a,k as g,w as r,o as u,n as o,u as m,s as d,m as c,p as _,aa as E,t as b,F as f,S as I}from"./index-13ff96f4.js";import{a as M,b as F}from"./OnboardingEmptyState-28bd43c0.js";import{O as D}from"./OnboardingProgressIndicator-8fa4a42d.js";const W=e=>[(()=>{if(!e.repo_path)return"";let p=e.repo_path.split("/");return p.shift(),p.join(" / ")})(),e.scm_repo_name].filter(Boolean).join(" / "),q={props:{title:String,numberOfSteps:Number,numberOfCompletedSteps:Number,alreadySelectedRepositoryIds:Array,icon:String,displayGroupReposByOwner:{type:Boolean,default:!1}},emits:["continue","back"],components:{OnboardingSection:L,OnboardingPage:P,OnboardingOptionList:M,OnboardingOptionListItem:F,OnboardingProgressIndicator:D,InputText:N,BaseLink:T,BaseButton:U,BaseParagraph:z},data(){return{repositories:[],selectedRepoIds:[],searchTerm:"",selectAllRepos:!1,isLoading:!0}},async mounted(){try{await V()}catch(t){console.log(t)}const e=await j(void 0,void 0,void 0,void 0,void 0,void 0,void 0,{dont_pass_team_context:!0});this.repositories=e.filter(t=>!t.externally_archived),this.alreadySelectedRepositoryIds&&this.alreadySelectedRepositoryIds.length>0?this.selectedRepoIds=this.alreadySelectedRepositoryIds:this.alreadyActivatedRepoIds.length===0&&this.repositories.length<=this.maxRepoCount?this.handleSelectAllRepos(!0):this.selectedRepoIds=[...this.alreadyActivatedRepoIds],this.isLoading=!1},computed:{alreadyActivatedRepoIds(){return this.repositories.filter(e=>e.active>0).map(e=>e.id)},repoOptions(){return this.repositories.map(e=>({id:e.id,title:this.formatRepoName(e),description:e.scm_repo_description,disabled:this.isOptionDisabled(e.id),owner:e.scm_repo_owner_name}))},filteredRepoOptions(){return this.repoOptions.slice().filter(e=>e.title.toLowerCase().includes(this.searchTerm.toLowerCase()))},reposByOwner(){let e={};for(const t of this.filteredRepoOptions)e[t.owner]=[...e[t.owner]??[],t];return e},repoCount(){return this.showEmptyState?null:`${this.filteredRepoOptions.length} total repos`},selectedRepoCount(){return`${this.selectedRepoIds.length} repos selected`},selectedAllRepos(){return this.selectedRepoIds.length===this.repositories.length},maxRepoCount(){return this.isTrialAccount?10:99999},hasReachedMaxRepoCount(){return this.selectedRepoIds.length>=this.maxRepoCount},canSelectAllRepos(){return this.repositories.length<=this.maxRepoCount},isTrialAccount(){return this.$group.status==="trial"},isNonPayingAccount(){var e,t;return((e=this.$group)==null?void 0:e.plan)==="free"||((t=this.$group)==null?void 0:t.plan)==="pro_trial"},errorMessage(){return this.showEmptyState?"You have no available repos":this.hasReachedMaxRepoCount?`For the free plan, Aikido allows ${this.maxRepoCount} connected repos.`:null},showEmptyState(){return!this.isLoading&&this.repositories.length===0}},methods:{isOptionDisabled(e){return this.alreadyActivatedRepoIds.includes(e)?!0:this.selectedRepoIds.includes(e)?!1:this.hasReachedMaxRepoCount},handleSelectAllRepos(e){if(this.selectAllRepos=e,e){this.selectedRepoIds=this.filteredRepoOptions.map(t=>t.id);return}this.selectedRepoIds=[...this.alreadyActivatedRepoIds]},handleSelectItem(e){this.selectedRepoIds.push(e)},handleUnselectItem(e){this.selectedRepoIds=this.selectedRepoIds.filter(t=>t!==e)},async handleContinue(){this.$emit("continue",{selectedRepositoryIds:this.selectedRepoIds})},formatRepoName(e){return W(e)},getLabel(e){return this.alreadyActivatedRepoIds.includes(e.id)?"Already Scanned":""}}},G=o("img",{class:"",src:"https://cdn.aikido.dev/assets/logo-white.svg?v=2",width:"180"},null,-1),K={class:"onboarding__title mb-36px mt-64px text-white"},Y={class:"onboarding__paragraph onboarding__paragraph--size-large text-carbon-20"},H={key:0},J=o("span",{class:"text-secondary-code-100"},"10 repos",-1),Q=o("span",{class:"text-secondary-code-100"},"2 clouds",-1),X=o("span",{class:"text-primary-aik-100 text--semi-bold"},"Upgrade plan for more.",-1),Z=o("h4",{class:"onboarding__title text-primary-aik-140 mb-8px"},"Select the repos you would like to enable and scan instantly.",-1),$=o("p",{class:"onboarding__paragraph onboarding__paragraph--size-medium text-carbon-60"},"We’ve gone ahead and selected all your repos, please deselect any repos that you do not want to have scanned.",-1),ee={class:"mb-16px mt-32px gap-16px flex align-center justify-between"},te={key:0,class:"flex align-center gap-8px text-12px text-carbon-60 py-8px cursor-pointer min-w-max-content flex-1 justify-end",for:"select-all-repos"},se=["checked","disabled"],ne={key:0,class:"flex w-full justify-center my-16px"},oe=o("p",{class:"onboarding__paragraph onboarding__paragraph--size-small text-gray-300"},"No matching results",-1),ae=[oe],ie={class:"flex flex-column gap-8px"},le={class:"flex flex-column gap-12px"},re={class:"flex justify-between mobile_flex-column mt-16px mb-16px"},de={key:0,class:"onboarding__paragraph onboarding__paragraph--size-small text-carbon-40"},ce={key:1,class:"onboarding__paragraph onboarding__paragraph--size-small text-surface-red-100"},pe={class:"flex mt-auto align-center justify-between gap-16px mobile_flex-column"},he={class:"flex ml-auto align-center gap-16px mobile_mx-auto"};function ue(e,t,p,me,h,s){const O=l("OnboardingProgressIndicator"),y=l("OnboardingSection"),S=l("InputText"),w=l("BaseParagraph"),R=l("OnboardingOptionListItem"),k=l("OnboardingOptionList"),C=l("BaseLink"),x=l("BaseButton"),B=l("OnboardingPage");return a(),g(B,null,{default:r(()=>[u(y,{"align-content":"bottom",theme:"dark",class:"onboarding__section__content"},{default:r(()=>[G,o("h1",K,m(p.title),1),o("p",Y,[d(" Please choose which repositories are the most critical for you to scan. "),s.isNonPayingAccount?(a(),c("span",H,[d("With the free plan, we will take care of up to "),J,d(" and "),Q,d(" for you. "),X])):_("",!0)]),u(O,{"number-of-completed-steps":p.numberOfCompletedSteps,"number-of-steps":p.numberOfSteps},null,8,["number-of-completed-steps","number-of-steps"])]),_:1}),u(y,{"align-content":"top",theme:"light",class:"onboarding__section__content",isLoading:h.isLoading,scrollable:""},{default:r(()=>[Z,$,o("div",ee,[u(S,{modelValue:h.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=n=>h.searchTerm=n),name:"search-repositories",class:"onboarding__input",placeholder:"Search",prefixIcon:"icon-search"},null,8,["modelValue"]),s.showEmptyState?_("",!0):(a(),c("label",te,[d(m(s.selectedRepoCount)+" ",1),o("input",{class:"cursor-pointer checkbox",ref:"input",id:"select-all-repos",type:"checkbox",checked:s.selectedAllRepos,onInput:t[1]||(t[1]=n=>s.handleSelectAllRepos(n.target.checked)),disabled:!s.canSelectAllRepos},null,40,se)]))]),u(k,{"show-empty-state":s.showEmptyState},{emptyState:r(()=>[E(e.$slots,"emptyState")]),optionList:r(()=>[s.filteredRepoOptions.length===0?(a(),c("div",ne,ae)):e.displaygroupReposByOwner?(a(!0),c(f,{key:1},b(s.reposByOwner,(n,v)=>(a(),c("div",ie,[u(w,null,{default:r(()=>[d(m(v),1)]),_:2},1024),o("div",le,[(a(!0),c(f,null,b(n,i=>(a(),g(R,{onSelect:s.handleSelectItem,onUnselect:s.handleUnselectItem,key:i.id,title:i.title,description:i.description,icon:p.icon,selected:h.selectedRepoIds.includes(i.id),"item-id":i.id,disabled:i.disabled,label:s.getLabel(i),class:I({"bg-white":!i.disabled,"border-primary-aik-140":!i.disabled&&h.selectedRepoIds.includes(i.id)})},null,8,["onSelect","onUnselect","title","description","icon","selected","item-id","disabled","label","class"]))),128))])]))),256)):(a(!0),c(f,{key:2},b(s.filteredRepoOptions,n=>(a(),g(R,{onSelect:s.handleSelectItem,onUnselect:s.handleUnselectItem,key:n.id,title:n.title,description:n.description,icon:p.icon,selected:h.selectedRepoIds.includes(n.id),"item-id":n.id,disabled:n.disabled,label:s.getLabel(n),class:I({"bg-white":!n.disabled,"border-primary-aik-100":!n.disabled&&h.selectedRepoIds.includes(n.id)})},null,8,["onSelect","onUnselect","title","description","icon","selected","item-id","disabled","label","class"]))),128))]),_:3},8,["show-empty-state"]),o("div",re,[s.repoCount?(a(),c("p",de,m(s.repoCount),1)):_("",!0),s.errorMessage?(a(),c("p",ce,m(s.errorMessage),1)):_("",!0)]),o("div",pe,[s.isTrialAccount?(a(),g(C,{key:0,href:"/settings/account?upgrade=true",class:"text--normal"},{default:r(()=>[d("Upgrade to secure all repos")]),_:1})):_("",!0),o("div",he,[u(x,{onClicked:t[2]||(t[2]=n=>e.$emit("back")),variation:"plain",size:"large"},{default:r(()=>[d(" Back ")]),_:1}),u(x,{onClicked:s.handleContinue,size:"large",disabled:h.selectedRepoIds.length===0},{default:r(()=>[d("Next, details")]),_:1},8,["onClicked","disabled"])])])]),_:3},8,["isLoading"])]),_:3})}const fe=A(q,[["render",ue]]);export{fe as C};
