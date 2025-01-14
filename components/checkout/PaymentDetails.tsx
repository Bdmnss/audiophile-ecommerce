import React from 'react'
import { useFormContext } from 'react-hook-form'

const PaymentDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <p className="text-[1.3rem] font-bold text-[#d87d4a]">PAYMENT DETAILS</p>

      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="eMoneyNumber"
            className={`text-[1.2rem] font-bold text-black dark:text-white ${
              errors.eMoneyNumber && 'text-red-500'
            }`}
          >
            eMoney Number
          </label>
          <input
            type="text"
            {...register('eMoneyNumber')}
            id="eMoneyNumber"
            placeholder="238521993"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white p-[1.6rem] text-[1.4rem] font-bold text-black outline-none focus:border-[#d87d4a] dark:bg-black dark:text-white ${
              errors.eMoneyNumber && 'border-red-500'
            }`}
          />
          {errors.eMoneyNumber && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.eMoneyNumber.message as string}
            </p>
          )}
        </div>

        <div className="md:w-[50%]">
          <label
            htmlFor="eMoneyPin"
            className={`text-[1.2rem] font-bold text-black dark:text-white ${
              errors.eMoneyPin && 'text-red-500'
            }`}
          >
            eMoney PIN
          </label>
          <input
            type="text"
            {...register('eMoneyPin')}
            id="eMoneyPin"
            placeholder="6891"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white p-[1.6rem] text-[1.4rem] font-bold text-black outline-none focus:border-[#d87d4a] dark:bg-black dark:text-white ${
              errors.eMoneyPin && 'border-red-500'
            }`}
          />
          {errors.eMoneyPin && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.eMoneyPin.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
