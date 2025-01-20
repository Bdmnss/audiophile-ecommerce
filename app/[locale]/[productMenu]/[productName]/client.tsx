'use client'

import Link from 'next/link'
import { useCartStore } from '@/stores/cartStore'
import Navigation from '@/components/Navigation'
import SloganText from '@/components/SloganText'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useProducts } from '@/hooks/useProduct'

export default function ProductPage({
  productMenu,
  productName,
}: {
  productMenu: string
  productName: string
}) {
  const cartStore = useCartStore()
  const { t } = useTranslation()
  const { productQuery } = useProducts()
  const { data: product, isLoading, error } = productQuery(productName)

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }
  if (error) return <div>Error: {error.message}</div>
  if (!product) return <div>No product found</div>

  return (
    <div className="bg-[#f1f1f1] px-[2.4rem] pb-[12rem] pt-[9rem] dark:bg-[#101010] md:px-[4rem] lg:px-[16.5rem] lg:pt-[15rem]">
      <Link
        href={`/${productMenu}`}
        className="text-[1.5rem] font-medium text-[gray] hover:text-[#d87d4a]"
      >
        {t('go_back')}
      </Link>

      <div key={product.id}>
        <div className="md:mt-[2.4rem] md:flex md:gap-[7rem] lg:mt-[5.6rem] lg:gap-[12.5rem]">
          <div className="md:w-[50%]">
            <Image
              src={product.image || ''}
              alt="product image"
              className="mb-[4rem] mt-[2.4rem] rounded-lg md:hidden"
              width={375}
              height={375}
            />
            <Image
              src={product.image || ''}
              alt="product image"
              className="mb-[4rem] hidden rounded-lg md:block lg:hidden"
              width={768}
              height={768}
            />
            <Image
              src={product.image || ''}
              alt="product image"
              className="mb-[4rem] hidden rounded-lg lg:block"
              width={768}
              height={768}
            />
          </div>

          <div className="md:w-[50%] lg:flex lg:flex-col lg:justify-center">
            {product.new && (
              <p className="mb-[2.4rem] text-[1.4rem] tracking-[1rem] text-[#d87d4a]">
                {t('new_product')}
              </p>
            )}

            <h1 className="mb-[2.4rem] text-[2.8rem] font-bold text-black dark:text-white lg:text-[4rem]">
              {product.name?.toUpperCase() || 'Unknown Product'}
            </h1>

            <p className="mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] text-[gray]">
              {product.description}
            </p>

            <p className="mb-[3rem] text-[1.8rem] font-bold text-black dark:text-white">
              $ {product.price}
            </p>

            <div className="mb-[9rem] flex items-center gap-[1.6rem]">
              <div className="flex items-center justify-between gap-[2rem] bg-[#80808038] px-[2.5rem] py-[1rem]">
                <button
                  onClick={() => cartStore.removeItemsQuantity()}
                  className="text-[1.3rem] font-bold text-[gray] hover:text-[#d87d4a] lg:text-[1.5rem]"
                >
                  -
                </button>
                <span className="text-[1.3rem] font-bold text-black dark:text-white">
                  {cartStore.itemsQuantity}
                </span>
                <button
                  onClick={() => cartStore.addItemsQuantity()}
                  className="text-[1.3rem] font-bold text-[gray] hover:text-[#d87d4a] lg:text-[1.5rem]"
                >
                  +
                </button>
              </div>

              <button
                className="bg-[#d87d4a] px-[3rem] py-[1rem] text-[1.3rem] font-bold text-white hover:bg-[#fbaf85]"
                onClick={() => {
                  const existingCartItem = cartStore.cartItems.find(
                    (cartItem) => cartItem.name === product.name
                  )

                  if (existingCartItem) {
                    existingCartItem.quantity = cartStore.itemsQuantity
                    existingCartItem.price =
                      (product.price ?? 0) * existingCartItem.quantity
                    cartStore.setTotalPrice(
                      cartStore.cartItems.reduce(
                        (acc, item) => acc + item.price,
                        0
                      )
                    )
                    cartStore.setItemsQuantity(1)
                  } else {
                    cartStore.setCartItems([
                      ...cartStore.cartItems,
                      {
                        id: product.id,
                        name: product.name || 'Unknown Product',
                        price: (product.price ?? 0) * cartStore.itemsQuantity,
                        quantity: cartStore.itemsQuantity,
                        image: product.image || '',
                        originalPrice: product.price ?? 0,
                      },
                    ])
                    cartStore.setCartItemsQuantity(
                      cartStore.cartItemsQuantity + 1
                    )
                    cartStore.setTotalPrice(
                      cartStore.totalPrice +
                        (product.price ?? 0) * cartStore.itemsQuantity
                    )
                    cartStore.setItemsQuantity(1)
                  }
                }}
              >
                {t('add_to_cart')}
              </button>
            </div>
          </div>
        </div>

        <div className="pb-[10rem] lg:w-[50%]">
          <h2 className="mb-[2.4rem] text-[2.4rem] font-bold text-black dark:text-white md:text-[3.2rem]">
            {t('features')}
          </h2>

          <p className="mb-[9rem] text-[1.5rem] font-medium leading-[2.5rem] text-[gray]">
            {product.features}
          </p>
        </div>

        <Navigation />

        <SloganText />
      </div>
    </div>
  )
}
