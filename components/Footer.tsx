import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type FooterProps = { variant?: "home" | "case" };

export default function Footer({ variant = "home" }: FooterProps) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-5 pb-12 pt-6 text-[15px] text-muted sm:px-10">
      <span>{t("copy", { year })}</span>
      {variant === "home" ? (
        <a href="#top" className="inline-flex min-h-11 items-center font-semibold text-ink hover:text-accent">
          {t("top")}
        </a>
      ) : (
        <Link
          href="/#contact"
          className="inline-flex min-h-11 items-center font-semibold text-ink hover:text-accent"
        >
          {t("talk")}
        </Link>
      )}
    </footer>
  );
}
