document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  btn.addEventListener('click', ()=> {
    if(!nav) return;
    nav.classList.toggle('open');
    if(nav.classList.contains('open')) nav.style.display = 'block';
    else nav.style.display = '';
  });

  // reveal sections on scroll
  const sections = document.querySelectorAll('section, .site-footer, .top-panel');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  sections.forEach(s => obs.observe(s));

  // Smooth anchor scrolling for nav
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if(href.length > 1){
        ev.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
