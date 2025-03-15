import{_ as c,N as m,z as p,g as h,H as f,au as _,B,V as C,f as S,gr as T,an as w,r as a,q as x,k as E,w as b,n as t,o as i}from"./index-13ff96f4.js";import{S as y}from"./SelectRepoSearchable-f2be202e.js";import{B as v}from"./BaseCodeBlock-cec75629.js";import{I}from"./InputFilterDropdown-674351d9.js";import"./repoName-872812ed.js";import"./InputSearchDropdown-02988f6b.js";import"./ActionMenu-3e4470bf.js";import"./FilterButton-bb5393a7.js";const V={emits:["close","runtime.service.added"],components:{InputFilterDropdown:I,BaseSelect:m,InputSwitch:p,BaseLink:h,BaseCodeBlock:v,BaseHeading:f,BaseConfirmModal:_,SelectRepoSearchable:y,BaseParagraph:B,InputText:C,BaseButton:S},props:{serviceId:{type:Number,required:!0}},data(){return{method:"*",route:"/api/*"}},computed:{methodOptions(){return[{id:"*",title:"ANY"},{id:"GET",title:"GET"},{id:"POST",title:"POST"},{id:"PUT",title:"PUT"},{id:"DELETE",title:"DELETE"},{id:"PATCH",title:"PATCH"}]}},methods:{async onSubmit(){await this.createEndpoint(),this.$emit("close")},async createEndpoint(){await T({method:this.method,route:this.route,serviceId:this.serviceId}),w.emit("runtime.endpoint.updated")},onClose(){this.$emit("close")},selectMethod(s){this.method=s}}},g={class:"flex flex-column gap-24px w-full"},k={class:"flex gap-16px justify-between"},M={class:"field w-25p"},P=t("label",null,"Method",-1);function A(s,n,N,R,o,e){const d=a("BaseSelect"),l=a("InputText"),r=a("BaseConfirmModal");return x(),E(r,{width:800,title:"Add Route",description:"Zen automatically discovers routes. If you want to add a route manually, you can do so here. You can leverage rate limiting to protect your routes from abuse.",buttonSubmitText:"Add Route",onSubmit:e.onSubmit,onSecondaryButtonClicked:e.onClose,onClose:e.onClose,allowBackgroundClose:!1},{default:b(()=>[t("div",g,[t("div",k,[t("div",M,[P,i(d,{options:e.methodOptions,modelValue:o.method,"onUpdate:modelValue":e.selectMethod},null,8,["options","modelValue","onUpdate:modelValue"])]),i(l,{name:"route",title:"Route",placeholder:"route",required:!0,modelValue:o.route,"onUpdate:modelValue":n[0]||(n[0]=u=>o.route=u),class:"w-75p"},null,8,["modelValue"])])])]),_:1},8,["onSubmit","onSecondaryButtonClicked","onClose"])}const j=c(V,[["render",A]]);export{j as default};
