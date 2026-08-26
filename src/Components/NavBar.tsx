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
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="nav-shell">
        <NavLink className="brand" to="/" aria-label="Danny Stone, home">
          <span className="brand__mark" aria-hidden="true">DS</span>
          <span>Danny Stone</span>
        </NavLink>

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
      </div>
    </header>
  );
}
