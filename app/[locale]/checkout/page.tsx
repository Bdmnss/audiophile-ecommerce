import Checkout from '@/components/checkout/Checkout'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

interface Params {
  params: {
    locale: string
  }
}

export default async function Page({ params }: Params) {
  const { locale } = params
  const { resources } = await initTranslations(locale, ['default', 'common'])

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={['default', 'common']}>
      <Checkout />
    </TranslationsProvider>
  )
}