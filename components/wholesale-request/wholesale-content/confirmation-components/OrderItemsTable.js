import { orderedItemsForWholesaleConfirmation } from "@/data/dataModels";
import React from "react";

const OrderItemsTable = () => {
  const orderItems = orderedItemsForWholesaleConfirmation;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-[#073763] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              QTY
            </th>
            <th scope="col" className="px-6 py-3">
              Discount Per Book
            </th>
            <th scope="col" className="px-6 py-3">
              Price with Discount
            </th>
          </tr>
        </thead>
        <tbody>
          {orderItems?.map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">Rs. {item.price}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.discountPerBook}</td>
                <td className="px-6 py-4">Rs. {item.priceWithDiscount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemsTable;
