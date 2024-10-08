"use client";

import Link from "next/link";
import data from "../data.json";
import { useCartStore } from "@/stores/cartStore";
import Navigation from "@/components/Navigation";
import SloganText from "@/components/SloganText";

export default function ProductPage({
  productMenu,
  productName,
}: {
  productMenu: string;
  productName: string;
}) {
  const cartStore = useCartStore();
  const product = data.filter((item) => item.slug === productName);

  return (
    <div className="pt-[9rem] px-[2.4rem] pb-[12rem] md:px-[4rem] lg:px-[16.5rem] lg:pt-[15rem]">
      <Link
        href={`/${productMenu}`}
        className="text-[gray] text-[1.5rem] font-medium"
      >
        Go Back
      </Link>

      {product.map((product) => (
        <div key={product.id}>
          <div className="md:flex md:gap-[7rem] md:mt-[2.4rem] lg:mt-[5.6rem] lg:gap-[12.5rem]">
            <div className="md:w-[50%]">
              <img
                src={product.image.mobile}
                alt="product image"
                className="mt-[2.4rem] mb-[4rem] rounded-lg md:hidden"
              />
              <img
                src={product.image.tablet}
                alt="product image"
                className="mb-[4rem] rounded-lg hidden md:block lg:hidden"
              />
              <img
                src={product.image.desktop}
                alt="product image"
                className="mb-[4rem] rounded-lg hidden lg:block"
              />
            </div>

            <div className="md:w-[50%] lg:flex lg:flex-col lg:justify-center">
              {product.new && (
                <p className="text-[#d87d4a] text-[1.4rem] tracking-[1rem] mb-[2.4rem]">
                  NEW PRODUCT
                </p>
              )}

              <h1 className="text-[2.8rem] text-black font-bold mb-[2.4rem] lg:text-[4rem]">
                {product.name.toUpperCase()}
              </h1>

              <p className="text-[gray] text-[1.5rem] leading-[2.5rem] font-medium mb-[2.4rem]">
                {product.description}
              </p>

              <p className="text-black text-[1.8rem] font-bold mb-[3rem]">
                $ {product.price}
              </p>

              <div className="flex items-center gap-[1.6rem] mb-[9rem]">
                <div className="bg-[#80808038] flex justify-between items-center py-[1rem] px-[2.5rem] gap-[2rem]">
                  <button
                    onClick={() => cartStore.removeItemsQuantity()}
                    className="text-[gray] text-[1.3rem] font-bold hover:text-[#d87d4a] 
                    lg:text-[1.5rem]"
                  >
                    -
                  </button>
                  <span className="text-black text-[1.3rem] font-bold">
                    {cartStore.itemsQuantity}
                  </span>
                  <button
                    onClick={() => cartStore.addItemsQuantity()}
                    className="text-[gray] text-[1.3rem] font-bold hover:text-[#d87d4a] 
                    lg:text-[1.5rem]"
                  >
                    +
                  </button>
                </div>

                <button
                  className="bg-[#d87d4a] text-white text-[1.3rem] font-bold py-[1rem] 
                  px-[3rem] hover:bg-[#fbaf85]"
                  onClick={() => {
                    const existingCartItem = cartStore.cartItems.find(
                      (cartItem) => cartItem.name === product.name
                    );

                    if (existingCartItem) {
                      existingCartItem.quantity = cartStore.itemsQuantity;
                      existingCartItem.price =
                        product.price * existingCartItem.quantity;
                      cartStore.setTotalPrice(
                        cartStore.cartItems.reduce(
                          (acc, item) => acc + item.price,
                          0
                        )
                      );
                      cartStore.setItemsQuantity(1);
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
                      ]);
                      cartStore.setCartItemsQuantity(
                        cartStore.cartItemsQuantity + 1
                      );
                      cartStore.setTotalPrice(
                        cartStore.totalPrice +
                          product.price * cartStore.itemsQuantity
                      );
                      cartStore.setItemsQuantity(1);
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
              <h2 className="text-black text-[2.4rem] font-bold mb-[2.4rem] md:text-[3.2rem]">
                FEATURES
              </h2>

              <p className="text-[gray] text-[1.5rem] leading-[2.5rem] font-medium mb-[9rem]">
                {product.features}
              </p>
            </div>

            <div
              className="mb-[9rem] md:flex md:gap-[20rem] md:justify-center lg:flex-col 
            lg:gap-0 lg:w-[50%]"
            >
              <h2 className="text-black text-[2.4rem] font-bold mb-[2.4rem] md:text-[3.2rem]">
                IN THE BOX
              </h2>

              <div>
                {product.includes.map((item, index) => (
                  <p
                    key={index}
                    className="flex items-center gap-[2.4rem] text-[gray] text-[1.5rem] font-medium mb-[1rem]"
                  >
                    <span className="text-[#d87d4a] font-bold">
                      {item.quantity}x
                    </span>{" "}
                    {item.item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mb-[12rem] flex flex-col gap-[2rem] md:grid md:grid-rows-2 
          md:grid-cols-gallery md:justify-center"
          >
            <img
              src={product.gallery.first.mobile}
              alt="gallery image"
              className="rounded-xl md:hidden"
            />

            <img
              src={product.gallery.second.mobile}
              alt="gallery image"
              className="rounded-xl md:hidden"
            />

            <img
              src={product.gallery.third.mobile}
              alt="gallery image"
              className="rounded-xl md:hidden"
            />

            <img
              src={product.gallery.first.tablet}
              alt="gallery image"
              className="rounded-xl hidden md:block row-start-1"
            />

            <img
              src={product.gallery.second.tablet}
              alt="gallery image"
              className="rounded-xl hidden md:block row-start-2"
            />

            <img
              src={product.gallery.third.tablet}
              alt="gallery image"
              className="rounded-xl hidden md:block row-span-2 h-full"
            />
          </div>

          <div className="flex flex-col justify-center items-center mb-[12rem]">
            <h2 className="text-black text-[2.4rem] font-bold mb-[4rem] md:text-[3.2rem]">
              YOU MAY ALSO LIKE
            </h2>

            <div className="md:flex gap-[1rem] lg:gap-[3rem] lg:mb-[14rem]">
              {product.others.map((item) => (
                <div
                  key={item.slug}
                  className="flex flex-col justify-center items-center gap-[3.2rem] mb-[5.5rem]"
                >
                  <img
                    src={item.image.mobile}
                    alt="product image"
                    className="rounded-lg md:hidden"
                  />

                  <img
                    src={item.image.tablet}
                    alt="product image"
                    className="rounded-lg hidden md:block lg:hidden"
                  />

                  <img
                    src={item.image.desktop}
                    alt="product image"
                    className="rounded-lg hidden lg:block"
                  />

                  <h3 className="text-black text-[1.8rem] font-bold md:text-[2.4rem]">
                    {item.name}
                  </h3>

                  <Link href={`/${productMenu}/${item.slug}`}>
                    <button
                      className="bg-[#d87d4a] px-10 py-5 text-white text-[1.3rem] 
                    font-bold md:px-14 md:py-7 hover:bg-[#fbaf85]"
                    >
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
  );
}
