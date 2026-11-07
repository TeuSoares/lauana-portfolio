import { useTranslations } from "next-intl";
import SectionLabel from "./SectionLabel";

type Group = { title: string; items: string[] };

export default function Skills() {
  const t = useTranslations("skills");
  const groups = t.raw("groups") as Group[];

  return (
    <section id="skills" className="bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-10 sm:py-20 lg:py-[104px]">
        <div className="mb-12 flex max-w-[760px] flex-col gap-4">
          <SectionLabel tone="coral">{t("label")}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-5xl sm:leading-[1.08]">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {groups.map((group, i) => (
            <article
              key={group.title}
              className="flex min-w-0 flex-col gap-3 border-t-2 border-coral pt-5"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] font-extrabold leading-none text-coral"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-bold">{group.title}</h3>
              <ul className="list-disc space-y-1 pl-[18px] text-base text-on-dark">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
