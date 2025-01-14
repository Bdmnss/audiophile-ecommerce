import HomePage from '@/pages/Home'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

interface HomeProps {
  params: {
    locale: string
  }
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { resources } = await initTranslations(locale, ['default', 'common'])

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={['default', 'common']}>
      <HomePage />
    </TranslationsProvider>
  )
}