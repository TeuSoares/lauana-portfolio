# Portfólio · Lauana Segal

Site de portfólio de UX Design em **Next.js (App Router) + TypeScript + Tailwind CSS**, com **português e inglês** (`/pt` e `/en`).

A especificação completa (design, textos, etapas) está em [`SPEC.md`](./SPEC.md).

## Como rodar

Precisa de Node.js 20 ou mais novo.

```bash
npm install
npm run dev      # http://localhost:3000 (redireciona para /pt ou /en)
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Estrutura

```
app/[locale]/              páginas (home e /projects/[slug]), layout, 404
components/                seções da home e do estudo de caso
content/projects/          um arquivo por projeto (+ tipos)
i18n/                      configuração do next-intl
messages/pt.json, en.json  TODOS os textos do site, nos dois idiomas
public/images/             fotos e imagens dos projetos
public/cv/                 currículos em PDF (um por idioma)
```

## Tarefas comuns

### Trocar um texto do site

Edite `messages/pt.json` **e** `messages/en.json` (as chaves são as mesmas nos dois).

### Trocar o currículo

Substitua os PDFs de exemplo, mantendo os nomes:

- `public/cv/lauana-segal-cv-pt.pdf`
- `public/cv/lauana-segal-cv-en.pdf`

### Adicionar um projeto

1. Copie `content/projects/projeto-01.ts` para `content/projects/meu-projeto.ts`.
2. Preencha os textos. **Cada texto tem versão `pt` e `en`.** As imagens são as mesmas para os dois idiomas.
3. Coloque as imagens em `public/images/projects/meu-projeto/` e informe os caminhos (`cover`, `mockup`, `research.persona`, `research.journey`, `process.images[].src`, `solution.image`). Campo sem imagem mostra um espaço reservado listrado.
4. Inclua o projeto na lista em `content/projects/index.ts`.

Os três projetos atuais (`projeto-01` a `projeto-03`) são **exemplos** gerados por `content/projects/_mock.ts`, com todo o texto entre `[colchetes]`. Para um projeto real, escreva o objeto completo no arquivo do projeto, no lugar de chamar `mockProject`.

### Trocar a foto

Substitua `public/images/lauana.webp` (de preferência quadrada).

### Trocar a cor principal

Em `app/globals.css`, altere `--color-accent`. Alternativas já testadas no design: `#9F1239`, `#DC2626`, `#7F1D1D`.

## Dados ainda mockados

- Nome da escola do intercâmbio e as duas entradas de formação (`messages/*.json`, chaves `experience.text` e `education.entries`).
- Textos e imagens dos 3 projetos.
- PDFs do currículo.

## Publicação

Quando o domínio estiver definido, crie `.env.local` (e a mesma variável na Vercel):

```
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

Ela é usada no sitemap, no `robots.txt` e nos metadados (hreflang e Open Graph).

Na Vercel, importe o repositório: o projeto é detectado como Next.js automaticamente.
