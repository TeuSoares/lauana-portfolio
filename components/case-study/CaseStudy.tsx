import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { Project } from "@/content/projects/types";
import { pick } from "@/lib/content";
import SectionLabel from "../SectionLabel";
import ProjectImage from "../ProjectImage";

type RowProps = { label: string; title: string; children: ReactNode };

/** Linha de seção: rótulo à esquerda, conteúdo à direita (empilha no mobile). */
function Row({ label, title, children }: RowProps) {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-6">
      <div className="flex-[1_1_220px]">
        <SectionLabel>{label}</SectionLabel>
      </div>
      <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
        <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

type CaseStudyProps = { project: Project; locale: string };

export default function CaseStudy({ project, locale }: CaseStudyProps) {
  const t = useTranslations("caseStudy");
  const title = pick(project.title, locale);

  const meta = [
    { label: t("role"), value: pick(project.role, locale) },
    { label: t("duration"), value: pick(project.duration, locale) },
    { label: t("tools"), value: project.tools.join(" · ") },
  ];

  return (
    <article>
      {/* Título */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-5 pb-12 pt-8 sm:px-10 sm:pt-12">
        <p className="self-start rounded-full bg-coral px-4 py-1.5 text-sm font-semibold">
          {t("tag")} · {pick(project.type, locale)}
        </p>
        <h1 className="max-w-[980px] font-display text-[40px] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[60px] lg:text-[76px] lg:leading-[1.02]">
          {title}
        </h1>
        <p className="max-w-[760px] text-xl text-muted sm:text-[22px]">
          {pick(project.summary, locale)}
        </p>
      </section>

      {/* Metadados (sem campo de equipe) */}
      <section className="mx-auto max-w-[1200px] px-5 pb-12 sm:px-10">
        <dl className="flex flex-wrap gap-x-14 gap-y-6 border-y-[1.5px] border-line py-7">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-sm font-semibold text-muted">{item.label}</dt>
              <dd className="mt-1 font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Mockup principal */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-10 lg:pb-24">
        <ProjectImage
          src={project.mockup}
          alt={title}
          label={t("placeholders.mockup")}
          aspect="aspect-[16/10] sm:aspect-[16/8]"
          radius="rounded-[32px]"
          sizes="(min-width: 1280px) 1120px, 100vw"
          priority
        />
      </section>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-5 pb-16 sm:px-10 lg:gap-[72px] lg:pb-24">
        {/* Contexto */}
        <Row label={t("context.label")} title={t("context.title")}>
          <p className="text-lg text-muted sm:text-[19px]">
            {pick(project.context, locale)}
          </p>
        </Row>

        {/* Problema */}
        <Row label={t("problem.label")} title={t("problem.title")}>
          <blockquote className="rounded-3xl bg-soft px-6 py-7 font-display text-2xl font-semibold leading-[1.25] tracking-[-0.01em] sm:px-8 sm:text-[28px]">
            {pick(project.problem, locale)}
          </blockquote>
        </Row>

        {/* Pesquisa */}
        <Row label={t("research.label")} title={t("research.title")}>
          <p className="text-lg text-muted sm:text-[19px]">
            {pick(project.research.intro, locale)}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.research.findings.map((finding) => (
              <div
                key={finding.text.pt}
                className="rounded-[20px] border-[1.5px] border-line p-6"
              >
                <p className="mb-2 font-display text-[44px] font-extrabold leading-none text-accent">
                  {finding.value}
                </p>
                <p className="text-base text-muted">
                  {pick(finding.text, locale)}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectImage
              src={project.research.persona}
              alt={`${title} · ${t("placeholders.persona")}`}
              label={t("placeholders.persona")}
              sizes="(min-width: 1024px) 400px, 100vw"
            />
            <ProjectImage
              src={project.research.journey}
              alt={`${title} · ${t("placeholders.journey")}`}
              label={t("placeholders.journey")}
              sizes="(min-width: 1024px) 400px, 100vw"
            />
          </div>
        </Row>

        {/* Processo */}
        <Row label={t("process.label")} title={t("process.title")}>
          <p className="text-lg text-muted sm:text-[19px]">
            {pick(project.process.intro, locale)}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.process.images.map((image) => (
              <figure key={image.kind} className="flex flex-col gap-2.5">
                <ProjectImage
                  src={image.src}
                  alt={`${title} · ${pick(image.caption, locale)}`}
                  label={t(`placeholders.${image.kind}`)}
                  aspect="aspect-[3/4]"
                  radius="rounded-[20px]"
                  sizes="(min-width: 1024px) 260px, 100vw"
                />
                <figcaption className="text-sm text-muted">
                  {pick(image.caption, locale)}
                </figcaption>
              </figure>
            ))}
          </div>
        </Row>

        {/* Solução */}
        <Row label={t("solution.label")} title={t("solution.title")}>
          <ProjectImage
            src={project.solution.image}
            alt={`${title} · ${t("solution.title")}`}
            label={t("placeholders.solution")}
            aspect="aspect-video"
            radius="rounded-[28px]"
            sizes="(min-width: 1024px) 800px, 100vw"
          />
          <p className="text-lg text-muted sm:text-[19px]">
            {pick(project.solution.text, locale)}
          </p>
        </Row>

        {/* Aprendizados */}
        <Row label={t("learnings.label")} title={t("learnings.title")}>
          <ul className="flex flex-col gap-3">
            {project.learnings.map((item) => (
              <li
                key={item.pt}
                className="flex items-start gap-3.5 rounded-[20px] bg-soft px-6 py-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-3 shrink-0 rounded-full border-2 border-ink bg-coral"
                />
                {pick(item, locale)}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </article>
  );
}
