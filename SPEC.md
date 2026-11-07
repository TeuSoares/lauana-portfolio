# SPEC — Portfólio de Lauana Segal (UX Designer)

Leia este arquivo inteiro antes de escrever código. Ele descreve o site completo: stack, estrutura, design, textos em português e em inglês, dados mockados e etapas de trabalho.

## 0. Como trabalhar

- Trabalhe por **etapas** (seção 9). Ao fim de cada uma: rode `npm run lint` e `npm run build`, faça um commit com mensagem clara e **pare** para eu revisar.
- Use **npm**. Não instale dependências fora da lista da seção 1 sem perguntar.
- **Nunca** faça `git push` nem mexa na branch principal. Crie a branch `feat/portfolio` e trabalhe nela.
- Nenhum texto fixo dentro de componente. Todo texto visível vem dos arquivos de tradução (seção 3) ou dos arquivos de projeto (seção 4).
- Dados que ainda não existem ficam **mockados** (seção 7), sempre entre colchetes, como `[Nome da instituição]`.
- O design de referência é o que está descrito aqui (seções 5 e 6). Siga as medidas e cores literalmente.

## 1. Stack

| Tema | Decisão |
|---|---|
| Framework | Next.js (App Router) com TypeScript |
| Estilo | Tailwind CSS. Cores e fontes como tokens no tema (seção 5) |
| Fontes | `next/font/google`: Bricolage Grotesque (600, 700, 800) e DM Sans (400, 500, 600) |
| i18n | `next-intl`, rotas `/pt` e `/en`. Padrão `pt`. Redireciona `/` pelo `Accept-Language`, com fallback `pt` |
| Imagens | `next/image` |
| Deploy | Vercel (fora do escopo desta etapa; só deixar o projeto pronto para isso) |

Sem banco de dados, sem CMS, sem formulário de contato.

## 2. Rotas

- `/[locale]` — home
- `/[locale]/projects/[slug]` — estudo de caso
- `/[locale]/projects` não existe. O link "Todos os projetos" leva a `/[locale]#projects`.
- `sitemap.xml`, `robots.txt`, `not-found` traduzido, `generateStaticParams` para `pt` e `en` e para todos os slugs.
- O seletor PT/EN troca o idioma **mantendo a mesma página** (inclusive o slug do projeto).

## 3. Traduções

- `messages/pt.json` e `messages/en.json`, com a mesma estrutura de chaves, agrupadas por seção (`nav`, `hero`, `about`, `projects`, `skills`, `experience`, `education`, `contact`, `footer`, `caseStudy`, `meta`).
- Todos os textos estão na seção 6, em PT e EN.
- Metadados por idioma (`generateMetadata`): título, descrição, `alternates.languages` (hreflang) e Open Graph.
  - PT: título `Lauana Segal · UX Designer`; descrição `Portfólio de Lauana Segal, UX Designer. Pesquisa, wireframes e protótipos.`
  - EN: título `Lauana Segal · UX Designer`; descrição `Portfolio of Lauana Segal, UX Designer. Research, wireframes and prototypes.`

## 4. Projetos (conteúdo)

- Um arquivo por projeto: `content/projects/<slug>.ts`, tipado por `content/projects/types.ts`.
- **Textos têm versão `pt` e `en`. Imagens são compartilhadas** (mesmos arquivos nos dois idiomas, no idioma em que foram criadas; nunca criar versão traduzida de imagem).
- Formato:

```ts
export type LocalizedText = { pt: string; en: string };

export type Project = {
  slug: string;
  order: number;
  cover: string;               // /images/projects/<slug>/cover.webp
  tags: LocalizedText[];       // 2 a 3 tags
  type: LocalizedText;         // ex.: app, site
  title: LocalizedText;
  summary: LocalizedText;      // 1 frase (usada no card e no topo do estudo de caso)
  role: LocalizedText;
  duration: LocalizedText;
  tools: string[];
  context: LocalizedText;
  problem: LocalizedText;      // enunciado "Como podemos..."
  research: {
    intro: LocalizedText;
    findings: { value: string; text: LocalizedText }[]; // 3 itens
    persona?: string;          // caminho da imagem
    journey?: string;          // caminho da imagem
  };
  process: {
    intro: LocalizedText;
    images: { src: string; caption: LocalizedText }[]; // 3 itens
  };
  solution: { image: string; text: LocalizedText };
  learnings: LocalizedText[];  // 3 itens
};
```

