import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Book a Demo | Trigital Technologies",
  description:
    "Book a demo, request a free working blueprint, or talk to Trigital's consulting team. Hyderabad, India — serving enterprises everywhere.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Book a Demo | Trigital Technologies",
    description: "Book a demo, request a free working blueprint, or talk to Trigital's consulting team.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span>Contact</p>
          <p className="eyebrow reveal"><span className="dot"></span>Contact</p>
          <h1 id="ph-heading" className="reveal">Start with a demo.<br /><span className="grad-text">Or start with your idea.</span></h1>
          <p className="lead reveal">Tell us what you&apos;re trying to ship. We&apos;ll respond within one business day — usually with a suggestion for a free working blueprint of your use case.</p>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="form-heading">
        <div className="container contact-grid">
          <div className="reveal">
            <h2 id="form-heading" style={{ fontSize: "var(--text-h2)" }}>What happens <span className="grad-text">after you write</span></h2>
            <ol className="approach-list" style={{ marginTop: "1.6rem" }}>
              <li><div><h3>We reply within a day</h3><p>A consultant — not a sales sequence — reads your note and responds with questions worth answering.</p></div></li>
              <li><div><h3>30-minute working session</h3><p>We map your use case together and tell you honestly which practice fits (or if none does).</p></div></li>
              <li><div><h3>Free blueprint in days</h3><p>Where it fits, we build a working slice of your idea on Nipige — before any contract.</p></div></li>
            </ol>
            <ul className="commit-list" style={{ marginTop: "1.6rem" }} role="list">
              <li><strong>Trigital Technologies</strong><span>Hyderabad, India · <a href="mailto:hello@trigitaltech.com" style={{ color: "var(--violet)" }}>hello@trigitaltech.com</a></span></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
