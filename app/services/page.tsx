import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — AI, Platform, Data & Custom Engineering | Trigital Technologies",
  description:
    "Trigital's service portfolio: AI & agentic engineering, business apps on the Nipige Platform, data migration & BI, custom development, integration and managed support.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — AI, Platform, Data & Custom Engineering | Trigital Technologies",
    description: "AI & agentic engineering, business apps on the Nipige Platform, data migration & BI, custom development, integration and managed support.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span>Services</p>
          <p className="eyebrow reveal"><span className="dot"></span>Services</p>
          <h1 id="ph-heading" className="reveal">Service-led. Platform-powered.<br /><span className="grad-text">Agent-accelerated.</span></h1>
          <p className="lead reveal">We&apos;re a services company at heart: senior consultants who own outcomes, not licence sellers. The Nipige Platform and our AI agents are how we deliver those outcomes faster than anyone expects.</p>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Discuss your project</Link>
          </div>
        </div>
      </section>

      {/* CORE PRACTICES */}
      <section className="section" aria-labelledby="core-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Core Practices</p>
            <h2 id="core-heading">Four flagship practices, <span className="grad-text">each with its own playbook</span></h2>
          </div>
          <div className="model-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <article className="model-card reveal featured">
              <span className="model-tag">Platform</span>
              <h3>Business Apps on Nipige</h3>
              <p>Commerce storefronts, B2B portals, field ops and any business front — composed on our platform, live in weeks, owned by your teams.</p>
              <ul>
                <li>Commerce-complete building blocks</li>
                <li>Agent-native workflow automation</li>
                <li>Enterprise governance included</li>
              </ul>
              <Link href="/platform" className="btn btn-primary">Explore Nipige →</Link>
            </article>
            <article className="model-card reveal">
              <span className="model-tag">AI</span>
              <h3>AI &amp; Agentic Engineering</h3>
              <p>Production agents that triage, reconcile, quote and support — graduated from shadow mode to autonomy on measured evidence.</p>
              <ul>
                <li>Workflow &amp; knowledge agents</li>
                <li>RAG on enterprise data</li>
                <li>Governance &amp; agent ops</li>
              </ul>
              <Link href="/ai-agents" className="btn btn-outline">Explore AI services →</Link>
            </article>
            <article className="model-card reveal">
              <span className="model-tag">Data</span>
              <h3>Data Migration &amp; Business Intelligence</h3>
              <p>Reconciliation-first migrations off legacy systems, then warehouses and dashboards your leaders actually open.</p>
              <ul>
                <li>Zero-loss migration playbook</li>
                <li>Warehouse &amp; pipeline engineering</li>
                <li>Decision-first BI &amp; AI-on-data</li>
              </ul>
              <Link href="/data-bi" className="btn btn-outline">Explore Data &amp; BI →</Link>
            </article>
            <article className="model-card reveal">
              <span className="model-tag">Engineering</span>
              <h3>Custom Development</h3>
              <p>Bespoke products and platforms with an evidence-first approach: free blueprint, weekly demos, everything in your name.</p>
              <ul>
                <li>Web, mobile &amp; SaaS products</li>
                <li>APIs &amp; modernisation</li>
                <li>Outcome-scoped contracts</li>
              </ul>
              <Link href="/custom-development" className="btn btn-outline">See how we work →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* SUPPORTING SERVICES */}
      <section className="section section-dark" aria-labelledby="supporting-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Around the Core</p>
            <h2 id="supporting-heading">Supporting services that keep <span className="grad-text-warm">everything running</span></h2>
          </div>
          <div className="card-grid">
            <article className="svc-card reveal" data-accent="violet">
              <h3>Digital Transformation Consulting</h3>
              <p>Roadmaps, operating models and platform strategy that turn ambition into a funded, sequenced plan.</p>
            </article>
            <article className="svc-card reveal" data-accent="blue">
              <h3>Systems Integration &amp; APIs</h3>
              <p>ERPs, CRMs, payment rails and data platforms connected into one governed flow.</p>
            </article>
            <article className="svc-card reveal" data-accent="orange">
              <h3>Managed Cloud &amp; Support</h3>
              <p>24×7 monitoring, SLA-backed support and continuous optimisation of everything we ship.</p>
            </article>
            <article className="svc-card reveal" data-accent="blue">
              <h3>Team Extension</h3>
              <p>Platform-certified builders and senior engineers embedded with your teams — velocity without the hiring cycle.</p>
            </article>
            <article className="svc-card reveal" data-accent="violet">
              <h3>Legacy Modernisation</h3>
              <p>Spreadsheets, aging portals and manual processes re-platformed without big-bang risk.</p>
            </article>
            <article className="svc-card reveal" data-accent="orange">
              <h3>Training &amp; Enablement</h3>
              <p>Admin and builder training so your teams fully control every platform we hand over.</p>
            </article>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section section-tint" aria-labelledby="industries-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Industries</p>
            <h2 id="industries-heading">Deep experience where <span className="grad-text">compliance and scale matter</span></h2>
          </div>
          <ul className="industry-grid reveal" role="list">
            <li><strong>BFSI</strong><span>Onboarding, KYC &amp; loan workflows</span></li>
            <li><strong>Healthcare</strong><span>Patient journeys &amp; claims automation</span></li>
            <li><strong>Retail &amp; E-commerce</strong><span>Storefronts, order &amp; partner ops</span></li>
            <li><strong>Manufacturing</strong><span>Quality, maintenance &amp; vendor portals</span></li>
            <li><strong>Logistics</strong><span>Fleet, tracking &amp; billing flows</span></li>
            <li><strong>Education</strong><span>Admissions &amp; student lifecycle</span></li>
            <li><strong>Real Estate</strong><span>Sales pipelines &amp; facility ops</span></li>
            <li><strong>Public Sector</strong><span>Citizen services &amp; grievance systems</span></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <article className="cta-strip reveal">
            <div>
              <h2>Not sure which practice fits? That&apos;s our job.</h2>
              <p>Describe the problem — we&apos;ll recommend the fastest honest path, even if it&apos;s smaller than you expected.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to a Consultant</Link>
          </article>
        </div>
      </section>
    </>
  );
}
