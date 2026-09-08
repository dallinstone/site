import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const sectionLinks = [
  ["/?version=04#work", "Projects"],
  ["/?version=04#career", "Career"],
  ["/?version=04#practice", "Practice"],
  ["/?version=04#about", "About"],
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === "dark");
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { window.localStorage.setItem("danny-stone-theme", theme); } catch { /* preference remains session-only */ }
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#111310" : "#f0eee8");
  }, [isDark]);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="nav-shell">
        <Link className="brand" to="/?version=04" aria-label="Danny Stone, home"><span className="brand__mark" aria-hidden="true">DS</span><span className="brand__name"><strong>Danny Stone</strong><small>Software engineer</small></span></Link>
        <div className="nav-actions">
          <nav id="primary-navigation" className={`primary-nav${isOpen ? " primary-nav--open" : ""}`} aria-label="Primary navigation">
            {sectionLinks.map(([to, label]) => <Link to={to} key={to}>{label}</Link>)}
            <NavLink to="/resume?version=04" className={({ isActive }) => isActive ? "active" : undefined}>Résumé</NavLink>
            <Link className="nav-contact" to="/?version=04#contact">Say hello ↗</Link>
          </nav>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`} onClick={() => setIsDark((dark) => !dark)}><span className="theme-toggle__icon" aria-hidden="true">{isDark ? "Light" : "Dark"}</span></button>
          <button className="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>{isOpen ? "Close" : "Menu"}</button>
        </div>
      </div>
    </header>
  );
}
