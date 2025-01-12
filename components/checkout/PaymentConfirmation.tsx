import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";
import { useCheckoutStore } from "@/stores/checkoutStore";

const PaymentConfirmation: React.FC = () => {
  const cartStore = useCartStore();
  const checkoutStore = useCheckoutStore();

  return (
    <div className="bg-[#000000bf] top-0 h-full w-full fixed cursor-pointer z-[1]">
      <div
        className="fixed bg-white w-[90%] z-10 top-[12rem] h-[73vh] overflow-y-auto
        transform -translate-x-1/2 left-1/2 p-[3.2rem] rounded-xl md:w-[70%] lg:w-[40%]
        md:h-[61vh]"
      >
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
        <h2
          className="text-black text-[2.4rem] font-bold leading-[2.8rem] mb-[1.6rem] 
          md:text-[3.2rem] md:leading-[3.6rem]"
        >
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="text-[gray] text-[1.5rem] font-medium mb-[2.4rem]">
          You will receive an email confirmation shortly.
        </p>
        <div
          className="flex flex-col bg-[#f1f1f1] rounded-xl overflow-hidden md:flex-row
          md:justify-between"
        >
          <div className="p-[2.4rem] md:w-[60%]">
            {cartStore.cartItems.map(
              (product, index) =>
                index === 0 && (
                  <div key={product.id} className="flex flex-col mb-[1.2rem]">
                    <div className=" flex justify-between items-center">
                      <div className="flex items-center gap-[1.6rem]">
                        <Image
                          src={product.image}
                          alt="product image"
                          width={50}
                          height={50}
                          className="w-[5rem]"
                        />
                        <div className="flex flex-col items-center">
                          <p className="text-black text-[1.5rem] font-bold">
                            {product.name}
                          </p>
                          <p className="text-[gray] text-[1.4rem] font-bold self-start">
                            $ {product.originalPrice}
                          </p>
                        </div>
                      </div>
                      <p className="text-[gray] text-[1.5rem] font-bold">
                        x{product.quantity}
                      </p>
                    </div>
                  </div>
                )
            )}
            {cartStore.cartItems.length > 1 && (
              <div
                className="flex justify-center items-center border-t-[1px] border-t-[gray] 
                pt-[1.2rem] text-[gray] text-[1.2rem] font-bold"
              >
                and {cartStore.cartItems.length - 1} other item(s)
              </div>
            )}
          </div>

          <div className="bg-black p-[2.5rem] md:w-[40%] md:flex md:flex-col md:justify-center">
            <p className="text-[gray] text-[1.5rem] font-medium">GRAND TOTAL</p>
            <p className="text-white text-[1.8rem] font-bold">
              $ {cartStore.totalPrice + 50}
            </p>
          </div>
        </div>
        <Link href="/">
          <button
            onClick={() => {
              cartStore.setCartItems([]);
              cartStore.setTotalPrice(0);
              cartStore.setCartItemsQuantity(0);
              checkoutStore.setPayActive(false);
            }}
            className="bg-[#d87d4a] text-white text-[1.4rem] font-bold w-full 
            p-[1.6rem] mt-[2.4rem]"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
