import {
  BadgeCheck,
  CircleHelp,
  Clapperboard,
  Clock,
  Globe2,
  Headphones,
  MonitorSmartphone,
  ShieldCheck,
  Signal,
  Sparkles,
  Tv,
  Zap
} from "lucide-react";

export const siteConfig = {
  brand: "Mon IPTV Premium",
  domain: "https://moniptvpremium.fr",
  seoTitle: "IPTV Premium",
  keyword: "iptv premium",
  country: "France",
  ctaPlaceholder: "#contactez-nous",
  whatsapp: "+447988593885",
  email: "contact@moniptvpremium.fr"
};

export function getWhatsAppUrl(message: string) {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Abonnement IPTV", href: "/abonnement-iptv" },
  { label: "A propos", href: "/a-propos-de-nous" },
  { label: "Contact", href: "/contactez-nous" }
];

export const stats = [
  { value: "HD/4K", label: "Qualite image" },
  { value: "24/7", label: "Assistance prevue" },
  { value: "Multi", label: "Appareils" },
  { value: "FR", label: "Experience France" }
];

export const features = [
  {
    icon: Tv,
    title: "Experience TV premium",
    text: "Une interface claire pour presenter vos offres IPTV premium avec un positionnement haut de gamme et credible."
  },
  {
    icon: Signal,
    title: "Lecture fluide",
    text: "Une promesse axee sur la stabilite, la qualite HD/4K et une experience simple pour les foyers en France."
  },
  {
    icon: MonitorSmartphone,
    title: "Tous vos ecrans",
    text: "Smart TV, mobile, tablette, ordinateur et box connectee: les sections restent generiques et sans marque protegee."
  },
  {
    icon: Headphones,
    title: "Support rassurant",
    text: "Un parcours qui met en avant l'accompagnement, les conseils d'installation et la reactivite du service."
  },
  {
    icon: ShieldCheck,
    title: "Presentation fiable",
    text: "Des messages sobres, sans promesses irrealisables, pour inspirer confiance avant l'achat."
  },
  {
    icon: Sparkles,
    title: "Design international",
    text: "Royal Red, Luxury Blue, mouvement 3D subtil et finitions premium pour sortir du style IPTV banal."
  }
];

export const categories = [
  { title: "Sport", text: "Evenements, competitions et emissions sportives dans une experience fluide.", tone: "red" },
  { title: "Cinema", text: "Films, nouveautes et classiques presentes sans affiche ni marque protegee.", tone: "blue" },
  { title: "Series", text: "Bibliotheque organisee pour profiter de vos programmes favoris sur tous vos ecrans.", tone: "violet" },
  { title: "Famille", text: "Selections jeunesse, documentaires et contenus generalistes pour le foyer.", tone: "cyan" }
];

export const deviceOptions = [
  { value: 1, label: "1 appareil" },
  { value: 2, label: "2 appareils" },
  { value: 3, label: "3 appareils" }
];

export const qualityOptions = [
  {
    value: "basique",
    label: "Basique",
    description: "HD stable",
    features: ["Acces IPTV basique", "Qualite HD selon contenu", "Installation accompagnee", "Support client"]
  },
  {
    value: "premium",
    label: "Premium",
    description: "HD et 4K",
    features: ["Acces IPTV premium", "HD et 4K selon contenu", "Anti-freeze avance", "Support prioritaire"]
  }
];

export const pricingPlans = [
  {
    name: "Pack 1 mois",
    duration: "1 mois",
    price: "Prix bientot",
    badge: "Flexible",
    note: "Ideal pour tester",
    highlighted: false
  },
  {
    name: "Pack 3 mois",
    duration: "3 mois",
    price: "Prix bientot",
    badge: "Confort",
    note: "Engagement court",
    highlighted: false
  },
  {
    name: "Pack 6 mois",
    duration: "6 mois",
    price: "Prix bientot",
    badge: "Avantage",
    note: "Bon equilibre",
    highlighted: false
  },
  {
    name: "Pack 12 mois",
    duration: "12 mois",
    price: "Prix bientot",
    badge: "Populaire",
    note: "Meilleur choix",
    highlighted: true
  },
  {
    name: "Pack 24 mois",
    duration: "24 mois",
    price: "Prix bientot",
    badge: "Maxi economie",
    note: "Longue duree",
    highlighted: false
  }
];

export const steps = [
  { icon: CircleHelp, title: "Choisir l'offre", text: "Comparez les durees et options depuis la page Tarifs." },
  { icon: Clock, title: "Recevoir les informations", text: "Les details de contact seront ajoutes quand WhatsApp sera finalise." },
  { icon: Zap, title: "Installer simplement", text: "Suivez les consignes d'installation sur votre appareil compatible." }
];

export const faqs = [
  {
    question: "Qu'est-ce qu'un IPTV premium ?",
    answer:
      "Un IPTV premium designe une offre de television par internet orientee qualite, stabilite, compatibilite multi-appareils et accompagnement client."
  },
  {
    question: "Les prix sont-ils definitifs ?",
    answer:
      "Non. Les cartes de prix sont des placeholders pour la premiere version. Les montants finaux seront ajoutes plus tard dans le fichier de configuration."
  },
  {
    question: "Le site utilise-t-il des marques protegees ?",
    answer:
      "Non. Le contenu reste volontairement generique: sport, cinema, series, famille, actualites et international, sans logos ni noms de plateformes."
  },
  {
    question: "Comment contacter le service ?",
    answer:
      "La page Contact affiche un formulaire visuel et des CTA temporaires. Le lien WhatsApp sera branche quand le numero sera fourni."
  }
];

export const devices = ["Smart TV", "Mobile", "Tablette", "Ordinateur", "Box TV", "Navigateur"];

export const blogPosts = [
  {
    title: "Comment choisir un IPTV premium en France",
    excerpt: "Les criteres essentiels: stabilite, qualite, compatibilite, support et transparence.",
    tag: "Guide"
  },
  {
    title: "Installer une application IPTV sur vos appareils",
    excerpt: "Un futur guide simple pour comprendre les etapes sans vocabulaire technique inutile.",
    tag: "Installation"
  },
  {
    title: "Qualite HD et 4K: ce qui compte vraiment",
    excerpt: "Debit internet, appareil compatible et serveur stable: les bases d'une bonne experience.",
    tag: "Qualite"
  }
];

export const trustBullets = [
  "Site pense pour le marche francais",
  "Design original sans actifs copies",
  "Structure SEO prete pour moniptvpremium.fr",
  "Prix et WhatsApp modifiables plus tard"
];

export const aboutValues = [
  { icon: BadgeCheck, title: "Clarte", text: "Une presentation simple des offres et des limites, sans jargon inutile." },
  { icon: Globe2, title: "Ouverture", text: "Une experience adaptee aux usages modernes et aux appareils du quotidien." },
  { icon: Clapperboard, title: "Confort", text: "Une navigation premium pour trouver vite les informations importantes." }
];