- `content/projects/index.ts` exporta a lista ordenada por `order`.
- Imagens ausentes: o componente `ImagePlaceholder` mostra uma caixa listrada (seção 5) com o rótulo `[ ... ]`. Quando o arquivo existir em `public/`, o `next/image` o usa no lugar.

## 5. Design

### 5.1 Tokens de cor

| Token | Valor | Uso |
|---|---|---|
| `accent` | `#C4182C` | cor principal: botões, rótulos de seção, bloco de contato, logo |
| `coral` | `#FFB4AC` | marca-texto, chips, números sobre fundo escuro |
| `ink` | `#4B1026` | texto principal e fundo escuro |
| `muted` | `#6E4E5A` | texto secundário |
| `soft` | `#FBEFEE` | fundos claros de seção e chips |
| `line` | `#F0DCDA` | bordas e divisórias |
| `stripe-a` / `stripe-b` | `#F6E1DF` / `#FCF1F0` | listras dos placeholders de imagem |
| `dashed` | `#E3B8B3` | bordas tracejadas |
| `on-dark` | `#ECD3DA` | texto sobre fundo `ink` |
| `on-accent` | `#FFE9E6` | texto de parágrafo sobre `accent` |
| `white` | `#FFFFFF` | fundo da página |

Alternativas de vermelho para teste (trocar só `accent`): `#9F1239`, `#DC2626`, `#7F1D1D`. Garanta contraste mínimo de 4.5:1 em texto.

### 5.2 Tipografia

- Títulos e números: Bricolage Grotesque. Corpo: DM Sans, 17px, `line-height` 1.6.
- `h1`: 80px desktop / 46px mobile, peso 800, `letter-spacing` -0.035em, `line-height` 1.02.
- `h2`: 48px desktop / 32px mobile, peso 700, `letter-spacing` -0.025em, `line-height` 1.08.
- Rótulo de seção (ex.: `01 · Sobre`): 14px, peso 600, caixa alta, `letter-spacing` 0.1em, cor `accent`.
- Marca-texto: trecho com fundo `coral`, `padding` 0 12px, `border-radius` 12px.

### 5.3 Layout

- Container: `max-width` 1200px, centralizado, `padding` horizontal 40px (20px no mobile).
- Seções com `padding` vertical de 104px (56px no mobile).
- Botões: formato pílula, altura mínima 52px (44px no mínimo em qualquer toque), peso 600.
- Cantos: cards 24px, blocos grandes 32–40px.
- Alvos de toque de pelo menos 44px. `focus-visible` com contorno de 3px em `ink`.

### 5.4 Logo

Monograma "LS" ao lado do nome: quadrado 38px (34px no mobile), `border-radius` 12px, fundo `accent`, letras brancas em Bricolage 800, 17px. Nome "Lauana Segal" em Bricolage 700, 22px. O monograma é decorativo (`aria-hidden`). O favicon pode ser o mesmo monograma em SVG.

### 5.5 Placeholder de imagem

`background: repeating-linear-gradient(135deg, stripe-a 0 16px, stripe-b 16px 32px)`, texto central em `muted`, 15px, peso 500, `role="img"` com `aria-label` descritivo.

### 5.6 Estrutura da home (ordem)

