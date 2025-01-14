import React from 'react'
import Image from 'next/image'
import { useCartStore } from '@/stores/cartStore'
import { useTranslation } from 'react-i18next'

const Summary: React.FC = () => {
  const { t } = useTranslation()
  const { cartItems, totalPrice } = useCartStore()

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <h2 className="text-[1.3rem] font-bold text-[#d87d4a]">SUMMARY</h2>
      <ul className="flex flex-col gap-[1.6rem]">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center gap-[1.6rem]">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-[1.4rem] font-bold text-black dark:text-white">
                {item.name}
              </h3>
              <p className="text-[1.2rem] font-medium text-black dark:text-white">
                {t('quantity')}: {item.quantity}
              </p>
              <p className="text-[1.2rem] font-medium text-black dark:text-white">
                {t('price')}: ${item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-[2.4rem] flex items-center justify-between">
        <h3 className="text-[1.4rem] font-bold text-black dark:text-white">{t('total_price')}:</h3>
        <p className="text-[1.4rem] font-bold text-black dark:text-white">${totalPrice}</p>
      </div>
    </div>
  )
}

export default Summary
