import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/stores/cartStore'
import { useCheckoutStore } from '@/stores/checkoutStore'

const PaymentConfirmation: React.FC = () => {
  const cartStore = useCartStore()
  const checkoutStore = useCheckoutStore()

  return (
    <div className="fixed top-0 z-[1] h-full w-full cursor-pointer bg-[#000000bf]">
      <div className="fixed left-1/2 top-[12rem] z-10 h-[73vh] w-[90%] -translate-x-1/2 transform overflow-y-auto rounded-xl bg-white dark:bg-[#101010] p-[3.2rem] md:h-[61vh] md:w-[70%] lg:w-[40%]">
        <svg
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-[2.4rem]"
        >
          <g fill="none">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path stroke="#FFF" d="m20.754 33.333 6.751 6.751 15.804-15.803" />
          </g>
        </svg>
        <h2 className="mb-[1.6rem] text-[2.4rem] font-bold leading-[2.8rem] text-black dark:text-white md:text-[3.2rem] md:leading-[3.6rem]">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="mb-[2.4rem] text-[1.5rem] font-medium text-[gray]">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex flex-col overflow-hidden rounded-xl bg-[#f1f1f1] md:flex-row md:justify-between">
          <div className="p-[2.4rem] md:w-[60%]">
            {cartStore.cartItems.map(
              (product, index) =>
                index === 0 && (
                  <div key={product.id} className="mb-[1.2rem] flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[1.6rem]">
                        <Image
                          src={product.image}
                          alt="product image"
                          width={50}
                          height={50}
                          className="w-[5rem]"
                        />
                        <div className="flex flex-col items-center">
                          <p className="text-[1.5rem] font-bold text-black">
                            {product.name}
                          </p>
                          <p className="self-start text-[1.4rem] font-bold text-[gray]">
                            $ {product.originalPrice}
                          </p>
                        </div>
                      </div>
                      <p className="text-[1.5rem] font-bold text-[gray]">
                        x{product.quantity}
                      </p>
                    </div>
                  </div>
                )
            )}
            {cartStore.cartItems.length > 1 && (
              <div className="flex items-center justify-center border-t-[1px] border-t-[gray] pt-[1.2rem] text-[1.2rem] font-bold text-[gray]">
                and {cartStore.cartItems.length - 1} other item(s)
              </div>
            )}
          </div>

          <div className="bg-black p-[2.5rem] md:flex md:w-[40%] md:flex-col md:justify-center">
            <p className="text-[1.5rem] font-medium text-[gray]">GRAND TOTAL</p>
            <p className="text-[1.8rem] font-bold text-white">
              $ {cartStore.totalPrice + 50}
            </p>
          </div>
        </div>
        <Link href="/">
          <button
            onClick={() => {
              cartStore.setCartItems([])
              cartStore.setTotalPrice(0)
              cartStore.setCartItemsQuantity(0)
              checkoutStore.setPayActive(false)
            }}
            className="mt-[2.4rem] w-full bg-[#d87d4a] p-[1.6rem] text-[1.4rem] font-bold text-white"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PaymentConfirmation
