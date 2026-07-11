"use client";

import { FormEvent, useMemo, useState } from "react";

const options = {
  Scenario: ["Sports team", "Race event", "Brand drop", "Corporate campaign"],
  Fabric: ["Quick-dry performance", "Cotton jersey", "Recycled polyester", "Cotton blend"],
  Artwork: ["All-over sublimation", "Logo chest print", "Sponsor layout", "Names & numbers"],
  Finish: ["Custom neck label", "Woven patch", "Embroidery detail", "Retail packaging"],
} as const;

const faqs = [
  [
    "What is the minimum order quantity for custom T-shirts?",
    "Yinshan helps brands, teams, and events plan the right production quantity. MOQ depends on fabric, decoration method, sizing, and packaging requirements, so our product team confirms it with your brief.",
  ],
  [
    "Can you make the artwork for our custom T-shirts?",
    "Yes. Our design team can develop apparel artwork from a logo, rough idea, reference image, or existing brand system. We prepare production-ready files and confirm placement before sampling.",
  ],
  [
    "Which printing method is best for sports T-shirts?",
    "For full-color team jerseys, all-over sublimation is a durable choice. Screen print suits bold, repeat graphics; heat transfer handles names and numbers; embroidery works well for premium logo details. We recommend the right method after reviewing the fabric and use case.",
  ],
  [
    "Can Yinshan ship custom event shirts internationally?",
    "Yes. We coordinate packing and delivery for teams, events, and brands worldwide, with air, ocean, rail, express, DDP, and FOB options available according to the shipment plan.",
  ],
] as const;

const stats = [
  ["1986", "Established in Ningbo, China"],
  ["4", "Design studios"],
  ["5", "Manufacturing factories"],
  ["25", "Production lines"],
];

