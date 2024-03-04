import React from "react";
import WholesaleOrderDetailsForm from "./order-details/WholesaleOrderDetailsForm";
import WholeSaleBookList from "./order-details/WholeSaleBookList";

const WholesaleOrderDetails = () => {
  return (
    <div className="w-full mt-6 shadow rounded-lg p-6 border-spacing-1">
      <WholesaleOrderDetailsForm />
      <WholeSaleBookList />
    </div>
  );
};

export default WholesaleOrderDetails;
