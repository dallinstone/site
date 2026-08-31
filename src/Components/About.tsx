import { Link } from "react-router-dom";
import PageMeta from "./PageMeta";

const principles = [
  {
    number: "01",
    title: "Understand the system",
    text: "I excel at tracing problems from the user experience through the application layers and into the data to quickly resolve customer issues.",
  },
  {
    number: "02",
    title: "Translate the need",
    text: "I work with customers and product owners to define what the software needs to do, then translate between business priorities and developer-level decisions so everyone can move forward.",
  },
  {
    number: "03",
    title: "Leave it healthier",
    text: "A feature should solve today’s problem without quietly creating tomorrow’s. I value durable design and simple approaches to keep the software scalable and reliable.",
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
      <PageMeta route="/about" />

      <header className="page-intro about-intro">
        <p className="eyebrow">About me</p>
        <h1>Software is hard. I make it clearer.</h1>
        <p>
          I’m Danny, a senior software engineer with a background that spans application
          development, data analytics, accounting, technical support, and people leadership.
          That mix helps me connect implementation details to the people and business
          processes a system ultimately serves. I’m especially good at uncovering what
          customers need to make their businesses easier to run.
        </p>
      </header>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">How I work</p>
          <h2 id="principles-title">A practical engineering philosophy</h2>
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
          <p className="eyebrow">Off the clock</p>
          <h2 id="personal-title">Three dogs, plenty of hobbies.</h2>
        </div>
        <p>
          Outside work, I’m a musician, Pathfinder player, Lego collector, fantasy reader,
          video gamer, and unapologetic sitcom re-watcher. Life with Tucker, Rocco, and Benny
          keeps things lively, and I’m almost always learning or building something new.
        </p>
      </section>

      <section className="problem-section" aria-labelledby="problem-title">
        <div className="section-heading">
          <p className="eyebrow">Where I add value</p>
          <h2 id="problem-title">Problems I’m especially good at solving</h2>
          <p>The common thread is turning complexity into a system that people can understand, trust, and improve.</p>
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
        <h2>See how that shows up in practice.</h2>
        <p>My résumé covers the systems, integrations, customers, and teams behind this work.</p>
        <Link className="button button--primary" to="/experience">View experience</Link>
      </section>
    </div>
  );
}
