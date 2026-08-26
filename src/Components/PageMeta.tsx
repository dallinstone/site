import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routeMetadata from "../Features/siteMetadata.json";

interface PageMetaProps {
  route: keyof typeof routeMetadata;
}

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function PageMeta({ route }: PageMetaProps) {
  const location = useLocation();

  useEffect(() => {
    const { title, description } = routeMetadata[route];
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const canonicalPath = route === "__notFound" ? location.pathname : route;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    const fullTitle = title === "Danny Stone" ? "Danny Stone · Senior Software Engineer" : `${title} | Danny Stone`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location.pathname, route]);

  return null;
}
