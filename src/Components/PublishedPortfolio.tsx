import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../published.css";
import PublishedAbout from "./PublishedAbout";
import PublishedContact from "./PublishedContact";
import PublishedHomePage from "./PublishedHomePage";
import PublishedProjects from "./PublishedProjects";

type PublishedPage = "home" | "projects" | "about" | "contact";

const pageLinks: Array<{ id: PublishedPage; label: string }> = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const pageUrl = (page: PublishedPage) => page === "home" ? "/?version=01" : `/?version=01&page=${page}`;

export default function PublishedPortfolio() {
  const location = useLocation();
  const requestedPage = new URLSearchParams(location.search).get("page") as PublishedPage | null;
  const page = pageLinks.some((item) => item.id === requestedPage) ? requestedPage! : "home";
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [page]);

  return (
    <article className="published-site" data-theme={isDark ? "dark" : "light"}>
      <header className="site-header">
        <a className="skip-link" href="#published-main">Skip to main content</a>
        <div className="nav-shell">
          <Link className="brand" to="/?version=01" aria-label="Danny Stone, home">
            <span className="brand__mark" aria-hidden="true">D/S</span>
            <span className="brand__name">Danny Stone</span>
          </Link>

          <div className="nav-actions">
            <nav id="published-navigation" className={`primary-nav${isOpen ? " primary-nav--open" : ""}`} aria-label="Primary navigation">
              {pageLinks.slice(0, 1).map((item) => <Link key={item.id} className={page === item.id ? "active" : undefined} to={pageUrl(item.id)}>{item.label}</Link>)}
              <Link to="/resume?version=01">Experience</Link>
              {pageLinks.slice(1).map((item) => <Link key={item.id} className={page === item.id ? "active" : undefined} to={pageUrl(item.id)}>{item.label}</Link>)}
            </nav>
            <button className="theme-toggle" type="button" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`} title={`Switch to ${isDark ? "light" : "dark"} mode`} onClick={() => setIsDark((dark) => !dark)}>
              <span className="theme-toggle__icon" aria-hidden="true">{isDark ? "☾" : "☀"}</span>
            </button>
            <button className="menu-toggle" type="button" aria-controls="published-navigation" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
              <span aria-hidden="true">{isOpen ? "Close" : "Menu"}</span>
              <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
            </button>
          </div>
        </div>
      </header>

      <div id="published-main">
        {page === "home" && <PublishedHomePage />}
        {page === "projects" && <PublishedProjects />}
        {page === "about" && <PublishedAbout />}
        {page === "contact" && <PublishedContact />}
      </div>

      <footer className="site-footer">
        <div className="footer-shell">
          <div><p className="footer-name">Danny Stone</p><p>Senior software engineer. Databases, .NET, React, and the people who rely on them.</p></div>
          <nav aria-label="Social profiles"><span className="footer-social-links"><a className="footer-social-link" href="https://github.com/dallinstone" rel="me" aria-label="Danny Stone on GitHub" title="GitHub"><FaGithub aria-hidden="true" /><span className="sr-only">GitHub</span></a><a className="footer-social-link" href="https://www.linkedin.com/in/dallinstone" rel="me" aria-label="Danny Stone on LinkedIn" title="LinkedIn"><FaLinkedin aria-hidden="true" /><span className="sr-only">LinkedIn</span></a></span></nav>
          <p className="footer-copyright">© {new Date().getFullYear()} Danny Stone</p>
        </div>
      </footer>
    </article>
  );
}
