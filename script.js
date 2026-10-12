/* =========================================
   JAVASCRIPT
   ========================================= */

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const navigationEntry = performance.getEntriesByType('navigation')[0];
if (navigationEntry && navigationEntry.type === 'reload') {
  addEventListener('load', () => window.scrollTo(0, 0), {once:true});
}

/* ====== CONFIGURACIÓN ======
   WA: número de WhatsApp en formato internacional, sin + ni espacios (+593 99 995 8488). */
const WA = '593999958488';

/* Fotos de productos tomadas de la tienda oficial. */
const IMG = {
  'hp-ryzen5-pro':'product-images/hp-ryzen5-pro.png',
  'chromebook-dell-4':'product-images/chromebook-dell-4.png',
  'chromebook-dell-360':'product-images/chromebook-dell-360.webp',
  'lenovo-300e':'product-images/lenovo-300e.webp',
  'dell-latitude-7490':'product-images/dell-latitude-7490.webp',
  'hp-745-g6':'product-images/hp-745-g6.png',
  'dell-3310':'product-images/dell-3310.webp',
  'dell-5310':'product-images/dell-5310.webp',
  'hp-850-g5':'product-images/hp-850-g5.webp',
  'hp-850-g6':'product-images/hp-850-g6.webp',
  'thinkpad-chromebook':'product-images/thinkpad-chromebook.webp',
  'imac-21':'product-images/imac-21.webp',
  'macbook-i9':'product-images/macbook-i9.webp',
  'macbook-pro-i7':'product-images/macbook-pro-i7.webp',
  'ipad-mini-1':'product-images/ipad-mini-1.png',
  'ipad-mini-2':'product-images/ipad-mini-2.png',
  'ipad-mini-3-64':'product-images/ipad-mini-3-64.png',
  'ipad-mini-3-16':'product-images/ipad-mini-3-16.webp',
  'ipad-air-1-16':'product-images/ipad-air-1-16.png',
  'ipad-air-1-32':'product-images/ipad-air-1-32.png',
  'ipad-air-2-16':'product-images/ipad-air-2-16.png',
  'ipad-air-2-64':'product-images/ipad-air-2-64.webp',
  'ipad-5':'product-images/ipad-5.png',
  'ipad-6':'product-images/ipad-6.png',
  'ipad-7':'product-images/ipad-7.png',
  'ipad-9':'product-images/ipad-9.png',
  'ipad-air-4':'product-images/ipad-air-4.webp',
  'iphone-14-128':'product-images/iphone-14-128.png',
  'iphone-13-caja':'product-images/iphone-13-caja.png',
  'iphone-14-caja':'product-images/iphone-14-caja.png',
  'iphone-14-plus':'product-images/iphone-14-plus.png',
  'iphone-16e':'product-images/iphone-16e.webp',
  'iphone-13-pro':'product-images/iphone-13-pro.png',
  'iphone-15':'product-images/iphone-15.png',
  'iphone-14-pro':'product-images/iphone-14-pro.webp',
  'iphone-16':'product-images/iphone-16.webp',
  'iphone-16-plus':'product-images/iphone-16-plus.webp'
};

