"use client";

import { useMenuStore } from "@/stores/menuStore";
import Navigation from "./Navigation";

export default function BurgerMenu() {
  const menuStore = useMenuStore();
  return (
    <div
      className={`fixed w-[100%] bg-white z-10 rounded-xl px-[4rem] ${
        menuStore.isMenuOpen
          ? "animate-slide-top-to-bottom"
          : "animate-slide-bottom-to-top"
      }`}
    >
      <div className="mt-[16rem]">
        <Navigation />
      </div>
    </div>
  );
}
