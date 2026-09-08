import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export type ContactSubmitState = "idle" | "sending" | "success" | "error";

export default function useContactForm() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);
  const [state, setState] = useState<ContactSubmitState>(isConfigured ? "idle" : "error");
  const [message, setMessage] = useState(isConfigured ? "" : "The form is temporarily unavailable. You can still reach me through LinkedIn.");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (new FormData(form).get("website")) return;
    if (!serviceId || !templateId || !publicKey) {
      setState("error");
      setMessage("The form is temporarily unavailable. You can still reach me through LinkedIn.");
      return;
    }

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

  return { isConfigured, message, state, submit };
}
