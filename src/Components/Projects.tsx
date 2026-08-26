import PageMeta from "./PageMeta";
import ProjectVisual from "./ProjectVisual";

const projects = [
  {
    number: "01",
    id: "pf2e-equipment-tracker",
    name: "PF2e Equipment Tracker",
    category: "Pathfinder 2e planning tools",
    url: "https://pf2e-equipment.com",
    displayUrl: "pf2e-equipment.com",
    visual: "equipment",
    description:
      "A data-driven toolkit that helps Pathfinder 2e players plan equipment around character level and available gold. Users can filter and select affordable items, track their remaining budget, manage equipped gear, and save, load, import, or export their selections. The site also includes an ancestry search tool with flexible filters.",
    tags: ["React", "Vite", "Data-rich UI", "Filtering & state", "Responsive design"],
    problem:
      "Other Pathfinder character and item builders did not quite fit how I prepare characters for one-shots. I wanted one place to track which items were available at each level, what I had selected, and how much gold I had spent.",
    engineering:
      "Drag and drop resisted the existing libraries I tried, so I worked through a custom approach. I also sourced the complete item corpus from Foundry VTT, then wrote a Python transformation script to turn it into JSON the React application could use.",
    result:
      "A deployed toolkit that brings equipment availability, selections, and character budgets into one repeatable planning workflow for one-shot preparation.",
  },
  {
    number: "02",
    id: "hst-designer",
    name: "HST Designer",
    category: "Interactive quilt-pattern design",
    url: "https://half-square-triangle.com",
    displayUrl: "half-square-triangle.com",
    visual: "quilt",
    description:
      "A visual workspace for designing quilts from half-square-triangle blocks. The React interface supports drag-and-drop composition, custom color palettes, rotation and flipping, undo and redo, configurable quilt dimensions, and saved or shareable patterns backed by Firebase.",
    tags: ["React", "Vite", "Firebase", "Drag & drop", "Interactive canvas"],
    problem:
      "I had trouble visualizing quilt patterns in colors other than the creator’s examples. I built HST Designer so I could experiment with palettes and layouts before committing fabric to a pattern.",
    engineering:
      "The biggest new challenge was integrating Firebase’s document-oriented NoSQL database and Google sign-in so users could save designs to an account. That complements the interactive canvas, palette state, transformations, and undo and redo tools.",
    result:
      "A deployed visual workspace where quilt layouts can be explored, saved, and shared before fabric is committed to a pattern.",
    next:
      "I see room to grow HST Designer beyond a personal planning tool and explore a viable product model in a future release.",
  },
];

export default function Projects() {
  return (
    <div className="projects-page page-shell">
      <PageMeta route="/projects" />

      <header className="page-intro projects-intro">
        <p className="eyebrow">Independent work</p>
        <h1>React projects built around real, specific problems.</h1>
        <p>
          Two deployed tools built for problems I encountered in tabletop gaming and
          quilting. Each case study focuses on the user need, the engineering constraints,
          and what the finished product made possible.
        </p>
      </header>

      <section className="projects-list" aria-label="Selected personal projects">
        {projects.map((project) => (
          <article className="project-card" id={project.id} key={project.name} tabIndex={-1}>
            <div className="project-card__visual">
              <ProjectVisual variant={project.visual as "equipment" | "quilt"} />
            </div>
            <div className="project-card__content">
              <div className="project-card__label">
                <span>{project.number}</span>
                <span>Live application</span>
              </div>
              <p className="project-card__category">{project.category}</p>
              <h2>{project.name}</h2>
              <p className="project-card__description">{project.description}</p>
              <div className="project-case-study">
                <section>
                  <h3>Why I built it</h3>
                  <p>{project.problem}</p>
                </section>
                <section>
                  <h3>Hardest technical problems</h3>
                  <p>{project.engineering}</p>
                </section>
                <section>
                  <h3>Result</h3>
                  <p>{project.result}</p>
                </section>
                {project.next && (
                  <section>
                    <h3>Where it could go</h3>
                    <p>{project.next}</p>
                  </section>
                )}
              </div>
              <ul className="project-tags" aria-label={`${project.name} technologies and capabilities`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a className="button button--primary project-link" href={project.url} target="_blank" rel="noreferrer">
                Visit {project.displayUrl}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="project-process" aria-labelledby="project-process-title">
        <div className="section-heading">
          <p className="eyebrow">What the work demonstrates</p>
          <h2 id="project-process-title">From a specific need to a working product.</h2>
        </div>
        <div className="project-process__grid">
          <article>
            <span>01</span>
            <h3>Product ownership</h3>
            <p>I defined the problems, chose the feature sets, and shaped each experience around its users.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Technical problem solving</h3>
            <p>I worked through component design, state, data transformation, integrations, responsive behavior, and deployment.</p>
          </article>
          <article>
            <span>03</span>
            <h3>End-to-end delivery</h3>
            <p>I took each project from an observed problem through architecture, implementation, review, and a live release.</p>
          </article>
        </div>
        <p className="project-process__note">
          I use AI coding assistants to accelerate research and implementation while retaining
          ownership of product decisions, architecture, review, and the final result.
        </p>
      </section>
    </div>
  );
}