const P = [
  {id:'hp-ryzen5-pro',cat:'laptop',name:'HP Ryzen 5 Pro',specs:['16 GB RAM','256 GB SSD'],price:320,tag:'Grado A+'},
  {id:'chromebook-dell-4',cat:'laptop',name:'Chromebook Dell',specs:['4 GB RAM','16 GB'],price:60,tag:'Grado A+'},
  {id:'chromebook-dell-360',cat:'laptop',name:'Chromebook Dell 360',specs:['4 GB RAM','16 GB','Táctil'],price:75,tag:'Grado A+'},
  {id:'lenovo-300e',cat:'laptop',name:'Lenovo 300e 2nd',specs:['AMD 3015e','8 GB RAM','128 GB SSD','11" táctil 360°'],price:130,tag:'6 meses de garantía'},
  {id:'dell-latitude-7490',cat:'laptop',name:'Dell Latitude 7490',specs:['i7 8va','8 GB RAM','128 GB SSD'],price:260},
  {id:'hp-745-g6',cat:'laptop',name:'HP EliteBook 745 G6',specs:['Ryzen 5 Pro 3500','8 GB RAM','256 GB SSD','14" táctil + huella'],price:295,tag:'6 meses de garantía'},
  {id:'dell-3310',cat:'laptop',name:'Dell 3310 2 en 1',specs:['i5 8va','8 GB RAM','256 GB SSD','13" táctil 360°'],price:300,tag:'6 meses de garantía'},
  {id:'hp-850-g5',cat:'laptop',name:'HP EliteBook 850 G5',specs:['i7 8va','8 GB RAM','256 GB SSD'],price:310},
  {id:'dell-5310',cat:'laptop',name:'Dell 5310',specs:['i7 10ma','8 GB RAM','256 GB SSD','13"'],price:330,tag:'6 meses de garantía'},
  {id:'hp-850-g6',cat:'laptop',name:'HP EliteBook 850 G6',specs:['i5 8va','8 GB RAM','256 GB SSD','15"'],price:330,tag:'6 meses de garantía'},
  {id:'thinkpad-chromebook',cat:'laptop',name:'ThinkPad Chromebook',specs:['i7 12va','16 GB RAM','256 GB SSD','Táctil'],price:380},
  {id:'imac-21',cat:'mac',name:'iMac 21"',specs:['i5','8 GB RAM','1 TB'],price:300},
  {id:'macbook-i9',cat:'mac',name:'MacBook Core i9',specs:['i9','32 GB RAM','500 GB SSD'],price:580},
  {id:'macbook-pro-i7',cat:'mac',name:'MacBook Pro i7',specs:['i7','16 GB RAM','512 GB SSD'],price:580},
  {id:'ipad-mini-1',cat:'ipad',name:'iPad mini 1',specs:['16 GB'],price:50,tag:'Como nueva de vitrina'},
  {id:'ipad-mini-2',cat:'ipad',name:'iPad mini 2',specs:['Grado A+'],price:55,tag:'Grado A+'},
  {id:'ipad-mini-3-64',cat:'ipad',name:'iPad mini 3',specs:['64 GB','Space Gray'],price:65,tag:'6 meses de garantía'},
  {id:'ipad-mini-3-16',cat:'ipad',name:'iPad mini 3',specs:['16 GB','Space Gray'],price:75,tag:'6 meses de garantía'},
  {id:'ipad-air-1-16',cat:'ipad',name:'iPad Air 1',specs:['16 GB'],price:75,tag:'Grado A+'},
  {id:'ipad-air-1-32',cat:'ipad',name:'iPad Air 1',specs:['32 GB'],price:75},
  {id:'ipad-air-2-16',cat:'ipad',name:'iPad Air 2',specs:['16 GB'],price:80},
  {id:'ipad-air-2-64',cat:'ipad',name:'iPad Air 2',specs:['64 GB','Space Gray'],price:110,tag:'6 meses de garantía'},
  {id:'ipad-5',cat:'ipad',name:'iPad 5ª generación',specs:['32 GB','Space Gray'],price:110,tag:'6 meses de garantía'},
  {id:'ipad-6',cat:'ipad',name:'iPad 6ª generación',specs:['9,7"','32 GB','Wi-Fi'],price:120,tag:'Grado A+'},
  {id:'ipad-7',cat:'ipad',name:'iPad 7ª generación',specs:['10,2"','32 GB','Wi-Fi'],price:155},
  {id:'ipad-9',cat:'ipad',name:'iPad 9ª generación',specs:['256 GB'],price:290},
  {id:'ipad-air-4',cat:'ipad',name:'iPad Air 4',specs:['64 GB'],price:300},
  {id:'iphone-14-128',cat:'iphone',name:'iPhone 14',specs:['128 GB'],price:340},
  {id:'iphone-13-caja',cat:'iphone',name:'iPhone 13 con caja',specs:['128 GB','Batería 100%'],price:360,tag:'Con caja'},
  {id:'iphone-14-caja',cat:'iphone',name:'iPhone 14 con caja',specs:['128 GB'],price:410,tag:'Con caja'},
  {id:'iphone-14-plus',cat:'iphone',name:'iPhone 14 Plus',specs:['128 GB'],price:410},
  {id:'iphone-16e',cat:'iphone',name:'iPhone 16e',specs:['128 GB'],price:410},
  {id:'iphone-13-pro',cat:'iphone',name:'iPhone 13 Pro',specs:['128 GB','Batería 100%'],price:440},
  {id:'iphone-15',cat:'iphone',name:'iPhone 15',specs:['256 GB','Batería 100%'],price:520,tag:'Excelente estado'},
  {id:'iphone-14-pro',cat:'iphone',name:'iPhone 14 Pro',specs:['512 GB'],price:530},
  {id:'iphone-16',cat:'iphone',name:'iPhone 16',specs:['128 GB'],price:600},
  {id:'iphone-16-plus',cat:'iphone',name:'iPhone 16 Plus',specs:['256 GB'],price:690}
];
const CATS = [
  {k:'laptop',label:'Laptops',dev:'laptop',tone:'A',image:'hp-ryzen5-pro',blurb:'Dell, HP EliteBook, Lenovo y Chromebook para estudio, trabajo y uso diario.'},
  {k:'mac',label:'Mac',dev:'desktop',tone:'C',image:'imac-21',blurb:'MacBook e iMac con la potencia que necesitas para trabajar sin límites.'},
  {k:'ipad',label:'iPad',dev:'tablet',tone:'B',image:'ipad-6',blurb:'Desde $50. Ideales para clases, lectura, videos y juegos.'},
  {k:'iphone',label:'iPhone',dev:'phone',tone:'A',image:'iphone-14-128',blurb:'Modelos con garantía y factura, y batería al 100% en equipos seleccionados. Envíos nacionales.'}
];

