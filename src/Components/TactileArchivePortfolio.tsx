import { PointerEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import { contactInvitation, personalProfile, portfolioProjects } from "../Features/portfolioContent";
import { handleTabKey } from "../Features/tabKeyboard";
import gardenPortrait from "../public/profile-garden-1500.jpg";
import portrait from "../public/profile-640.jpeg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

const drawers = ["Index", "Case files", "Work log", "Field notes", "Personal", "Contact"] as const;

const drawerHashes = ["", "work", "career", "practice", "about", "contact"] as const;

function IndexFolder({ openNext }: { openNext: () => void }) {
  return <section className="archive-folder archive-folder--index" aria-labelledby="archive-title">
    <div className="archive-folder__tab">A–01 / Identity</div>
    <div className="archive-index-copy"><p className="archive-stamp">Portfolio · Version 05</p><h1 id="archive-title"><span>Danny</span><span>Stone</span></h1><strong>Software, made tangible.</strong><p>I trace complex business systems from the person using them to the data underneath—then leave the whole thing easier to understand and own.</p><button type="button" onClick={openNext}>Pull the first file <span aria-hidden="true">→</span></button></div>
    <figure className="archive-portrait-card"><img src={portrait} alt="Danny Stone smiling" width="640" height="640" /><figcaption><span>SUBJECT</span><strong>Dallin “Danny” Stone</strong><small>Senior software engineer</small></figcaption></figure>
    <aside className="archive-catalog-card"><span>PRIMARY MATERIALS</span><p>C# / .NET<br />SQL Server<br />React / Angular<br />Azure</p><small>Filed 2026 · DS–05</small></aside>
  </section>;
}

function CaseFilesFolder() {
  const [activeProject, setActiveProject] = useState(0);
  const project = portfolioProjects[activeProject];
  return <section className="archive-folder archive-folder--cases" aria-labelledby="archive-cases-title">
    <div className="archive-folder__tab">B–14 / Built work</div>
    <header className="archive-section-heading"><p>Selected evidence</p><h2 id="archive-cases-title">Case files</h2><span>Two useful things built from an itch.</span></header>
    <div className="archive-case-tabs" role="tablist" aria-label="Project files">{portfolioProjects.map((item, index) => <button id={`archive-project-tab-${index}`} type="button" role="tab" aria-controls="archive-project-panel" aria-selected={activeProject === index} tabIndex={activeProject === index ? 0 : -1} className={activeProject === index ? "active" : ""} onClick={() => setActiveProject(index)} onKeyDown={(event) => handleTabKey(event, index, portfolioProjects.length, setActiveProject)} key={item.code}><span>{item.code}</span><strong>{item.name}</strong><small>{item.label}</small></button>)}</div>
    <article className="archive-case-sheet" id="archive-project-panel" role="tabpanel" aria-labelledby={`archive-project-tab-${activeProject}`} key={project.code}><div className="archive-case-copy"><div className="archive-punched-row" aria-hidden="true"><i /><i /><i /></div><p>{project.code} / Designed &amp; shipped</p><h3>{project.name}</h3><strong>{project.summary}</strong><ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul><a href={project.url} target="_blank" rel="noreferrer">Open {project.displayUrl} ↗</a></div><figure><ProjectVisual variant={project.visual} /><figcaption>FIG. {activeProject + 1} / INTERFACE STUDY</figcaption></figure></article>
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
    <figure><img src={gardenPortrait} alt="Danny Stone standing in a garden" width="999" height="1500" /><figcaption>PERSONAL ARCHIVE / OFF DUTY</figcaption></figure>
    <div className="archive-personal-copy"><p>{personalProfile.eyebrow}</p><h2 id="archive-personal-title">{personalProfile.heading}</h2><span>{personalProfile.body}</span></div>
  </section>;
}

function ContactFolder() {
  return <section className="archive-folder archive-folder--contact" aria-labelledby="archive-contact-title">
    <div className="archive-folder__tab">F–01 / Correspondence</div>
    <header><p>Open correspondence</p><h2 id="archive-contact-title">Send a note.</h2><span>{contactInvitation.body}</span><nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a></nav></header>
    <div className="archive-contact-sheet"><span className="archive-contact-sheet__label">FORM DS–C1 / PLEASE TYPE CLEARLY</span><ContactForm className="archive-contact-form" /></div>
    <aside><span>ROUTE TO</span><strong>Danny Stone</strong><small>Personal reply<br />Direct correspondence</small></aside>
  </section>;
}

export default function TactileArchivePortfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const requestedDrawer = drawerHashes.indexOf(location.hash.slice(1) as typeof drawerHashes[number]);
  const [activeDrawer, setActiveDrawer] = useState(requestedDrawer < 0 ? 0 : requestedDrawer);
  const pointerStart = useRef<number | null>(null);
  const selectDrawer = (index: number) => {
    const next = Math.max(0, Math.min(drawers.length - 1, index));
    setActiveDrawer(next);
    navigate(`/?version=05${drawerHashes[next] ? `#${drawerHashes[next]}` : ""}`, { replace: true });
  };
  const folderContent: ReactNode[] = [<IndexFolder openNext={() => selectDrawer(1)} />, <CaseFilesFolder />, <WorkLogFolder />, <FieldNotesFolder />, <PersonalFolder />, <ContactFolder />];
  const moveDrawer = (direction: number) => selectDrawer(activeDrawer + direction);
  const finishDrag = (event: PointerEvent<HTMLDivElement>) => { if (pointerStart.current === null) return; const distance = event.clientX - pointerStart.current; if (Math.abs(distance) > 55) moveDrawer(distance < 0 ? 1 : -1); pointerStart.current = null; };

  useEffect(() => {
    const next = drawerHashes.indexOf(location.hash.slice(1) as typeof drawerHashes[number]);
    setActiveDrawer(next < 0 ? 0 : next);
  }, [location.hash]);

  return <article className="tactile-archive">
    <a className="skip-link" href="#archive-current-folder">Skip to current folder</a>
    <header className="archive-header"><button type="button" className="archive-mark" onClick={() => setActiveDrawer(0)} aria-label="Open archive index"><span>DS</span><strong>Tactile Technical Archive</strong></button><p>Application systems · Data paths · People</p><Link to="/resume?version=05">Résumé <span aria-hidden="true">↗</span></Link></header>
    <div className="archive-desk"><nav className="archive-drawers" aria-label="Archive drawers">{drawers.map((drawer, index) => <button type="button" className={activeDrawer === index ? "active" : ""} aria-current={activeDrawer === index ? "page" : undefined} onClick={() => selectDrawer(index)} key={drawer}><span>0{index + 1}</span><strong>{drawer}</strong></button>)}</nav><div className="archive-stage" id="archive-current-folder" tabIndex={0} onKeyDown={(event) => { if ((event.target as HTMLElement).closest("button, a, input, textarea, select")) return; if (event.key === "ArrowRight") { event.preventDefault(); moveDrawer(1); } if (event.key === "ArrowLeft") { event.preventDefault(); moveDrawer(-1); } }} onPointerDown={(event) => { if ((event.target as HTMLElement).closest("button, a, input, textarea, select")) return; pointerStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerUp={finishDrag}><div className="archive-folder-motion" key={activeDrawer}>{folderContent[activeDrawer]}</div></div></div>
    <footer className="archive-footer"><span>DS–ARCHIVE / 05</span><span>Choose a tab · swipe the file · use ← →</span><span>0{activeDrawer + 1} / 06 · © {new Date().getFullYear()}</span></footer>
  </article>;
}
