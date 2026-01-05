# Project Setup Summary

## Folder Structure

```
torchian/
├── app/
│   ├── layout.tsx              # Root layout (minimal, required by Next.js)
│   └── [locale]/               # Locale-based routing
│       ├── layout.tsx          # Main layout with html/body, i18n, styled-components
│       └── page.tsx            # Home page
├── i18n/
│   ├── request.ts              # next-intl request configuration
│   └── routing.ts              # Routing config (EN/RU/HY)
├── lib/
│   ├── registry.tsx            # Styled Components SSR registry
│   └── theme.ts                # Theme configuration
├── messages/                   # Translation files
│   ├── en.json
│   ├── ru.json
│   └── hy.json
├── store/
│   └── useStore.ts             # Example Zustand store
├── types/
│   └── styled.d.ts             # Styled Components theme types
├── middleware.ts               # next-intl middleware
├── next.config.ts              # Next.js config
├── tsconfig.json               # TypeScript config (strict mode)
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config (2 spaces)
└── package.json                # Dependencies
```

## Key Configuration Files

### TypeScript (`tsconfig.json`)
- **Strict mode enabled**: Full type safety
- **Path aliases**: `@/*` maps to project root
- **Module resolution**: `bundler` for Next.js compatibility

### Next.js (`next.config.ts`)
- **Styled Components compiler**: Enabled for optimal performance
- **next-intl plugin**: Configured with `./i18n/request.ts`
- **No experimental flags**: Using stable features only

### Styled Components SSR (`lib/registry.tsx`)
- **Server-side rendering**: Properly configured using `ServerStyleSheet`
- **Style extraction**: Uses `useServerInsertedHTML` hook
- **Client-side hydration**: Handles both server and client correctly

### Internationalization (`i18n/`)
- **Three languages**: English (en), Russian (ru), Armenian (hy)
- **Routing**: Locale-based routing via `[locale]` folder
- **Middleware**: Handles locale detection and redirection
- **Static params**: Pre-generates all locale routes

### ESLint + Prettier
- **ESLint**: Next.js recommended config with TypeScript support
- **Prettier**: 2-space indentation, single quotes, semicolons
- **No conflicts**: ESLint and Prettier work together

## Key Decisions

1. **Locale-based routing**: Using `[locale]` folder structure for clean URL patterns (`/en`, `/ru`, `/hy`)

2. **Styled Components SSR**: Custom registry pattern ensures styles are properly extracted and injected on the server

3. **Root layout minimal**: Root layout passes through to `[locale]/layout.tsx` which contains the actual HTML structure with locale-specific `lang` attribute

4. **TypeScript strict mode**: Maximum type safety for better code quality

5. **Absolute imports**: All imports use `@/` prefix for cleaner import paths

6. **No Tailwind**: Using Styled Components for styling as requested

7. **No Babel**: Using Next.js built-in SWC compiler

8. **SEO-ready**: Metadata API configured with OpenGraph and Twitter cards

## Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start development server
3. Customize theme in `lib/theme.ts`
4. Add more translations in `messages/` files
5. Create your portfolio pages in `app/[locale]/`

## Dependencies Installed

- **next**: ^15.1.0 (Latest stable)
- **react**: ^19.0.0 (Latest)
- **styled-components**: ^6.1.13 (With SSR support)
- **framer-motion**: ^11.5.4 (Animations)
- **zustand**: ^5.0.2 (State management)
- **next-intl**: ^3.22.4 (Internationalization)
- **howler**: ^2.2.4 (Audio)

