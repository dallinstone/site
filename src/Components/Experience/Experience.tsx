import { useState } from "react";
import { eduItems } from "../../Features/Collections/EduItems";
import { empItems } from "../../Features/Collections/EmploymentItems";
import PageMeta from "../PageMeta";
import Employer from "./Employer";

const skillGroups = [
  { title: "Application engineering", skills: ["C#", ".NET", "ASP.NET", "REST APIs", "React", "Angular", "TypeScript", "Identity & SSO"] },
  { title: "SQL Server", skills: ["Stored procedure design", "Index design", "Trigger, function, and view creation"] },
  { title: "Data access", skills: ["Dapper", "Entity Framework Core"]},
  { title: "Azure & integrations", skills: ["Microsoft Azure", "Azure Functions", "Azure Service Bus", "Cloud migrations", "Azure Data Factory", "Webhooks"] },
  { title: "Quality & delivery", skills: ["xUnit", "Moq", "NSubstitute", "Playwright", "SDLC"] },
  { title: "Leadership", skills: ["Technical mentoring", "Interviewing", "Hiring", "One-on-ones", "Stakeholder communication"]}
];

export default function Experience() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <div className="resume-page page-shell">
      <PageMeta route="/experience" />

      <header className="resume-hero">
        <div>
          <p className="eyebrow">Professional résumé</p>
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

      <section className="resume-summary" aria-labelledby="summary-title">
        <h2 id="summary-title">Engineering profile</h2>
        <p>
          Senior software engineer working at the intersection of application architecture,
          SQL Server data access, and distributed systems. I design efficient stored
          procedures, indexes, queries, and application data paths; build Azure integrations
          with services including Azure Functions and Service Bus; and modernize C#/.NET
          business systems. My focus is software engineering around complex applications
          and protecting PII data.
        </p>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">Core capabilities</p>
          <h2 id="skills-title">Technical toolkit</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-title">
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

      <section className="education-section" aria-labelledby="education-title">
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
  );
}
