(function(){
var root=document.documentElement;
var toggle=document.getElementById('themeToggle');
if(!toggle)return;
var icon=toggle.querySelector('.theme-icon');
var label=toggle.querySelector('.theme-label');
var colorMeta=document.querySelector('meta[name="theme-color"]');
var moon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.6 8.6 0 1 0 20.5 15.2Z"></path></svg>';
var sun='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path></svg>';
function apply(theme,save){
root.dataset.theme=theme;
root.style.colorScheme=theme;
var next=theme==='dark'?'light':'dark';
var wording=next==='dark'?'Dark mode':'Light mode';
toggle.setAttribute('aria-pressed',String(theme==='dark'));
toggle.setAttribute('aria-label','Switch to '+wording.toLowerCase());
toggle.title='Switch to '+wording.toLowerCase();
label.textContent=wording;
icon.innerHTML=theme==='dark'?sun:moon;
if(colorMeta)colorMeta.setAttribute('content',theme==='dark'?'#111827':'#f7f9fd');
if(save){try{localStorage.setItem('local-ai-agent-guide-theme',theme);}catch(e){}}
}
var initial='light';
try{
  var savedTheme=localStorage.getItem('local-ai-agent-guide-theme');
  if(savedTheme==='dark'||savedTheme==='light')initial=savedTheme;
}catch(e){
  initial=root.dataset.theme==='dark'?'dark':'light';
}
apply(initial,false);
toggle.addEventListener('click',function(){apply(root.dataset.theme==='dark'?'light':'dark',true);});
})();
