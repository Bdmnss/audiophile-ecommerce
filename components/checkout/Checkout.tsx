"use client";

import Link from "next/link";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCheckoutStore } from "@/stores/checkoutStore";
import { ObjectSchema } from "yup";
import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";
import Summary from "./Summary";
import PaymentConfirmation from "./PaymentConfirmation";

export type Inputs = {
  name: string;
  email: string;
  phone: number;
  address: string;
  zip: number;
  city: string;
  country: string;
  eMoneyNumber?: number;
  eMoneyPin?: number;
};

type SchemaType = ObjectSchema<{
  name: string;
  email: string;
  phone: number;
  address: string;
  zip: number;
  city: string;
  country: string;
  eMoneyNumber?: number;
  eMoneyPin?: number;
}>;

const schema: SchemaType = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  address: yup.string().required(),
  zip: yup.number().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  eMoneyNumber: yup.number(),
  eMoneyPin: yup.number(),
});

const Checkout: React.FC = () => {
  const methods = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const checkoutStore = useCheckoutStore();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    checkoutStore.setPayActive(true);
  };

  return (
    <div className="relative">
      <div className="px-[2.4rem] py-[9rem] bg-[#fafafa] md:px-[4rem] lg:px-[16.5rem]">
        <Link href="/" className="text-[gray] text-[1.5rem] font-medium">
          Go Back
        </Link>

        <div className="bg-white mt-[2.4rem] p-[2.4rem]">
          <h1 className="text-black text-[2.8rem] font-bold mb-[3.2rem] md:text-[3.2rem]">
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
                className="bg-[#d87d4a] text-white text-[1.4rem] font-bold w-full p-[1.6rem]"
              >
                CONTINUE & PAY
              </button>
            </form>
          </FormProvider>
        </div>
      </div>

      {checkoutStore.isPayActive && <PaymentConfirmation />}
    </div>
  );
};

export default Checkout;
