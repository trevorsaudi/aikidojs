import{a0 as e}from"./index-13ff96f4.js";const r=async(a,t,s)=>{await e.post("/api/scm_integrations/private_package_registry",{url:a,token:t,type:s})},g=async(a,t,s)=>{await e.put(`/api/scm_integrations/private_package_registry/${a}`,{url:t,token:s})},c=async a=>(await e.get("/api/scm_integrations/private_package_registry",{params:a})).data,n=async a=>{await e.delete(`/api/scm_integrations/private_package_registry/${a}`)};export{r as a,n as d,c as g,g as u};
