import { UIEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import portrait from "../public/profile-1200.jpeg";
import gardenPortrait from "../public/profile-garden-1500.jpg";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

const spreadLabels = ["Intro", "PF2e", "HST", "Career", "Practice", "About", "Contact"];

export default function StudioReelPortfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSpread, setActiveSpread] = useState(0);

  const goToSpread = (index: number) => {
    const track = trackRef.current;
    const target = track?.children.item(index) as HTMLElement | null;
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveSpread(index);
  };

  const syncActiveSpread = (event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    setActiveSpread(Math.max(0, Math.min(spreadLabels.length - 1, Math.round(track.scrollLeft / track.clientWidth))));
  };

  return (
    <article className="studio-reel" onKeyDown={(event) => {
      if (event.key === "ArrowRight") goToSpread(Math.min(spreadLabels.length - 1, activeSpread + 1));
      if (event.key === "ArrowLeft") goToSpread(Math.max(0, activeSpread - 1));
    }}>
      <header className="studio-reel__header">
        <button className="studio-reel__brand" type="button" onClick={() => goToSpread(0)}>Danny Stone</button>
        <nav aria-label="Version 04 spreads">{spreadLabels.map((label, index) => <button className={activeSpread === index ? "active" : ""} type="button" aria-label={`Open ${label}`} aria-current={activeSpread === index ? "page" : undefined} onClick={() => goToSpread(index)} key={label}>0{index}</button>)}</nav>
        <Link to="/resume?version=04">Résumé ↗</Link>
      </header>

      <div className="studio-reel__track" ref={trackRef} onScroll={syncActiveSpread} tabIndex={0}>
        <section className="studio-spread studio-spread--intro" aria-labelledby="reel-intro-title">
          <div className="studio-intro__copy"><p>Portfolio / Version 04</p><h1 id="reel-intro-title">Danny<br /><em>Stone</em></h1><strong>Software, made clearer.</strong><span>I work across applications, databases, cloud integrations, and requirements to untangle complex business systems.</span></div>
          <figure><img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" /></figure>
          <footer><span>.NET · SQL Server · React · Azure</span><button type="button" onClick={() => goToSpread(1)}>Begin the reel →</button></footer>
        </section>

        <section className="studio-spread studio-spread--project studio-spread--pf2e" aria-labelledby="reel-pf2e-title">
          <aside><strong>01</strong><span>Pathfinder planning</span></aside>
          <div className="studio-project__copy"><p>Designed and shipped</p><h2 id="reel-pf2e-title">PF2e Equipment Tracker</h2><strong>A complete equipment-planning workflow for one-shot characters.</strong><dl><div><dt>The itch</dt><dd>Existing tools listed items, but didn’t help manage availability, selections, and a finite pile of gold in one place.</dd></div><div><dt>The build</dt><dd>Transformed Foundry VTT data, fast filtering, custom drag-and-drop, persistent budgets, and portable saves.</dd></div></dl><a href="https://pf2e-equipment.com" target="_blank" rel="noreferrer">Open pf2e-equipment.com ↗</a></div>
          <figure><ProjectVisual variant="equipment" /></figure>
        </section>

        <section className="studio-spread studio-spread--project studio-spread--hst" aria-labelledby="reel-hst-title">
          <aside><strong>02</strong><span>Half-square triangle quilts</span></aside>
          <div className="studio-project__copy"><p>Designed and shipped</p><h2 id="reel-hst-title">HST Designer</h2><strong>A visual canvas for designing half-square triangle quilts before cutting the fabric.</strong><dl><div><dt>The itch</dt><dd>Patterns were easy to find and surprisingly hard to imagine outside the example palette.</dd></div><div><dt>The build</dt><dd>Drag-and-drop composition, transformations, custom palettes, undo and redo, Firebase accounts, and shareable saves.</dd></div></dl><a href="https://half-square-triangle.com" target="_blank" rel="noreferrer">Open half-square-triangle.com ↗</a></div>
          <figure><ProjectVisual variant="quilt" /></figure>
        </section>

        <section className="studio-spread studio-spread--career" aria-labelledby="reel-career-title">
          <header><p>03 / Career history</p><h2 id="reel-career-title">The whole system.</h2><Link to="/resume?version=04">Detailed résumé ↗</Link></header>
          <div className="studio-career__grid">{empItems.map((role, index) => <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><h3>{role.name}</h3><strong>{role.title}</strong><p>{role.summary}</p></article>)}</div>
          <footer>Applications <i>×</i> Data <i>×</i> Integrations <i>×</i> People</footer>
        </section>

        <section className="studio-spread studio-spread--practice" aria-labelledby="reel-practice-title">
          <header><p>04 / Working practice</p><h2 id="reel-practice-title">Follow the problem,<br /><em>not the org chart.</em></h2></header>
          <dl><div><dt>01 / Trace</dt><dd>Follow behavior from the screen through the application and into SQL Server.</dd></div><div><dt>02 / Translate</dt><dd>Turn incomplete context and competing needs into direction a team can use.</dd></div><div><dt>03 / Improve</dt><dd>Ship the useful fix and leave the system clearer for whoever owns it next.</dd></div></dl>
        </section>

        <section className="studio-spread studio-spread--about" aria-labelledby="reel-about-title">
          <figure><img src={gardenPortrait} alt="Danny Stone standing in a garden" width="999" height="1500" /></figure>
          <div><p>05 / Beyond the keyboard</p><h2 id="reel-about-title">A whole person ships better work.</h2><span>I play music, collect LEGO, read fantasy, play Pathfinder and video games, re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.</span></div>
        </section>

        <section className="studio-spread studio-spread--contact" aria-labelledby="reel-contact-title">
          <header><p>06 / Contact Danny</p><h2 id="reel-contact-title">Have a problem worth untangling?</h2><span>An interesting role, a stubborn engineering problem, or a question about my work—I’d be glad to hear it.</span></header>
          <ContactForm className="studio-contact-form console-contact__form" />
          <footer><strong>Danny Stone</strong><nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a></nav></footer>
        </section>
      </div>

      <footer className="studio-reel__footer"><span>04 / Portfolio</span><span>0{activeSpread} / 06 · Swipe or use ← →</span><span>© {new Date().getFullYear()}</span></footer>
    </article>
  );
}
