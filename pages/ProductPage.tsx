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
    <div className="pt-[9rem] px-[2.4rem] pb-[12rem]">
      <Link
        href={`/${productMenu}`}
        className="text-[gray] text-[1.5rem] font-medium"
      >
        Go Back
      </Link>

      {product.map((product) => (
        <div key={product.id}>
          <img
            src={product.image.mobile}
            alt="product image"
            className="mt-[2.4rem] mb-[4rem] rounded-lg"
          />

          {product.new && (
            <p className="text-[#d87d4a] text-[1.4rem] tracking-[1rem] mb-[2.4rem]">
              NEW PRODUCT
            </p>
          )}

          <h1 className="text-[2.8rem] text-black font-bold mb-[2.4rem]">
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
                className="text-[gray] text-[1.3rem] font-bold"
              >
                -
              </button>
              <span className="text-black text-[1.3rem] font-bold">
                {cartStore.itemsQuantity}
              </span>
              <button
                onClick={() => cartStore.addItemsQuantity()}
                className="text-[gray] text-[1.3rem] font-bold]"
              >
                +
              </button>
            </div>

            <button className="bg-[#d87d4a] text-white text-[1.3rem] font-bold py-[1rem] px-[3rem]">
              ADD TO CART
            </button>
          </div>

          <h2 className="text-black text-[2.4rem] font-bold mb-[2.4rem]">
            FEATURES
          </h2>

          <p className="text-[gray] text-[1.5rem] leading-[2.5rem] font-medium mb-[9rem]">
            {product.features}
          </p>

          <div className="mb-[9rem]">
            <h2 className="text-black text-[2.4rem] font-bold mb-[2.4rem]">
              IN THE BOX
            </h2>

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

          <div className="mb-[12rem] flex flex-col gap-[2rem]">
            <img
              src={product.gallery.first.mobile}
              alt="gallery image"
              className="rounded-xl"
            />

            <img
              src={product.gallery.second.mobile}
              alt="gallery image"
              className="rounded-xl"
            />

            <img
              src={product.gallery.third.mobile}
              alt="gallery image"
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center items-center mb-[12rem]">
            <h2 className="text-black text-[2.4rem] font-bold mb-[4rem]">
              YOU MAY ALSO LIKE
            </h2>

            {product.others.map((item) => (
              <div
                key={item.slug}
                className="flex flex-col justify-center items-center gap-[3.2rem] mb-[5.5rem]"
              >
                <img
                  src={item.image.mobile}
                  alt="product image"
                  className="rounded-lg"
                />

                <h3 className="text-black text-[1.8rem] font-bold">
                  {item.name}
                </h3>

                <Link href={`/${productMenu}/${item.slug}`}>
                  <button className="bg-[#d87d4a] px-10 py-5 text-white text-[1.3rem] font-bold">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <Navigation />

          <SloganText />
        </div>
      ))}
    </div>
  );
}
