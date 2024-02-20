import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdAddIcCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import loc from "../../assets/svg/location.svg";
import mail from "../../assets/svg/mail.svg";

const Footer = () => {
  return (
    <div className="md:h-[40%] bg-[#073763]">
      <div className="md:w-[80%] py-[2%] mx-auto flex md:flex-row justify-center items-center">
        <div className="flex flex-row">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center bg-[#f1c132] w-[200%] h-[50%]">
              IT GURU
            </div>
            <div className="w-full mt-[40px] h-10 flex md:justify-start justify-center">
              <h1 className="flex  text-[#9EE3FC] md:text-lg font-semibold">
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
          <div className="md:mx-[20rem]">
            <h1 className="mb-8 text-[#9EE3FC] font-semibold text-2xl">
              Navigation
            </h1>
            <ul>
              <Link href={"/"}>
                <li className="cursor-pointer font-semibold  text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                  Home
                </li>
              </Link>

              <Link href={"/about Us"}>
                <li className="cursor-pointer font-semibold mt-6  text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                  About Us
                </li>
              </Link>

              <Link href={"/contact Us"}>
                <li className="cursor-pointer font-semibold mt-6  text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                  Contact Us
                </li>
              </Link>

              <Link href={"/terms"}>
                <li className="cursor-pointer font-semibold mt-6  text-[16px] hover:text-[#9EE3FC] text-[#F1F3F7] ">
                  Terms
                </li>
              </Link>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h1 className="w-40 h-3 text-[#9EE3FC] md:text-2xl font-semibold mb-8">
              Get in Touch
            </h1>

            <div className="flex flex-col gap-[18px]">
              {/* location */}
              <div className="flex w-full justify-start space-x-3 item-center">
                <div className="h-[45px] w-[45px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-[13px] flex items-center justify-center">
                  <FaLocationDot className="w-[50%] h-[50%]" color="#1d4ed8" />
                </div>
                <div className="text-sm text-white">
                  <h1>Location :</h1>
                  <h1>No.xx 1/2 Molpe Road,</h1>
                  <h1>Katubeddha , Moratuwa</h1>
                </div>
              </div>

              {/* phone */}
              <div className="flex w-full justify-start space-x-3 item-center">
                <div className="h-[45px] w-[45px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-[13px] flex items-center justify-center">
                  <MdAddIcCall className="w-[60%] h-[60%]" color="#1d4ed8" />
                </div>
                <div className="text-sm text-white">
                  <h1>Phone :</h1>
                  <h1>+94 xxx xxxx</h1>
                </div>
              </div>

              {/* Mail */}
              <div className="flex w-full justify-start space-x-3 item-center">
                <div className="h-[45px] w-[45px] bg-gradient-to-r from-[#fe9308] to-[#fff508] rounded-[13px] flex items-center justify-center">
                  <IoMail className="w-[60%] h-[60%]" color="#1d4ed8" />
                </div>
                <div className="text-sm text-white">
                  <h1>Email:</h1>
                  <h1>itgura@gmail.com</h1>
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
