(function(){var S=[8,16,24,32,48,64,96,128],
M=[
["Llama 3.2 3B","3B · dense","llama3.2:3b",2,3,false],
["Qwen3 8B","8B · dense","qwen3:8b",5.2,8,false],
["Qwen3.5 9B","9B · dense","qwen3.5:9b",7.6,9,false],
["Gemma 4 E2B","5.1B total · 2.3B effective · dense","gemma4:e2b",7.5,5.1,false],
["Gemma 4 12B","11.95B · dense","gemma4:12b",8,11.95,false],
["DeepSeek-R1 Distill 14B","14B · dense","deepseek-r1:14b",9,14,false],
["Gemma 4 E4B","8B total · 4.5B effective · dense","gemma4:e4b",9.5,8,false],
["Qwen3 14B","14B · dense","qwen3:14b",9.3,14,false],
["gpt-oss 20B","20B total · MoE","gpt-oss:20b",14,20,true],
["Qwen3.5 27B","27B · dense","qwen3.5:27b",20,27,false],
["Gemma 4 26B A4B","25.2B total · 3.8B active · MoE","gemma4:26b",19,25.2,true],
["Gemma 4 31B","30.7B · dense","gemma4:31b",20,30.7,false],
["Qwen3.5 35B A3B","35B total · 3B active · MoE","qwen3.5:35b",22,35,true],
["Llama 3.3 70B","70B · dense","llama3.3:70b",43,70,false],
["gpt-oss 120B","120B total · MoE","gpt-oss:120b",65,120,true],
["Llama 4 Scout","109B total · 17B active · MoE","llama4:scout",67,109,true]];
M.forEach(function(m){m.push(Math.round((m[3]*1.2+2)*10)/10)});M.sort(function(a,b){return a[6]-b[6]});
var b=document.getElementById('pbody'),r=document.getElementById('pmem');if(!b||!r)return;
b.innerHTML=M.map(function(m){return '<tr><td>'+m[0]+'</td><td>'+m[1]+'</td><td><code>'+m[2]+'</code></td><td>'+m[3]+'</td><td>'+m[6]+'</td></tr>'}).join('');
var tk=document.querySelector('.pl-ticks');tk.innerHTML=S.map(function(v){return '<span>'+v+'</span>'}).join('');
var rows=[].slice.call(b.rows);
function upd(){var i=+r.value,mem=S[i],use=mem*.7;
document.getElementById('pout').textContent=mem+' GB';r.setAttribute('aria-valuetext',mem+' GB');
[].forEach.call(tk.children,function(c,k){c.classList.toggle('on',k===i)});
document.getElementById('pfill').style.width=(mem/128*100)+'%';
document.getElementById('puse').textContent=(Math.round(use*10)/10)+' GB';
var fitting=M.filter(function(m){return !m[5]&&m[6]<=use}).sort(function(a,b){return b[4]-a[4]});var biggest=fitting.length?fitting[0][4]:0;document.getElementById('pmax').textContent=fitting.length?'about '+(Math.round(biggest*10)/10)+'B':'No listed model';
rows.forEach(function(tr,k){tr.className=M[k][6]<=use?'ok':'no'})}
r.addEventListener('input',upd);upd();
var F=[["Qwen","Alibaba","The Qwen family spans compact and large open weight models for general use, coding and multimodal tasks. Capabilities, context and supported inputs differ by release.<sup class=\"cite\" data-k=\"qwen\"></sup>","Check the model specific license and tool support","#e1f4e8","#80c79c","#247e50","https://github.com/QwenLM/Qwen3.8"],["Gemma","Google","Gemma 4 includes E2B, E4B, 12B, 26B A4B, and 31B variants. Input modalities differ by variant. Native audio input is available only in selected models, so check the model card before choosing one.<sup class=\"cite\" data-k=\"gemma4\"></sup>","Apache 2.0 · See the model card for variant details","#e1f3fb","#8fc7dd","#176f98","https://ai.google.dev/gemma/docs/core/model_card_4"],["gpt-oss","OpenAI","Open weight reasoning models in 20B and 120B sizes, designed to run on infrastructure you control and support agentic tool use in compatible runtimes.<sup class=\"cite\" data-k=\"gptoss\"></sup>","Apache 2.0 · Open weights","#eee9ff","#b2a4e7","#654ac8","https://openai.com/open-models/"],["Llama","Meta","Meta’s official catalogue includes Llama 4 Scout and Maverick alongside earlier Llama generations. Model sizes, context lengths, acceptable use policies, and license terms vary by release. Check the model card for the exact version you plan to use.<sup class=\"cite\" data-k=\"llama\"></sup>","License and acceptable use terms vary by release","#ffeadb","#efa77b","#bd541c","https://github.com/meta-llama/llama-models"],["DeepSeek R1","DeepSeek","DeepSeek R1 uses a mixture of experts architecture with 671B parameters, including 37B active parameters. Its distilled versions range from 1.5B to 70B and use Qwen or Llama models. R1 is an earlier reasoning family, not DeepSeek’s latest release.<sup class=\"cite\" data-k=\"deepseeklatest\"></sup><sup class=\"cite\" data-k=\"deepseek\"></sup>","MIT for R1 · Distilled variants retain their base model license terms","#fce5ee","#e695b7","#b73870","https://github.com/deepseek-ai/DeepSeek-R1"],["Mistral / Devstral","Mistral AI","Mistral’s current catalogue includes Large 4 and Small 4. Devstral 2 and Devstral Small 2 are listed as deprecated or retired, so check the model lifecycle before choosing an older Devstral release for a new coding workflow.<sup class=\"cite\" data-k=\"mistral\"></sup><sup class=\"cite\" data-k=\"devstral\"></sup>","Licenses and capabilities vary by model","#fff1c9","#e5bf59","#946500","https://docs.mistral.ai/models"]];
document.getElementById('fam').innerHTML=F.map(function(f){return '<a class="fam" href="'+f[7]+'" target="_blank" rel="noopener noreferrer" aria-label="Open the official '+f[0]+' model page in a new tab" style="--f:'+f[4]+';--e:'+f[5]+';--a:'+f[6]+'"><h4>'+f[0]+'</h4><small>'+f[1]+'</small><p>'+f[2]+'</p><em>'+f[3]+'</em><span class="fam-visit">Official model page <span aria-hidden="true">↗</span></span></a>'}).join('')})();
