import { useState } from "react";
import { eduItems } from "../../Features/Collections/EduItems";
import { empItems } from "../../Features/Collections/EmploymentItems";
import PageMeta from "../PageMeta";
import Employer from "./Employer";

const coreCapabilities = [
  {
    number: "01",
    title: "Database engineering",
    text: "Designing efficient data paths and tracing performance from the application into SQL Server.",
    skills: ["SQL Server", "Stored procedures", "Index & query tuning", "Dapper", "Entity Framework Core", "Views, functions & triggers"],
  },
  {
    number: "02",
    title: "Requirements & communication",
    text: "Creating shared understanding between the people who use, define, and build the software.",
    skills: ["Requirements discovery", "Customer communication", "Product owner partnership", "Technical translation", "Stakeholder communication", "Technical mentoring"],
  },
  {
    number: "03",
    title: "Application systems",
    text: "Building and modernizing reliable business applications across frontend, API, identity, and service layers.",
    skills: ["C#", ".NET", "ASP.NET", "REST APIs", "React", "Angular", "TypeScript", "Identity & SSO"],
  },
];

const supportingGroups = [
  { title: "Azure & integrations", skills: ["Microsoft Azure", "Azure Functions", "Azure Service Bus", "Cloud migrations", "Azure Data Factory", "Webhooks"] },
  { title: "Quality & delivery", skills: ["xUnit", "Moq", "NSubstitute", "Playwright", "SDLC"] },
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
        <div className="resume-summary__content">
          <p>I help teams make good decisions about complex, data-heavy business software.</p>
          <ul className="profile-highlights">
            <li><strong>Translate the need.</strong> Partner with customers and product owners to clarify business goals and give development teams useful technical direction.</li>
            <li><strong>Engineer the data path.</strong> Design efficient SQL Server procedures, indexes, queries, and application access patterns.</li>
            <li><strong>Deliver reliable systems.</strong> Build and modernize C#/.NET applications and Azure integrations while protecting sensitive data.</li>
          </ul>
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">Core capabilities</p>
          <h2 id="skills-title">The work I’m known for</h2>
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
