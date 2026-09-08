import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { eduItems } from "../Features/Collections/EduItems";
import { empItems } from "../Features/Collections/EmploymentItems";
import { contactInvitation, personalProfile, portfolioProjects } from "../Features/portfolioContent";
import portrait from "../public/profile-1200.jpeg";
import gardenPortrait from "../public/profile-garden-1500.jpg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";
import { coreCapabilities, supportingGroups } from "./Experience/resumeData";

type AtlasView = "work" | "career" | "method" | "about" | "contact";

const atlasNodes: Array<{ id: AtlasView; number: string; label: string }> = [
  { id: "work", number: "01", label: "Selected work" },
  { id: "career", number: "02", label: "Career" },
  { id: "method", number: "03", label: "Practice" },
  { id: "about", number: "04", label: "About Danny" },
  { id: "contact", number: "05", label: "Contact" },
];

const viewHashes: Record<AtlasView, string> = { work: "work", career: "career", method: "practice", about: "about", contact: "contact" };
const viewFromHash = (hash: string): AtlasView | null => hash === "practice" ? "method" : atlasNodes.some((node) => node.id === hash) ? hash as AtlasView : null;

function WorkSheet() {
  return (
    <section className="atlas-sheet__work" aria-labelledby="atlas-work-title">
      <header><p>Things I wanted to exist</p><h2 id="atlas-work-title">Selected work</h2></header>
      {portfolioProjects.map((project) => <article key={project.id}><div><span>{project.number} / {project.label}</span><h3>{project.name}</h3><p>{project.summary}</p><a href={project.url} target="_blank" rel="noreferrer">Open project ↗</a></div><figure><ProjectVisual variant={project.visual} /></figure></article>)}
    </section>
  );
}

function CareerSheet() {
  return (
    <section className="atlas-sheet__career" aria-labelledby="atlas-career-title">
      <header><p>Experience / Detailed résumé</p><h2 id="atlas-career-title">Career</h2><a href="/danny-stone-resume.pdf" download>Download PDF ↓</a></header>
      <div>{empItems.map((role, index) => <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><div><h3>{role.name}</h3><strong>{role.title}</strong><p>{role.summary}</p><details><summary>Detailed contributions</summary><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></details></div></article>)}</div>
      <section className="atlas-career__capabilities"><header><p>Capabilities</p><h3>Three coordinates</h3></header>{coreCapabilities.map((group) => <article key={group.title}><span>{group.number}</span><div><h4>{group.title}</h4><p>{group.text}</p><small>{group.skills.join(" · ")}</small></div></article>)}{supportingGroups.map((group) => <p key={group.title}><strong>{group.title}:</strong> {group.skills.join(" · ")}</p>)}</section>
      <section className="atlas-career__education"><header><p>Academic foundation</p><h3>Education</h3></header>{eduItems.map((education) => <article key={education.school}><time>{education.years}</time><div><h4>{education.school}</h4><strong>{education.major}</strong>{education.minor && <p>{education.minor}</p>}</div></article>)}</section>
    </section>
  );
}

function MethodSheet() {
  return (
    <section className="atlas-sheet__method" aria-labelledby="atlas-method-title">
      <header><p>How I work</p><h2 id="atlas-method-title">Follow the problem.</h2></header>
      <ol><li><span>01</span><strong>Trace the whole path.</strong><p>From the person using it, through the application, and into the data.</p></li><li><span>02</span><strong>Translate the need.</strong><p>Turn competing priorities and partial context into a decision the team can use.</p></li><li><span>03</span><strong>Leave it healthier.</strong><p>Ship the useful fix and make the system clearer for whoever owns it next.</p></li></ol>
      <blockquote>Find the real constraint.<br />Make the decision legible.</blockquote>
    </section>
  );
}

function AboutSheet() {
  return (
    <section className="atlas-sheet__about" aria-labelledby="atlas-about-title">
      <img src={gardenPortrait} alt="Danny Stone standing in a garden" width="999" height="1500" />
      <div><p>{personalProfile.eyebrow}</p><h2 id="atlas-about-title">{personalProfile.heading}</h2><span>{personalProfile.body}</span></div>
    </section>
  );
}

function ContactSheet() {
  return (
    <section className="atlas-sheet__contact" aria-labelledby="atlas-contact-title">
      <header><p>Contact Danny</p><h2 id="atlas-contact-title">Let’s talk.</h2><span>{contactInvitation.body}</span></header>
      <ContactForm className="atlas-contact-form console-contact__form" />
    </section>
  );
}

const sheets: Record<AtlasView, ReactNode> = {
  work: <WorkSheet />, career: <CareerSheet />, method: <MethodSheet />, about: <AboutSheet />, contact: <ContactSheet />,
};

export default function MonographPortfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<AtlasView | null>(() => viewFromHash(location.hash.slice(1)));
  const sheetRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setActiveView(viewFromHash(location.hash.slice(1)));
  }, [location.hash]);

  useEffect(() => {
    if (activeView) sheetRef.current?.querySelector<HTMLButtonElement>(".atlas-sheet__close")?.focus();
    else if (triggerRef.current) window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, [activeView]);

  const openView = (view: AtlasView, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    navigate(`/?version=03#${viewHashes[view]}`);
  };

  const closeView = () => {
    navigate("/?version=03", { replace: true });
  };

  const handleSheetKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") { event.preventDefault(); closeView(); return; }
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return (
    <article className={`portfolio-atlas${activeView ? " portfolio-atlas--open" : ""}`}>
      <header className="atlas-header" inert={activeView ? true : undefined}><button type="button" onClick={closeView}><strong>DS</strong><span>Danny Stone</span></button><p>Application · Data · People</p><a href="/resume?version=03">Career dossier ↘</a></header>

      <section className="atlas-map" inert={activeView ? true : undefined}>
        <div className="atlas-map__grid" aria-hidden="true" />
        <p className="atlas-map__kicker">Senior software engineer / Portfolio 03</p>
        <h1><span>Danny</span><span>Stone</span></h1>
        <figure><img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" /></figure>
        <p className="atlas-map__statement">I untangle complex business software across applications, databases, integrations, and requirements.</p>
        <nav aria-label="Explore Danny Stone’s portfolio">
          {atlasNodes.map((node) => <button className={`atlas-node atlas-node--${node.id}`} type="button" onClick={(event) => openView(node.id, event.currentTarget)} key={node.id}><span>{node.number}</span><strong>{node.label}</strong></button>)}
        </nav>
        <p className="atlas-map__hint">Choose a point to explore</p>
      </section>

      {activeView && <aside ref={sheetRef} className={`atlas-sheet atlas-sheet--${activeView}`} role="dialog" aria-modal="true" aria-label={`${atlasNodes.find((node) => node.id === activeView)?.label} panel`} onKeyDown={handleSheetKeyDown}><button className="atlas-sheet__close" type="button" onClick={closeView} aria-label="Close panel">Close ×</button>{sheets[activeView]}</aside>}

      <footer className="atlas-footer"><span>Built by Danny Stone</span><span>03 / Portfolio</span><span>© {new Date().getFullYear()}</span></footer>
    </article>
  );
}
