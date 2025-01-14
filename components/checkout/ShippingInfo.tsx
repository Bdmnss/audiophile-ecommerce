import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const ShippingInfo: React.FC = () => {
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <p className="text-[1.3rem] font-bold text-[#d87d4a]">SHIPPING INFO</p>
      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="address"
            className={`text-[1.2rem] font-bold text-black dark:text-white ${
              errors.address && 'text-red-500'
            }`}
          >
            {t('address')}
          </label>
          <input
            type="text"
            {...register('address', { required: 'Address is required' })}
            id="address"
            placeholder="1137 Williams Avenue"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold outline-none focus:border-[#d87d4a] ${errors.address && 'border-red-500'}`}
          />
          {errors.address && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.address.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="zip"
            className={`text-[1.2rem] font-bold text-black dark:text-white ${
              errors.zip && 'text-red-500'
            }`}
          >
            {t('zip')}
          </label>
          <input
            type="text"
            {...register('zip', { required: 'ZIP Code is required' })}
            id="zip"
            placeholder="10001"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold outline-none focus:border-[#d87d4a] ${errors.zip && 'border-red-500'}`}
          />
          {errors.zip && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.zip.message as string}
            </p>
          )}
        </div>

        <div className="md:w-[50%]">
          <label
            htmlFor="city"
            className={`text-[1.2rem] font-bold text-black dark:text-white ${
              errors.city && 'text-red-500'
            }`}
          >
            {t('city')}
          </label>
          <input
            type="text"
            {...register('city', { required: 'City is required' })}
            id="city"
            placeholder="New York"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold outline-none focus:border-[#d87d4a] ${errors.city && 'border-red-500'}`}
          />
          {errors.city && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.city.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="md:w-[50%]">
        <label
          htmlFor="country"
          className={`text-[1.2rem] font-bold text-black dark:text-white ${
            errors.country && 'text-red-500'
          }`}
        >
          {t('country')}
        </label>
        <input
          type="text"
          {...register('country', { required: 'Country is required' })}
          id="country"
          placeholder="United States"
          className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold outline-none focus:border-[#d87d4a] ${errors.country && 'border-red-500'}`}
        />
        {errors.country && (
          <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
            {errors.country.message as string}
          </p>
        )}
      </div>
    </div>
  )
}

export default ShippingInfo
