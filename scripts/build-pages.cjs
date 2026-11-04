// Génère une vraie page HTML par projet (titre, description, partage, contenu lisible
// sans JavaScript) ainsi que sitemap.xml et la liste des projets pour Google.
// À relancer après toute modification de index.html ou assets/js/app.js : node scripts/build-pages.cjs
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, ".."), BASE = "https://luka-stojanovic.ch", TODAY = new Date().toISOString().slice(0, 10);
const file = path.join(ROOT, "index.html");
let home = fs.readFileSync(file, "utf8");
const crlf = home.includes("\r\n");
home = home.replace(/\r\n/g, "\n");

const app = fs.readFileSync(path.join(ROOT, "assets", "js", "app.js"), "utf8").replace(/\r\n/g, "\n");
const src = app.match(/const PROJECTS = (\[[\s\S]*?\n\]);\n/);
if (!src) throw new Error("PROJECTS introuvable");
const PROJECTS = new Function("return " + src[1])();
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const url = p => `${BASE}/projets/${p.id}/`;

// liste des projets sur l'accueil
const list = {
  "@context": "https://schema.org", "@type": "ItemList", name: "Projets de Luka Stojanovic",
  itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: url(p), name: p.title.fr }))
};
home = home.replace(/<script type="application\/ld\+json" id="ld-list">[\s\S]*?<\/script>/, `<script type="application/ld+json" id="ld-list">${JSON.stringify(list)}</script>`);
fs.writeFileSync(file, crlf ? home.replace(/\n/g, "\r\n") : home);

const swap = (html, re, value) => { if (!re.test(html)) throw new Error("balise absente : " + re); return html.replace(re, value); };
PROJECTS.forEach(p => {
  const { t, d } = p.seo.fr, img = `${BASE}/assets/img/og/${p.id}.jpg`;
  if (t.length > 62) console.warn("titre long :", p.id, t.length);
  if (d.length > 158) console.warn("description longue :", p.id, d.length);
  let h = home;
  h = swap(h, /<title>[^<]*<\/title>/, `<title>${esc(t)}</title>`);
  h = swap(h, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(d)}">`);
  h = swap(h, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url(p)}">\n<link rel="preload" as="image" href="/${p.cover}" fetchpriority="high">`);
  h = swap(h, /<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="article">');
  h = swap(h, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(t)}">`);
  h = swap(h, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(d)}">`);
  h = swap(h, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url(p)}">`);
  h = swap(h, /<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${img}">`);
  h = swap(h, /<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${esc(t)}">`);
  h = swap(h, /<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${esc(d)}">`);
  h = swap(h, /<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${img}">`);
  const ld = [
    { "@context": "https://schema.org", "@type": "CreativeWork", name: p.title.fr, headline: p.title.fr, description: d, url: url(p), image: img, dateCreated: p.year, inLanguage: "fr", creator: { "@type": "Person", name: "Luka Stojanovic", url: BASE + "/" }, keywords: p.tags.fr.join(", ") },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" }, { "@type": "ListItem", position: 2, name: "Projets", item: BASE + "/#travaux" }, { "@type": "ListItem", position: 3, name: p.title.fr, item: url(p) }] }
  ];
  h = swap(h, /<script type="application\/ld\+json" id="ld-list">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  h = h.replace("<body>", '<body class="route-detail">');
  h = swap(h, /(<article class="detail wrap" id="detail" aria-live="polite">)(<\/article>)/, `$1
  <a class="back" href="/#travaux" data-go="work"><span class="ar">←</span> Tous les projets</a>
  <h1>${esc(p.title.fr)}</h1>
  <p class="d-lead">${esc(p.lead.fr)}</p>
  <div class="d-meta"><div class="cell"><div class="k">Rôle</div><div class="v">${esc(p.role.fr)}</div></div><div class="cell"><div class="k">Année</div><div class="v">${p.year}</div></div><div class="cell"><div class="k">Cadre</div><div class="v">${esc(p.client.fr)}</div></div><div class="cell"><div class="k">Catégorie</div><div class="v">${esc(p.catLabel.fr)}</div></div></div>
  <div class="d-cover"><img src="/${p.cover}" alt="${esc(p.title.fr)}" fetchpriority="high"></div>
  <div class="d-body"><div class="ctx"><h2>Contexte</h2><p>${esc(p.context.fr)}</p></div>
  <div><h2>Ce que j'ai fait</h2><ul class="d-list">${p.did.fr.map(x => `<li><span class="tx">${esc(x)}</span></li>`).join("")}</ul></div></div>
$2`);
  const dir = path.join(ROOT, "projets", p.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h);
});

const urls = [BASE + "/", ...PROJECTS.map(url)];
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>`).join("\n")}
</urlset>
`);
console.log("ok :", PROJECTS.length, "pages projet, sitemap", urls.length, "adresses");
