"use client";
import { React, useState } from "react";

const DropDown = (props) => {
  const [toggle, setToggle] = useState(false);

  const [selectedChoice, setSelectedChoice] = useState(false);

  const popDown = () => {
    setToggle((prev) => !prev);
  };

  const handleClick = (item) => {
    setSelectedChoice(item);
  };

  const closePopUp = () => {
    setToggle(false);
  };

  return (
    <div>
      <button
        //id="dropdownRadioButton"
        // data-dropdown-toggle="dropdownDefaultRadio"
        onClick={() => popDown()}
        className="text-white bg-[#073763] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        {props.title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {toggle && (
        <div className="z-10 absolute mt-[3px] w-48 bg-white rounded-lg border-[#073763] border-2">
          <ul
            className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRadioButton"
          >
            {/* <li>
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                 
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  none
                </label>
              </div>
            </li> */}
            {props.values.map((item) => (
              <li key={item} onClick={() => handleClick(item)}>
                <div className="flex items-center">
                  <input
                    checked={selectedChoice == item}
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-3 h-3 rounded-none text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={item}
                    className="ms-2 text-sm font-medium text-[#073763]"
                  >
                    {item}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
