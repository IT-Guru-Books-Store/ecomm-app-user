import React from "react";

const CartTotal = () => {
  // These needs to be props
  const subTotal = "500.00";
  const deliveryFee = "0.00";
  const total = "500.00";
  // **
  return (
    <div>
      <div className="rounded-lg  text-black my-2 py-5 shadow-2xl">
        <div className="flex justify-center ">
          <h1 className="text-lg ">Overview</h1>
        </div>
        <div className="flex flex-col gap-3 mx-5 font-semibold text-gray-400">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>Rs. {subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>Rs. {deliveryFee}</span>
          </div>
        </div>
        <hr className="h-px my-5 bg-gray-200 border-0 mx-5"></hr>
        <div className=" text-lg flex justify-between mx-5">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>
      </div>
      <button
        type="button"
        className="w-[100%] font-bold text-lg text-white bg-[#073763] py-2.5 px-5 rounded-lg"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartTotal;
