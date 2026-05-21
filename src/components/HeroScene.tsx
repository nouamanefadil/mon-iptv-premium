import { BarChart3, Clapperboard, Grid3X3, Radio, Sparkles, Tv } from "lucide-react";

const menuItems = [
  { label: "Live TV", icon: Tv },
  { label: "Films", icon: Clapperboard },
  { label: "Series", icon: Grid3X3 },
  { label: "Radio", icon: Radio }
];

const floatingBadges = [
  { label: "4K", className: "badge-top" },
  { label: "SPORT", className: "badge-right" },
  { label: "VOD", className: "badge-left" },
  { label: "TV", className: "badge-bottom" }
];

export default function HeroScene() {
  return (
    <div className="hero-scene hero-dashboard-scene" aria-hidden="true">
      <div className="dashboard-orb orb-red" />
      <div className="dashboard-orb orb-blue" />
      <div className="dashboard-platform" />
      <div className="mock-browser">
        <div className="browser-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-screen">
          <div className="screen-glow" />
          <div className="dashboard-brand">
            <div className="dashboard-logo">
              <Sparkles size={28} />
            </div>
            <div>
              <strong>Mon IPTV</strong>
              <span>Premium</span>
            </div>
          </div>
          <div className="dashboard-subline">
            <span>Liste active</span>
            <strong>France Premium</strong>
          </div>
          <div className="status-row">
            <span className="status-pill active">Actif</span>
            <span className="status-pill">Expiration a configurer</span>
          </div>
          <div className="menu-card-row">
            {menuItems.map((item) => (
              <div className="mock-menu-card" key={item.label}>
                <span>
                  <item.icon size={24} />
                </span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
          <div className="mock-actions">
            <span>Renouveler</span>
            <span>Langue</span>
            <span>Replay</span>
            <span>
              <BarChart3 size={17} />
            </span>
          </div>
          <div className="mock-device-code">MAC : 00:1A:79:XX:XX:XX</div>
        </div>
      </div>
      {floatingBadges.map((badge) => (
        <div className={`floating-service ${badge.className}`} key={badge.label}>
          {badge.label}
        </div>
      ))}
    </div>
  );
}
