import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { cvPath } from "@/lib/site";
import { ArrowUpRightIcon, DownloadIcon } from "./icons";

type Fact = { title: string; text: string };

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const facts = t.raw("facts") as Fact[];
  const chips = t.raw("chips") as string[];

  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-5 pb-16 pt-6 sm:px-10 lg:pb-24 lg:pt-14"
    >
      <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
        <p className="inline-flex items-center gap-2.5 self-start rounded-full bg-soft px-4 py-2 text-[15px] font-medium">
          <span aria-hidden="true" className="block size-2.5 rounded-full bg-ink" />
          {t("pill")}
        </p>

        <h1 className="font-display text-[46px] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[64px] lg:text-[80px] lg:leading-[1.02]">
          {t.rich("title", {
            hl: (chunks) => (
              <span className="whitespace-nowrap rounded-xl bg-coral px-2 sm:px-3">
                {chunks}
              </span>
            ),
          })}
        </h1>

        <p className="max-w-[560px] text-lg text-muted sm:text-[21px] sm:leading-[1.55]">
          {t("text")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
          <a
            href="#projects"
            className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-ink px-7 text-[17px] font-semibold text-white hover:bg-accent"
          >
            {t("ctaProjects")}
            <ArrowUpRightIcon />
          </a>
          <a
            href={cvPath(locale)}
            download
            className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border-2 border-ink px-7 text-[17px] font-semibold hover:bg-ink hover:text-white"
          >
            <DownloadIcon />
            {t("ctaCv")}
          </a>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-3 border-t-[1.5px] border-line pt-5 text-[15px] text-muted">
          {facts.map((fact) => (
            <li key={fact.title}>
              <strong className="block text-[17px] font-semibold text-ink">
                {fact.title}
              </strong>
              {fact.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto min-w-0 max-w-[520px] flex-[1_1_400px] py-6 pr-6">
        <Image
          src="/images/lauana.webp"
          alt={t("photoAlt")}
          width={900}
          height={900}
          priority
          sizes="(min-width: 1024px) 480px, 90vw"
          className="block h-[360px] w-full rounded-[180px_180px_24px_24px] bg-stripe-a object-cover object-[50%_25%] sm:h-[560px] sm:rounded-[260px_260px_28px_28px]"
        />
        <span className="absolute -left-3 top-[70px] hidden -rotate-[5deg] rounded-md bg-coral px-[18px] py-3.5 text-[15px] font-semibold shadow-[0_8px_20px_rgba(42,13,18,0.12)] md:block">
          {chips[0]}
        </span>
        <span className="absolute right-0 top-[250px] hidden rotate-[3deg] rounded-[14px] border-2 border-ink bg-white px-[18px] py-3 text-[15px] font-semibold md:block">
          {chips[1]}
        </span>
        <span className="absolute bottom-[110px] left-2 hidden -rotate-2 rounded-[14px] bg-accent px-[18px] py-3 text-[15px] font-semibold text-white md:block">
          {chips[2]}
        </span>
      </div>
    </section>
  );
}
