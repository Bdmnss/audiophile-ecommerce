'use client'

import productSpeakerImage from '@/public/assets/home/desktop/image-speaker-zx9.png'
import Navigation from '@/components/Navigation'
import SloganText from '@/components/SloganText'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main className="bg-[#f1f1f1] dark:bg-[#101010]">
      <div>
        <div className="lg:header-home-desktop mb-[9rem] flex h-[55rem] flex-col items-center justify-center bg-header-home-mobile bg-cover bg-center bg-no-repeat px-10 text-center md:bg-header-home-tablet md:px-96 lg:mb-[20rem] lg:h-[80rem]">
          <p className="mb-[1.6rem] text-[1.4rem] tracking-[1rem] text-[gray]">
            {t('new_product')}
          </p>
          <h2 className="mb-[2.4rem] text-[3.6rem] font-bold leading-[4rem] text-white md:text-[5.6rem] md:leading-[5.8rem]">
            XX99 Mark II Headphones
          </h2>
          <p className="mb-[2.8rem] text-[1.5rem] leading-[2.5rem] text-[gray]">
            {t('experience')}
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
            <button className="bg-[#d87d4a] px-10 py-5 text-[1.3rem] font-bold text-white hover:bg-[#fbaf85] md:px-14 md:py-7">
              {t('see_product')}
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center px-[2.4rem] pb-[12rem] md:px-[4rem] lg:px-[16.5rem]">
          <Navigation />
          <div className="mb-[2.4rem] flex w-[100%] flex-col items-center justify-center rounded-lg bg-[#d87d4a] bg-home-circles bg-cover bg-center bg-no-repeat py-[5.5rem] text-center md:px-80 lg:flex-row lg:gap-[13rem]">
            <Image
              src={productSpeakerImage.src}
              alt="speaker image"
              className="mb-[3.2rem] w-[15rem] md:w-[20rem] lg:w-[30rem]"
              width={300}
              height={300}
            />
            <div>
              <h2 className="mb-[2.4rem] text-[3.6rem] font-bold leading-[4rem] text-white md:text-[5.6rem] md:leading-[5.8rem]">
                ZX9 SPEAKER
              </h2>
              <p className="mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] text-white">
                {t('upgrade_speakers')}
              </p>
              <Link href="/speakers/zx9-speaker">
                <button className="bg-black px-10 py-5 text-[1.3rem] font-bold text-white hover:bg-[#4c4c4c] md:px-14 md:py-7">
                  {t('see_product')}
                </button>
              </Link>
            </div>
          </div>

          <div className="mb-[2.4rem] flex h-[32rem] w-[100%] flex-col items-start justify-center rounded-lg bg-zx7-speaker-background-mobile bg-cover bg-no-repeat pl-[2.4rem] md:bg-zx7-speaker-background-tablet lg:bg-zx7-speaker-background-desktop lg:pl-[10rem]">
            <h2 className="mb-[3.2rem] text-[2.8rem] font-bold text-black">
              ZX7 SPEAKER
            </h2>
            <Link href="/speakers/zx7-speaker">
              <button className="border-[1px] border-black px-10 py-5 text-[1.3rem] font-bold text-black hover:bg-black hover:text-white">
                {t('see_product')}
              </button>
            </Link>
          </div>

          <div className="w-[100%] md:flex md:gap-[1rem]">
            <div className="mb-[2.4rem] h-[20rem] w-[100%] rounded-lg bg-YX1-earphones-background-mobile bg-cover bg-no-repeat md:h-[32rem] md:bg-YX1-earphones-background-tablet lg:bg-YX1-earphones-background-desktop"></div>

            <div className="mb-[12rem] w-[100%] rounded-lg bg-[#f1f1f1] px-[2.4rem] py-[4.1rem] md:h-[32rem] lg:flex lg:flex-col lg:justify-center lg:pl-[10rem]">
              <h2 className="mb-[3.2rem] text-[2.8rem] font-bold text-black">
                YX1 EARPHONES
              </h2>
              <Link href="/earphones/yx1-earphones">
                <button className="border-[1px] border-black bg-[#f1f1f100] px-10 py-5 text-[1.3rem] font-bold text-black hover:bg-black hover:text-white">
                  {t('see_product')}
                </button>
              </Link>
            </div>
          </div>

          <SloganText />
        </div>
      </div>
    </main>
  )
}
