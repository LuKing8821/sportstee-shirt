import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://yinshan-custom-t-shirts.chinayinshan.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Custom T-Shirt Factory & Manufacturer | Yinshan Sportswear",
  description: "Factory-direct custom T-shirt manufacturing for sports teams, races, events, brands, uniforms, and promotions. Yinshan supports design, fabric sourcing, artwork, printing, embroidery, packaging, production, QC, and global delivery.",
  keywords: ["custom t-shirt factory", "custom t-shirt manufacturer", "custom sports t-shirts", "custom team t-shirts", "custom event shirts", "sportswear factory China", "sublimation t-shirts", "private label t-shirts"],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Custom T-Shirt Factory for Teams, Events & Brands | Yinshan Sportswear",
    description: "Factory-direct custom T-shirt programmes with design, fabric, artwork, print, embroidery, manufacturing, packaging, QC, and delivery.",
    url: siteUrl,
    siteName: "Yinshan Sportswear",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yinshan Sportswear custom T-shirts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom T-Shirt Factory for Teams, Events & Brands | Yinshan Sportswear",
    description: "Factory-direct design, fabric, print, embroidery, manufacture, and delivery for custom T-shirts.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
