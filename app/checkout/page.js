import React from "react";

const Checkout = () => {
  return (
    <div className="w-full flex flex-col h-[90vh]">
      <h1 className="text-[22px] font-bold text-[#073763] mt-4 ml-3">
        Checkout
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* billing details */}
        <div className="bg-red-500 px-3">
          <h2 className="text-xl">Billing Details</h2>
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
