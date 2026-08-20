/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mihaela-cioaba-cv.alinc2188.chatgpt.site"),
  title: "Mihaela Cioabă – QA Engineer",
  description:
    "Mihaela Cioabă is an ISTQB-certified QA Engineer with 9+ years of experience across web, desktop and automotive products.",
  openGraph: {
    title: "Mihaela Cioabă – QA Engineer",
    description:
      "ISTQB-certified QA Engineer with 9+ years of experience across web, desktop and automotive products.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Mihaela Cioabă — QA Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihaela Cioabă – QA Engineer",
    description:
      "ISTQB-certified QA Engineer with 9+ years of experience across web, desktop and automotive products.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <div className="header-inner">
            <a className="wordmark" href="/" aria-label="Mihaela Cioabă home">
              <span>MC</span>
              <div>
                <strong>Mihaela Cioabă</strong>
                <small>QA Engineer</small>
              </div>
            </a>
            <p className="header-note">Manual QA · API · Playwright</p>
            <a className="header-contact" href="#contact">
              Contact <span aria-hidden="true">↘</span>
            </a>
          </div>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <div className="footer-inner">
            <p>Mihaela Cioabă · QA Engineer</p>
            <p>Timișoara, Romania</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
