import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="mx-auto w-[500px] h-[40px]">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-2xl border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
              placeholder="Search Your Books"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 w-[20%] text-sm font-medium h-full text-white bg-blue-700 rounded-e-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span classNameName="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
