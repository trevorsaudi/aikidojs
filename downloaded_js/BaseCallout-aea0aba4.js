import{_ as p,B,f as v,r as u,q as l,m as y,n,S as f,o as _,w as o,s as i,u as s,k as m,p as g}from"./index-13ff96f4.js";const w={props:{variation:{type:String,validator(a){return["danger","info"].includes(a)}},title:String,description:String,actionLabel:String||void 0,secondaryActionLabel:String||void 0,allowNewlinesInDescription:{type:Boolean,default:!1}},emits:["action","secondaryAction"],components:{BaseParagraph:B,BaseButton:v},computed:{variationClass(){switch(this.variation){case"info":return"callout--info";case"danger":default:return"callout--danger"}},icon(){switch(this.variation){case"info":return"icon-information";case"danger":default:return"icon-critical"}}}},x={class:"flex gap-16px flex-1 align center"},C={class:"flex flex-column gap-4px"},h={class:"flex align-center gap-8px"};function k(a,t,e,N,b,c){const r=u("BaseParagraph"),d=u("BaseButton");return l(),y("div",{class:f(["callout",[c.variationClass]])},[n("div",x,[n("i",{class:f(["icon icon-22px callout__icon",[c.icon]])},null,2),n("div",C,[_(r,{loose:!0,bold:!0,class:"callout__title"},{default:o(()=>[i(s(e.title),1)]),_:1}),_(r,{loose:!0,allowNewlines:e.allowNewlinesInDescription},{default:o(()=>[i(s(e.description),1)]),_:1},8,["allowNewlines"])])]),n("div",h,[e.secondaryActionLabel?(l(),m(d,{key:0,size:"small",variation:"tertiary",onClicked:t[0]||(t[0]=()=>a.$emit("secondaryAction")),style:{outline:"none"}},{default:o(()=>[i(s(e.secondaryActionLabel),1)]),_:1})):g("",!0),e.actionLabel?(l(),m(d,{key:1,size:"small",variation:"secondary",onClicked:t[1]||(t[1]=S=>a.$emit("action"))},{default:o(()=>[i(s(e.actionLabel),1)]),_:1})):g("",!0)])],2)}const A=p(w,[["render",k]]);export{A as B};
