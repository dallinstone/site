import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import photoLarge from "../public/profile-1200.jpeg";
import photoSmall from "../public/profile-640.jpeg";
import PageMeta from "./PageMeta";

const featuredProjects = [
  {
    name: "PF2e Equipment Tracker",
    category: "Pathfinder 2e / React",
    text: "A character-equipment planner built because the existing tools didn’t fit how I prepare for one-shots.",
    path: "/projects#pf2e-equipment-tracker",
  },
  {
    name: "HST Designer",
    category: "Quilting / React + Firebase",
    text: "A visual quilt-design workspace for trying colors and layouts before cutting into the fabric.",
    path: "/projects#hst-designer",
  },
];

const coreStrengths = [
  {
    title: "Find the actual bottleneck",
    text: "I follow a problem from the screen through the application and into SQL Server. The useful fix is rarely in the first place someone points at.",
  },
  {
    title: "Turn the vague request into a plan",
    text: "I ask enough questions to uncover the real need, then give product owners, customers, and developers something concrete to work from.",
  },
  {
    title: "Leave the system easier to own",
    text: "I care about readable code, useful tests, sensible data paths, and decisions the next engineer can understand without an archaeology dig.",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stage = hero?.querySelector<HTMLElement>(".hero__stage");
    const content = hero?.querySelector<HTMLElement>(".hero__content");
    const reveal = hero?.querySelector<HTMLElement>(".hero__statement");
    if (!hero || !stage || !content || !reveal) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const updateHero = () => {
      frameId = 0;

      if (reducedMotion.matches || window.matchMedia("(max-width: 820px)").matches) {
        hero.style.setProperty("--hero-copy-shift", "0px");
        return;
      }

      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const heroTop = hero.getBoundingClientRect().top;
      const totalTravel = Math.max(1, hero.offsetHeight - stage.offsetHeight);
      const travelled = Math.min(totalTravel, Math.max(0, headerHeight - heroTop));
      const settleDistance = totalTravel * 0.68;
      const progress = Math.min(1, travelled / settleDistance);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const stagePaddingTop = Number.parseFloat(window.getComputedStyle(stage).paddingTop) || 0;
      const openingShift = Math.max(
        0,
        stage.clientHeight - stagePaddingTop - reveal.offsetTop + 24,
      );

      hero.style.setProperty(
        "--hero-copy-shift",
        `${Math.round(openingShift * (1 - easedProgress))}px`,
      );
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateHero);
    };

    updateHero();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <article className="home-page">
      <PageMeta route="/" />
      <section ref={heroRef} className="hero" aria-labelledby="hero-title">
        <div className="hero__stage">
          <div className="hero__content">
            <div className="hero__opening">
              <p className="hero__kicker"><span>Senior software engineer</span><span>.NET / SQL Server / React / Azure</span></p>
              <h1 className="hero__name" id="hero-title">
                <span>Danny</span>
                <span>Stone</span>
              </h1>
            </div>
            <div className="hero__details">
              <p className="hero__statement">I build the business software people rely on.</p>
              <p className="hero__lede">
                My best work happens in the unglamorous, important middle: slow queries,
                fuzzy requirements, aging .NET systems, and the conversations needed to
                make all of that less painful.
              </p>
              <div className="hero__actions" aria-label="Primary actions">
                <Link className="button button--primary" to="/experience">Read my work history</Link>
                <Link className="button button--secondary" to="/projects">See what I’ve built</Link>
              </div>
            </div>
          </div>

          <figure className="portrait-card">
            <span className="portrait-card__label" aria-hidden="true">Hello / 01</span>
            <span className="portrait-card__crop">
              <img
                className="portrait-card__image"
                src={photoLarge}
                srcSet={`${photoSmall} 640w, ${photoLarge} 1200w`}
                sizes="(max-width: 800px) calc(100vw - 2.5rem), 42vw"
                alt="Danny Stone smiling on a beach"
                width="1200"
                height="1460"
              />
            </span>
            <figcaption>Usually happier than my debugger suggests.</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-strengths" aria-labelledby="home-strengths-title">
        <div className="home-scroll-stage home-strengths__stage">
          <div className="home-strengths__heading">
            <p className="eyebrow">What I’m useful for</p>
            <h2 id="home-strengths-title">I find what’s actually broken, turn vague requests into clear plans, and leave the code easier to maintain.</h2>
          </div>
          <div className="home-strengths__grid">
            {coreStrengths.map((strength, index) => (
              <article key={strength.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-projects" aria-labelledby="home-projects-title">
        <div className="home-scroll-stage home-projects__stage">
          <div className="home-projects__heading">
            <div>
              <p className="eyebrow">Side projects</p>
              <h2 id="home-projects-title">Things I made because I wanted them to exist.</h2>
            </div>
            <Link className="text-link" to="/projects">The longer version <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-projects__grid">
            {featuredProjects.map((project, index) => (
              <Link className="home-project-card" to={project.path} key={project.name}>
                <span className="home-project-card__number" aria-hidden="true">0{index + 1}</span>
                <span className="home-project-card__text">
                  <span>{project.category}</span>
                  <strong>{project.name}</strong>
                  <small>{project.text}</small>
                </span>
                <span className="home-project-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="home-intro-scene">
        <section className="home-intro" aria-labelledby="beyond-code-title">
          <div>
            <p className="eyebrow">The non-work version</p>
            <h2 id="beyond-code-title">Music, games, bricks, books, dogs.</h2>
          </div>
          <div className="home-intro__copy">
            <p>
              I play music, collect Lego, read fantasy, play Pathfinder and video games,
              re-watch sitcoms, and share a home with three dogs named Tucker, Rocco, and Benny.
            </p>
            <Link className="text-link" to="/about">A little more about me <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </div>
    </article>
  );
}
