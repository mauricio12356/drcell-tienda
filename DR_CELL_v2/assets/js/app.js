/* Interfaz: carga, menú, catálogo, remates, cifras, tienda y clientes */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = v => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ask = p => wa(`Hola Dr Cell, quiero información de: ${p.name} (${p.specs.join(', ')}) a $${p.price}.`);
  $$('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; });

  /* ---------- carga con porcentaje ---------- */
  const loader = $('#loader'), ldN = $('#ldN'), ldBar = $('#ldBar'), ldEnter = $('#ldEnter');
  let entered = false, loaded = false;
  const enter = () => {
    if (entered) return; entered = true;
    loader.classList.add('done'); document.body.classList.remove('is-loading');
    setTimeout(() => dispatchEvent(new Event('drc:enter')), 450);
  };
  Promise.race([
    Promise.all([document.fonts ? document.fonts.ready : 0, new Promise(r => document.readyState === 'complete' ? r() : addEventListener('load', r))]),
    new Promise(r => setTimeout(r, 4500))
  ]).then(() => loaded = true);
  const t0 = performance.now();
  (function tick() {
    const k = Math.min(1, (performance.now() - t0) / 1800), v = loaded ? k : Math.min(k, .9);
    ldN.textContent = String(Math.round(v * 100)).padStart(2, '0');
    ldBar.style.transform = `scaleX(${v})`;
    if (v < 1) return requestAnimationFrame(tick);
    ldEnter.classList.add('on'); setTimeout(enter, 800);
  })();
  ldEnter.onclick = enter;

  /* ---------- menú ---------- */
  const mb = $('#menuBtn'), menu = $('#menu');
  const setMenu = on => { mb.setAttribute('aria-expanded', on); menu.classList.toggle('on', on); menu.setAttribute('aria-hidden', !on); document.body.style.overflow = on ? 'hidden' : ''; };
  mb.onclick = () => setMenu(!menu.classList.contains('on'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

  /* ---------- categorías ---------- */
  const CATS = [
    { k: 'laptop', l: 'Laptops', i: 'cut-hp-ryzen5-pro', t: 'Dell, HP EliteBook, Lenovo y Chromebook para estudio y trabajo.' },
    { k: 'mac', l: 'Mac', i: 'macbook-i9', t: 'MacBook e iMac con la potencia para trabajar sin límites.' },
    { k: 'ipad', l: 'iPad', i: 'cut-ipad-7', t: 'Clases, lectura, videos y juegos. Desde $50.' },
    { k: 'iphone', l: 'iPhone', i: 'iphone-14-128', t: 'Con garantía y factura. Batería al 100% en equipos seleccionados.' }
  ];
  $('#catGrid').innerHTML = CATS.map((c, n) => {
    const l = P.filter(p => p.cat === c.k);
    return `<a class="cc" href="#tienda" data-filter="${c.k}"><figure class="ph"><img src="${img(c.i)}" alt="${c.l}" loading="lazy"></figure><div class="cc-t"><h3>${c.l}</h3><span>0${n + 1}</span></div><p>${c.t}</p><b>Desde $${Math.min(...l.map(p => p.price))} · ${l.length} equipos →</b></a>`;
  }).join('');

  /* ---------- remates y cifras ---------- */
  $('#remRow').innerHTML = [...P].sort((x, y) => x.price - y.price).slice(0, 10).map(p => `<article class="rc"><figure class="ph"><img src="${img(p.id)}" alt="${esc(p.name)}" loading="lazy"></figure><h3>${esc(p.name)}</h3><p class="rc-s">${p.specs.map(esc).join(' · ')}</p><div class="rc-b"><b>$${p.price}</b><a href="${ask(p)}" target="_blank" rel="noopener">Pedir</a></div></article>`).join('');
  $('#nums').innerHTML = [
    [P.length, '', '', 'equipos disponibles'], [50, '$', '', 'es el precio de entrada, un iPad mini'],
    [6, '', '', 'meses de garantía en modelos seleccionados'], [100, '', '%', 'de nuestros clientes satisfechos']
  ].map(s => `<div class="stat"><b data-to="${s[0]}" data-pre="${s[1]}" data-suf="${s[2]}">${s[1]}0${s[2]}</b><span>${s[3]}</span></div>`).join('');

  /* ---------- tienda ---------- */
  const grid = $('#grid'), chips = $('#chips'), count = $('#count');
  let filter = 'all';
  [{ k: 'all', l: 'Todo' }, ...CATS.map(c => ({ k: c.k, l: c.l }))].forEach(f => {
    const b = document.createElement('button');
    b.className = 'chip'; b.type = 'button'; b.textContent = f.l; b.dataset.k = f.k;
    b.onclick = () => { filter = f.k; render(); };
    chips.append(b);
  });
  function render() {
    const list = P.filter(p => filter === 'all' || p.cat === filter);
    $$('.chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === filter));
    count.textContent = `${list.length} de ${P.length} equipos`;
    grid.innerHTML = list.map(p => `<article class="pc"><div class="pc-m">${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ''}<figure class="ph"><img src="${img(p.id)}" alt="${esc(p.name)}" loading="lazy" decoding="async"></figure></div><h3>${esc(p.name)}</h3><p class="pc-s">${p.specs.map(esc).join(' · ')}</p><div class="pc-b"><b>$${p.price}</b><a href="${ask(p)}" target="_blank" rel="noopener" aria-label="Pedir ${esc(p.name)} por WhatsApp">Pedir</a></div></article>`).join('');
    dispatchEvent(new Event('drc:render'));
  }
  document.addEventListener('click', e => { const f = e.target.closest('[data-filter]'); if (f) { filter = f.dataset.filter; render(); } });
  render();

  /* ---------- flechas de las filas ---------- */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-row]'); if (!b) return;
    const r = $('#' + b.dataset.row); r.scrollBy({ left: +b.dataset.dir * r.clientWidth * .7, behavior: 'smooth' });
  });

  /* ---------- clientes y opiniones ---------- */
  $('#strip').innerHTML = [
    ['Compró una iPad Air de $50', 1], ['Compró una iPad 6 de $120', 2], ['Compró una laptop de $60', 3],
    ['Compró una laptop de $75', 4], ['Compró un iPhone 12', 5], ['Compró un iPhone 12', 6]
  ].map(c => `<figure class="rc cl"><div class="ph p34"><img src="${img('cliente-feliz-' + c[1])}" alt="${c[0]}" loading="lazy"></div><figcaption>${c[0]}</figcaption></figure>`).join('');
  $('#voices').innerHTML = [
    ['La experiencia de compra fue excelente de principio a fin. Me asesoraron de manera clara y profesional.', 'María Fernanda · iPad'],
    ['Comprar la iMac de 27 pulgadas fue una excelente decisión. Proceso claro, rápido y muy confiable.', 'Cristhian Moreira · iMac'],
    ['Encontrar esta laptop Dell a un precio accesible fue una gran ayuda. Mi hijo ya no va al ciber.', 'Pablo Chiquito · Laptop Dell']
  ].map(v => `<figure class="q"><p>“${v[0]}”</p><span>${v[1]}</span></figure>`).join('');
})();