1. **Header**: logo, links (Sobre, Projetos, Habilidades, Formação), seletor PT/EN, botão "Vamos conversar" (`accent`, texto branco).
2. **Hero**: duas colunas (texto à esquerda, foto à direita; empilha no mobile).
   - Pílula de disponibilidade (fundo `soft`, bolinha `ink`).
   - `h1` com "UX Designer" em marca-texto.
   - Parágrafo de 21px em `muted`.
   - Dois botões: "Ver projetos" (fundo `ink`, texto branco, seta) e "Baixar CV" (contorno 2px `ink`, ícone de download).
   - Linha de 3 fatos, separada por borda superior `line`.
   - Foto `/images/lauana.webp` em arco: `border-radius` 260px 260px 28px 28px, 560px de altura (mobile: 360px e raio 180px 180px 24px 24px), `object-fit: cover`, `object-position: 50% 25%`.
   - 3 etiquetas flutuantes sobre a foto, levemente giradas: "Pesquisa com usuários" (fundo `coral`, -5°), "Wireframes" (fundo branco, borda 2px `ink`, +3°), "Protótipo no Figma" (fundo `accent`, texto branco, -2°). No mobile, as etiquetas são ocultadas.
3. **Sobre** (fundo `soft`): coluna de texto (rótulo, `h2`, 3 parágrafos) e coluna com 3 cards brancos (ícone em quadrado `coral`, título, descrição).
4. **Projetos**: cabeçalho (rótulo, `h2`, texto de apoio à direita) e 3 cards lado a lado (empilham no mobile). Card: capa 4:3 com cantos de 24px, tags em pílulas `soft`, título de 30px, resumo, link "Ler estudo de caso" com sublinhado `coral`.
5. **Habilidades** (fundo `ink`, texto branco): `h2` e 5 colunas numeradas (`01`–`05`, em `coral`, 40px), borda superior 2px `coral`, listas em `on-dark`.
6. **Vivência e Formação** (duas colunas): à esquerda, cartão de intercâmbio com chips `coral` e dois cards de idioma (`soft`); à direita, linha do tempo com 2 entradas.
7. **Contato**: bloco `accent` com cantos de 40px, `h2` de 72px com "conversar" em marca-texto, parágrafo em `on-accent`, botão de e-mail (`coral`, texto `ink`), botão LinkedIn e botão Baixar CV (contorno branco).
8. **Footer**: copyright e "Voltar ao topo".

### 5.7 Estudo de caso (`/projects/[slug]`)

1. Header simplificado: logo e link "Todos os projetos" (com seta).
2. Título: etiqueta `coral` "Estudo de caso · [tipo]", `h1` de 76px, resumo de 22px.
3. Faixa de metadados entre duas bordas `line`: Meu papel, Duração, Ferramentas. **Não há campo "Equipe".**
4. Mockup principal em proporção 16:8, cantos de 32px.
5. Seções em duas colunas (rótulo à esquerda, conteúdo à direita; empilham no mobile), `h2` de 40px: Contexto, Problema (com citação em cartão `soft`), Pesquisa (3 cards de resultado com número em `accent`, mais persona e jornada), Processo (3 imagens 3:4 com legenda), Solução (imagem 16:9 e texto), Aprendizados (3 itens com bolinha `coral`).
6. **Não há** bloco de "Próximo projeto" no fim. A página termina no footer, com o link "Vamos conversar →".

### 5.8 Responsividade e acessibilidade

- Mobile primeiro. Quebras em 640px e 1024px. Nada de rolagem horizontal.
- Landmarks (`header`, `nav`, `main`, `footer`), `h1` único por página, `lang` do `<html>` conforme o idioma.
- Links reais (`<a>`), botões reais (`<button>`). Ícones decorativos com `aria-hidden`. Imagens com `alt` traduzido.
- Respeitar `prefers-reduced-motion`.

## 6. Textos (PT e EN)

### Navegação e hero

