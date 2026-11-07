import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/Logo";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main
      id="main"
      className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-10 px-5 py-6 sm:px-10"
    >
      <header>
        <Logo />
      </header>
      <div className="flex flex-1 flex-col items-start justify-center gap-6 pb-24">
        <p className="font-display text-[72px] font-extrabold leading-none text-accent">
          404
        </p>
        <h1 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="text-lg text-muted">{t("text")}</p>
        <Link
          href="/"
          className="inline-flex min-h-[52px] items-center rounded-full bg-ink px-7 font-semibold text-white hover:bg-accent"
        >
          {t("back")}
        </Link>
      </div>
    </main>
  );
}