/* ====== ilustraciones (se reemplazan por fotos cuando existan en IMG) ====== */
function dev(type,tone='A'){
  const scr='url(#scr'+tone+')';
  if(type==='phone') return `<svg viewBox="0 0 200 400" role="img" aria-label="iPhone"><defs><linearGradient id="glassPhone" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="rgba(255,255,255,.52)"/><stop offset=".22" stop-color="rgba(255,255,255,.12)"/><stop offset="1" stop-color="rgba(0,0,0,.18)"/></linearGradient></defs><rect x="8" y="4" width="184" height="392" rx="38" fill="url(#bodyD)"/><rect x="12" y="9" width="176" height="382" rx="34" fill="url(#bodyD)"/><rect x="20" y="18" width="160" height="364" rx="30" fill="${scr}"/><rect x="22" y="20" width="156" height="360" rx="28" fill="url(#glassPhone)" opacity=".8"/><rect x="75" y="22" width="50" height="12" rx="6" fill="#0d0d0d"/><rect x="68" y="40" width="64" height="12" rx="6" fill="rgba(255,255,255,.2)"/><circle cx="100" cy="220" r="46" fill="rgba(255,255,255,.12)"/><circle cx="100" cy="220" r="24" fill="rgba(255,255,255,.22)"/><path d="M34 120c32-34 80-36 132 0" opacity=".32" stroke="rgba(255,255,255,.5)" stroke-width="8" stroke-linecap="round" fill="none"/><rect x="79" y="318" width="42" height="11" rx="5.5" fill="rgba(255,255,255,.2)"/><rect x="73" y="336" width="54" height="4" rx="2" fill="rgba(255,255,255,.16)"/></svg>`;
  if(type==='tablet') return `<svg viewBox="0 0 360 480" role="img" aria-label="iPad"><rect x="8" y="8" width="344" height="464" rx="34" fill="url(#body)"/><rect x="22" y="18" width="316" height="440" rx="24" fill="${scr}"/><rect x="26" y="22" width="308" height="432" rx="20" fill="rgba(255,255,255,.09)"/><circle cx="180" cy="20" r="4" fill="#7c7c7c"/><path d="M28 328c60-34 116-24 180-50s104-14 154 10v202H28z" fill="rgba(255,255,255,.18)"/><path d="M40 92c42-34 100-42 156-22 52 18 94 15 120-4" fill="none" stroke="rgba(255,255,255,.32)" stroke-width="7" stroke-linecap="round"/></svg>`;
  if(type==='desktop') return `<svg viewBox="0 0 440 400" role="img" aria-label="iMac"><rect x="28" y="16" width="384" height="252" rx="18" fill="url(#body)"/><rect x="42" y="30" width="356" height="224" rx="10" fill="${scr}"/><path d="M44 172c72-62 128-42 194-62s102-12 160 14v116H44z" fill="rgba(255,255,255,.2)"/><rect x="160" y="278" width="120" height="18" rx="9" fill="#d5d5d5"/><rect x="134" y="292" width="172" height="14" rx="7" fill="#979797"/><path d="M206 290v48h28v-48" fill="#1d1d1d"/><rect x="146" y="338" width="148" height="18" rx="9" fill="#b1b1b1"/></svg>`;
  return `<svg viewBox="0 0 540 340" role="img" aria-label="Laptop"><rect x="74" y="12" width="392" height="248" rx="18" fill="url(#bodyD)"/><rect x="86" y="24" width="368" height="226" rx="10" fill="${scr}"/><path d="M94 190c84-62 152-24 214-42s118-10 176 10v96H94z" fill="rgba(255,255,255,.2)"/><rect x="12" y="260" width="516" height="20" rx="10" fill="#bbbbbb"/><rect x="84" y="270" width="372" height="18" rx="9" fill="rgba(255,255,255,.25)"/><rect x="212" y="278" width="116" height="10" rx="5" fill="#7a7a7a"/></svg>`;
}
const kind=p=>p.cat==='mac'?(p.id.startsWith('imac')?'desktop':'laptop'):({laptop:'laptop',ipad:'tablet',iphone:'phone'})[p.cat];
const tone=p=>({laptop:'A',mac:'C',ipad:'B',iphone:'A'})[p.cat];
const media=p=>IMG[p.id]?`<img src="${IMG[p.id]}" alt="${p.name}" loading="lazy" decoding="async">`:dev(kind(p),tone(p));

