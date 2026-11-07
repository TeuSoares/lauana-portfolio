"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/** Troca PT/EN mantendo a mesma página (inclusive o slug do projeto). */
export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex rounded-full border-[1.5px] border-line p-[3px] text-sm font-semibold"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            className={
              "inline-flex min-h-9 min-w-11 items-center justify-center rounded-full px-3 " +
              (active ? "bg-ink text-white" : "text-muted hover:text-ink")
            }
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
