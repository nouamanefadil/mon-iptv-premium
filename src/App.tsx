import { Layout } from "./components/Layout";
import { SeoEffect } from "./components/SeoEffect";
import {
  CategoryShowcase,
  ContactPanel,
  DevicesSection,
  FAQSection,
  FeatureGrid,
  FinalCTA,
  Hero,
  PricingPreview,
  RevealRoot,
  SectionHeading,
  StatsBand,
  StepsSection,
  TrustSection
} from "./components/Sections";
import { aboutValues, blogPosts, faqs, siteConfig } from "./data/site";
import { baseOrganizationSchema, breadcrumbSchema } from "./lib/seo";

const descriptions = {
  home: "IPTV Premium en France avec une experience moderne, compatible multi-appareils et un design international pour Mon IPTV Premium.",
  tarifs: "Tarifs IPTV Premium en France: offres Basique et Premium selon la duree et le nombre d'appareils pour Mon IPTV Premium.",
  abonnement:
    "Abonnement IPTV premium en France: decouvrez les criteres de qualite, compatibilite, support et installation pour choisir une offre claire.",
  contact: "Contactez Mon IPTV Premium pour une demande d'information ou un essai. WhatsApp et tarifs seront ajoutes prochainement.",
  about: "A propos de Mon IPTV Premium: une marque IPTV premium orientee clarte, design international et experience France.",
  blog: "Blog IPTV Premium: guides, conseils et articles pour comprendre l'IPTV premium en France.",
  legal: "Informations legales de Mon IPTV Premium.",
  sitemap: "Plan du site Mon IPTV Premium: acces rapide aux pages principales, aux offres IPTV, au contact et aux informations legales."
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  return (
    <Layout>
      <RevealRoot>
        {path === "/" && <HomePage />}
        {path === "/tarifs" && <TarifsPage />}
        {path === "/abonnement-iptv" && <AbonnementPage />}
        {path === "/contactez-nous" && <ContactPage />}
        {path === "/a-propos-de-nous" && <AboutPage />}
        {path === "/blog" && <BlogPage />}
        {path === "/mentions-legales" && <LegalPage type="mentions" />}
        {path === "/conditions-generales" && <LegalPage type="conditions" />}
        {path === "/confidentialite" && <LegalPage type="confidentialite" />}
        {path === "/sitemap" && <SitemapPage />}
        {!knownPaths.includes(path) && <NotFoundPage />}
      </RevealRoot>
    </Layout>
  );
}

const knownPaths = [
  "/",
  "/tarifs",
  "/abonnement-iptv",
  "/contactez-nous",
  "/a-propos-de-nous",
  "/blog",
  "/mentions-legales",
  "/conditions-generales",
  "/confidentialite",
  "/sitemap"
];

const sitemapGroups = [
  {
    title: "Pages principales",
    text: "Les entrees essentielles du site pour decouvrir la marque, les offres et le contact.",
    links: [
      { label: "Accueil", href: "/", note: "Presentation premium et acces rapide aux offres" },
      { label: "Tarifs IPTV Premium", href: "/tarifs", note: "Packs Basique et Premium par duree et appareil" },
      { label: "Abonnement IPTV", href: "/abonnement-iptv", note: "Page SEO dediee a l'intention abonnement IPTV" },
      { label: "Contactez-nous", href: "/contactez-nous", note: "Formulaire visuel et lien WhatsApp" }
    ]
  },
  {
    title: "Confiance et contenu",
    text: "Pages utiles pour comprendre le positionnement, les conseils et la transparence du service.",
    links: [
      { label: "A propos de nous", href: "/a-propos-de-nous", note: "Valeurs, compatibilite et experience France" },
      { label: "Blog", href: "/blog", note: "Guides et articles autour de l'IPTV premium" }
    ]
  },
  {
    title: "Pages legales",
    text: "Informations administratives et conditions de consultation du site.",
    links: [
      { label: "Mentions legales", href: "/mentions-legales", note: "Editeur, hebergement et responsabilite" },
      { label: "Conditions generales", href: "/conditions-generales", note: "Offres, commande, support et utilisation" },
      { label: "Confidentialite", href: "/confidentialite", note: "Donnees, cookies, droits et securite" }
    ]
  }
];

