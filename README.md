# Portfolio

A modern Next.js portfolio website built with TypeScript, Styled Components, and internationalization support.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Styled Components** (SSR configured)
- **Framer Motion** (animations)
- **Zustand** (state management)
- **next-intl** (EN/RU/HY languages)
- **Howler.js** (audio)
- **ESLint + Prettier** (2-space indentation)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
torchian/
├── app/
│   └── [locale]/          # Locale-based routing
│       ├── layout.tsx     # Root layout with i18n
│       └── page.tsx       # Home page
├── i18n/
│   ├── request.ts         # next-intl request config
│   └── routing.ts         # Routing configuration
├── lib/
│   └── registry.tsx       # Styled Components SSR registry
├── messages/              # Translation files
│   ├── en.json
│   ├── ru.json
│   └── hy.json
├── middleware.ts          # next-intl middleware
└── next.config.ts         # Next.js config with styled-components
```

## Key Features

- ✅ TypeScript strict mode
- ✅ Styled Components with SSR support
- ✅ Internationalization (EN/RU/HY)
- ✅ Absolute imports using `@/`
- ✅ SEO-ready metadata
- ✅ ESLint + Prettier configured

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
