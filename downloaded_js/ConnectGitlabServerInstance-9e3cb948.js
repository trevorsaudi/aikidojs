import{v as E,l as N}from"./gitlabServer-f1adde30.js";import{_ as h,eB as O,eA as T,V as C,f as R,r as a,q as f,k as S,w as i,o as n,n as t,u as r,s as o}from"./index-13ff96f4.js";import{O as I}from"./OnboardingProgressIndicator-8fa4a42d.js";const k={props:{numberOfCompletedSteps:Number,numberOfSteps:Number,initialServerUrl:String,initialAccessToken:String},emits:["continue","back"],components:{OnboardingPage:O,OnboardingSection:T,OnboardingProgressIndicator:I,InputText:C,BaseButton:R},data(){return{serverUrl:this.initialServerUrl,accessToken:this.initialAccessToken}},computed:{inputIsValid(){const e=!!this.serverUrl&&this.serverUrl.trim()!=="",s=!!this.accessToken&&this.accessToken.trim()!=="";return e&&s}},methods:{handleBack(){this.$emit("back")},async handleContinue(){let e=this.serverUrl;this.serverUrl.endsWith("/")&&(e=this.serverUrl.slice(0,-1)),await E(e);const s={token:this.accessToken,url:e},l=await N(s);this.$emit("continue",{...s,groups:l})}}},B=t("img",{class:"",src:"https://cdn.aikido.dev/assets/logo-white.svg?v=2",width:"180"},null,-1),v={class:"onboarding__title mb-36px mt-64px text-white"},V={class:"onboarding__paragraph onboarding__paragraph--size-large text-carbon-20"},A={class:"onboarding__title text-primary-aik-140 mb-8px"},x={class:"onboarding__paragraph onboarding__paragraph--size-medium text-carbon-60"},L=t("br",null,null,-1),U=t("a",{class:"link",href:"https://help.aikido.dev/en/articles/7155491-how-to-connect-your-self-managed-gitlab-server-to-aikido",target:"_BLANK"},"read our guide",-1),G={class:"mt-32px gap-32px flex flex-column"},w=t("div",{class:"mb-16px mt-32px"},[t("div",{class:"onboarding__input field"},[t("label",null,[t("span",{class:"text--bold"},"Optional:"),o(" Allow "),t("a",{class:"text-surface-blue-100 text--semi-bold",href:"https://help.aikido.dev/doc/allowing-ip-addresses-for-code--container-scanning/docqMBL9MmdF",target:"_BLANK"}," Aikido's static IPs "),o(" in your firewall ")])])],-1),D={class:"flex mt-auto gap-16px justify-end"};function P(e,s,l,y,c,_){const g=a("OnboardingProgressIndicator"),p=a("OnboardingSection"),m=a("InputText"),u=a("BaseButton"),b=a("OnboardingPage");return f(),S(b,null,{default:i(()=>[n(p,{"align-content":"bottom",theme:"dark",class:"onboarding__section__content"},{default:i(()=>[B,t("h1",v,r(e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.TITLE")),1),t("p",V,r(e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.DESCRIPTION")),1),n(g,{"number-of-completed-steps":l.numberOfCompletedSteps,"number-of-steps":l.numberOfSteps},null,8,["number-of-completed-steps","number-of-steps"])]),_:1}),n(p,{"align-content":"top",theme:"light",class:"onboarding__section__content"},{default:i(()=>[t("h4",A,r(e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.CONNECT.TITLE")),1),t("p",x,[o(r(e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.CONNECT.DESCRIPTION"))+" ",1),L,o("To learn where you can find this information, "),U,o(". ")]),t("div",G,[n(m,{modelValue:c.serverUrl,"onUpdate:modelValue":s[0]||(s[0]=d=>c.serverUrl=d),name:"server_url",class:"onboarding__input",placeholder:"https://gitlab.acme.com",title:e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.CONNECT.SERVER_URL.LABEL")},null,8,["modelValue","title"]),n(m,{modelValue:c.accessToken,"onUpdate:modelValue":s[1]||(s[1]=d=>c.accessToken=d),name:"personal_access_token",class:"onboarding__input",placeholder:"accesstoken123bd",title:e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.CONNECT.ACCESS_TOKEN.LABEL")},null,8,["modelValue","title"])]),w,t("div",D,[n(u,{onClicked:s[2]||(s[2]=d=>e.$emit("back")),variation:"plain",size:"large"},{default:i(()=>[o(" Back ")]),_:1}),n(u,{onClicked:_.handleContinue,size:"large",disabled:!_.inputIsValid},{default:i(()=>[o(r(e.$t("ONBOARDING.GITLAB_SERVER.CONNECT_SERVER.CONNECT.CTA.CONTINUE")),1)]),_:1},8,["onClicked","disabled"])])]),_:1})]),_:1})}const q=h(k,[["render",P]]);export{q as C};