const contactEmail = "Evan.qiu@chinayinshan.com";
const whatsappUrl = "https://wa.me/8613777004477";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Ningbo Yinshan Garments Factory",
      alternateName: "Ningbo Ever-Echo Trading Co., Ltd",
      url: "https://www.customisedsportswear.com",
      logo: "https://www.customisedsportswear.com/brand/yinshan-logo.png",
      foundingDate: "1986",
      description:
        "Yinshan Sportswear is a custom sportswear factory in Ningbo, China, offering design, fabric sourcing, artwork development, printing, embroidery, garment manufacturing, quality inspection, packaging, and global delivery.",
      email: contactEmail,
      telephone: "+86-137-7700-4477",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ningbo",
        addressRegion: "Zhejiang",
        addressCountry: "CN",
      },
      sameAs: [whatsappUrl],
    },
    {
      "@type": "Product",
      name: "Custom T-Shirts",
      brand: { "@type": "Brand", name: "Yinshan Sportswear" },
      description:
        "Factory-made custom T-shirt programmes for sports teams, races, events, staff uniforms, retail brands, and promotional campaigns, with scenario-based fabric, artwork, decoration, packaging, and delivery options.",
      manufacturer: { "@type": "Organization", name: "Yinshan Sportswear" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  const [selected, setSelected] = useState<Record<keyof typeof options, number>>({
    Scenario: 0,
    Fabric: 0,
    Artwork: 0,
    Finish: 0,
  });
  const [sent, setSent] = useState(false);
  const brief = useMemo(
    () =>
      Object.entries(options)
        .map(([label, values]) => `${label}: ${values[selected[label as keyof typeof options]]}`)
        .join(" | "),
    [selected],
  );

  function requestQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Custom T-Shirt enquiry from ${form.get("company")}`);
    const body = encodeURIComponent(
      `Company / brand: ${form.get("company")}\nEmail: ${form.get("email")}\nQuantity: ${form.get("quantity")}\n\nCustom direction:\n${brief}\n\nProject notes:\n${form.get("notes")}`,
    );
    setSent(true);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Yinshan Sportswear home">
            <img src="/brand/yinshan-logo.png" alt="Yinshan Sportswear, since 1986" />
          </a>
          <div className="nav-links">
            <a href="#custom">Custom T-shirts</a>
            <a href="#capability">Capabilities</a>
            <a href="#process">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="outline-button" href="#quote">Get a quote <span aria-hidden="true">↗</span></a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">CUSTOM SPORTSWEAR MANUFACTURER SINCE 1986</p>
            <h1>Custom T-Shirt factory for teams, events, and brands.</h1>
            <p className="hero-lead">
              Yinshan is not a trading desk. We are a sportswear factory group with in-house design, fabric sourcing, artwork development, printing, embroidery, production, inspection, packaging, and global delivery.
            </p>
            <div className="hero-actions">
              <a className="button button-coral" href="#quote">Start your T-shirt brief <span aria-hidden="true">↓</span></a>
              <a className="quiet-link" href="#capability">Explore our capabilities <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-notes" aria-label="Custom T-shirt capabilities">
              <span>FACTORY DIRECT</span><i /> <span>SCENARIO-BASED CUSTOM</span><i /> <span>PRINT & EMBROIDERY</span>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/custom-t-shirts-usage-hero.png" alt="Custom T-shirts used for events, teams, promotions, and college groups" />
            <div className="image-label label-top"><span>01</span><strong>FACTORY MADE</strong><small>DESIGN TO DELIVERY</small></div>
            <div className="image-label label-bottom"><span>YINSHAN</span><strong>5 FACTORIES</strong><small>NINGBO, CHINA</small></div>
            <div className="hero-scenarios" aria-label="Custom T-shirt use scenarios">
              <article><strong>Event shirts</strong><span>Race packs / volunteers / staff crews</span></article>
              <article><strong>Team use</strong><span>Clubs / training / match-day kits</span></article>
              <article><strong>Promotion</strong><span>Brand activations / gifts / uniforms</span></article>
              <article><strong>College teams</strong><span>Campus clubs / school teams / events</span></article>
            </div>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true"><span>CUSTOM T-SHIRTS</span><b>◆</b><span>TEAMWEAR</span><b>◆</b><span>EVENT APPAREL</span><b>◆</b><span>PRINT, STITCH, DELIVER</span></div>
      </section>

      <section className="intro shell">
        <div className="intro-copy">
          <p className="eyebrow">ONE PARTNER, EVERY PRODUCTION STEP</p>
          <h2>Manufacturing control is the real advantage.</h2>
          <p>Custom T-shirts only work when design, material, decoration, sizing, quality, and delivery are managed together. Because we are the factory, we can connect each decision to real production conditions instead of handing your brief from supplier to supplier.</p>
          <p>Bring a logo, a moodboard, a hand sketch, or just an occasion. We translate it into fabric direction, pattern and fit notes, production artwork, print or embroidery method, packing plan, and delivery schedule.</p>
          <a className="arrow-link" href="#custom">Build a custom specification <span aria-hidden="true">↘</span></a>
        </div>
        <div className="factory-carousel" aria-label="Factory and workshop carousel">
          <img src="/factory-workshop-carousel.png" alt="Inside Yinshan custom sportswear factory and sewing workshop" />
          <div className="carousel-caption">
            <span>Factory floor</span>
            <strong>Workshop / QC / Production line</strong>
          </div>
          <div className="carousel-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        </div>
      </section>

      <section className="factory-advantage">
        <div className="shell factory-layout">
          <div>
            <p className="eyebrow">WHY FACTORY DIRECT MATTERS</p>
            <h2>One factory partner, fewer gaps between idea and finished shirt.</h2>
          </div>
          <div className="factory-grid">
            <article><span>01</span><h3>Design becomes production artwork</h3><p>Our artwork team prepares print-ready files, colour matching notes, placement guides, sponsor layouts, and approval views before sampling.</p></article>
            <article><span>02</span><h3>Fabric advice is tied to cost and use</h3><p>We compare hand feel, weight, breathability, stretch, recycled options, wash performance, and target price before recommending the fabric.</p></article>
            <article><span>03</span><h3>Printing and embroidery are coordinated</h3><p>Sublimation, screen print, heat transfer, digital print, embroidery, patches, woven labels, and packaging are planned as one garment system.</p></article>
            <article><span>04</span><h3>Bulk production stays visible</h3><p>Sampling, size run, production line planning, inspection, packing, carton marks, and shipping are managed by one accountable manufacturing team.</p></article>
          </div>
        </div>
      </section>

      <section className="programs" aria-label="Custom T-shirt programs">
        <div className="shell section-heading">
          <div><p className="eyebrow">SCENARIO-BASED CUSTOM T-SHIRTS</p><h2>Start with the scene. We build the product around it.</h2></div>
          <p>A team shirt, race finisher shirt, staff uniform, and retail drop should not use the same product logic. We shape fabric, fit, artwork, decoration, packaging, and delivery around the real use case.</p>
        </div>
        <div className="shell program-grid">
          <article className="program-card card-green"><span>01</span><h3>Sports teamwear</h3><p>Quick-dry training tees, club shirts, player names, numbers, sponsor marks, breathable mesh, and repeat season ordering.</p><small>Best for clubs, schools, tournaments, gyms</small><a href="/solutions/custom-sports-team-t-shirts">Explore team T-shirts <b>→</b></a></article>
          <article className="program-card card-paper"><span>02</span><h3>Race & event shirts</h3><p>Finisher shirts, staff tees, volunteer uniforms, sponsor artwork, date/location graphics, size-sorted packs, and deadline delivery.</p><small>Best for marathons, races, conferences, festivals</small><a href="/solutions/custom-event-t-shirts">Explore event T-shirts <b>→</b></a></article>
          <article className="program-card card-pink"><span>03</span><h3>Private label T-shirts</h3><p>Brand fit, neck labels, woven labels, hangtags, retail packaging, seasonal colours, and repeatable factory specifications.</p><small>Best for sportswear brands, gyms, creators, retail</small><a href="/solutions/private-label-t-shirts">Explore private label <b>→</b></a></article>
          <article className="program-card card-ink"><span>04</span><h3>Promo & workwear</h3><p>Company T-shirts, campaign merch, staff uniforms, activation apparel, onboarding gifts, and practical bulk production.</p><small>Best for companies, agencies, communities</small><a href="/solutions/promotional-t-shirts">Explore promotional T-shirts <b>→</b></a></article>
        </div>
      </section>

      <section className="scenario-matrix shell" aria-label="Custom T-shirt scenario examples">
        <div>
          <p className="eyebrow">PRODUCT CUSTOMIZATION BY SCENE</p>
          <h2>Every scenario changes the product decisions.</h2>
        </div>
        <div className="matrix-table">
          <article><strong>Training and match day</strong><span>Lightweight performance knit, mesh zones, sublimation artwork, names, numbers, sponsor logos, and youth/adult size runs.</span></article>
          <article><strong>Race and event day</strong><span>Comfort-first fabric, event graphics, sponsor placement, date and route details, size-sorted cartons, and delivery by event schedule.</span></article>
          <article><strong>Brand and retail drop</strong><span>Custom fit, premium cotton or recycled blends, labels, hangtags, packaging, colour consistency, and repeat production specs.</span></article>
          <article><strong>Corporate and promotion</strong><span>Budget-aware fabric, logo print, staff names, campaign colours, gift packaging, team sorting, and multi-location shipping.</span></article>
        </div>
      </section>

      <section className="customizer shell" id="custom">
        <div className="customizer-copy">
          <p className="eyebrow">PLAN YOUR CUSTOM T-SHIRT</p>
          <h2>Choose the scene. We’ll engineer the garment.</h2>
          <p>Use this as a brief starter. The scenario tells our factory what the shirt must do: perform, promote, commemorate, sell, uniform, or gift.</p>
          <div className="customizer-pill">Your current brief <strong>{brief}</strong></div>
        </div>
        <div className="customizer-options">
          {Object.entries(options).map(([label, values], index) => {
            const key = label as keyof typeof options;
            return <div className="choice-row" key={label}>
              <div><span>0{index + 1}</span><h3>{label}</h3></div>
              <div className="choice-buttons">
                {values.map((value, optionIndex) => <button key={value} type="button" onClick={() => setSelected((current) => ({ ...current, [key]: optionIndex }))} className={selected[key] === optionIndex ? "is-selected" : ""}>{value}</button>)}
              </div>
            </div>;
          })}
        </div>
      </section>

      <section className="capability" id="capability">
        <div className="shell capability-layout">
          <div className="capability-title"><p className="eyebrow">THE YINSHAN DIFFERENCE</p><h2>Factory capability behind every custom detail.</h2></div>
          <div className="capability-list">
            <article><span>01</span><div><h3>Factory-owned development</h3><p>Designers, merchandisers, fabric sourcing, sample coordination, and production teams work from the same brief.</p></div></article>
            <article><span>02</span><div><h3>Material and trim sourcing</h3><p>We source and compare fabrics, rib, labels, patches, hangtags, packaging, and accessories according to performance, look, and budget.</p></div></article>
            <article><span>03</span><div><h3>Decoration process control</h3><p>Print, sublimation, embroidery, heat transfer, patches, woven labels, and finishing details are matched to the fabric and order quantity.</p></div></article>
            <article><span>04</span><div><h3>Production and QC discipline</h3><p>Approved samples, bulk planning, in-line checks, final inspection, carton sorting, and shipment preparation keep the order controlled.</p></div></article>
          </div>
        </div>
      </section>

      <section className="stats shell" aria-label="Yinshan Sportswear at a glance">
        <div><p className="eyebrow">YINSHAN AT A GLANCE</p><h2>Custom sportswear is all we do.</h2></div>
        <div className="stat-grid">{stats.map(([number, label]) => <article key={number}><strong>{number}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <p className="eyebrow">HOW CUSTOM T-SHIRT MANUFACTURING WORKS</p>
          <div className="process-heading"><h2>A clear route from brief to bulk production.</h2><p>Our product and production teams keep the key decisions visible: design, material, sample approval, quality, and delivery.</p></div>
          <div className="process-grid">
            <article><span>01</span><h3>Share the brief</h3><p>Tell us who will wear it, when it is needed, and what you want it to communicate.</p></article>
            <article><span>02</span><h3>Develop & sample</h3><p>We confirm fabric, fit, artwork, and decoration, then make a sample for approval.</p></article>
            <article><span>03</span><h3>Produce & inspect</h3><p>Production is coordinated with in-line quality checks and final garment inspection.</p></article>
            <article><span>04</span><h3>Pack & deliver</h3><p>We prepare the right packing, carton sorting, and shipment plan for the destination.</p></article>
          </div>
        </div>
      </section>

      <section className="proof shell">
        <p className="eyebrow">EVENT & SPORTSWEAR EXPERIENCE</p>
        <div><h2>For the programmes people train for, travel for, and remember.</h2><p>Yinshan’s custom sportswear experience spans teamwear, race apparel, promotional events, activewear, uniforms, and projects for major motorsport and endurance events.</p></div>
        <p className="proof-note">F1 · Formula E · MotoGP · NASCAR · Boston Marathon</p>
      </section>

      <section className="faq shell" id="faq">
        <div><p className="eyebrow">CUSTOM T-SHIRT FAQ</p><h2>Answers buyers can act on.</h2><p>Clear details help customers, search engines, and AI assistants understand how your custom T-shirt project can move forward.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="quote" id="quote">
        <div className="shell quote-grid">
          <div>
            <p className="eyebrow">START YOUR CUSTOM T-SHIRT PROJECT</p>
            <h2>Ready when your idea is.</h2>
            <p>Send your starting point. A Yinshan product specialist will review your custom T-shirt brief and reply within one business day.</p>
            <div className="company-card" aria-label="Company information">
              <strong>Company Name</strong>
              <span>Ningbo Yinshan Garments Factory</span>
              <span>Ningbo Ever-Echo Trading Co., Ltd</span>
              <strong>Address</strong>
              <span>Ningbo, China</span>
            </div>
            <div className="quote-contact">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <a href="tel:+8613777004477">+86 137 7700 4477</a>
              <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <form onSubmit={requestQuote}>
            <label>Company or brand<input required name="company" placeholder="Your brand or event" /></label>
            <label>Work email<input required type="email" name="email" placeholder="name@company.com" /></label>
            <label>Estimated quantity<select name="quantity" defaultValue="500 - 1,000"><option>Under 500</option><option>500 - 1,000</option><option>1,000 - 5,000</option><option>5,000+</option></select></label>
            <label>Project notes<textarea name="notes" rows={4} placeholder="Event date, use case, required details, or links to your artwork" /></label>
            <button className="button button-coral" type="submit">{sent ? "Email brief prepared" : "Email my project brief"} <span aria-hidden="true">↗</span></button>
            <small>Submitting prepares an email to our team with your selected T-shirt specifications.</small>
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <a className="footer-brand" href="#top"><img src="/brand/yinshan-logo.png" alt="Yinshan Sportswear" /></a>
        <div><strong>Ningbo Yinshan Garments Factory</strong><p>Ningbo Ever-Echo Trading Co., Ltd</p><p>Address: Ningbo, China</p></div>
        <div><a href="https://www.customisedsportswear.com" target="_blank" rel="noreferrer">customisedsportswear.com</a><p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p><p><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +86 137 7700 4477</a></p><p>© {new Date().getFullYear()} Ningbo Yinshan Garments Factory</p></div>
      </footer>
    </main>
  );
}