function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <SeoEffect title={siteConfig.seoTitle} description={descriptions.home} path="/" schema={[baseOrganizationSchema, faqSchema]} />
      <Hero />
      <StatsBand />
      <FeatureGrid />
      <CategoryShowcase />
      <PricingPreview />
      <StepsSection />
      <DevicesSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function TarifsPage() {
  return (
    <>
      <SeoEffect
        title={`Tarifs IPTV Premium | ${siteConfig.brand}`}
        description={descriptions.tarifs}
        path="/tarifs"
        schema={[baseOrganizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Tarifs", path: "/tarifs" }])]}
      />
      <PageHero eyebrow="Tarifs" title="Tarifs IPTV Premium" text="Comparez les offres Basique et Premium selon la duree choisie et le nombre d'appareils a connecter." />
      <PricingPreview full />
      <section className="section section-muted">
        <SectionHeading eyebrow="Comparaison" title="Ce qui sera inclus dans chaque offre" />
        <div className="compare-box reveal">
          <div>Qualite HD/4K selon contenus</div>
          <div>Compatibilite multi-appareils</div>
          <div>Conseils d'installation</div>
          <div>Support client configure plus tard</div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}

function AbonnementPage() {
  return (
    <>
      <SeoEffect
        title={`Abonnement IPTV Premium France | ${siteConfig.brand}`}
        description={descriptions.abonnement}
        path="/abonnement-iptv"
        schema={[baseOrganizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Abonnement IPTV", path: "/abonnement-iptv" }])]}
      />
      <PageHero
        eyebrow="Abonnement IPTV"
        title="Abonnement IPTV premium pour la France"
        text="Une page SEO dediee a l'intention abonnement IPTV, avec un discours clair, premium et sans references de marques protegees."
      />
      <section className="section article-section">
        <div className="article-copy reveal">
          <h2>Comment choisir un IPTV premium ?</h2>
          <p>
            Un service IPTV premium doit presenter une experience stable, une compatibilite large,
            une qualite d'image adaptee a votre connexion et un accompagnement simple au moment de
            l'installation. Cette page met en avant ces criteres sans utiliser d'actifs proteges.
          </p>
          <p>
            Pour le marche francais, la confiance vient aussi de la clarte: informations visibles,
            pages legales, tarifs explicites et contact facilement accessible.
          </p>
        </div>
        <TrustSection />
      </section>
      <FeatureGrid />
      <StepsSection />
      <FinalCTA />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <SeoEffect
        title={`Contactez-nous | ${siteConfig.brand}`}
        description={descriptions.contact}
        path="/contactez-nous"
        schema={[baseOrganizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Contactez-nous", path: "/contactez-nous" }])]}
      />
      <ContactPanel />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <SeoEffect
        title={`A propos de nous | ${siteConfig.brand}`}
        description={descriptions.about}
        path="/a-propos-de-nous"
        schema={[baseOrganizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "A propos", path: "/a-propos-de-nous" }])]}
      />
      <PageHero
        eyebrow="A propos"
        title="Une marque IPTV premium pensee pour inspirer confiance"
        text="Mon IPTV Premium met l'accent sur la clarte, la qualite de presentation et une experience adaptee au public francais."
      />
      <section className="section">
        <div className="grid features-grid">
          {aboutValues.map((value) => (
            <article className="feature-card reveal" key={value.title}>
              <value.icon />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
      <DevicesSection />
      <FinalCTA />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <SeoEffect
        title={`Blog IPTV Premium | ${siteConfig.brand}`}
        description={descriptions.blog}
        path="/blog"
        schema={[baseOrganizationSchema, breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />
      <PageHero eyebrow="Blog" title="Guides IPTV Premium" text="Une base editoriale prete pour publier des articles SEO autour de l'IPTV premium en France." />
      <section className="section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card reveal" key={post.title}>
              <span>{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function SitemapPage() {
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Plan du site ${siteConfig.brand}`,
    itemListElement: sitemapGroups.flatMap((group) =>
      group.links.map((link, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: link.label,
        url: `${siteConfig.domain}${link.href}`
      }))
    )
  };

  return (
    <>
      <SeoEffect
        title={`Plan du site | ${siteConfig.brand}`}
        description={descriptions.sitemap}
        path="/sitemap"
        schema={[
          baseOrganizationSchema,
          breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Plan du site", path: "/sitemap" }]),
          sitemapSchema
        ]}
      />
      <PageHero
        eyebrow="Sitemap"
        title="Plan du site"
        text="Toutes les pages importantes de Mon IPTV Premium sont regroupees ici pour naviguer vite et verifier la structure du site."
      />
      <section className="section sitemap-section">
        <div className="sitemap-grid">
          {sitemapGroups.map((group) => (
            <article className="sitemap-card reveal" key={group.title}>
              <div className="sitemap-card-head">
                <span>{group.links.length}</span>
                <div>
                  <h2>{group.title}</h2>
                  <p>{group.text}</p>
                </div>
              </div>
              <div className="sitemap-link-list">
                {group.links.map((link) => (
                  <a href={link.href} key={link.href}>
                    <strong>{link.label}</strong>
                    <span>{link.note}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="sitemap-xml reveal">
          <div>
            <span className="eyebrow">SEO</span>
            <h2>Sitemap XML technique</h2>
            <p>
              Pour Google et les moteurs de recherche, le fichier XML reste disponible separement.
            </p>
          </div>
          <a className="btn btn-secondary" href="/sitemap.xml">
            Lire sitemap.xml
          </a>
        </div>
      </section>
    </>
  );
}

function LegalPage({ type }: { type: "mentions" | "conditions" | "confidentialite" }) {
  const content = {
    mentions: {
      path: "/mentions-legales",
      title: "Mentions legales",
      intro: "Informations legales relatives au site moniptvpremium.fr et a son editeur.",
      sections: [
        {
          heading: "Editeur du site",
          paragraphs: [
            "Le site moniptvpremium.fr est edite par Mon IPTV Premium.",
            "Responsable de publication : a completer.",
            "Adresse : a completer.",
            "Email de contact : contact@moniptvpremium.fr."
          ]
        },
        {
          heading: "Hebergement",
          paragraphs: [
            "Hebergeur du site : a completer selon la plateforme de deploiement retenue.",
            "Adresse de l'hebergeur : a completer avant la mise en production."
          ]
        },
        {
          heading: "Activite du site",
          paragraphs: [
            "Mon IPTV Premium presente des offres d'abonnement IPTV destinees aux utilisateurs situes en France.",
            "Les informations affichees sur le site ont pour objectif de presenter les services, les compatibilites, les tarifs et les moyens de contact disponibles.",
            "Les prix, coordonnees commerciales et modalites definitives devront etre verifies avant toute publication commerciale."
          ]
        },
        {
          heading: "Propriete intellectuelle",
          paragraphs: [
            "L'ensemble des textes, interfaces, elements graphiques, animations, logos originaux et composants visuels presents sur le site sont la propriete de Mon IPTV Premium ou font l'objet d'une autorisation d'utilisation.",
            "Toute reproduction, representation, modification, adaptation ou exploitation totale ou partielle du site sans autorisation ecrite prealable est interdite.",
            "Le site n'utilise pas volontairement de logos, marques, affiches, noms de plateformes ou contenus appartenant a des tiers proteges."
          ]
        },
        {
          heading: "Responsabilite",
          paragraphs: [
            "Mon IPTV Premium s'efforce de fournir des informations exactes et mises a jour, mais ne garantit pas l'absence totale d'erreur ou d'omission.",
            "L'utilisateur reste responsable du choix de son offre, de la compatibilite de ses appareils, de la qualite de sa connexion internet et du respect des lois applicables dans son pays.",
            "Mon IPTV Premium ne saurait etre tenu responsable d'une interruption liee a un fournisseur d'acces internet, a une mauvaise configuration d'appareil, a une maintenance technique ou a un cas de force majeure."
          ]
        },
        {
          heading: "Contact",
          paragraphs: [
            "Pour toute question relative au site ou aux informations legales, vous pouvez ecrire a contact@moniptvpremium.fr.",
            "Les coordonnees WhatsApp et les informations administratives definitives seront ajoutees lorsque celles-ci seront confirmees."
          ]
        }
      ]
    },
    conditions: {
      path: "/conditions-generales",
      title: "Conditions generales",
      intro: "Conditions generales applicables a l'utilisation du site et a la presentation des offres Mon IPTV Premium.",
      sections: [
        {
          heading: "Objet",
          paragraphs: [
            "Les presentes conditions generales definissent les regles applicables a l'utilisation du site moniptvpremium.fr et aux demandes relatives aux offres IPTV presentees par Mon IPTV Premium.",
            "Toute commande ou demande d'information implique l'acceptation des presentes conditions, sous reserve des informations contractuelles definitives communiquees au client avant validation."
          ]
        },
        {
          heading: "Offres et disponibilite",
          paragraphs: [
            "Les offres presentees peuvent inclure differents packs selon la duree, le nombre d'appareils et le niveau de service Basique ou Premium.",
            "Les tarifs affiches sur le site sont organises par duree, nombre d'appareils et niveau de service afin de faciliter la comparaison avant commande.",
            "Mon IPTV Premium peut modifier ses offres, ses prix, ses caracteristiques et ses conditions commerciales a tout moment avant la validation d'une commande."
          ]
        },
        {
          heading: "Commande",
          paragraphs: [
            "La commande s'effectuera via le moyen de contact ou de paiement indique sur le site lorsque celui-ci sera finalise.",
            "Le client devra fournir des informations exactes afin de permettre le traitement de sa demande, notamment le type d'offre choisi, la duree, le nombre d'appareils et les informations de contact necessaires.",
            "Une commande n'est consideree comme definitive qu'apres confirmation du paiement et validation explicite par Mon IPTV Premium."
          ]
        },
        {
          heading: "Paiement",
          paragraphs: [
            "Les moyens de paiement acceptes seront indiques sur le site ou communiques au client avant validation.",
            "Mon IPTV Premium ne collecte pas de donnees bancaires directement sur la version actuelle du site.",
            "Si un prestataire de paiement externe est utilise, ses propres conditions et politiques de confidentialite s'appliqueront."
          ]
        },
        {
          heading: "Activation et utilisation",
          paragraphs: [
            "Les delais d'activation seront communiques au client lors de la commande.",
            "Le client est responsable de disposer d'une connexion internet suffisante, d'un appareil compatible et d'une application ou configuration adaptee.",
            "L'acces fourni est strictement personnel et ne doit pas etre revendu, partage publiquement ou utilise de maniere abusive."
          ]
        },
        {
          heading: "Support",
          paragraphs: [
            "Le support client accompagne le client dans la configuration et l'utilisation du service selon les moyens de contact disponibles.",
            "Les horaires, delais de reponse et niveaux de support pourront varier selon l'offre Basique ou Premium."
          ]
        },
        {
          heading: "Remboursement et reclamations",
          paragraphs: [
            "Les conditions de remboursement definitives devront etre precisees avant la mise en vente.",
            "Sauf mention contraire, les services numeriques actives rapidement peuvent etre limites en remboursement une fois l'acces fourni et utilise.",
            "Toute reclamation doit etre adressee a contact@moniptvpremium.fr avec les informations permettant d'identifier la commande et le probleme rencontre."
          ]
        },
        {
          heading: "Responsabilite du client",
          paragraphs: [
            "Le client s'engage a utiliser le service conformement aux lois applicables et aux instructions communiquees.",
            "Mon IPTV Premium ne peut etre tenu responsable d'une mauvaise utilisation, d'un appareil incompatible, d'une connexion instable ou d'un blocage provenant d'un tiers."
          ]
        },
        {
          heading: "Droit applicable",
          paragraphs: [
            "Les presentes conditions sont redigees pour une activite ciblee sur le marche francais.",
            "Les informations juridiques definitives devront etre confirmees par l'editeur du site avant publication commerciale."
          ]
        }
      ]
    },
    confidentialite: {
      path: "/confidentialite",
      title: "Politique de confidentialite",
      intro: "Politique de confidentialite expliquant comment Mon IPTV Premium traite les donnees personnelles des visiteurs.",
      sections: [
        {
          heading: "Responsable du traitement",
          paragraphs: [
            "Le responsable du traitement est Mon IPTV Premium.",
            "Contact : contact@moniptvpremium.fr.",
            "Les informations administratives completes du responsable devront etre ajoutees avant la publication commerciale."
          ]
        },
        {
          heading: "Donnees collectees",
          paragraphs: [
            "Dans sa version actuelle, le site ne transmet pas le formulaire de contact a une API et ne stocke pas automatiquement les donnees client dans un tableau de bord.",
            "Lorsque les moyens de contact seront actives, Mon IPTV Premium pourra collecter les informations communiquees volontairement par l'utilisateur : nom, telephone, email, message, offre souhaitee, nombre d'appareils et duree du pack.",
            "Des donnees techniques standards peuvent etre traitees par l'hebergeur ou les outils de securite : adresse IP, type de navigateur, pages consultees, date et heure de consultation."
          ]
        },
        {
          heading: "Finalites du traitement",
          paragraphs: [
            "Les donnees peuvent etre utilisees pour repondre aux demandes de contact, preparer une commande, assurer le support client, gerer une reclamation et ameliorer le site.",
            "Les donnees ne sont pas vendues a des tiers.",
            "Aucune prise de decision automatisee produisant des effets juridiques n'est prevue dans la version actuelle du site."
          ]
        },
        {
          heading: "Base legale",
          paragraphs: [
            "Le traitement peut etre fonde sur l'execution de mesures precontractuelles lorsque l'utilisateur demande une information ou une offre.",
            "Il peut egalement etre fonde sur l'interet legitime de Mon IPTV Premium pour assurer la securite du site, repondre aux demandes et conserver une preuve des echanges.",
            "Lorsque des cookies non essentiels ou des outils analytiques seront ajoutes, le consentement de l'utilisateur devra etre recueilli lorsque la loi l'exige."
          ]
        },
        {
          heading: "Duree de conservation",
          paragraphs: [
            "Les donnees de contact seront conservees pendant la duree necessaire au traitement de la demande puis archivees selon les obligations applicables.",
            "Les donnees liees a une commande pourront etre conservees le temps necessaire a la gestion commerciale, au support, a la comptabilite et a la preuve des transactions.",
            "Les durees definitives devront etre ajustees selon les outils reellement utilises."
          ]
        },
        {
          heading: "Destinataires",
          paragraphs: [
            "Les donnees peuvent etre accessibles aux personnes chargees du traitement des demandes et du support client.",
            "Des prestataires techniques peuvent intervenir pour l'hebergement, la securite, la messagerie, le paiement ou les outils de contact, dans la limite de leur mission.",
            "Si un service tiers comme WhatsApp, un prestataire de paiement ou un outil d'analyse est utilise, ses propres conditions peuvent s'appliquer."
          ]
        },
        {
          heading: "Cookies",
          paragraphs: [
            "La version actuelle du site peut utiliser le stockage local du navigateur pour memoriser le choix du theme clair ou sombre.",
            "Ce stockage sert uniquement au confort d'affichage et ne transmet pas d'information commerciale a Mon IPTV Premium.",
            "Si des cookies de mesure d'audience, de publicite ou de suivi sont ajoutes plus tard, une information claire et un mecanisme de consentement devront etre mis en place."
          ]
        },
        {
          heading: "Droits des utilisateurs",
          paragraphs: [
            "Conformement aux regles applicables en matiere de protection des donnees, l'utilisateur peut demander l'acces, la rectification, l'effacement, la limitation ou l'opposition au traitement de ses donnees.",
            "L'utilisateur peut exercer ses droits en ecrivant a contact@moniptvpremium.fr.",
            "L'utilisateur peut egalement introduire une reclamation aupres de l'autorite de protection des donnees competente si necessaire."
          ]
        },
        {
          heading: "Securite",
          paragraphs: [
            "Mon IPTV Premium s'engage a mettre en oeuvre des mesures raisonnables pour proteger les donnees contre l'acces non autorise, la perte, l'alteration ou la divulgation.",
            "Aucune transmission sur internet ne peut toutefois etre garantie comme totalement securisee."
          ]
        },
        {
          heading: "Mise a jour",
          paragraphs: [
            "La presente politique pourra etre mise a jour afin de refleter les changements du site, des services, des outils techniques ou des obligations legales.",
            "Derniere mise a jour : 19 mai 2026."
          ]
        }
      ]
    }
  }[type];

  return (
    <>
      <SeoEffect title={`${content.title} | ${siteConfig.brand}`} description={descriptions.legal} path={content.path} />
      <PageHero eyebrow="Legal" title={content.title} text={content.intro} />
      <section className="section legal-copy">
        {content.sections.map((section) => (
          <article className="legal-section reveal" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <SeoEffect title={`Page introuvable | ${siteConfig.brand}`} description="Page introuvable." path="/404" />
      <PageHero eyebrow="404" title="Page introuvable" text="La page demandee n'existe pas encore." />
    </>
  );
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
