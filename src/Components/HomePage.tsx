import { Link } from "react-router-dom";
import photoLarge from "../public/profile-1200.jpeg";
import photoSmall from "../public/profile-640.jpeg";
import PageMeta from "./PageMeta";
import ProjectVisual from "./ProjectVisual";

const featuredProjects = [
  {
    name: "PF2e Equipment Tracker",
    category: "Data-rich React toolkit",
    visual: "equipment" as const,
    path: "/projects#pf2e-equipment-tracker",
  },
  {
    name: "HST Designer",
    category: "Interactive React design tool",
    visual: "quilt" as const,
    path: "/projects#hst-designer",
  },
];

const coreStrengths = [
  {
    number: "01",
    title: "Database engineering",
    text: "I design and tune SQL Server stored procedures, indexes, queries, and application data paths for fast, reliable business workflows.",
  },
  {
    number: "02",
    title: "Clear communication",
    text: "I help customers, product owners, stakeholders, and developers build shared understanding and make confident decisions.",
  },
  {
    number: "03",
    title: "Technical translation",
    text: "I turn business goals and customer pain points into scoped requirements, technical direction, and practical next steps for engineering teams.",
  },
];

export default function HomePage() {
  return (
    <article className="home-page">
      <PageMeta route="/" />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <h1 className="hero__name" id="hero-title">Danny Stone</h1>
          <p className="eyebrow">Senior Software Engineer for Data-Heavy Business Systems</p>
          <p className="hero__statement">I turn business needs into fast, reliable software.</p>
          <p className="hero__lede">
            I translate customer and product needs into clear technical requirements,
            then build dependable C#/.NET applications, efficient SQL Server data access,
            and Azure integrations that keep business workflows moving.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <Link className="button button--primary" to="/experience">View experience</Link>
            <Link className="button button--secondary" to="/contact">Start a conversation</Link>
          </div>
        </div>

        <figure className="portrait-card">
          <img
            className="portrait-card__image"
            src={photoLarge}
            srcSet={`${photoSmall} 640w, ${photoLarge} 1200w`}
            sizes="(max-width: 800px) calc(100vw - 2.5rem), 42vw"
            alt="Danny Stone smiling on a beach"
            width="1200"
            height="1460"
          />
        </figure>
      </section>

      <section className="home-strengths" aria-labelledby="home-strengths-title">
        <div className="home-strengths__heading">
          <p className="eyebrow">What I bring</p>
          <h2 id="home-strengths-title">Three strengths for complex software.</h2>
        </div>
        <div className="home-strengths__grid">
          {coreStrengths.map((strength) => (
            <article key={strength.number}>
              <span>{strength.number}</span>
              <h3>{strength.title}</h3>
              <p>{strength.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-projects" aria-labelledby="home-projects-title">
        <div className="home-projects__heading">
          <div>
            <p className="eyebrow">Recent React work</p>
            <h2 id="home-projects-title">Small products, fully realized.</h2>
          </div>
          <Link className="text-link" to="/projects">View the case studies <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-projects__grid">
          {featuredProjects.map((project) => (
            <Link className="home-project-card" to={project.path} key={project.name}>
              <div className="home-project-card__visual">
                <ProjectVisual variant={project.visual} />
              </div>
              <span className="home-project-card__text">
                <span>{project.category}</span>
                <strong>{project.name}</strong>
              </span>
              <span className="home-project-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-intro" aria-labelledby="beyond-code-title">
        <div>
          <p className="eyebrow">Beyond the code</p>
          <h2 id="beyond-code-title">Curiosity is the common thread.</h2>
        </div>
        <div className="home-intro__copy">
          <p>
            Music, tabletop games, Lego, and life with three dogs keep me curious—and
            that same patience and curiosity shape how I work with engineering teams.
          </p>
          <Link className="text-link" to="/about">More about me <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </article>
  );
}
