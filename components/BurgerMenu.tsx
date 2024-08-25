"use client";

import React from "react";
import headphonesImage from "../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useMenuStore } from "@/stores/menuStore";

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
      <div className="flex flex-col justify-center items-center gap-[7rem] w-[100%] my-[20rem]">
        <div
          className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
          w-[100%] pt-[7rem]"
        >
          <img
            src={headphonesImage.src}
            alt="headphones image"
            className="absolute w-[13rem] top-[-4.5rem]"
          />
          <p className="text-black text-[1.5rem] font-bold mb-[1.7rem]">
            HEADPHONES
          </p>
          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[gray] text-[1.3rem] font-bold">SHOP</p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>

        <div
          className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
          w-[100%] pt-[7rem]"
        >
          <img
            src={speakersImage.src}
            alt="headphones image"
            className="absolute w-[13rem] top-[-4.5rem]"
          />
          <p className="text-black text-[1.5rem] font-bold mb-[1.7rem]">
            HEADPHONES
          </p>
          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[gray] text-[1.3rem] font-bold">SHOP</p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>

        <div
          className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
          w-[100%] pt-[7rem]"
        >
          <img
            src={earphonesImage.src}
            alt="headphones image"
            className="absolute w-[13rem] top-[-4.5rem]"
          />
          <p className="text-black text-[1.5rem] font-bold mb-[1.7rem]">
            HEADPHONES
          </p>
          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[gray] text-[1.3rem] font-bold">SHOP</p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
