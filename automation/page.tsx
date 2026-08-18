import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playwright Automation Project",
  description: "A Playwright and TypeScript end-to-end testing portfolio project.",
};

const features = [
  { number: "01", title: "Page objects", text: "Reusable page classes keep selectors and user actions away from test intent." },
  { number: "02", title: "Stable selectors", text: "Role-based and label-based locators are preferred over brittle CSS paths." },
  { number: "03", title: "Readable scenarios", text: "Tests describe behaviour clearly enough to support review by the whole team." },
  { number: "04", title: "Debug evidence", text: "Screenshots, traces and reports make failures faster to understand and reproduce." },
];

export default function AutomationProject() {
  return (
    <main id="top">
      <section className="project-hero project-hero-blue section-shell">
        <div>
          <p className="eyebrow">E2E Automation · Portfolio project 02</p>
          <h1>Automation Exercise test suite</h1>
          <p className="hero-lead">
            A growing Playwright and TypeScript project that turns common web
            journeys into maintainable end-to-end tests using page objects,
            deliberate selectors and clear assertions.
          </p>
        </div>
        <div className="browser-visual" aria-hidden="true">
          <div className="browser-bar"><i /><i /><i /></div>
          <div className="browser-code">
            <span>test(&quot;sign in&quot;</span>
            <span className="indent">await login.open()</span>
            <span className="indent">await login.submit()</span>
            <span>expect(page)</span>
          </div>
        </div>
      </section>

      <section className="section-shell project-facts" aria-label="Project overview">
        <div><span>Framework</span><strong>Playwright</strong></div>
        <div><span>Language</span><strong>TypeScript</strong></div>
        <div><span>Pattern</span><strong>Page Object Model</strong></div>
        <div><span>Scope</span><strong>End-to-end</strong></div>
      </section>

      <section className="section-shell case-grid" aria-labelledby="automation-goal">
        <div>
          <p className="section-kicker">The goal</p>
          <h2 id="automation-goal">Automation that stays understandable.</h2>
        </div>
        <div className="prose-large">
          <p>
            The suite covers realistic journeys such as cookie consent,
            navigation, account access and form validation. The point is not to
            automate everything—it is to choose stable, valuable scenarios.
          </p>
          <p>
            The structure separates page behaviour from test expectations, so
            changes remain local and tests continue to read like user stories.
          </p>
        </div>
      </section>

      <section className="section-shell feature-section" aria-labelledby="feature-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Design choices</p>
            <h2 id="feature-title">Built to be maintained</h2>
          </div>
          <p>A compact foundation that can grow with more flows and CI coverage.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell code-grid automation-code" aria-labelledby="automation-code-title">
        <div>
          <p className="section-kicker">Example</p>
          <h2 id="automation-code-title">A test should reveal its intent.</h2>
          <p className="supporting-copy">
            Locators live in page objects. The test itself stays focused on the
            behaviour being verified and the evidence that proves it worked.
          </p>
          <div className="tag-list">
            <span>Accessible locators</span>
            <span>Auto-waiting</span>
            <span>Web-first assertions</span>
            <span>Reusable fixtures</span>
          </div>
        </div>
        <pre className="code-window code-window-blue" aria-label="Example Playwright test"><code>{`test("user can sign in", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.open();
  await home.acceptCookies();
  await home.goToLogin();

  await login.signIn(user.email, user.password);
  await expect(page.getByText("Logged in as")).toBeVisible();
});`}</code></pre>
      </section>

      <section className="section-shell takeaway-panel takeaway-panel-blue">
        <div>
          <p className="section-kicker">Next iteration</p>
          <h2>From practice suite to CI pipeline</h2>
        </div>
        <p>
          The public repository will include setup instructions, tagged smoke
          and regression suites, HTML reporting and a CI workflow that runs the
          tests automatically on every relevant change.
        </p>
      </section>
    </main>
  );
}
