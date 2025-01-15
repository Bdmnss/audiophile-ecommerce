import Link from 'next/link'
import { useCartStore } from '../stores/cartStore'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Cart() {
  const cartStore = useCartStore()
  const { t } = useTranslation()

  return (
    <div
      className={`fixed z-10 flex h-[45vh] w-[90%] flex-col gap-[3.2rem] overflow-y-auto rounded-xl bg-white p-[3rem] dark:bg-[#101010] md:h-[47vh] ${
        cartStore.isCartOpen
          ? 'animate-slide-top-to-bottom mt-[10rem]'
          : 'hidden'
      } right-[4%] md:w-[50%] lg:w-[30%]`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[1.8rem] font-bold text-black dark:text-white">
          {t('cart')} ({cartStore.cartItemsQuantity})
        </p>
        <p
          className="cursor-pointer text-[1.5rem] text-[gray] underline hover:text-[#d87d4a] dark:text-gray-400 dark:hover:text-[#fbaf85]"
          onClick={() => {
            cartStore.setCartItems([])
            cartStore.setTotalPrice(0)
            cartStore.setCartItemsQuantity(0)
          }}
        >
          {t('remove_all')}
        </p>
      </div>

      {cartStore.cartItemsQuantity === 0 ? (
        <div>
          <h2 className="mb-[3.2rem] text-[3rem] text-black dark:text-white">
            {t('cart_empty')}
          </h2>

          <p className="text-[1.5rem] text-[gray] dark:text-gray-400">
            {t('continue_shopping_on_the_audiophile_website')}{' '}
            <Link
              href="/"
              className="font-bold text-[#d87d4a] dark:text-[#fbaf85]"
              onClick={() => cartStore.setCartOpen(false)}
            >
              {t('homepage')}
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-[2.4rem]">
          {cartStore.cartItems.map(
            (product: {
              id: number
              image: string
              name: string
              originalPrice: number
              quantity: number
            }) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <Image
                  src={product.image}
                  alt="product image"
                  className="w-[6.4rem] rounded-xl"
                  width={64}
                  height={64}
                />

                <div className="">
                  <p className="text-[1.5rem] font-bold text-black dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-[1.4rem] font-bold text-[gray] dark:text-gray-400">
                    $ {product.originalPrice}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-[2rem] rounded-lg bg-[#80808038] px-[1.5rem] py-[0.7rem] dark:bg-gray-700">
                  <button
                    onClick={() => {
                      if (product.quantity > 1) {
                        product.quantity--
                        cartStore.setTotalPrice(
                          cartStore.totalPrice - product.originalPrice
                        )
                      }
                    }}
                    className="text-[2rem] font-bold text-[gray] hover:text-[#d87d4a] dark:text-gray-400 dark:hover:text-[#fbaf85]"
                  >
                    -
                  </button>
                  <span className="text-[1.3rem] font-bold text-black dark:text-white">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => {
                      product.quantity++
                      cartStore.setTotalPrice(
                        cartStore.totalPrice + product.originalPrice
                      )
                    }}
                    className="text-[2rem] font-bold text-[gray] hover:text-[#d87d4a] dark:text-gray-400 dark:hover:text-[#fbaf85]"
                  >
                    +
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-[1.5rem] font-medium text-[gray] dark:text-gray-400">
          {t('total')}
        </p>
        <p className="text-[1.8rem] font-bold text-black dark:text-white">
          $ {cartStore.totalPrice}
        </p>
      </div>

      <Link href="/checkout" passHref>
        <button
          onClick={() => cartStore.setCartOpen(false)}
          disabled={cartStore.cartItemsQuantity === 0}
          className="w-[100%] rounded-lg bg-[#d87d4a] px-[2rem] py-[1rem] text-[1.5rem] text-white hover:bg-[#fbaf85] disabled:opacity-50"
        >
          {t('checkout')}
        </button>
      </Link>
    </div>
  )
}
