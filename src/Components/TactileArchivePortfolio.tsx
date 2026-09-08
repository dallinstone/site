import { PointerEvent, ReactNode, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import gardenPortrait from "../public/profile-garden-1500.jpg";
import portrait from "../public/profile-640.jpeg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

const drawers = ["Index", "Case files", "Work log", "Field notes", "Personal", "Contact"] as const;

const projects = [
  { code: "CF–001", name: "PF2e Equipment Tracker", label: "Pathfinder planning", description: "A complete equipment-planning workflow for one-shot characters, built around availability, selections, and a finite pile of gold.", evidence: ["Foundry VTT data", "Fast filtering", "Custom drag-and-drop", "Portable saves"], url: "https://pf2e-equipment.com", urlLabel: "pf2e-equipment.com", variant: "equipment" as const },
  { code: "CF–002", name: "HST Designer", label: "Quilt composition", description: "A visual canvas for designing half-square triangle quilts in your own colors before cutting into the fabric.", evidence: ["Direct manipulation", "Custom palettes", "Undo and redo", "Shareable saves"], url: "https://half-square-triangle.com", urlLabel: "half-square-triangle.com", variant: "quilt" as const },
];

function IndexFolder({ openNext }: { openNext: () => void }) {
  return <section className="archive-folder archive-folder--index" aria-labelledby="archive-title">
    <div className="archive-folder__tab">A–01 / Identity</div>
    <div className="archive-index-copy"><p className="archive-stamp">Portfolio · Version 05</p><h1 id="archive-title"><span>Danny</span><span>Stone</span></h1><strong>Software, made tangible.</strong><p>I trace complex business systems from the person using them to the data underneath—then leave the whole thing easier to understand and own.</p><button type="button" onClick={openNext}>Pull the first file <span aria-hidden="true">→</span></button></div>
    <figure className="archive-portrait-card"><img src={portrait} alt="Danny Stone smiling" width="640" height="640" /><figcaption><span>SUBJECT</span><strong>Dallin “Danny” Stone</strong><small>Senior software engineer</small></figcaption></figure>
    <aside className="archive-catalog-card"><span>PRIMARY MATERIALS</span><p>C# / .NET<br />SQL Server<br />React / Angular<br />Azure</p><small>Filed 2026 · PHX</small></aside>
  </section>;
}

function CaseFilesFolder() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];
  return <section className="archive-folder archive-folder--cases" aria-labelledby="archive-cases-title">
    <div className="archive-folder__tab">B–14 / Built work</div>
    <header className="archive-section-heading"><p>Selected evidence</p><h2 id="archive-cases-title">Case files</h2><span>Two useful things built from an itch.</span></header>
    <div className="archive-case-tabs" role="tablist" aria-label="Project files">{projects.map((item, index) => <button type="button" role="tab" aria-selected={activeProject === index} className={activeProject === index ? "active" : ""} onClick={() => setActiveProject(index)} key={item.code}><span>{item.code}</span><strong>{item.name}</strong><small>{item.label}</small></button>)}</div>
    <article className="archive-case-sheet" key={project.code}><div className="archive-case-copy"><div className="archive-punched-row" aria-hidden="true"><i /><i /><i /></div><p>{project.code} / Designed &amp; shipped</p><h3>{project.name}</h3><strong>{project.description}</strong><ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul><a href={project.url} target="_blank" rel="noreferrer">Open {project.urlLabel} ↗</a></div><figure><ProjectVisual variant={project.variant} /><figcaption>FIG. {activeProject + 1} / INTERFACE STUDY</figcaption></figure></article>
  </section>;
}

