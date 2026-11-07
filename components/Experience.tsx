import { useTranslations } from "next-intl";
import SectionLabel from "./SectionLabel";

type Language = { name: string; level: string };

export default function Experience() {
  const t = useTranslations("experience");
  const chips = t.raw("chips") as string[];
  const languages = t.raw("languages") as Language[];

  return (
    <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
      <SectionLabel>{t("label")}</SectionLabel>
      <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
        {t("title")}
      </h2>

      <div className="flex flex-col gap-3 rounded-3xl border-[1.5px] border-line px-6 py-7 sm:px-8">
        <p className="text-sm font-medium text-muted">{t("place")}</p>
        <h3 className="font-display text-2xl font-bold">{t("name")}</h3>
        <p className="text-base text-muted">{t("text")}</p>
        <ul className="mt-2 flex flex-wrap gap-2 text-sm font-medium">
          {chips.map((chip) => (
            <li key={chip} className="rounded-full bg-coral px-3.5 py-1.5">
              {chip}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="min-w-[200px] flex-1 rounded-[20px] bg-soft px-6 py-5"
          >
            <p className="text-sm font-medium text-muted">{lang.name}</p>
            <p className="font-display text-2xl font-bold">{lang.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
