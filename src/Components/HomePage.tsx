import { Link } from "react-router-dom";
import photoLarge from "../public/profile-1200.jpeg";
import photoSmall from "../public/profile-640.jpeg";
import PageMeta from "./PageMeta";
import ProjectVisual from "./ProjectVisual";

const strengths = [
  "Efficient SQL Server",
  "C# & .NET",
  "Azure integrations",
  "React applications",
  "Technical leadership",
];

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

export default function HomePage() {
  return (
    <article className="home-page">
      <PageMeta route="/" />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">Senior Software Engineer · Database &amp; Systems Performance for Business Applications</p>
          <h1 id="hero-title">I make complex software faster, clearer, and easier to trust.</h1>
          <p className="hero__lede">
            I’m Dallin “Danny” Stone, a C#/.NET engineer who builds business
            applications and efficient SQL Server data access—designing stored
            procedures, indexes, and queries that keep application workflows fast
            and reliable—alongside Azure integrations and thoughtful modernization.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <Link className="button button--primary" to="/experience">View experience</Link>
            <Link className="button button--secondary" to="/contact">Start a conversation</Link>
          </div>
          <ul className="strength-list" aria-label="Areas of expertise">
            {strengths.map((strength) => <li key={strength}>{strength}</li>)}
          </ul>
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
          <figcaption>
            <span>Engineer by trade</span>
            <span>Problem solver by nature</span>
          </figcaption>
        </figure>
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
