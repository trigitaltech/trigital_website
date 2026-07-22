"use client";

// Static site: submitting opens the visitor's email client; nothing is stored server-side.
export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `${d.get("topic")} — ${d.get("company") || d.get("name")}`;
    const body = `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nCompany: ${d.get("company") || "-"}\nInterest: ${d.get("topic")}\n\n${d.get("message")}`;
    window.location.href = `mailto:hello@trigitaltech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit} aria-label="Contact form">
      <label>Your name
        <input type="text" name="name" required autoComplete="name" placeholder="Full name" />
      </label>
      <label>Work email
        <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" />
      </label>
      <label>Company
        <input type="text" name="company" autoComplete="organization" placeholder="Company name" />
      </label>
      <label>I&apos;m interested in
        <select name="topic">
          <option>Booking a platform demo</option>
          <option>Business apps on Nipige</option>
          <option>AI &amp; agentic engineering</option>
          <option>Data migration &amp; BI</option>
          <option>Custom development</option>
          <option>Something else</option>
        </select>
      </label>
      <label>What are you trying to ship?
        <textarea name="message" required placeholder="A sentence or two is plenty — we'll ask the right questions."></textarea>
      </label>
      <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
      <p style={{ fontSize: "0.82rem", color: "var(--ink-soft)" }}>
        Submitting opens your email client with this message addressed to hello@trigitaltech.com — nothing is stored on this site.
      </p>
    </form>
  );
}
