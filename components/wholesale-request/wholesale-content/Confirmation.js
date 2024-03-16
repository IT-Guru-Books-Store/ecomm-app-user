import React from "react";
import OrderItemsTable from "./confirmation-components/OrderItemsTable";
import OverallDetailTable from "./confirmation-components/OverallDetailTable";
import OrderItemCardList from "./confirmation-components/OrderItemCardList";

const Confirmation = () => {
  return (
    <div className="w-full mt-6 shadow rounded-lg p-6 border-spacing-1">
      <h3 className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
        Your Order Details...
      </h3>
      <div className="hidden sm:block">
        <OrderItemsTable />
      </div>
      <div className="sm:hidden">
        <OrderItemCardList />
      </div>
      <div className="sm:grid sm:grid-cols-4 my-6">
        <div className="sm:col-span-2 sm:col-start-3">
          <OverallDetailTable />
        </div>
        <button className="w-full bg-[#073763] rounded-md text-white p-2 sm:col-start-4">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
