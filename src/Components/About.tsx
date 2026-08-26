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
    title: "Make progress legible",
    text: "Good engineering includes clear communication, reliable delivery, and building trust with the customer.",
  },
  {
    number: "03",
    title: "Leave it healthier",
    text: "A feature should solve today’s problem without quietly creating tomorrow’s. I value durable design and simple approaches to keep the software scalable and reliable.",
  },
];

const stack = [
  ["Built with", "React, TypeScript, and Vite"],
  ["Designed for", "Fast, responsive, accessible reading"],
  ["Hosted on", "Google App Engine"],
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
          Outside work, I’m a musician (I sing in the choir and play the piano and organ at
          church), avid video gamer, Lego collector, Pathfinder enthusiast (happy to tell you
          about my latest character), book reader (I love fantasy and especially Brandon
          Sanderson), and unapologetic TV binge-watcher (Parks and Rec, New Girl, and
          Superstore are some of my favorites). I share life with three dogs (Tucker, Rocco,
          and Benny) and am almost always working on something new.
        </p>
      </section>

      <section className="colophon-section" aria-labelledby="colophon-title">
        <div className="section-heading">
          <p className="eyebrow">Colophon</p>
          <h2 id="colophon-title">How this site is built</h2>
          <p>This site intentionally keeps the stack small, fast, and maintainable.</p>
        </div>
        <dl className="stack-list">
          {stack.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page-cta">
        <h2>Want the professional version?</h2>
        <p>My résumé covers the systems, integrations, and teams I’ve worked with.</p>
        <Link className="button button--primary" to="/experience">View experience</Link>
      </section>
    </div>
  );
}
