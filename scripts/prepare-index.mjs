import { writeFile } from "node:fs/promises";

const sourceIndex = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IPTV Premium France | Abonnement IPTV HD et 4K</title>
    <meta name="description" content="Decouvrez Mon IPTV Premium, une offre IPTV premium en France avec packs flexibles, compatibilite multi-appareils, support client et commande rapide via WhatsApp." />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="https://moniptvpremium.fr/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="IPTV Premium France | Abonnement IPTV HD et 4K" />
    <meta property="og:description" content="Decouvrez Mon IPTV Premium, une offre IPTV premium en France avec packs flexibles, compatibilite multi-appareils, support client et commande rapide via WhatsApp." />
    <meta property="og:url" content="https://moniptvpremium.fr/" />
    <meta property="og:site_name" content="Mon IPTV Premium" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#081a3a" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <script type="module" src="/src/main.tsx"></script>
    <style>
      .static-fallback {
        box-sizing: border-box;
        max-width: 920px;
        margin: 0 auto;
        padding: 72px 24px;
        color: #eef4ff;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6;
      }
      .static-fallback * { box-sizing: border-box; }
      .static-fallback-body { min-height: 100vh; margin: 0; background: #07142c; }
      .static-fallback-kicker { color: #ff4565; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
      .static-fallback h1 { max-width: 760px; margin: 12px 0 18px; font-size: clamp(38px, 7vw, 68px); line-height: 1.02; }
      .static-fallback p { max-width: 720px; color: #c2cce0; font-size: 18px; }
      .static-fallback-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 32px 0; }
      .static-fallback-card { padding: 18px; border: 1px solid rgba(238, 244, 255, .2); border-radius: 12px; background: #10264b; }
      .static-fallback-card strong { display: block; font-size: 18px; }
      .static-fallback-card span { color: #c2cce0; }
      .static-fallback-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
      .static-fallback a { display: inline-block; padding: 12px 18px; border: 1px solid rgba(238, 244, 255, .28); border-radius: 8px; color: #fff; font-weight: 700; text-decoration: none; }
      .static-fallback a:first-child { border-color: #ff4565; background: #f23858; }
    </style>
  </head>
  <body class="static-fallback-body">
    <div id="root">
      <main class="static-fallback">
        <span class="static-fallback-kicker">IPTV premium en France</span>
        <h1>Mon IPTV Premium</h1>
        <p>
          Decouvrez des offres IPTV premium avec packs Basique et Premium, options pour 1, 2 ou 3 appareils,
          et durees de 1 a 24 mois.
        </p>
        <div class="static-fallback-grid">
          <div class="static-fallback-card"><strong>HD et 4K</strong><span>Selon le contenu et l'appareil compatible.</span></div>
          <div class="static-fallback-card"><strong>Multi-appareils</strong><span>Smart TV, mobile, tablette et ordinateur.</span></div>
          <div class="static-fallback-card"><strong>Commande simple</strong><span>Choisissez votre pack puis contactez-nous.</span></div>
        </div>
        <div class="static-fallback-actions">
          <a href="/tarifs">Voir les tarifs</a>
          <a href="/abonnement-iptv">Abonnement IPTV</a>
          <a href="/contactez-nous">Contactez-nous</a>
        </div>
      </main>
    </div>
  </body>
</html>
`;

await writeFile("index.html", sourceIndex, "utf8");
