import{_,f as x,ad as f,ag as y,r as m,q as e,k as o,m as n,n as t,u as i,s as r,w as h}from"./index-13ff96f4.js";const k={components:{BaseButton:x},props:{type:String},data(){return{teams:[],loaded:!1}},async mounted(){this.$teamContext||(this.loaded=!0),this.teams=await f(),this.loaded=!0},computed:{teamName(){if(this.$teamContext&&this.teams.length>0){const a=this.teams.find(l=>l.id==this.$teamContext);if(a)return a.name}return"Your team"},shouldShowResetTeamFilterOption(){return this.$teamContext}},methods:{goToFeed(){this.$router.push("/queue")},resetTeamFilter(){y.clearTeamId()}}},v={key:1,class:"h-full flex flex-column align-center justify-center text-center -mt-header-nav"},g=t("img",{src:"https://cdn.aikido.dev/assets/NoAccess.svg",height:"60"},null,-1),T={key:0,class:"text-28px text-primary-aik-140 my-24px leading-34px"},C=t("div",null,"Reset the team filter to see all issues.",-1),B={key:1,class:"text-28px text-primary-aik-140 my-24px leading-34px"};function F(a,l,c,N,u,s){const p=m("XPreloader"),d=m("BaseButton");return u.loaded?(e(),n("div",v,[g,s.shouldShowResetTeamFilterOption?(e(),n("h2",T,[t("div",null,[t("span",null,"This "+i(c.type),1),r(" is not a part of the active team.")]),C])):(e(),n("h2",B,[t("div",null,i(s.teamName)+" does not have permission to",1),t("div",null,"access this "+i(c.type),1)])),s.shouldShowResetTeamFilterOption?(e(),o(d,{key:2,onClicked:s.resetTeamFilter,variation:"tertiary"},{default:h(()=>[r("Reset Team Filter")]),_:1},8,["onClicked"])):(e(),o(d,{key:3,onClicked:s.goToFeed,variation:"tertiary"},{default:h(()=>[r("Go to Feed")]),_:1},8,["onClicked"]))])):(e(),o(p,{key:0,class:"supercenter",theme:"transparent"}))}const R=_(k,[["render",F]]);export{R as N};
