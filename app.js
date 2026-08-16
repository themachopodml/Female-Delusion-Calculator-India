const $ = id => document.getElementById(id);

const INCOME_STEPS = [
  {label:'1 LPA+', lpa:1, factor:1},
  {label:'2 LPA+', lpa:2, factor:.94},
  {label:'3 LPA+', lpa:3, factor:.88},
  {label:'5 LPA+', lpa:5, factor:.78},
  {label:'10 LPA+', lpa:10, factor:.62},
  {label:'15 LPA+', lpa:15, factor:.50},
  {label:'25 LPA+', lpa:25, factor:.35},
  {label:'50 LPA+', lpa:50, factor:.20},
  {label:'1 Cr+', lpa:100, factor:.12},
  {label:'10 Cr+', lpa:1000, factor:.025},
  {label:'25 Cr+', lpa:2500, factor:.010},
  {label:'50 Cr+', lpa:5000, factor:.004},
  {label:'75 Cr+', lpa:7500, factor:.002},
  {label:'1 B+', lpa:10000, factor:.001},
  {label:'10 B+', lpa:100000, factor:.00015},
  {label:'50 B+', lpa:500000, factor:.00003},
  {label:'1 Trillion+', lpa:10000000, factor:.000001},
  {label:'∞ / No upper limit', lpa:Infinity, factor:1}
];

function populateRanges() {
  updateRangeUI('age');
  updateRangeUI('height');
  updateIncomeUI();
}

function cmToFeet(cm) {
  const totalIn = cm / 2.54;
  const ft = Math.floor(totalIn / 12);
  const inches = Math.round(totalIn - ft * 12);
  return `${ft}'${inches}"`;
}

function updateRangeUI(type) {
  const min = $(type + 'Min'), max = $(type + 'Max');
  if (!min || !max) return;
  const a = Number(min.value), b = Number(max.value);
  const lo = Math.min(a,b), hi = Math.max(a,b);
  min.value = lo; max.value = hi;
  const minOut = $(type + 'MinOut'), maxOut = $(type + 'MaxOut');
  if (type === 'age') {
    minOut.textContent = lo;
    maxOut.textContent = hi >= 70 ? '70+' : hi;
  } else {
    minOut.textContent = `${lo} cm (${cmToFeet(lo)})`;
    maxOut.textContent = `${hi} cm (${cmToFeet(hi)})`;
  }
  const range = max.max - min.min;
  const p1 = ((lo - min.min) / range) * 100;
  const p2 = ((hi - min.min) / range) * 100;
  const wrap = $(type + 'Range');
  wrap.style.setProperty('--start', `${p1}%`);
  wrap.style.setProperty('--end', `${p2}%`);
}

function bindDualRange(type) {
  const min = $(type + 'Min'), max = $(type + 'Max');
  [min,max].forEach(el => el.addEventListener('input', () => {
    let a = Number(min.value), b = Number(max.value);
    if (a > b) {
      if (el === min) max.value = a;
      else min.value = b;
    }
    updateRangeUI(type);
  }));
}

function updateIncomeUI() {
  const idx = Number($('income').value);
  const item = INCOME_STEPS[idx];
  $('incomeOut').textContent = item.label;
  const pctPos = (idx / (INCOME_STEPS.length - 1)) * 100;
  $('income').style.setProperty('--income-pos', `${pctPos}%`);
  $('incomeTicks').innerHTML = INCOME_STEPS.map((x,i) => `<button type="button" class="income-tick ${i===idx?'active':''}" data-index="${i}" title="${x.label}">${x.label.replace(' / No upper limit','')}</button>`).join('');
  document.querySelectorAll('.income-tick').forEach(btn => btn.addEventListener('click', () => {
    $('income').value = btn.dataset.index;
    updateIncomeUI();
  }));
}

function checkedFactor(name, fallback=1) {
  const els = [...document.querySelectorAll(`input[name="${name}"]:checked`)];
  if (!els.length) return 0;
  if (els.some(x => Number(x.value) === 1)) return 1;
  return Math.min(1, els.reduce((s,x) => s + Number(x.value), 0));
}

