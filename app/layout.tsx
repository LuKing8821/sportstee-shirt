import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://yinshan-custom-t-shirts.chinayinshan.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Custom Sports T Shirt Manufacturer | Team & Event Shirts Supplier",
  description: "Yinshan is a custom sports T shirt manufacturer producing team sports T shirts, sports event T shirts, private label sports T shirts, and OEM sports T shirt programmes with full customization, printing, QC, and global delivery.",
  keywords: ["custom sports t shirt manufacturer", "custom sports t shirts", "team sports t shirts", "sports event t shirts", "custom logo sports shirts", "private label sports t shirts", "OEM sports t shirt manufacturer", "sportswear manufacturer"],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Custom Sports T Shirt Manufacturer | Yinshan Sportswear",
    description: "Factory-direct custom sports T shirt programmes with design, fabric, artwork, print, embroidery, manufacturing, packaging, QC, and delivery.",
    url: siteUrl,
    siteName: "Yinshan Sportswear",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yinshan Sportswear custom T-shirts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Sports T Shirt Manufacturer | Yinshan Sportswear",
    description: "Factory-direct design, fabric, print, embroidery, manufacture, and delivery for custom sports T shirts.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
