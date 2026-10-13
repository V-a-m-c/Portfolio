import React, { useState } from "react";
import Icon from "../ui/Icon";
import { profile } from "../../data/profile";

const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

export const isContactFormConfigured = Object.values(emailConfig).every(Boolean);

const fieldClass =
  "mt-2 w-full rounded-xl border border-night-line bg-night px-4 py-3 text-base text-night-text placeholder:text-night-mute/70 focus:border-accent-bright focus:outline-none focus:ring-1 focus:ring-accent-bright";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never fill this hidden field.
    if (data.get("company")) return;

    setStatus("sending");
    try {
      // The email client is only downloaded when a message is actually sent.
      const { default: emailjs } = await import("emailjs-com");
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: data.get("from_name"),
          from_email: data.get("from_email"),
          message: data.get("message"),
        },
        emailConfig.publicKey
      );
      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-night-line bg-night-raised p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-white">Send a message</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-night-mute">
          Name
          <input type="text" name="from_name" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="block text-sm text-night-mute">
          Email
          <input type="email" name="from_email" autoComplete="email" required className={fieldClass} />
        </label>
      </div>
      <label className="mt-5 block text-sm text-night-mute">
        Message
        <textarea name="message" rows="5" required className={`${fieldClass} resize-y`} />
      </label>
      <div aria-hidden="true" className="hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className="btn btn-on-night disabled:opacity-60">
          {sending ? "Sending…" : "Send message"}
          <Icon name="arrow-right" size={16} />
        </button>
        <p role="status" className="min-h-[1.25rem] text-sm text-night-text">
          {status === "sent" && "Thanks, your message has been sent."}
          {status === "error" && (
            <>
              The message could not be sent. Please email{" "}
              <a href={`mailto:${profile.email}`} className="text-accent-bright underline underline-offset-4">
                {profile.email}
              </a>{" "}
              instead.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
