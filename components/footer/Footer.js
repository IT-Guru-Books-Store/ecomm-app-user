import React from "react";
import Link from "next/link";

import { MdAddIcCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full">
      {/* deskop footer */}
      <div className="hidden md:block md:h-[50%] bg-[#073763] md:pt-[2%]">
        <div className="flex md:flex-row md:justify-center md:items-center md:py-[2%]">
          <div className="flex flex-row w-full justify-center">
            {/* Column 1 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center bg-[#f1c132] md:w-[185px] md:h-[30%]">
                IT GURU
              </div>
              <div className="flex w-full mt-[40px] md:h-10 md:justify-start">
                <h1 className="flex text-[#9EE3FC] md:text-lg font-semibold">
                  Follow us
                </h1>
              </div>

              <div className="flex space-x-[16px] cursor-pointer">
                <a href="">
                  <div className="bg-gradient-to-r  from-[#fe9208] to-[#fff508] w-[32px] h-[32px] flex justify-center items-center rounded-md">
                    <FaFacebookF color="#1d4ed8" />
                  </div>
                </a>
                <div className="bg-gradient-to-r  from-[#fe9208] to-[#fff508] w-[32px] h-[32px] flex justify-center items-center rounded-md">
                  <FaXTwitter color="#1d4ed8" />
                </div>
                <a href="">
                  <div className="bg-gradient-to-r from-[#fe9208] to-[#fff508] w-[32px] h-[32px] flex justify-center items-center rounded-md">
                    <BsInstagram color="#1d4ed8" />
                  </div>
                </a>
                <a href="">
                  <div className="bg-gradient-to-r from-[#fe9208] to-[#fff508] w-[32px] h-[32px] flex justify-center items-center rounded-md">
                    <FaLinkedinIn color="#1d4ed8" />
                  </div>
                </a>
              </div>
            </div>

            {/* Column 2*/}
            <div className="md:mx-[10%]">
              <h1 className="mb-4 text-[#9EE3FC] font-semibold md:text-xl">
                Navigation
              </h1>
              <ul>
                <Link href={"/"}>
                  <li className="cursor-pointer font-semibold text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    Home
                  </li>
                </Link>

                <Link href={"/about Us"}>
                  <li className="cursor-pointer font-semibold md:mt-4 text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    About Us
                  </li>
                </Link>

                <Link href={"/contact Us"}>
                  <li className="cursor-pointer font-semibold md:mt-4 text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    Contact Us
                  </li>
                </Link>

                <Link href={"/terms"}>
                  <li className="cursor-pointer font-semibold md:mt-4 text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    Terms
                  </li>
                </Link>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h1 className="w-40 h-3 text-[#9EE3FC] md:text-xl font-semibold mb-8">
                Get in Touch
              </h1>

              <div className="flex flex-col gap-[18px]">
                {/* location */}
                <div className="flex w-full justify-start space-x-3 item-center">
                  <div className="md:h-[40px] md:w-[45px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-[10px] flex items-center justify-center">
                    {/* w-[60%] h-[60%] */}
                    <FaLocationDot className="md:h-[20px]" color="#1d4ed8" />
                  </div>
                  <div className="md:text-xs text-white">
                    <h1>Location :</h1>
                    <h1>No.xx 1/2 Molpe Road,</h1>
                    <h1>Katubeddha , Moratuwa</h1>
                  </div>
                </div>

                {/* phone */}
                <div className="flex w-full justify-start space-x-3 item-center">
                  <div className="md:h-[40px] md:w-[45px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-[10px] flex items-center justify-center">
                    {/* w-[60%] h-[60%] */}
                    <MdAddIcCall
                      className="md:h-[40px] md:w-[25px]"
                      color="#1d4ed8"
                    />
                  </div>
                  <div className="md:text-xs text-white">
                    <h1>Phone :</h1>
                    <h1>+94 xxx xxxx</h1>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex w-full justify-start space-x-3 item-center">
                  <div className="md:h-[40px] md:w-[45px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-[10px] flex items-center justify-center">
                    <IoMail
                      className="md:h-[40px] md:w-[25px]"
                      color="#1d4ed8"
                    />
                  </div>
                  <div className="md:text-xs text-white">
                    <h1>Email:</h1>
                    <h1>itgura@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile footer */}
      <div className="block md:hidden bg-[#073763] h-[40%]">
        <div className="flex flex-col py-[10%]">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center bg-[#f1c132] w-[70%] py-[5%]">
              IT GURU
            </div>
          </div>
          <div className="flex flex-row mt-[4%] ml-[15%]">
            {/* Left column */}
            <div>
              <h1 className="mb-3 text-[#9EE3FC] font-semibold md:text-lg">
                Navigation
              </h1>
              <ul>
                <Link href={"/"}>
                  <li className="cursor-pointer font-semibold text-sm hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    Home
                  </li>
                </Link>

                <Link href={"/about Us"}>
                  <li className="cursor-pointer font-semibold mt-4 text-sm hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    About Us
                  </li>
                </Link>

                <Link href={"/contact Us"}>
                  <li className="cursor-pointer font-semibold mt-4 text-sm hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    Contact Us
                  </li>
                </Link>

                <Link href={"/terms"}>
                  <li className="cursor-pointer font-semibold mt-4 text-sm hover:text-[#9EE3FC] text-[#F1F3F7] ">
                    Terms
                  </li>
                </Link>
              </ul>
            </div>
            {/* right column */}
            <div className="flex flex-col ml-[14%] font-semibold ">
              <h1 className="w-40 h-3 text-[#9EE3FC] text-lg font- mb-4">
                Get in Touch
              </h1>

              <div className="flex flex-col gap-[5px]">
                {/* location */}
                <div className="flex w-full justify-start space-x-3 item-center mt-3">
                  <div className="flex items-center justify-center h-[30px] w-[30px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-lg">
                    <FaLocationDot
                      className="w-[50%] h-[50%]"
                      color="#1d4ed8"
                    />
                  </div>
                  <div className="text-[11px] text-white">
                    <h1>Location :</h1>
                    <h3 className="text-[9px]">No.xx 1/2 Molpe Road,</h3>
                    <h3 className="text-[9px]">Katubeddha , Moratuwa</h3>
                  </div>
                </div>

                {/* phone */}
                <div className="flex w-full justify-start space-x-3 item-center">
                  <div className="flex items-center justify-center h-[30px] w-[30px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-lg">
                    <MdAddIcCall className="w-[50%] h-[50%]" color="#1d4ed8" />
                  </div>
                  <div className="text-xs text-white">
                    <h1>Phone :</h1>
                    <h1 className="mt-[2px]">+94 xxx xxxx</h1>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex w-full justify-start space-x-3 item-center mt-3">
                  <div className="flex items-center justify-center h-[30px] w-[30px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-lg">
                    <IoMail className="w-[50%] h-[50%]" color="#1d4ed8" />
                  </div>
                  <div className="text-xs text-white">
                    <h1>Email:</h1>
                    <h1 className="mt-[2px]">itgura@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