function WorkLogFolder() {
  const [openRole, setOpenRole] = useState(0);
  return <section className="archive-folder archive-folder--log" aria-labelledby="archive-log-title">
    <div className="archive-folder__tab">C–22 / Employment</div>
    <header className="archive-section-heading"><p>Chronological record</p><h2 id="archive-log-title">Work log</h2><Link to="/resume?version=05">Open full résumé ↗</Link></header>
    <div className="archive-ledger">{empItems.map((role, index) => <article className={openRole === index ? "open" : ""} key={role.name}><button type="button" aria-expanded={openRole === index} onClick={() => setOpenRole(openRole === index ? -1 : index)}><span>0{index + 1}</span><time>{role.dates}</time><div><h3>{role.name}</h3><strong>{role.title}</strong></div><i aria-hidden="true">{openRole === index ? "−" : "+"}</i></button>{openRole === index && <div className="archive-ledger__detail"><p>{role.summary}</p><ul>{role.highlights.slice(0, 3).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>}</article>)}</div>
    <aside className="archive-log-stamp"><span>STATUS</span><strong>Still building</strong></aside>
  </section>;
}

function FieldNotesFolder() {
  const notes = [["01", "Trace the whole path.", "Follow behavior from the screen through the application and into the data."], ["02", "Translate the need.", "Turn incomplete context and competing needs into direction a team can use."], ["03", "Leave it healthier.", "Ship the useful fix and leave the system clearer for whoever owns it next."]];
  return <section className="archive-folder archive-folder--notes" aria-labelledby="archive-notes-title">
    <div className="archive-folder__tab">D–08 / Method</div>
    <header className="archive-section-heading"><p>Working practice</p><h2 id="archive-notes-title">Field notes</h2><span>Follow the problem, not the org chart.</span></header>
    <div className="archive-note-stack">{notes.map(([number, title, note], index) => <article style={{ "--note-rotation": `${index === 0 ? -1.4 : index === 1 ? 1 : -.5}deg` } as React.CSSProperties} key={title}><span>{number}</span><h3>{title}</h3><p>{note}</p><small>{index === 0 ? "APPLICATION → API → SQL" : index === 1 ? "CUSTOMER → PRODUCT → TEAM" : "FIX → CLARITY → OWNERSHIP"}</small></article>)}</div>
    <div className="archive-materials"><span>WORKING MATERIALS</span><ul>{["C# / .NET", "SQL Server", "React", "Angular", "TypeScript", "Azure", "APIs", "Identity", "Discovery", "Mentoring"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
  </section>;
}

function PersonalFolder() {
  return <section className="archive-folder archive-folder--personal" aria-labelledby="archive-personal-title">
    <div className="archive-folder__tab">E–03 / Off duty</div>
    <figure><img src={gardenPortrait} alt="Danny Stone standing in a garden" width="999" height="1500" /><figcaption>OUTSIDE / PHOENIX, AZ</figcaption></figure>
    <div className="archive-personal-copy"><p>Beyond the keyboard</p><h2 id="archive-personal-title">A whole person ships better work.</h2><span>I play music, collect LEGO, read fantasy, play Pathfinder and video games, re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.</span><div className="archive-personal-labels"><i>Music</i><i>LEGO</i><i>Fantasy</i><i>Pathfinder</i><i>Three dogs</i></div></div>
    <blockquote>“Curiosity travels well between hobbies and systems.”</blockquote>
  </section>;
}

function ContactFolder() {
  return <section className="archive-folder archive-folder--contact" aria-labelledby="archive-contact-title">
    <div className="archive-folder__tab">F–01 / Correspondence</div>
    <header><p>Open correspondence</p><h2 id="archive-contact-title">Send a note.</h2><span>An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.</span><nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a></nav></header>
    <div className="archive-contact-sheet"><span className="archive-contact-sheet__label">FORM DS–C1 / PLEASE TYPE CLEARLY</span><ContactForm className="archive-contact-form" /></div>
    <aside><span>ROUTE TO</span><strong>Danny Stone</strong><small>Phoenix, Arizona<br />United States</small></aside>
  </section>;
}

export default function TactileArchivePortfolio() {
  const [activeDrawer, setActiveDrawer] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const folderContent: ReactNode[] = [<IndexFolder openNext={() => setActiveDrawer(1)} />, <CaseFilesFolder />, <WorkLogFolder />, <FieldNotesFolder />, <PersonalFolder />, <ContactFolder />];
  const moveDrawer = (direction: number) => setActiveDrawer((current) => Math.max(0, Math.min(drawers.length - 1, current + direction)));
  const finishDrag = (event: PointerEvent<HTMLDivElement>) => { if (pointerStart.current === null) return; const distance = event.clientX - pointerStart.current; if (Math.abs(distance) > 55) moveDrawer(distance < 0 ? 1 : -1); pointerStart.current = null; };

  return <article className="tactile-archive" onKeyDown={(event) => { if (event.key === "ArrowRight") moveDrawer(1); if (event.key === "ArrowLeft") moveDrawer(-1); }}>
    <a className="skip-link" href="#archive-current-folder">Skip to current folder</a>
    <header className="archive-header"><button type="button" className="archive-mark" onClick={() => setActiveDrawer(0)} aria-label="Open archive index"><span>DS</span><strong>Tactile Technical Archive</strong></button><p>Application systems · Data paths · People</p><Link to="/resume?version=05">Résumé <span aria-hidden="true">↗</span></Link></header>
    <div className="archive-desk"><nav className="archive-drawers" aria-label="Archive drawers">{drawers.map((drawer, index) => <button type="button" className={activeDrawer === index ? "active" : ""} aria-current={activeDrawer === index ? "page" : undefined} onClick={() => setActiveDrawer(index)} key={drawer}><span>0{index + 1}</span><strong>{drawer}</strong></button>)}</nav><div className="archive-stage" id="archive-current-folder" tabIndex={0} onPointerDown={(event) => { if ((event.target as HTMLElement).closest("button, a, input, textarea, select")) return; pointerStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerUp={finishDrag}><div className="archive-folder-motion" key={activeDrawer}>{folderContent[activeDrawer]}</div></div></div>
    <footer className="archive-footer"><span>DS–ARCHIVE / 05</span><span>Pull a tab · drag a file · use ← →</span><span>0{activeDrawer + 1} / 06 · © {new Date().getFullYear()}</span></footer>
  </article>;
}