/* ====== utilidades ====== */
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const rm=matchMedia('(prefers-reduced-motion: reduce)');
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
const phoneBack=()=>`<svg viewBox="0 0 200 400" aria-hidden="true"><rect x="8" y="4" width="184" height="392" rx="38" fill="url(#bodyD)"/><rect x="14" y="10" width="172" height="380" rx="33" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="2"/><rect x="24" y="24" width="88" height="88" rx="26" fill="#0c0c0c" stroke="#3a3a3a" stroke-width="2"/><circle cx="52" cy="52" r="17" fill="#050505" stroke="#555" stroke-width="3"/><circle cx="52" cy="52" r="8" fill="#1c2430"/><circle cx="86" cy="52" r="17" fill="#050505" stroke="#555" stroke-width="3"/><circle cx="86" cy="52" r="8" fill="#1c2430"/><circle cx="69" cy="88" r="17" fill="#050505" stroke="#555" stroke-width="3"/><circle cx="69" cy="88" r="8" fill="#1c2430"/><circle cx="96" cy="88" r="4.5" fill="#E10600"/><rect x="83" y="236" width="34" height="34" rx="10" fill="#fff"/><rect x="95" y="244" width="10" height="18" rx="2" fill="#E10600"/><rect x="91" y="248" width="18" height="10" rx="2" fill="#E10600"/></svg>`;
document.querySelectorAll('.df').forEach(el=>{
  const photo=IMG[el.dataset.product];
  if(photo){
    el.innerHTML=`<img class="hero-product" src="${photo}" alt="" decoding="async">`;
    return;
  }
  const svg=dev(el.dataset.dev,el.dataset.tone);
  el.innerHTML=el.dataset.dev==='phone'?`<div class="spin"><div class="face front">${svg}</div><div class="face back">${phoneBack()}</div></div>`:svg;
});

/* ====== título del hero por palabras ====== */
(function(){
  const h=document.getElementById('h1');
  h.innerHTML=h.getAttribute('aria-label').split(' ').map((w,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join('');
})();

/* ====== manifiesto por palabras ====== */
const maniEl=document.getElementById('mani');
const maniWords=(function(){
  const hot=['accesible','garantizados','laboratorio.'];
  maniEl.innerHTML=maniEl.textContent.split(' ').map(w=>`<span class="wd${hot.includes(w.toLowerCase())?' hot':''}">${w}</span>`).join(' ');
  return [...maniEl.children];
})();

/* ====== showcase pinned ====== */
const catsEl=document.getElementById('cats'),detail=document.getElementById('detail'),vis=document.getElementById('vis'),show=document.getElementById('show'),bar=document.querySelector('.bar'),pinEl=show.querySelector('.pin');
const mobileShowcase=matchMedia('(max-width: 860px)');
const catStats=CATS.map(c=>{const l=P.filter(p=>p.cat===c.k);return {n:l.length,min:Math.min(...l.map(p=>p.price))}});
CATS.forEach(c=>{
  const li=document.createElement('li');li.textContent=c.label;li.setAttribute('role','button');li.tabIndex=0;
  li.addEventListener('click',()=>setActive(CATS.indexOf(c)));
  li.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setActive(CATS.indexOf(c))}});
  catsEl.appendChild(li);
  const d=document.createElement('div');d.className='sdev '+c.dev;
  d.innerHTML=IMG[c.image]?`<img src="${IMG[c.image]}" alt="${c.label}" loading="lazy" decoding="async">`:dev(c.dev,c.tone);
  vis.appendChild(d);
});
let activeCat=-1;
function setActive(i){
  if(i===activeCat&&!mobileShowcase.matches)return;activeCat=i;
  [...catsEl.children].forEach((li,j)=>{
    li.classList.toggle('on',j===i);
    li.setAttribute('aria-pressed',String(j===i));
    vis.children[j].classList.toggle('active',j===i);
    if(mobileShowcase.matches){
      vis.children[j].style.opacity='1';
      vis.children[j].style.transform='none';
    }
  });
  const c=CATS[i],s=catStats[i];
  detail.innerHTML=`<p>${c.blurb}</p><p class="from">Desde $${s.min}, ${s.n} equipos</p><a href="#tienda" data-filter="${c.k}">Ver ${c.label}</a>`;
}
setActive(0);
mobileShowcase.addEventListener('change',()=>{
  if(mobileShowcase.matches)setActive(activeCat);
  else frame();
});

/* ====== estadísticas con conteo ====== */
const STATS=[
  {to:P.length,pre:'',suf:'',l:'equipos disponibles en la tienda'},
  {to:50,pre:'$',suf:'',l:'es el precio de entrada, un iPad mini'},
  {to:6,pre:'',suf:'',l:'meses de garantía en modelos seleccionados'},
  {to:100,pre:'',suf:'%',l:'de nuestros clientes satisfechos'}
];
const statsEl=document.getElementById('stats');
statsEl.innerHTML=STATS.map((s,i)=>`<div class="stat" data-anim="rise" style="--d:${i*130}"><b data-to="${s.to}" data-pre="${s.pre}" data-suf="${s.suf}">${s.pre}0${s.suf}</b><span>${s.l}</span></div>`).join('');
const countIO=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;countIO.unobserve(e.target);
  const el=e.target,to=+el.dataset.to,pre=el.dataset.pre,suf=el.dataset.suf;
  if(rm.matches){el.textContent=pre+to+suf;return}
  const t0=performance.now(),dur=1600;
  (function step(t){const k=clamp((t-t0)/dur,0,1),v=Math.round(to*(1-Math.pow(1-k,3)));el.textContent=pre+v+suf;if(k<1)requestAnimationFrame(step)})(t0);
}),{threshold:.6});
statsEl.querySelectorAll('b').forEach(b=>countIO.observe(b));

