import { useLocale, useTranslations } from "next-intl";
import { cvPath, EMAIL, LINKEDIN } from "@/lib/site";
import SectionLabel from "./SectionLabel";
import { ArrowUpRightIcon, DownloadIcon, MailIcon } from "./icons";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const outline =
    "inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border-2 border-white px-7 text-lg font-semibold hover:bg-white hover:text-ink";

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-10 lg:pb-24"
    >
      <div className="flex flex-col gap-7 rounded-[28px] bg-ink px-6 py-10 text-white sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <SectionLabel tone="coral">{t("label")}</SectionLabel>
        <h2 className="font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[60px] lg:text-[72px]">
          {t.rich("title", {
            hl: (chunks) => (
              <span className="rounded-xl bg-accent px-2 text-white sm:px-3">
                {chunks}
              </span>
            ),
          })}
        </h2>
        <p className="max-w-[620px] text-lg text-on-dark sm:text-xl">
          {t("text")}
        </p>

        <div className="mt-2 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-accent px-7 text-base font-semibold text-white hover:bg-white hover:text-ink sm:text-lg"
          >
            <MailIcon size={20} />
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={outline}
          >
            {t("linkedin")}
            <ArrowUpRightIcon />
          </a>
          <a href={cvPath(locale)} download className={outline}>
            <DownloadIcon />
            {t("cv")}
          </a>
        </div>
      </div>
    </section>
  );
}
