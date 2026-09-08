import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import beachPortrait from "../public/profile-1200.jpeg";
import gardenPortrait from "../public/profile-garden-1500.jpg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

type OddityView = "home" | "work" | "career" | "practice" | "about" | "contact";

const controls: Array<{ id: OddityView; number: string; label: string }> = [
  { id: "work", number: "01", label: "Made things" },
  { id: "career", number: "02", label: "Paid things" },
  { id: "practice", number: "03", label: "How things" },
  { id: "about", number: "04", label: "Other things" },
  { id: "contact", number: "05", label: "Say things" },
];

function WorkPanel() {
  return (
    <section className="contraption-panel contraption-work" aria-labelledby="contraption-work-title">
      <header><p>Drawer 01 / Things I wanted to exist</p><h2 id="contraption-work-title">Made<br />things.</h2></header>
      <article className="contraption-project contraption-project--pf2e">
        <div><span>Useful for adventurers</span><h3>PF2e Equipment Tracker</h3><p>A complete equipment-planning workflow for one-shot characters: transformed Foundry VTT data, fast filtering, custom drag-and-drop, persistent budgets, and portable saves.</p><a href="https://pf2e-equipment.com" target="_blank" rel="noreferrer">Launch it ↗</a></div>
        <figure><ProjectVisual variant="equipment" /></figure>
      </article>
      <article className="contraption-project contraption-project--hst">
        <div><span>Useful for quilters</span><h3>HST Designer</h3><p>A visual canvas for designing half-square triangle quilts, with custom palettes, transformations, undo and redo, Firebase accounts, and shareable saves.</p><a href="https://half-square-triangle.com" target="_blank" rel="noreferrer">Arrange triangles ↗</a></div>
        <figure><ProjectVisual variant="quilt" /></figure>
      </article>
    </section>
  );
}

function CareerPanel() {
  return (
    <section className="contraption-panel contraption-career" aria-labelledby="contraption-career-title">
      <header><p>Drawer 02 / A paper trail</p><h2 id="contraption-career-title">Paid things.</h2><Link to="/resume?version=05">The serious résumé ↗</Link></header>
      <div className="contraption-receipts">
        {empItems.map((role, index) => (
          <article key={role.name}>
            <span>RECEIPT № 00{index + 1}</span><time>{role.dates}</time><h3>{role.name}</h3><strong>{role.title}</strong><p>{role.summary}</p><footer>PAID IN EXPERIENCE + CONTEXT</footer>
          </article>
        ))}
      </div>
    </section>
  );
}

function PracticePanel() {
  return (
    <section className="contraption-panel contraption-practice" aria-labelledby="contraption-practice-title">
      <header><p>Drawer 03 / Operating instructions</p><h2 id="contraption-practice-title">How to<br />Danny Stone.</h2><span>No batteries included. Curiosity is factory-installed.</span></header>
      <ol>
        <li><span>01</span><div><strong>Trace everything.</strong><p>Follow behavior from the person using it, through the application, and into the data.</p></div></li>
        <li><span>02</span><div><strong>Translate the need.</strong><p>Turn partial context and competing priorities into direction a team can actually use.</p></div></li>
        <li><span>03</span><div><strong>Leave it healthier.</strong><p>Ship the useful fix, explain the decision, and make the system easier to own next time.</p></div></li>
      </ol>
      <blockquote>Follow the problem,<br /><em>not the org chart.</em></blockquote>
    </section>
  );
}

