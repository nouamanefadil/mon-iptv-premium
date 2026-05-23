import { siteConfig } from "../data/site";

type SeoInput = {
  title?: string;
  description: string;
  path?: string;
  schema?: object | object[];
};

export function setSeo({ title, description, path = "/", schema }: SeoInput) {
  const pageTitle = title ?? `${siteConfig.seoTitle} | ${siteConfig.brand}`;
  document.title = pageTitle;
  setMeta("description", description);
  setMeta("robots", "index, follow, max-image-preview:large");
  setLink("canonical", `${siteConfig.domain}${path === "/" ? "/" : path}`);
  setProperty("og:type", "website");
  setProperty("og:title", pageTitle);
  setProperty("og:description", description);
  setProperty("og:url", `${siteConfig.domain}${path === "/" ? "/" : path}`);
  setProperty("og:site_name", siteConfig.brand);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", pageTitle);
  setMeta("twitter:description", description);
  setSchema(schema);
}

function setMeta(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.append(tag);
  }
  tag.content = content;
}

function setProperty(property: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.append(tag);
  }
  tag.content = content;
}

function setLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    document.head.append(tag);
  }
  tag.href = href;
}

function setSchema(schema?: object | object[]) {
  document.querySelectorAll('script[data-schema="page"]').forEach((node) => node.remove());
  if (!schema) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.schema = "page";
  script.text = JSON.stringify(schema);
  document.head.append(script);
}

export const baseOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brand,
  url: siteConfig.domain,
  email: siteConfig.email,
  description:
    "Mon IPTV Premium est un site francais qui presente des offres IPTV premium avec packs Basique et Premium, compatibilite multi-appareils et commande via WhatsApp.",
  areaServed: {
    "@type": "Country",
    name: siteConfig.country
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.whatsapp,
    contactType: "customer support",
    areaServed: siteConfig.country,
    availableLanguage: ["fr"]
  }
};

export const iptvServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IPTV Premium France",
  serviceType: "Abonnement IPTV premium",
  provider: {
    "@type": "Organization",
    name: siteConfig.brand,
    url: siteConfig.domain
  },
  areaServed: {
    "@type": "Country",
    name: siteConfig.country
  },
  description:
    "Service de presentation et de commande d'offres IPTV premium en France avec packs Basique ou Premium, durees de 1 a 24 mois et options 1, 2 ou 3 appareils.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "9.00",
    highPrice: "399.00",
    offerCount: "30",
    url: `${siteConfig.domain}/tarifs`
  }
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`
    }))
  };
}
