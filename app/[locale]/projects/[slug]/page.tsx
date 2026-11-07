import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getProject, projects } from "@/content/projects";
import { pick } from "@/lib/content";
import CaseHeader from "@/components/CaseHeader";
import CaseStudy from "@/components/case-study/CaseStudy";
import Footer from "@/components/Footer";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${pick(project.title, locale)} · Lauana Segal`;
  const description = pick(project.summary, locale);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        pt: `/pt/projects/${slug}`,
        en: `/en/projects/${slug}`,
        "x-default": `/pt/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: locale === "en" ? "en_IE" : "pt_BR",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <CaseHeader />
      <main id="main">
        <CaseStudy project={project} locale={locale} />
      </main>
      <Footer variant="case" />
    </>
  );
}
