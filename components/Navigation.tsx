"use client";

import headphonesImage from "../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useMenuStore } from "@/stores/menuStore";
import Link from "next/link";

export default function Navigation() {
  const menuStore = useMenuStore();
  return (
    <div
      className="flex flex-col justify-center items-center gap-[7rem] w-[100%] mb-[12rem] 
    md:flex-row md:gap-[1rem] lg:gap-[3rem]"
    >
      <Link
        href="/headphones"
        className="w-[100%]"
        onClick={() => menuStore.setMenuOpen(false)}
      >
        <div
          className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
           pt-[7rem] lg:py-[7rem] group"
        >
          <img
            src={headphonesImage.src}
            alt="headphones image"
            className="absolute w-[13rem] top-[-4.5rem] lg:w-[20rem] lg:top-[-10rem]"
          />
          <p className="text-black text-[1.5rem] font-bold mb-[1.7rem] lg:text-[1.8rem]">
            HEADPHONES
          </p>

          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[gray] text-[1.3rem] font-bold group-hover:text-[#D87D4A]">
              SHOP
            </p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>
      </Link>

      <Link
        href="/speakers"
        className="w-[100%]"
        onClick={() => menuStore.setMenuOpen(false)}
      >
        <div
          className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
           pt-[7rem] lg:py-[7rem] group"
        >
          <img
            src={speakersImage.src}
            alt="headphones image"
            className="absolute w-[13rem] top-[-4.5rem] lg:w-[20rem] lg:top-[-10rem]"
          />
          <p className="text-black text-[1.5rem] font-bold mb-[1.7rem] lg:text-[1.8rem]">
            SPEAKERS
          </p>

          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[gray] text-[1.3rem] font-bold group-hover:text-[#D87D4A]">
              SHOP
            </p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>
      </Link>

      <Link
        href="/earphones"
        className="w-[100%]"
        onClick={() => menuStore.setMenuOpen(false)}
      >
        <div
          className="relative bg-[#f1f1f1] flex flex-col justify-center items-center pb-6 rounded-xl 
         pt-[7rem] lg:py-[7rem] group"
        >
          <img
            src={earphonesImage.src}
            alt="headphones image"
            className="absolute w-[13rem] top-[-4.5rem] lg:w-[20rem] lg:top-[-8rem]"
          />
          <p className="text-black text-[1.5rem] font-bold mb-[1.7rem] lg:text-[1.8rem]">
            EARPHONES
          </p>

          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[gray] text-[1.3rem] font-bold group-hover:text-[#D87D4A]">
              SHOP
            </p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
