import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "./Checkout";

type BillingDetailsProps = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

export default function BillingDetails({
  register,
  errors,
}: BillingDetailsProps) {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <p className="text-[#d87d4a] text-[1.3rem] font-bold">BILLING DETAILS</p>
      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="name"
            className={`text-black text-[1.2rem] font-bold ${
              errors.name && "text-red-500"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="Alexei Ward"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="md:w-[50%]">
          <label
            htmlFor="email"
            className={`text-black text-[1.2rem] font-bold ${
              errors.email && "text-red-500"
            }`}
          >
            Email Address
          </label>
          <input
            type="text"
            {...register("email")}
            id="email"
            placeholder="alexei@mail.com"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.email && "border-red-500"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>

      <div className="md:w-[49%]">
        <label
          htmlFor="phone"
          className={`text-black text-[1.2rem] font-bold ${
            errors.phone && "text-red-500"
          }`}
        >
          Phone Number
        </label>
        <input
          type="text"
          {...register("phone")}
          id="phone"
          placeholder="555555555"
          className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.phone && "border-red-500"}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
            {errors.phone?.message}
          </p>
        )}
      </div>
    </div>
  );
}
