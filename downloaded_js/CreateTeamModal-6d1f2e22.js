import{_ as v,H as C,f as I,B as y,M as k,V as x,J as T,X as V,L as w,fR as M,an as E,r as t,q as i,k as u,w as e,o as s,s as n,p as P,n as S,m as p,F as U,t as A,u as N}from"./index-13ff96f4.js";const b={props:{userIds:{type:Array,default:()=>[]}},emits:["close"],components:{BaseHeading:C,BaseButton:I,BaseParagraph:y,BaseModal:k,InputText:x,AvatarImage:T,XPreloader:V},data(){return{isSaving:!1,name:"",nameInputErrors:null,users:[]}},watch:{name(a){!!a&&a!==""&&this.nameInputErrors!==null&&(this.nameInputErrors=null)}},async mounted(){await Promise.allSettled([this.loadUsers()]),this.isLoading=!1},computed:{formattedUsers(){return this.users.filter(a=>this.userIds.includes(a.id))}},methods:{closeModal(){this.$emit("close")},async loadUsers(){this.users=await w(!0)},async handleCreateTeam(){if(!this.name||this.name===""){this.nameInputErrors="You must provide a valid team name";return}this.isSaving=!0;try{const a=await M({name:this.name,users:this.userIds});E.emit("team.created",{teamId:a}),this.closeModal(),this.$router.push(`/settings/teams/${a}`)}finally{this.isSaving=!1}}}},z={class:"flex flex-column gap-12px"};function H(a,d,L,X,m,o){const l=t("BaseParagraph"),h=t("XPreloader"),f=t("BaseHeading"),_=t("AvatarImage"),g=t("InputText"),c=t("BaseButton"),B=t("BaseModal");return i(),u(B,{width:600,onClose:o.closeModal},{header:e(()=>[s(l,{color:"gray"},{default:e(()=>[n("Create a team")]),_:1})]),content:e(()=>[a.isLoading?(i(),u(h,{key:0,class:"supercenter",size:"medium"})):P("",!0),S("div",z,[s(f,{as:"h3"},{default:e(()=>[n("Create a new team")]),_:1}),s(l,{size:"medium"},{default:e(()=>[n(" A team is a collection of users that you can assign to handle and track vulnerabilities in specific parts of your codebase. ")]),_:1}),s(l,{size:"medium"},{default:e(()=>[n("The following users will be added to the team:")]),_:1}),(i(!0),p(U,null,A(o.formattedUsers,r=>(i(),p("div",{key:r.id,class:"flex align-center gap-12px"},[s(_,{class:"size-32 inline-block rounded-10",name:r.full_name,src:r.avatar},null,8,["name","src"]),s(l,null,{default:e(()=>[n(N(r.full_name),1)]),_:2},1024)]))),128)),s(g,{name:"team_name",title:"Enter a team name",required:"",placeholder:"SRE developers",modelValue:m.name,"onUpdate:modelValue":d[0]||(d[0]=r=>m.name=r),error:m.nameInputErrors},null,8,["modelValue","error"])])]),footer:e(()=>[s(c,{variation:"plain",onClicked:o.closeModal,class:"ml-auto"},{default:e(()=>[n("Cancel")]),_:1},8,["onClicked"]),s(c,{onClicked:o.handleCreateTeam},{default:e(()=>[n("Save")]),_:1},8,["onClicked"])]),_:1},8,["onClose"])}const F=v(b,[["render",H]]);export{F as default};
