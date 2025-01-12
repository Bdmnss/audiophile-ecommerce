'use client'

import headphonesImage from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImage from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesImage from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import { useMenuStore } from '@/stores/menuStore'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const menuStore = useMenuStore()
  return (
    <div className="mb-[12rem] flex w-[100%] flex-col items-center justify-center gap-[7rem] md:flex-row md:gap-[1rem] lg:gap-[3rem]">
      <Link
        href="/headphones"
        className="w-[100%]"
        onClick={() => menuStore.setMenuOpen(false)}
      >
        <div className="group relative flex flex-col items-center justify-center rounded-xl bg-[#f1f1f1] pb-6 pt-[7rem] lg:py-[7rem]">
          <Image
            src={headphonesImage.src}
            alt="headphones image"
            className="absolute top-[-4.5rem] w-[13rem] lg:top-[-10rem] lg:w-[20rem]"
            width={260}
            height={260}
          />
          <p className="mb-[1.7rem] text-[1.5rem] font-bold text-black lg:text-[1.8rem]">
            HEADPHONES
          </p>

          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[1.3rem] font-bold text-[gray] group-hover:text-[#D87D4A]">
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
        <div className="group relative flex flex-col items-center justify-center rounded-xl bg-[#f1f1f1] pb-6 pt-[7rem] lg:py-[7rem]">
          <Image
            src={speakersImage.src}
            alt="headphones image"
            className="absolute top-[-4.5rem] w-[13rem] lg:top-[-10rem] lg:w-[20rem]"
            width={260}
            height={260}
          />
          <p className="mb-[1.7rem] text-[1.5rem] font-bold text-black lg:text-[1.8rem]">
            SPEAKERS
          </p>

          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[1.3rem] font-bold text-[gray] group-hover:text-[#D87D4A]">
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
        <div className="group relative flex flex-col items-center justify-center rounded-xl bg-[#f1f1f1] pb-6 pt-[7rem] lg:py-[7rem]">
          <Image
            src={earphonesImage.src}
            alt="headphones image"
            className="absolute top-[-4.5rem] w-[13rem] lg:top-[-8rem] lg:w-[20rem]"
            width={260}
            height={260}
          />
          <p className="mb-[1.7rem] text-[1.5rem] font-bold text-black lg:text-[1.8rem]">
            EARPHONES
          </p>

          <div className="flex items-center gap-[1.3rem]">
            <p className="text-[1.3rem] font-bold text-[gray] group-hover:text-[#D87D4A]">
              SHOP
            </p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" fill="none" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}
