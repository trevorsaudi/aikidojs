import{a0 as a}from"./index-13ff96f4.js";const r=async()=>(await a.get("/api/sla/settings")).data,o=async(s,t)=>(await a.post("/api/sla/settings",{settings:s,due_soon_threshold:t})).data,c=async({sla_breached_issue_tracker_project:s,sla_breached_issue_tracker_tag_name:t,sla_breached_issue_tracker_apideck_consumer_identifier:e})=>(await a.post("/api/sla/notificationSettings",{sla_breached_issue_tracker_project:s,sla_breached_issue_tracker_tag_name:t,sla_breached_issue_tracker_apideck_consumer_identifier:e})).data,l=async()=>(await a.put("/api/sla/settings/enable")).data,g=async()=>(await a.put("/api/sla/settings/disable")).data;export{o as a,g as d,l as e,r as g,c as s};
