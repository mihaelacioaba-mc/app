import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies & Photo Journal",
  description: "A personal photo journal by Mihaela Cioabă.",
};

const slots = [
  { id: "01", className: "gallery-tall", label: "A favourite place" },
  { id: "02", className: "gallery-wide", label: "A detail worth keeping" },
  { id: "03", className: "", label: "A quiet moment" },
  { id: "04", className: "", label: "A day outside" },
  { id: "05", className: "gallery-wide", label: "A small discovery" },
  { id: "06", className: "", label: "A good memory" },
];

export default function Hobbies() {
  return (
    <main id="top" className="hobby-page">
      <section className="hobby-hero section-shell">
        <p className="eyebrow">Beyond QA · A visual notebook</p>
        <h1>The things I notice when I step away from the screen.</h1>
        <p>
          A space for photographs, places and small moments I want to keep.
          Personal, simple and intentionally separate from the work portfolio.
        </p>
      </section>

      <section className="section-shell gallery-intro" aria-labelledby="gallery-title">
        <div>
          <p className="section-kicker">Photo journal</p>
          <h2 id="gallery-title">The gallery is ready for your photographs.</h2>
        </div>
        <p>
          These frames mark the final composition. Your chosen images will
          replace them, with short captions only where they add something.
        </p>
      </section>

      <section className="section-shell gallery-grid" aria-label="Photo gallery placeholders">
        {slots.map((slot, index) => (
          <figure className={`gallery-slot gallery-tone-${index + 1} ${slot.className}`} key={slot.id}>
            <div className="gallery-placeholder" aria-hidden="true">
              <span>{slot.id}</span>
              <i />
            </div>
            <figcaption>{slot.label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="section-shell gallery-note">
        <span>Next step</span>
        <p>
          Choose 6–12 photos you genuinely like. I&apos;ll crop and arrange them
          consistently, add an optional click-to-enlarge view and keep the page
          fast on mobile.
        </p>
      </section>
    </main>
  );
}
