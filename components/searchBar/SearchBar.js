import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="mx-auto md:max-lg:w-[250px] lg:w-[500px] md:h-[40px]">
        <div className="flex justify-center">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block md:max-lg:p-[7px] lg:p-2 w-full z-20 text-sm text-gray-900 rounded-2xl border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
              placeholder="Search Your Books"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 md:max-lg:w-[25%] lg:w-[20%] text-white md:max-lg:text-xs lg:text-sm font-medium h-full bg-blue-700 rounded-e-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#073763] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <p>Search</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
