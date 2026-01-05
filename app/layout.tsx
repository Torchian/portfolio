import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Root layout is minimal - actual html/body is in [locale]/layout.tsx
  // This is required by Next.js but next-intl handles routing via middleware
  return children;
}

