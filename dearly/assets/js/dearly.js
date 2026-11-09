const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rustig=matchMedia('(prefers-reduced-motion: reduce)').matches;
// menu
$('.menu-knop')?.addEventListener('click',e=>{const t=$('.top');t.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',t.classList.contains('open'))});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('zicht');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
// zwevende foto's bewegen mee met scroll en muis (Think)
const zw=$$('.zweef');let mx=0,my=0;
addEventListener('mousemove',e=>{mx=(e.clientX/innerWidth-.5);my=(e.clientY/innerHeight-.5)});
function loop(){const y=scrollY;zw.forEach((el,i)=>{const d=(i%2?1:-1)*(10+i*4);el.style.transform=`translate(${mx*d}px,${my*d - y*(.08+i*.03)}px)`});requestAnimationFrame(loop)}
if(zw.length&&!rustig)loop();
// onthul-tekst woord voor woord
$$('.onthul').forEach(el=>{
  const delen=[];el.childNodes.forEach(n=>{if(n.nodeType===3){n.textContent.split(/(\s+)/).forEach(t=>delen.push(t.trim()?`<span class="w">${t}</span>`:t))}else{n.classList.add('w');delen.push(n.outerHTML)}});
  el.innerHTML=delen.join('');const ws=$$('.w',el);
  const upd=()=>{const r=el.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.35)));const n=Math.round(p*ws.length);ws.forEach((w,i)=>w.classList.toggle('aan',i<n))};
  if(rustig)ws.forEach(w=>w.classList.add('aan'));else{addEventListener('scroll',upd,{passive:true});upd()}
});
// Vraag het Dearly
$$('.chat').forEach(chat=>{const out=$('.antwoord .tekst',chat);$$('button',chat).forEach(b=>b.addEventListener('click',()=>{
  $$('button',chat).forEach(x=>x.setAttribute('aria-pressed',x===b));const t=b.dataset.a;out.textContent='';let i=0;
  if(rustig){out.textContent=t;return}const tik=setInterval(()=>{out.textContent=t.slice(0,i+=3);if(i>=t.length)clearInterval(tik)},14)}))});
