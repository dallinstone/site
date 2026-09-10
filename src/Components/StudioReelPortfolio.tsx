import { UIEvent, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { empItems } from "../Features/Collections/EmploymentItems";
import { contactInvitation, personalProfile, portfolioProjects } from "../Features/portfolioContent";
import portrait from "../public/profile-1200.jpeg";
import gardenPortrait from "../public/profile-garden-3691.webp";
import ContactForm from "./ContactForm";
import ProjectVisual from "./ProjectVisual";

const spreadLabels = ["Intro", "PF2e", "HST", "Career", "Practice", "About", "Contact"];
const spreadHashes = ["", "work", "hst", "career", "practice", "about", "contact"];

export default function StudioReelPortfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positioningRef = useRef(true);
  const location = useLocation();
  const navigate = useNavigate();
  const requestedSpread = spreadHashes.indexOf(location.hash.slice(1));
  const [activeSpread, setActiveSpread] = useState(requestedSpread < 0 ? 0 : requestedSpread);
  const [pf2e, hst] = portfolioProjects;

  const goToSpread = (index: number) => {
    const track = trackRef.current;
    const target = track?.children.item(index) as HTMLElement | null;
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveSpread(index);
    navigate(`/?version=04${spreadHashes[index] ? `#${spreadHashes[index]}` : ""}`, { replace: true });
  };

  const syncActiveSpread = (event: UIEvent<HTMLDivElement>) => {
    if (positioningRef.current) return;
    const track = event.currentTarget;
    const next = Math.max(0, Math.min(spreadLabels.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
    setActiveSpread(next);
    navigate(`/?version=04${spreadHashes[next] ? `#${spreadHashes[next]}` : ""}`, { replace: true });
  };

  useLayoutEffect(() => {
    positioningRef.current = true;
    const next = spreadHashes.indexOf(location.hash.slice(1));
    const index = next < 0 ? 0 : next;
    setActiveSpread(index);
    const track = trackRef.current;
    const target = track?.children.item(index) as HTMLElement | null;
    if (track && target) {
      const scrollBehavior = track.style.scrollBehavior;
      track.style.scrollBehavior = "auto";
      track.scrollLeft = target.offsetLeft;
      track.style.scrollBehavior = scrollBehavior;
    }
    const timer = window.setTimeout(() => { positioningRef.current = false; }, 200);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <article className="studio-reel" onKeyDown={(event) => {
      if ((event.target as HTMLElement).closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowRight") { event.preventDefault(); goToSpread(Math.min(spreadLabels.length - 1, activeSpread + 1)); }
      if (event.key === "ArrowLeft") { event.preventDefault(); goToSpread(Math.max(0, activeSpread - 1)); }
    }}>
      <header className="studio-reel__header">
        <button className="studio-reel__brand" type="button" onClick={() => goToSpread(0)}>Danny Stone</button>
        <nav aria-label="Version 04 spreads">{spreadLabels.map((label, index) => <button className={activeSpread === index ? "active" : ""} type="button" aria-label={`Open ${label}`} aria-current={activeSpread === index ? "page" : undefined} onClick={() => goToSpread(index)} key={label}>0{index}</button>)}</nav>
        <Link to="/resume?version=04">Résumé ↗</Link>
      </header>

      <div className="studio-reel__track" ref={trackRef} onScroll={syncActiveSpread} tabIndex={0}>
        <section className="studio-spread studio-spread--intro" aria-labelledby="reel-intro-title" aria-hidden={activeSpread !== 0} inert={activeSpread !== 0 ? true : undefined}>
          <div className="studio-intro__copy"><p>Portfolio / Version 04</p><h1 id="reel-intro-title">Danny<br /><em>Stone</em></h1><strong>Software, made clearer.</strong><span>I work across applications, databases, cloud integrations, and requirements to untangle complex business systems.</span></div>
          <figure><img src={portrait} alt="Danny Stone smiling on a beach" width="1200" height="1460" /></figure>
          <footer><span>.NET · SQL Server · React · Azure</span><button type="button" onClick={() => goToSpread(1)}>Begin the reel →</button></footer>
        </section>

        <section className="studio-spread studio-spread--project studio-spread--pf2e" aria-labelledby="reel-pf2e-title" aria-hidden={activeSpread !== 1} inert={activeSpread !== 1 ? true : undefined}>
          <aside><strong>{pf2e.number}</strong><span>{pf2e.label}</span></aside>
          <div className="studio-project__copy"><p>Designed and shipped</p><h2 id="reel-pf2e-title">{pf2e.name}</h2><strong>{pf2e.summary}</strong><dl><div><dt>The itch</dt><dd>{pf2e.problem}</dd></div><div><dt>The build</dt><dd>{pf2e.engineering}</dd></div></dl><a href={pf2e.url} target="_blank" rel="noreferrer">Open {pf2e.displayUrl} ↗</a></div>
          <figure><ProjectVisual variant={pf2e.visual} /></figure>
        </section>

        <section className="studio-spread studio-spread--project studio-spread--hst" aria-labelledby="reel-hst-title" aria-hidden={activeSpread !== 2} inert={activeSpread !== 2 ? true : undefined}>
          <aside><strong>{hst.number}</strong><span>{hst.label}</span></aside>
          <div className="studio-project__copy"><p>Designed and shipped</p><h2 id="reel-hst-title">{hst.name}</h2><strong>{hst.summary}</strong><dl><div><dt>The itch</dt><dd>{hst.problem}</dd></div><div><dt>The build</dt><dd>{hst.engineering}</dd></div></dl><a href={hst.url} target="_blank" rel="noreferrer">Open {hst.displayUrl} ↗</a></div>
          <figure><ProjectVisual variant={hst.visual} /></figure>
        </section>

        <section className="studio-spread studio-spread--career" aria-labelledby="reel-career-title" aria-hidden={activeSpread !== 3} inert={activeSpread !== 3 ? true : undefined}>
          <header><p>03 / Career history</p><h2 id="reel-career-title">The whole system.</h2><Link to="/resume?version=04">Detailed résumé ↗</Link></header>
          <div className="studio-career__grid">{empItems.map((role, index) => <article key={role.name}><span>0{index + 1}</span><time>{role.dates}</time><h3>{role.name}</h3><strong>{role.title}</strong><p>{role.summary}</p></article>)}</div>
          <footer>Applications <i>×</i> Data <i>×</i> Integrations <i>×</i> People</footer>
        </section>

        <section className="studio-spread studio-spread--practice" aria-labelledby="reel-practice-title" aria-hidden={activeSpread !== 4} inert={activeSpread !== 4 ? true : undefined}>
          <header><p>04 / Working practice</p><h2 id="reel-practice-title">Follow the problem,<br /><em>not the org chart.</em></h2></header>
          <dl><div><dt>01 / Trace</dt><dd>Follow behavior from the screen through the application and into SQL Server.</dd></div><div><dt>02 / Translate</dt><dd>Turn incomplete context and competing needs into direction a team can use.</dd></div><div><dt>03 / Improve</dt><dd>Ship the useful fix and leave the system clearer for whoever owns it next.</dd></div></dl>
        </section>

        <section className="studio-spread studio-spread--about" aria-labelledby="reel-about-title" aria-hidden={activeSpread !== 5} inert={activeSpread !== 5 ? true : undefined}>
          <figure><img src={gardenPortrait} alt="Danny Stone standing in a garden" width="3691" height="5536" /></figure>
          <div><p>05 / {personalProfile.eyebrow}</p><h2 id="reel-about-title">{personalProfile.heading}</h2><span>{personalProfile.body}</span></div>
        </section>

        <section className="studio-spread studio-spread--contact" aria-labelledby="reel-contact-title" aria-hidden={activeSpread !== 6} inert={activeSpread !== 6 ? true : undefined}>
          <header><p>06 / Contact Danny</p><h2 id="reel-contact-title">Have a problem worth untangling?</h2><span>{contactInvitation.body}</span></header>
          <ContactForm className="studio-contact-form console-contact__form" />
          <footer><strong>Danny Stone</strong><nav><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a></nav></footer>
        </section>
      </div>

      <footer className="studio-reel__footer"><span>04 / Portfolio</span><span>0{activeSpread} / 06 · Swipe or use ← →</span><span>© {new Date().getFullYear()}</span></footer>
    </article>
  );
}
