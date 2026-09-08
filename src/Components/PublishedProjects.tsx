import PageMeta from "./PageMeta";
import ProjectVisual from "./ProjectVisual";
import { portfolioProjects } from "../Features/portfolioContent";

export default function Projects() {
  return (
    <div className="projects-page page-shell">
      <PageMeta route="/" />

      <header className="page-intro projects-intro">
        <p className="eyebrow">Side projects</p>
        <h1>Problems I couldn’t leave alone.</h1>
        <p>
          One started with a Pathfinder one-shot. The other started with a quilt.
          Both became real, deployed products because I couldn’t find the tool I wanted.
        </p>
      </header>

      <section className="projects-list" aria-label="Selected personal projects">
        {portfolioProjects.map((project) => (
          <article className="project-card" id={project.id} key={project.name} tabIndex={-1}>
            <aside className="project-card__aside">
              <span className="project-card__number">{project.number}</span>
              <p>{project.category}</p>
              <ul className="project-tags" aria-label={`${project.name} technologies and capabilities`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </aside>
            <div className="project-card__content">
              <div className="project-card__label">
                <span>Live on the internet</span>
                <span>{project.displayUrl}</span>
              </div>
              <h2>{project.name}</h2>
              <figure className="project-visual" aria-label={`Stylized preview of ${project.name}`}>
                <ProjectVisual variant={project.visual} />
              </figure>
              <p className="project-card__description">{project.description}</p>
              <div className="project-case-study">
                <section>
                  <h3>The itch</h3>
                  <p>{project.problem}</p>
                </section>
                <section>
                  <h3>The tricky part</h3>
                  <p>{project.engineering}</p>
                </section>
                <section>
                  <h3>What shipped</h3>
                  <p>{project.result}</p>
                </section>
                {project.next && (
                  <section>
                    <h3>Still thinking about</h3>
                    <p>{project.next}</p>
                  </section>
                )}
              </div>
              <a className="button button--primary project-link" href={project.url} target="_blank" rel="noreferrer">
                Open {project.displayUrl}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="project-process" aria-labelledby="project-process-title">
        <div className="section-heading">
          <p className="eyebrow">A note on the work</p>
          <h2 id="project-process-title">Built and owned end to end.</h2>
        </div>
        <div className="project-process__grid">
          <article>
            <h3>Product</h3>
            <p>I chose the problems, cut the feature lists, and decided what “useful” meant.</p>
          </article>
          <article>
            <h3>Engineering</h3>
            <p>I handled the component design, state, data transformation, integrations, and the weird edge cases.</p>
          </article>
          <article>
            <h3>Shipping</h3>
            <p>I took both from a blank repository to a public URL and still maintain them.</p>
          </article>
        </div>
        <p className="project-process__note">
          I use AI coding assistants as part of my workflow. The product calls, architecture,
          review, and responsibility for the finished work are mine.
        </p>
      </section>
    </div>
  );
}
