import React from "react";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="md:h-[80px] md:w-[85%]">
      <div className="flex flex-row p-5 items-center">
        <div className="flex items-center justify-center bg-[#f1c132] w-[149px] h-[42px] ml-[5%]">
          IT GURU
        </div>
        <div className="ml-[15%]">
          <SearchBar />
        </div>
        <div className="ml-[8%]">
          <BsCart3 className="h-[200%] w-[200%]" color="#073763" />
        </div>
        <div className="ml-[4%]">
          <CgProfile className="h-[200%] w-[200%]" color="#073763" />
        </div>
        <div className="ml-[2%]">
          <p className="md:text-sm text-[#073763]  font-medium">
            Login / Register
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
