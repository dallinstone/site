import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eduItems } from "../../Features/Collections/EduItems";
import { empItems } from "../../Features/Collections/EmploymentItems";
import { coreCapabilities, resumeHighlights, supportingGroups } from "./resumeData";
import { resumeSectionFromHash } from "./ResumeVariants";

type ArchiveResumeSection = "profile" | "capabilities" | "experience" | "education";

const sections: Array<{ id: ArchiveResumeSection; code: string; label: string }> = [
  { id: "profile", code: "R–01", label: "Profile" },
  { id: "capabilities", code: "R–02", label: "Capabilities" },
  { id: "experience", code: "R–03", label: "Experience" },
  { id: "education", code: "R–04", label: "Education" },
];

function ProfileSheet() {
  return <section className="archive-resume-profile"><p>Personnel summary / R–01</p><h1>Dallin <em>“Danny”</em> Stone</h1><strong>Senior Software Engineer</strong><span>C#/.NET · React/Angular · TypeScript · SQL Server · Azure</span><div>{resumeHighlights.map((item, index) => <article key={item.title}><i>0{index + 1}</i><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section>;
}

function CapabilitiesSheet() {
  return <section className="archive-resume-capabilities"><header><p>Materials index / R–02</p><h1>The useful overlap.</h1></header><div>{coreCapabilities.map((group) => <article key={group.title}><span>{group.number}</span><h2>{group.title}</h2><p>{group.text}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div><footer>{supportingGroups.map((group) => <p key={group.title}><strong>{group.title}</strong><span>{group.skills.join(" · ")}</span></p>)}</footer></section>;
}

function ExperienceSheet() {
  const [openRole, setOpenRole] = useState(0);
  return <section className="archive-resume-experience"><header><p>Employment record / R–03</p><h1>Work experience.</h1></header><div>{empItems.map((role, index) => <article className={openRole === index ? "open" : ""} key={role.name}><button type="button" aria-expanded={openRole === index} onClick={() => setOpenRole(openRole === index ? -1 : index)}><span>0{index + 1}</span><time>{role.dates}</time><h2>{role.name}</h2><strong>{role.title}</strong><i>{openRole === index ? "Fold −" : "Lift +"}</i></button>{openRole === index && <div><p>{role.summary}</p><ol>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ol></div>}</article>)}</div></section>;
}

function EducationSheet() {
  return <section className="archive-resume-education"><header><p>Academic record / R–04</p><h1>Education.</h1></header><div>{eduItems.map((education, index) => <article key={education.school}><span>0{index + 1}</span><time>{education.years}</time><h2>{education.school}</h2><strong>{education.major}</strong>{education.minor && <p>{education.minor}</p>}</article>)}</div><blockquote>Accounting taught me to respect the record. Computer information systems taught me how to shape it.</blockquote></section>;
}

const sheets: Record<ArchiveResumeSection, ReactNode> = { profile: <ProfileSheet />, capabilities: <CapabilitiesSheet />, experience: <ExperienceSheet />, education: <EducationSheet /> };

export default function TactileArchiveResume() {
  const location = useLocation();
  const navigate = useNavigate();
  const fromHash = (hash: string): ArchiveResumeSection => resumeSectionFromHash(hash);
  const [active, setActive] = useState<ArchiveResumeSection>(() => fromHash(location.hash.slice(1)));
  useEffect(() => setActive(fromHash(location.hash.slice(1))), [location.hash]);
  return <article className="archive-resume">
    <header><Link to="/?version=05">← Portfolio archive</Link><strong>DS / PERSONNEL FILE / RÉSUMÉ</strong><a href="/danny-stone-resume.pdf" download>Download PDF ↓</a></header>
    <div className="archive-resume-desk">
      <nav aria-label="Résumé file sections">{sections.map((section) => <button type="button" className={active === section.id ? "active" : ""} aria-current={active === section.id ? "page" : undefined} onClick={() => navigate(`/resume?version=05${section.id === "profile" ? "" : `#${section.id}`}`, { replace: true })} key={section.id}><span>{section.code}</span><strong>{section.label}</strong></button>)}</nav>
      <div className="archive-resume-binder"><aside aria-hidden="true"><i /><i /><i /><i /></aside><section key={active}>{sheets[active]}</section></div>
    </div>
    <footer><span>TACTILE TECHNICAL ARCHIVE</span><span>{sections.find((section) => section.id === active)?.code} / {active}</span><span>© {new Date().getFullYear()}</span></footer>
  </article>;
}
