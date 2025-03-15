import{_ as m,eM as d,eN as E,r as s,m as R,k as a,w as C,p as i,F as S,ar as T,q as r,o as f}from"./index-13ff96f4.js";import{c as u}from"./trycatch-83445d5b.js";import{C as O}from"./ConnectRepositories-7287147d.js";import{C as I}from"./ConnectEmail-cd6262d7.js";import{O as h}from"./OnboardingEmptyState-28bd43c0.js";import"./OnboardingProgressIndicator-8fa4a42d.js";import"./InputCheckbox-81cb3ca6.js";import"./focusModePreference-150f170e.js";const _={components:{ConnectRepositories:O,ConnectEmail:I,OnboardingEmptyState:h},data(){return{showConnectRepositoriesStep:!0,showConfirmEmailStep:!1,selectedRepositoryIds:[]}},methods:{handleSelectRepositories({selectedRepositoryIds:e}){this.selectedRepositoryIds=e,this.showConnectRepositoriesStep=!1,this.showConfirmEmailStep=!0},handleGoBack(){this.showConnectRepositoriesStep=!0,this.showConfirmEmailStep=!1},async handleComplete(){const e=await d(this.selectedRepositoryIds);E();for(const t of e)await u({statusCode:404,errMessage:"The provided scm_integration_repo_id does not belong to an active repository"},async()=>{await T(t,{no_disable_buttons:!0})})},async handleCreateSample(){go("/onboarding/demo")},handleUseDifferentAccount(){this.$router.replace("/onboarding/gitlab-server/connect-group")}}};function y(e,t,N,A,n,o){const c=s("OnboardingEmptyState"),p=s("ConnectRepositories"),l=s("ConnectEmail");return r(),R(S,null,[n.showConnectRepositoriesStep?(r(),a(p,{key:0,title:e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_REPOSITORIES.TITLE"),"number-of-steps":5,"number-of-completed-steps":3,"already-selected-repository-ids":n.selectedRepositoryIds,onContinue:o.handleSelectRepositories,onBack:t[0]||(t[0]=b=>e.$router.replace("/onboarding/gitlab-server/connect-group")),icon:"icon-Gitlab"},{emptyState:C(()=>[f(c,{title:e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_REPOSITORIES.EMPTY_STATE.TITLE"),description:e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_REPOSITORIES.EMPTY_STATE.DESCRIPTION"),"primary-cta":e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_REPOSITORIES.EMPTY_STATE.PRIMARY_CTA"),"secondary-cta":e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_REPOSITORIES.EMPTY_STATE.SECONDARY_CTA"),onUseSample:o.handleCreateSample,onUseDifferentAccount:o.handleUseDifferentAccount},null,8,["title","description","primary-cta","secondary-cta","onUseSample","onUseDifferentAccount"])]),_:1},8,["title","already-selected-repository-ids","onContinue"])):i("",!0),n.showConfirmEmailStep?(r(),a(l,{key:1,"number-of-steps":5,"number-of-completed-steps":4,onBack:this.handleGoBack,onContinue:o.handleComplete},null,8,["onBack","onContinue"])):i("",!0)],64)}const L=m(_,[["render",y]]);export{L as default};
