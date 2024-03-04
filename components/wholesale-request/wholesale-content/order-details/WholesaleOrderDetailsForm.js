import React from "react";

const WholesaleOrderDetailsForm = () => {
  return (
    <form>
      <div className="grid sm:grid-cols-2 gap-x-6 w-full">
        <div className="mb-5">
          <label
            for="first-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your first name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="last-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your last name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="business-type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select your business type
          </label>
          <select
            id="business-type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Book Shop</option>
            <option>School</option>
            <option>Tution Class</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            for="contact-no-1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact No <spam className="text-[10px] text-gray-400">1</spam>
          </label>
          <input
            type="text"
            id="contact-no-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your contact no."
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="contact-no-2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact No <spam className="text-[10px] text-gray-400">2</spam>
          </label>
          <input
            type="text"
            id="contact-no-2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your contact no."
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your address"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nearest City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your nearest city"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="district"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            District
          </label>
          <input
            type="text"
            id="district"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your district"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default WholesaleOrderDetailsForm;
