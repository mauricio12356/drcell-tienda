/* Movimiento · GSAP + ScrollTrigger + Lenis.
   Los estados iniciales se crean aquí: si algo falla, la página queda visible. Las fotos nunca se recortan: solo se mueven, giran y escalan. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const showNums = () => $$('[data-to]').forEach(b => b.textContent = b.dataset.pre + b.dataset.to + b.dataset.suf);
  if (!window.gsap || !window.ScrollTrigger || matchMedia('(prefers-reduced-motion: reduce)').matches) return showNums();
  gsap.registerPlugin(ScrollTrigger);
  const clamp = gsap.utils.clamp;

  /* ---------- scroll suave y anclas ---------- */
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: .09 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href').length < 2) return;
    const t = $(a.getAttribute('href')); if (!t) return;
    e.preventDefault();
    lenis ? lenis.scrollTo(t, { duration: 1.6 }) : t.scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- texto 3D ---------- */
  function split(el) {
    if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.trim());
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(t => {
          if (!t) return;
          if (!t.trim()) return f.append(' ');
          const w = document.createElement('span'), i = document.createElement('span');
          w.className = 'sw'; w.setAttribute('aria-hidden', 'true'); i.className = 'sw-i'; i.textContent = t; w.append(i); f.append(w);
        });
        c.replaceWith(f);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(el); gsap.set(el, { perspective: 900 });
    return $$('.sw-i', el);
  }
  const from3D = { yPercent: 105, rotateX: -80, z: -140, opacity: 0, transformOrigin: '50% 100% -40px' };

  /* ---------- cabecera, capítulos, progreso ---------- */
  const top = $('#top'), bar = $('#railBar');
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => {
    bar.style.setProperty('--p', s.progress.toFixed(4));
    top.classList.toggle('hide', s.direction === 1 && s.scroll() > 600 && !$('#menu.on'));
  } });
  $$('[data-ch]').forEach((el, i) => ScrollTrigger.create({ trigger: el, start: 'top 50%', end: 'bottom 50%',
    onToggle: s => { if (s.isActive) { $('#railN').textContent = String(i + 1).padStart(2, '0'); $('#railT').textContent = el.dataset.ch; } } }));

  /* ---------- hero ---------- */
  const hero = $('#hero');
  const intro = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } })
    .from(split($('#h1')), { ...from3D, duration: 1.7, stagger: .09 }, 0)
    .from('.kicker,.lead,.cta>*', { y: 30, opacity: 0, duration: 1.1, stagger: .1 }, .3)
    .from('.layer', { y: 120, rotateX: 30, rotateY: -22, scale: .8, opacity: 0, duration: 1.9, stagger: .15 }, .1)
    .from('.ring', { scale: .6, opacity: 0, duration: 2.2, stagger: .2 }, 0)
    .from('.top,.rail,.wa-fab', { opacity: 0, duration: 1.2 }, .7);
  addEventListener('drc:enter', () => intro.play(), { once: true });
  if (!document.body.classList.contains('is-loading')) intro.play();
  setTimeout(() => intro.play(), 9000);
  gsap.to('.layer img', { y: -12, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: .5 });

  const layers = $$('.layer').map(el => {
    const o = { duration: .9, ease: 'power3' }; gsap.set(el, { transformPerspective: 900 });
    return { d: +el.dataset.d, x: gsap.quickTo(el, 'x', o), y: gsap.quickTo(el, 'y', o), ry: gsap.quickTo(el, 'rotationY', o), rx: gsap.quickTo(el, 'rotationX', o) };
  });
  const move = (nx, ny) => layers.forEach(l => { l.x(nx * 70 * l.d); l.y(ny * 50 * l.d); l.ry(nx * 18 * l.d); l.rx(-ny * 14 * l.d); });
  if (fine) {
    hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); move((e.clientX - r.left) / r.width - .5, (e.clientY - r.top) / r.height - .5); });
    hero.addEventListener('pointerleave', () => move(0, 0));
  } else addEventListener('deviceorientation', e => { if (e.gamma != null) move(clamp(-.5, .5, e.gamma / 28), clamp(-.5, .5, (e.beta - 50) / 45)); });
  gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }, defaults: { ease: 'none' } })
    .to('.hero-copy', { y: -80, opacity: .1 }, 0).to('#stage', { y: -60, scale: 1.1 }, 0);

  /* ---------- manifiesto: las palabras se encienden con el scroll ---------- */
  const words = split($('#mani'));
  words.forEach(w => { if (['accesible', 'garantizados', 'laboratorio.'].includes(w.textContent.toLowerCase())) w.classList.add('hot'); });
  gsap.fromTo(words, { opacity: .14 }, { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: '#mani', start: 'top 80%', end: 'bottom 50%', scrub: true } });

  /* ---------- proceso: la foto cambia con un giro 3D (escritorio) ---------- */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const imgs = $$('#prSticky .ph');
    gsap.set(imgs, { opacity: 0, rotateY: -40, scale: .92, transformPerspective: 1000 });
    let cur = -1;
    const show = i => { if (i === cur) return; const old = imgs[cur]; cur = i;
      if (old) gsap.to(old, { opacity: 0, rotateY: 40, scale: .92, duration: .8, ease: 'power3.inOut' });
      gsap.to(imgs[i], { opacity: 1, rotateY: 0, scale: 1, duration: 1, ease: 'expo.out' }); };
    $$('.pr-step').forEach((s, i) => ScrollTrigger.create({ trigger: s, start: 'top 60%', end: 'bottom 60%', onToggle: t => t.isActive && show(i) }));
  });
  $$('.pr-step .ph').forEach(p => gsap.from(p, { y: 50, rotateX: 14, scale: .94, opacity: 0, transformPerspective: 900, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: p, start: 'top 90%', once: true } }));
  $$('.pr-step h3').forEach(h => gsap.from(split(h), { ...from3D, duration: 1.2, stagger: .06, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%', once: true } }));

  /* ---------- cifras ---------- */
  gsap.from('.stat', { y: 60, opacity: 0, rotateX: -25, transformPerspective: 800, stagger: .12, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.nums-grid', start: 'top 85%', once: true } });
  $$('.stat b').forEach(b => { const o = { v: 0 };
    ScrollTrigger.create({ trigger: b, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: +b.dataset.to, duration: 2, ease: 'power3.out', onUpdate: () => b.textContent = b.dataset.pre + Math.round(o.v) + b.dataset.suf }) }); });

  /* ---------- fotos: entran en 3D, sin recortes ---------- */
  const enterPh = els => { els = els.filter(e => !e.dataset.r); els.forEach(e => e.dataset.r = 1);
    gsap.set(els, { opacity: 0, y: 60, rotateX: 14, scale: .94, transformPerspective: 900 });
    ScrollTrigger.batch(els, { start: 'top 95%', once: true, onEnter: b => gsap.to(b, { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.1, ease: 'expo.out', stagger: .08 }) }); };
  enterPh($$('.cc,.rc,.pc'));
  addEventListener('drc:render', () => { enterPh($$('.pc')); ScrollTrigger.refresh(); });
  gsap.from('.q', { y: 70, opacity: 0, rotateX: 14, transformPerspective: 900, stagger: .12, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '#voices', start: 'top 90%', once: true } });

  /* ---------- empleo ---------- */
  const steps = $('#steps');
  ScrollTrigger.create({ trigger: steps, start: 'top 70%', end: 'bottom 70%', scrub: true, onUpdate: s => steps.style.setProperty('--tp', s.progress.toFixed(3)) });
  $$('li', steps).forEach(li => ScrollTrigger.create({ trigger: li, start: 'top 72%', toggleClass: { targets: li, className: 'on' } }));

  /* ---------- títulos y textos ---------- */
  $$('[data-split]').forEach(el => gsap.from(split(el), { ...from3D, duration: 1.3, ease: 'expo.out', stagger: .055, scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  $$('[data-reveal]').forEach(el => gsap.from(el, { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));

  /* ---------- reacción al ratón ---------- */
  if (fine) {
    document.addEventListener('pointermove', e => {
      const m = e.target.closest && e.target.closest('.ph'); if (!m) return;
      const r = m.getBoundingClientRect();
      m.style.setProperty('--ry', (((e.clientX - r.left) / r.width - .5) * 12).toFixed(1) + 'deg');
      m.style.setProperty('--rx', (-((e.clientY - r.top) / r.height - .5) * 10).toFixed(1) + 'deg');
    });
    document.addEventListener('pointerout', e => { const m = e.target.closest && e.target.closest('.ph'); if (m && !m.contains(e.relatedTarget)) { m.style.removeProperty('--rx'); m.style.removeProperty('--ry'); } });
    $$('.mag').forEach(b => { const o = { duration: .5, ease: 'power3' }, x = gsap.quickTo(b, 'x', o), y = gsap.quickTo(b, 'y', o);
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * .3); y((e.clientY - r.top - r.height / 2) * .4); });
      b.addEventListener('pointerleave', () => { x(0); y(0); }); });
  }

  ScrollTrigger.sort();
  addEventListener('load', () => ScrollTrigger.refresh());
})();
