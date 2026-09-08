import { Link } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import beachPortrait from "../public/profile-1200.jpeg";
import gardenPortrait from "../public/profile-garden-1500.jpg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

const oddityNav = [
  ["v5-work", "Made things"],
  ["v5-career", "Paid things"],
  ["v5-practice", "How things"],
  ["v5-about", "Other things"],
  ["v5-contact", "Say things"],
];

export default function OddityPortfolio() {
  return (
    <article className="oddity-site">
      <a className="skip-link" href="#v5-work">Skip the spectacle</a>

      <header className="oddity-header">
        <a className="oddity-brand" href="#v5-top">
          <span>DS</span>
          <strong>Danny Stone’s<br />Dept. of Useful Problems</strong>
        </a>
        <nav aria-label="Version 05 sections">
          {oddityNav.map(([id, label], index) => (
            <a href={`#${id}`} key={id}><span>0{index + 1}</span>{label}</a>
          ))}
        </nav>
        <Link to="/resume?version=05">Résumé, officially ↗</Link>
      </header>

      <main className="oddity-main">
        <section className="oddity-hero" id="v5-top" aria-labelledby="oddity-title">
          <div className="oddity-hero__stamp" aria-hidden="true">YES,<br />IT WORKS</div>
          <p className="oddity-hero__kicker">Senior software engineer · professional untangler · enthusiastic side-quester</p>
          <h1 id="oddity-title"><span>Danny</span><span>Stone</span></h1>
          <figure className="oddity-hero__portrait">
            <img src={gardenPortrait} alt="Danny Stone standing and smiling in a garden" width="999" height="1500" />
            <figcaption>Fig. 01 — The engineer, in his natural colors</figcaption>
          </figure>
          <div className="oddity-hero__intro">
            <span className="oddity-asterisk" aria-hidden="true">✳</span>
            <h2>I make complicated software feel less haunted.</h2>
            <p>I work across applications, databases, cloud integrations, and requirements to find the actual problem—and leave the whole system easier to understand, use, and change.</p>
            <a href="#v5-work">Inspect the evidence ↓</a>
          </div>
          <dl className="oddity-hero__facts">
            <div><dt>Usually carrying</dt><dd>.NET · SQL Server · React · Azure</dd></div>
            <div><dt>Most useful when</dt><dd>The layers disagree and the requirements arrive as a mystery</dd></div>
          </dl>
          <div className="oddity-squiggle" aria-hidden="true">∿∿∿∿∿∿∿∿∿</div>
        </section>

        <div className="oddity-marquee" aria-hidden="true">
          <div>APPLICATIONS ✦ DATA ✦ INTEGRATIONS ✦ PEOPLE ✦ APPLICATIONS ✦ DATA ✦ INTEGRATIONS ✦ PEOPLE ✦</div>
        </div>

        <section className="oddity-work" id="v5-work" aria-labelledby="oddity-work-title">
          <header>
            <span>01 / Evidence locker</span>
            <h2 id="oddity-work-title">Things I wanted<br />to exist, so—</h2>
            <p>I made them. Two fully deployed products, each born from a very specific itch.</p>
          </header>

          <article className="oddity-project oddity-project--pf2e">
            <div className="oddity-project__label"><span>CASE 001</span><strong>Useful for adventurers</strong></div>
            <div className="oddity-project__copy">
              <p>Pathfinder 2e planning tool</p>
              <h3>PF2e<br />Equipment<br />Tracker</h3>
              <strong>A complete equipment-planning workflow for one-shot characters.</strong>
              <p>Fast filtering, custom drag-and-drop, persistent budgets, transformed Foundry VTT data, and portable saves.</p>
              <a href="https://pf2e-equipment.com" target="_blank" rel="noreferrer">Launch the tracker ↗</a>
            </div>
            <figure><ProjectVisual variant="equipment" /><figcaption>320 gold pieces. Spend responsibly.</figcaption></figure>
          </article>

          <article className="oddity-project oddity-project--hst">
            <div className="oddity-project__label"><span>CASE 002</span><strong>Useful for quilters</strong></div>
            <div className="oddity-project__copy">
              <p>Half-square triangle quilt designer</p>
              <h3>HST<br />Designer</h3>
              <strong>A visual canvas for designing half-square triangle quilts before cutting the fabric.</strong>
              <p>Drag-and-drop composition, transformations, custom palettes, undo and redo, Firebase accounts, and shareable saves.</p>
              <a href="https://half-square-triangle.com" target="_blank" rel="noreferrer">Arrange some triangles ↗</a>
            </div>
            <figure><ProjectVisual variant="quilt" /><figcaption>Measure twice. Move blocks indefinitely.</figcaption></figure>
          </article>
        </section>

        <section className="oddity-career" id="v5-career" aria-labelledby="oddity-career-title">
          <header>
            <span>02 / Previously, on Danny’s career</span>
            <h2 id="oddity-career-title">A paper trail<br />of useful work.</h2>
            <Link to="/resume?version=05">See the detailed résumé ↗</Link>
          </header>
          <div className="oddity-career__receipts">
            {empItems.map((role, index) => (
              <article key={role.name}>
                <span>EMPLOYMENT RECEIPT № 00{index + 1}</span>
                <time>{role.dates}</time>
                <h3>{role.name}</h3>
                <strong>{role.title}</strong>
                <p>{role.summary}</p>
                <footer>PAID IN: EXPERIENCE + CONTEXT</footer>
              </article>
            ))}
          </div>
        </section>

        <section className="oddity-practice" id="v5-practice" aria-labelledby="oddity-practice-title">
          <header><span>03 / Operating instructions</span><h2 id="oddity-practice-title">How to<br />Danny Stone</h2><p>No batteries included. Curiosity is factory-installed.</p></header>
          <ol>
            <li><span>01</span><div><strong>Trace everything.</strong><p>Follow behavior from the person using it, through the application, and into the data.</p></div></li>
            <li><span>02</span><div><strong>Translate the need.</strong><p>Turn partial context and competing priorities into direction a team can actually use.</p></div></li>
            <li><span>03</span><div><strong>Leave it healthier.</strong><p>Ship the useful fix, explain the decision, and make the system easier to own next time.</p></div></li>
          </ol>
          <blockquote><span>“</span>Follow the problem,<br />not the org chart.</blockquote>
        </section>

        <section className="oddity-about" id="v5-about" aria-labelledby="oddity-about-title">
          <figure>
            <img src={beachPortrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" />
            <figcaption>Evidence that I do, occasionally, go outside.</figcaption>
          </figure>
          <div className="oddity-about__copy">
            <p>04 / Non-computational data</p>
            <h2 id="oddity-about-title">Contains<br />multitudes*</h2>
            <span>*including music, LEGO, fantasy novels, Pathfinder, video games, repeat sitcom viewings, and three dogs named Tucker, Rocco, and Benny.</span>
          </div>
          <div className="oddity-about__warning" aria-hidden="true">WHOLE<br />PERSON<br />ON BOARD</div>
        </section>

        <section className="oddity-contact" id="v5-contact" aria-labelledby="oddity-contact-title">
          <header>
            <p>05 / Insert interesting message here</p>
            <h2 id="oddity-contact-title">Knock, knock.</h2>
            <span>An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.</span>
          </header>
          <div className="oddity-contact__postcard">
            <div className="oddity-postcard__mark" aria-hidden="true">DS<br /><small>POST</small></div>
            <ContactForm className="oddity-contact-form console-contact__form" />
          </div>
          <footer>
            <strong>Danny Stone</strong>
            <nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a></nav>
          </footer>
        </section>
      </main>
    </article>
  );
}
