"use client";
import { React, useState } from "react";
import Image from "next/image";
import OrderItem from "@/components/orderItem/OrderItem";
import TextBox from "@/components/textBox/TextBox";
import paymentImg from "@/assets/images/payment-options.png";

const Checkout = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex flex-col my-2">
      <h1 className="text-[22px] font-bold text-[#073763] mt-4 ml-3 mb-4">
        Checkout
      </h1>
      {/* Desktop View */}
      <div className="grid grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-y-5">
          <div className="w-full bg-[#f4f4f4] py-4 px-2">
            <div className="w-full bg-[#f4f4f4] px-3">
              <h2 className="text-xl font-bold mb-3">Billing Details</h2>
              {/* form */}
              <form>
                <div className="grid md:grid-cols-2 gap-x-[32px] md:my-2">
                  <div className="mt-2 md:mt-0">
                    <TextBox
                      placeholder={"Enter Your First Name"}
                      label={"First Name"}
                    />
                  </div>
                  <div className="my-2 md:my-0">
                    <TextBox
                      placeholder={"Enter Your Last Name"}
                      label={"Last Name"}
                    />
                  </div>
                </div>
                <div>
                  <TextBox
                    placeholder={"Enter Your Address"}
                    label={"Address"}
                  />
                </div>
                <div className="my-2">
                  <TextBox placeholder={"Enter Your City"} label={"City"} />
                </div>
                {/* <div>
                <TextBox
                  placeholder={"Enter Postal Code"}
                  label={"Postal Code"}
                />
              </div> */}
                <div className="my-2">
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
                {/* <div className="my-2">
                <TextBox placeholder={"Enter Your Email"} label={"Email"} />
              </div> */}
                <div className="my-2">
                  <label className="block mb-2 text-sm">Order Notes</label>
                  <textarea
                    id="Order Notes"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-600 placeholder-gray-400"
                    placeholder="Notes about your order, eg:- special notes for delivery"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-full bg-[#f4f4f4]">
            <div className="max-w-[720px] mt-5 mx-[2%]">
              <div className="flex mb-5 mt-[2%]">
                <h1 className="text-lg font-bold">Payment Method</h1>
              </div>
              <div className="rounded-lg text-black my-2 py-2">
                {/* card payment */}
                <div className="flex">
                  <div className="flex flex-col w-full bg-white ps-4 border border-[#dddddd] rounded">
                    <div className="flex flex-row items-center">
                      <input
                        id="Card-Payment"
                        type="radio"
                        value=""
                        name="Payment-method"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full py-4 ms-2 text-sm font-medium text-black">
                        Card Payment
                      </label>
                    </div>
                    <div>
                      <Image src={paymentImg} />
                    </div>
                    <div className="py-4 px-2">
                      <p>
                        Pay by Visa, MasterCard, AMEX, eZcash, mCash or Internet
                        Banking via PayHere.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Cash on Delivery */}
                <div className="flex mb-5 bg-white">
                  {/* card payment */}
                  <div className="flex flex-col w-full ps-4 border border-[#dddddd] border-l border-r border-b rounded ">
                    <div className="flex flex-row items-center">
                      <input
                        id="Cash On Delivery"
                        type="radio"
                        value=""
                        name="Payment-method"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="w-full py-4 ms-2 text-sm font-medium text-black">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>

                {/* <hr className="h-px my-5 bg-gray-200 border-0 mx-5"></hr> */}
              </div>
            </div>
          </div>
          <div className="w-full bg-[#f4f4f4]">
            <div className="rounded-lg text-black my-2 py-5">
              <div className="flex mb-5 mx-[2%]">
                <h1 className="text-lg font-bold">Product</h1>
              </div>
              <div className="mx-[2%]">
                <OrderItem />
              </div>
              <div className="mx-[2%]">
                <OrderItem />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-row justify-end">
          {/* bottom div */}
          <div className="w-full bg-[#f4f4f4] max-w-[600px] max-h-[440px] p-4 fixed">
            <div className="rounded-lg text-black my-2 py-5 bg-white">
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
                <span className="font-bold">Total</span>
                <span className="font-bold">Rs.400 </span>
              </div>
            </div>
            <div>
              <p className="px-2">
                We will use your personal data to fulfill your order, enhance
                your experience on our website, and for other purposes outlined
                in our privacy policy.
              </p>
              <div className="flex items-center px-2 py-2">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-blue-600 dark:text-blue-500">
                  I agree with the&nbsp;
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="button"
                className="w-full font-bold text-lg text-white bg-[#073763] py-2.5 px-5 rounded-lg mb-8"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-1 md:grid-cols-2 w-full gap-x-[50px]">
        {/* billing details */}
        <div className="px-3">
          <h2 className="text-xl font-bold mb-3">Billing Details</h2>
          {/* form */}
          <form>
            <div className="grid md:grid-cols-2 gap-x-[32px] md:my-2">
              <div className="mt-2 md:mt-0">
                <TextBox
                  placeholder={"Enter Your First Name"}
                  label={"First Name"}
                />
              </div>
              <div className="my-2 md:my-0">
                <TextBox
                  placeholder={"Enter Your Last Name"}
                  label={"Last Name"}
                />
              </div>
            </div>
            <div>
              <TextBox placeholder={"Enter Your Address"} label={"Address"} />
            </div>
            <div className="my-2">
              <TextBox placeholder={"Enter Your City"} label={"City"} />
            </div>
            <div>
              <TextBox
                placeholder={"Enter Postal Code"}
                label={"Postal Code"}
              />
            </div>
            <div className="my-2">
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
            <div className="my-2">
              <TextBox placeholder={"Enter Your Email"} label={"Email"} />
            </div>
            <div>
              <label className="block mb-2 text-sm">Order Notes</label>
              <textarea
                id="Order Notes"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-600 placeholder-gray-400"
                placeholder="Notes about your order, eg:- special notes for delivery"
              />
            </div>
          </form>
        </div>
        {/* Right Coloumn */}
        <div className="flex flex-col w-full">
          {/* Your Order */}

          <div className="max-w-[500px] mt-5 lg:mt-0 mx-[3%] md:mx-[20%]">
            <h2 className="text-xl font-bold mb-8">Your Order</h2>
            <div className="rounded-lg text-black my-2 py-5 shadow-2xl">
              <div className="flex mb-5 ml-[8%]">
                <h1 className="text-lg">Product</h1>
              </div>
              <div>
                <OrderItem />
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

          <div className="max-w-[500px] mt-5 lg:mt-0 mx-[3%] md:mx-[20%]">
            <div className="flex mb-5 mt-[4%]">
              <h1 className="text-lg font-bold">Payment Method</h1>
            </div>
            <div className="rounded-lg text-black my-2 py-5 shadow-2xl">
              {/* card payment */}
              <div className="flex">
                <div className="flex flex-col w-full ps-4 border border-[#dddddd] rounded">
                  <div className="flex flex-row items-center">
                    <input
                      id="Card-Payment"
                      type="radio"
                      value=""
                      name="Payment-method"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="w-full py-4 ms-2 text-sm font-medium text-black">
                      Card Payment
                    </label>
                  </div>
                  <div>
                    <Image src={paymentImg} />
                  </div>
                  <div className="py-4 px-2">
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
                <div className="flex flex-col w-full ps-4 border border-[#dddddd] border-l border-r border-b rounded ">
                  <div className="flex flex-row items-center">
                    <input
                      id="Cash On Delivery"
                      type="radio"
                      value=""
                      name="Payment-method"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="w-full py-4 ms-2 text-sm font-medium text-black">
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </div>
              <p className="px-5">
                We will use your personal data to fulfill your order, enhance
                your experience on our website, and for other purposes outlined
                in our privacy policy.
              </p>
              <div className="flex items-center ps-4 py-2">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-blue-600 dark:text-blue-500">
                  I agree with the&nbsp;
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              {/* <hr className="h-px my-5 bg-gray-200 border-0 mx-5"></hr> */}
            </div>

            <button
              type="button"
              className="w-[100%] font-bold text-lg text-white bg-[#073763] py-2.5 px-5 rounded-lg mb-8"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
