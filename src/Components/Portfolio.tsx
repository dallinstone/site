import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eduItems } from "../Features/Collections/EduItems";
import { empItems } from "../Features/Collections/EmploymentItems";
import { contactInvitation, personalProfile, portfolioProjects } from "../Features/portfolioContent";
import { handleTabKey } from "../Features/tabKeyboard";
import portrait from "../public/profile-garden-3691.webp";
import ContactForm from "./ContactForm";
import MonographPortfolio from "./MonographPortfolio";
import PageMeta from "./PageMeta";
import ProjectVisual from "./ProjectVisual";
import PublishedPortfolio from "./PublishedPortfolio";
import StudioReelPortfolio from "./StudioReelPortfolio";
import { coreCapabilities, supportingGroups } from "./Experience/resumeData";
import VersionPicker, { siteVersions, SiteVersion } from "./VersionPicker";

type ViewId = "overview" | "work" | "career" | "practice" | "about" | "contact";

const navItems: Array<[ViewId, string]> = [
  ["overview", "Overview"],
  ["work", "Selected work"],
  ["career", "Career"],
  ["practice", "Practice"],
  ["about", "About"],
  ["contact", "Contact"],
];

function OverviewView() {
  return (
    <section className="console-overview" aria-labelledby="console-overview-title">
      <p className="console-kicker"><span /> Senior software engineer</p>
      <h1 id="console-overview-title">Danny<br /><em>Stone.</em></h1>
      <div className="console-overview__bottom">
        <p><strong>Software, untangled.</strong> I work across applications, databases, cloud integrations, and requirements to make complex business software easier to understand, use, and change.</p>
        <dl><div><dt>Core</dt><dd>.NET · SQL Server · React · Azure</dd></div><div><dt>Best at</dt><dd>Cross-layer, ambiguous problems</dd></div></dl>
      </div>
    </section>
  );
}

function WorkView() {
  const [activeProject, setActiveProject] = useState(0);
  const project = portfolioProjects[activeProject];
  return (
    <section className={`console-work console-work--${activeProject + 1}`} aria-labelledby="console-work-title">
      <header className="console-view-heading"><p>Designed and shipped</p><h1 id="console-work-title">Selected work</h1></header>
      <div className="project-switcher" role="tablist" aria-label="Select a project">
        {portfolioProjects.map((item, index) => <button id={`console-project-tab-${index}`} role="tab" aria-controls="console-project-panel" aria-selected={activeProject === index} tabIndex={activeProject === index ? 0 : -1} onClick={() => setActiveProject(index)} onKeyDown={(event) => handleTabKey(event, index, portfolioProjects.length, setActiveProject)} key={item.name}><span>0{index + 1}</span>{item.name}</button>)}
      </div>
      <article className="project-stage" id="console-project-panel" role="tabpanel" aria-labelledby={`console-project-tab-${activeProject}`}>
        <div className="project-stage__copy">
          <p>{project.kind}</p><h2>{project.name}</h2><strong>{project.summary}</strong>
          <dl><div><dt>The itch</dt><dd>{project.problem}</dd></div><div><dt>The build</dt><dd>{project.engineering}</dd></div></dl>
          <ul>{project.tags.map((item) => <li key={item}>{item}</li>)}</ul>
          <a href={project.url} target="_blank" rel="noreferrer">Open {project.displayUrl} ↗</a>
        </div>
        <figure><ProjectVisual variant={project.visual} /></figure>
      </article>
    </section>
  );
}

function CareerView() {
  return (
    <section className="console-career" aria-labelledby="console-career-title">
      <header className="console-view-heading"><p>Experience / Detailed résumé</p><h1 id="console-career-title">The whole system.</h1><a href="/danny-stone-resume.pdf" download>Download PDF ↓</a></header>
      <div className="console-career__timeline">
        {empItems.map((role, index) => <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><div><h2>{role.name}</h2><strong>{role.title}</strong></div><p>{role.summary}</p><details><summary>Detailed contributions</summary><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></details></article>)}
      </div>
      <section className="console-career__capabilities"><header><p>Core capabilities</p><h2>System map</h2></header><div>{coreCapabilities.map((group) => <article key={group.title}><span>{group.number}</span><h3>{group.title}</h3><p>{group.text}</p><small>{group.skills.join(" · ")}</small></article>)}</div>{supportingGroups.map((group) => <p key={group.title}><strong>{group.title}:</strong> {group.skills.join(" · ")}</p>)}</section>
      <section className="console-career__education"><header><p>Academic foundation</p><h2>Education</h2></header><div>{eduItems.map((education) => <article key={education.school}><time>{education.years}</time><h3>{education.school}</h3><strong>{education.major}</strong>{education.minor && <p>{education.minor}</p>}</article>)}</div></section>
    </section>
  );
}

