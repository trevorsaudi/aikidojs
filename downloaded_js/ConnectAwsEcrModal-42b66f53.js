import{_ as B,M as x,B as g,f as k,H as C,bk as w,d as b,r as s,q as y,k as v,w as e,o as a,s as n,n as o}from"./index-13ff96f4.js";import{B as S}from"./BaseLabel-a1c0ca00.js";import{B as A}from"./BaseRadioInput-a7ac3557.js";const P={emits:["close"],props:{show:Boolean},data(){return{scanner:"aikido_scanner"}},components:{BaseModal:x,BaseParagraph:g,BaseButton:k,BaseHeading:C,BaseLabel:S,BaseBody:w,BaseRadioInput:A,BasePill:b},methods:{handleClose(){this.$emit("close")},handleSelectOption(c){this.scanner=c},handleConfirm(){this.scanner==="aikido_scanner"?this.$router.push("/settings/container-image-registry/add-aws-ecr"):this.$router.push("/clouds/add/aws"),this.handleClose()}}},R={class:"relative flex flex-column gap-12px"},I={for:"aikido_scanner",class:"flex justify-between align-center py-16px px-8px gap-8px border-bottom-1 border-carbon-20 cursor-pointer"},M={class:"flex flex-column max-w-full gap-4px"},E={class:"flex gap-8px align-center"},H={for:"aws_scanner",class:"flex justify-between align-center py-16px px-8px gap-8px cursor-pointer"},L={class:"flex flex-column max-w-full gap-4px"};function N(c,l,O,V,r,t){const i=s("BaseParagraph"),f=s("BaseHeading"),d=s("BaseBody"),m=s("BasePill"),p=s("BaseLabel"),_=s("BaseRadioInput"),u=s("BaseButton"),h=s("BaseModal");return y(),v(h,{width:600,onClose:t.handleClose},{header:e(()=>[a(i,null,{default:e(()=>[n("Connect AWS ECR")]),_:1})]),content:e(()=>[o("div",R,[a(f,{as:"h3"},{default:e(()=>[n("Select your scanner for ECR")]),_:1}),a(i,{size:"medium"},{default:e(()=>[n(" Aikido allows to select which code scanner you want to use to scan your ECR images and your lambda code. ")]),_:1}),o("label",I,[o("div",M,[o("div",E,[a(d,{loose:!0,bold:"",class:"flex align-center gap-8px"},{default:e(()=>[n(" Aikido scanner ")]),_:1}),a(m,{title:"Recommended",variation:"purple"})]),a(p,{color:"gray",class:"text-break-all"},{default:e(()=>[n("Unlimited scanning with every Aikido paid subscription.")]),_:1})]),a(_,{name:"scanner",id:"aikido_scanner",value:"aikido_scanner",checked:r.scanner==="aikido_scanner",onSelect:l[0]||(l[0]=()=>t.handleSelectOption("aikido_scanner"))},null,8,["checked"])]),o("label",H,[o("div",L,[a(d,{loose:!0,bold:"",class:"flex align-center gap-8px"},{default:e(()=>[n(" AWS Inspector ")]),_:1}),a(p,{color:"gray",class:"text-break-all"},{default:e(()=>[n("Pay-per-push: AWS Inspector incurs a fee for each deployment.")]),_:1})]),a(_,{name:"scanner",id:"aws_scanner",value:"aws_scanner",checked:r.scanner==="aws_scanner",onSelect:l[1]||(l[1]=()=>t.handleSelectOption("aws_scanner"))},null,8,["checked"])])])]),footer:e(()=>[a(u,{onClicked:t.handleClose,variation:"tertiary",class:"ml-auto"},{default:e(()=>[n(" Cancel ")]),_:1},8,["onClicked"]),a(u,{onClicked:t.handleConfirm},{default:e(()=>[n(" Confirm ")]),_:1},8,["onClicked"])]),_:1},8,["onClose"])}const z=B(P,[["render",N]]);export{z as default};
