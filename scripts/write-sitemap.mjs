import { writeFile } from "node:fs/promises";
import { routes, site } from "./seo-routes.mjs";

const lastmod = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${site.domain}${route.path === "/" ? "/" : route.path}`;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><priority>${route.priority}</priority></url>`;
  })
  .join("\n")}
</urlset>
`;

await writeFile("public/sitemap.xml", xml, "utf8");
await writeFile("sitemap.xml", xml, "utf8");
