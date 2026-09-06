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
    visual: "equipment" as const,
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
    visual: "quilt" as const,
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
        <p className="eyebrow">Two side projects</p>
        <h1>I scratched my own itch. Twice.</h1>
        <p>
          One started with a Pathfinder one-shot. The other started with a quilt.
          Both became real, deployed products because I couldn’t find the tool I wanted.
        </p>
      </header>

      <section className="projects-list" aria-label="Selected personal projects">
        {projects.map((project) => (
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
          <h2 id="project-process-title">Two small products, owned end to end.</h2>
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
