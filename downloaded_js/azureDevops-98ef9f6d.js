import{a0 as e}from"./index-13ff96f4.js";function t(a){return e.post("/api/scm_integrations/azure_devops/validateOrganizationName",{organization_name:a})}function s(a){return e.post("/api/scm_integrations/azure_devops/updateTokenAzureDevops",{access_token:a})}async function r(a){return(await e.post("/api/scm_integrations/azure_devops/updateTokenAzureDevopsDryRun",{access_token:a})).data}export{r as a,s as u,t as v};
