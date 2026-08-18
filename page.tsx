const skills = [
  "Manual testing",
  "Exploratory testing",
  "Regression testing",
  "API testing",
  "Cross-browser & device",
  "Test planning",
  "Bug reporting",
  "Release support",
];

const tools = [
  "Jira",
  "Azure DevOps",
  "Confluence",
  "Postman",
  "Playwright",
  "TypeScript",
  "Jenkins",
  "SQL",
  "JMeter",
  "Git",
];

const experience = [
  {
    role: "Senior QA Engineer",
    company: "DevHub",
    period: "Feb 2025 — Present",
    summary:
      "Planning and coordinating release test campaigns for web products, maintaining QA documentation, and combining hands-on manual testing with Playwright and TypeScript automation.",
  },
  {
    role: "Senior QA Engineer",
    company: "BTC Embedded Systems Romania",
    period: "Feb 2024 — Feb 2025",
    summary:
      "Exploratory, regression, manual and automated testing for desktop tools used in embedded software development, with a strong focus on usability and product stability.",
  },
  {
    role: "Senior Software Test Engineer",
    company: "Endava Romania",
    period: "Mar 2021 — Feb 2024",
    summary:
      "Functional, regression, exploratory and API-related testing for web applications, alongside test coordination, QA planning, reporting and client demonstrations.",
  },
  {
    role: "Software Test Engineer · Test Coordinator · System Test Engineer",
    company: "Continental Automotive",
    period: "Dec 2014 — Feb 2021",
    summary:
      "Requirement-based testing for automotive systems, defect analysis, test campaign coordination, documentation, Bash scripting and support for test automation.",
  },
  {
    role: "Software Implementation Consultant",
    company: "Unifiedpost",
    period: "Apr 2014 — Dec 2014",
    summary:
      "Configured and tested software solutions using SQL, HTML, CSS, XSL and internal implementation tools, while maintaining project and test documentation.",
  },
  {
    role: "Survey Programmer",
    company: "Toluna",
    period: "Jul 2013 — Apr 2014",
    summary:
      "Built and tested online surveys, covering logic, responsive styling and cross-browser and cross-device behaviour.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">QA Engineer · ISTQB® Certified</p>
          <h1>
            I look for the issue <span>before the user finds it.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m Mihaela Cioabă, a QA Engineer from Timișoara with 9+ years
            of testing experience across web, desktop and automotive products.
            I turn unclear requirements into focused tests, useful feedback and
            reliable releases.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View my experience
            </a>
            <a
              className="button button-secondary"
              href="mailto:mihaelacioaba.mc@gmail.com"
            >
              Get in touch
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Professional highlights">
          <div className="status-line">
            <span className="status-dot" />
            Open to QA opportunities
          </div>
          <div className="metric-grid">
            <div>
              <strong>9+</strong>
              <span>years in QA</span>
            </div>
            <div>
              <strong>3</strong>
              <span>product areas</span>
            </div>
            <div>
              <strong>ISTQB</strong>
              <span>Foundation</span>
            </div>
            <div>
              <strong>EN</strong>
              <span>fluent</span>
            </div>
          </div>
          <p className="hero-card-note">
            Manual-first thinking, strengthened by API testing and practical
            Playwright automation.
          </p>
        </aside>
      </section>

      <section className="section-shell intro-grid" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">Profile</p>
          <h2 id="about-title">Quality work is more than finding bugs.</h2>
        </div>
        <div className="prose-large">
          <p>
            I work across the full testing lifecycle: requirement analysis,
            planning, test design, execution, defect investigation, reporting
            and release support.
          </p>
          <p>
            My strongest contribution is bringing structure to complicated
            work—clear coverage, evidence that developers can act on, and an
            honest view of release risk.
          </p>
        </div>
      </section>

      <section className="section-shell capabilities" aria-labelledby="skills-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Capabilities</p>
            <h2 id="skills-title">What I bring to a team</h2>
          </div>
          <p>
            Broad manual QA experience, growing automation depth, and the
            communication needed to keep releases moving.
          </p>
        </div>
        <div className="capability-grid">
          <article className="capability-card capability-card-dark">
            <span className="card-number">01</span>
            <h3>Testing practice</h3>
            <div className="tag-list tag-list-dark">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
          <article className="capability-card">
            <span className="card-number">02</span>
            <h3>Tools & technology</h3>
            <div className="tag-list">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
          <article className="capability-card capability-card-accent">
            <span className="card-number">03</span>
            <h3>How I work</h3>
            <ul className="plain-list">
              <li>Clear, reproducible bug reports</li>
              <li>Risk-based prioritisation</li>
              <li>Structured QA documentation</li>
              <li>Close product and developer collaboration</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 id="experience-title">A career built across products</h2>
          </div>
          <p>
            From automotive systems to web platforms and desktop developer
            tools, I adapt the testing approach to the product and its risks.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
              </div>
              <p className="timeline-summary">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell education-grid" aria-labelledby="education-title">
        <div>
          <p className="section-kicker">Education</p>
          <h2 id="education-title">Technical foundation</h2>
        </div>
        <div className="education-list">
          <article>
            <span>2013 — 2015</span>
            <h3>Master&apos;s Degree in Multimedia Technologies</h3>
            <p>Politehnica University of Timișoara</p>
          </article>
          <article>
            <span>2009 — 2013</span>
            <h3>Bachelor&apos;s Degree in Telecommunications Engineering</h3>
            <p>Politehnica University of Timișoara</p>
          </article>
          <article>
            <span>Certification</span>
            <h3>ISTQB® Certified Tester — Foundation Level</h3>
            <p>Software testing fundamentals and terminology</p>
          </article>
        </div>
      </section>

      <section className="section-shell contact-panel" aria-labelledby="contact-title">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">Need a QA engineer who asks the right questions?</h2>
        <p>
          I&apos;m open to discussing manual QA roles and opportunities where I
          can keep expanding my API and automation skills.
        </p>
        <a className="button button-light" href="mailto:mihaelacioaba.mc@gmail.com">
          mihaelacioaba.mc@gmail.com
        </a>
      </section>
    </main>
  );
}
