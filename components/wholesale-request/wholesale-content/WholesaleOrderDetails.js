import React from "react";
import WholesaleOrderDetailsForm from "./order-details/WholesaleOrderDetailsForm";
import WholeSaleBookList from "./order-details/WholeSaleBookList";
import WholesaleBookAdder from "./order-details/WholesaleBookAdder";

const WholesaleOrderDetails = () => {
  return (
    <div className="w-full mt-6 shadow rounded-lg p-6 border-spacing-1">
      <WholesaleOrderDetailsForm />
      <WholeSaleBookList />
      <WholesaleBookAdder />
      <button className="w-[100%] bg-[#073763] rounded-md text-white p-2">
        Place Order
      </button>
    </div>
  );
};

export default WholesaleOrderDetails;
