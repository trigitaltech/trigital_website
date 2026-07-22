"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/platform", label: "Nipige Platform" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/data-bi", label: "Data & BI" },
  { href: "/custom-development", label: "Custom Dev" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setIsOpen(false);

  return (
    <header className={`site-header${isScrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Trigital Technologies home">
          <img src="/assets/logo-lockup.png" alt="Trigital Technologies" className="brand-logo" width={180} height={46} />
        </a>
        <nav className={`main-nav${isOpen ? " open" : ""}`} aria-label="Main navigation" id="mainNav">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={pathname === href ? "active" : undefined} onClick={closeNav}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary nav-cta" onClick={closeNav}>
            Book a Demo
          </Link>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mainNav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
