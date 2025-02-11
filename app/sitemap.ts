import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
    },
    {
      url: "https://yourdomain.com/projects/e-commerce",
      lastModified: new Date(),
    },
    {
      url: "https://yourdomain.com/projects/marketing",
      lastModified: new Date(),
    },
    {
      url: "https://yourdomain.com/projects/dashboard",
      lastModified: new Date(),
    },
  ]
}

