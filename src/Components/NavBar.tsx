import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme !== "light",
  );
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem("danny-stone-theme", theme);
    } catch {
      // The theme still works for this visit when storage is unavailable.
    }

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute("content", isDark ? "#101522" : "#19317c");
  }, [isDark]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="nav-shell">
        <NavLink className="brand" to="/" aria-label="Danny Stone, home">
          <span className="brand__mark" aria-hidden="true">D/S</span>
          <span className="brand__name">Danny Stone</span>
        </NavLink>

        <div className="nav-actions">
          <nav
            id="primary-navigation"
            className={`primary-nav${isOpen ? " primary-nav--open" : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => isActive ? "active" : undefined}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={() => setIsDark((dark) => !dark)}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {isDark ? "☾" : "☀"}
            </span>
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span aria-hidden="true">{isOpen ? "Close" : "Menu"}</span>
            <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
