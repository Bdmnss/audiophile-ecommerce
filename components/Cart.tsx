import Link from "next/link";
import { useCartStore } from "../stores/cartStore";

export default function Cart() {
  const cartStore = useCartStore();
  return (
    <div
      className={`fixed w-[90%] bg-white z-10 flex flex-col p-[3rem] rounded-xl 
        gap-[3.2rem] overflow-y-auto h-[45vh] md:h-[47vh] ${
          cartStore.isCartOpen
            ? "animate-slide-top-to-bottom mt-[10rem]"
            : "animate-slide-bottom-to-top"
        } md:w-[50%] right-[4%] lg:w-[30%]`}
    >
      <div className="flex justify-between items-center">
        <p className="text-black text-[1.8rem] font-bold">
          CART ({cartStore.cartItemsQuantity})
        </p>
        <p
          className="text-[gray] text-[1.5rem] underline cursor-pointer hover:text-[#d87d4a]"
          onClick={() => {
            cartStore.setCartItems([]);
            cartStore.setTotalPrice(0);
            cartStore.setCartItemsQuantity(0);
          }}
        >
          Remove all
        </p>
      </div>

      {cartStore.cartItemsQuantity === 0 ? (
        <div>
          <h2 className="text-black text-[3rem] mb-[3.2rem]">
            Your cart is empty
          </h2>

          <p className="text-[gray] text-[1.5rem]">
            Continue shopping on the audiophile website{" "}
            <Link
              href="/"
              className="text-[#d87d4a] font-bold"
              onClick={() => cartStore.setCartOpen(false)}
            >
              homepage
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-[2.4rem]">
          {cartStore.cartItems.map((product) => (
            <div key={product.id} className="flex justify-between items-center">
              <img
                src={product.image}
                alt="product image"
                className="w-[6.4rem] rounded-xl"
              />

              <div className="">
                <p className="text-black text-[1.5rem] font-bold">
                  {product.name}
                </p>
                <p className="text-[gray] text-[1.4rem] font-bold">
                  $ {product.originalPrice}
                </p>
              </div>

              <div className="bg-[#80808038] flex justify-between items-center py-[0.7rem] px-[1.5rem] gap-[2rem]">
                <button
                  onClick={() => {
                    product.quantity > 1
                      ? (product.quantity--,
                        cartStore.setTotalPrice(
                          cartStore.totalPrice - product.originalPrice
                        ))
                      : "";
                  }}
                  className="text-[gray] text-[2rem] font-bold hover:text-[#d87d4a]"
                >
                  -
                </button>
                <span className="text-black text-[1.3rem] font-bold">
                  {product.quantity}
                </span>
                <button
                  onClick={() => {
                    product.quantity++;
                    cartStore.setTotalPrice(
                      cartStore.totalPrice + product.originalPrice
                    );
                  }}
                  className="text-[gray] text-[2rem] font-bold hover:text-[#d87d4a]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <p className="text-[gray] text-[1.5rem] font-medium">TOTAL</p>
        <p className="text-black text-[1.8rem] font-bold">
          $ {cartStore.totalPrice}
        </p>
      </div>

      <Link href="/checkout" passHref>
        <button
          onClick={() => cartStore.setCartOpen(false)}
          disabled={cartStore.cartItemsQuantity === 0}
          className="bg-[#d87d4a] text-white text-[1.5rem] py-[1rem] px-[2rem] rounded-lg 
          disabled:opacity-50 w-[100%] hover:bg-[#fbaf85]"
        >
          CHECKOUT
        </button>
      </Link>
    </div>
  );
}
