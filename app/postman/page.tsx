import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postman API Project",
  description: "A practical REST API testing portfolio project built in Postman.",
};

const requests = [
  { method: "GET", endpoint: "/books", purpose: "Explore the catalogue and validate the response schema." },
  { method: "POST", endpoint: "/api-clients", purpose: "Create an API client and capture the access token." },
  { method: "POST", endpoint: "/orders", purpose: "Create an order with Bearer Token authentication." },
  { method: "GET", endpoint: "/orders/:orderId", purpose: "Reuse the saved ID and verify the created resource." },
  { method: "DELETE", endpoint: "/orders/:orderId", purpose: "Clean up test data and validate the delete flow." },
];

export default function PostmanProject() {
  return (
    <main id="top">
      <section className="project-hero project-hero-orange section-shell">
        <div>
          <p className="eyebrow">API Testing · Portfolio project 01</p>
          <h1>Simple Books API collection</h1>
          <p className="hero-lead">
            A Postman collection that tests a complete REST workflow—from
            authentication and reusable variables to positive, negative and
            chained request scenarios.
          </p>
        </div>
        <div className="project-mark" aria-hidden="true">
          <span>POST</span>
          <strong>201</strong>
          <small>Created</small>
        </div>
      </section>

      <section className="section-shell project-facts" aria-label="Project overview">
        <div><span>Focus</span><strong>REST API</strong></div>
        <div><span>Tool</span><strong>Postman</strong></div>
        <div><span>Auth</span><strong>Bearer Token</strong></div>
        <div><span>Coverage</span><strong>Positive + negative</strong></div>
      </section>

      <section className="section-shell case-grid" aria-labelledby="postman-goal">
        <div>
          <p className="section-kicker">The goal</p>
          <h2 id="postman-goal">Test the workflow, not isolated endpoints.</h2>
        </div>
        <div className="prose-large">
          <p>
            The collection models how a real client uses an API. It creates a
            token, stores it as <code>{"{{accessToken}}"}</code>, places an
            order, captures the returned ID and uses it in later requests.
          </p>
          <p>
            The same flow includes intentional failures, such as submitting an
            order without the Authorization header and validating the expected
            <strong> 401 Unauthorized</strong> response.
          </p>
        </div>
      </section>

      <section className="section-shell request-section" aria-labelledby="request-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Collection flow</p>
            <h2 id="request-title">Requests and purpose</h2>
          </div>
          <p>Each request leaves the environment ready for the next step.</p>
        </div>
        <div className="request-list">
          {requests.map((request, index) => (
            <article key={`${request.method}-${request.endpoint}`}>
              <span className={`method method-${request.method.toLowerCase()}`}>{request.method}</span>
              <code>{request.endpoint}</code>
              <p>{request.purpose}</p>
              <span className="request-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell code-grid" aria-labelledby="tests-title">
        <div>
          <p className="section-kicker">Assertions</p>
          <h2 id="tests-title">Useful checks, not just a green status.</h2>
          <ul className="check-list">
            <li>Status codes for success and failure paths</li>
            <li>Required response properties and values</li>
            <li>Data types and basic response structure</li>
            <li>Variable extraction for chained requests</li>
            <li>Clear negative authentication coverage</li>
          </ul>
        </div>
        <pre className="code-window" aria-label="Example Postman test script"><code>{`pm.test("Order is created", () => {
  pm.response.to.have.status(201);

  const response = pm.response.json();
  pm.expect(response.created).to.eql(true);
  pm.expect(response.orderId).to.be.a("string");

  pm.environment.set("orderId", response.orderId);
});`}</code></pre>
      </section>

      <section className="section-shell takeaway-panel">
        <div>
          <p className="section-kicker">What this demonstrates</p>
          <h2>My approach to API testing</h2>
        </div>
        <p>
          I think in user flows, data dependencies and failure modes. The next
          iteration will add a Newman command-line run and a public GitHub
          repository with the collection, environment template and README.
        </p>
      </section>
    </main>
  );
}
