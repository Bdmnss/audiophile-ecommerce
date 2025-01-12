import React from "react";
import { useFormContext } from "react-hook-form";

const PaymentDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <p className="text-[#d87d4a] text-[1.3rem] font-bold">PAYMENT DETAILS</p>

      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="eMoneyNumber"
            className={`text-black text-[1.2rem] font-bold ${
              errors.eMoneyNumber && "text-red-500"
            }`}
          >
            eMoney Number
          </label>
          <input
            type="text"
            {...register("eMoneyNumber")}
            id="eMoneyNumber"
            placeholder="238521993"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.eMoneyNumber && "border-red-500"}`}
          />
          {errors.eMoneyNumber && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.eMoneyNumber.message as string}
            </p>
          )}
        </div>

        <div className="md:w-[50%]">
          <label
            htmlFor="eMoneyPin"
            className={`text-black text-[1.2rem] font-bold ${
              errors.eMoneyPin && "text-red-500"
            }`}
          >
            eMoney PIN
          </label>
          <input
            type="text"
            {...register("eMoneyPin")}
            id="eMoneyPin"
            placeholder="6891"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.eMoneyPin && "border-red-500"}`}
          />
          {errors.eMoneyPin && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.eMoneyPin.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
