import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(projectRoot, "dist");
const metadataPath = join(projectRoot, "src", "Features", "siteMetadata.json");
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");
const routeMetadata = JSON.parse(await readFile(metadataPath, "utf8"));
const siteUrl = (process.env.VITE_SITE_URL || "https://dallinstone.com").replace(/\/$/, "");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`Could not find ${label} in the built HTML.`);
  return html.replace(pattern, replacement);
}

function renderRoute(route, { title, description }) {
  const fullTitle = title === "Danny Stone"
    ? "Danny Stone · Senior Software Engineer"
    : `${title} | Danny Stone`;
  const canonicalUrl = `${siteUrl}${route}`;
  const safeTitle = escapeHtml(fullTitle);
  const safeDescription = escapeHtml(description);
  const safeCanonicalUrl = escapeHtml(canonicalUrl);

  let html = baseHtml;
  html = replaceRequired(html, /<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`, "title");
  html = replaceRequired(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDescription}" />`, "description");
  html = replaceRequired(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${safeCanonicalUrl}" />`, "canonical URL");
  html = replaceRequired(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`, "Open Graph title");
  html = replaceRequired(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDescription}" />`, "Open Graph description");
  html = replaceRequired(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${safeCanonicalUrl}" />`, "Open Graph URL");
  html = replaceRequired(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`, "X title");
  html = replaceRequired(html, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${safeDescription}" />`, "X description");
  return html;
}

for (const [route, metadata] of Object.entries(routeMetadata)) {
  if (!route.startsWith("/")) continue;
  const outputPath = route === "/"
    ? join(distDir, "index.html")
    : join(distDir, route.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderRoute(route, metadata));
}
