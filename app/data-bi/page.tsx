import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Migration & Business Intelligence Services | Trigital Technologies",
  description:
    "Zero-loss data migration and decision-grade business intelligence: Trigital moves you off legacy systems and turns clean data into dashboards every team actually uses.",
  alternates: { canonical: "/data-bi" },
  openGraph: {
    title: "Data Migration & Business Intelligence Services | Trigital Technologies",
    description: "Zero-loss data migration and decision-grade business intelligence: off legacy systems, into dashboards every team actually uses.",
    url: "/data-bi",
  },
};

const barStyle = (w: string) => ({ "--w": w }) as React.CSSProperties;

export default function DataBiPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ph-heading">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="breadcrumbs reveal"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span>Data Migration &amp; Business Intelligence</p>
          <p className="eyebrow reveal"><span className="dot"></span>Data Migration &amp; Business Intelligence</p>
          <h1 id="ph-heading" className="reveal">Move every record safely.<br /><span className="grad-text">Then make it mean something.</span></h1>
          <p className="lead reveal">Legacy ERPs, aging databases, tangled spreadsheets — we migrate them with a reconciliation-first playbook where every record is counted, matched and signed off. Then we build the warehouse and BI layer that turns that clean data into decisions.</p>
          <div className="hero-actions reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Migration Assessment</Link>
            <a href="#bi" className="btn btn-ghost btn-lg">See the BI practice</a>
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-label="Data practice statistics">
        <div className="container stat-band reveal">
          <div><strong>100%</strong><span>Record-level reconciliation, every migration</span></div>
          <div><strong>Zero</strong><span>Data-loss tolerance — parallel-run before cutover</span></div>
          <div><strong data-count="60" data-suffix="%">60%</strong><span>Typical reporting-effort reduction after BI rollout</span></div>
          <div><strong>1</strong><span>Source of truth when we&apos;re done</span></div>
        </div>
      </section>

      {/* MIGRATION */}
      <section className="section" id="migration" aria-labelledby="mig-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Data Migration</p>
            <h2 id="mig-heading">A migration playbook built on <span className="grad-text">paranoia — the good kind</span></h2>
            <p className="section-sub">Migrations fail quietly: a dropped decimal, a mangled date, an orphaned record discovered six months later. Our playbook assumes everything will go wrong, and proves — with numbers — that it didn&apos;t.</p>
          </div>
          <ol className="approach-list reveal">
            <li><div><h3>Discovery &amp; data profiling</h3><p>We inventory every source — databases, ERPs, files, spreadsheets — and profile quality: duplicates, gaps, format drift, undocumented business rules hiding in columns.</p></div></li>
            <li><div><h3>Mapping &amp; cleansing rules, signed off</h3><p>Field-by-field mapping with transformation rules your business owners approve in plain language. Nothing moves on an assumption.</p></div></li>
            <li><div><h3>Trial migrations, measured</h3><p>Repeated dry runs into staging with automated reconciliation: record counts, checksums, financial totals and sampled record-level diffs on every run.</p></div></li>
            <li><div><h3>Parallel run &amp; cutover</h3><p>Old and new run side by side until outputs match to agreed tolerances. Cutover happens on evidence, with a tested rollback plan we&apos;ve never enjoyed needing.</p></div></li>
            <li><div><h3>Post-migration audit pack</h3><p>You receive the full reconciliation evidence — counts, exceptions, resolutions — auditor-ready. That pack is why finance teams love us.</p></div></li>
          </ol>
          <div className="tag-row reveal" style={{ justifyContent: "center" }}>
            <span>Oracle / SQL Server / MySQL / PostgreSQL</span><span>Legacy ERP exits</span><span>Excel &amp; Access rescue</span>
            <span>Cloud re-platforming</span><span>SaaS-to-SaaS moves</span><span>Nipige onboarding</span>
          </div>
        </div>
      </section>

      {/* BI */}
      <section className="section section-dark" id="bi" aria-labelledby="bi-heading">
        <div className="container two-col">
          <div className="reveal">
            <p className="eyebrow"><span className="dot"></span>Business Intelligence</p>
            <h2 id="bi-heading">Dashboards people open <span className="grad-text-warm">every morning</span></h2>
            <p className="section-sub">Most BI projects die as unused dashboards. Ours start from the decisions your leaders make weekly — then work backwards to the pipelines, models and visuals that serve exactly those decisions.</p>
            <ul className="check-list">
              <li><strong>Warehouse &amp; pipelines</strong>Modern ELT into a governed warehouse — modelled, documented, tested.</li>
              <li><strong>Decision-first dashboards</strong>Sales, cash, inventory, operations — each view answers a named question for a named role.</li>
              <li><strong>Self-serve for every team</strong>Semantic layers and training so analysts stop being a reporting bottleneck.</li>
              <li><strong>AI on top</strong>Ask-your-data agents and automated narrative summaries, grounded in the governed model — not a demo gimmick.</li>
            </ul>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Scope a BI rollout</Link>
            </div>
          </div>
          <div className="reveal" aria-hidden="true">
            <div className="hero-card hero-card-main">
              <div className="hc-head">
                <img src="/assets/logo-symbol.svg" alt="" width={28} height={28} />
                <span>Executive Daily — 7:00 AM</span>
                <em className="hc-badge">Auto</em>
              </div>
              <div className="hc-row"><span>Revenue vs plan</span><i className="bar"><b style={barStyle("87%")}></b></i></div>
              <div className="hc-row"><span>Cash collection</span><i className="bar"><b style={barStyle("73%")}></b></i></div>
              <div className="hc-row"><span>Stock cover (days)</span><i className="bar"><b style={barStyle("58%")}></b></i></div>
              <div className="hc-row"><span>SLA compliance</span><i className="bar"><b style={barStyle("94%")}></b></i></div>
              <div className="hc-foot"><span className="ok">✓ Reconciled to source</span><span>3 alerts routed to owners</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT LANDS */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="dot"></span>Why This Practice Wins</p>
            <h2 id="why-heading">Migration and BI belong <span className="grad-text">in one pair of hands</span></h2>
            <p className="section-sub">Vendors who only migrate leave you with clean data and no insight. Vendors who only build dashboards inherit dirty data and blame it. We own the chain end to end — so there&apos;s no gap for value to fall through.</p>
          </div>
          <div className="stat-band reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div><strong>Weeks 1–4</strong><span>Migrate &amp; reconcile — evidence pack delivered</span></div>
            <div><strong>Weeks 5–8</strong><span>Warehouse, models &amp; first decision dashboards live</span></div>
            <div><strong>Week 9+</strong><span>Self-serve rollout, AI-on-data, continuous tuning</span></div>
          </div>
          <div className="tag-row reveal" style={{ justifyContent: "center" }}>
            <span>Power BI</span><span>Tableau</span><span>Metabase / Superset</span><span>Snowflake / BigQuery / Fabric</span>
            <span>dbt</span><span>Airflow</span><span>Nipige Analytics</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tint" aria-label="Call to action">
        <div className="container">
          <article className="cta-strip reveal">
            <div>
              <h2>Nervous about a migration? That&apos;s healthy.</h2>
              <p>Send us one messy source system. We&apos;ll return a free risk profile and migration plan within a week.</p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Migration Assessment</Link>
          </article>
        </div>
      </section>
    </>
  );
}