/* ====== remates: scroll horizontal ====== */
const hz=document.getElementById('hz'),hzTrack=document.getElementById('hzTrack');
[...P].sort((a,b)=>a.price-b.price).slice(0,8).forEach(p=>{
  const c=document.createElement('article');c.className='hz-card';
  c.innerHTML=`<div class="media" data-open="${p.id}" style="cursor:pointer">${media(p)}</div><h3>${p.name}</h3><p>${p.specs.join(', ')}</p><div class="buy"><span class="price"><sup>$</sup>${p.price}</span><button class="btn btn-brand btn-sm" data-add="${p.id}" aria-label="Agregar ${p.name} al carrito">Agregar</button></div>`;
  hzTrack.appendChild(c);
});
let hzDist=0;
function sizeHz(){
  if(rm.matches){hz.style.height='';return}
  hzDist=Math.max(0,hzTrack.scrollWidth-innerWidth+40);
  hz.style.height=(hzDist+innerHeight)+'px';
}

/* ====== lab / empleo: revelado ====== */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.55});
document.querySelectorAll('.checks li').forEach((li,i)=>{li.style.transitionDelay=(i*.12)+'s';io.observe(li)});
const tl=document.getElementById('tl'),steps=[...tl.querySelectorAll('.st')];

/* ====== tienda ====== */
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const keep=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const read=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}};
const cart=new Map((read('drcell-cart')||[]).filter(x=>Array.isArray(x)&&byId[x[0]]));
const favs=new Set((read('drcell-fav')||[]).filter(id=>byId[id]));
const grid=document.getElementById('grid'),chips=document.getElementById('chips'),count=document.getElementById('count'),sortEl=document.getElementById('sort'),searchEl=document.getElementById('search'),rangeEl=document.getElementById('range'),rangeOut=document.getElementById('rangeOut');
let filter='all';
[{k:'all',l:'Todo'},...CATS.map(c=>({k:c.k,l:c.label})),{k:'fav',l:'Favoritos'}].forEach(f=>{
  const b=document.createElement('button');b.className='chip';b.type='button';b.textContent=f.l;b.dataset.k=f.k;
  b.addEventListener('click',()=>{filter=f.k;render()});chips.appendChild(b);
});
[sortEl,searchEl,rangeEl].forEach(el=>el.addEventListener('input',render));
const cardIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');cardIO.unobserve(e.target)}}),{threshold:.12});
const HEART='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z"/></svg>';
function render(){
  const q=searchEl.value.trim().toLowerCase(),max=+rangeEl.value;
  rangeOut.textContent='$'+max;
  [...chips.children].forEach(b=>{
    b.setAttribute('aria-pressed',String(b.dataset.k===filter));
    if(b.dataset.k==='fav')b.textContent='Favoritos'+(favs.size?` (${favs.size})`:'');
  });
  let list=P.filter(p=>(filter==='all'||(filter==='fav'?favs.has(p.id):p.cat===filter))&&p.price<=max&&(!q||(p.name+' '+p.specs.join(' ')).toLowerCase().includes(q)));
  if(sortEl.value==='asc')list=[...list].sort((a,b)=>a.price-b.price);
  if(sortEl.value==='desc')list=[...list].sort((a,b)=>b.price-a.price);
  count.textContent=`${list.length} de ${P.length} equipos`;
  grid.innerHTML=list.length?list.map((p,i)=>`
    <article class="p" style="--i:${i%4}">
      <div class="media" data-open="${p.id}">${p.tag?`<span class="tag">${p.tag}</span>`:''}<button class="fav" data-fav="${p.id}" aria-pressed="${favs.has(p.id)}" aria-label="Favorito: ${p.name}">${HEART}</button>${media(p)}</div>
      <h3><button class="open" data-open="${p.id}">${p.name}</button></h3>
      <p class="specs">${p.specs.join(' · ')}</p>
      <div class="buy">
        <span class="price"><sup>$</sup>${p.price}</span>
        <button class="btn btn-brand btn-sm" data-add="${p.id}" aria-label="Agregar ${p.name} al carrito">Agregar</button>
      </div>
    </article>`).join(''):`<p class="empty">${filter==='fav'&&!favs.size?'Aún no tienes favoritos. Toca el corazón en cualquier equipo.':'No encontramos equipos con esos filtros.'}</p>`;
  grid.querySelectorAll('.p').forEach(c=>cardIO.observe(c));
}
render();