function agePool(min,max) {
  let total = 0;
  DATA.ageBands.forEach(b => {
    const hi = b.max === 70 ? 70 : b.max;
    const lo = b.min;
    if (hi < min || lo > max) return;
    total += b.male;
  });
  return total;
}

function ageFactor(min,max) {
  const full = agePool(21,70);
  return full ? agePool(min,max)/full : 0;
}

function heightFactor(min,max) {
  const valid = DATA.heights.filter(h => h >= min && h <= max);
  if (!valid.length) return 0;
  const atLeast = h => DATA.heightModel[h] ?? 0;
  const lo = Math.min(...valid), hi = Math.max(...valid);
  return Math.max(0, atLeast(lo) - (DATA.heightModel[hi + 5] ?? 0));
}

function resultCount() {
  const amin = Number($('ageMin').value), amax = Number($('ageMax').value);
  const hmin = Number($('heightMin').value), hmax = Number($('heightMax').value);
  if (amin > amax) throw new Error('Minimum age cannot exceed maximum age.');
  if (hmin > hmax) throw new Error('Minimum height cannot exceed maximum height.');

  const ageF = ageFactor(amin,amax);
  const hF = heightFactor(hmin,hmax);
  const eduF = Number($('education').value);
  const incIdx = Number($('income').value);
  const incF = INCOME_STEPS[incIdx].factor;
  const workF = checkedFactor('work');
  const financeF = checkedFactor('finance');
  const religionF = checkedFactor('religion');
  const casteF = checkedFactor('caste');
  let bodyF = checkedFactor('body');
  const assetF = checkedFactor('asset');
  const marital = [...document.querySelectorAll('input[name="marital"]:checked')].map(x=>x.value);
  const location = [...document.querySelectorAll('input[name="location"]:checked')].map(x=>x.value);

  if (!marital.length) throw new Error('Select at least one marital status.');
  if (!location.length) throw new Error('Select at least one location / nationality option.');

  const maritalF = marital.includes('never') && marital.includes('married') ? 1 : 0.52;
  let locationF = location.includes('resident') ? 1 : 0.18;
  if (location.includes('foreign')) locationF *= 0.25;
  if ($('nonObese').checked) bodyF *= DATA.model.nonObese;

  const base = agePool(amin,amax);
  const factor = ageF * hF * eduF * incF * workF * financeF * religionF * casteF * bodyF * assetF * maritalF * locationF;
  return {base, factor, count: Math.max(0, Math.round(base * factor)), parts:{ageF,hF,eduF,incF,workF,financeF,religionF,casteF,bodyF,assetF,maritalF,locationF}, amin,amax,hmin,hmax,incIdx};
}

function fmt(n) { return n.toLocaleString('en-IN'); }
function pct(n) { return `${(n*100).toFixed(n*100 < 0.1 ? 4 : n*100 < 1 ? 3 : 2)}%`; }

