import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";
import { ArrowLeftIcon } from "./icons";

/** Cabeçalho simplificado do estudo de caso: logo, voltar e idioma. */
export default function CaseHeader() {
  const t = useTranslations("caseStudy");

  return (
    <header className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10 sm:py-6">
      <Logo />
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-accent"
        >
          <ArrowLeftIcon size={16} />
          {t("back")}
        </Link>
        <LangSwitcher />
      </div>
    </header>
  );
}
