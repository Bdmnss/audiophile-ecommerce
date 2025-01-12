import React from 'react'

export default function SloganText() {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:gap-[12.5rem]">
      <div className="mb-[4rem] h-[30rem] w-[100%] rounded-lg bg-best-gear-mobile bg-cover bg-no-repeat md:bg-best-gear-tablet lg:h-[59rem] lg:w-[50%] lg:bg-best-gear-desktop"></div>

      <div className="flex flex-col items-center justify-center text-center md:px-10 lg:w-[50%] lg:text-left">
        <h2 className="mb-[3.2rem] text-[2.8rem] font-bold text-black md:text-[4rem] md:leading-[4.4rem]">
          BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
          GEAR
        </h2>

        <p className="text-[1.5rem] font-medium leading-[2.5rem] text-[gray]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}
