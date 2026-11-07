import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projects } from "@/content/projects";
import { pick } from "@/lib/content";
import SectionLabel from "./SectionLabel";
import ProjectImage from "./ProjectImage";
import { ArrowRightIcon } from "./icons";

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1200px] px-5 py-14 sm:px-10 sm:py-20 lg:py-[104px]"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-5xl sm:leading-[1.08]">
            {t("title")}
          </h2>
        </div>
        <p className="max-w-[420px] text-[17px] text-muted">{t("intro")}</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {projects.map((project) => {
          const title = pick(project.title, locale);
          const href = `/projects/${project.slug}`;

          return (
            <article key={project.slug} className="flex min-w-0 flex-col gap-5">
              <Link href={href} aria-label={title} className="block">
                <ProjectImage
                  src={project.cover}
                  alt={title}
                  label={`${t("coverLabel")} · ${title}`}
                />
              </Link>

              <ul className="flex flex-wrap gap-2 text-sm font-medium">
                <li className="rounded-full bg-soft px-3 py-1">
                  {pick(project.type, locale)}
                </li>
                {project.tags.map((tag) => (
                  <li key={tag.pt} className="rounded-full bg-soft px-3 py-1">
                    {pick(tag, locale)}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.015em] sm:text-[30px]">
                {title}
              </h3>
              <p className="text-muted">{pick(project.summary, locale)}</p>

              <Link
                href={href}
                className="inline-flex min-h-11 items-center gap-2 self-start border-b-2 border-coral font-semibold hover:text-accent"
              >
                {t("read")}
                <ArrowRightIcon size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
