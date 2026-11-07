import type { LocalizedText, Project } from "./types";

/**
 * Gera um projeto de exemplo com todos os textos entre colchetes.
 * Para um projeto real, copie um dos arquivos projeto-0X.ts e troque os textos
 * (sem usar esta função) e os caminhos das imagens.
 */
export function mockProject(args: {
  slug: string;
  order: number;
  n: string;
  tags: LocalizedText[];
}): Project {
  const { slug, order, n, tags } = args;

  return {
    slug,
    order,
    tags,
    type: { pt: "[Tipo: app / site]", en: "[Type: app / site]" },
    title: {
      pt: `[Título do projeto ${n}]`,
      en: `[Project title ${n}]`,
    },
    summary: {
      pt: "[Uma frase sobre o problema que você quis resolver e para quem.]",
      en: "[One sentence about the problem you wanted to solve and for whom.]",
    },
    role: { pt: "UX / UI Designer", en: "UX / UI Designer" },
    duration: { pt: "[X semanas]", en: "[X weeks]" },
    tools: ["Figma"],
    context: {
      pt: "[De onde veio a ideia? Um produto real que te incomodou, um desafio de estudo, um briefing de curso? Conte em 3 ou 4 linhas.]",
      en: "[Where did the idea come from? A real product that bothered you, a study challenge, a course brief? Tell it in 3 or 4 lines.]",
    },
    problem: {
      pt: "[Como podemos ajudar (público) a conseguir (objetivo) sem (obstáculo)?]",
      en: "[How might we help (audience) achieve (goal) without (obstacle)?]",
    },
    research: {
      intro: {
        pt: "[Como você pesquisou: entrevistas, questionário, análise de concorrentes. Quantas pessoas, que perfil.]",
        en: "[How you researched: interviews, survey, competitor analysis. How many people, what profile.]",
      },
      findings: [
        {
          value: "[N]",
          text: {
            pt: "[Descoberta 1, em uma frase]",
            en: "[Finding 1, in one sentence]",
          },
        },
        {
          value: "[N]",
          text: {
            pt: "[Descoberta 2, em uma frase]",
            en: "[Finding 2, in one sentence]",
          },
        },
        {
          value: "[N]",
          text: {
            pt: "[Descoberta 3, em uma frase]",
            en: "[Finding 3, in one sentence]",
          },
        },
      ],
    },
    process: {
      intro: {
        pt: "[Mostre a evolução: arquitetura da informação, wireframes, decisões de interface e o que mudou ao longo do caminho.]",
        en: "[Show the evolution: information architecture, wireframes, interface decisions and what changed along the way.]",
      },
      images: [
        {
          kind: "wireframes",
          caption: { pt: "Baixa fidelidade", en: "Low fidelity" },
        },
        {
          kind: "ui",
          caption: { pt: "Interface", en: "Interface" },
        },
        {
          kind: "components",
          caption: { pt: "Design system", en: "Design system" },
        },
      ],
    },
    solution: {
      text: {
        pt: "[Explique 2 ou 3 decisões de design e o problema de cada uma que elas resolvem.]",
        en: "[Explain 2 or 3 design decisions and the problem each one solves.]",
      },
    },
    learnings: [
      {
        pt: "[Aprendizado 1: algo que você faria diferente]",
        en: "[Learning 1: something you would do differently]",
      },
      {
        pt: "[Aprendizado 2: o que o teste de usabilidade mostrou]",
        en: "[Learning 2: what the usability test showed]",
      },
      {
        pt: "[Aprendizado 3: próximo passo do projeto]",
        en: "[Learning 3: next step for the project]",
      },
    ],
  };
}
