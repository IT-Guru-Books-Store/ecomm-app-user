"use client";
import { React, useState } from "react";
import Image from "next/image";
import OrderItem from "@/components/orderItem/OrderItem";
import TextBox from "@/components/textBox/TextBox";
import paymentImg from "@/assets/images/payment-options.png";

const Checkout = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[22px] font-bold text-[#073763] mt-4 ml-3">
        Checkout
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-[50px]">
        {/* billing details */}
        <div className="px-3">
          <h2 className="text-xl">Billing Details</h2>
          {/* form */}
          <form>
            <div className="grid md:grid-cols-2 gap-x-[32px]">
              <div>
                <TextBox
                  placeholder={"Enter Your First Name"}
                  label={"First Name"}
                />
              </div>
              <div>
                <TextBox
                  placeholder={"Enter Your Last Name"}
                  label={"Last Name"}
                />
              </div>
            </div>
            <div>
              <TextBox placeholder={"Enter Your Address"} label={"Address"} />
            </div>
            <div>
              <TextBox placeholder={"Enter Your City"} label={"City"} />
            </div>
            <div>
              <TextBox
                placeholder={"Enter Postal Code"}
                label={"Postal Code"}
              />
            </div>
            <div>
              <TextBox
                placeholder={"Enter Your Mobile Number"}
                label={"Mobile Number 1"}
              />
            </div>
            <div>
              <TextBox
                placeholder={"Enter Another Mobile Number"}
                label={"Mobile Number 2"}
              />
            </div>
            <div>
              <TextBox placeholder={"Enter Your Email"} label={"Email"} />
            </div>
            <div>
              <label for="Order Notes" class="block mb-2 text-sm">
                Order Notes
              </label>
              <textarea
                id="Order Notes"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-600 placeholder-gray-400"
                placeholder="Notes about your order, eg:- special notes for delivery"
              />
            </div>
          </form>
        </div>
        {/* Right Coloumn */}
        <div className="flex flex-col w-full">
          {/* Your Order */}
          <h2 className="text-xl">Your Order</h2>
          <div className="max-w-[500px] mt-5 lg:mt-0 mx-[22%]">
            <div className="rounded-lg text-black my-2 py-5 shadow-2xl">
              <div className="flex justify-center mb-5">
                <h1 className="text-lg ">Product</h1>
              </div>
              <div>
                <OrderItem />
              </div>
              <div className="flex justify-center mb-5">
                <h1 className="text-lg ">Overview</h1>
              </div>
              <div className="flex flex-col gap-3 mx-5 font-semibold text-gray-400">
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>Rs. 400</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="bg-green-500 rounded-md text-white p-1">
                    Free
                  </span>
                </div>
              </div>
              <hr className="h-px my-5 bg-gray-200 border-0 mx-5"></hr>
              <div className=" text-lg flex justify-between mx-5">
                <span>Total</span>
                <span>Rs.400 </span>
              </div>
            </div>
            {/* <button
              type="button"
              className="w-[100%] font-bold text-lg text-white bg-[#073763] py-2.5 px-5 rounded-lg mb-8"
            >
              Proceed to Checkout
            </button> */}
          </div>
          {/* Payment method */}
          <h2 className="text-xl">Payment method</h2>

          <div className="max-w-[500px] mt-5 lg:mt-0 mx-[22%]">
            <div className="rounded-lg text-black my-2 py-5 shadow-2xl">
              {/* card payment */}
              <div className="flex">
                <div class="flex flex-col w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <div className="flex flex-row items-center">
                    <input
                      id="Card-Payment"
                      type="radio"
                      value=""
                      name="Payment-method"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="Payment-method"
                      class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Card Payment
                    </label>
                  </div>
                  <div>
                    <Image src={paymentImg} />
                  </div>
                  <div>
                    <p>
                      Pay by Visa, MasterCard, AMEX, eZcash, mCash or Internet
                      Banking via PayHere.
                    </p>
                  </div>
                </div>
              </div>
              {/* Cash on Delivery */}
              <div className="flex mb-5">
                {/* card payment */}
                <div class="flex flex-col w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <div className="flex flex-row items-center">
                    <input
                      id="Cash On Delivery"
                      type="radio"
                      value=""
                      name="Payment-method"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="Payment-method"
                      class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </div>

              <hr className="h-px my-5 bg-gray-200 border-0 mx-5"></hr>
            </div>
            {/* <button
  type="button"
  className="w-[100%] font-bold text-lg text-white bg-[#073763] py-2.5 px-5 rounded-lg mb-8"
>
  Proceed to Checkout
</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
