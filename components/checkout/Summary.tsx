import React from "react";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";

const Summary: React.FC = () => {
  const { cartItems, totalPrice } = useCartStore();

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <h2 className="text-[#d87d4a] text-[1.3rem] font-bold">SUMMARY</h2>
      <ul className="flex flex-col gap-[1.6rem]">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center gap-[1.6rem]">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-black text-[1.4rem] font-bold">
                {item.name}
              </h3>
              <p className="text-black text-[1.2rem] font-medium">
                Quantity: {item.quantity}
              </p>
              <p className="text-black text-[1.2rem] font-medium">
                Price: ${item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-[2.4rem]">
        <h3 className="text-black text-[1.4rem] font-bold">Total Price:</h3>
        <p className="text-black text-[1.4rem] font-bold">${totalPrice}</p>
      </div>
    </div>
  );
};

export default Summary;
