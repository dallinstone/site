import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { eduItems } from "../Features/Collections/EduItems";
import { empItems } from "../Features/Collections/EmploymentItems";
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

function WorkSheet() {
  return (
    <section className="atlas-sheet__work" aria-labelledby="atlas-work-title">
      <header><p>Things I wanted to exist</p><h2 id="atlas-work-title">Selected work</h2></header>
      <article><div><span>01 / Pathfinder planning</span><h3>PF2e Equipment Tracker</h3><p>A data-driven equipment planner built around availability, budget, and a complete one-shot workflow.</p><a href="https://pf2e-equipment.com" target="_blank" rel="noreferrer">Open project ↗</a></div><figure><ProjectVisual variant="equipment" /></figure></article>
      <article><div><span>02 / Half-square triangle quilts</span><h3>HST Designer</h3><p>A visual canvas for designing half-square triangle quilts in your own colors before cutting into the fabric.</p><a href="https://half-square-triangle.com" target="_blank" rel="noreferrer">Open project ↗</a></div><figure><ProjectVisual variant="quilt" /></figure></article>
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
      <div><p>Beyond the keyboard</p><h2 id="atlas-about-title">A whole person ships better work.</h2><span>I play music, collect LEGO, read fantasy, play Pathfinder and video games, re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.</span></div>
    </section>
  );
}

function ContactSheet() {
  return (
    <section className="atlas-sheet__contact" aria-labelledby="atlas-contact-title">
      <header><p>Contact Danny</p><h2 id="atlas-contact-title">Let’s talk.</h2><span>An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.</span></header>
      <ContactForm className="atlas-contact-form console-contact__form" />
    </section>
  );
}

const sheets: Record<AtlasView, ReactNode> = {
  work: <WorkSheet />, career: <CareerSheet />, method: <MethodSheet />, about: <AboutSheet />, contact: <ContactSheet />,
};

export default function MonographPortfolio() {
  const location = useLocation();
  const initialView = location.hash.slice(1) as AtlasView;
  const [activeView, setActiveView] = useState<AtlasView | null>(atlasNodes.some((node) => node.id === initialView) ? initialView : null);

  useEffect(() => {
    const next = location.hash.slice(1) as AtlasView;
    setActiveView(atlasNodes.some((node) => node.id === next) ? next : null);
  }, [location.hash]);

  return (
    <article className={`portfolio-atlas${activeView ? " portfolio-atlas--open" : ""}`}>
      <header className="atlas-header"><button type="button" onClick={() => setActiveView(null)}><strong>DS</strong><span>Danny Stone</span></button><p>Application · Data · People</p><a href="#atlas-career-title" onClick={(event) => { event.preventDefault(); setActiveView("career"); }}>Career dossier ↘</a></header>

      <section className="atlas-map">
        <div className="atlas-map__grid" aria-hidden="true" />
        <p className="atlas-map__kicker">Senior software engineer / Portfolio 03</p>
        <h1><span>Danny</span><span>Stone</span></h1>
        <figure><img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" /></figure>
        <p className="atlas-map__statement">I untangle complex business software across applications, databases, integrations, and requirements.</p>
        <nav aria-label="Explore Danny Stone’s portfolio">
          {atlasNodes.map((node) => <button className={`atlas-node atlas-node--${node.id}`} type="button" onClick={() => setActiveView(node.id)} key={node.id}><span>{node.number}</span><strong>{node.label}</strong></button>)}
        </nav>
        <p className="atlas-map__hint">Choose a point to explore</p>
      </section>

      {activeView && <aside className={`atlas-sheet atlas-sheet--${activeView}`} aria-label={`${atlasNodes.find((node) => node.id === activeView)?.label} panel`}><button className="atlas-sheet__close" type="button" onClick={() => setActiveView(null)} aria-label="Close panel">Close ×</button>{sheets[activeView]}</aside>}

      <footer className="atlas-footer"><span>Built by Danny Stone</span><span>03 / Portfolio</span><span>© {new Date().getFullYear()}</span></footer>
    </article>
  );
}