function PracticeView() {
  return (
    <section className="console-practice" aria-labelledby="console-practice-title">
      <header className="console-view-heading"><p>How I work</p><h1 id="console-practice-title">Follow the problem, not the org chart.</h1></header>
      <div className="practice-lines">
        <article><span>01</span><h2>Application</h2><p>Build and modernize the .NET systems that carry real business processes.</p><small>C# · .NET · React · Angular · APIs · Identity</small></article>
        <article><span>02</span><h2>Data</h2><p>Trace performance into SQL Server and fix the part that actually matters.</p><small>Stored procedures · Indexes · Query tuning · Dapper · EF Core</small></article>
        <article><span>03</span><h2>People</h2><p>Turn partial context and competing needs into direction a team can use.</p><small>Discovery · Product partnership · Customer communication · Mentoring</small></article>
      </div>
      <blockquote>Find the actual bottleneck. Make the decision legible. Leave the system easier to own.</blockquote>
    </section>
  );
}

function AboutView() {
  return (
    <section className="console-about" aria-labelledby="console-about-title">
      <img src={portrait} alt="Danny Stone standing in a garden" width="3691" height="5536" />
      <div><p>{personalProfile.eyebrow}</p><h1 id="console-about-title">{personalProfile.heading}</h1><span>{personalProfile.body}</span></div>
    </section>
  );
}

function ContactView() {
  return (
    <section className="console-contact" aria-labelledby="console-contact-title">
      <div className="console-contact__intro"><p>Send Danny a note</p><h1 id="console-contact-title">Let’s talk.</h1><span>{contactInvitation.body}</span></div>
      <ContactForm className="console-contact__form" />
      <nav><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn <i>↗</i></a><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub <i>↗</i></a><Link to="/resume?version=02">Résumé <i>→</i></Link></nav>
    </section>
  );
}

const views: Record<ViewId, ReactNode> = {
  overview: <OverviewView />, work: <WorkView />, career: <CareerView />,
  practice: <PracticeView />, about: <AboutView />, contact: <ContactView />,
};

function WorkspacePortfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const hashView = location.hash.slice(1) as ViewId;
  const [activeView, setActiveView] = useState<ViewId>(navItems.some(([id]) => id === hashView) ? hashView : "overview");

  useEffect(() => {
    const next = location.hash.slice(1) as ViewId;
    setActiveView(navItems.some(([id]) => id === next) ? next : "overview");
  }, [location.hash]);

  const selectView = (view: ViewId) => {
    setActiveView(view);
    navigate(view === "overview" ? "/?version=02" : `/?version=02#${view}`, { replace: true });
  };

  return (
    <article className={`portfolio-console portfolio-console--${activeView}`}>
      <a className="skip-link" href="#console-view">Skip to current view</a>
      <header className="console-topbar"><button className="console-brand" onClick={() => selectView("overview")}><strong>DS</strong><span>Danny Stone</span></button><p>Application · Data · People</p><Link to="/resume?version=02">Résumé ↓</Link></header>
      <div className="console-body">
        <nav className="console-nav" aria-label="Portfolio views">
          {navItems.map(([id, label], index) => <button className={activeView === id ? "active" : ""} aria-current={activeView === id ? "page" : undefined} onClick={() => selectView(id)} key={id}><span>0{index + 1}</span><strong>{label}</strong></button>)}
          <div className="console-nav__identity"><strong>Danny Stone</strong><span>Senior software engineer</span></div>
        </nav>
        <section className="console-view" id="console-view" tabIndex={-1} key={activeView}>{views[activeView]}</section>
      </div>
      <footer className="console-status"><span>Senior software engineer</span><span className="console-status__pulse">Open to useful conversations</span><span>© {new Date().getFullYear()}</span></footer>
    </article>
  );
}

export default function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const requestedVersion = new URLSearchParams(location.search).get("version") as SiteVersion | null;
  const [version, setVersion] = useState<SiteVersion>(() =>
    siteVersions.includes(requestedVersion as SiteVersion)
      ? requestedVersion!
      : "04",
  );

  useEffect(() => {
    if (requestedVersion && siteVersions.includes(requestedVersion)) {
      setVersion(requestedVersion);
    } else if (requestedVersion) {
      setVersion("04");
      navigate("/?version=04", { replace: true });
    }
  }, [navigate, requestedVersion]);

  const selectVersion = (nextVersion: SiteVersion) => {
    setVersion(nextVersion);
    const page = new URLSearchParams(location.search).get("page");
    const rawSection = page === "projects" ? "work" : page === "about" || page === "contact" ? page : location.hash.slice(1);
    const section = rawSection === "method" || rawSection === "field-notes" ? "practice" : rawSection === "hst" ? "work" : rawSection;
    if (nextVersion === "01") {
      const publishedPage = section === "work" ? "projects" : section === "about" || section === "contact" ? section : null;
      navigate(`/?version=01${publishedPage ? `&page=${publishedPage}` : ""}`, { replace: true });
      return;
    }
    navigate(`/?version=${nextVersion}${section && section !== "overview" ? `#${section}` : ""}`, { replace: true });
  };

  return (
    <div className={`version-host version-host--${version}`}>
      <PageMeta route="/" />
      <VersionPicker version={version} onSelect={selectVersion} />
      {version === "01" ? <PublishedPortfolio /> : version === "02" ? <WorkspacePortfolio /> : version === "03" ? <MonographPortfolio /> : <StudioReelPortfolio />}
    </div>
  );
}
