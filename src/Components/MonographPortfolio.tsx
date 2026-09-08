import { Link } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import portrait from "../public/profile-1200.jpeg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

export default function MonographPortfolio() {
  return (
    <article className="edition-three">
      <nav className="edition-three__rail" aria-label="Version 03 sections">
        <a className="edition-three__monogram" href="#v3-intro">D/S</a>
        <div><a href="#v3-intro">00</a><a href="#v3-work">01</a><a href="#v3-career">02</a><a href="#v3-method">03</a><a href="#v3-about">04</a><a href="#v3-contact">05</a></div>
      </nav>

      <section className="edition-three__intro" id="v3-intro">
        <header><span>Monograph № 03</span><span>Senior software engineer</span><span>Arizona · 2026</span></header>
        <h1><span>Danny</span><span>Stone</span></h1>
        <figure><img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" /></figure>
        <p className="edition-three__declaration">I make complex business software easier to understand, use, and change.</p>
        <dl><div><dt>Application</dt><dd>.NET · React · Angular</dd></div><div><dt>Data</dt><dd>SQL Server · Dapper · EF Core</dd></div><div><dt>Cloud</dt><dd>Azure · Events · Integrations</dd></div></dl>
        <a className="edition-three__continue" href="#v3-work">Turn the page ↓</a>
      </section>

      <section className="edition-three__work edition-three__folio" id="v3-work">
        <header><span>Folio 01</span><h2>Two useful obsessions.</h2><p>Side projects, designed and shipped end to end.</p></header>
        <article>
          <div><span>01 / Pathfinder planning</span><h3>PF2e Equipment Tracker</h3><p>A character-equipment planner organized around item availability, a finite pile of gold, and the actual rhythm of preparing a one-shot character.</p><ul><li>React</li><li>Vite</li><li>Python</li><li>Custom drag & drop</li></ul><a href="https://pf2e-equipment.com" target="_blank" rel="noreferrer">Visit the project ↗</a></div>
          <figure><ProjectVisual variant="equipment" /></figure>
        </article>
        <article>
          <div><span>02 / Quilt design</span><h3>HST Designer</h3><p>A visual workspace for testing half-square-triangle layouts and color palettes before cutting into the fabric.</p><ul><li>React</li><li>Firebase</li><li>Interactive canvas</li><li>Product design</li></ul><a href="https://half-square-triangle.com" target="_blank" rel="noreferrer">Visit the project ↗</a></div>
          <figure><ProjectVisual variant="quilt" /></figure>
        </article>
      </section>

      <section className="edition-three__career edition-three__folio" id="v3-career">
        <header><span>Folio 02 / Career</span><h2>Work that crosses boundaries.</h2><Link to="/resume?version=03">Detailed résumé ↗</Link></header>
        <div className="edition-three__ledger">
          {empItems.map((role, index) => (
            <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><div><h3>{role.name}</h3><strong>{role.title}</strong></div><p>{role.summary}</p></article>
          ))}
        </div>
        <p className="edition-three__career-note">Application engineering, database work, integration design, and the human work of turning partial context into a useful plan.</p>
      </section>

      <section className="edition-three__method edition-three__folio" id="v3-method">
        <header><span>Folio 03 / Method</span><h2>Follow the problem.</h2></header>
        <div className="edition-three__method-lines">
          <article><span>01</span><h3>Trace it</h3><p>Follow the behavior from the person using it, through the application, all the way into the data.</p></article>
          <article><span>02</span><h3>Translate it</h3><p>Turn competing needs and incomplete context into a decision the whole team can understand.</p></article>
          <article><span>03</span><h3>Leave it better</h3><p>Ship the useful fix, then leave behind a system that is clearer and easier for the next person to own.</p></article>
        </div>
        <blockquote>Find the real constraint.<br />Make the decision legible.<br /><em>Keep moving.</em></blockquote>
      </section>

      <section className="edition-three__about edition-three__folio" id="v3-about">
        <img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" />
        <header><span>Folio 04 / After hours</span><h2>A whole person ships better work.</h2></header>
        <p>I play music, collect LEGO, read fantasy, play Pathfinder and video games, re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.</p>
      </section>

      <section className="edition-three__contact edition-three__folio" id="v3-contact">
        <header><span>Final folio / Contact</span><h2>Send Danny<br />a note.</h2><p>An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.</p></header>
        <ContactForm className="edition-three__form console-contact__form" />
        <footer><strong>Danny Stone</strong><nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a><Link to="/resume?version=03">Résumé →</Link></nav><span>© {new Date().getFullYear()}</span></footer>
      </section>
    </article>
  );
}