/* carrito */
const fab=document.getElementById('fab'),drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim'),itemsEl=document.getElementById('items'),totalEl=document.getElementById('total'),sendEl=document.getElementById('send');
function cartUpdate(bump){
  let n=0,t=0;cart.forEach((q,id)=>{n+=q;t+=q*byId[id].price});
  fab.dataset.n=n;fab.querySelector('b').textContent=n;
  if(bump){fab.classList.remove('bump');void fab.offsetWidth;fab.classList.add('bump')}
  itemsEl.innerHTML=n?[...cart].map(([id,q])=>{const p=byId[id];return `<div class="ci"><div class="th">${media(p)}</div><div><h4>${p.name}</h4><small>${p.specs.join(' · ')}</small><div class="qty"><button data-q="${id}:-1" aria-label="Quitar uno">−</button><span>${q}</span><button data-q="${id}:1" aria-label="Agregar uno">+</button></div></div><div class="pr">$${p.price*q}</div></div>`}).join(''):'<p class="cart-empty">Tu carrito está vacío. Agrega equipos y envía el pedido por WhatsApp.</p>';
  totalEl.textContent='$'+t;
  const lines=[...cart].map(([id,q])=>`- ${byId[id].name} (${byId[id].specs.join(', ')}) x${q}: $${byId[id].price*q}`);
  sendEl.href=wa(`Hola Dr Cell, quiero pedir:\n${lines.join('\n')}\nTotal: $${t}`);
  sendEl.style.display=n?'':'none';
  keep('drcell-cart',[...cart]);
}
function openDrawer(){drawer.classList.add('on');scrim.classList.add('on');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';drawer.querySelector('.x').focus()}
function closeDrawer(){drawer.classList.remove('on');scrim.classList.remove('on');drawer.setAttribute('aria-hidden','true');document.body.style.overflow=''}
const safeOpenDialog=(el)=>{if(!el)return;if(typeof el.showModal==='function'){el.showModal();return}el.setAttribute('open','open')};
const safeCloseDialog=(el)=>{if(!el)return;if(typeof el.close==='function'){el.close();return}el.removeAttribute('open')};
cartUpdate(false);

/* detalle */
const dlg=document.getElementById('dlg'),dl=document.getElementById('dl');
const DESC={
  laptop:'Equipo revisado y repotenciado en EE.UU. y probado otra vez en nuestro laboratorio en Guayaquil. Entrega a domicilio.',
  mac:'Equipo revisado y probado en nuestro laboratorio en Guayaquil, listo para trabajo y estudio. Entrega a domicilio.',
  ipad:'Revisado y repotenciado en EE.UU. y probado en nuestro laboratorio en Guayaquil. Entrega a domicilio.',
  iphone:'Con garantía y factura. Envíos a todo el país y pago contra entrega disponible.'
};
function openDlg(id){
  const p=byId[id];
  dl.innerHTML=`<button class="x" data-dclose aria-label="Cerrar">×</button><div class="m">${media(p)}</div><div class="t">${p.tag?`<span class="tag" style="position:static;align-self:flex-start">${p.tag}</span>`:''}<h3>${p.name}</h3><ul>${p.specs.map(x=>`<li>${x}</li>`).join('')}</ul><p>${DESC[p.cat]}</p><span class="price"><sup>$</sup>${p.price}</span><div class="acts"><button class="btn btn-brand" data-add="${p.id}">Agregar al carrito</button><a class="btn btn-ghost" href="${wa(`Hola Dr Cell, quiero información de: ${p.name} (${p.specs.join(', ')}) a $${p.price}.`)}" target="_blank" rel="noopener">Preguntar por WhatsApp</a></div></div>`;
  safeOpenDialog(dlg);
}
dlg.addEventListener('click',e=>{if(e.target===dlg)safeCloseDialog(dlg)});

/* eventos */
document.addEventListener('click',e=>{
  const t=e.target;
  const f=t.closest('[data-filter]');
  if(f){filter=f.dataset.filter;searchEl.value='';rangeEl.value=690;render()}
  const fv=t.closest('[data-fav]');
  if(fv){
    const id=fv.dataset.fav;favs.has(id)?favs.delete(id):favs.add(id);keep('drcell-fav',[...favs]);
    if(filter==='fav')render();else{fv.setAttribute('aria-pressed',String(favs.has(id)));chips.querySelector('[data-k="fav"]').textContent='Favoritos'+(favs.size?` (${favs.size})`:'')}
    return;
  }
  const ad=t.closest('[data-add]');
  if(ad){
    const id=ad.dataset.add;cart.set(id,(cart.get(id)||0)+1);cartUpdate(true);
    const old=ad.dataset.t||ad.textContent;ad.dataset.t=old;ad.textContent='Agregado';
    clearTimeout(ad._t);ad._t=setTimeout(()=>{ad.textContent=old},1100);
    return;
  }
  const qb=t.closest('[data-q]');
  if(qb){const [id,d]=qb.dataset.q.split(':');const n=(cart.get(id)||0)+(+d);n<=0?cart.delete(id):cart.set(id,n);cartUpdate(false);return}
  const op=t.closest('[data-open]');
  if(op){openDlg(op.dataset.open);return}
  if(t.closest('[data-dclose]')){dlg.close();return}
  if(t.closest('#fab')){openDrawer();return}
  if(t.closest('[data-close]'))closeDrawer();
});
addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});

