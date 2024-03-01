import TextBox from "@/components/textBox/TextBox";
import React from "react";

const Checkout = () => {
  return (
    <div className="w-full flex flex-col h-[100vh]">
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
        {/* Your Order */}
        <div className="bg-gray-500 h-[50vh]">
          <h2 className="text-xl">Your Order</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
