const stages=[
 {label:'01 · PLAN',title:'Choose the next step',body:'The model reads the goal and the current context, then plans the next step.',action:'Turn the request into an actionable plan',tint:'var(--blue)',edge:'var(--blue-line)',ink:'var(--blue-ink)'},
 {label:'02 · ACT',title:'Carry out a permitted action',body:'The model requests a tool call. The agent application validates the request and runs the action if it is permitted, such as searching, editing a file or executing a command.',action:'Use a tool within its granted permissions',tint:'var(--peach)',edge:'var(--peach-line)',ink:'var(--peach-ink)'},
 {label:'03 · OBSERVE',title:'Read the result',body:'The tool returns output, files, logs or errors. The agent adds that result to the current context so the model can respond to what actually happened.',action:'Ground the next decision in tool output',tint:'var(--mint)',edge:'var(--mint-line)',ink:'var(--mint-ink)'},
 {label:'04 · REFLECT',title:'Check, adjust or finish',body:'The model compares the result with the original goal. It can correct a mistake, choose another action or tell the user that the task is complete.',action:'Verify progress before reporting success',tint:'var(--lav)',edge:'var(--lav-line)',ink:'var(--lav-ink)'}
];
let activeStage=0,loopTimer=null,loopPaused=false;
const loopDetail=document.getElementById('loopDetail');
function showStage(index){activeStage=(index+stages.length)%stages.length;const s=stages[activeStage];loopDetail.style.setProperty('--tab-bg',s.tint);loopDetail.style.setProperty('--tab-edge',s.edge);loopDetail.style.setProperty('--tab-ink',s.ink);loopDetail.innerHTML=`<h3>${s.title}</h3><p>${s.body}</p><strong>${s.action}</strong>`;document.querySelectorAll('.loop-tab').forEach((b,i)=>b.setAttribute('aria-selected',String(i===activeStage)));document.querySelector('.brain-stage')?.setAttribute('data-stage',String(activeStage));}
document.querySelectorAll('.loop-tab').forEach(b=>b.addEventListener('click',()=>{loopPaused=true;showStage(Number(b.dataset.stage));restartLoopTimer()}));

document.getElementById('loopPrev').addEventListener('click',()=>{loopPaused=true;showStage(activeStage-1);restartLoopTimer()});document.getElementById('loopNext').addEventListener('click',()=>{loopPaused=true;showStage(activeStage+1);restartLoopTimer()});
function restartLoopTimer(){clearInterval(loopTimer);loopTimer=setInterval(()=>{if(!loopPaused)showStage(activeStage+1)},6500)}
const loopSection=document.getElementById('loop');const loopObserver=new IntersectionObserver(entries=>{const visible=entries.some(e=>e.isIntersecting);loopPaused=!visible;}, {threshold:.2});loopObserver.observe(loopSection);restartLoopTimer();
