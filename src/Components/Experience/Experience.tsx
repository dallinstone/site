import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { eduItems } from "../../Features/Collections/EduItems";
import { empItems } from "../../Features/Collections/EmploymentItems";
import PageMeta from "../PageMeta";
import Employer from "./Employer";
import { AtlasResume, StudioResume, WorkspaceResume } from "./ResumeVariants";
import { resumeSectionFromHash } from "./ResumeVariants";
import { coreCapabilities, resumeHighlights, supportingGroups } from "./resumeData";
import VersionPicker, { siteVersions, SiteVersion } from "../VersionPicker";
import PublishedFooter from "../PublishedFooter";
import PublishedSnapshot, { usePublishedTheme } from "../PublishedSnapshot";

export default function Experience() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [publishedTheme, setPublishedTheme] = usePublishedTheme();
  const [publishedMenuOpen, setPublishedMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const requestedVersion = new URLSearchParams(location.search).get("version");
  const switchVersion = (version: SiteVersion) => {
    const section = resumeSectionFromHash(location.hash.slice(1));
    navigate(`/resume?version=${version}${section === "profile" ? "" : `#${section}`}`);
  };
  if (!requestedVersion) return <Navigate to="/resume?version=04" replace />;
  if (requestedVersion === "02") return <div className="version-host version-host--02"><VersionPicker version="02" onSelect={switchVersion} /><PageMeta route="/resume" /><WorkspaceResume /></div>;
  if (requestedVersion === "03") return <div className="version-host version-host--03"><VersionPicker version="03" onSelect={switchVersion} /><PageMeta route="/resume" /><AtlasResume /></div>;
  if (requestedVersion === "04") return <div className="version-host version-host--04"><VersionPicker version="04" onSelect={switchVersion} /><PageMeta route="/resume" /><StudioResume /></div>;
  if (!siteVersions.includes(requestedVersion as SiteVersion)) return <Navigate to="/resume?version=04" replace />;

  return (
    <div className="version-host version-host--01">
      <VersionPicker version="01" onSelect={switchVersion} />
      <PublishedSnapshot theme={publishedTheme}>
        <PageMeta route="/resume" />
        <header className="site-header">
          <a className="skip-link" href="#published-main">Skip to main content</a>
          <div className="nav-shell">
            <Link className="brand" to="/?version=01" aria-label="Danny Stone, home"><span className="brand__mark" aria-hidden="true">D/S</span><span className="brand__name">Danny Stone</span></Link>
            <div className="nav-actions">
              <nav id="published-resume-navigation" className={`primary-nav${publishedMenuOpen ? " primary-nav--open" : ""}`} aria-label="Primary navigation"><Link to="/?version=01">Home</Link><Link className="active" to="/resume?version=01">Experience</Link><Link to="/?version=01&page=projects">Projects</Link><Link to="/?version=01&page=about">About</Link><Link to="/?version=01&page=contact">Contact</Link></nav>
              <button className="theme-toggle" type="button" aria-label={`Switch to ${publishedTheme === "dark" ? "light" : "dark"} mode`} onClick={() => setPublishedTheme((theme) => theme === "dark" ? "light" : "dark")}><span className="theme-toggle__icon" aria-hidden="true">{publishedTheme === "dark" ? "☾" : "☀"}</span></button>
              <button className="menu-toggle" type="button" aria-controls="published-resume-navigation" aria-expanded={publishedMenuOpen} onClick={() => setPublishedMenuOpen((open) => !open)}><span aria-hidden="true">{publishedMenuOpen ? "Close" : "Menu"}</span><span className="sr-only">{publishedMenuOpen ? "Close navigation" : "Open navigation"}</span></button>
            </div>
          </div>
        </header>
        <div className="resume-page page-shell" id="published-main">

      <header className="resume-hero">
        <div>
          <p className="eyebrow">Work history</p>
          <h1>Dallin “Danny” Stone</h1>
          <p className="resume-subtitle">Senior Software Engineer · C#/.NET · React/Angular · TypeScript · SQL Server · Azure</p>
        </div>
        <div className="resume-actions">
          <a className="button button--primary resume-download" href="/danny-stone-resume.pdf" download>
            Download résumé (PDF)
          </a>
          <button className="button button--secondary print-button" type="button" onClick={() => window.print()}>
            Print page
          </button>
        </div>
      </header>

      <section className="resume-summary" id="profile" aria-labelledby="summary-title">
        <h2 id="summary-title">The short version</h2>
        <div className="resume-summary__content">
          <p>I help teams make good decisions about complex, data-heavy business software.</p>
          <ul className="profile-highlights">{resumeHighlights.map((item) => <li key={item.title}><strong>{item.title}</strong> {item.text}</li>)}</ul>
        </div>
      </section>

      <section className="skills-section" id="capabilities" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h2 id="skills-title">The useful overlap</h2>
        </div>
        <div className="resume-capabilities-grid">
          {coreCapabilities.map((group) => (
            <article key={group.title}>
              <span>{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="supporting-toolkit">
          <h3>Supporting toolkit</h3>
          <div className="supporting-toolkit__grid">
            {supportingGroups.map((group) => (
              <article key={group.title}>
                <h4>{group.title}</h4>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="experience" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Career history</p>
          <h2 id="work-title">Work experience</h2>
        </div>
        <div className="experience-list">
          {empItems.map((employer, index) => (
            <Employer
              key={employer.name}
              employer={employer}
              index={index}
              isOpen={openItem === index}
              onToggle={() => setOpenItem(openItem === index ? null : index)}
            />
          ))}
        </div>
      </section>

      <section className="education-section" id="education" aria-labelledby="education-title">
        <div className="section-heading">
          <p className="eyebrow">Academic foundation</p>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="education-grid">
          {eduItems.map((education) => (
            <article key={education.school}>
              <p className="education-years">{education.years}</p>
              <h3>{education.school}</h3>
              <p>{education.major}</p>
              {education.minor && <p className="muted">{education.minor}</p>}
            </article>
          ))}
        </div>
      </section>
        </div>
        <PublishedFooter />
      </PublishedSnapshot>
    </div>
  );
}
