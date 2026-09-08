import useContactForm from "../Features/useContactForm";
import { contactInvitation } from "../Features/portfolioContent";
import PageMeta from "./PageMeta";

export default function Contact() {
  const { isConfigured, message: statusMessage, state: submitState, submit: handleSubmit } = useContactForm();

  return (
    <div className="contact-page page-shell">
      <PageMeta route="/" />

      <header className="page-intro contact-intro">
        <p className="eyebrow">Contact</p>
        <h1>Send me a note.</h1>
        <p>{contactInvitation.body}</p>
        <a className="text-link" href="https://www.linkedin.com/in/dallinstone" target="_blank" rel="me noreferrer">
          Prefer LinkedIn? Visit my profile <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </header>

      <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-privacy">
        <div className="form-row">
          <div className="field-group">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="user_name" type="text" autoComplete="name" required />
          </div>
          <div className="field-group">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="user_email" type="email" autoComplete="email" inputMode="email" required />
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="user_message" rows={7} required />
        </div>

        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-footer">
          <p id="form-privacy">Messages are delivered through EmailJS. I use your details only to reply.</p>
          <button className="button button--primary" type="submit" disabled={submitState === "sending" || !isConfigured}>
            {!isConfigured ? "Form unavailable" : submitState === "sending" ? "Sending…" : "Send message"}
          </button>
        </div>

        <p
          className={`form-status${submitState === "error" ? " form-status--error" : ""}`}
          role={submitState === "error" ? "alert" : "status"}
          aria-live={submitState === "error" ? "assertive" : "polite"}
        >
          {statusMessage}
        </p>
      </form>
    </div>
  );
}
