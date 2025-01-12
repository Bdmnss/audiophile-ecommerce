import React from "react";
import { useFormContext } from "react-hook-form";

const ShippingInfo: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[2.4rem]">
      <p className="text-[#d87d4a] text-[1.3rem] font-bold">SHIPPING INFO</p>
      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="address"
            className={`text-black text-[1.2rem] font-bold ${
              errors.address && "text-red-500"
            }`}
          >
            Address
          </label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            id="address"
            placeholder="1137 Williams Avenue"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.address && "border-red-500"}`}
          />
          {errors.address && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.address.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
        <div className="md:w-[50%]">
          <label
            htmlFor="zip"
            className={`text-black text-[1.2rem] font-bold ${
              errors.zip && "text-red-500"
            }`}
          >
            ZIP Code
          </label>
          <input
            type="text"
            {...register("zip", { required: "ZIP Code is required" })}
            id="zip"
            placeholder="10001"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.zip && "border-red-500"}`}
          />
          {errors.zip && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.zip.message as string}
            </p>
          )}
        </div>

        <div className="md:w-[50%]">
          <label
            htmlFor="city"
            className={`text-black text-[1.2rem] font-bold ${
              errors.city && "text-red-500"
            }`}
          >
            City
          </label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            id="city"
            placeholder="New York"
            className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.city && "border-red-500"}`}
          />
          {errors.city && (
            <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
              {errors.city.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="md:w-[50%]">
        <label
          htmlFor="country"
          className={`text-black text-[1.2rem] font-bold ${
            errors.country && "text-red-500"
          }`}
        >
          Country
        </label>
        <input
          type="text"
          {...register("country", { required: "Country is required" })}
          id="country"
          placeholder="United States"
          className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.country && "border-red-500"}`}
        />
        {errors.country && (
          <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
            {errors.country.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default ShippingInfo;
