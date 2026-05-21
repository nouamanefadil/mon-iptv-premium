import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ChevronRight, Mail, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { lazy, Suspense, useState } from "react";
import {
  categories,
  deviceOptions,
  devices,
  faqs,
  features,
  pricingPlans,
  qualityOptions,
  getWhatsAppUrl,
  siteConfig,
  stats,
  steps,
  trustBullets
} from "../data/site";

const HeroScene = lazy(() => import("./HeroScene"));

gsap.registerPlugin(ScrollTrigger);

export function RevealRoot({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 84%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          IPTV premium en France
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          Une experience <span>IPTV Premium</span> au style international.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          {siteConfig.brand} presente vos offres IPTV avec une interface luxueuse, rapide et
          concue pour convertir les visiteurs en France.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
          <a className="btn btn-primary" href="/tarifs">
            Voir les tarifs <ChevronRight size={18} />
          </a>
          <a className="btn btn-secondary" href="/contactez-nous">
            Demander un essai
          </a>
        </motion.div>
      </div>
      <Suspense fallback={<div className="hero-scene hero-scene-fallback" />}>
        <HeroScene />
      </Suspense>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="stats-band reveal">
      {stats.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="section">
      <SectionHeading eyebrow="Pourquoi choisir ce site" title="Une presence premium, claire et rassurante" />
      <div className="grid features-grid">
        {features.map((item) => (
          <motion.article className="feature-card reveal" key={item.title} whileHover={{ y: -8 }}>
            <item.icon />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function CategoryShowcase() {
  return (
    <section className="section section-muted">
      <SectionHeading eyebrow="Catalogue" title="Des univers de contenu sans references protegees" />
      <div className="category-grid">
        {categories.map((item) => (
          <article className={`category-card ${item.tone} reveal`} key={item.title}>
            <div className="category-orbit" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PricingPreview({ full = false }: { full?: boolean }) {
  const [selectedQuality, setSelectedQuality] = useState(qualityOptions[1].value);
  const [selectedDevices, setSelectedDevices] = useState(deviceOptions[0].value);
  const deviceLabel = deviceOptions.find((option) => option.value === selectedDevices)?.label ?? "1 appareil";
  const quality = qualityOptions.find((option) => option.value === selectedQuality) ?? qualityOptions[1];

  return (
    <section className="section" id="tarifs">
      <SectionHeading
        eyebrow="Tarifs"
        title={full ? "Choisissez une offre IPTV Premium" : "Packs IPTV Premium par duree"}
        text="Selectionnez Basique ou Premium, le nombre d'appareils, puis choisissez votre duree. Les prix seront ajoutes lorsque les tarifs definitifs seront fournis."
      />
      <div className="pricing-quality-tabs" role="tablist" aria-label="Type d'offre">
        {qualityOptions.map((option) => (
          <button
            className={selectedQuality === option.value ? "active" : ""}
            key={option.value}
            type="button"
            role="tab"
            aria-selected={selectedQuality === option.value}
            onClick={() => setSelectedQuality(option.value)}
          >
            <strong>{option.label}</strong>
            <span>{option.description}</span>
          </button>
        ))}
      </div>
      <div className="pricing-device-tabs" role="tablist" aria-label="Nombre d'appareils">
        {deviceOptions.map((option) => (
          <button
            className={selectedDevices === option.value ? "active" : ""}
            key={option.value}
            type="button"
            role="tab"
            aria-selected={selectedDevices === option.value}
            onClick={() => setSelectedDevices(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="pricing-selection-pill"
          key={`pill-${selectedQuality}-${selectedDevices}`}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          Configuration active : <strong>{quality.label}</strong> · <strong>{deviceLabel}</strong>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          className="pricing-grid"
          key={`pricing-${selectedQuality}-${selectedDevices}`}
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.article
              className={`pricing-card reveal ${plan.highlighted ? "highlighted" : ""}`}
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.035 }}
              whileHover={{ y: -10 }}
            >
              <span className="plan-badge">{plan.badge}</span>
              <h3>{plan.name}</h3>
              <p className="duration">{plan.duration}</p>
              <strong>{plan.price}</strong>
              <p className="price-note">{plan.note}</p>
              <ul>
                <li>
                  <Check size={16} /> {deviceLabel}
                </li>
                {quality.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <a
                className={plan.highlighted ? "btn btn-primary" : "btn btn-secondary"}
                href={getWhatsAppUrl(
                  `Bonjour, je souhaite commander ${quality.label} - ${plan.duration} - ${deviceLabel}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander
              </a>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="section section-muted">
      <SectionHeading eyebrow="Installation" title="Un parcours simple en trois etapes" />
      <div className="steps-grid">
        {steps.map((step, index) => (
          <article className="step-card reveal" key={step.title}>
            <span>0{index + 1}</span>
            <step.icon />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DevicesSection() {
  return (
    <section className="section">
      <SectionHeading eyebrow="Compatibilite" title="Une experience pensee pour tous les ecrans" />
      <div className="device-grid">
        {devices.map((device) => (
          <div className="device-pill reveal" key={device}>
            {device}
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="trust-panel reveal">
      <div>
        <span className="eyebrow">Positionnement</span>
        <h2>Un site IPTV premium qui evite les raccourcis risqués</h2>
      </div>
      <ul>
        {trustBullets.map((item) => (
          <li key={item}>
            <Check size={18} /> {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section">
      <SectionHeading eyebrow="FAQ" title="Questions frequentes" />
      <div className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item reveal" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContactPanel() {
  return (
    <section className="section contact-layout">
      <div>
        <span className="eyebrow">Contact</span>
        <h1>Contactez-nous</h1>
        <p>
          Cette page est prete pour vos coordonnees finales. Le formulaire est visuel pour la v1,
          sans API ni envoi automatique.
        </p>
        <div className="contact-methods">
          <span>
            <Mail size={18} /> {siteConfig.email}
          </span>
          <span>
            <Send size={18} /> WhatsApp sera ajoute plus tard
          </span>
        </div>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Nom
          <input placeholder="Votre nom" />
        </label>
        <label>
          Telephone
          <input placeholder="+33 ..." />
        </label>
        <label>
          Message
          <textarea placeholder="Votre demande" rows={5} />
        </label>
        <button className="btn btn-primary" type="submit">
          Envoi desactive pour v1
        </button>
      </form>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta reveal">
      <div className="final-cta-copy">
        <span className="eyebrow">Pret pour la suite</span>
        <h2>Transformez vos visiteurs en prospects avec une presence IPTV premium.</h2>
        <p>Une page rapide, elegante et prete a recevoir vos tarifs et votre lien WhatsApp final.</p>
      </div>
      <div className="final-cta-action">
        <a className="btn btn-primary" href="/contactez-nous">
          Contacter un conseiller
        </a>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
