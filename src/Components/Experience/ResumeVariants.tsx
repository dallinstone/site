import { KeyboardEvent, ReactNode, UIEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eduItems } from "../../Features/Collections/EduItems";
import { empItems } from "../../Features/Collections/EmploymentItems";
import { coreCapabilities, resumeHighlights, supportingGroups } from "./resumeData";
import { handleTabKey } from "../../Features/tabKeyboard";

const pdfLink = <a href="/danny-stone-resume.pdf" download>Download PDF ↓</a>;

type ResumeSection = "profile" | "capabilities" | "experience" | "education";
const resumeSections: Array<{ id: ResumeSection; label: string }> = [
  { id: "profile", label: "Short version" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];
export const resumeSectionFromHash = (hash: string): ResumeSection => {
  const aliases: Record<string, ResumeSection> = {
    about: "profile",
    summary: "profile",
    skills: "capabilities",
    career: "experience",
    work: "experience",
  };
  const normalized = aliases[hash] ?? hash;
  return resumeSections.some((section) => section.id === normalized) ? normalized as ResumeSection : "profile";
};

function SkillCloud() {
  return <>{coreCapabilities.map((group) => <article key={group.title}><span>{group.number}</span><h3>{group.title}</h3><p>{group.text}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</>;
}

function EducationCards() {
  return <>{eduItems.map((education) => <article key={education.school}><time>{education.years}</time><h3>{education.school}</h3><strong>{education.major}</strong>{education.minor && <p>{education.minor}</p>}</article>)}</>;
}

function WorkspaceProfile() {
  return <section className="work-resume-profile"><p>Résumé / System overview</p><h1>Dallin “Danny”<br /><em>Stone</em></h1><strong>I help teams make good decisions about complex, data-heavy business software.</strong><ul>{resumeHighlights.map((item) => <li key={item.title}><span>✓</span><p><b>{item.title}</b> {item.text}</p></li>)}</ul></section>;
}

function WorkspaceCapabilities() {
  return <section className="work-resume-capabilities"><header><p>Core modules</p><h1>System map.</h1></header><div><SkillCloud /></div><footer>{supportingGroups.map((group) => <p key={group.title}><strong>{group.title}:</strong> {group.skills.join(" · ")}</p>)}</footer></section>;
}

function WorkspaceExperience() {
  const [activeRole, setActiveRole] = useState(0);
  const role = empItems[activeRole];
  return <section className="work-resume-experience"><header><p>Career database</p><h1>Work experience.</h1></header><div className="work-resume-jobs" role="tablist" aria-label="Employers">{empItems.map((item, index) => <button id={`employer-tab-${index}`} type="button" role="tab" aria-controls="employer-panel" aria-selected={activeRole === index} tabIndex={activeRole === index ? 0 : -1} onClick={() => setActiveRole(index)} onKeyDown={(event) => handleTabKey(event, index, empItems.length, setActiveRole)} key={item.name}><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.dates}</small></button>)}</div><article id="employer-panel" role="tabpanel" aria-labelledby={`employer-tab-${activeRole}`}><header><time>{role.dates}</time><h2>{role.name}</h2><strong>{role.title}</strong><p>{role.summary}</p></header><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article></section>;
}

function WorkspaceEducation() {
  return <section className="work-resume-education"><header><p>Academic records</p><h1>Education.</h1></header><div><EducationCards /></div></section>;
}

const workspaceScreens: Record<ResumeSection, ReactNode> = { profile: <WorkspaceProfile />, capabilities: <WorkspaceCapabilities />, experience: <WorkspaceExperience />, education: <WorkspaceEducation /> };

export function WorkspaceResume() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState<ResumeSection>(() => resumeSectionFromHash(location.hash.slice(1)));
  useEffect(() => setActive(resumeSectionFromHash(location.hash.slice(1))), [location.hash]);
  const select = (section: ResumeSection) => navigate(`/resume?version=02${section === "profile" ? "" : `#${section}`}`, { replace: true });
  return <article className="work-resume"><header className="work-resume-bar"><Link to="/?version=02#career">← Portfolio 02</Link><strong>DANNY_STONE / RESUME.SYS</strong>{pdfLink}</header><div className="work-resume-body"><nav>{resumeSections.map((section, index) => <button type="button" className={active === section.id ? "active" : ""} aria-current={active === section.id ? "page" : undefined} onClick={() => select(section.id)} key={section.id}><span>0{index + 1}</span>{section.label}</button>)}</nav><main key={active}>{workspaceScreens[active]}</main></div><footer><span>Senior software engineer</span><span>STATUS: READY</span><span>C#/.NET · SQL SERVER · REACT · AZURE</span></footer></article>;
}

function AtlasProfile() {
  return <section className="atlas-resume-profile"><p>Summary coordinate</p><h2>The short version.</h2><strong>I help teams make good decisions about complex, data-heavy business software.</strong><ol>{resumeHighlights.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><b>{item.title}</b><p>{item.text}</p></div></li>)}</ol></section>;
}

function AtlasCapabilities() {
  return <section className="atlas-resume-capabilities"><header><p>Capability coordinate</p><h2>Three coordinates.</h2></header><div><SkillCloud /></div>{supportingGroups.map((group) => <footer key={group.title}><strong>{group.title}</strong><span>{group.skills.join(" · ")}</span></footer>)}</section>;
}

function AtlasExperience() {
  return <section className="atlas-resume-experience"><header><p>Career coordinate</p><h2>Work experience.</h2></header>{empItems.map((role, index) => <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><div><h3>{role.name}</h3><strong>{role.title}</strong><p>{role.summary}</p><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</section>;
}

function AtlasEducation() {
  return <section className="atlas-resume-education"><header><p>Academic coordinate</p><h2>Education.</h2></header><div><EducationCards /></div></section>;
}

const atlasSheets: Record<ResumeSection, ReactNode> = { profile: <AtlasProfile />, capabilities: <AtlasCapabilities />, experience: <AtlasExperience />, education: <AtlasEducation /> };

export function AtlasResume() {
  const location = useLocation();
  const navigate = useNavigate();
  const requested = location.hash.slice(1);
  const [active, setActive] = useState<ResumeSection | null>(requested ? resumeSectionFromHash(requested) : null);
  const panelRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => setActive(location.hash ? resumeSectionFromHash(location.hash.slice(1)) : null), [location.hash]);
  useEffect(() => { if (active) panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus(); else if (triggerRef.current) window.requestAnimationFrame(() => triggerRef.current?.focus()); }, [active]);
  const open = (section: ResumeSection, trigger: HTMLButtonElement) => { triggerRef.current = trigger; navigate(`/resume?version=03#${section}`); };
  const close = () => navigate("/resume?version=03", { replace: true });
  const handlePanelKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") { event.preventDefault(); close(); return; }
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  return <article className={`atlas-resume${active ? " atlas-resume--open" : ""}`}>
    <header inert={active ? true : undefined}><Link to="/?version=03">← Return to atlas 03</Link><strong>Danny Stone / Career atlas</strong>{pdfLink}</header>
    <main inert={active ? true : undefined}><div className="atlas-resume-grid" aria-hidden="true" /><p>Senior software engineer / Detailed résumé</p><h1><span>Dallin</span><em>“Danny”</em><span>Stone</span></h1><p className="atlas-resume-summary">C#/.NET · React/Angular · TypeScript · SQL Server · Azure</p><nav aria-label="Résumé coordinates">{resumeSections.map((section, index) => <button type="button" onClick={(event) => open(section.id, event.currentTarget)} key={section.id}><span>0{index + 1}</span><strong>{section.label}</strong></button>)}</nav><small>Choose a coordinate</small></main>
    {active && <aside ref={panelRef} role="dialog" aria-modal="true" aria-label={`${resumeSections.find((section) => section.id === active)?.label} résumé section`} onKeyDown={handlePanelKeyDown}><button type="button" onClick={close}>Close ×</button>{atlasSheets[active]}</aside>}
    <footer><span>03 / RÉSUMÉ ATLAS</span><span>APPLICATION · DATA · PEOPLE</span><span>© {new Date().getFullYear()}</span></footer>
  </article>;
}

const reelSlides = ["Intro", "Capabilities", ...empItems.map((role) => role.name), "Education"];

export function StudioResume() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positioningRef = useRef(true);
  const location = useLocation();
  const navigate = useNavigate();
  const sectionSlides: ResumeSection[] = ["profile", "capabilities", ...empItems.map(() => "experience" as const), "education"];
  const initialSlide = Math.max(0, sectionSlides.indexOf(resumeSectionFromHash(location.hash.slice(1))));
  const [active, setActive] = useState(initialSlide);
  const goTo = (index: number) => { const target = trackRef.current?.children.item(index) as HTMLElement | null; target?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" }); setActive(index); const section = sectionSlides[index]; navigate(`/resume?version=04${section === "profile" ? "" : `#${section}`}`, { replace: true }); };
  const sync = (event: UIEvent<HTMLDivElement>) => { if (positioningRef.current) return; const next = Math.max(0, Math.min(reelSlides.length - 1, Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))); setActive(next); const section = sectionSlides[next]; navigate(`/resume?version=04${section === "profile" ? "" : `#${section}`}`, { replace: true }); };
  useLayoutEffect(() => { positioningRef.current = true; const section = resumeSectionFromHash(location.hash.slice(1)); const index = Math.max(0, sectionSlides.indexOf(section)); setActive(index); const track = trackRef.current; const target = track?.children.item(index) as HTMLElement | null; if (track && target) { const scrollBehavior = track.style.scrollBehavior; track.style.scrollBehavior = "auto"; track.scrollLeft = target.offsetLeft; track.style.scrollBehavior = scrollBehavior; } const timer = window.setTimeout(() => { positioningRef.current = false; }, 200); return () => window.clearTimeout(timer); }, [location.hash]);
  return <article className="studio-resume"><header><Link to="/?version=04">← Portfolio 04</Link><nav aria-label="Résumé reel slides">{reelSlides.map((slide, index) => <button type="button" className={active === index ? "active" : ""} aria-label={slide} onClick={() => goTo(index)} key={slide}>0{index}</button>)}</nav>{pdfLink}</header><div className="studio-resume-track" ref={trackRef} onScroll={sync} tabIndex={0}>
    <section className="studio-resume-intro"><p>Résumé reel / 00</p><h1>Dallin<br /><em>“Danny”</em><br />Stone</h1><strong>Senior Software Engineer</strong><span>C#/.NET · React/Angular · TypeScript · SQL Server · Azure</span><div>{resumeHighlights.map((item) => <p key={item.title}><b>{item.title}</b> {item.text}</p>)}</div><button type="button" onClick={() => goTo(1)}>Roll résumé →</button></section>
    <section className="studio-resume-skills"><header><p>01 / Where the work converges</p><h2>Three lenses,<br />one system.</h2></header><div><SkillCloud /></div><footer>{supportingGroups.map((group) => <span key={group.title}><strong>{group.title}</strong> / {group.skills.join(" · ")}</span>)}</footer></section>
    {empItems.map((role, index) => <section className={`studio-resume-role studio-resume-role--${index + 1}`} key={role.name}><aside><span>0{index + 2}</span><time>{role.dates}</time></aside><header><p>Career history</p><h2>{role.name}</h2><strong>{role.title}</strong><span>{role.summary}</span></header><ol>{role.highlights.map((highlight, itemIndex) => <li key={highlight}><span>0{itemIndex + 1}</span>{highlight}</li>)}</ol></section>)}
    <section className="studio-resume-education"><header><p>05 / Academic foundation</p><h2>Education.</h2></header><div><EducationCards /></div><footer>Applications <i>×</i> Data <i>×</i> Integrations <i>×</i> People</footer></section>
  </div><footer><span>04 / RÉSUMÉ REEL</span><span>0{active} / 05 · SWIPE OR USE THE DOTS</span><span>© {new Date().getFullYear()}</span></footer></article>;
}
