import PageMeta from "./PageMeta";

export default function Budgenvelopes() {
  return (
    <article className="privacy-page page-shell">
      <PageMeta route="/budgenvelopes" />
      <header className="page-intro">
        <p className="eyebrow">BudgEnvelopes</p>
        <h1>Privacy, plainly stated.</h1>
      </header>
      <div className="privacy-copy">
        <p>BudgEnvelopes includes no third-party analytics or advertising frameworks.</p>
        <p>Other than information Apple provides to developers that you choose to share, the app does not collect, transmit, distribute, or sell your data.</p>
      </div>
    </article>
  );
}
