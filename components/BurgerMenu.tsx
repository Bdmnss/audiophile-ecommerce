"use client";

import { useMenuStore } from "@/stores/menuStore";
import Navigation from "./Navigation";

export default function BurgerMenu() {
  const menuStore = useMenuStore();
  return (
    <div
      className={`fixed w-[100%] h-[80%] bg-white z-10 ${
        menuStore.isMenuOpen
          ? "animate-slide-top-to-bottom"
          : "animate-slide-bottom-to-top"
      }`}
    >
      <div className="my-[14rem]">
        <Navigation />
      </div>
    </div>
  );
}
