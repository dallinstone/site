import { Link } from "react-router-dom";
import PageMeta from "./PageMeta";

const principles = [
  {
    number: "01",
    title: "Understand the system",
    text: "I trace problems from the user experience through the application layers and into the data, so the fix addresses the real cause rather than the nearest symptom.",
  },
  {
    number: "02",
    title: "Translate the need",
    text: "I work with customers and product owners to define what the software needs to do, then translate between business priorities and developer-level decisions so everyone can move forward.",
  },
  {
    number: "03",
    title: "Leave it healthier",
    text: "A feature should solve today’s problem without quietly creating tomorrow’s. I prefer simple, durable designs that keep software reliable and easier to change.",
  },
];

const problems = [
  ["Slow, data-heavy workflows", "Trace performance from the user experience through the application layers and into SQL Server, then improve the parts that matter."],
  ["Unclear or competing requirements", "Ask the questions that uncover the real need, align the people involved, and turn ambiguity into actionable technical direction."],
  ["Legacy systems that need to evolve", "Modernize deliberately so teams can improve reliability and maintainability without losing the business knowledge already built into the software."],
];

export default function About() {
  return (
    <div className="about-page page-shell">
      <PageMeta route="/" />

      <header className="page-intro about-intro">
        <p className="eyebrow">About</p>
        <h1>I’m the engineer people call when the problem crosses boundaries.</h1>
        <p>
          I’m Danny. My background includes application development, data analytics,
          accounting, technical support, and people leadership. It’s an odd mix on paper,
          but a useful one in practice: I can talk with a customer, trace the code, read the
          query plan, and keep sight of the business process underneath all of it.
        </p>
      </header>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">How I tend to work</p>
          <h2 id="principles-title">A few opinions, earned the slow way.</h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-section" aria-labelledby="personal-title">
        <div>
          <p className="eyebrow">Away from the keyboard</p>
          <h2 id="personal-title">I am very capable of having too many hobbies.</h2>
        </div>
        <p>
          Outside work, I’m a musician, Pathfinder player, LEGO collector, fantasy reader,
          video gamer, and unapologetic sitcom re-watcher. Life with Tucker, Rocco, and Benny
          keeps things lively, and I’m almost always learning or building something new.
        </p>
      </section>

      <section className="problem-section" aria-labelledby="problem-title">
        <div className="section-heading">
          <p className="eyebrow">Good problems to send my way</p>
          <h2 id="problem-title">The knotty, cross-layer ones.</h2>
          <p>I’m most useful when the answer involves both the software and the people using it.</p>
        </div>
        <dl className="problem-list">
          {problems.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page-cta">
        <h2>Want the chronological version?</h2>
        <p>My résumé has the systems, integrations, teams, and dates.</p>
        <Link className="button button--primary" to="/resume?version=01">Go to work history</Link>
      </section>
    </div>
  );
}
