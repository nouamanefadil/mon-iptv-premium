import { Menu, MessageCircle, Moon, Sparkles, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getWhatsAppUrl, navItems, siteConfig } from "../data/site";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="/" aria-label="Accueil Mon IPTV Premium">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span>{siteConfig.brand}</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
          title={theme === "dark" ? "Mode clair" : "Mode sombre"}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="header-cta" href="/contactez-nous">
          Demander un essai
        </a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Navigation mobile"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="mobile-theme-toggle" type="button" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            {theme === "dark" ? "Mode clair" : "Mode sombre"}
          </button>
        </motion.nav>
      )}
      <main>{children}</main>
      <Footer />
      <a
        className="whatsapp-float"
        href={getWhatsAppUrl("Bonjour, je souhaite des informations sur vos offres IPTV Premium.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Mon IPTV Premium sur WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span>{siteConfig.brand}</span>
        </a>
        <p>
          IPTV Premium pour la France, avec un design moderne, des offres configurables et une
          presentation claire.
        </p>
      </div>
      <div className="footer-links">
        <a href="/tarifs">Tarifs</a>
        <a href="/abonnement-iptv">Abonnement IPTV</a>
        <a href="/blog">Blog</a>
        <a href="/mentions-legales">Mentions legales</a>
        <a href="/conditions-generales">Conditions generales</a>
        <a href="/confidentialite">Confidentialite</a>
        <a href="/sitemap">Plan du site</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {siteConfig.brand}</span>
        <span>{siteConfig.domain.replace("https://", "")}</span>
      </div>
    </footer>
  );
}
