import { useMenuStore } from "@/stores/menuStore";

export default function () {
  const menuStore = useMenuStore();
  return (
    <div
      className={`bg-black h-[100%] w-[100%] opacity-75 fixed cursor-pointer z-[1] ${
        menuStore.isMenuOpen ? "flex" : "hidden"
      }`}
      onClick={() => menuStore.setMenuOpen(false)}
    ></div>
  );
}
