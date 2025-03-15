import{_,au as x,B as g,N as h,gj as B,A as P,r as i,q as d,k as S,w as t,o as e,s as o,n,m as u,F as b,t as y,u as k}from"./index-13ff96f4.js";import{B as w}from"./BulletPoint-1404881f.js";import{B as A}from"./BulletPointList-6afdb6ae.js";const C={components:{BaseConfirmModal:x,BulletPoint:w,BulletPointList:A,BaseParagraph:g,BaseSelect:h},data(){return{originOptions:[{id:"eu",title:"EU-based IP Addresses"},{id:"us",title:"US-based IP Addresses"}],selectedOrigin:this.$featureflags.dast_american_infra?"us":"eu"}},computed:{ips(){return this.selectedOrigin=="us"?[{text:"98.85.190.95"},{text:"52.204.144.1"},{text:"44.209.56.130"},{text:"18.210.114.117"}]:[{text:"3.248.4.169"},{text:"54.76.211.68"},{text:"54.228.156.63"},{text:"54.247.155.164"}]}},methods:{handleClose(){this.$emit("close")},async handleSubmit(){await B(this.selectedOrigin),P.fetchProfile(),this.$emit("close")}}},I=n("hr",{class:"divider w-full my-16px"},null,-1),v={class:"text-14px text-primary-aik-140"},O={class:"my-16px"},V={class:"flex-column align-center gap-16px"};function T(M,c,N,D,l,r){const s=i("BaseParagraph"),m=i("BaseSelect"),p=i("BulletPoint"),f=i("BaseConfirmModal");return d(),S(f,{width:650,onClose:r.handleClose,onSubmit:r.handleSubmit,headerText:"Aikido Static IPs",title:"Allowing IP addresses for DAST & Surface monitoring",buttonSubmitText:"Apply Changes"},{default:t(()=>[e(s,{semiBold:"",class:"mb-8px"},{default:t(()=>[o("Origin of Attacking Servers")]),_:1}),e(m,{options:l.originOptions,modelValue:l.selectedOrigin,"onUpdate:modelValue":c[0]||(c[0]=a=>l.selectedOrigin=a)},null,8,["options","modelValue"]),I,e(s,{semiBold:"",class:"mb-8px"},{default:t(()=>[o("IP Information")]),_:1}),n("div",v,[e(s,null,{default:t(()=>[o(" Aikido uses dedicated IP addresses to perform scanning of your domains. To allow our addresses, add the following 4 IP addresses to your firewall settings: ")]),_:1}),n("div",O,[n("div",V,[(d(!0),u(b,null,y(r.ips,a=>(d(),u("div",{class:"flex align-center gap-4px",key:a.text},[e(p,{size:"tiny",color:"black",class:"mx-8px"}),e(s,{class:"ws-nowrap",color:"black"},{default:t(()=>[o(k(a.text),1)]),_:2},1024)]))),128))])]),e(s,null,{default:t(()=>[o("After this, rescan your domains to confirm connectivity.")]),_:1})])]),_:1},8,["onClose","onSubmit"])}const L=_(C,[["render",T]]);export{L as default};
