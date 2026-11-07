import { useTranslations } from "next-intl";
import SectionLabel from "./SectionLabel";
import { CheckIcon, ClockIcon, UserIcon } from "./icons";

type Card = { title: string; text: string };

const icons = [CheckIcon, UserIcon, ClockIcon];

export default function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const cards = t.raw("cards") as Card[];

  return (
    <section id="about" className="bg-soft">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-5 py-14 sm:px-10 sm:py-20 lg:py-[104px]">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-5xl sm:leading-[1.08]">
            {t("title")}
          </h2>
          {paragraphs.map((text) => (
            <p key={text} className="text-lg text-muted">
              {text}
            </p>
          ))}
        </div>

        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-4">
          {cards.map((card, i) => {
            const Icon = icons[i] ?? CheckIcon;
            return (
              <article
                key={card.title}
                className="flex items-start gap-5 rounded-3xl bg-white px-6 py-7 sm:px-8"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-coral text-ink"
                >
                  <Icon />
                </span>
                <div>
                  <h3 className="mb-1 font-display text-2xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-base text-muted">{card.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
