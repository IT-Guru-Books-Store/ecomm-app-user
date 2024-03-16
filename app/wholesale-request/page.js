"use client";

import Stepper from "@/components/wholesale-request/Stepper";
import WholesaleContainer from "@/components/wholesale-request/WholesaleContainer";
import React from "react";

const page = () => {
  return (
    <div className="m-[16px] sm:my-8 sm:mx-0">
      <h3>Submit your Wholesale request</h3>
      <Stepper />
      <WholesaleContainer />
    </div>
  );
};

export default page;
