import{_ as c,H as d,d as u,r as l,q as o,m,n as s,aa as t,o as b,w as h,s as _,u as f,k as p,p as g}from"./index-13ff96f4.js";const B={props:{disableBreadCrumbs:Boolean,breadcrumbs:Array,title:String,subtitle:String},components:{BaseHeading:d,BasePill:u},mounted(){this.disableBreadCrumbs!==!0&&Breadcrumbs.show({breadcrumbs:this.breadcrumbs})},watch:{breadcrumbs(){Breadcrumbs.show({breadcrumbs:this.breadcrumbs})}},unmounted(){this.disableBreadCrumbs!==!0&&Breadcrumbs.hide()},computed:{hasTitleSlot(){return!!this.$slots.title},hasSubTitleSlot(){return!!this.$slots.subTitle}}},x={class:"page-header"},v={class:"flex justify-between align-center w-full gap-16px mb-40px mobile_flex-column mobile_align-start"},S={class:"flex gap-24px align-center"},w={class:"flex flex-column gap-12px"},C={class:"flex flex-column gap-4px"},$={class:"flex w-full align-center"},k={class:"flex align-items ml-auto mb-8px"};function T(e,y,a,H,P,r){const i=l("BaseHeading"),n=l("BasePill");return o(),m("div",x,[s("div",v,[s("div",S,[t(e.$slots,"avatar"),s("div",w,[s("div",C,[b(i,{as:"h1"},{default:h(()=>[_(f(a.title),1)]),_:1}),t(e.$slots,"title")]),r.hasSubTitleSlot?t(e.$slots,"subTitle",{key:0}):a.subtitle?(o(),p(n,{key:1,title:a.subtitle,variation:"green"},null,8,["title"])):g("",!0)])]),t(e.$slots,"rightContent")]),s("div",$,[t(e.$slots,"tabs"),s("div",k,[t(e.$slots,"footerRightContent")])])])}const V=c(B,[["render",T]]);export{V as P};
