import type { LocalizedText } from "@/content/projects/types";

/** Escolhe a versão do texto no idioma atual (padrão: português). */
export function pick(text: LocalizedText, locale: string): string {
  return locale === "en" ? text.en : text.pt;
}
