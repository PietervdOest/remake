// alleen voor headless screenshots: ?vh=900 zet de viewporthoogte vast
const _vh=new URLSearchParams(location.search).get('vh');if(_vh){document.documentElement.style.setProperty('--vh',(_vh/100)+'px');document.documentElement.classList.add('shot');}
// filters (begeleiders, kennisbank)
document.querySelectorAll('.filters').forEach(f => {
  const doel = document.querySelector(f.dataset.doel);
  const knoppen = [...f.querySelectorAll('button')];
  knoppen.forEach(b => b.addEventListener('click', () => {
    knoppen.forEach(x => x.setAttribute('aria-pressed', x === b));
    const v = b.dataset.f;
    doel.querySelectorAll('[data-tag]').forEach(el => {
      el.hidden = !(v === 'alle' || el.dataset.tag.split(' ').includes(v));
    });
  }));
});
// demo-agenda (alleen prototype; wordt HubSpot Meetings)
document.querySelectorAll('.slots, .tijden').forEach(g => {
  const knoppen = [...g.querySelectorAll('button')];
  knoppen.forEach(b => b.addEventListener('click', () => knoppen.forEach(x => x.setAttribute('aria-pressed', x === b))));
});
