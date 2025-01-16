import ProductMenu from './client'

interface Params {
  params: {
    productMenu: string
  }
}

export default function page({ params }: Params) {
  const { productMenu } = params
  return <ProductMenu productMenuName={productMenu} />
}
