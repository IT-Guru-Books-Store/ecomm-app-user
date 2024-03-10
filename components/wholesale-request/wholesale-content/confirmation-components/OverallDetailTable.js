import { overallWholesaleOrderDetails } from "@/data/dataModels";
import React from "react";

const OverallDetailTable = () => {
  const orderDetails = overallWholesaleOrderDetails;
  return (
    <div className="my-4 relative overflow-x-auto">
      <table className="w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr>
            <th
              scope="col"
              className="border uppercase text-left text-gray-700 px-6 py-3"
            >
              Delivery Fee
            </th>
            <td className="border">
              Rs.
              <span className="bg-green-500 text-white p-1 rounded-md">
                {orderDetails.deliveryFee}
              </span>
            </td>
          </tr>
          <tr>
            <th
              scope="col"
              className="uppercase text-left bg-[#073763] text-white px-6 py-3"
            >
              Total
            </th>
            <td className="border">Rs. {orderDetails.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OverallDetailTable;
