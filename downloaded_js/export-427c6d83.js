import{an as f,bJ as _,a0 as a}from"./index-13ff96f4.js";async function p(r,e,l=!1,s="get"){let t={};e.export_type&&(t.export_type=e.export_type),e.filters&&(t={filter_risk_level:e.filters.riskLevel??null,filter_target_path_id:e.filters.targetPathId??null,filter_team:e.filters.team??null,...t},e.filters.containerRepo&&(t.filter_container_repo_id=e.filters.containerRepo.join(",")),e.filters.repository&&(t.filter_repo_id=e.filters.repository.join(",")),e.filters.language&&(t.filter_lang=e.filters.language.join(",")),e.filters.license_types&&(t.filter_license_types=e.filters.license_types.join("@@")),e.filters.scmRepoPath&&(t.filter_scm_repo_path=e.filters.scmRepoPath)),l&&(t=e),f.emit("export-started");try{t.disable_buttons=1;const i=await n(r,t,s);_(i.data,i.headers["x-filename"])}finally{f.emit("export-finished")}}function n(r,e,l){return l=="post"?a.post(r,e,{responseType:"blob"}):a.get(r,{responseType:"blob",params:e})}export{p as d};
