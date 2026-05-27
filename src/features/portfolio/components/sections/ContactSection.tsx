"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isConfigured = useMemo(
    () =>
      Boolean(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) &&
      Boolean(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) &&
      Boolean(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
    []
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!isConfigured) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;

    try {
      setIsSending(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="orb orb-3" />
      <p className="ghost-label">CONTACT</p>
      <h2 data-reveal>Let&apos;s Build Something <span className="outline">Remarkable.</span></h2>
      <p className="contact-sub" data-reveal>Have a role, question, or collaboration idea? Send a quick message and I&apos;ll get back to you soon.</p>

      <div className="contact-grid" data-reveal>
        <form className="contact-form" onSubmit={onSubmit}>
          <h3>Contact Form</h3>
          <label>
            Your Name
            <input type="text" name="name" placeholder="John Doe" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Job opportunity / General query" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Write your message here." required />
          </label>
          {status === "success" && <p className="form-status success">Message sent successfully. I&apos;ll get back to you soon.</p>}
          {status === "error" && (
            <p className="form-status error">
              Could not send message. Please check EmailJS keys and template, then try again.
            </p>
          )}
          <button className="btn btn-primary huge" type="submit" data-magnetic disabled={isSending}>
            {isSending ? "Sending..." : "Send Message →"}
          </button>
        </form>

        <div className="contact-card">
          <h3>Direct Contact</h3>
          <div className="links">
            <a href="mailto:ronitkothari22@gmail.com">Email: ronitkothari22@gmail.com</a>
            <a href="tel:+919313485276">Phone: +91 9313485276</a>
            <a href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer">LinkedIn: ronit-kothari</a>
            <a href="https://github.com/ronitkothari22" target="_blank" rel="noreferrer">GitHub: ronitkothari22</a>
          </div>
          <p>Prefer a quick intro instead of a form?</p>
          <div className="contact-actions">
            <a className="btn btn-outline huge" href="mailto:ronitkothari22@gmail.com" data-magnetic>Email Me</a>
            <a className="btn btn-outline huge" href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer" data-magnetic>Connect on LinkedIn</a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div>Ronit. - AI Engineer & Full Stack Developer</div>
        <div>© 2025 Ronit Kothari - Built with obsession, not templates.</div>
        <div><a href="https://github.com/ronitkothari22" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="mailto:ronitkothari22@gmail.com">Email</a> · <a href="#blog">Blog</a></div>
      </footer>
    </section>
  );
}
