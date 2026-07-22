import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Trigital Technologies",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="page-hero" aria-labelledby="ph-heading">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container page-hero-inner">
        <p className="eyebrow reveal"><span className="dot"></span>404</p>
        <h1 id="ph-heading" className="reveal">This page doesn&apos;t exist.<br /><span className="grad-text">Your project still can.</span></h1>
        <p className="lead reveal">The link is broken or the page has moved. Everything we do is one click from the home page.</p>
        <div className="hero-actions reveal">
          <Link href="/" className="btn btn-primary btn-lg">Back to Home</Link>
          <Link href="/contact" className="btn btn-ghost btn-lg">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
