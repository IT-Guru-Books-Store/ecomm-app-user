import React from "react";
import OrderItem from "../orderItem/OrderItem";

const OrderView = ({ onClose }) => {
  return (
    <div
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Static modal
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <div className="max-w-[800px] bg-white mt-5 lg:mt-0 mx-[3%] md:mx-[20%]">
              {/* <h2 className="text-xl font-bold mb-8">Your Order</h2> */}
              <div className="rounded-lg text-black my-2 py-5">
                <div className="flex mb-5 ml-[8%]">
                  <h1 className="text-lg">Product</h1>
                </div>
                <div>
                  <OrderItem />
                </div>
                <div>
                  <OrderItem />
                </div>
                <div className="flex justify-center mb-5">
                  <h1 className="text-lg ">Overview</h1>
                </div>
                <div className="flex flex-col gap-3 mx-5 font-semibold text-gray-400">
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>Rs. 400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="bg-green-500 rounded-md text-white p-1">
                      Free
                    </span>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 mx-5"></hr>
                <div className=" text-lg flex justify-between mx-5">
                  <span>Total</span>
                  <span>Rs.400 </span>
                </div>
              </div>
              {/* <button
              type="button"
              className="w-[100%] font-bold text-lg text-white bg-[#073763] py-2.5 px-5 rounded-lg mb-8"
            >
              Proceed to Checkout
            </button> */}
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="static-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-hide="static-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
