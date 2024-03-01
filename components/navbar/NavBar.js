"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import SearchBar from "../searchBar/SearchBar";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";

// icons

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const handleToggle = () => {
    //console.log("button clicked");
    setToggle((prev) => !prev);
  };

  const searchMenu = () => {
    setSearchToggle((prev) => !prev);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="w-full md:max-lg:w-full lg:h-[80px] lg:w-[80%] ">
      {/* desktop */}
      <div className="hidden md:block w-full">
        <div className="flex flex-row p-5 items-center justify-between">
          <Link href="/">
            <div className="flex items-center justify-center bg-[#f1c132] md:max-lg:w-[100px] lg:w-[149px] md:max-lg:h-[35px] lg:h-[42px] lg:p-5 md:max-lg:ml-[5%]">
              IT GURU
            </div>
          </Link>
          <div className="md:max-lg:ml-[5%] lg:ml-[0%]">
            <SearchBar />
          </div>
          <div className="flex flex-row items-center gap-10">
            {/* className="md:max-lg:ml-[4.5%] lg:ml-[0%]" */}
            <div>
              {/* className="md:max-lg:h-[200%] md:max-lg:w-[150%] lg:h-[200%] lg:w-[200%]" */}
              <BsCart3
                className="md:max-lg:h-[100%] md:max-lg:w-[100%] lg:h-[100%] lg:w-[200%]"
                color="#073763"
              />
            </div>
            <Link href="/login">
              <div className="flex flex-row items-center justify-end gap-4 ">
                <div>
                  <CgProfile
                    className="md:max-lg:h-[100%] md:max-lg:w-[100%] lg:h-[100%] lg:w-[200%]"
                    color="#073763"
                  />
                </div>
                <div className="ml-1">
                  <p className="md:text-sm text-[#073763] font-medium">
                    Login / Register
                  </p>
                </div>
              </div>
            </Link>
            {/* <div>
              <p className="md:text-sm text-[#073763] font-medium">
                Login / Register
              </p>
            </div> */}
          </div>
          {/* <div className="md:max-lg:ml-[4.5%] lg:ml-[8%]">
            <BsCart3
              className="md:max-lg:h-[200%] md:max-lg:w-[150%] lg:h-[200%] lg:w-[200%]"
              color="#073763"
            />
          </div>
          <div className="md:max-lg:ml-[5%] lg:ml-[4%]">
            <CgProfile
              className="md:max-lg:h-[200%] md:max-lg:w-[150%] lg:h-[200%] lg:w-[200%]"
              color="#073763"
            />
          </div>
          <div className="md:max-lg:ml-[3%] lg:ml-[2%]">
            <p className="md:text-xs text-[#073763] font-medium">
              Login / Register
            </p>
          </div> */}
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden block">
        <div className="flex flex-row justify-between items-center p-3">
          <div>
            <GiHamburgerMenu onClick={() => handleToggle()} color="#073763" />
          </div>
          <Link href="/">
            <div className="flex justify-center bg-[#f1c132] w-[100px] h-[30px]">
              IT GURA
            </div>
          </Link>
          <div>
            <FaSearch color="#073763" onClick={() => searchMenu()} />
          </div>
        </div>
      </div>
      {toggle && (
        <div className="md:hidden w-full mt-1 ml-2 h-[270px] flex justify-start absolute z-20">
          <ol className="flex flex-col gap-y-5 md:hidden text-[#000045] font-semibold rounded-lg w-[40%] justify-start bg-gray-100 opacity-[90%] h-full">
            <li className="ml-4 mt-4">
              <Link
                href="/"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-3 items-center ">
                  {/* <Image src={home} className="" alt="home img" /> */}
                  <h1 className="mt-1 text-sm hover:text-[#00b7eb]">Home</h1>
                </div>
              </Link>
            </li>

            <li className="ml-4">
              <Link
                href="/contact-us"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={about} className="" alt="about img" /> */}
                  <h1 className="mt-1 text-sm hover:text-[#00b7eb]">
                    Contact Us
                  </h1>
                </div>
              </Link>
            </li>

            <li className="ml-4 ">
              <Link
                href="/about-us"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={services} className="" alt="services img" /> */}
                  <h1 className="mt-1 text-sm hover:text-[#00b7eb]">
                    About Us
                  </h1>
                </div>
              </Link>
            </li>
            <li className="ml-4 ">
              <Link
                href="/terms-conditions"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center">
                  {/* <Image src={car} alt="car img" className="" /> */}
                  <h1 className="mt-1 text-sm hover:text-[#00b7eb]">Terms</h1>
                </div>
              </Link>
            </li>
            {/* <li className="ml-4">
              <Link
                href="/checkout"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  
                  <h1 className="mt-1">Checkout</h1>
                </div>
              </Link>
            </li> */}
            <li className="ml-4">
              <Link
                href="/user"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={car} alt="car img" className="" /> */}
                  <h1 className="mt-1 text-sm hover:text-[#00b7eb]">
                    My Account
                  </h1>
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/wholesale"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  <div className="bg-[#ff0000] md:max-lg:ml-[11%] lg:ml-[13%] cursor-pointer">
                    <p className="text-[#fff] text-sm font-bold px-[5px] py-[3px] hover:text-[#f1c132]">
                      Wholesale!
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </ol>
        </div>
      )}
      {/* Search result toggle */}
      {searchToggle && (
        <div className="md:hidden w-full flex flex-col justify-center items-center absolute mt-2 z-10 h-[35px] bg-white border-[#073763] border-2 p-2">
          <div className="flex flex-row justify-around items-center">
            <div className="flex flex-row items-center bg-yellow-200 h-full border-[#073763] border-r-2 p-1">
              <div>
                <p>All</p>
              </div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="bg-green-300 w-[350px] h-full">
              <input
                type="text"
                className="w-full h-full"
                placeholder="Search here"
              />
            </div>
            <div className="border-[#073763] border-l-2 h-full flex p-1 items-center">
              <ImCross color="red" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
