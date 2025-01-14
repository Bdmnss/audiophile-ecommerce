import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Inputs } from './Checkout'
import { useTranslation } from 'react-i18next'

type BillingDetailsProps = {
  register: UseFormRegister<Inputs>
  errors: FieldErrors<Inputs>
}

export default function BillingDetails({
  register,
  errors,
}: BillingDetailsProps) {
  const { t } = useTranslation()  

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <p className="text-[1.3rem] font-bold text-[#d87d4a]">BILLING DETAILS</p>
      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="name"
            className={`text-[1.2rem] font-bold ext-black dark:text-white ${
              errors.name && 'text-red-500'
            }`}
          >
            {t('name')}
          </label>
          <input
            type="text"
            {...register('name')}
            id="name"
            placeholder="Alexei Ward"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold  outline-none focus:border-[#d87d4a] ${errors.name && 'border-red-500'}`}
          />
          {errors.name && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="md:w-[50%]">
          <label
            htmlFor="email"
            className={`text-[1.2rem] font-bold text-black dark:text-white ${
              errors.email && 'text-red-500'
            }`}
          >
            {t('email')}
          </label>
          <input
            type="text"
            {...register('email')}
            id="email"
            placeholder="alexei@mail.com"
            className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold outline-none focus:border-[#d87d4a] ${errors.email && 'border-red-500'}`}
          />
          {errors.email && (
            <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>

      <div className="md:w-[49%]">
        <label
          htmlFor="phone"
          className={`text-[1.2rem] font-bold text-black dark:text-white ${
            errors.phone && 'text-red-500'
          }`}
        >
          {t('phone')}
        </label>
        <input
          type="text"
          {...register('phone')}
          id="phone"
          placeholder="555555555"
          className={`mt-[1rem] w-full rounded-xl border border-[#d9d9d9] bg-white text-black dark:bg-black dark:text-white p-[1.6rem] text-[1.4rem] font-bold outline-none focus:border-[#d87d4a] ${errors.phone && 'border-red-500'}`}
        />
        {errors.phone && (
          <p className="mt-[1rem] text-[1.2rem] font-bold text-red-500">
            {errors.phone?.message}
          </p>
        )}
      </div>
    </div>
  )
}