/* ====== clientes felices ====== */
const FAM=[
  ['tablet','B','Compró una iPad Air de $50','product-images/cliente-feliz-1.webp'],
  ['tablet','B','Compró una iPad 6 de $120','product-images/cliente-feliz-2.webp'],
  ['laptop','A','Compró una laptop de $60','product-images/cliente-feliz-3.webp'],
  ['laptop','C','Compró una laptop de $75','product-images/cliente-feliz-4.webp'],
  ['phone','A','Compró un iPhone 12','product-images/cliente-feliz-5.webp'],
  ['phone','C','Compró un iPhone 12','product-images/cliente-feliz-6.webp']
];
document.getElementById('tiles').innerHTML=FAM.map((f,i)=>`<div class="tile rv" style="--i:${i%3}"><img src="${f[3]}" alt="${f[2]}" loading="lazy" decoding="async"><p>${f[2]}</p></div>`).join('')+
  `<div class="tile big rv"><div><p>Remate de iPad</p><span>iPad desde los $50</span></div><a class="btn btn-gold mag" href="#tienda" data-filter="ipad">Comienza aquí</a></div>`;
document.querySelectorAll('.rv').forEach(el=>cardIO.observe(el));

/* ====== testimonios ====== */
const V=[
  ['La experiencia de compra fue excelente de principio a fin. Me asesoraron de manera clara y profesional.','María Fernanda','Compra de iPad, Plaza Quil'],
  ['La compra de mi iPhone 12 fue una experiencia excelente. Recibí una atención clara y profesional.','Fabian Ortega','Compra de iPhone 12, Plaza Quil'],
  ['Comprar la iMac de 27 pulgadas fue una excelente decisión. El proceso fue claro, rápido y muy confiable.','Cristhian Moreira','Compra de iMac 27", Garzocentro'],
  ['Encontrar esta laptop Dell a un precio accesible fue una gran ayuda. Mi hijo ya no tiene que ir al ciber.','Pablo Chiquito','Compra de laptop Dell, Garzocentro'],
  ['Recibimos una atención muy clara y amable en todo momento. Los equipos funcionan perfectamente.','Carmen Rosa','Laptop y iPad, Online'],
  ['Compré esta laptop para estudiar y también para jugar, y quedé muy satisfecho con la compra.','Andrés Gómez','Compra de laptop, Plaza Quil']
];
const vh=V.map(v=>`<figure class="q"><div class="stars" aria-label="5 estrellas">★★★★★</div><p>“${v[0]}”</p><footer><b>${v[1]}</b><span>${v[2]}</span></footer></figure>`).join('');
document.getElementById('mq').innerHTML=vh+vh;

