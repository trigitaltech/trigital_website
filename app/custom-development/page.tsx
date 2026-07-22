import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Software Development — See How We Work | Trigital Technologies",
  description:
    "Custom development at Trigital: an evidence-first approach — free working blueprint, weekly demos, your repos from day one, outcome-scoped contracts. Check our work before you commit.",
  alternates: { canonical: "/custom-development" },
  openGraph: {
    title: "Custom Software Development — See How We Work | Trigital Technologies",
    description: "Evidence-first custom development: free working blueprint, weekly demos, your repos from day one, outcome-scoped contracts.",
    url: "/custom-development",
  },
};

export default function CustomDevelopmentPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span>Custom Development</p>
          <p className="eyebrow reveal"><span className="dot"></span>Custom Development</p>
          <h1 id="ph-heading" className="reveal">Don&apos;t take our word for it.<br /><span className="grad-text">Take our work for it.</span></h1>
          <p className="lead reveal">Every software vendor promises quality. We removed the need to believe promises: before you sign anything, we build a working slice of your product, hand you the keys to everything, and let the output make the case.</p>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Request a Free Blueprint</Link>
            <a href="#approach" className="btn btn-ghost btn-lg">See the approach</a>
          </div>
        </div>
      </section>

      {/* THE STANDARD OBJECTION */}
      <section className="section section-tint" aria-labelledby="objection-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>The Problem With Hiring Dev Shops</p>
            <h2 id="objection-heading">You can&apos;t evaluate code <span className="grad-text">you haven&apos;t seen</span></h2>
            <p className="section-sub">Portfolios show the happy endings. References are hand-picked. Proposals are written by the best writer, not the best engineer. So we designed an engagement where the first thing you evaluate is the actual thing you&apos;re buying: working software, built for you.</p>
          </div>
          <div className="stat-band reveal">
            <div><strong>Day 0</strong><span>Free working blueprint of your idea — before any contract</span></div>
            <div><strong>Weekly</strong><span>Live demo of running software, every single Friday</span></div>
            <div><strong>Yours</strong><span>Repos, environments &amp; docs in your accounts from day one</span></div>
            <div><strong>Outcomes</strong><span>Contracts scoped to shipped capabilities, not hours</span></div>
          </div>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="section" id="approach" aria-labelledby="approach-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Our Approach</p>
            <h2 id="approach-heading">Seven habits that make our work <span className="grad-text">easy to check</span></h2>
          </div>
          <ol className="approach-list reveal">
            <li><div><h3>Blueprint before contract</h3><p>Bring us your idea or backlog. Within days you get a running blueprint — real screens, real flows, deployed to a URL you can share internally. If it doesn&apos;t impress your team, we part as friends and you keep the blueprint.</p></div></li>
            <li><div><h3>AI-accelerated, senior-reviewed</h3><p>We use AI agents for the mechanical 60% of development — scaffolding, tests, migrations, documentation — so senior engineers spend their time on architecture, edge cases and review. You get senior-quality output at startup speed.</p></div></li>
            <li><div><h3>Everything in your name</h3><p>Source control, cloud accounts, CI/CD, documentation — created in your organisation&apos;s accounts, not ours. Walk away any Friday and you lose nothing but us.</p></div></li>
            <li><div><h3>Definition of done that means done</h3><p>Every feature ships with automated tests, security checks, docs and a demo recording. &quot;Done&quot; is verifiable in your environment, not declared in a status report.</p></div></li>
            <li><div><h3>Weekly demos, honest burndowns</h3><p>Fridays you see software running and a plain-language account of what moved, what slipped and why. Bad news travels to you fastest — that&apos;s a rule, not a slogan.</p></div></li>
            <li><div><h3>Security &amp; quality gates on every merge</h3><p>Static analysis, dependency scanning, code review and test coverage thresholds enforced by pipeline — the discipline is automated, so it never depends on anyone&apos;s good day.</p></div></li>
            <li><div><h3>Handover as a feature, not an afterthought</h3><p>Runbooks, architecture records and paired sessions with your team are part of the scope. Success is your team running it confidently without us.</p></div></li>
          </ol>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="section section-dark" aria-labelledby="wb-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>What We Build</p>
            <h2 id="wb-heading">When the problem outgrows platforms, <span className="grad-text-warm">we write the code</span></h2>
            <p className="section-sub">Nipige covers most business fronts. When you need something truly bespoke — a product, an engine, an integration no platform anticipates — our engineering team takes over with the same transparency.</p>
          </div>
          <div className="card-grid">
            <article className="svc-card reveal" data-accent="violet">
              <h3>Web &amp; Mobile Products</h3>
              <p>Customer-facing products built API-first — React/Next.js frontends, native and cross-platform mobile, engineered for scale from the first commit.</p>
            </article>
            <article className="svc-card reveal" data-accent="blue">
              <h3>APIs &amp; Integration Engines</h3>
              <p>High-throughput APIs, event-driven backbones and integration layers that make legacy cores usable by modern channels.</p>
            </article>
            <article className="svc-card reveal" data-accent="orange">
              <h3>SaaS Product Engineering</h3>
              <p>Multi-tenant architecture, billing, onboarding and admin — the unglamorous 40% of SaaS that decides whether it scales.</p>
            </article>
            <article className="svc-card reveal" data-accent="blue">
              <h3>Modernisation &amp; Re-platforming</h3>
              <p>Strangler-pattern migrations off monoliths and legacy stacks — incremental, reversible, zero big-bang risk.</p>
            </article>
            <article className="svc-card reveal" data-accent="violet">
              <h3>AI-Infused Features</h3>
              <p>Search, recommendations, copilots and document intelligence embedded into your existing products, with our agentic practice behind it.</p>
            </article>
            <article className="svc-card reveal" data-accent="orange">
              <h3>Performance &amp; Scale Rescue</h3>
              <p>Profiling, load testing and re-architecture for systems buckling under growth — measured before/after, always.</p>
            </article>
          </div>
          <div className="tag-row reveal" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <span>TypeScript / Node.js</span><span>Python</span><span>Java / .NET</span><span>React / Next.js</span>
            <span>Flutter / React Native</span><span>PostgreSQL / MongoDB</span><span>AWS / Azure / GCP</span>
            <span>Kubernetes</span><span>Kafka / event-driven</span>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section" aria-labelledby="guarantee-heading">
        <div className="container two-col">
          <div className="reveal">
            <p className="eyebrow"><span className="dot"></span>Our Commitments</p>
            <h2 id="guarantee-heading">Four things we put <span className="grad-text">in writing</span></h2>
            <p className="section-sub">These aren&apos;t marketing lines — they appear in our statements of work, with remedies attached.</p>
          </div>
          <ul className="commit-list reveal" role="list">
            <li><strong>First demo within 14 days</strong><span>Running software in a shared environment inside two weeks, or you owe nothing for them.</span></li>
            <li><strong>No lock-in, ever</strong><span>Your accounts, your repos, standard tech — leaving us is a calendar event, not a project.</span></li>
            <li><strong>Fixed-scope releases</strong><span>Each release priced against acceptance criteria. Scope creep is our risk to manage, not your invoice.</span></li>
            <li><strong>30-day post-launch warranty</strong><span>Defects in delivered scope fixed free, priority-first, for 30 days after go-live.</span></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tint" aria-label="Call to action">
        <div className="container">
          <article className="cta-strip reveal">
            <div>
              <h2>The cheapest way to evaluate us costs you nothing.</h2>
              <p>One idea, one week, one working blueprint. Then decide with evidence.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Request a Free Blueprint</Link>
          </article>
        </div>
      </section>
    </>
  );
}
