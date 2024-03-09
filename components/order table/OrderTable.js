"use client";
import { React, useEffect, useState } from "react";
import OrderView from "../orderView/OrderView";

const OrderTable = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("button clicked");
  };

  const orderArray = [];

  // Generate 15 orders
  for (let i = 1; i <= 15; i++) {
    const orderNo = `ord-${i.toString().padStart(2, "0")}`;
    const userId = `user-${i.toString().padStart(3, "0")}`;
    const orderPlacedDate = "2024-03-09";
    const paidDate = "2024-03-10";
    const paymentMethod = "COD";
    const deliveryCharges = "Free";
    const subTotal = Math.floor(Math.random() * 10000) + 1000; // Random subTotal between 1000 and 11000
    const total = subTotal.toString();
    const orderStatus = "Processing";
    const orderItems = [
      {
        bookId: `b-${i.toString().padStart(3, "0")}`,
        bookName: "ICT",
        quantity: 2,
        unitPrice: subTotal / 2,
        subTotal: subTotal,
      },
      {
        bookId: `b-${(i + 1).toString().padStart(3, "0")}`,
        bookName: "ICT",
        quantity: 2,
        unitPrice: subTotal / 2,
        subTotal: subTotal,
      },
    ];

    orderArray.push({
      orderNo,
      userId,
      orderPlacedDate,
      paidDate,
      paymentMethod,
      deliveryCharges,
      subTotal,
      total,
      orderStatus,
      orderItems,
    });
  }

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Calculate indexes for displaying orders based on current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderArray.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle next page click
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Handle previous page click
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    console.log(orderArray); // Log the generated orders to verify
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Order Placed Date
              </th>
              <th scope="col" className="px-6 py-3">
                Paid Date
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Method
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Order Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((order, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.orderNo}
                </th>
                <td className="px-6 py-4">{order.orderPlacedDate}</td>
                <td className="px-6 py-4">{order.paidDate}</td>
                <td className="px-6 py-4">{order.paymentMethod}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">{order.orderStatus}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={togglePopup}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showPopup && <OrderView onClose={togglePopup} />}
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">
              {indexOfFirstOrder + 1}-
              {Math.min(indexOfLastOrder, orderArray.length)}
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              {orderArray.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>

            <li>
              <button
                onClick={nextPage}
                disabled={indexOfLastOrder >= orderArray.length}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OrderTable;

{
  /* <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li> */
}
