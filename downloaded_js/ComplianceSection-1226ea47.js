import{_ as T,q as n,m as c,n as _,aa as E,p as f,B as N,f as $,r as i,k as m,w as t,o as a,s as u,F as S,t as v,S as w,u as d,H as j,dv as F,d as G,a2 as H}from"./index-13ff96f4.js";import{A as U}from"./AccordionContainer-09dc0ed4.js";import{D as V,a as X}from"./DataTable-e31a825a.js";import{a as z,D as W}from"./DataTableCell-51c0104f.js";import{B as q}from"./BracesIcon-0a8568f4.js";const J={},K={class:"accordion__item"},Q={class:"accordion__item__title"},Y={key:0,class:"accordion__item__body"},Z={class:"accordion__item__body-container"};function ee(e,s){return n(),c("div",K,[_("div",Q,[E(e.$slots,"title")]),e.$slots.body?(n(),c("div",Y,[_("div",Z,[E(e.$slots,"body")])])):f("",!0)])}const te=T(J,[["render",ee]]),se={props:{topic:Object,code:String},components:{AccordionItem:te,BaseParagraph:N,DataTable:V,DataTableHeader:X,DataTableRow:z,DataTableCell:W,BracesIcon:q,BaseButton:$},inject:["filter_team_id"],computed:{complianceCount(){return 0},resultsGroupedByMeasure(){const e={};for(const[s,l]of Object.entries(this.topic.results))e[l.measure_title]={...e[l.measure_title]??{},[s]:l};return e}},methods:{getStatusColor(e){return e==="complying"?"success":e==="failing"?"danger":"dark-gray"},getLinkForResult(e){if(e.status!=="failing")return null;if(e.rule_type==="open_issue_rule"&&e.measure==="no_severe_license_issues")return"/licenses";if(e.measure==="has_enabled_slas")return"/settings/sla";if(e.measure==="is_gdpr_compliant")return"/reports/gdpr";const s=new URLSearchParams;if(e.rule_type==="open_issue_rule"&&e.measure==="no_issues_outside_of_sla"&&s.append("filter","out_of_sla"),e.rule_type==="open_issue_rule"&&(e.measure==="no_critical_open_source_issues"||e.measure==="no_open_oss_issues")&&(s.append("issue_type_filter","open_source"),s.append("filter","critical")),e.rule_type==="open_issue_rule"&&e.measure==="no_open_dast_issues"&&(s.append("issue_type_filter","surface_monitoring"),s.append("filter","critical")),e.rule_type==="open_issue_rule"&&e.measure==="no_open_iac_issues"&&(s.append("issue_type_filter","iac"),s.append("filter","critical")),e.rule_type==="open_issue_rule"&&e.measure==="no_exposed_secrets"&&s.append("issue_type_filter","leaked_secret"),["sast_rule","cloud_rule"].includes(e.rule_type)){const l=e.affected_issue_ids??[];s.append("issue_id_filter",l)}return this.filter_team_id>0&&s.append("team_id_filter",this.filter_team_id),s.toString()===""?null:`/queue?${s.toString()}`},getLinkTextForResult(e){return e.measure==="has_enabled_slas"?this.$t("REPORTING.COMPLIANCE.ENABLE_SLAS"):e.measure==="is_gdpr_compliant"?this.$t("REPORTING.COMPLIANCE.SEE_GDPR_REPORT"):this.$t("REPORTING.COMPLIANCE.SEE_OPEN_ISSUES")},getHelpLinkForResult(e){return e.measure=="configured_exposure_for_repos"?"https://help.aikido.dev/doc/how-to-improve-risk-scoring-for-your-repositories/docWIiW4gjW2":null}}},ne={key:0,class:"flex align-center gap-8px"},ae={class:"flex flex-column gap-12px"},oe={key:0,class:"flex align-center justify-center"},ie=_("i",{class:"icon icon-cloud text-carbon-60"},null,-1),re=[ie],ce={key:1,class:"flex align-center justify-center"},le=_("i",{class:"icon icon-settings text-carbon-60"},null,-1),_e=[le],ue={key:2,class:"flex align-center justify-center"},de=_("i",{class:"icon icon-group text-carbon-60"},null,-1),pe=[de],fe={key:3,class:"flex align-center justify-center"},me={key:0,class:"icon icon-IasC text-carbon-60"},ge={key:4,class:"flex align-center justify-center"},he=_("i",{class:"icon icon-recent text-carbon-60"},null,-1),ye=[he],Ie={class:"flex flex-1 gap-8px align-center justify-between"},xe=["href"];function ke(e,s,l,y,I,r){const p=i("BaseParagraph"),x=i("BaseButton"),g=i("DataTableHeader"),k=i("BracesIcon"),h=i("DataTableCell"),b=i("RouterLink"),B=i("DataTableRow"),C=i("DataTable"),L=i("AccordionItem");return n(),m(L,null,{title:t(()=>[l.topic.is_blurred?(n(),c("div",ne,[a(p,null,{default:t(()=>[u("This section is available on any paid plan.")]),_:1}),a(x,{class:"inline-block",as:"outside-link",target:"_blank",href:"/settings/account?upgrade=true",size:"xs",semiBold:""},{default:t(()=>[u("Upgrade now")]),_:1})])):f("",!0)]),body:t(()=>[_("div",ae,[(n(!0),c(S,null,v(r.resultsGroupedByMeasure,(A,D,M)=>(n(),m(C,{class:w({"blur user-select-none":l.topic.is_blurred}),key:M},{header:t(()=>[a(g,{width:"48px",spacing:"compact",alignment:"center"},{default:t(()=>[u("Type")]),_:1}),a(g,{width:"auto"},{default:t(()=>[u(d(D),1)]),_:2},1024),a(g,{width:"120px",alignment:"center"},{default:t(()=>[u("Status")]),_:1})]),body:t(()=>[(n(!0),c(S,null,v(A,(o,R)=>(n(),m(B,{key:R},{default:t(()=>[a(h,{spacing:"compact",alignment:"center"},{default:t(()=>{var O,P;return[o.rule_type==="cloud_rule"?(n(),c("div",oe,re)):o.rule_type==="settings_rule"?(n(),c("div",ce,_e)):o.rule_type==="dast_rule"?(n(),c("div",ue,pe)):o.rule_type==="sast_rule"?(n(),c("div",fe,[((O=o.metadata)==null?void 0:O.programming_language)==="IAC"?(n(),c("i",me)):(n(),m(k,{key:1,text:(P=o.metadata)==null?void 0:P.programming_language},null,8,["text"]))])):(n(),c("div",ge,ye))]}),_:2},1024),a(h,null,{default:t(()=>[_("div",Ie,[a(p,null,{default:t(()=>[u(d(o.title??R),1)]),_:2},1024),r.getLinkForResult(o)?(n(),m(b,{key:0,to:r.getLinkForResult(o),target:"_blank",class:"link text--normal print_hidden"},{default:t(()=>[u(d(r.getLinkTextForResult(o)),1)]),_:2},1032,["to"])):f("",!0),r.getHelpLinkForResult(o)?(n(),c("a",{key:1,href:r.getHelpLinkForResult(o),target:"_blank",class:"link text--normal"}," More Information ",8,xe)):f("",!0)])]),_:2},1024),a(h,{alignment:"center"},{default:t(()=>[a(p,{color:r.getStatusColor(o==null?void 0:o.status)},{default:t(()=>[u(d(e.$t(`REPORTING.COMPLIANCE.STATUS.${(o==null?void 0:o.status)??"unknown"}`)),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["class"]))),128))])]),_:1})}const be=T(se,[["render",ke]]),Be={props:{code:String,section:Object},components:{Accordion:U,BaseHeading:j,ProgressBar:F,ComplianceTopic:be,BaseParagraph:N,BasePill:G,XTooltip:H},computed:{compliancePercentage(){const e=Object.values(this.section.results)??[],s=e.length??0,l=e.reduce((y,I)=>I.status==="complying"?y+=1:y,0);return s===0?0:Math.round(l/s*100)},formattedIssue(){const e=this.section.issue;if(e)return this.formatIssue(e)},hasMultipleIssues(){return!!this.section.issues},formattedPrimaryIssue(){return this.hasMultipleIssues?this.formatIssue(this.section.issues[0]):null},otherIssueCount(){return this.hasMultipleIssues?this.section.issues.length-1:null},formattedOtherIssues(){if(!this.hasMultipleIssues)return null;let e=[...this.section.issues];return e.shift(),e.map(s=>this.formatIssue(s)).join(`
`)}},methods:{formatIssue(e){if(e==="no_sla_configured")return this.$t("REPORTING.COMPLIANCE.ISSUE.NO_SLA_CONFIGURED");if(e==="no_clouds_monitored")return this.$t("REPORTING.COMPLIANCE.ISSUE.NO_CLOUDS_MONITORED");if(e==="no_domains_monitored")return this.$t("REPORTING.COMPLIANCE.ISSUE.NO_DOMAINS_MONITORED")}}},Ce={key:0,class:"flex align-center gap-8px"},Te={class:"flex flex-1 justify-between align-center"},Re={class:"flex flex-1 align-center gap-12px"},Oe={class:"text-16px"},Pe={key:0,class:"flex align-center gap-4px"},Ee=_("i",{class:"icon icon-critical icon-14px text-surface-orange-120"},null,-1),Se={key:1,class:"flex align-center gap-4px"},ve=_("i",{class:"icon icon-critical icon-14px text-surface-orange-120"},null,-1),Ne={key:0},Le={class:"flex align-center gap-12px"};function Ae(e,s,l,y,I,r){const p=i("BaseParagraph"),x=i("BaseButton"),g=i("BaseHeading"),k=i("BasePill"),h=i("XTooltip"),b=i("ProgressBar"),B=i("ComplianceTopic"),C=i("Accordion");return n(),m(C,null,{title:t(()=>[e.topic.is_blurred?(n(),c("div",Ce,[a(p,null,{default:t(()=>[u("This section is available on any paid plan.")]),_:1}),a(x,{class:"inline-block",as:"outside-link",target:"_blank",href:"/settings/account?upgrade=true",size:"xs",semiBold:""},{default:t(()=>[u("Upgrade now")]),_:1})])):f("",!0)]),header:t(()=>[_("div",Te,[_("div",Re,[a(g,{as:"h4"},{default:t(()=>[_("span",Oe,d(l.section.title),1)]),_:1}),r.formattedIssue?(n(),c("div",Pe,[Ee,a(p,{color:"warning"},{default:t(()=>[u(d(r.formattedIssue),1)]),_:1})])):r.hasMultipleIssues?(n(),c("div",Se,[ve,a(p,{color:"warning"},{default:t(()=>[u(d(r.formattedPrimaryIssue),1)]),_:1}),r.otherIssueCount>0?(n(),c("div",Ne,[a(k,{title:e.$t("X_OTHERS",r.otherIssueCount),variation:"orange",class:"ml-8px"},null,8,["title"]),a(h,null,{default:t(()=>[u(d(r.formattedOtherIssues),1)]),_:1})])):f("",!0)])):f("",!0)]),_("div",Le,[a(b,{progress:r.compliancePercentage},null,8,["progress"])])])]),body:t(()=>[a(B,{topic:l.section,code:l.code},null,8,["topic","code"])]),_:1})}const Fe=T(Be,[["render",Ae]]);export{te as A,Fe as C};
