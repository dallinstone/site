import { Link } from "react-router-dom";
import PageMeta from "./PageMeta";

export default function NotFound() {
  return (
    <section className="not-found page-shell">
      <PageMeta route="__notFound" />
      <p className="eyebrow">404 · Page not found</p>
      <h1>This route took a wrong turn.</h1>
      <p>The page may have moved, or the address may be incomplete.</p>
      <Link className="button button--primary" to="/">Return home</Link>
    </section>
  );
}
