import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export default function ContactForm({ className = "contact-form-shared" }: { className?: string }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(isConfigured ? "idle" : "error");
  const [message, setMessage] = useState(isConfigured ? "" : "The form is temporarily unavailable. You can still reach me through LinkedIn.");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (new FormData(form).get("website")) return;
    if (!serviceId || !templateId || !publicKey) return;
    setState("sending");
    setMessage("Sending your message…");
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setState("success");
      setMessage("Thanks—your message has been sent.");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again or reach me through LinkedIn.");
    }
  };

  return (
    <form className={className} onSubmit={submit}>
      <div className="console-contact__row"><label>Name<input name="user_name" type="text" autoComplete="name" required /></label><label>Email<input name="user_email" type="email" autoComplete="email" required /></label></div>
      <label>Message<textarea name="user_message" rows={5} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <div className="console-contact__submit"><p role={state === "error" ? "alert" : "status"}>{message || "Messages are delivered through EmailJS and used only to reply."}</p><button type="submit" disabled={!isConfigured || state === "sending"}>{!isConfigured ? "Form unavailable" : state === "sending" ? "Sending…" : "Send message ↗"}</button></div>
    </form>
  );
}
