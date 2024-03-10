import React from "react";
import OrderItemsTable from "./confirmation-components/OrderItemsTable";

const Confirmation = () => {
  return (
    <div>
      <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Order Details
      </h3>
      <div className="hidden sm:block">
        <OrderItemsTable />
      </div>
      <div className="sm:grid sm:grid-cols-3 my-6">
        <button className="bg-[#073763] rounded-md text-white p-2">
          Confirm your Order
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
