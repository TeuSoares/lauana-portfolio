import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/site";

function entry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry(""),
    ...projects.map((project) => entry(`/projects/${project.slug}`)),
  ];
}