/* ====== botones magnéticos y tilt del hero ====== */
if(!rm.matches && matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.mag').forEach(b=>{
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${((e.clientX-r.left)/r.width-.5)*14}px,${((e.clientY-r.top)/r.height-.5)*10-2}px)`});
    b.addEventListener('pointerleave',()=>{b.style.transform=''});
  });
  const hero=document.getElementById('hero'),root=document.documentElement;
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();root.style.setProperty('--mx',((e.clientX-r.left)/r.width*2-1).toFixed(3));root.style.setProperty('--my',((e.clientY-r.top)/r.height*2-1).toFixed(3))});
  hero.addEventListener('pointerleave',()=>{root.style.setProperty('--mx',0);root.style.setProperty('--my',0)});
}

/* ====== menú móvil ====== */
const burger=document.getElementById('burger'),mnav=document.getElementById('mnav');
function setMenu(on){burger.setAttribute('aria-expanded',String(on));burger.setAttribute('aria-label',on?'Cerrar menú':'Abrir menú');mnav.classList.toggle('on',on);mnav.setAttribute('aria-hidden',String(!on));document.body.style.overflow=on?'hidden':''}
burger.addEventListener('click',()=>setMenu(!mnav.classList.contains('on')));
mnav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
addEventListener('resize',()=>{if(innerWidth>1100)setMenu(false)});

/* ====== búsqueda del menú ====== */
const sdlg=document.getElementById('sdlg'),sq=document.getElementById('sq'),sres=document.getElementById('sres'),shint=document.getElementById('shint');
function sRender(){
  const q=sq.value.trim().toLowerCase();
  const list=(q?P.filter(p=>(p.name+' '+p.specs.join(' ')+' '+p.cat).toLowerCase().includes(q)):[...P].sort((a,b)=>a.price-b.price)).slice(0,8);
  shint.textContent=q?`${list.length} ${list.length===1?'resultado':'resultados'}`:'Los más económicos';
  sres.innerHTML=list.length?list.map(p=>`<li><button data-sopen="${p.id}"><span class="sth">${media(p)}</span><span><b>${p.name}</b><small>${p.specs.join(' · ')}</small></span><em>$${p.price}</em></button></li>`).join(''):'<li class="none">No encontramos equipos con esa búsqueda.</li>';
}
document.getElementById('sbtn').addEventListener('click',()=>{sq.value='';sRender();safeOpenDialog(sdlg);sq.focus()});
sq.addEventListener('input',sRender);
sdlg.addEventListener('click',e=>{if(e.target===sdlg||e.target.closest('[data-sclose]'))safeCloseDialog(sdlg);const so=e.target.closest('[data-sopen]');if(so){safeCloseDialog(sdlg);openDlg(so.dataset.sopen)}});

/* ====== formulario de contacto -> WhatsApp ====== */
document.getElementById('cform').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  window.open(wa(`Hola Dr Cell, soy ${f.get('n')}${f.get('t')?` (tel. ${f.get('t')})`:''}.\n${f.get('m')}`),'_blank','noopener');
});

/* ====== animación de secciones ====== */
const slideIO=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('on',e.isIntersecting)),{rootMargin:'-22% 0px -22% 0px',threshold:0});
document.querySelectorAll('.slide').forEach(el=>slideIO.observe(el));

/* ====== bucle de scroll ====== */
const prog=document.querySelector('.prog'),nav=document.getElementById('nav'),root=document.documentElement,hzBar=document.querySelector('.hz-bar');
let ticking=false,lastLit=-1,lastSpy='';
function frame(){
  ticking=false;
  const y=scrollY,vh=innerHeight;
  const total=document.documentElement.scrollHeight-vh;
  prog.style.setProperty('--pg',(total>0?clamp(y/total,0,1):0).toFixed(4));
  nav.classList.toggle('solid',y>60);
  let cur='hero';
  ['hero','tienda','empleo','contacto'].forEach(id=>{const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<=vh*.4)cur=id});
  if(vh+y>=document.documentElement.scrollHeight-4)cur='contacto';
  if(cur!==lastSpy){lastSpy=cur;document.querySelectorAll('[data-spy]').forEach(a=>a.classList.toggle('active',a.dataset.spy===cur))}
  root.style.setProperty('--s',clamp(y/vh,0,1.2).toFixed(3));
  if(rm.matches)return;

  // manifiesto
  const mr=maniEl.getBoundingClientRect();
  const mp=clamp((vh*.88-mr.top)/(vh*.88-vh*.12+mr.height*.4),0,1);
  const lit=Math.floor(mp*(maniWords.length+1));
  if(lit!==lastLit){maniWords.forEach((w,i)=>w.classList.toggle('on',i<lit));lastLit=lit}

  // showcase
  if(!mobileShowcase.matches){
    const r=show.getBoundingClientRect();
    const p=clamp(-r.top/(r.height-vh),0,1);
    bar.style.setProperty('--p',p.toFixed(3));
    pinEl.style.setProperty('--bs',(.8+p*.6).toFixed(3));
    const pos=p*(CATS.length-1)+.5;
    [...vis.children].forEach((el,i)=>{
      const d=pos-(i+.5),a=Math.abs(d);
      el.style.opacity=clamp(1-a*1.5,0,1).toFixed(3);
      el.style.transform=el.classList.contains('phone')?`perspective(900px) translateY(${(-d*20).toFixed(1)}%) rotateY(${(d*95).toFixed(1)}deg) scale(${(1-Math.min(a,1)*.18).toFixed(3)})`:`translateY(${(-d*38).toFixed(1)}%) rotate(${(d*10).toFixed(1)}deg) scale(${(1-Math.min(a,1)*.18).toFixed(3)})`;
    });
    setActive(clamp(Math.floor(pos),0,CATS.length-1));
  }

  // remates horizontal
  const hr=hz.getBoundingClientRect();
  const hp=clamp(-hr.top/Math.max(1,hr.height-vh),0,1);
  hzTrack.style.transform=`translate3d(${(-hp*hzDist).toFixed(1)}px,0,0)`;
  hzBar.style.setProperty('--hp',hp.toFixed(3));

  // línea de tiempo de empleo
  const tr=tl.getBoundingClientRect();
  const tp=clamp((vh*.7-tr.top)/(tr.height),0,1);
  tl.style.setProperty('--tp',tp.toFixed(3));
  steps.forEach(s=>{const sr=s.getBoundingClientRect();s.classList.toggle('on',sr.top<vh*.72)});
}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(frame)}},{passive:true});
addEventListener('resize',()=>{sizeHz();frame()});
addEventListener('load',()=>{sizeHz();frame()});
sizeHz();frame();