| Chave | PT | EN |
|---|---|---|
| nav.about | Sobre | About |
| nav.projects | Projetos | Projects |
| nav.skills | Habilidades | Skills |
| nav.education | Formação | Education |
| nav.cta | Vamos conversar | Let's talk |
| hero.pill | Aberta a novas oportunidades em UX Design | Open to new opportunities in UX Design |
| hero.title | Oi, eu sou a Lauana, [UX Designer]. | Hi, I'm Lauana, a [UX Designer]. |
| hero.text | Moro na Irlanda há 2 anos e me dedico ao UX Design. Gosto muito do universo do design e venho me especializando nessa área, entre pesquisa, wireframes e protótipos no Figma. | I've lived in Ireland for 2 years and I'm focused on UX Design. I love the design world and have been specializing in it through research, wireframes and Figma prototypes. |
| hero.ctaProjects | Ver projetos | View projects |
| hero.ctaCv | Baixar CV | Download CV |
| hero.fact1Title / Text | 2 anos em Galway / Intercâmbio na Irlanda | 2 years in Galway / Exchange in Ireland |
| hero.fact2Title / Text | Inglês / Nível avançado | English / Advanced level |
| hero.fact3Title / Text | Figma / Wireframes e protótipos | Figma / Wireframes and prototypes |
| hero.chip1 | Pesquisa com usuários | User research |
| hero.chip2 | Wireframes | Wireframes |
| hero.chip3 | Protótipo no Figma | Figma prototype |
| hero.photoAlt | Lauana sorrindo, de óculos e jaqueta jeans, em frente a um canal | Lauana smiling, wearing glasses and a denim jacket, in front of a canal |

Observação: em `hero.title`, o trecho entre colchetes recebe a marca-texto (usar `t.rich`).

### Sobre

| Chave | PT | EN |
|---|---|---|
| about.label | 01 · Sobre | 01 · About |
| about.title | Um pouco sobre mim | A little about me |
| about.p1 | Sou UX Designer focada em interfaces intuitivas e experiências digitais centradas no usuário, facilitando a interação entre pessoas e tecnologia. | I'm a UX Designer focused on intuitive interfaces and user-centered digital experiences, making the interaction between people and technology easier. |
| about.p2 | Hoje estou aprimorando minhas competências em pesquisa com usuários, prototipação, wireframes e design de interfaces, buscando transformar ideias em projetos funcionais e acessíveis. | Right now I'm sharpening my skills in user research, prototyping, wireframing and interface design, aiming to turn ideas into functional, accessible projects. |
| about.p3 | Procuro uma oportunidade em UX Design onde eu possa contribuir, aprender com outros profissionais e evoluir junto com a equipe. | I'm looking for a UX Design opportunity where I can contribute, learn from other professionals and grow with the team. |
| about.card1Title / Text | Intuitivo / Interfaces simples de entender e de usar. | Intuitive / Interfaces that are simple to understand and use. |
| about.card2Title / Text | Centrado no usuário / Parto da pesquisa e dos testes de usabilidade com quem vai usar. | User-centered / I start from research and usability testing with the people who will use it. |
| about.card3Title / Text | Funcional e acessível / Projetos que funcionam em qualquer tela e para o maior número de pessoas. | Functional and accessible / Projects that work on any screen and for as many people as possible. |

### Projetos (home)

| Chave | PT | EN |
|---|---|---|
| projects.label | 02 · Projetos | 02 · Projects |
| projects.title | Projetos | Projects |
| projects.intro | Projetos de estudo. Em cada um eu mostro o problema, a pesquisa, o processo e o resultado. | Study projects. In each one I show the problem, the research, the process and the result. |
| projects.read | Ler estudo de caso | Read case study |

### Habilidades

| Chave | PT | EN |
|---|---|---|
| skills.label | 03 · Habilidades | 03 · Skills |
| skills.title | Habilidades e ferramentas | Skills and tools |
| skills.g1 | Pesquisa: Pesquisa com usuários; Testes de usabilidade; Personas; Mapa de jornada | Research: User research; Usability testing; Personas; Journey mapping |
| skills.g2 | Estrutura: Arquitetura da informação; Wireframing; Fluxos de navegação | Structure: Information architecture; Wireframing; Navigation flows |
| skills.g3 | Interface: UI Design; Hierarquia visual; Tipografia e layout; Design systems | Interface: UI design; Visual hierarchy; Typography and layout; Design systems |
| skills.g4 | Protótipo: Prototipação no Figma; Design responsivo; Usabilidade | Prototype: Prototyping in Figma; Responsive design; Usability |
| skills.g5 | Acessibilidade: Design para todas as pessoas; Contraste e legibilidade | Accessibility: Design for everyone; Contrast and legibility |

