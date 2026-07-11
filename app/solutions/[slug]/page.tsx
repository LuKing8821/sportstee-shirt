import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://yinshan-custom-t-shirts.chinayinshan.chatgpt.site";

const pages = {
  "custom-sports-team-t-shirts": {
    title: "Custom Sports Team T-Shirts for Clubs, Leagues & School Teams",
    description: "Design custom sports team T-shirts with performance fabric, player names and numbers, sponsor artwork, printing, sampling, bulk production, and international delivery.",
    h1: "Custom sports team T-shirts that look united and perform hard.",
    intro: "Yinshan manufactures custom sports T-shirts for clubs, schools, leagues, gyms, and tournament teams. We help turn team identity into a production-ready performance shirt with the right fabric, fit, artwork, and decoration.",
    note: "Best for match kits, training tees, player apparel, supporter shirts, club merchandise, and repeat teamwear programmes.",
    benefits: ["Quick-dry, breathable, and recycled fabric options", "All-over sublimation, numbers, names, and sponsor layouts", "Men’s, women’s, youth, and inclusive size planning", "Sampling, inspection, packing, and global shipping"],
    sections: [["Teamwear design support", "Send your club mark, colour palette, sponsor guidelines, or a rough sketch. Our designers prepare production-ready shirt artwork and confirm every panel, placement, and colour before sampling."], ["Fabric and decoration fit for sport", "We recommend performance knit, mesh, cotton-touch, or recycled materials according to the sport, climate, wash needs, and budget. Sublimation is ideal for durable full-shirt artwork; other print and embroidery methods can be layered in where appropriate."], ["A dependable repeat-order programme", "We keep approved specifications visible for future teamwear orders, helping clubs add players, refresh kits, or coordinate new season apparel with consistency."]],
    faqs: [["Can custom team T-shirts include player names and numbers?", "Yes. We can add names, numbers, sponsor logos, sleeve details, and team marks through sublimation, heat transfer, screen printing, embroidery, or labels."], ["Do you offer youth and adult team sizing?", "Yes. Team T-shirt orders can include youth, adult, women’s, and custom size charts in the same programme."], ["Which fabric is best for custom sports team T-shirts?", "Performance polyester is popular for quick-dry jerseys; our product team can recommend weight, knit, mesh zones, and recycled options based on the sport and climate."]],
  },
  "custom-event-t-shirts": {
    title: "Custom Event T-Shirts for Races, Conferences & Brand Activations",
    description: "Order custom event T-shirts for races, conferences, staff teams, participant packs, activations, and charity events with artwork, printing, packaging, and delivery planning.",
    h1: "Custom event T-shirts delivered for the date that matters.",
    intro: "Yinshan creates custom event T-shirts for participants, staff, sponsors, VIP guests, and retail moments. We coordinate the garment, event artwork, size run, packing, and delivery around your event schedule.",
    note: "Best for marathons, tournaments, conferences, brand launches, charity events, festivals, company off-sites, and sponsor activations.",
    benefits: ["Participant shirts, staff uniforms, and sponsor apparel", "Artwork designed around dates, locations, partners, and event systems", "Size-sorted cartons, individual bags, hangtags, and retail packs", "International shipment planning for single or multi-location events"],
    sections: [["Designed for the event system", "We set up artwork and garment specifications to carry sponsor marks, route graphics, event dates, participant identifiers, and limited-edition details without losing legibility on the finished shirt."], ["Start with the deadline", "By confirming the event date, delivery destination, and packaging format up front, our team can build sampling, production, inspection, and freight into a more dependable schedule."], ["Packed to make distribution easier", "T-shirts can be packed by size, volunteer group, registration wave, team, department, or retail requirement, helping organisers move faster at the final handoff."]],
    faqs: [["How early should we order custom event T-shirts?", "Start as early as possible so there is time for artwork approval, sampling, production, quality inspection, packing, and freight. Tell us the event date when you request a quote."], ["Can event shirts be packed by size or recipient group?", "Yes. We can plan carton sorting by size, team, department, volunteer group, VIP package, or other distribution needs."], ["Can you create a race shirt design from our event logo?", "Yes. Our design team can build a shirt artwork system from your event logo, sponsor list, event message, and reference imagery."]],
  },
  "private-label-t-shirts": {
    title: "Private Label T-Shirt Manufacturer for Sportswear & Activewear Brands",
    description: "Private label custom T-shirt manufacturing for sportswear, activewear, lifestyle, and merchandise brands. Develop fabric, fit, labels, artwork, packaging, and bulk production with Yinshan.",
    h1: "Private label T-shirts built around your brand’s product system.",
    intro: "Yinshan helps sportswear, activewear, lifestyle, and merchandise brands develop custom T-shirts from first direction through bulk production. Control the fabric, silhouette, brand applications, packaging, and repeat specifications.",
    note: "Best for sportswear brands, independent labels, gyms, studios, creator merchandise, capsule drops, and retail collaborations.",
    benefits: ["Custom neck labels, woven labels, hangtags, and packaging", "Performance, cotton, recycled, mesh, and blended fabric choices", "Sublimation, print, embroidery, patches, trims, and finishing", "Product sampling and consistent specifications for repeat production"],
    sections: [["Make your brief product-ready", "We help turn a creative direction into garment specifications: fabric composition and weight, fit, colour, print placement, labels, packaging, care information, and carton requirements."], ["Brand details beyond the front print", "Private label programmes can include neck labels, woven labels, hangtags, patches, inner prints, branded packaging, and retail-friendly presentation to make the finished T-shirt feel fully yours."], ["Designed for repeatability", "Once a T-shirt is approved, its key specifications can support more consistent future production, whether you are running a seasonal line, a teamwear collection, or a growing merchandise programme."]],
    faqs: [["Can Yinshan make private label T-shirts?", "Yes. We support private label T-shirts with custom fabric, fit, labels, hangtags, packaging, artwork, and decoration methods."], ["Can I choose recycled fabric for a private label T-shirt?", "Yes. Recycled polyester and other material options can be reviewed as part of the product planning stage."], ["Can you help with T-shirt packaging for retail?", "Yes. We can discuss branded hangtags, polybags, boxes, size stickers, carton marks, and other retail packing needs."]],
  },
  "promotional-t-shirts": {
    title: "Promotional T-Shirts & Custom Workwear for Events and Teams",
    description: "Custom promotional T-shirts and branded workwear for marketing campaigns, staff uniforms, brand activations, employee teams, and corporate events. Design, print, manufacture, and delivery from Yinshan.",
    h1: "Promotional T-shirts made to carry your message further.",
    intro: "Yinshan manufactures promotional T-shirts and branded workwear for campaigns, staff teams, launches, activations, and company events. We balance the look, comfort, budget, production schedule, and final distribution needs in one plan.",
    note: "Best for promotional campaigns, staff uniforms, product launches, retail activations, company events, employee gifts, and community merchandise.",
    benefits: ["Logo T-shirts, campaign artwork, uniforms, and activation merch", "Screen print, digital print, embroidery, heat transfer, and patches", "Fabric and fit options matched to campaign use and target budget", "Packaging, size sorting, and delivery for distributed teams or events"],
    sections: [["Campaign apparel with a clear job", "Whether the shirt is designed for one event day, a retail giveaway, a field team, or a long-term uniform, we help define the fabric, fit, graphic, and decoration choices that suit its purpose."], ["Brand consistency at scale", "We prepare decoration and garment specifications to help logo position, colours, artwork, and quality look consistent across bulk quantities and repeat campaigns."], ["Practical final-mile support", "From size planning and individual bags to gift boxes and team-sorted cartons, we plan the output around how the shirts will be handed out, stocked, or shipped."]],
    faqs: [["What decoration works best for promotional T-shirts?", "Screen print is a strong option for bold repeat logos; digital print supports detailed artwork; embroidery adds a premium detail; and heat transfer works well for names, numbers, and selected applications."], ["Can promotional T-shirts include staff names?", "Yes. Individual names, roles, team marks, and numbers can be included depending on the garment and decoration method."], ["Can you help choose an affordable promotional T-shirt fabric?", "Yes. Share the intended use, target quantity, budget, and preferred feel. Our team can recommend fabric and construction options that match the brief."]],
  },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = pages[params.slug as Slug] ?? pages["custom-sports-team-t-shirts"];
  return { title: `${page.title} | Yinshan Sportswear`, description: page.description, alternates: { canonical: `${baseUrl}/solutions/${params.slug}` }, openGraph: { title: page.title, description: page.description, url: `${baseUrl}/solutions/${params.slug}`, images: [{ url: "/og.png", width: 1200, height: 630 }] } };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug as Slug] ?? pages["custom-sports-team-t-shirts"];
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <main className="solution">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <nav className="solution-nav shell"><Link className="brand" href="/"><img src="/brand/yinshan-logo.png" alt="Yinshan Sportswear, since 1986" /></Link><Link className="outline-button" href="/#quote">Get a quote <span aria-hidden="true">↗</span></Link></nav>
    <section className="solution-hero shell"><div><p className="eyebrow">YINSHAN CUSTOM T-SHIRTS</p><h1>{page.h1}</h1><p>{page.intro}</p></div><aside><strong>Who this is for</strong><p>{page.note}</p></aside></section>
    <section className="solution-benefits"><div className="shell">{page.benefits.map((benefit) => <article key={benefit}>{benefit}</article>)}</div></section>
    <section className="solution-sections shell">{page.sections.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="solution-faq shell"><p className="eyebrow">CUSTOM T-SHIRT BUYER FAQ</p><h2>Questions this programme answers.</h2>{page.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <footer className="footer solution-footer shell"><a className="footer-brand" href="/"><img src="/brand/yinshan-logo.png" alt="Yinshan Sportswear" /></a><div><strong>Custom sportswear manufacturer</strong><p>Design, fabric, artwork, print, embroidery, manufacture, and delivery.</p></div><div><Link href="/#quote">Start a custom T-shirt project</Link><p>© {new Date().getFullYear()} Ningbo Yinshan Garments Factory</p></div></footer>
  </main>;
}
