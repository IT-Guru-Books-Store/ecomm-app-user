"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import SearchBar from "../searchBar/SearchBar";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// icons

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log("button clicked");
    setToggle((prev) => !prev);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="lg:h-[80px] lg:w-[85%] md:max-lg:w-full w-full">
      {/* desktop */}
      <div className="hidden md:block w-full">
        <div className="flex flex-row p-5 items-baseline justify-center">
          <div className="flex items-center justify-center bg-[#f1c132] md:max-lg:w-[100px] lg:w-[149px] md:max-lg:h-[35px] lg:h-[42px] lg:p-5 md:max-lg:ml-[5%]">
            IT GURU
          </div>
          <div className="md:max-lg:ml-[5%] lg:ml-[10%]">
            <SearchBar />
          </div>
          <div className="md:max-lg:ml-[4.5%] lg:ml-[8%]">
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
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden block">
        <div className="flex flex-row justify-between items-center p-3">
          <div>
            <GiHamburgerMenu onClick={() => handleToggle()} color="#073763" />
          </div>
          <div className="flex justify-center bg-[#f1c132] w-[100px] h-[30px]">
            IT GURA
          </div>
          <div>
            <FaSearch color="#073763" />
          </div>
        </div>
      </div>
      {toggle && (
        <div className="w-full mt-2 ml-2 h-[380px] flex justify-start ">
          <ol className="flex flex-col gap-y-5 md:hidden text-[#000045] font-semibold rounded-lg w-[60%] justify-start bg-gradient-to-r from-[#d4edf6] to-[#ffffff]  bg-opacity-95 text-lg h-full">
            <li className="ml-4 mt-4 ">
              <Link
                href="/"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-3 items-center ">
                  {/* <Image src={home} className="" alt="home img" /> */}
                  <h1 className="mt-1">Home</h1>
                </div>
              </Link>
            </li>

            <li className="ml-4">
              <Link
                href="/about"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={about} className="" alt="about img" /> */}
                  <h1 className="mt-1">Contact Us</h1>
                </div>
              </Link>
            </li>

            <li className="ml-4 ">
              <Link
                href="/service"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={services} className="" alt="services img" /> */}
                  <h1 className="mt-1">About Us</h1>
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/careermain"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={car} alt="car img" className="" /> */}
                  <h1 className="mt-1">Terms</h1>
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/careermain"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={car} alt="car img" className="" /> */}
                  <h1 className="mt-1">Checkout</h1>
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/careermain"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  {/* <Image src={car} alt="car img" className="" /> */}
                  <h1 className="mt-1">My Account</h1>
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/contacts"
                onClick={() => {
                  closeMenu();
                }}
              >
                <div className="flex space-x-2 items-center ">
                  <div className="bg-[#ff0000] md:max-lg:ml-[11%] lg:ml-[13%] cursor-pointer">
                    <p className="text-[#fff] font-bold px-[5px] py-[3px] hover:text-[#f1c132]">
                      Wholesale!
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default NavBar;
