export const site = {
  brand: "Mon IPTV Premium",
  domain: "https://moniptvpremium.fr",
  email: "contact@moniptvpremium.fr"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  url: site.domain,
  email: site.email,
  description:
    "Mon IPTV Premium est un site francais qui presente des offres IPTV premium avec packs Basique et Premium, compatibilite multi-appareils et commande via WhatsApp.",
  areaServed: {
    "@type": "Country",
    name: "France"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447988593885",
    contactType: "customer support",
    areaServed: "France",
    availableLanguage: ["fr"]
  }
};

const iptvServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IPTV Premium France",
  serviceType: "Abonnement IPTV premium",
  provider: {
    "@type": "Organization",
    name: site.brand,
    url: site.domain
  },
  areaServed: {
    "@type": "Country",
    name: "France"
  },
  description:
    "Service de presentation et de commande d'offres IPTV premium en France avec packs Basique ou Premium, durees de 1 a 24 mois et options 1, 2 ou 3 appareils.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "9.00",
    highPrice: "399.00",
    offerCount: "30",
    url: `${site.domain}/tarifs`
  }
};

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path}`
    }))
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un IPTV premium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un IPTV premium designe une offre de television par internet orientee qualite, stabilite, compatibilite multi-appareils et accompagnement client."
      }
    },
    {
      "@type": "Question",
      name: "Les prix sont-ils definitifs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les cartes affichent les tarifs Basique et Premium selon la duree choisie et le nombre d'appareils."
      }
    },
    {
      "@type": "Question",
      name: "Comment contacter le service ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez utiliser les boutons Commander ou le bouton WhatsApp flottant pour envoyer directement votre demande."
      }
    }
  ]
};

const abonnementFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un abonnement IPTV premium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un abonnement IPTV premium est une offre de television par internet organisee autour de la stabilite, de la qualite HD ou 4K selon contenu, de la compatibilite multi-appareils et de l'accompagnement client."
      }
    },
    {
      "@type": "Question",
      name: "Quelle difference entre Basique et Premium ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basique vise une experience HD stable avec installation accompagnee. Premium ajoute le confort HD et 4K selon contenu, un anti-freeze avance et un support prioritaire."
      }
    },
    {
      "@type": "Question",
      name: "Quel pack choisir pour un foyer en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un foyer peut commencer par 1 ou 3 mois pour tester, choisir 6 ou 12 mois pour l'equilibre, ou 24 mois pour une utilisation longue duree. Les options 1, 2 ou 3 appareils s'adaptent au nombre d'ecrans."
      }
    }
  ]
};

const sitemapSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Plan du site ${site.brand}`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", url: `${site.domain}/` },
    { "@type": "ListItem", position: 2, name: "Tarifs IPTV Premium", url: `${site.domain}/tarifs` },
    { "@type": "ListItem", position: 3, name: "Abonnement IPTV", url: `${site.domain}/abonnement-iptv` },
    { "@type": "ListItem", position: 4, name: "Contactez-nous", url: `${site.domain}/contactez-nous` },
    { "@type": "ListItem", position: 5, name: "A propos de nous", url: `${site.domain}/a-propos-de-nous` },
    { "@type": "ListItem", position: 6, name: "Blog", url: `${site.domain}/blog` },
    { "@type": "ListItem", position: 7, name: "Mentions legales", url: `${site.domain}/mentions-legales` },
    { "@type": "ListItem", position: 8, name: "Conditions generales", url: `${site.domain}/conditions-generales` },
    { "@type": "ListItem", position: 9, name: "Confidentialite", url: `${site.domain}/confidentialite` }
  ]
};

export const routes = [
  {
    path: "/",
    title: "IPTV Premium France | Abonnement IPTV HD et 4K",
    description:
      "Decouvrez Mon IPTV Premium, une offre IPTV premium en France avec packs flexibles, compatibilite multi-appareils, support client et commande rapide via WhatsApp.",
    schema: [organizationSchema, iptvServiceSchema, faqSchema],
    priority: "1.0"
  },
  {
    path: "/tarifs",
    title: `Tarifs IPTV Premium | ${site.brand}`,
    description:
      "Tarifs IPTV Premium en France: offres Basique et Premium selon la duree et le nombre d'appareils pour Mon IPTV Premium.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Tarifs", path: "/tarifs" }])],
    priority: "0.9"
  },
  {
    path: "/abonnement-iptv",
    title: `Abonnement IPTV Premium France | ${site.brand}`,
    description:
      "Choisissez un abonnement IPTV premium en France avec une experience stable, compatible multi-appareils, packs Basique ou Premium et accompagnement simple.",
    schema: [
      organizationSchema,
      iptvServiceSchema,
      breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Abonnement IPTV", path: "/abonnement-iptv" }]),
      abonnementFaqSchema
    ],
    priority: "0.9"
  },
  {
    path: "/contactez-nous",
    title: `Contactez-nous | ${site.brand}`,
    description: "Contactez Mon IPTV Premium pour une demande d'information, un essai ou une commande via WhatsApp.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Contactez-nous", path: "/contactez-nous" }])],
    priority: "0.7"
  },
  {
    path: "/a-propos-de-nous",
    title: `A propos de nous | ${site.brand}`,
    description: "A propos de Mon IPTV Premium: une marque IPTV premium orientee clarte, design international et experience France.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "A propos", path: "/a-propos-de-nous" }])],
    priority: "0.7"
  },
  {
    path: "/blog",
    title: `Blog IPTV Premium | ${site.brand}`,
    description: "Blog IPTV Premium: guides, conseils et articles pour comprendre l'IPTV premium en France.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Blog", path: "/blog" }])],
    priority: "0.6"
  },
  {
    path: "/mentions-legales",
    title: `Mentions legales | ${site.brand}`,
    description: "Informations legales de Mon IPTV Premium.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Mentions legales", path: "/mentions-legales" }])],
    priority: "0.3"
  },
  {
    path: "/conditions-generales",
    title: `Conditions generales | ${site.brand}`,
    description: "Conditions generales applicables a l'utilisation du site et aux offres Mon IPTV Premium.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Conditions generales", path: "/conditions-generales" }])],
    priority: "0.3"
  },
  {
    path: "/confidentialite",
    title: `Politique de confidentialite | ${site.brand}`,
    description: "Politique de confidentialite expliquant comment Mon IPTV Premium traite les donnees personnelles des visiteurs.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Confidentialite", path: "/confidentialite" }])],
    priority: "0.3"
  },
  {
    path: "/sitemap",
    title: `Plan du site | ${site.brand}`,
    description:
      "Plan du site Mon IPTV Premium: acces rapide aux pages principales, aux offres IPTV, au contact et aux informations legales.",
    schema: [organizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Plan du site", path: "/sitemap" }]), sitemapSchema],
    priority: "0.4"
  }
];

export const notFoundRoute = {
  path: "/404",
  title: `Page introuvable | ${site.brand}`,
  description: "Page introuvable.",
  robots: "noindex, follow",
  schema: [organizationSchema]
};
