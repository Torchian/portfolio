import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description: 'Personal portfolio website',
  keywords: ['portfolio', 'developer', 'web'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Portfolio',
    title: 'Portfolio',
    description: 'Personal portfolio website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description: 'Personal portfolio website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

