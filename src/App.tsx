import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SiteFooter from "./Components/SiteFooter";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;
      target.scrollIntoView({ behavior: "auto", block: "start" });
      target.focus({ preventScroll: true });
      return true;
    };

    const settleTimeoutId = window.setTimeout(scrollToTarget, 650);
    if (scrollToTarget()) {
      return () => window.clearTimeout(settleTimeoutId);
    }

    const main = document.getElementById("main-content");
    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });
    if (main) observer.observe(main, { childList: true, subtree: true });
    const timeoutId = window.setTimeout(() => observer.disconnect(), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(settleTimeoutId);
      window.clearTimeout(timeoutId);
    };
  }, [location.hash, location.pathname]);

  return (
    <div className="site-shell">
      <NavBar />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
