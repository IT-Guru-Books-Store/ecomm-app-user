import React from "react";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="md:h-[80px] bg-red-400 md:w-[85%]">
      <div className="flex flex-row justify-evenly">
        <div className="flex items-center justify-center bg-[#f1c132] w-[149px] h-[42px]">
          IT GURU
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <BsCart3 />
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
