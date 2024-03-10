import React from "react";
import OrderItem from "../orderItem/OrderItem";
import { ImCross } from "react-icons/im";
import OrderViewItem from "./orderViewItem/OrderViewItem";

const OrderView = ({ onClose }) => {
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        {/* Modal content */}
        <div className="relative rounded-lg shadow bg-[#f4f4f4]">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <div className="flex flex-row gap-x-5">
              {/* block 1 */}
              <div className="flex flex-col w-[350px] bg-green-500 p-3">
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Name</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: Janith Meegoda</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Mobile</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: 0754042950</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Address</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">
                      : 63/42, Sampath uyana, Sri Seelawiwansa nahimi mawatha,
                      Eldeniya
                    </p>
                  </div>
                </div>
                {/* <h3>Janith Meegoda</h3>
                <h3>0754042950</h3>
                <h3>
                  63/42, Sampath uyana, Sri Seelawiwansa nahimi mawatha,
                  Eldeniya
                </h3> */}
              </div>
              {/* block 2 */}
              <div className="flex flex-col w-[420px] bg-green-500 p-3">
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Order ID</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: 8157633165440775</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Order placed on</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: 2023-02-15</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Order status</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: Processing</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Payment method</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: Card Payment</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">Delivered On</p>
                  </div>
                  <div className="w-[50%] bg-orange-400">
                    <p className="text-sm">: 2023-02-15</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-3">
                  <div className="w-[50%] bg-orange-400">Tracking No</div>
                  <div className="w-[50%] bg-orange-400">: ord-05-2004</div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="static-modal"
                  onClick={onClose}
                >
                  <ImCross color="red" />
                  {/* <svg
                    className="w-3 h-3 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg> */}
                </button>
              </div>
            </div>
          </div>
          {/* Modal body */}
          <div className="flex flex-col justify-center items-center p-4 md:p-5 space-y-4">
            <div className="w-[800px] bg-white mt-5 lg:mt-0 mx-[3%] md:mx-[20%]">
              {/* <h2 className="text-xl font-bold mb-8">Your Order</h2> */}
              <div className="rounded-lg text-black my-2 py-5">
                <div className="flex mb-5 ml-[8%]">
                  <h1 className="text-lg">Product</h1>
                </div>
                <div className="flex flex-row">
                  {/* item 1 */}
                  <div className="flex flex-col">
                    <div>
                      <OrderViewItem />
                    </div>
                    <div>
                      <OrderViewItem />
                    </div>
                  </div>
                  {/* item 2 */}
                  <div className="flex flex-col">
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
                </div>
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
