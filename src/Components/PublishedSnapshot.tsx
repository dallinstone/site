import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import publishedStyles from "../published.css?inline";

type PublishedSnapshotProps = {
  children: ReactNode;
  theme: "dark" | "light";
};

export function usePublishedTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      return window.localStorage.getItem("danny-stone-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#101522" : "#19317c",
    );
    try {
      window.localStorage.setItem("danny-stone-theme", theme);
    } catch {
      // The original theme still works for this visit when storage is unavailable.
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

/**
 * Version 01 is the pre-version portfolio preserved as a real CSS snapshot.
 * A shadow root prevents styles for versions 02–05 from changing it.
 */
export default function PublishedSnapshot({ children, theme }: PublishedSnapshotProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    setShadowRoot(host.shadowRoot ?? host.attachShadow({ mode: "open" }));
  }, []);

  return (
    <div className="published-snapshot-host" ref={hostRef}>
      {shadowRoot && createPortal(
        <>
          <style>{publishedStyles}</style>
          <article className="published-site" data-theme={theme}>
            {children}
          </article>
        </>,
        shadowRoot,
      )}
    </div>
  );
}
