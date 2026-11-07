"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import { CloseIcon, MenuIcon } from "./icons";

const items = ["about", "projects", "skills", "education"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto max-w-[1200px] px-5 py-4 sm:px-10 sm:py-6">
      <div className="flex items-center justify-between gap-4">
        <Logo />

        <nav
          aria-label={t("main")}
          className="hidden items-center gap-x-8 lg:flex"
        >
          {items.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="py-2.5 font-medium hover:text-accent"
            >
              {t(key)}
            </a>
          ))}
          <LangSwitcher />
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 font-semibold text-white hover:bg-ink"
          >
            {t("cta")}
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((v) => !v)}
          className="flex size-12 items-center justify-center rounded-full border-[1.5px] border-line bg-white lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={t("main")}
          className="mt-3 flex flex-col gap-1 rounded-3xl bg-soft p-5 lg:hidden"
        >
          {items.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center text-lg font-medium"
            >
              {t(key)}
            </a>
          ))}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <LangSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-semibold text-white"
            >
              {t("cta")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
