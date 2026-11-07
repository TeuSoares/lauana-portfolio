export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const EMAIL = "lauanasegal0@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/lauana-segal-melo";

/** Caminho do currículo em PDF, por idioma. Troque os arquivos em public/cv/. */
export function cvPath(locale: string) {
  return `/cv/lauana-segal-cv-${locale === "en" ? "en" : "pt"}.pdf`;
}
