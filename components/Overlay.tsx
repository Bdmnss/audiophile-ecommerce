import { useMenuStore } from "@/stores/menuStore";
import { useCartStore } from "@/stores/cartStore";

export default function () {
  const menuStore = useMenuStore();
  const cartStore = useCartStore();
  return (
    <div
      className={`bg-black h-[100%] w-[100%] opacity-75 fixed cursor-pointer z-[1] ${
        menuStore.isMenuOpen ? "flex" : cartStore.isCartOpen ? "flex" : "hidden"
      }`}
      onClick={() => {
        menuStore.setMenuOpen(false);
        cartStore.setCartOpen(false);
      }}
    ></div>
  );
}
