import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Agentic Engineering Services | Trigital Technologies",
  description:
    "Trigital builds production AI agents for enterprises: workflow automation, RAG on enterprise data, AI copilots and human-in-the-loop governance — measured by business outcomes.",
  alternates: { canonical: "/ai-agents" },
  openGraph: {
    title: "AI & Agentic Engineering Services | Trigital Technologies",
    description: "Production AI agents for enterprises: workflow automation, RAG on enterprise data, AI copilots and human-in-the-loop governance.",
    url: "/ai-agents",
  },
};

export default function AiAgentsPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span>AI &amp; Agentic Engineering</p>
          <p className="eyebrow reveal"><span className="dot"></span>AI &amp; Agentic Engineering</p>
          <h1 id="ph-heading" className="reveal">AI agents that do real work —<br /><span className="grad-text">not just chat about it.</span></h1>
          <p className="lead reveal">Most enterprise AI stalls at the pilot. Ours ships: agents that quote, triage, reconcile, chase and report inside your actual systems — with the guardrails, audit trails and human controls that let compliance say yes.</p>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Book an AI Assessment</Link>
            <a href="#usecases" className="btn btn-ghost btn-lg">See what agents ship</a>
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-label="AI practice statistics">
        <div className="container stat-band reveal">
          <div><strong data-count="6" data-suffix=" wks">6 wks</strong><span>Idea to production agent</span></div>
          <div><strong data-count="80" data-suffix="%">80%</strong><span>Manual effort automated on target flows</span></div>
          <div><strong data-count="100" data-suffix="%">100%</strong><span>Agent actions logged &amp; reviewable</span></div>
          <div><strong>HITL</strong><span>Human-in-the-loop on every critical step</span></div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="section" id="usecases" aria-labelledby="build-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>What We Build</p>
            <h2 id="build-heading">Agents for the work your teams <span className="grad-text">wish they didn&apos;t do</span></h2>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <article className="pillar reveal">
              <span className="pillar-num">01</span>
              <h3>Workflow Agents</h3>
              <p>Order processing, invoice matching, claims triage, vendor follow-ups — agents that execute multi-step business processes end to end, escalating only the exceptions.</p>
            </article>
            <article className="pillar reveal">
              <span className="pillar-num">02</span>
              <h3>Knowledge Agents (RAG)</h3>
              <p>Retrieval-augmented agents grounded in your contracts, SOPs, tickets and product data — answers with citations, not hallucinations.</p>
            </article>
            <article className="pillar reveal">
              <span className="pillar-num">03</span>
              <h3>Customer-Facing Copilots</h3>
              <p>Support and sales assistants that resolve, quote and upsell inside your brand experience, handing off to humans with full context.</p>
            </article>
            <article className="pillar reveal">
              <span className="pillar-num">04</span>
              <h3>Decision &amp; Alert Agents</h3>
              <p>Agents that watch your data — stock thresholds, SLA risks, anomaly spikes — and act or alert per policies you define.</p>
            </article>
            <article className="pillar reveal">
              <span className="pillar-num">05</span>
              <h3>Document Intelligence</h3>
              <p>Extraction and validation across invoices, KYC documents, POs and contracts — pushed straight into your systems of record.</p>
            </article>
            <article className="pillar reveal">
              <span className="pillar-num">06</span>
              <h3>Agent Ops &amp; Governance</h3>
              <p>Evaluation harnesses, cost and quality dashboards, prompt/version management and rollback — the platform to run agents responsibly at scale.</p>
            </article>
          </div>
        </div>
      </section>

      {/* HOW AGENTS RUN */}
      <section className="section section-dark" aria-labelledby="run-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Built for Trust</p>
            <h2 id="run-heading">Autonomy with a <span className="grad-text-warm">safety harness</span></h2>
            <p className="section-sub">Every agent we ship runs inside the same governance model as Nipige: typed actions, permission scopes, immutable logs and human approval gates where the stakes demand it.</p>
          </div>
          <div className="two-col">
            <ul className="check-list reveal">
              <li><strong>Grounded in your data</strong>Agents reason over governed enterprise data — never the open internet by default.</li>
              <li><strong>Typed, scoped actions</strong>An agent can only call the actions you grant, with the permissions you set.</li>
              <li><strong>Human-in-the-loop gates</strong>Payments, contract terms, customer commitments — routed for approval, every time.</li>
              <li><strong>Measured like employees</strong>Accuracy, throughput, cost-per-task and escalation rates on a live dashboard.</li>
            </ul>
            <ul className="check-list reveal">
              <li><strong>Model-flexible</strong>Best-fit frontier or open models per task; swap without rebuilding the system.</li>
              <li><strong>Evaluation before autonomy</strong>Agents graduate from shadow mode → suggest mode → autonomous, on your evidence.</li>
              <li><strong>Full audit trail</strong>Every input, decision and action logged and replayable for compliance review.</li>
              <li><strong>Kill switch included</strong>Pause any agent instantly; work routes back to human queues gracefully.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DELIVERY PATH */}
      <section className="section" aria-labelledby="path-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>How We Deliver</p>
            <h2 id="path-heading">From &quot;could AI do this?&quot; <span className="grad-text">to measurable production</span></h2>
          </div>
          <ol className="approach-list reveal">
            <li><div><h3>AI opportunity assessment — week 1</h3><p>We map your workflows, score them for agent-fit (volume × rules × data readiness), and pick one with provable ROI. You get the scored map either way.</p></div></li>
            <li><div><h3>Working agent on your data — weeks 2–3</h3><p>A functioning agent on a real slice of your data, run in shadow mode next to your team. You compare its output to reality before trusting it.</p></div></li>
            <li><div><h3>Evaluation gate — week 4</h3><p>Accuracy, cost and escalation numbers reviewed together against agreed thresholds. It only graduates if the evidence says so.</p></div></li>
            <li><div><h3>Production &amp; scale — weeks 5–6+</h3><p>Governed rollout with approval gates, dashboards and training. Then we repeat the loop on the next workflow — each one faster than the last.</p></div></li>
          </ol>
          <div className="tag-row reveal" style={{ justifyContent: "center" }}>
            <span>OpenAI &amp; Anthropic models</span><span>Open-source LLMs</span><span>LangChain / LlamaIndex</span>
            <span>Vector search</span><span>Azure / AWS / GCP AI</span><span>MCP &amp; tool-calling</span><span>Evaluation harnesses</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tint" aria-label="Call to action">
        <div className="container">
          <article className="cta-strip reveal">
            <div>
              <h2>One workflow. One agent. Two weeks. Free to see.</h2>
              <p>Bring your most repetitive process — we&apos;ll show you an agent running it in shadow mode.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Book an AI Assessment</Link>
          </article>
        </div>
      </section>
    </>
  );
}
