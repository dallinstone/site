import useContactForm from "../Features/useContactForm";

export default function ContactForm({ className = "contact-form-shared" }: { className?: string }) {
  const { isConfigured, message, state, submit } = useContactForm();

  return (
    <form className={className} onSubmit={submit}>
      <div className="console-contact__row"><label>Name<input name="user_name" type="text" autoComplete="name" required /></label><label>Email<input name="user_email" type="email" autoComplete="email" required /></label></div>
      <label>Message<textarea name="user_message" rows={5} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <div className="console-contact__submit"><p role={state === "error" ? "alert" : "status"} aria-live={state === "error" ? "assertive" : "polite"}>{message || "Messages are delivered through EmailJS and used only to reply."}</p><button type="submit" disabled={!isConfigured || state === "sending"}>{!isConfigured ? "Form unavailable" : state === "sending" ? "Sending…" : "Send message ↗"}</button></div>
    </form>
  );
}
