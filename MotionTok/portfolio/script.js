const observer = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => { if (isIntersecting) target.classList.add('visible'); }), { threshold: 0.1 });
document.querySelectorAll('.section, .hero > *').forEach((element, index) => { element.style.transitionDelay = `${(index % 3) * 90}ms`; observer.observe(element); });

const heroName = document.querySelector('.hero h1');
if (heroName) {
  const typingStyle = document.createElement('style');
  typingStyle.textContent = '.hero h1{flex-direction:row;align-items:baseline!important;justify-content:center;white-space:nowrap}.typing-name{color:var(--orange);white-space:nowrap}.typing-cursor{display:inline-block;width:.055em;height:.72em;margin-left:.07em;background:currentColor;animation:typing-blink .85s step-end infinite}@keyframes typing-blink{50%{opacity:0}}@media(max-width:720px){.hero h1{font-size:17vw!important}}';
  document.head.append(typingStyle);
  const name = 'CHO HEEJU';
  heroName.setAttribute('aria-label', name);
  heroName.innerHTML = '<span class="typing-name"></span><i class="typing-cursor" aria-hidden="true"></i>';
  const nameTarget = heroName.querySelector('.typing-name');
  let letter = 0;
  const typeName = () => { nameTarget.textContent = name.slice(0, letter++); if (letter <= name.length) window.setTimeout(typeName, 150); };
  window.setTimeout(typeName, 520);
}
