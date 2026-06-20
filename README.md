# Portfolio Michel Domingos Nhampossa

Portfolio profissional, moderno e responsivo para Michel Domingos Nhampossa,
estudante de Engenharia Eletronica na Universidade Jean Piaget da Beira.

## Tecnologias

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Design responsivo para desktop, tablet e mobile

## Instalar dependencias

```bash
npm install
```

O projeto foi criado a partir do comando base:

```bash
npx create-next-app@latest portfolio-michel --typescript --tailwind --eslint --app
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Depois abra:

```bash
http://localhost:3000
```

## Build de producao

```bash
npm run build
npm run start
```

## Estrutura principal

- `src/app/page.tsx`: composicao da pagina inicial
- `src/app/layout.tsx`: metadados e layout global
- `src/app/globals.css`: estilos globais
- `src/lib/data.ts`: arrays de navegacao, competencias, projetos, certificados e contactos
- `src/components`: componentes separados do portfolio

## Personalizacao

Edite `src/lib/data.ts` para trocar competencias, projetos, certificados,
links de contacto, telefone, email e LinkedIn.
