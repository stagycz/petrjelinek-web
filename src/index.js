const HTML = `<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Petr Jelínek — Fotograf Praha</title>
<meta name="description" content="Profesionální fotograf Praha. Firemní reportáže, business portréty, sport, akce, produktová fotografie. Vlastní ateliér Boleslavova 17, Praha 4.">
<style>
  :root{--gold:#C8A96E;--dark:#0d0d0d;--dark2:#181818;--dark3:#232323;--text:#e8e8e8;--muted:#888}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:var(--dark);color:var(--text);font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;overflow-x:hidden}
  nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.4rem 3rem;background:linear-gradient(to bottom,rgba(13,13,13,.95),transparent);transition:background .3s}
  nav.scrolled{background:rgba(13,13,13,.97)}
  .nav-logo{font-size:.8rem;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);text-decoration:none;font-weight:500}
  .nav-logo span{display:block;font-size:1.15rem;letter-spacing:.08em;color:var(--text)}
  .nav-links{display:flex;gap:2.2rem;list-style:none}
  .nav-links a{color:var(--muted);text-decoration:none;font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;transition:color .2s}
  .nav-links a:hover{color:var(--gold)}
  .nav-cta{border:1px solid var(--gold);color:var(--gold);padding:.5rem 1.4rem;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;transition:background .2s,color .2s}
  .nav-cta:hover{background:var(--gold);color:var(--dark)}
  .hero{height:100vh;min-height:640px;display:flex;align-items:flex-end;justify-content:flex-start;padding:0 3rem 5rem;position:relative;overflow:hidden;background:var(--dark2)}
  .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#1a1a1a 0%,#0a0a0a 60%)}
  .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:80px 80px}
  .hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(13,13,13,.85) 0%,rgba(13,13,13,.2) 60%,transparent 100%)}
  .hero-content{position:relative;max-width:620px}
  .hero-eyebrow{font-size:.72rem;letter-spacing:.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem}
  .hero-title{font-size:clamp(2.8rem,5vw,4.5rem);font-weight:300;line-height:1.1;letter-spacing:-.02em;margin-bottom:1.4rem}
  .hero-title strong{font-weight:700;display:block}
  .hero-sub{font-size:1rem;color:var(--muted);max-width:440px;line-height:1.7;margin-bottom:2.2rem}
  .hero-actions{display:flex;gap:1.2rem;align-items:center}
  .btn-primary{background:var(--gold);color:var(--dark);padding:.85rem 2.2rem;font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;font-weight:600;transition:opacity .2s}
  .btn-primary:hover{opacity:.85}
  .btn-ghost{color:var(--text);font-size:.78rem;letter-spacing:.15em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid var(--muted);padding-bottom:2px;transition:color .2s,border-color .2s}
  .btn-ghost:hover{color:var(--gold);border-color:var(--gold)}
  .hero-scroll{position:absolute;bottom:2rem;right:3rem;display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)}
  .hero-scroll::after{content:'';width:1px;height:50px;background:var(--muted);animation:sl 1.5s ease infinite}
  @keyframes sl{0%,100%{opacity:.3}50%{opacity:1}}
  section{padding:6rem 3rem}
  .section-label{font-size:.68rem;letter-spacing:.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
  .section-title{font-size:clamp(2rem,3.5vw,3rem);font-weight:300;line-height:1.15;margin-bottom:1.5rem}
  .section-title strong{font-weight:700}
  .section-desc{color:var(--muted);max-width:540px;line-height:1.8}
  #sluzby{background:var(--dark)}
  .services-header{margin-bottom:4rem}
  .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#2a2a2a}
  .service-card{background:var(--dark2);padding:2.4rem 2rem;transition:background .25s;position:relative;overflow:hidden}
  .service-card:hover{background:var(--dark3)}
  .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .3s}
  .service-card:hover::before{transform:scaleX(1)}
  .service-icon{font-size:1.6rem;margin-bottom:1.2rem;display:block}
  .service-name{font-size:1.05rem;font-weight:600;margin-bottom:.6rem;letter-spacing:.03em}
  .service-text{font-size:.88rem;color:var(--muted);line-height:1.75}
  .service-tag{display:inline-block;margin-top:1rem;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(200,169,110,.3);padding:.2rem .6rem}
  #galerie{background:var(--dark2);padding:5rem 0}
  .gallery-header{padding:0 3rem;margin-bottom:3rem}
  .gallery-strip{display:flex;gap:1px;overflow-x:auto;scrollbar-width:none}
  .gallery-strip::-webkit-scrollbar{display:none}
  .gallery-item{flex:0 0 320px;height:420px;position:relative;overflow:hidden;cursor:pointer;background:var(--dark3)}
  .gallery-ph{width:100%;height:100%;background:linear-gradient(135deg,#1c1c1c,#111);display:flex;align-items:center;justify-content:center;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:#444}
  .gallery-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.75) 0%,transparent 50%);opacity:0;transition:opacity .3s;display:flex;align-items:flex-end;padding:1.5rem}
  .gallery-item:hover .gallery-ov{opacity:1}
  .gallery-lbl{font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}
  .gallery-note{padding:2rem 3rem 0;font-size:.8rem;color:#555}
  #o-mne{background:var(--dark)}
  .about-inner{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
  .about-photo{aspect-ratio:3/4;background:var(--dark3);display:flex;align-items:center;justify-content:center;font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#444;position:relative}
  .about-photo::after{content:'';position:absolute;bottom:-16px;right:-16px;width:60%;height:60%;border:1px solid rgba(200,169,110,.25);z-index:-1}
  .about-facts{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:2.5rem}
  .fact-num{font-size:2.2rem;font-weight:700;color:var(--gold);line-height:1}
  .fact-label{font-size:.78rem;color:var(--muted);margin-top:.2rem}
  .about-loc{margin-top:2rem;padding:1.2rem 1.5rem;border-left:2px solid var(--gold);background:var(--dark2);font-size:.88rem;color:var(--muted)}
  .about-loc strong{color:var(--text);display:block;margin-bottom:.2rem}
  #workshopy{background:var(--dark2)}
  .workshops-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:3.5rem;background:#2a2a2a}
  .workshop-card{background:var(--dark2);padding:2.5rem;transition:background .25s}
  .workshop-card:hover{background:var(--dark3)}
  .workshop-type{font-size:.68rem;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
  .workshop-title{font-size:1.3rem;font-weight:600;margin-bottom:.8rem}
  .workshop-text{font-size:.88rem;color:var(--muted);line-height:1.75}
  #cta{background:var(--gold);color:var(--dark);padding:5rem 3rem;text-align:center}
  #cta h2{font-size:clamp(1.8rem,3vw,2.8rem);font-weight:300;margin-bottom:.8rem}
  #cta h2 strong{font-weight:700}
  #cta p{color:rgba(0,0,0,.6);max-width:480px;margin:0 auto 2rem}
  .btn-dark{display:inline-block;background:var(--dark);color:var(--gold);padding:.85rem 2.5rem;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;font-weight:600;transition:opacity .2s}
  .btn-dark:hover{opacity:.85}
  #kontakt{background:var(--dark)}
  .contact-inner{display:grid;grid-template-columns:1fr 1.4fr;gap:5rem}
  .contact-detail{margin-bottom:1.2rem;font-size:.9rem}
  .contact-detail span{display:block;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:.2rem}
  .contact-form{display:flex;flex-direction:column;gap:1rem}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  .form-field{display:flex;flex-direction:column;gap:.4rem}
  .form-field label{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)}
  .form-field input,.form-field textarea,.form-field select{background:var(--dark2);border:1px solid #2a2a2a;color:var(--text);padding:.75rem 1rem;font-size:.9rem;font-family:inherit;transition:border-color .2s;outline:none;resize:none}
  .form-field input:focus,.form-field textarea:focus,.form-field select:focus{border-color:var(--gold)}
  .form-field textarea{min-height:120px}
  .form-field select option{background:var(--dark2)}
  .form-submit{background:var(--gold);color:var(--dark);border:none;padding:.9rem 2rem;font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;cursor:pointer;align-self:flex-start;transition:opacity .2s}
  .form-submit:hover{opacity:.85}
  footer{background:#080808;padding:2rem 3rem;display:flex;justify-content:space-between;align-items:center;font-size:.72rem;color:#444;letter-spacing:.1em}
  footer a{color:#555;text-decoration:none}
  footer a:hover{color:var(--gold)}
  @media(max-width:900px){
    nav{padding:1rem 1.5rem}
    .nav-links{display:none}
    section{padding:4rem 1.5rem}
    .services-grid{grid-template-columns:1fr}
    .about-inner{grid-template-columns:1fr;gap:3rem}
    .workshops-grid{grid-template-columns:1fr}
    .contact-inner{grid-template-columns:1fr;gap:3rem}
    .form-row{grid-template-columns:1fr}
    .hero{padding:0 1.5rem 4rem}
    footer{flex-direction:column;gap:1rem;text-align:center}
  }
</style>
</head>
<body>

<nav id="nav">
  <a href="#" class="nav-logo">Petr Jelínek<span>Fotograf</span></a>
  <ul class="nav-links">
    <li><a href="#sluzby">Služby</a></li>
    <li><a href="#galerie">Galerie</a></li>
    <li><a href="#o-mne">O mně</a></li>
    <li><a href="#workshopy">Workshopy</a></li>
    <li><a href="#kontakt">Kontakt</a></li>
  </ul>
  <a href="#kontakt" class="nav-cta">Poptávka</a>
</nav>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Profesionální fotografie · Praha</p>
    <h1 class="hero-title">Vizuální příběhy,<strong>které prodávají.</strong></h1>
    <p class="hero-sub">Firemní reportáže, portréty, sport, produkty a akce. Vlastní ateliér na Praze 4. Fotím kdekoliv.</p>
    <div class="hero-actions">
      <a href="#kontakt" class="btn-primary">Nezávazná poptávka</a>
      <a href="#galerie" class="btn-ghost">Prohlédnout galerii</a>
    </div>
  </div>
  <div class="hero-scroll">scroll</div>
</section>

<section id="sluzby">
  <div class="services-header">
    <p class="section-label">Co fotím</p>
    <h2 class="section-title">Komplexní fotografické<br><strong>služby pro firmy</strong></h2>
    <p class="section-desc">Od business portrétů po velké firemní akce — dodávám konzistentní, profesionální vizuál, který firma může okamžitě použít.</p>
  </div>
  <div class="services-grid">
    <div class="service-card">
      <span class="service-icon">📸</span>
      <div class="service-name">Firemní reportáže</div>
      <p class="service-text">Autentický pohled dovnitř vaší firmy. Dokumentuji pracovní prostředí, výrobu, týmový život a firemní kulturu pro PR, web a interní komunikaci.</p>
      <span class="service-tag">B2B</span>
    </div>
    <div class="service-card">
      <span class="service-icon">🎯</span>
      <div class="service-name">Business portréty</div>
      <p class="service-text">Portréty pro management, LinkedIn, výroční zprávy a média. Na místě i v ateliéru — konsistentní styl pro celý tým.</p>
      <span class="service-tag">Ateliér i on-site</span>
    </div>
    <div class="service-card">
      <span class="service-icon">🏆</span>
      <div class="service-name">Sport & akce</div>
      <p class="service-text">Dynamické snímky ze sportovních událostí, firemních závodů a team-buildingů. Zachytím rozhodující moment.</p>
      <span class="service-tag">Události</span>
    </div>
    <div class="service-card">
      <span class="service-icon">🎪</span>
      <div class="service-name">Firemní akce & konference</div>
      <p class="service-text">Konference, gala večery, prezentace, veletrhy. Diskrétní pokrytí celé akce s rychlým dodáním pro tiskové účely.</p>
      <span class="service-tag">Events</span>
    </div>
    <div class="service-card">
      <span class="service-icon">📦</span>
      <div class="service-name">Produktová fotografie</div>
      <p class="service-text">Profesionální produktové snímky pro e-shop, katalogy a reklamu. Čisté pozadí nebo lifestyle zasazení do kontextu.</p>
      <span class="service-tag">E-commerce</span>
    </div>
    <div class="service-card">
      <span class="service-icon">🎨</span>
      <div class="service-name">Ateliér Boleslavova 17</div>
      <p class="service-text">Vlastní profesionální studio na Praze 4. K dispozici pro portréty, produkty i menší projekty. Možnost pronájmu.</p>
      <span class="service-tag">Praha 4</span>
    </div>
  </div>
</section>

<section id="galerie">
  <div class="gallery-header">
    <p class="section-label">Ukázky práce</p>
    <h2 class="section-title">Galerie</h2>
  </div>
  <div class="gallery-strip">
    <div class="gallery-item"><div class="gallery-ph">Reportáž</div><div class="gallery-ov"><span class="gallery-lbl">Firemní reportáž</span></div></div>
    <div class="gallery-item"><div class="gallery-ph">Portrét</div><div class="gallery-ov"><span class="gallery-lbl">Business portrét</span></div></div>
    <div class="gallery-item"><div class="gallery-ph">Sport</div><div class="gallery-ov"><span class="gallery-lbl">Sport</span></div></div>
    <div class="gallery-item"><div class="gallery-ph">Akce</div><div class="gallery-ov"><span class="gallery-lbl">Firemní akce</span></div></div>
    <div class="gallery-item"><div class="gallery-ph">Produkt</div><div class="gallery-ov"><span class="gallery-lbl">Produkty</span></div></div>
    <div class="gallery-item"><div class="gallery-ph">Ateliér</div><div class="gallery-ov"><span class="gallery-lbl">Ateliér</span></div></div>
  </div>
  <p class="gallery-note">← přetáhnout pro více · Vaše fotky budou doplněny po dodání</p>
</section>

<section id="o-mne">
  <div class="about-inner">
    <div class="about-photo">[ vaše foto ]</div>
    <div class="about-text">
      <p class="section-label">O fotografovi</p>
      <h2 class="section-title">Petr Jelínek —<br><strong>Praha & okolý</strong></h2>
      <p class="section-desc">Fotografuji firemní svět s důrazem na autenticitu a vizuální kvalitu. Pracuji s firmami, které chápou, že profesionální fotografie není náklad, ale investice do jejich značky.</p>
      <p class="section-desc" style="margin-top:1rem">Fotím reportáže, portréty, sport, firemní akce i produkty. Vlastní ateliér v Praze 4, ale fotím kdekoliv — v celé �CR i zahraničí.</p>
      <div class="about-facts">
        <div><div class="fact-num">10+</div><div class="fact-label">let zkušeností</div></div>
        <div><div class="fact-num">100+</div><div class="fact-label">spokojených klientů</div></div>
        <div><div class="fact-num">24h</div><div class="fact-label">express dodání</div></div>
        <div><div class="fact-num">&#8734;</div><div class="fact-label">fotografuji kdekoliv</div></div>
      </div>
      <div class="about-loc"><strong>Ateliér: Boleslavova 17, Praha 4</strong>Vlastní profesionální studio — dostupné pro focení i pronájem</div>
    </div>
  </div>
</section>

<section id="workshopy">
  <p class="section-label">Vzdělávání</p>
  <h2 class="section-title">Workshopy &<br><strong>fotoexpedice</strong></h2>
  <p class="section-desc">Předávám zkušenosti z komerční i reportážní fotografie. Kurzy pro začátečníky i pokročilé.</p>
  <div class="workshops-grid">
    <div class="workshop-card">
      <div class="workshop-type">Workshop</div>
      <div class="workshop-title">Základy komerční fotografie</div>
      <p class="workshop-text">Praktický jednodenní kurz. Naučíte se fotografovat pro B2B — portréty, reportáže a produkty s profesionálním výsledkem.</p>
    </div>
    <div class="workshop-card">
      <div class="workshop-type">Workshop</div>
      <div class="workshop-title">Business portrét od A do Z</div>
      <p class="workshop-text">Focení lidí v komerčním prostředí. Světlo, kompozice, práce s modelem. Přímo v ateliéru na Boleslavově 17.</p>
    </div>
    <div class="workshop-card">
      <div class="workshop-type">Fotoexpedice</div>
      <div class="workshop-title">Městská reportáž</div>
      <p class="workshop-text">Skupinová výprava Prahou s fotoaparátem. Okamžik, světlo a příběh v ulicích. Vhodné pro všechny úrovně.</p>
    </div>
    <div class="workshop-card">
      <div class="workshop-type">Fotoexpedice</div>
      <div class="workshop-title">Příroda & krajina</div>
      <p class="workshop-text">Víkendové fotoexpedice do přírody. Krajinná fotografie, zlatá hodinka, kompozice v terénu. Termíny průběžně.</p>
    </div>
  </div>
</section>

<section id="cta">
  <h2>Potřebujete <strong>profesionálního fotografa?</strong></h2>
  <p>Napište mi a domluvíme se na detailech. Odpovídám do 24 hodin.</p>
  <a href="#kontakt" class="btn-dark">Napsat zprávu</a>
</section>

<section id="kontakt">
  <div class="contact-inner">
    <div>
      <p class="section-label">Kontakt</p>
      <h2 class="section-title" style="font-size:1.8rem">Spojte se<br><strong>se mnou</strong></h2>
      <div class="contact-detail"><span>E-mail</span>info@petrjelinek.cz</div>
      <div class="contact-detail"><span>Telefon</span>+420 xxx xxx xxx</div>
      <div class="contact-detail"><span>Ateliér</span>Boleslavova 17, Praha 4</div>
      <div class="contact-detail"><span>Dostupnost</span>Praha & celá ČR · Zahraničí dle dohody</div>
    </div>
    <form class="contact-form" onsubmit="handleForm(event)">
      <div class="form-row">
        <div class="form-field"><label>Jméno</label><input type="text" name="name" placeholder="Jan Novák" required></div>
        <div class="form-field"><label>E-mail</label><input type="email" name="email" placeholder="jan@firma.cz" required></div>
      </div>
      <div class="form-row">
        <div class="form-field"><label>Firma</label><input type="text" name="company" placeholder="Název firmy"></div>
        <div class="form-field">
          <label>Typ zakázky</label>
          <select name="type">
            <option value="">— Vyberte —</option>
            <option>Firemní reportáž</option>
            <option>Business portréty</option>
            <option>Sport & akce</option>
            <option>Firemní akce / konference</option>
            <option>Produktová fotografie</option>
            <option>Workshop</option>
            <option>Fotoexpedice</option>
            <option>Jiné</option>
          </select>
        </div>
      </div>
      <div class="form-field"><label>Zpráva</label><textarea name="message" placeholder="Popište váš projekt — termín, místo, co potřebujete..." required></textarea></div>
      <button class="form-submit" type="submit">Odeslat poptávku &#8594;</button>
      <div id="form-msg" style="display:none;padding:.8rem 1rem;font-size:.85rem"></div>
    </form>
  </div>
</section>

<footer>
  <div>&#169; 2026 Petr Jelínek · Fotograf Praha</div>
  <div>
    <a href="mailto:info@petrjelinek.cz">info@petrjelinek.cz</a>
    &nbsp;&#183;&nbsp;
    <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a>
    &nbsp;&#183;&nbsp;
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
  </div>
</footer>

<script>
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50));

async function handleForm(e){
  e.preventDefault();
  const btn=e.target.querySelector('.form-submit');
  const msg=document.getElementById('form-msg');
  btn.disabled=true;btn.textContent='Odesílám...';
  const data=Object.fromEntries(new FormData(e.target));
  try{
    const r=await fetch('/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    if(r.ok){
      msg.style.display='block';msg.style.color='var(--gold)';
      msg.textContent='Zpráva odeslána! Ozvu se do 24 hodin.';
      e.target.reset();
    }else throw new Error();
  }catch{
    msg.style.display='block';msg.style.color='#e05555';
    msg.textContent='Chyba při odesílání. Napište přímo na info@petrjelinek.cz';
  }
  btn.disabled=false;btn.textContent='Odeslat poptávku →';
}
</script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Contact form handler (POST /contact)
    if (url.pathname === '/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        // Simple validation
        if (!body.name || !body.email || !body.message) {
          return new Response('Missing fields', { status: 400 });
        }
        // TODO: send email via EmailJS / Resend / Mailchannels
        // For now just acknowledge
        return new Response(JSON.stringify({ ok: true }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch {
        return new Response('Bad request', { status: 400 });
      }
    }

    // Serve main page
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      }
    });
  },
};
