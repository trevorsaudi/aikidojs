import{p as c,C as g,a as x,L as y,B as v,b as m,c as h,d as b}from"./index-fdfd2f30.js";import{_ as C,r as _,q as B,k}from"./index-13ff96f4.js";c.positioners.cursor=function(a,t){return t};g.register(x,y,v,m,c,h);function T(a){return function(o){return $(o,a)}}function $(a,t){const{chart:o,tooltip:e}=a,n=w(o);if(e.opacity===0){n.style.opacity=0;return}if(e.body){const p=e.title[0]||"",u=e.labelColors[0].backgroundColor,f=e.$context.tooltipItems[0].dataset.label;let d=e.dataPoints[0].formattedValue||0;t&&(d=t(e.dataPoints[0].raw||0)),n.innerHTML=`
			<div class="chart-tooltip-base text-12px leading-none w-200px">
				<div>
					<div class="bg-gray-50 text-gray-900 text--semi-bold px-16px py-10px rounded-t-4px ws-nowrap">
						${p}
					</div>
					<div class="px-16px py-10px">
						<div class="flex align-center gap-8px justify-between">
							<div class="graph-legend evolution-graph flex align-center">
								<div>
									<div class="circle legend w-10px h-10px" style="background-color: ${u}"></div>
								</div>
								<div class="text-carbon-60">
									${f}
								</div>
							</div>

							<div class="text-gray-900 text--semi-bold">
								${d}
							</div>
						</div>
					</div>
				</div>
			</div>
		`}const{offsetLeft:l,offsetTop:s}=o.canvas;n.style.opacity=1,n.style.left=l+e.caretX+"px",n.style.top=s+e.caretY+"px",n.style.zIndex=200;const r=200,i=o.canvas.offsetWidth;l+e.caretX+r>i&&(n.style.left=i-r+"px")}function w(a){let t=a.canvas.parentNode.querySelector("div");return t||(t=document.createElement("div"),t.style.position="absolute",t.style.transform="translate(-50%, 0)",a.canvas.parentNode.appendChild(t)),t}const D={components:{Bar:b},props:{chartData:{type:Array,required:!0},padding:{type:Object,default:void 0},formatValue:{type:Function,default:void 0}},computed:{chartOptions(){return{backgroundColor:"#00adee",scales:{x:{display:!1,grid:{display:!1}},y:{min:0,max:this.chartData[0].data.reduce((a,t)=>Math.max(a,t.value),0),display:!1,grid:{display:!1}}},plugins:{legend:{display:!1},tooltip:{enabled:!1,position:"cursor",external:T(this.formatValue)}},layout:{padding:this.padding}}},formattedChartData(){const a=this.chartData[0].data.map(o=>o.label),t=this.chartData.map(o=>({data:o.data.map(e=>e.value),label:o.title,backgroundColor:o.color}));return{labels:a,datasets:t}}}};function E(a,t,o,e,n,l){const s=_("Bar");return B(),k(s,{data:l.formattedChartData,options:l.chartOptions},null,8,["data","options"])}const O=C(D,[["render",E]]);export{O as R};
