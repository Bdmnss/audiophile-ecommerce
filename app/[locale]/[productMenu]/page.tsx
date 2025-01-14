import ProductMenu from '@/pages/ProductMenu'
import initTranslations from '../../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

interface Params {
  params: {
    locale: string
    productMenu: string
  }
}

export default async function Page({ params }: Params) {
  const { locale, productMenu } = params
  const { resources } = await initTranslations(locale, ['default', 'common'])

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['default', 'common']}
    >
      <ProductMenu productMenuName={productMenu} />
    </TranslationsProvider>
  )
}
