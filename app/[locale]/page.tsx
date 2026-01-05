import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('common');

  return (
    <main>
      <h1>{t('welcome')}</h1>
    </main>
  );
}

