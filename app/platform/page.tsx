import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nipige Platform — Business Apps for Commerce & Every Business Front | Trigital",
  description:
    "Nipige is Trigital's business-app platform: launch commerce storefronts, portals, workflows and any business front in weeks — governed, agent-native and zero-code.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Nipige Platform — Business Apps for Commerce & Every Business Front | Trigital",
    description: "Launch commerce storefronts, portals, workflows and any business front in weeks — governed, agent-native and zero-code.",
    url: "/platform",
  },
};

const barStyle = (w: string) => ({ "--w": w }) as React.CSSProperties;

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span>Nipige Platform</p>
          <p className="eyebrow reveal"><span className="dot"></span>The Nipige Platform</p>
          <h1 id="ph-heading" className="reveal">Business apps for commerce —<br /><span className="grad-text">and every business front.</span></h1>
          <p className="lead reveal">Nipige turns the parts every business app needs — catalogues, customers, orders, payments, workflows, analytics — into composable blocks. Assemble a storefront on Monday, a vendor portal on Tuesday, a field-service app next week. Same platform, same governance, zero code.</p>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Platform Demo</Link>
            <a href="#modules" className="btn btn-ghost btn-lg">See what it builds</a>
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-label="Platform statistics">
        <div className="container stat-band reveal">
          <div><strong data-count="14" data-suffix=" days">14 days</strong><span>Median first go-live</span></div>
          <div><strong data-count="40" data-suffix="+">40+</strong><span>Pre-built app blocks</span></div>
          <div><strong data-count="99.9" data-suffix="%">99.9%</strong><span>Uptime SLA</span></div>
          <div><strong>Zero</strong><span>Code required to operate</span></div>
        </div>
      </section>

      {/* COMMERCE */}
      <section className="section" id="commerce" aria-labelledby="commerce-heading">
        <div className="container two-col">
          <div className="reveal">
            <p className="eyebrow"><span className="dot"></span>Commerce Core</p>
            <h2 id="commerce-heading">Commerce-complete, <span className="grad-text">from catalogue to cash.</span></h2>
            <p className="section-sub">Everything a modern selling motion needs ships in the box — B2C, B2B or marketplace. Launch a storefront with real inventory, real payments and real fulfilment flows without stitching together five SaaS tools.</p>
            <ul className="check-list">
              <li><strong>Catalogue &amp; pricing engine</strong>Variants, price lists, customer-specific pricing, promotions and bundles.</li>
              <li><strong>Orders &amp; fulfilment</strong>Carts, checkout, order orchestration, shipping integrations, returns and refunds.</li>
              <li><strong>Payments &amp; billing</strong>Gateway integrations, invoicing, credit terms and reconciliation workflows.</li>
              <li><strong>Customer 360</strong>Profiles, segments, loyalty, offers and service history in one view.</li>
            </ul>
          </div>
          <div className="reveal" aria-hidden="true">
            <div className="hero-card hero-card-main">
              <div className="hc-head">
                <img src="/assets/logo-symbol.svg" alt="" width={28} height={28} />
                <span>Storefront — Week 2</span>
                <em className="hc-badge">Live</em>
              </div>
              <div className="hc-row"><span>Catalogue import (12,400 SKUs)</span><i className="bar"><b style={barStyle("100%")}></b></i></div>
              <div className="hc-row"><span>Payment gateway</span><i className="bar"><b style={barStyle("100%")}></b></i></div>
              <div className="hc-row"><span>Fulfilment workflow</span><i className="bar"><b style={barStyle("88%")}></b></i></div>
              <div className="hc-row"><span>Loyalty programme</span><i className="bar"><b style={barStyle("56%")}></b></i></div>
              <div className="hc-foot"><span className="ok">✓ UAT passed</span><span>Go-live Friday</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND COMMERCE / MODULES */}
      <section className="section section-dark" id="modules" aria-labelledby="modules-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Beyond Commerce</p>
            <h2 id="modules-heading">The same blocks power <span className="grad-text-warm">any business front</span></h2>
            <p className="section-sub">A storefront is just customers + catalogue + orders + workflow. So is a vendor portal. So is a service desk. Nipige recombines the same governed blocks into whatever front your business needs next.</p>
          </div>
          <div className="card-grid">
            <article className="svc-card reveal" data-accent="violet">
              <h3>B2B Order Portals</h3>
              <p>Dealer and distributor ordering with credit limits, contract pricing, approval chains and scheduled deliveries.</p>
            </article>
            <article className="svc-card reveal" data-accent="blue">
              <h3>Vendor &amp; Partner Onboarding</h3>
              <p>Document collection, verification workflows, compliance checks and contract lifecycles — fully auditable.</p>
            </article>
            <article className="svc-card reveal" data-accent="orange">
              <h3>Field Service &amp; Operations</h3>
              <p>Job assignment, mobile checklists, photo evidence, sign-offs and automatic billing on completion.</p>
            </article>
            <article className="svc-card reveal" data-accent="blue">
              <h3>Service Desks &amp; Support</h3>
              <p>Ticketing, SLAs, escalation matrices and customer portals wired to the same Customer 360.</p>
            </article>
            <article className="svc-card reveal" data-accent="violet">
              <h3>Approvals &amp; Compliance</h3>
              <p>Purchase approvals, expense flows, policy exceptions — every decision logged, every trail export-ready.</p>
            </article>
            <article className="svc-card reveal" data-accent="orange">
              <h3>Analytics Dashboards</h3>
              <p>Every block emits clean events. Dashboards and alerts come standard, not as a bolt-on BI project.</p>
            </article>
          </div>
        </div>
      </section>

      {/* AGENT-NATIVE */}
      <section className="section" aria-labelledby="agentnative-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Agent-Native by Design</p>
            <h2 id="agentnative-heading">Your apps don&apos;t just run. <span className="grad-text">They operate themselves.</span></h2>
            <p className="section-sub">Every Nipige workflow exposes typed actions AI agents can safely call. That means agents don&apos;t screen-scrape or guess — they operate your business apps through the same governed, audited interfaces as your people.</p>
          </div>
          <div className="agent-flow reveal" aria-label="How agents operate Nipige apps">
            <div className="agent-node"><strong>Signal</strong><span>New order, ticket, document or threshold breach</span></div>
            <div className="agent-arrow" aria-hidden="true">→</div>
            <div className="agent-node core"><strong>Trigital Agent</strong><span>Reasons over your data, policies &amp; history</span></div>
            <div className="agent-arrow" aria-hidden="true">→</div>
            <div className="agent-node"><strong>Governed Action</strong><span>Executes in Nipige — logged, reversible, human-approvable</span></div>
          </div>
          <div className="tag-row reveal" style={{ justifyContent: "center" }}>
            <span>Auto-triage support tickets</span><span>Reorder stock at thresholds</span><span>Chase pending approvals</span>
            <span>Reconcile payments</span><span>Flag compliance exceptions</span><span>Draft vendor responses</span>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="section section-tint" id="governance" aria-labelledby="gov-heading">
        <div className="container two-col">
          <div className="reveal">
            <p className="eyebrow"><span className="dot"></span>Enterprise Governance</p>
            <h2 id="gov-heading">Loved by builders. <span className="grad-text">Approved by security.</span></h2>
            <p className="section-sub">Nipige was designed for enterprises that can&apos;t trade control for speed. Every control your platform and security teams expect is native — which is why our fastest approvals often come from IT.</p>
            <ul className="check-list">
              <li><strong>Identity &amp; access</strong>SSO/SAML, role-based access and field-level permissions.</li>
              <li><strong>Audit everything</strong>Immutable logs for every change, human or agent, export-ready for compliance.</li>
              <li><strong>Environment promotion</strong>Dev → staging → production with approvals, versioning and instant rollback.</li>
              <li><strong>Deploy anywhere</strong>Our cloud, your AWS/Azure/GCP, or on-premise for regulated workloads.</li>
            </ul>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Talk to our platform team</Link>
            </div>
          </div>
          <ul className="commit-list reveal" role="list">
            <li><strong>Open integration fabric</strong><span>Pre-built connectors for ERPs, CRMs, payment rails and warehouses; REST &amp; webhooks for the rest.</span></li>
            <li><strong>Your data stays yours</strong><span>Full export at any time, standard formats, no ransom clauses.</span></li>
            <li><strong>Observability included</strong><span>Usage, performance and agent-activity dashboards for platform owners.</span></li>
            <li><strong>99.9% uptime SLA</strong><span>Backed by real credits, monitored publicly with your team.</span></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <article className="cta-strip reveal">
            <div>
              <h2>See your use case running on Nipige — free.</h2>
              <p>Bring one workflow or storefront idea. We&apos;ll return a working blueprint within days.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Request a Blueprint</Link>
          </article>
        </div>
      </section>
    </>
  );
}
