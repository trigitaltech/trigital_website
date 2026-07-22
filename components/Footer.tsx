import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-lockup-white.png" alt="Trigital Technologies" width={170} height={43} />
          <p>AI Agentic Services &amp; the Nipige Platform.<br />Build Without Limits. Launch Without Code.</p>
        </div>
        <nav aria-label="Footer — Platform">
          <h4>Platform</h4>
          <Link href="/platform">Nipige Overview</Link>
          <Link href="/platform#commerce">Commerce</Link>
          <Link href="/platform#modules">Business Apps</Link>
          <Link href="/platform#governance">Governance</Link>
        </nav>
        <nav aria-label="Footer — Services">
          <h4>Services</h4>
          <Link href="/ai-agents">AI &amp; Agentic</Link>
          <Link href="/data-bi">Data Migration &amp; BI</Link>
          <Link href="/custom-development">Custom Development</Link>
          <Link href="/services">All Services</Link>
        </nav>
        <nav aria-label="Footer — Company">
          <h4>Company</h4>
          <Link href="/company">About</Link>
          <Link href="/company#values">How We Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>Hyderabad, India</p>
          <a href="mailto:hello@trigitaltech.com">hello@trigitaltech.com</a>
        </div>
      </div>
      <div className="container footer-legal">
        <p>© {new Date().getFullYear()} Trigital Technologies. All rights reserved.</p>
        <p>Made with <span className="dot inline"></span> in Hyderabad</p>
      </div>
    </footer>
  );
}
