/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mihaela Cioabă – QA Engineer",
    template: "%s | Mihaela Cioabă",
  },
  description:
    "QA Engineer portfolio featuring manual testing experience, Postman API testing and Playwright automation projects.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const navItems = [
  { href: "/", label: "CV" },
  { href: "/postman", label: "Postman" },
  { href: "/automation", label: "Automation" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header">
          <div className="header-inner">
            <a className="wordmark" href="/" aria-label="Mihaela Cioabă home">
              <span>MC</span>
              <strong>Mihaela Cioabă</strong>
            </a>
            <nav className="main-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="header-contact" href="mailto:mihaelacioaba.mc@gmail.com">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <strong>Mihaela Cioabă</strong>
              <span>QA Engineer · Timișoara, Romania</span>
            </div>
            <p>Built as a practical portfolio of how I test and learn.</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
