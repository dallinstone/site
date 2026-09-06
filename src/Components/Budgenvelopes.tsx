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
        <p>BudgEnvelopes and its developer take your privacy very seriously.</p>
        <p>Beyond information Apple provides to developers that you choose to share, BudgEnvelopes uses no third-party analytics or advertising frameworks.</p>
        <p>BudgEnvelopes logs no information about you and does not collect, transmit, distribute, or sell your data.</p>
        <p><strong>Your privacy is paramount.</strong></p>
      </div>
    </article>
  );
}
