import{_ as B,H as f,M as k,au as v,B as h,V as x,f as S,r as e,q as c,k as C,w as o,n as i,o as t,s as d,u as g,m as w,p as T,U as M,aQ as R}from"./index-13ff96f4.js";import{S as L}from"./SelectRepo-706cbd92.js";import{B as V}from"./BaseCodeBlock-cec75629.js";import{R as H}from"./RuntimeServiceTokenSection-7650cd85.js";import"./repoName-872812ed.js";import"./RuntimeCopyTokenModal-6b556039.js";const N={emits:["close"],components:{BaseCodeBlock:V,BaseHeading:f,BaseModal:k,SelectRepo:L,BaseConfirmModal:v,BaseParagraph:h,InputText:x,BaseButton:S,RuntimeServiceTokenSection:H},props:{service:{type:String,required:!0}},data(){return{name:this.service.name,tokenLoaded:!1}},methods:{close(){this.$emit("close")}}},y={class:"flex flex-column gap-12px w-full"},I={key:0,class:"text-center h-32px mt-32px"};function P(q,a,n,D,s,r){const l=e("BaseHeading"),m=e("XPreloader"),u=e("RuntimeServiceTokenSection"),p=e("BaseButton"),_=e("BaseModal");return c(),C(_,{width:600,onClose:r.close,allowBackgroundClose:!1},{header:o(()=>[i("div",y,[t(l,{as:"h3"},{default:o(()=>[d("Token For "+g(n.service.name),1)]),_:1})])]),content:o(()=>[s.tokenLoaded?T("",!0):(c(),w("div",I,[t(m,{size:"medium"})])),M(i("div",null,[t(u,{serviceId:n.service.id,onLoaded:a[0]||(a[0]=U=>s.tokenLoaded=!0)},null,8,["serviceId"])],512),[[R,s.tokenLoaded]])]),footer:o(()=>[t(p,{onClicked:r.close,class:"ml-auto"},{default:o(()=>[d("Ok")]),_:1},8,["onClicked"])]),_:1},8,["onClose"])}const b=B(N,[["render",P]]);export{b as default};
