'use client'

import Link from 'next/link'
import data from '../data.json'
import { useCartStore } from '@/stores/cartStore'
import Navigation from '@/components/Navigation'
import SloganText from '@/components/SloganText'
import Image from 'next/image'

export default function ProductPage({
  productMenu,
  productName,
}: {
  productMenu: string
  productName: string
}) {
  const cartStore = useCartStore()
  const product = data.filter((item) => item.slug === productName)

  return (
    <div className="px-[2.4rem] pb-[12rem] pt-[9rem] md:px-[4rem] lg:px-[16.5rem] lg:pt-[15rem]">
      <Link
        href={`/${productMenu}`}
        className="text-[1.5rem] font-medium text-[gray]"
      >
        Go Back
      </Link>

      {product.map((product) => (
        <div key={product.id}>
          <div className="md:mt-[2.4rem] md:flex md:gap-[7rem] lg:mt-[5.6rem] lg:gap-[12.5rem]">
            <div className="md:w-[50%]">
              <Image
                src={product.image.mobile}
                alt="product image"
                className="mb-[4rem] mt-[2.4rem] rounded-lg md:hidden"
                width={375}
                height={375}
              />
              <Image
                src={product.image.tablet}
                alt="product image"
                className="mb-[4rem] hidden rounded-lg md:block lg:hidden"
                width={768}
                height={768}
              />
              <Image
                src={product.image.desktop}
                alt="product image"
                className="mb-[4rem] hidden rounded-lg lg:block"
                width={768}
                height={768}
              />
            </div>

            <div className="md:w-[50%] lg:flex lg:flex-col lg:justify-center">
              {product.new && (
                <p className="mb-[2.4rem] text-[1.4rem] tracking-[1rem] text-[#d87d4a]">
                  NEW PRODUCT
                </p>
              )}

              <h1 className="mb-[2.4rem] text-[2.8rem] font-bold text-black lg:text-[4rem]">
                {product.name.toUpperCase()}
              </h1>

              <p className="mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] text-[gray]">
                {product.description}
              </p>

              <p className="mb-[3rem] text-[1.8rem] font-bold text-black">
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
                  <span className="text-[1.3rem] font-bold text-black">
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
                        product.price * existingCartItem.quantity
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
                          name: product.name,
                          price: product.price * cartStore.itemsQuantity,
                          quantity: cartStore.itemsQuantity,
                          image: product.image.mobile,
                          originalPrice: product.price,
                        },
                      ])
                      cartStore.setCartItemsQuantity(
                        cartStore.cartItemsQuantity + 1
                      )
                      cartStore.setTotalPrice(
                        cartStore.totalPrice +
                          product.price * cartStore.itemsQuantity
                      )
                      cartStore.setItemsQuantity(1)
                    }
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:gap-[12.5rem]">
            <div className="lg:w-[50%]">
              <h2 className="mb-[2.4rem] text-[2.4rem] font-bold text-black md:text-[3.2rem]">
                FEATURES
              </h2>

              <p className="mb-[9rem] text-[1.5rem] font-medium leading-[2.5rem] text-[gray]">
                {product.features}
              </p>
            </div>

            <div className="mb-[9rem] md:flex md:justify-center md:gap-[20rem] lg:w-[50%] lg:flex-col lg:gap-0">
              <h2 className="mb-[2.4rem] text-[2.4rem] font-bold text-black md:text-[3.2rem]">
                IN THE BOX
              </h2>

              <div>
                {product.includes.map((item, index) => (
                  <p
                    key={index}
                    className="mb-[1rem] flex items-center gap-[2.4rem] text-[1.5rem] font-medium text-[gray]"
                  >
                    <span className="font-bold text-[#d87d4a]">
                      {item.quantity}x
                    </span>{' '}
                    {item.item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-[12rem] flex flex-col gap-[2rem] md:grid md:grid-cols-gallery md:grid-rows-2 md:justify-center">
            <Image
              src={product.gallery.first.mobile}
              alt="gallery image"
              className="rounded-xl md:hidden"
              width={375}
              height={375}
            />

            <Image
              src={product.gallery.second.mobile}
              alt="gallery image"
              className="rounded-xl md:hidden"
              width={375}
              height={375}
            />

            <Image
              src={product.gallery.third.mobile}
              alt="gallery image"
              className="rounded-xl md:hidden"
              width={375}
              height={375}
            />

            <Image
              src={product.gallery.first.tablet}
              alt="gallery image"
              className="row-start-1 hidden rounded-xl md:block"
              width={768}
              height={768}
            />

            <Image
              src={product.gallery.second.tablet}
              alt="gallery image"
              className="row-start-2 hidden rounded-xl md:block"
              width={768}
              height={768}
            />

            <Image
              src={product.gallery.third.tablet}
              alt="gallery image"
              className="row-span-2 hidden h-full rounded-xl md:block"
              width={768}
              height={768}
            />
          </div>

          <div className="mb-[12rem] flex flex-col items-center justify-center">
            <h2 className="mb-[4rem] text-[2.4rem] font-bold text-black md:text-[3.2rem]">
              YOU MAY ALSO LIKE
            </h2>

            <div className="gap-[1rem] md:flex lg:mb-[14rem] lg:gap-[3rem]">
              {product.others.map((item) => (
                <div
                  key={item.slug}
                  className="mb-[5.5rem] flex flex-col items-center justify-center gap-[3.2rem]"
                >
                  <Image
                    src={item.image.mobile}
                    alt="product image"
                    className="rounded-lg md:hidden"
                    width={375}
                    height={375}
                  />

                  <Image
                    src={item.image.tablet}
                    alt="product image"
                    className="hidden rounded-lg md:block lg:hidden"
                    width={768}
                    height={768}
                  />

                  <Image
                    src={item.image.desktop}
                    alt="product image"
                    className="hidden rounded-lg lg:block"
                    width={768}
                    height={768}
                  />

                  <h3 className="text-[1.8rem] font-bold text-black md:text-[2.4rem]">
                    {item.name}
                  </h3>

                  <Link href={`/${productMenu}/${item.slug}`}>
                    <button className="bg-[#d87d4a] px-10 py-5 text-[1.3rem] font-bold text-white hover:bg-[#fbaf85] md:px-14 md:py-7">
                      SEE PRODUCT
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Navigation />

          <SloganText />
        </div>
      ))}
    </div>
  )
}
