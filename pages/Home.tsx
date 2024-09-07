"use client";

import productSpeakerImage from "../public/assets/home/mobile/image-speaker-zx9.png";
import Navigation from "@/components/Navigation";
import SloganText from "@/components/SloganText";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div>
        <div
          className="bg-header-home-mobile md:bg-header-home-tablet bg-center bg-cover 
          bg-no-repeat h-[55rem] flex flex-col justify-center items-center text-center px-10 
          mb-[9rem] md:px-96 lg:header-home-desktop lg:h-[80rem] lg:mb-[20rem]"
        >
          <p className="text-[gray] text-[1.4rem] tracking-[1rem] mb-[1.6rem]">
            NEW PRODUCT
          </p>
          <h2
            className="text-white text-[3.6rem] font-bold leading-[4rem] mb-[2.4rem] 
          md:text-[5.6rem] md:leading-[5.8rem]"
          >
            XX99 Mark II Headphones
          </h2>
          <p className="text-[gray] text-[1.5rem] mb-[2.8rem] leading-[2.5rem]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
            <button
              className="bg-[#d87d4a] px-10 py-5 text-white text-[1.3rem] font-bold 
            md:px-14 md:py-7 hover:bg-[#fbaf85]"
            >
              SEE PRODUCT
            </button>
          </Link>
        </div>

        <div
          className="flex flex-col justify-center items-center px-[2.4rem] pb-[12rem] 
        md:px-[4rem] lg:px-[16.5rem]"
        >
          <Navigation />
          <div
            className="bg-[#d87d4a] w-[100%] bg-home-circles bg-center bg-cover bg-no-repeat
        flex flex-col justify-center items-center text-center mb-[2.4rem] py-[5.5rem] rounded-lg
        md:px-80 lg:flex-row lg:gap-[13rem]"
          >
            <img
              src={productSpeakerImage.src}
              alt="speaker image"
              className="w-[15rem] mb-[3.2rem] md:w-[20rem] lg:w-[30rem]"
            />
            <div>
              <h2
                className="text-white text-[3.6rem] leading-[4rem] font-bold mb-[2.4rem] 
            md:text-[5.6rem] md:leading-[5.8rem]"
              >
                ZX9 SPEAKER
              </h2>
              <p className="text-white text-[1.5rem] leading-[2.5rem] font-medium mb-[2.4rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/speakers/zx9-speaker">
                <button
                  className="bg-black px-10 py-5 text-white text-[1.3rem] font-bold 
              md:px-14 md:py-7 hover:bg-[#4c4c4c]"
                >
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>

          <div
            className="w-[100%] h-[32rem] bg-zx7-speaker-background-mobile bg-no-repeat bg-cover mb-[2.4rem] 
        rounded-lg flex flex-col justify-center items-start pl-[2.4rem] 
        md:bg-zx7-speaker-background-tablet lg:bg-zx7-speaker-background-desktop lg:pl-[10rem]"
          >
            <h2 className="text-black text-[2.8rem] font-bold mb-[3.2rem]">
              ZX7 SPEAKER
            </h2>
            <Link href="/speakers/zx7-speaker">
              <button
                className="px-10 py-5 text-black text-[1.3rem] font-bold border-[1px] 
          border-black hover:bg-black hover:text-white"
              >
                SEE PRODUCT
              </button>
            </Link>
          </div>

          <div className="w-[100%] md:flex md:gap-[1rem]">
            <div
              className="w-[100%] h-[20rem] bg-YX1-earphones-background-mobile bg-cover 
              bg-no-repeat rounded-lg mb-[2.4rem] md:bg-YX1-earphones-background-tablet 
              md:h-[32rem] lg:bg-YX1-earphones-background-desktop"
            ></div>

            <div
              className="w-[100%] bg-[#f1f1f1] py-[4.1rem] px-[2.4rem] mb-[12rem] rounded-lg 
            md:h-[32rem] lg:flex lg:flex-col lg:justify-center lg:pl-[10rem]"
            >
              <h2 className="text-black text-[2.8rem] font-bold mb-[3.2rem]">
                YX1 EARPHONES
              </h2>
              <Link href="/earphones/yx1-earphones">
                <button
                  className="bg-[#f1f1f100] px-10 py-5 text-black text-[1.3rem] font-bold border-[1px] 
          border-black hover:bg-black hover:text-white"
                >
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>

          <SloganText />
        </div>
      </div>
    </main>
  );
}