function calculate() {
  try {
    const r = resultCount();
    $('count').textContent = r.count < 1 ? '≈ 0' : `≈ ${fmt(r.count)}`;
    $('percent').textContent = pct(r.factor);
    $('meterBar').style.width = `${Math.min(100, Math.max(0.2,r.factor*100))}%`;
    const confidence = r.parts.locationF < 1 || r.parts.maritalF < 1 || r.incIdx >= 8 ? 'MODELLED COVERAGE' : 'DEMOGRAPHIC ESTIMATE';
    $('confidence').textContent = confidence;
    const incomeLabel = INCOME_STEPS[r.incIdx].label;
    $('resultText').textContent = r.count < 1
      ? 'The selected combination produces less than one modelled match in the chosen base population.'
      : `The model estimates roughly ${fmt(r.count)} men in the selected demographic base. This is not an availability or dating-market count.`;

    const labels = [
      `Age ${r.amin}–${r.amax >= 70 ? '70+' : r.amax}`,
      `Height ${r.hmin}–${r.hmax} cm`,
      `Education ${$('education').selectedOptions[0].text.split(' (')[0]}`,
      `Income ${incomeLabel}`,
      $('nonObese').checked ? 'Non-obese only' : 'Body filter',
      ...[...document.querySelectorAll('input[name="marital"]:checked')].map(x=>x.parentElement.innerText.trim()),
      ...[...document.querySelectorAll('input[name="location"]:checked')].map(x=>x.parentElement.innerText.trim())
    ];
    $('tags').innerHTML = labels.map(x=>`<span>${x}</span>`).join('');

    const rows = [
      ['Age pool', r.parts.ageF], ['Height', r.parts.hF], ['Education', r.parts.eduF], ['Income', r.parts.incF],
      ['Employment', r.parts.workF], ['Financial assets', r.parts.financeF], ['Religion', r.parts.religionF],
      ['Caste / category', r.parts.casteF], ['Body composition', r.parts.bodyF], ['Assets', r.parts.assetF],
      ['Marital status', r.parts.maritalF], ['Location / nationality', r.parts.locationF]
    ];
    $('breakdown').innerHTML = `<h3>Model breakdown</h3>${rows.map(([k,v])=>`<div class="break-row"><span>${k}</span><b>${pct(v)}</b></div>`).join('')}`;
    $('results').scrollIntoView({behavior:'smooth',block:'start'});
  } catch(e) { flash(e.message); }
}

function resetAll() {
  document.querySelectorAll('input[type=checkbox]').forEach(x=>x.checked=false);
  document.querySelector('input[name="marital"][value="never"]').checked=true;
  document.querySelector('input[name="location"][value="resident"]').checked=true;
  document.querySelector('input[name="work"][value="1"]').checked=true;
  document.querySelector('input[name="finance"][value="1"]').checked=true;
  document.querySelector('input[name="religion"][value="1"]').checked=true;
  document.querySelector('input[name="caste"][value="1"]').checked=true;
  document.querySelector('input[name="body"][value="1"]').checked=true;
  document.querySelector('input[name="asset"][value="1"]').checked=true;
  $('education').selectedIndex=0;
  $('ageMin').value=25; $('ageMax').value=34; $('heightMin').value=150; $('heightMax').value=195; $('income').value=0;
  updateRangeUI('age'); updateRangeUI('height'); updateIncomeUI();
  $('count').textContent='—'; $('percent').textContent='—'; $('confidence').textContent='WAITING FOR INPUT';
  $('resultText').textContent='Configure the filters above and run the engine.'; $('meterBar').style.width='0'; $('tags').innerHTML=''; $('breakdown').innerHTML='';
}

function flash(text) {
  let el=document.querySelector('.toast');
  if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el)}
  el.textContent=text; el.classList.add('show'); clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove('show'),3000);
}

async function share() {
  const text=`IN Female Delusion Calculator by @themachopodml\nEstimated King pool: ${$('count').textContent} (${ $('percent').textContent })`;
  try { if(navigator.share) await navigator.share({title:'IN Female Delusion Calculator',text,url:location.href}); else {await navigator.clipboard.writeText(`${text}\n${location.href}`); flash('Result link copied.');} }
  catch(e) { if(e.name!=='AbortError') flash('Share failed.'); }
}

(function stars(){
  const c=$('stars'),ctx=c.getContext('2d'); let w,h,ss=[];
  function resize(){w=c.width=innerWidth;h=c.height=innerHeight;ss=Array.from({length:120},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.2+.2,p:Math.random()*6.28}))}
  function draw(t){ctx.clearRect(0,0,w,h);ss.forEach(s=>{ctx.globalAlpha=.15+.2*Math.sin(t*.001+s.p);ctx.fillStyle='#8cecff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}
  addEventListener('resize',resize);resize();requestAnimationFrame(draw)
})();

document.addEventListener('DOMContentLoaded',()=>{
  populateRanges();
  bindDualRange('age'); bindDualRange('height');
  $('income').addEventListener('input',updateIncomeUI);
  $('calculateBtn').onclick=calculate; $('resetBtn').onclick=resetAll; $('shareBtn').onclick=share;
});