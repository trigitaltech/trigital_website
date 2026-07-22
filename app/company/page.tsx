import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company — About Trigital Technologies",
  description:
    "Trigital Technologies, Hyderabad: the team behind the Nipige Platform and AI agentic services. Our story, how we work, and the commitments we put in writing.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Company — About Trigital Technologies",
    description: "The team behind the Nipige Platform and AI agentic services. Our story, how we work, and the commitments we put in writing.",
    url: "/company",
  },
};

const lightQuoteCard = { background: "#fff", borderColor: "var(--line)" } as React.CSSProperties;
const inkText = { color: "var(--ink)" } as React.CSSProperties;

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span>Company</p>
          <p className="eyebrow reveal"><span className="dot"></span>Company</p>
          <h1 id="ph-heading" className="reveal">Built in Hyderabad.<br /><span className="grad-text">Measured by what ships.</span></h1>
          <p className="lead reveal">Trigital Technologies exists to close the gap between enterprise ambition and enterprise delivery. We believe the fastest teams aren&apos;t the ones with the most engineers — they&apos;re the ones whose workflows they fully control.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container two-col">
          <div className="reveal">
            <p className="eyebrow"><span className="dot"></span>Our Story</p>
            <h2 id="story-heading">Why we built a platform <span className="grad-text">inside a services firm</span></h2>
            <p className="section-sub">We started as consultants watching the same tragedy repeat: good enterprise ideas dying in eighteen-month build queues. Custom builds were too slow; off-the-shelf tools too rigid; and every &quot;low-code&quot; platform we tried collapsed the moment security asked hard questions.</p>
            <p className="section-sub">So we built Nipige — a business-app platform with enterprise governance as the foundation, not the roadmap item. Then AI changed what &quot;fast&quot; means, and we rebuilt our delivery model around agents: machines do the mechanical work, senior people do the judgement work.</p>
            <p className="section-sub">Today that combination — senior consulting, the Nipige Platform, and production AI agents — is how 500+ enterprises launch in weeks what used to take quarters.</p>
          </div>
          <div className="reveal">
            <div className="stat-band" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div><strong data-count="500" data-suffix="+">500+</strong><span>Enterprises served</span></div>
              <div><strong data-count="70" data-suffix="%">70%</strong><span>Faster launches</span></div>
              <div><strong data-count="90" data-suffix="%">90%</strong><span>Cost reduction</span></div>
              <div><strong data-count="14" data-suffix=" days">14 days</strong><span>Median first go-live</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-dark" id="values" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>How We Work</p>
            <h2 id="values-heading">Principles we&apos;re happy to be <span className="grad-text-warm">held to</span></h2>
          </div>
          <div className="two-col">
            <ul className="check-list reveal">
              <li><strong>Evidence over promises</strong>Working software before contracts. Weekly demos over status decks. Numbers over adjectives.</li>
              <li><strong>Transparent delivery</strong>Shared dashboards, honest burndowns, bad news first. You should never be surprised by us.</li>
              <li><strong>Security first</strong>Enterprise-grade controls and audit-ready practices on every project — because trust compounds.</li>
            </ul>
            <ul className="check-list reveal">
              <li><strong>Your team, empowered</strong>We hand over running platforms and the skills to own them. Dependency is a failure mode.</li>
              <li><strong>Outcomes over hours</strong>Engagements scoped to business results with acceptance criteria, not billable time.</li>
              <li><strong>AI with judgement</strong>Agents accelerate; senior engineers decide. Automation never outruns accountability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS STAY */}
      <section className="section section-tint" aria-labelledby="stay-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Why Clients Stay</p>
            <h2 id="stay-heading">The first project earns trust. <span className="grad-text">The model keeps it.</span></h2>
          </div>
          <div className="quote-grid">
            <figure className="quote-card reveal" style={lightQuoteCard}>
              <blockquote style={inkText}>“We replaced a nine-month build estimate with a six-week Nipige launch. Our ops team now changes workflows themselves.”</blockquote>
              <figcaption style={{ borderColor: "var(--line)" }}><strong style={inkText}>Chief Digital Officer</strong><span style={{ color: "var(--ink-soft)" }}>BFSI enterprise</span></figcaption>
            </figure>
            <figure className="quote-card reveal" style={lightQuoteCard}>
              <blockquote style={inkText}>“Their agents reconcile four systems overnight. Processing time dropped from days to under an hour, with full audit trails.”</blockquote>
              <figcaption style={{ borderColor: "var(--line)" }}><strong style={inkText}>VP, Operations</strong><span style={{ color: "var(--ink-soft)" }}>Logistics group</span></figcaption>
            </figure>
            <figure className="quote-card reveal" style={lightQuoteCard}>
              <blockquote style={inkText}>“The free blueprint sold us. We evaluated running software in week one — no other vendor offered that.”</blockquote>
              <figcaption style={{ borderColor: "var(--line)" }}><strong style={inkText}>Head of IT</strong><span style={{ color: "var(--ink-soft)" }}>Healthcare provider</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <article className="cta-strip reveal">
            <div>
              <h2>Work with us — or for us.</h2>
              <p>Clients: bring a problem. Builders: bring a portfolio. Both conversations start the same way.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </article>
        </div>
      </section>
    </>
  );
}
