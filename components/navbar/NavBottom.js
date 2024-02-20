import React from "react";

const NavBottom = () => {
  return (
    <div className="w-full bg-[#073763] h-[50%] py-[6px]">
      {/* Desktop */}
      <div className="flex flex-row items-center">
        <div className="ml-[13%] cursor-pointer">
          <p className="text-[#fff] hover:text-[#f1c132] font-bold">Home</p>
        </div>
        <div className="ml-[13%] cursor-pointer">
          <p className="text-[#fff] hover:text-[#f1c132] font-bold">
            Contact Us
          </p>
        </div>
        <div className="ml-[13%] cursor-pointer">
          <p className="text-[#fff] hover:text-[#f1c132] font-bold">About Us</p>
        </div>
        <div className="ml-[13%] cursor-pointer">
          <p className="text-[#fff] hover:text-[#f1c132] font-bold">Terms</p>
        </div>
        <div className="bg-[#ff0000] ml-[13%] cursor-pointer">
          <p className="text-[#fff] font-bold px-[5px] py-[3px] hover:text-[#f1c132]">
            Wholesale!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
