import{a as t,c,b as a,i as n,l as i}from"./index-13ff96f4.js";let o=c.get("locale")||"en";const u=()=>{t()!=="production"&&document.addEventListener("keydown",e=>{e.ctrlKey&&e.shiftKey&&e.code==="KeyL"&&g()})};function s(e){e=="none"&&(n.locale="en",n.global.setLocaleMessage("en",{})),i(e),o=e}function g(){const e=a.indexOf(o);s(a[e+1]||"none")}export{u as default};