### Vivência, idiomas e formação

| Chave | PT | EN |
|---|---|---|
| experience.label | 04 · Vivência internacional | 04 · International experience |
| experience.title | Dois anos na Irlanda | Two years in Ireland |
| experience.place | Galway, Irlanda · 2024 – 2026 | Galway, Ireland · 2024 – 2026 |
| experience.name | Intercâmbio acadêmico e cultural | Academic and cultural exchange |
| experience.text | Imersão total no idioma e na cultura irlandesa, chegando ao nível avançado de inglês. [Nome da escola / instituição] | Full immersion in the Irish language and culture, reaching an advanced level of English. [School / institution name] |
| experience.chips | Adaptabilidade; Autonomia; Resiliência; Comunicação intercultural | Adaptability; Autonomy; Resilience; Intercultural communication |
| languages.pt | Português / Nativo | Portuguese / Native |
| languages.en | Inglês / Avançado | English / Advanced |
| education.label | 05 · Formação | 05 · Education |
| education.title | Formação acadêmica | Education |

Entradas de formação: ver seção 7.

### Contato e rodapé

| Chave | PT | EN |
|---|---|---|
| contact.label | 06 · Contato | 06 · Contact |
| contact.title | Vamos [conversar]? | Let's [talk]? |
| contact.text | Estou em busca da minha primeira oportunidade em UX Design. Entre em contato e vamos conversar, estou ansiosa para contribuir e aprender com uma equipe que valoriza o progresso e a inovação. | I'm looking for my first opportunity in UX Design. Get in touch and let's talk, I'm eager to contribute and learn alongside a team that values progress and innovation. |
| contact.linkedin | LinkedIn | LinkedIn |
| footer.copy | © 2026 Lauana Segal · UX Designer | © 2026 Lauana Segal · UX Designer |
| footer.top | Voltar ao topo ↑ | Back to top ↑ |

Contatos (iguais nos dois idiomas): e-mail `lauanasegal0@gmail.com` (link `mailto:`), LinkedIn `https://linkedin.com/in/lauana-segal-melo`. **O telefone não aparece no site.**

### Estudo de caso (rótulos fixos)

| Chave | PT | EN |
|---|---|---|
| caseStudy.back | Todos os projetos | All projects |
| caseStudy.tag | Estudo de caso | Case study |
| caseStudy.role / duration / tools | Meu papel / Duração / Ferramentas | My role / Duration / Tools |
| caseStudy.s1 (rótulo / título) | 01 · Contexto / Contexto do projeto | 01 · Context / Project context |
| caseStudy.s2 | 02 · Problema / O problema | 02 · Problem / The problem |
| caseStudy.s3 | 03 · Pesquisa / Resultados da pesquisa | 03 · Research / Research findings |
| caseStudy.s4 | 04 · Processo / Wireframes e interface | 04 · Process / Wireframes and interface |
| caseStudy.s5 | 05 · Solução / Solução final | 05 · Solution / Final solution |
| caseStudy.s6 | 06 · Aprendizados / O que aprendi | 06 · Learnings / What I learned |
| caseStudy.persona / journey | Persona / Mapa de jornada | Persona / Journey map |
| caseStudy.mockup | Mockup principal · telas finais | Main mockup · final screens |
| caseStudy.talk | Vamos conversar → | Let's talk → |

## 7. Dados mockados (para trocar depois)

