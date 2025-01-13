'use client'

import Link from 'next/link'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCheckoutStore } from '@/stores/checkoutStore'
import BillingDetails from './BillingDetails'
import ShippingInfo from './ShippingInfo'
import PaymentDetails from './PaymentDetails'
import Summary from './Summary'
import PaymentConfirmation from './PaymentConfirmation'

export type Inputs = {
  name: string
  email: string
  phone: number
  address: string
  zip: number
  city: string
  country: string
  eMoneyNumber: number
  eMoneyPin: number
}

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Email is not valid').nonempty('Email is required'),
  phone: z
    .string()
    .nonempty('Phone is required')
    .regex(/^\d{9}$/, 'Phone number must be 9 digits')
    .transform((val) => Number(val)),
  address: z.string().nonempty('Address is required').min(5, 'Address is too short'),
  zip: z
    .string()
    .nonempty('ZIP Code is required')
    .regex(/^\d{5}$/, 'ZIP Code must be 5 digits')
    .transform((val) => Number(val)),
  city: z.string().nonempty('City is required'),
  country: z.string().nonempty('Country is required'),
  eMoneyNumber: z
    .string()
    .nonempty('e-Money Number is required')
    .regex(/^\d{9}$/, 'e-Money Number must be 9 digits')
    .transform((val) => Number(val)),
  eMoneyPin: z
    .string()
    .nonempty('e-Money PIN is required')
    .regex(/^\d{4}$/, 'e-Money PIN must be 4 digits')
    .transform((val) => Number(val)),
})

const Checkout: React.FC = () => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const checkoutStore = useCheckoutStore()

  const onSubmit: SubmitHandler<Inputs> = () => {
    checkoutStore.setPayActive(true)
  }

  return (
    <div className="relative">
      <div className="bg-[#fafafa] dark:bg-[#101010] px-[2.4rem] py-[9rem] md:px-[4rem] lg:px-[16.5rem]">
        <Link href="/" className="text-[1.5rem] font-medium text-[gray]">
          Go Back
        </Link>

        <div className="mt-[2.4rem] bg-white dark:bg-black p-[2.4rem]">
          <h1 className="mb-[3.2rem] text-[2.8rem] font-bold text-black dark:text-white md:text-[3.2rem]">
            CHECKOUT
          </h1>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-[2.4rem]"
            >
              <BillingDetails
                register={methods.register}
                errors={methods.formState.errors}
              />
              <ShippingInfo />
              <PaymentDetails />
              <Summary />
              <button
                type="submit"
                className="w-full bg-[#d87d4a] p-[1.6rem] text-[1.4rem] font-bold text-white"
              >
                CONTINUE & PAY
              </button>
            </form>
          </FormProvider>
        </div>
      </div>

      {checkoutStore.isPayActive && <PaymentConfirmation />}
    </div>
  )
}

export default Checkout