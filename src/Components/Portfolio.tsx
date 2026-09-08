import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import portrait from "../public/profile-1200.jpeg";
import ContactForm from "./ContactForm";
import MonographPortfolio from "./MonographPortfolio";
import PageMeta from "./PageMeta";
import ProjectVisual from "./ProjectVisual";
import PublishedPortfolio from "./PublishedPortfolio";

type ViewId = "overview" | "work" | "career" | "practice" | "about" | "contact";

const projects = [
  {
    name: "PF2e Equipment Tracker",
    kind: "Pathfinder 2e planning tool",
    url: "https://pf2e-equipment.com",
    displayUrl: "pf2e-equipment.com",
    visual: "equipment" as const,
    summary: "A character-equipment planner designed around level, item availability, and a finite pile of gold.",
    origin: "The existing tools could tell me what existed, but not help me manage the entire one-shot planning workflow in one place.",
    build: "A transformed Foundry VTT item corpus, fast filtering, custom drag-and-drop, budget state, persistence, and portable saves.",
    stack: ["React", "Vite", "Python", "Custom drag & drop"],
  },
  {
    name: "HST Designer",
    kind: "Interactive quilt workspace",
    url: "https://half-square-triangle.com",
    displayUrl: "half-square-triangle.com",
    visual: "quilt" as const,
    summary: "A visual canvas for trying half-square-triangle patterns in your own colors before cutting fabric.",
    origin: "Quilt patterns were easy to find and surprisingly hard to imagine outside the example palette.",
    build: "Drag-and-drop composition, transformations, undo and redo, custom palettes and dimensions, Firebase accounts, and shareable saves.",
    stack: ["React", "Firebase", "Interactive canvas", "Product design"],
  },
];

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
  const project = projects[activeProject];
  return (
    <section className={`console-work console-work--${activeProject + 1}`} aria-labelledby="console-work-title">
      <header className="console-view-heading"><p>Designed and shipped</p><h1 id="console-work-title">Selected work</h1></header>
      <div className="project-switcher" role="tablist" aria-label="Select a project">
        {projects.map((item, index) => <button role="tab" aria-selected={activeProject === index} onClick={() => setActiveProject(index)} key={item.name}><span>0{index + 1}</span>{item.name}</button>)}
      </div>
      <article className="project-stage">
        <div className="project-stage__copy">
          <p>{project.kind}</p><h2>{project.name}</h2><strong>{project.summary}</strong>
          <dl><div><dt>The itch</dt><dd>{project.origin}</dd></div><div><dt>The build</dt><dd>{project.build}</dd></div></dl>
          <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
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
      <header className="console-view-heading"><p>Experience</p><h1 id="console-career-title">The whole system.</h1><Link to="/resume?version=02">Detailed résumé ↗</Link></header>
      <div className="console-career__timeline">
        {empItems.map((role, index) => <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><div><h2>{role.name}</h2><strong>{role.title}</strong></div><p>{role.summary}</p></article>)}
      </div>
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
      <img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" />
      <div><p>Danny, beyond the keyboard</p><h1 id="console-about-title">A whole person ships better work.</h1><span>I play music, collect LEGO, read fantasy, play Pathfinder and video games, re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.</span></div>
    </section>
  );
}

function ContactView() {
  return (
    <section className="console-contact" aria-labelledby="console-contact-title">
      <div className="console-contact__intro"><p>Send Danny a note</p><h1 id="console-contact-title">Let’s talk.</h1><span>A stubborn problem, an interesting role, or a question about my work—I’d be glad to hear it.</span></div>
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
      <header className="console-topbar"><button className="console-brand" onClick={() => selectView("overview")}><strong>DS</strong><span>Danny Stone</span></button><p>Application · Data · People</p><Link to="/resume?version=02">Résumé ↗</Link></header>
      <div className="console-body">
        <nav className="console-nav" aria-label="Portfolio views">
          {navItems.map(([id, label], index) => <button className={activeView === id ? "active" : ""} aria-current={activeView === id ? "page" : undefined} onClick={() => selectView(id)} key={id}><span>0{index + 1}</span><strong>{label}</strong></button>)}
          <div className="console-nav__identity"><strong>Danny Stone</strong><span>Senior software engineer</span></div>
        </nav>
        <section className="console-view" id="console-view" tabIndex={-1} key={activeView}>{views[activeView]}</section>
      </div>
      <footer className="console-status"><span>Senior software engineer</span><span className="console-status__pulse">Available at dallinstone.com</span><span>© {new Date().getFullYear()}</span></footer>
    </article>
  );
}

type SiteVersion = "01" | "02" | "03";
const siteVersions: SiteVersion[] = ["01", "02", "03"];

export default function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const requestedVersion = new URLSearchParams(location.search).get("version") as SiteVersion | null;
  const [version, setVersion] = useState<SiteVersion>(() =>
    siteVersions.includes(requestedVersion as SiteVersion)
      ? requestedVersion!
      : siteVersions[Math.floor(Math.random() * siteVersions.length)],
  );

  useEffect(() => {
    if (requestedVersion && siteVersions.includes(requestedVersion)) {
      setVersion(requestedVersion);
    }
  }, [requestedVersion]);

  const selectVersion = (nextVersion: SiteVersion) => {
    setVersion(nextVersion);
    navigate(`/?version=${nextVersion}`, { replace: true });
  };

  return (
    <div className={`version-host version-host--${version}`}>
      <PageMeta route="/" />
      <label className="version-switcher">
        <select aria-label="Choose site version" value={version} onChange={(event) => selectVersion(event.target.value as SiteVersion)}>
          {siteVersions.map((item) => <option value={item} key={item}>{item}</option>)}
        </select>
      </label>
      {version === "01" ? <PublishedPortfolio /> : version === "02" ? <WorkspacePortfolio /> : <MonographPortfolio />}
    </div>
  );
}
