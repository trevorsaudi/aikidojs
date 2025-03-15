import{_ as h,au as m,N as p,A as f,r as l,q as S,k as v,w as C,n as b,o}from"./index-13ff96f4.js";import{I as g}from"./InputMultiSelect-21584437.js";import{j as _}from"./slack-a279c841.js";import{g as A}from"./getAuthorizeChannelUrl-cddf16ce.js";import"./ActionMenu-3e4470bf.js";import"./InputCheckbox-81cb3ca6.js";const k={components:{BaseConfirmModal:m,InputMultiSelect:g,BaseSelect:p},emits:["close","saved"],props:{channels:{type:Array,required:!0},services:{type:Array,required:!0},settings:{type:Array,required:!0},setting:{type:[Object,null],default:null}},data(){return{selectedServices:[],areAllServicesChecked:!1,selectedChannel:null}},mounted(){this.setting&&(this.selectedChannel=this.setting.instant_notification_channel,this.selectedServices=this.setting.services.map(e=>e.id))},computed:{availableServices(){return this.services.filter(e=>this.isServiceAvailable(e))},serviceOptions(){return this.availableServices.map(e=>({value:e.id,label:e.name}))},availableChannels(){return this.channels.filter(e=>this.isChannelAvailable(e))},channelOptions(){return[{title:"Channels",options:this.availableChannels.map(t=>({id:t.channel_id,title:t.channel_name}))},{title:"Connect channel",options:[{id:"add_channel",title:"Link a different channel"}]}]},servicesSelectError(){return!f.isPayingAndNoProTrial()&&this.selectedServices.length>1?"Free accounts can only add an alert for 1 app":""},isSubmitDisabled(){return this.servicesSelectError?!0:!this.selectedChannel||this.selectedServices.length==0}},methods:{async handleSubmit(){var t;const e=(t=this.setting)==null?void 0:t.instant_notification_channel;await _(this.selectedChannel,this.selectedServices,e),this.$toast.success("Alert successfully added"),this.$emit("saved")},isServiceAvailable(e){for(const t of this.settings){if(this.setting&&this.setting.instant_notification_channel==t.instant_notification_channel)continue;if(t.services.some(r=>r.id==e.id))return!1}return!0},isChannelAvailable(e){for(const t of this.settings){if(this.setting&&this.setting.instant_notification_channel==t.instant_notification_channel)return!0;if(t.instant_notification_channel==e.channel_id)return!1}return!0},handleUpdateSelectedChannel(e){if(e=="add_channel"){window.location=A("/runtime/alerts/slack");return}this.selectedChannel=e}}},y={class:"flex flex-column gap-24px"};function B(e,t,a,r,i,n){const c=l("InputMultiSelect"),d=l("BaseSelect"),u=l("BaseConfirmModal");return S(),v(u,{width:600,title:"Configure Slack Alerts",buttonSubmitText:"Save Alerts",disableSubmit:n.isSubmitDisabled,onSubmit:n.handleSubmit,onClose:t[2]||(t[2]=s=>e.$emit("close")),onSecondaryButtonClicked:t[3]||(t[3]=s=>e.$emit("close"))},{default:C(()=>[b("div",y,[o(c,{label:"Select apps you want to receive alerts from",width:"unset",options:n.serviceOptions,selectedItems:i.selectedServices,"onUpdate:selectedItems":t[0]||(t[0]=s=>i.selectedServices=s),enableSearch:!1,selectAllText:"All Apps",enableCheckAll:!0,isAllChecked:i.areAllServicesChecked,"onUpdate:isAllChecked":t[1]||(t[1]=s=>i.areAllServicesChecked=s),error:n.servicesSelectError},null,8,["options","selectedItems","isAllChecked","error"]),o(d,{label:"Channel for Instant Alerts",sublabel:"Select channel to receive instant alerts.",modelValue:i.selectedChannel,"onUpdate:modelValue":n.handleUpdateSelectedChannel,"option-groups":n.channelOptions,placeholder:"Select channel..."},null,8,["modelValue","onUpdate:modelValue","option-groups"])])]),_:1},8,["disableSubmit","onSubmit"])}const V=h(k,[["render",B]]);export{V as default};
