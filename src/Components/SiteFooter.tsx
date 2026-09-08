import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <Link className="brand" to="/"><span className="brand__mark" aria-hidden="true">DS</span><span className="brand__name"><strong>Danny Stone</strong><small>Senior software engineer</small></span></Link>
        <p>Built with care, curiosity, and probably a dog nearby.</p>
        <nav aria-label="Footer"><a href="https://github.com/dallinstone" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">LinkedIn ↗</a><Link to="/resume">Résumé</Link></nav>
        <p>© {new Date().getFullYear()} Danny Stone</p>
      </div>
    </footer>
  );
}
