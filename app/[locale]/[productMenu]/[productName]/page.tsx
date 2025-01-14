import ProductPage from '@/pages/ProductPage'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

interface Params {
  params: {
    locale: string
    productMenu: string
    productName: string
  }
}

export default async function Page({ params }: Params) {
  const { locale, productMenu, productName } = params
  const { resources } = await initTranslations(locale, ['default', 'common'])

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['default', 'common']}
    >
      <ProductPage productMenu={productMenu} productName={productName} />
    </TranslationsProvider>
  )
}