- **Projetos:** 3 arquivos (`projeto-01`, `projeto-02`, `projeto-03`), com títulos `[Título do projeto 01]` etc., tipo `[Tipo: app / site]`, resumo `[Uma frase sobre o problema que você quis resolver e para quem.]`, e todos os campos de texto com `[ ... ]` nos dois idiomas. Tags do projeto 01: Pesquisa / UI. Projeto 02: Wireframes / Protótipo. Projeto 03: Design system / Acessibilidade. Papel: `UX / UI Designer`. Ferramentas: `Figma`. Duração: `[X semanas]`.
  - Textos-guia do mock: contexto `[De onde veio a ideia? Conte em 3 ou 4 linhas.]`; problema `[Como podemos ajudar (público) a conseguir (objetivo) sem (obstáculo)?]`; resultados `[N]` com `[Descoberta 1, em uma frase]`; aprendizados `[Aprendizado 1: algo que você faria diferente]`.
  - Imagens: nenhuma existe ainda. Use `ImagePlaceholder` com os rótulos `Capa do projeto 01 · mockup`, `Persona`, `Mapa de jornada`, `Wireframes`, `UI alta fidelidade`, `Componentes`, `Protótipo`.
- **Formação (duas entradas):**
  1. `[Mês/Ano de início] – [Mês/Ano de conclusão ou "cursando"]`, `[Nome do curso / Bacharelado]`, `[Nome da instituição de ensino]`
  2. `[Ano de conclusão]`, `[Curso / Especialização / Bootcamp]`, `[Nome da instituição de ensino]`
- **Escola do intercâmbio:** `[Nome da escola / instituição]`.
- **CV:** botões "Baixar CV" apontam para `/cv/lauana-segal-cv-pt.pdf` (em PT) e `/cv/lauana-segal-cv-en.pdf` (em EN). Crie dois PDFs de uma página com o texto `[CV em breve]` para o link não quebrar.
- **Foto:** `public/images/lauana.webp` (arquivo enviado à parte; o usuário coloca no repositório).

## 8. Estrutura de pastas sugerida

```
app/
  [locale]/
    layout.tsx
    page.tsx
    projects/[slug]/page.tsx
  sitemap.ts
  robots.ts
components/
  Header.tsx  Hero.tsx  About.tsx  Projects.tsx  Skills.tsx
  Experience.tsx  Education.tsx  Contact.tsx  Footer.tsx
  LangSwitcher.tsx  Logo.tsx  ImagePlaceholder.tsx  Highlight.tsx
  case-study/  (um componente por seção do estudo de caso)
content/projects/  types.ts  index.ts  projeto-01.ts  projeto-02.ts  projeto-03.ts
i18n/  routing.ts  request.ts
messages/  pt.json  en.json
public/  images/  cv/
middleware.ts
```

## 9. Etapas

1. **Base:** projeto Next.js + TypeScript + Tailwind, tokens (seção 5.1), fontes, `next-intl` com `/pt` e `/en`, `Header`, `Footer`, `LangSwitcher` e `Logo`. Critério: `/pt` e `/en` abrem, o seletor troca de idioma, build limpo.
2. **Home:** todas as seções da seção 5.6, com os textos de `messages/*.json` e a foto. Critério: fiel às medidas e cores, sem rolagem horizontal em 360px.
3. **Estudo de caso:** tipos, 3 projetos mockados, `ImagePlaceholder`, rota `/projects/[slug]` e cards da home alimentados pelos arquivos de projeto. Critério: os 3 slugs abrem nos dois idiomas, textos traduzidos, imagens iguais nos dois.
4. **Acabamento:** metadados por idioma, hreflang, Open Graph, sitemap, robots, favicon, `not-found`, PDFs mock do CV. Critério: Lighthouse acima de 90 em Acessibilidade, SEO e Boas práticas.
5. **Revisão final:** navegação por teclado, contraste, `alt`, teste em 360px, 768px e 1440px, conferência de todas as chaves de tradução (nenhuma faltando em `pt` ou `en`) e README com como rodar, como adicionar um projeto e como trocar o CV.

## 10. Fora do escopo

Formulário de contato, blog, CMS, analytics, modo escuro, animações elaboradas, versão do logo além do monograma "LS".
