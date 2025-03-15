import{_ as m,B as f,e as p,a3 as a,Q as k,aL as T,r as s,q as h,k as D,w as e,o as t,s as l,u as c,n as I}from"./index-13ff96f4.js";import{a as x,D as b}from"./DataTableCell-51c0104f.js";import{A as g}from"./ActionMenu-3e4470bf.js";const v={props:{token:Object},components:{DataTableRow:x,DataTableCell:b,BaseParagraph:f,ActionMenu:g,BaseIconButton:p},computed:{user(){return this.token.user_full_name},timestamp(){return a.fromUnix(this.token.created_at).format(a.US_FRIENDLY_DATE_WITH_TIME)},lastUsedTimestamp(){return this.token.last_used_at<0?"-":a.fromUnix(this.token.last_used_at).format(a.US_FRIENDLY_DATE_WITH_TIME)},expiresAt(){return console.log(a.now().addYears(20)),this.token.expires_at>a.now().addYears(20).toUTC()?"-":a.fromUnix(this.token.expires_at).format(a.US_FRIENDLY_DATE_WITH_TIME)},actions(){return[{title:"Actions",items:[{label:"Revoke",onClick:this.revokeToken,destructive:!0}]}]}},methods:{async revokeToken(){await k({headerText:"Revoke credentials",description:"Do you want to revoke this token?",buttonSubmitText:"Yes, revoke"})&&(await T(this.token.id),this.$toast.success("Token successfully revoked"),this.$emit("revoked"))}}},w={class:"data-table__row__action-container"};function B(A,R,C,E,U,o){const r=s("BaseParagraph"),n=s("DataTableCell"),i=s("BaseIconButton"),_=s("ActionMenu"),u=s("DataTableRow");return h(),D(u,null,{default:e(()=>[t(n,null,{default:e(()=>[t(r,null,{default:e(()=>[l(c(o.user),1)]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(r,null,{default:e(()=>[l(c(o.timestamp),1)]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(r,null,{default:e(()=>[l(c(o.expiresAt),1)]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(r,null,{default:e(()=>[l(c(o.lastUsedTimestamp),1)]),_:1})]),_:1}),t(n,{spacing:"compact",alignment:"center"},{default:e(()=>[I("div",w,[t(_,{sections:o.actions,placement:"bottom-end"},{trigger:e(d=>[t(i,{icon:"icon-actions",onClicked:d.toggle,class:"data-table__row__action",ref:"trigger"},null,8,["onClicked"])]),_:1},8,["sections"])])]),_:1})]),_:1})}const S=m(v,[["render",B]]);export{S as I};
