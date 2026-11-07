import { useTranslations } from "next-intl";
import SectionLabel from "./SectionLabel";

type Entry = { period: string; title: string; school: string };

export default function Education() {
  const t = useTranslations("education");
  const entries = t.raw("entries") as Entry[];

  return (
    <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
      <SectionLabel>{t("label")}</SectionLabel>
      <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
        {t("title")}
      </h2>

      <ol className="flex flex-col">
        {entries.map((entry, i) => (
          <li
            key={entry.title}
            className={
              "flex gap-5 " + (i < entries.length - 1 ? "pb-8" : "")
            }
          >
            <span
              aria-hidden="true"
              className="mt-2 size-4 shrink-0 rounded-full border-2 border-ink bg-coral"
            />
            <div>
              <p className="text-sm font-medium text-muted">{entry.period}</p>
              <h3 className="my-1 font-display text-2xl font-bold">
                {entry.title}
              </h3>
              <p className="text-base text-muted">{entry.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
