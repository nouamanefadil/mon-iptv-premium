import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { notFoundRoute, routes, site } from "./seo-routes.mjs";

const distDir = path.resolve("dist");
const baseHtml = await readFile(path.join(distDir, "index.html"), "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function routeUrl(routePath) {
  return `${site.domain}${routePath === "/" ? "/" : routePath}`;
}

function schemaTag(schema) {
  if (!schema) return "";
  return `    <script type="application/ld+json" data-schema="page">${JSON.stringify(schema)}</script>\n`;
}

function updateHead(html, route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const robots = route.robots ?? "index, follow, max-image-preview:large";
  const url = routeUrl(route.path);

  let next = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/s, `<meta name="robots" content="${escapeHtml(robots)}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/s, "")
    .replace(/<meta name="twitter:description" content=".*?" \/>/s, "");

  const twitterTags = `    <meta name="twitter:title" content="${title}" />\n    <meta name="twitter:description" content="${description}" />\n`;
  next = next.replace(/    <meta name="twitter:card" content="summary_large_image" \/>\n/, `    <meta name="twitter:card" content="summary_large_image" />\n${twitterTags}`);
  next = next.replace("</head>", `${schemaTag(route.schema)}  </head>`);
  return next;
}

async function writeRoute(route) {
  const html = updateHead(baseHtml, route);
  if (route.path === "/") {
    await writeFile(path.join(distDir, "index.html"), html, "utf8");
    return;
  }
  const routeDir = path.join(distDir, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html, "utf8");
}

for (const route of routes) {
  await writeRoute(route);
}

await writeFile(path.join(distDir, "404.html"), updateHead(baseHtml, notFoundRoute), "utf8");
