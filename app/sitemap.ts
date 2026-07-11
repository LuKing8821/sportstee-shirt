import type { MetadataRoute } from "next";

const baseUrl = "https://yinshan-custom-t-shirts.chinayinshan.chatgpt.site";
const solutionSlugs = ["custom-sports-team-t-shirts", "custom-event-t-shirts", "private-label-t-shirts", "promotional-t-shirts"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...solutionSlugs.map((slug) => ({ url: `${baseUrl}/solutions/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.86 })),
  ];
}
