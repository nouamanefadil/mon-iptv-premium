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
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

await writeFile("index.html", sourceIndex, "utf8");
