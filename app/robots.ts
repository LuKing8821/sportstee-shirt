import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://yinshan-custom-t-shirts.chinayinshan.chatgpt.site/sitemap.xml" };
}
