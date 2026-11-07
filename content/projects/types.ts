export type LocalizedText = { pt: string; en: string };

export type ProcessImageKind = "wireframes" | "ui" | "components";

/**
 * Um projeto = um arquivo em content/projects/.
 * Os textos têm versão pt e en. As imagens são compartilhadas pelos dois idiomas
 * (ficam no idioma em que foram criadas) e ficam em public/images/projects/<slug>/.
 * Imagem ausente (src indefinido) mostra um espaço reservado listrado.
 */
export type Project = {
  slug: string;
  order: number;
  cover?: string; // /images/projects/<slug>/cover.webp
  tags: LocalizedText[]; // 2 a 3 tags
  type: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText; // 1 frase (card e topo do estudo de caso)
  role: LocalizedText;
  duration: LocalizedText;
  tools: string[];
  mockup?: string; // mockup principal do topo
  context: LocalizedText;
  problem: LocalizedText;
  research: {
    intro: LocalizedText;
    findings: { value: string; text: LocalizedText }[]; // 3 itens
    persona?: string;
    journey?: string;
  };
  process: {
    intro: LocalizedText;
    images: { src?: string; kind: ProcessImageKind; caption: LocalizedText }[]; // 3 itens
  };
  solution: { image?: string; text: LocalizedText };
  learnings: LocalizedText[]; // 3 itens
};
