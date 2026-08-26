import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import PageMeta from "./PageMeta";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);
  const [submitState, setSubmitState] = useState<SubmitState>(isConfigured ? "idle" : "error");
  const [statusMessage, setStatusMessage] = useState(
    isConfigured ? "" : "The form is temporarily unavailable. Please reach me through LinkedIn instead.",
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) return;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState("error");
      setStatusMessage("The form is temporarily unavailable. Please reach me through LinkedIn instead.");
      return;
    }

    setSubmitState("sending");
    setStatusMessage("Sending your message…");

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setSubmitState("success");
      setStatusMessage("Thanks—your message has been sent successfully.");
    } catch {
      setSubmitState("error");
      setStatusMessage("Something went wrong while sending. Please try again or contact me through LinkedIn.");
    }
  };

  return (
    <div className="contact-page page-shell">
      <PageMeta route="/contact" />

      <header className="page-intro contact-intro">
        <p className="eyebrow">Get in touch</p>
        <h1>Let’s talk about the system behind the problem.</h1>
        <p>
          Have a question about my experience, an engineering challenge, or a role
          that might be a good fit? Send a note and I’ll get back to you.
        </p>
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
          <p id="form-privacy">Your details are used only to reply to this message.</p>
          <button className="button button--primary" type="submit" disabled={submitState === "sending" || !isConfigured}>
            {!isConfigured ? "Form unavailable" : submitState === "sending" ? "Sending…" : "Send message"}
          </button>
        </div>

        <p
          className={`form-status${submitState === "error" ? " form-status--error" : ""}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </form>
    </div>
  );
}
