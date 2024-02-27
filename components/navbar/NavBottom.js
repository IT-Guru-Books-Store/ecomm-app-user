import React from "react";

const NavBottom = () => {
  return (
    <div className="bg-[#073763] w-full md:max-lg:w-full lg:h-[5%] lg:w-[80%] ">
      {/* desktop */}
      <div className="hidden md:block w-full">
        <div className="flex flex-row px-5 py-[2px] items-center justify-between">
          <div className="md:max-lg:ml-[9%] lg:ml-[0S%] cursor-pointer">
            <p className="text-[#fff] hover:text-[#f1c132] font-bold">Home</p>
          </div>
          <div className="md:max-lg:ml-[8%] lg:ml-[0%] cursor-pointer">
            <p className="text-[#fff] hover:text-[#f1c132] font-bold">
              Contact Us
            </p>
          </div>
          <div className="md:max-lg:ml-[8%] lg:ml-[0%] cursor-pointer">
            <p className="text-[#fff] hover:text-[#f1c132] font-bold">
              About Us
            </p>
          </div>
          {/* lg:ml-[0%] */}
          <div className="md:max-lg:ml-[8%] cursor-pointer">
            <p className="text-[#fff] hover:text-[#f1c132] font-bold">Terms</p>
          </div>
          <div className="bg-[#ff0000] md:max-lg:ml-[11%] cursor-pointer">
            <p className="text-[#fff] font-bold px-[5px] py-[3px] hover:text-[#f1c132]">
              Wholesale!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex md:justify-center w-full">
<div className="flex flex-row items-center lg:px-[10%]">
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
</div> */
}

export default NavBottom;
