"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import { useCheckoutStore } from "@/stores/checkoutStore";

type Inputs = {
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

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("eMoney");

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email is not valid"),
    phone: yup
      .number()
      .required("Phone is required")
      .typeError("Phone number must be a valid number")
      .test(
        "number length",
        "Phone number must be 9 digits",
        (val) => val?.toString().length === 9
      ),
    address: yup
      .string()
      .required("Address is required")
      .min(5, "Address is too short"),
    zip: yup
      .number()
      .required("ZIP Code is required")
      .typeError("ZIP Code must be a valid number")
      .test(
        "number length",
        "ZIP Code must be 5 digits",
        (val) => val?.toString().length === 5
      ),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    eMoneyNumber: yup
      .number()
      .required("e-Money Number is required")
      .typeError("e-Money Number must be a valid number")
      .test(
        "number length",
        "e-Money Number must be 9 digits",
        (val) => val?.toString().length === 9
      )
      .test(
        "is required",
        "e-Money Number is required",
        () => selectedPayment !== "eMoney"
      ),
    eMoneyPin: yup
      .number()
      .required("e-Money PIN is required")
      .typeError("e-Money PIN must be a valid number")
      .test(
        "number length",
        "e-Money PIN must be 4 digits",
        (val) => val?.toString().length === 4
      )
      .test(
        "is required",
        "e-Money Number is required",
        () => selectedPayment !== "eMoney"
      ),
  });

  const cartStore = useCartStore();
  const checkoutStore = useCheckoutStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver<Inputs>(schema),
  });

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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[3.2rem]"
          >
            <div className="flex flex-col gap-[2.4rem]">
              <p className="text-[#d87d4a] text-[1.3rem] font-bold">
                BILLING DETAILS
              </p>
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
            ${errors.name && "border-red-500"}`}
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
            ${errors.name && "border-red-500"}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                    {errors.phone?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[2.4rem]">
              <p className="text-[#d87d4a] text-[1.3rem] font-bold">
                SHIPPING INFO
              </p>

              <div>
                <label
                  htmlFor="address"
                  className={`text-black text-[1.2rem] font-bold ${
                    errors.address && "text-red-500"
                  }`}
                >
                  Your Address
                </label>
                <input
                  type="text"
                  {...register("address")}
                  id="address"
                  placeholder="1137 Williams Avenue"
                  className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
                />
                {errors.address && (
                  <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                    {errors.address?.message}
                  </p>
                )}
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
                    {...register("zip")}
                    id="zip"
                    placeholder="10001"
                    className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                      {errors.zip?.message}
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
                    {...register("city")}
                    id="city"
                    placeholder="New York"
                    className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                      {errors.city?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="md:w-[49%]">
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
                  {...register("country")}
                  id="country"
                  placeholder="United States"
                  className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
                />
                {errors.country && (
                  <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                    {errors.country?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[2.4rem]">
              <p className="text-[#d87d4a] text-[1.3rem] font-bold">
                Payment Details
              </p>

              <div className="flex flex-col">
                <p className="text-black text-[1.2rem] font-bold">
                  Payment Method
                </p>
                <div className="flex flex-col md:flex-row md:gap-[1.6rem]">
                  <div
                    className={`flex items-center gap-5 w-full p-[1.6rem] border mt-[1rem] rounded-xl 
                mb-[1.6rem] ${
                  selectedPayment === "eMoney"
                    ? "border-[#d87d4a]"
                    : "border-[#d9d9d9]"
                } md:w-[50%]`}
                    onClick={() => setSelectedPayment("eMoney")}
                  >
                    <label className="custom-radio">
                      <input
                        type="radio"
                        id="eMoney"
                        name="payment"
                        checked={selectedPayment === "eMoney"}
                        onChange={() => setSelectedPayment("eMoney")}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label
                      htmlFor="eMoney"
                      className="text-black text-[1.4rem]"
                    >
                      e-Money
                    </label>
                  </div>

                  <div
                    className={`flex items-center gap-5 w-full p-[1.6rem] border mt-[1rem] rounded-xl 
                mb-[1.6rem] ${
                  selectedPayment === "cash"
                    ? "border-[#d87d4a]"
                    : "border-[#d9d9d9]"
                } md:w-[50%]`}
                    onClick={() => setSelectedPayment("cash")}
                  >
                    <label className="custom-radio">
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        checked={selectedPayment === "cash"}
                        onChange={() => setSelectedPayment("cash")}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label htmlFor="cash" className="text-black text-[1.4rem]">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>

              {selectedPayment === "eMoney" ? (
                <div className="flex flex-col gap-[2.4rem] md:flex-row md:gap-[1.6rem]">
                  <div className="md:w-[50%]">
                    <label
                      htmlFor="eMoneyNumber"
                      className={`text-black text-[1.2rem] font-bold ${
                        errors.eMoneyNumber && "text-red-500"
                      }`}
                    >
                      e-Money Number
                    </label>
                    <input
                      type="text"
                      {...register("eMoneyNumber")}
                      id="eMoneyNumber"
                      placeholder="238521993"
                      className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
                    />
                    {errors.eMoneyNumber && (
                      <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                        {errors.eMoneyNumber?.message}
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
                      e-Money PIN
                    </label>
                    <input
                      type="text"
                      {...register("eMoneyPin")}
                      id="eMoneyPin"
                      placeholder="6891"
                      className={`text-black text-[1.4rem] font-bold w-full p-[1.6rem] border 
            border-[#d9d9d9] mt-[1rem] rounded-xl focus:border-[#d87d4a] outline-none 
            ${errors.name && "border-red-500"}`}
                    />
                    {errors.eMoneyPin && (
                      <p className="text-red-500 text-[1.2rem] font-bold mt-[1rem]">
                        {errors.eMoneyPin?.message}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <svg
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-[2rem]"
                  >
                    <path
                      d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                      fill="#D87D4A"
                    />
                  </svg>
                  <p className="text-[gray] text-[1.5rem] font-medium">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[3.2rem]">
              <h2 className="text-black text-[1.8rem] font-bold">SUMMARY</h2>

              {cartStore.cartItems.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <div className=" flex justify-between items-center">
                    <div className="flex items-center gap-[1.6rem]">
                      <img
                        src={product.image}
                        alt="product image"
                        className="w-[6.4rem] rounded-xl"
                      />
                      <div className="flex flex-col">
                        <p className="text-black text-[1.5rem] font-bold">
                          {product.name}
                        </p>
                        <p className="text-[gray] text-[1.4rem] font-bold">
                          $ {product.originalPrice}
                        </p>
                      </div>
                    </div>
                    <p className="text-[gray] text-[1.5rem] font-bold">
                      x{product.quantity}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[gray] text-[1.5rem] font-medium">TOTAL</p>
                  <p className="text-black text-[1.8rem] font-bold">
                    $ {cartStore.totalPrice}
                  </p>
                </div>
                <div className="flex justify-between mb-[2.4rem]">
                  <p className="text-[gray] text-[1.5rem] font-medium">
                    SHIPPING
                  </p>
                  <p className="text-black text-[1.8rem] font-bold">$ 50</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[gray] text-[1.5rem] font-medium">
                    GRAND TOTAL
                  </p>
                  <p className="text-[#d87d4a] text-[1.8rem] font-bold">
                    $ {cartStore.totalPrice + 50}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#d87d4a] text-white text-[1.4rem] font-bold w-full p-[1.6rem] "
            >
              CONTINUE & PAY
            </button>
          </form>
        </div>
      </div>

      {checkoutStore.isPayActive && (
        <div className="bg-[#000000bf] top-0 h-full w-full fixed cursor-pointer z-[1]">
          <div
            className="fixed bg-white w-[90%] z-10 top-[12rem] h-[73vh] overflow-y-auto
            transform -translate-x-1/2 left-1/2 p-[3.2rem] rounded-xl md:w-[70%] lg:w-[40%]
            md:h-[61vh]"
          >
            <svg
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-[2.4rem]"
            >
              <g fill="none">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
            <h2
              className="text-black text-[2.4rem] font-bold leading-[2.8rem] mb-[1.6rem] 
            md:text-[3.2rem] md:leading-[3.6rem]"
            >
              THANK YOU FOR YOUR ORDER
            </h2>
            <p className="text-[gray] text-[1.5rem] font-medium mb-[2.4rem]">
              You will receive an email confirmation shortly.
            </p>
            <div
              className="flex flex-col bg-[#f1f1f1] rounded-xl overflow-hidden md:flex-row
            md:justify-between"
            >
              <div className="p-[2.4rem] md:w-[60%]">
                {cartStore.cartItems.map(
                  (product, index) =>
                    index === 0 && (
                      <div
                        key={product.id}
                        className="flex flex-col mb-[1.2rem]"
                      >
                        <div className=" flex justify-between items-center">
                          <div className="flex items-center gap-[1.6rem]">
                            <img
                              src={product.image}
                              alt="product image"
                              className="w-[5rem]"
                            />
                            <div className="flex flex-col items-center">
                              <p className="text-black text-[1.5rem] font-bold">
                                {product.name}
                              </p>
                              <p className="text-[gray] text-[1.4rem] font-bold self-start">
                                $ {product.originalPrice}
                              </p>
                            </div>
                          </div>
                          <p className="text-[gray] text-[1.5rem] font-bold">
                            x{product.quantity}
                          </p>
                        </div>
                      </div>
                    )
                )}
                {cartStore.cartItems.length > 1 && (
                  <div
                    className="flex justify-center items-center border-t-[1px] border-t-[gray] 
            pt-[1.2rem] text-[gray] text-[1.2rem] font-bold"
                  >
                    and ${cartStore.cartItems.length - 1} other item(s)
                  </div>
                )}
              </div>

              <div className="bg-black p-[2.5rem] md:w-[40%] md:flex md:flex-col md:justify-center">
                <p className="text-[gray] text-[1.5rem] font-medium">
                  GRAND TOTAL
                </p>
                <p className="text-white text-[1.8rem] font-bold">
                  $ {cartStore.totalPrice + 50}
                </p>
              </div>
            </div>
            <Link href="/">
              <button
                onClick={() => {
                  cartStore.setCartItems([]);
                  cartStore.setTotalPrice(0);
                  cartStore.setCartItemsQuantity(0);
                  checkoutStore.setPayActive(false);
                }}
                className="bg-[#d87d4a] text-white text-[1.4rem] font-bold w-full 
              p-[1.6rem] mt-[2.4rem]"
              >
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
