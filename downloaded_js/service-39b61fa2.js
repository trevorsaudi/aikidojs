function e(n){if(n.agent){if(n.mode==="unknown")return n.agent.dry_mode?{label:"Detection Only",color:"orange",svgIcon:void 0}:{label:"Blocking",color:"green",svgIcon:"lightning"};if(n.mode==="monitor")return{label:"Detection Only",color:"orange",svgIcon:void 0};if(n.mode==="block")return{label:"Blocking",color:"green",svgIcon:"lightning"}}}function o(){return[{id:"production",title:"Production"},{id:"staging",title:"Staging"},{id:"development",title:"Development"}]}export{o as a,e as g};
