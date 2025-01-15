'use client'

import Image from 'next/image'
import data from '@/data.json'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function ProductMenu({
  productMenuName,
}: {
  productMenuName: string
}) {
  const productMenu = data.filter((item) => item.category === productMenuName)
  const { t } = useTranslation()

  return (
    <div className="bg-[#f1f1f1] pb-[12rem] dark:bg-[#101010]">
      <div className="flex items-center justify-center bg-black pb-[3.2rem] pt-[11rem] md:pb-[7.2rem] md:pt-[15rem]">
        <h1 className="text-[2.8rem] font-bold text-white md:text-[4rem]">
          {t(productMenuName)?.toString().toUpperCase()}
        </h1>
      </div>
      <div className="px-[2.4rem] md:px-[4rem] lg:px-[16.5rem]">
        {productMenu.map((item, index) => (
          <div
            key={item.id}
            className={`my-[6.5rem] flex flex-col items-center justify-center text-center lg:mb-[16rem] lg:flex-row lg:justify-between ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:w-[50%]">
              <Image
                src={item.categoryImage.mobile}
                alt="product image"
                className="mb-[3.2rem] rounded-lg md:hidden"
                width={375}
                height={375}
              />
              <Image
                src={item.categoryImage.tablet}
                alt="product image"
                className="mb-[3.2rem] hidden h-[35rem] rounded-lg md:block lg:hidden"
                width={768}
                height={768}
              />
              <Image
                src={item.categoryImage.desktop}
                alt="product image"
                className="hidden rounded-lg lg:block"
                width={768}
                height={768}
              />
            </div>
            <div className="lg:w-[40%]">
              <h2 className="mb-[2.4rem] text-[2.4rem] font-bold text-black dark:text-white md:text-[3.2rem]">
                {item.name}
              </h2>
              <p className="mb-[2.4rem] text-[1.5rem] text-[gray] dark:text-gray-400">
                {item.description}
              </p>
              <Link href={`/${productMenuName}/${item.slug}`}>
                <button className="bg-[#d87d4a] px-[2.4rem] py-[1.2rem] text-[1.3rem] font-bold text-white hover:bg-[#fbaf85]">
                  {t('see_product')}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
