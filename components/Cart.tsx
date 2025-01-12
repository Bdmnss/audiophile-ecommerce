import Link from 'next/link'
import { useCartStore } from '../stores/cartStore'
import Image from 'next/image'

export default function Cart() {
  const cartStore = useCartStore()
  return (
    <div
      className={`fixed z-10 flex h-[45vh] w-[90%] flex-col gap-[3.2rem] overflow-y-auto rounded-xl bg-white p-[3rem] md:h-[47vh] ${
        cartStore.isCartOpen
          ? 'animate-slide-top-to-bottom mt-[10rem]'
          : 'animate-slide-bottom-to-top'
      } right-[4%] md:w-[50%] lg:w-[30%]`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[1.8rem] font-bold text-black">
          CART ({cartStore.cartItemsQuantity})
        </p>
        <p
          className="cursor-pointer text-[1.5rem] text-[gray] underline hover:text-[#d87d4a]"
          onClick={() => {
            cartStore.setCartItems([])
            cartStore.setTotalPrice(0)
            cartStore.setCartItemsQuantity(0)
          }}
        >
          Remove all
        </p>
      </div>

      {cartStore.cartItemsQuantity === 0 ? (
        <div>
          <h2 className="mb-[3.2rem] text-[3rem] text-black">
            Your cart is empty
          </h2>

          <p className="text-[1.5rem] text-[gray]">
            Continue shopping on the audiophile website{' '}
            <Link
              href="/"
              className="font-bold text-[#d87d4a]"
              onClick={() => cartStore.setCartOpen(false)}
            >
              homepage
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-[2.4rem]">
          {cartStore.cartItems.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <Image
                src={product.image}
                alt="product image"
                className="w-[6.4rem] rounded-xl"
                width={64}
                height={64}
              />

              <div className="">
                <p className="text-[1.5rem] font-bold text-black">
                  {product.name}
                </p>
                <p className="text-[1.4rem] font-bold text-[gray]">
                  $ {product.originalPrice}
                </p>
              </div>

              <div className="flex items-center justify-between gap-[2rem] bg-[#80808038] px-[1.5rem] py-[0.7rem]">
                <button
                  onClick={() => {
                    if (product.quantity > 1) {
                      product.quantity--
                      cartStore.setTotalPrice(
                        cartStore.totalPrice - product.originalPrice
                      )
                    }
                  }}
                  className="text-[2rem] font-bold text-[gray] hover:text-[#d87d4a]"
                >
                  -
                </button>
                <span className="text-[1.3rem] font-bold text-black">
                  {product.quantity}
                </span>
                <button
                  onClick={() => {
                    product.quantity++
                    cartStore.setTotalPrice(
                      cartStore.totalPrice + product.originalPrice
                    )
                  }}
                  className="text-[2rem] font-bold text-[gray] hover:text-[#d87d4a]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-[1.5rem] font-medium text-[gray]">TOTAL</p>
        <p className="text-[1.8rem] font-bold text-black">
          $ {cartStore.totalPrice}
        </p>
      </div>

      <Link href="/checkout" passHref>
        <button
          onClick={() => cartStore.setCartOpen(false)}
          disabled={cartStore.cartItemsQuantity === 0}
          className="w-[100%] rounded-lg bg-[#d87d4a] px-[2rem] py-[1rem] text-[1.5rem] text-white hover:bg-[#fbaf85] disabled:opacity-50"
        >
          CHECKOUT
        </button>
      </Link>
    </div>
  )
}