function AboutPanel() {
  return (
    <section className="contraption-panel contraption-about" aria-labelledby="contraption-about-title">
      <figure><img src={beachPortrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" /><figcaption>Proof of life beyond the keyboard</figcaption></figure>
      <div><p>Drawer 04 / Non-computational data</p><h2 id="contraption-about-title">Contains<br />multitudes*</h2><span>*including music, LEGO, fantasy novels, Pathfinder, video games, repeat sitcom viewings, and three dogs named Tucker, Rocco, and Benny.</span></div>
      <aside aria-hidden="true">WHOLE<br />PERSON<br />ON BOARD</aside>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="contraption-panel contraption-contact" aria-labelledby="contraption-contact-title">
      <header><p>Drawer 05 / Insert interesting message</p><h2 id="contraption-contact-title">Knock,<br />knock.</h2><span>An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.</span><nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a></nav></header>
      <div className="contraption-postcard"><span aria-hidden="true">DS<br /><small>POST</small></span><ContactForm className="oddity-contact-form console-contact__form" /></div>
    </section>
  );
}

const panels: Record<Exclude<OddityView, "home">, ReactNode> = {
  work: <WorkPanel />, career: <CareerPanel />, practice: <PracticePanel />, about: <AboutPanel />, contact: <ContactPanel />,
};

export default function OddityPortfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const hashView = location.hash.replace("#v5-", "") as OddityView;
  const [activeView, setActiveView] = useState<OddityView>(controls.some(({ id }) => id === hashView) ? hashView : "home");

  useEffect(() => {
    const next = location.hash.replace("#v5-", "") as OddityView;
    setActiveView(controls.some(({ id }) => id === next) ? next : "home");
  }, [location.hash]);

  const open = (view: OddityView) => {
    setActiveView(view);
    navigate(view === "home" ? "/?version=05" : `/?version=05#v5-${view}`, { replace: true });
  };

  return (
    <article className={`contraption contraption--${activeView}`}>
      <a className="skip-link" href="#contraption-screen">Skip controls</a>
      <header className="contraption-header">
        <button type="button" onClick={() => open("home")}><span>DS</span><strong>Danny Stone’s<br />Dept. of Useful Problems</strong></button>
        <p>Portfolio apparatus № 05 · calibrated for peculiar problems</p>
        <Link to="/resume?version=05">Résumé, officially ↗</Link>
      </header>

      <div className="contraption-body">
        <nav className="contraption-controls" aria-label="Portfolio controls">
          {controls.map((control) => <button className={activeView === control.id ? "active" : ""} type="button" aria-current={activeView === control.id ? "page" : undefined} onClick={() => open(control.id)} key={control.id}><span>{control.number}</span><strong>{control.label}</strong></button>)}
          <div className="contraption-controls__lever" aria-hidden="true"><span /><i>DO NOT<br />PANIC</i></div>
        </nav>

        <main className="contraption-screen" id="contraption-screen" tabIndex={-1}>
          {activeView === "home" ? (
            <section className="contraption-home" aria-labelledby="contraption-home-title">
              <p>Senior software engineer · professional untangler · enthusiastic side-quester</p>
              <h1 id="contraption-home-title"><span>Danny</span><span>Stone</span></h1>
              <figure><img src={gardenPortrait} alt="Danny Stone standing and smiling in a garden" width="999" height="1500" /><figcaption>Fig. 01 / natural colors / face unobstructed</figcaption></figure>
              <div className="contraption-home__statement"><span aria-hidden="true">✳</span><h2>I make complicated software feel less haunted.</h2><p>I work across applications, databases, cloud integrations, and requirements to find the actual problem—and leave the whole system easier to understand, use, and change.</p></div>
              <dl><div><dt>Usually carrying</dt><dd>.NET · SQL Server · React · Azure</dd></div><div><dt>Most useful when</dt><dd>The layers disagree and the requirements arrive as a mystery.</dd></div></dl>
              <div className="contraption-home__instruction" aria-hidden="true">PUSH<br />ANY<br />BUTTON →</div>
            </section>
          ) : panels[activeView]}
        </main>
      </div>

      <footer className="contraption-footer"><span>05 / THE CONTRAPTION</span><span>{activeView === "home" ? "STANDING BY" : `DRAWER: ${activeView.toUpperCase()}`}</span><span>© {new Date().getFullYear()} DANNY STONE</span></footer>
    </article>
  );
}
