import React from "react";

const NavBottom = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block bg-[#073763] h-[50%] py-[6px]">
        <div className="flex md:justify-center">
          <div className="flex flex-row items-center md:w-[85%] lg:px-[10%]">
            <div className="md:max-lg:ml-[9%] lg:ml-[5%] cursor-pointer">
              <p className="text-[#fff] hover:text-[#f1c132] font-bold">Home</p>
            </div>
            <div className="md:max-lg:ml-[8%] lg:ml-[13%] cursor-pointer">
              <p className="text-[#fff] hover:text-[#f1c132] font-bold">
                Contact Us
              </p>
            </div>
            <div className="md:max-lg:ml-[8%] lg:ml-[13%] cursor-pointer">
              <p className="text-[#fff] hover:text-[#f1c132] font-bold">
                About Us
              </p>
            </div>
            <div className="md:max-lg:ml-[8%] lg:ml-[13%] cursor-pointer">
              <p className="text-[#fff] hover:text-[#f1c132] font-bold">
                Terms
              </p>
            </div>
            <div className="bg-[#ff0000] md:max-lg:ml-[11%] lg:ml-[13%] cursor-pointer">
              <p className="text-[#fff] font-bold px-[5px] py-[3px] hover:text-[#f1c132]">
                Wholesale!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
