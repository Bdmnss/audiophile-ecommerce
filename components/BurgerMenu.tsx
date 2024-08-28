"use client";

import { useMenuStore } from "@/stores/menuStore";
import Navigation from "./Navigation";

export default function BurgerMenu() {
  const menuStore = useMenuStore();
  return (
    <div
      className={`relative w-[100%] h-[100%] bg-white top-0 ${
        menuStore.isMenuOpen
          ? "animate-slide-right-to-left"
          : "animate-slide-left-to-right"
      }`}
    >
      <div className="my-[20rem]">
        <Navigation />
      </div>
    </div>
  );
}
