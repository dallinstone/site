import { useEffect } from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();
  const message = error instanceof Error ? error.message : "";
  const isModuleLoadFailure = /dynamically imported module|importing a module script failed/i.test(message);
  const isMissingRoute = isRouteErrorResponse(error) && error.status === 404;

  useEffect(() => {
    document.title = "Page unavailable | Danny Stone";
  }, []);

  return (
    <section className="route-error page-shell" role="alert">
      <p className="eyebrow">{isMissingRoute ? "404 · Page not found" : "Page unavailable"}</p>
      <h1>{isModuleLoadFailure ? "This page needs a quick refresh." : "Something interrupted this page."}</h1>
      <p>
        {isModuleLoadFailure
          ? "A newer version may have become available while this page was open. Reload to continue."
          : "The page could not be displayed. You can try again or return to the homepage."}
      </p>
      <div className="route-error__actions">
        <button className="button button--primary" type="button" onClick={() => window.location.reload()}>
          Reload page
        </button>
        <Link className="button button--secondary" to="/">Return home</Link>
      </div>
    </section>
  );
}
