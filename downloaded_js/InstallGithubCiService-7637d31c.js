import{_ as m,M as B,B as x,f as C,H as v,bk as y,d as w,g as G,Z as I,r as a,q as M,k as P,w as t,o as e,n,s,a as g}from"./index-13ff96f4.js";import{B as S}from"./BaseLabel-a1c0ca00.js";import{B as R}from"./BaseRadioInput-a7ac3557.js";const H={emits:["close"],props:{show:Boolean,handleGithubChecksOptionImmediately:{type:Boolean,default:!1}},data(){return{kind:"github_checks",isSaving:!1}},components:{BaseModal:B,BaseParagraph:x,BaseButton:C,BaseHeading:v,BaseLabel:S,BaseBody:y,BaseRadioInput:R,BasePill:w,BaseLink:G},created(){this.handleGithubChecksOptionImmediately&&(this.handleInstallGithubChecks(),this.handleClose())},methods:{handleClose(){this.$emit("close")},handleSelectOption(i){this.kind=i},handleConfirm(){this.isSaving=!0,this.kind==="github_checks"?this.handleInstallGithubChecks():this.handleInstallGithubActions(),this.handleClose()},handleInstallGithubActions(){this.$router.push("/settings/integrations/continuous-integration")},handleInstallGithubChecks(){if(I.data.githubChecks)return this.$router.push("/settings/integrations/github/checks");let i="https://github.com/apps/dev-security-ci-checks/installations/new";g()==="staging"?i="https://github.com/apps/aikido-security-ci-staging/installations/new":g()==="production"&&(i="https://github.com/apps/aikido-pr-checks/installations/new"),window.location=i}}},L={class:"relative flex flex-column gap-12px"},A={for:"github_checks",class:"flex justify-between align-center py-16px px-8px gap-8px border-bottom-1 border-carbon-20 cursor-pointer"},O={class:"flex flex-column max-w-full gap-4px"},j={class:"flex gap-8px align-center"},N={for:"github_actions",class:"flex justify-between align-center py-16px px-8px gap-8px cursor-pointer"},V={class:"flex flex-column max-w-full gap-4px"};function q(i,l,T,Z,c,o){const _=a("BaseParagraph"),f=a("BaseHeading"),d=a("BaseBody"),b=a("BasePill"),h=a("BaseLink"),r=a("BaseLabel"),u=a("BaseRadioInput"),p=a("BaseButton"),k=a("BaseModal");return M(),P(k,{width:600,onClose:o.handleClose},{header:t(()=>[e(_)]),content:t(()=>[n("div",L,[e(f,{as:"h3"},{default:t(()=>[s("Choose PR Gating Method for GitHub")]),_:1}),n("label",A,[n("div",O,[n("div",j,[e(d,{loose:!0,bold:"",class:"flex align-center gap-8px"},{default:t(()=>[s("Manage PR gating configuration via Aikido dashboard")]),_:1}),e(b,{title:"Recommended",variation:"purple"})]),e(r,{color:"gray",class:"text-break-all"},{default:t(()=>[s(" Configure all checks in bulk without any code. Does not consume CI minutes. "),e(h,{class:"block text--normal text-inherit",target:"_blank",href:"https://help.aikido.dev/doc/github-ci-bulk-configuration-via-aikido/docZayPeps1j"},{default:t(()=>[s("More info")]),_:1})]),_:1})]),e(u,{name:"kind",id:"github_checks",value:"github_checks",checked:c.kind==="github_checks",onSelect:l[0]||(l[0]=()=>o.handleSelectOption("github_checks"))},null,8,["checked"])]),n("label",N,[n("div",V,[e(d,{loose:!0,bold:"",class:"flex align-center gap-8px"},{default:t(()=>[s("Manage PR gating via Github Actions in code")]),_:1}),e(r,{color:"gray",class:"text-break-all"},{default:t(()=>[s(" Set up each repository individually via code. Consumes CI minutes in GitHub. "),e(h,{class:"block text--normal text-inherit",target:"_blank",href:"https://help.aikido.dev/doc/github-actions-setting-up-gating-for-pull-requests/docKac1QyTrM"},{default:t(()=>[s("More info")]),_:1})]),_:1})]),e(u,{name:"kind",id:"github_actions",value:"github_actions",checked:c.kind==="github_actions",onSelect:l[1]||(l[1]=()=>o.handleSelectOption("github_actions"))},null,8,["checked"])])])]),footer:t(()=>[e(p,{onClicked:o.handleClose,variation:"tertiary",class:"ml-auto"},{default:t(()=>[s(" Cancel ")]),_:1},8,["onClicked"]),e(p,{onClicked:o.handleConfirm,"is-loading":c.isSaving},{default:t(()=>[s(" Continue ")]),_:1},8,["onClicked","is-loading"])]),_:1},8,["onClose"])}const U=m(H,[["render",q]]);export{U as default};
