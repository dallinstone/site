import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-name">Danny Stone</p>
          <p>Database engineering, clear communication, and technical translation for complex business software.</p>
        </div>
        <nav aria-label="Social profiles">
          <span className="footer-social-links">
            <a
              className="footer-social-link"
              href="https://github.com/dallinstone"
              rel="me"
              aria-label="Danny Stone on GitHub"
              title="GitHub"
            >
              <FaGithub aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              className="footer-social-link"
              href="https://www.linkedin.com/in/dallinstone"
              rel="me"
              aria-label="Danny Stone on LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </span>
        </nav>
        <p className="footer-copyright">© {new Date().getFullYear()} Danny Stone</p>
      </div>
    </footer>
  );
}
