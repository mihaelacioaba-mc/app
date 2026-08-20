const testingPractice = [
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
  "SQL",
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
        <div className="hero-main">
          <div className="hero-meta" aria-label="Professional status">
            <span>QA Engineer</span>
            <span>Timișoara · Romania</span>
          </div>
          <p className="hero-name">Mihaela Cioabă</p>
          <h1>
            Quality before it becomes <em>a user problem.</em>
          </h1>
          <div className="hero-intro">
            <p>
              I bring structure to complex products through focused testing,
              useful evidence and an honest view of release risk.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#experience">
                Explore experience <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="mailto:mihaelacioaba.mc@gmail.com">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Professional snapshot">
          <div className="profile-panel-head">
            <span>Profile / 01</span>
            <span className="availability"><i /> Open to opportunities</span>
          </div>
          <div className="primary-metric">
            <strong>9+</strong>
            <span>years of QA experience</span>
          </div>
          <div className="profile-facts">
            <div>
              <span>Products</span>
              <strong>Web · Desktop · Automotive</strong>
            </div>
            <div>
              <span>Certification</span>
              <strong>ISTQB® Foundation</strong>
            </div>
            <div>
              <span>Languages</span>
              <strong>English · Romanian</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="profile-story" aria-labelledby="profile-title">
        <div className="section-shell story-grid">
          <div className="section-label">
            <span>02</span>
            <p>Profile</p>
          </div>
          <div className="story-heading">
            <h2 id="profile-title">The work behind a reliable release.</h2>
          </div>
          <div className="story-copy">
            <p>
              I&apos;m a QA Engineer with experience across the full testing
              lifecycle—from requirement analysis and test design to defect
              investigation, reporting and release support.
            </p>
            <p>
              My strongest contribution is turning unclear, complicated work
              into practical coverage and feedback that a team can act on.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell expertise" aria-labelledby="expertise-title">
        <div className="section-topline">
          <div className="section-label section-label-dark">
            <span>03</span>
            <p>Expertise</p>
          </div>
          <h2 id="expertise-title">What I bring to a team</h2>
        </div>

        <div className="expertise-grid">
          <article>
            <span className="article-number">01</span>
            <h3>Testing practice</h3>
            <div className="tag-list">
              {testingPractice.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <span className="article-number">02</span>
            <h3>Tools & technology</h3>
            <div className="tag-list">
              {tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </article>
          <article className="work-style">
            <span className="article-number">03</span>
            <h3>How I work</h3>
            <ul>
              <li>Clear, reproducible bug reports</li>
              <li>Risk-based prioritisation</li>
              <li>Structured QA documentation</li>
              <li>Close product and developer collaboration</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-shell">
          <div className="section-topline experience-heading">
            <div className="section-label section-label-dark">
              <span>04</span>
              <p>Experience</p>
            </div>
            <h2 id="experience-title">A career built across products.</h2>
            <p>
              Different products need different testing strategies. The goal
              stays the same: evidence, clarity and confidence.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                <p className="timeline-period">{item.period}</p>
                <div className="timeline-title">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p className="timeline-summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell education" aria-labelledby="education-title">
        <div className="section-topline">
          <div className="section-label section-label-dark">
            <span>05</span>
            <p>Education</p>
          </div>
          <h2 id="education-title">Technical foundation</h2>
        </div>
        <div className="education-grid">
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
          <article className="certification">
            <span>Certification</span>
            <h3>ISTQB® Certified Tester</h3>
            <p>Foundation Level</p>
          </article>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-index">06 / Contact</div>
        <h2 id="contact-title">Let&apos;s build confidence before release.</h2>
        <p>
          I&apos;m open to QA opportunities where solid manual testing matters
          and I can keep developing my API and automation skills.
        </p>
        <a href="mailto:mihaelacioaba.mc@gmail.com">
          mihaelacioaba.mc@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
