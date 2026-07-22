import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trigital Technologies — AI Agentic Services & the Nipige Business App Platform",
  description:
    "Trigital Technologies builds AI agents, business apps on the Nipige Platform, data migration & BI solutions, and custom software for enterprises. Build Without Limits. Launch Without Code.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Trigital Technologies — AI Agentic Services & the Nipige Platform",
    description: "Launch enterprise products faster — with AI agents and workflows your teams fully control.",
    url: "/",
  },
};

const barStyle = (w: string) => ({ "--w": w }) as React.CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span className="dot"></span>AI Agentic Services &amp; Enterprise Platforms</p>
            <h1 id="hero-heading" className="reveal">Build Without Limits.<br /><span className="grad-text">Launch Without Code.</span></h1>
            <p className="lead reveal">Trigital pairs AI agents with the <strong>Nipige Platform</strong> to launch commerce, operations and any business front in weeks — with workflows, data and intelligence your teams fully control.</p>
            <div className="hero-actions reveal">
              <Link href="/contact" className="btn btn-primary btn-lg">Book a Demo</Link>
              <Link href="/services" className="btn btn-ghost btn-lg">Explore Services</Link>
            </div>
            <ul className="hero-proof reveal" aria-label="Key outcomes">
              <li><strong data-count="70" data-suffix="%">70%</strong><span>Faster launch</span></li>
              <li><strong data-count="90" data-suffix="%">90%</strong><span>Cost reduction</span></li>
              <li><strong data-count="500" data-suffix="+">500+</strong><span>Enterprises served</span></li>
            </ul>
          </div>
          <div className="hero-visual reveal" aria-hidden="true">
            <div className="hero-card hero-card-main">
              <div className="hc-head">
                <img src="/assets/logo-symbol.svg" alt="" width={28} height={28} />
                <span>Nipige Launch Console</span>
                <em className="hc-badge">Live</em>
              </div>
              <div className="hc-row"><span>Commerce storefront</span><i className="bar"><b style={barStyle("92%")}></b></i></div>
              <div className="hc-row"><span>Order-fulfilment agent</span><i className="bar"><b style={barStyle("76%")}></b></i></div>
              <div className="hc-row"><span>BI dashboard sync</span><i className="bar"><b style={barStyle("64%")}></b></i></div>
              <div className="hc-foot"><span className="ok">✓ Agent-assisted build</span><span>Deploys in 14 days</span></div>
            </div>
            <div className="hero-card hero-card-float a">
              <strong>AI Agent Active</strong><span>Handling 1,200 tasks/day</span>
            </div>
            <div className="hero-card hero-card-float b">
              <strong>Build Ready</strong><span>Zero code required</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="trust-band" aria-label="Trusted across sectors">
        <div className="container trust-inner">
          <p>Trusted by product, IT &amp; operations leaders across</p>
          <ul>
            <li>Banking &amp; Financial Services</li><li>Healthcare</li><li>Retail &amp; D2C</li>
            <li>Manufacturing</li><li>Logistics</li><li>Public Sector</li>
          </ul>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section" aria-labelledby="what-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>What We Do</p>
            <h2 id="what-heading">Four practices. <span className="grad-text">One accountable partner.</span></h2>
            <p className="section-sub">Every engagement is service-led: senior consultants own the outcome, AI agents accelerate the delivery, and Nipige keeps your teams in control after launch.</p>
          </div>
          <div className="model-grid">
            <article className="model-card reveal featured">
              <span className="model-tag">Platform</span>
              <h3>Business Apps on Nipige</h3>
              <p>Commerce storefronts, partner portals, field ops, approvals — any business front, composed on the Nipige Platform and live in weeks.</p>
              <ul>
                <li>Commerce &amp; catalogue engine</li>
                <li>Workflow &amp; approvals studio</li>
                <li>Enterprise governance built in</li>
              </ul>
              <Link href="/platform" className="btn btn-primary">Explore Nipige</Link>
            </article>
            <article className="model-card reveal">
              <span className="model-tag">AI</span>
              <h3>AI &amp; Agentic Engineering</h3>
              <p>Production AI agents that quote, reconcile, support and route work across your systems — governed, observable and measurable.</p>
              <ul>
                <li>Task &amp; workflow agents</li>
                <li>RAG on your enterprise data</li>
                <li>Human-in-the-loop controls</li>
              </ul>
              <Link href="/ai-agents" className="btn btn-outline">See AI services</Link>
            </article>
            <article className="model-card reveal">
              <span className="model-tag">Data</span>
              <h3>Data Migration &amp; BI</h3>
              <p>Move off legacy databases and spreadsheets without losing a record, then turn the clean data into decision-grade dashboards.</p>
              <ul>
                <li>Zero-loss migration playbook</li>
                <li>Warehouse &amp; pipeline build</li>
                <li>Self-serve BI for every team</li>
              </ul>
              <Link href="/data-bi" className="btn btn-outline">See Data &amp; BI</Link>
            </article>
          </div>
          <div style={{ marginTop: "1.4rem" }} className="reveal">
            <article className="cta-strip">
              <div>
                <h2>Need something none of the boxes fit?</h2>
                <p>Custom development, engineered with the same transparency — see exactly how we work before you commit.</p>
              </div>
              <Link href="/custom-development" className="btn btn-primary btn-lg">Our Custom Dev Approach</Link>
            </article>
          </div>
        </div>
      </section>

      {/* NIPIGE HIGHLIGHT */}
      <section className="section section-dark" aria-labelledby="nipige-heading">
        <div className="container two-col">
          <div className="reveal">
            <p className="eyebrow"><span className="dot"></span>The Nipige Platform</p>
            <h2 id="nipige-heading">Any business front. <span className="grad-text-warm">One platform underneath.</span></h2>
            <p className="section-sub">Nipige is Trigital&apos;s business-app platform: commerce, catalogues, orders, customers, workflows and analytics as composable building blocks. Your teams assemble; AI agents operate; IT governs.</p>
            <ul className="check-list">
              <li><strong>Commerce-complete</strong>Storefronts, pricing, inventory, payments and fulfilment out of the box.</li>
              <li><strong>Beyond commerce</strong>The same blocks power CRM fronts, vendor portals, service desks and field apps.</li>
              <li><strong>Agent-native</strong>Every Nipige workflow can be operated, monitored and optimised by AI agents.</li>
            </ul>
            <div className="hero-actions">
              <Link href="/platform" className="btn btn-primary">Tour the platform</Link>
            </div>
          </div>
          <div className="reveal">
            <div className="tag-row" aria-label="What teams launch on Nipige">
              <span>B2C Storefronts</span><span>B2B Order Portals</span><span>Marketplace Ops</span>
              <span>Vendor Onboarding</span><span>Field Service Apps</span><span>Loyalty &amp; Offers</span>
              <span>Approvals &amp; Compliance</span><span>Customer 360</span><span>Billing Workflows</span>
              <span>Returns &amp; Support</span><span>Inventory Control</span><span>Analytics Dashboards</span>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH TEASER */}
      <section className="section section-tint" aria-labelledby="approach-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Why Teams Check Our Work</p>
            <h2 id="approach-heading">We show, <span className="grad-text">before you sign.</span></h2>
            <p className="section-sub">No slideware. Every Trigital engagement starts with a working proof on your use case — so the first thing you evaluate is our output, not our promises.</p>
          </div>
          <ol className="approach-list reveal">
            <li><div><h3>Working blueprint in days</h3><p>Bring us a workflow, storefront or report. We return a clickable, running version on Nipige — free — before any contract.</p></div></li>
            <li><div><h3>Weekly demos, not monthly decks</h3><p>Every Friday you see software running in a shared environment. Progress is something you click, not something you&apos;re told.</p></div></li>
            <li><div><h3>Your environment, your access</h3><p>Repos, dashboards and staging are yours from day one. If we disappeared tomorrow, you&apos;d lose nothing.</p></div></li>
            <li><div><h3>Outcome-scoped contracts</h3><p>We commit to shipped capabilities with acceptance criteria — not to hours on a timesheet.</p></div></li>
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-dark" aria-labelledby="results-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Client Outcomes</p>
            <h2 id="results-heading">Leaders measure us <span className="grad-text-warm">by what shipped</span></h2>
          </div>
          <div className="quote-grid">
            <figure className="quote-card reveal">
              <blockquote>“We replaced a nine-month build estimate with a six-week Nipige launch. Our ops team now changes workflows themselves.”</blockquote>
              <figcaption><strong>Chief Digital Officer</strong><span>BFSI enterprise</span></figcaption>
            </figure>
            <figure className="quote-card reveal">
              <blockquote>“Their agents reconcile four systems overnight. Processing time dropped from days to under an hour, with full audit trails.”</blockquote>
              <figcaption><strong>VP, Operations</strong><span>Logistics group</span></figcaption>
            </figure>
            <figure className="quote-card reveal">
              <blockquote>“The free blueprint sold us. We evaluated running software in week one — no other vendor offered that.”</blockquote>
              <figcaption><strong>Head of IT</strong><span>Healthcare provider</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final" aria-labelledby="cta-heading">
        <div className="cta-glow" aria-hidden="true"></div>
        <div className="container cta-inner">
          <img src="/assets/logo-symbol.svg" alt="" width={56} height={56} className="reveal" />
          <h2 id="cta-heading" className="reveal">Ready to launch <span className="grad-text-warm">without limits?</span></h2>
          <p className="reveal">Tell us what you&apos;re trying to ship. We&apos;ll show you a working blueprint of it — free, within days.</p>
          <div className="hero-actions center reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Demo</Link>
            <Link href="/contact" className="btn btn-ghost-dark btn-lg">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
