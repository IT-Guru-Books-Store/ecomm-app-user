import React from "react";

const WholesaleBookAdder = () => {
  return (
    <div className="my-4 border p-2 rounded-md">
      <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select your book here...
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        <select
          id="business-type"
          className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>AL - SFT - Sinhala</option>
          <option>AL - SFT - Sinhala</option>
          <option>AL - SFT - Sinhala</option>
          <option>AL - SFT - Sinhala</option>
        </select>
        <div className="flex justify-between">
          <button className="bg-gray-200 px-2">-</button>
          <span className="w-[60px] flex justify-center border-solid border-2">
            12
          </span>
          <button className="bg-gray-200 px-2">+</button>
        </div>
        <button className="col-span-1 order-last bg-[#073763] rounded-md text-white p-2">
          Add
        </button>
      </div>
    </div>
  );
};

export default WholesaleBookAdder;
