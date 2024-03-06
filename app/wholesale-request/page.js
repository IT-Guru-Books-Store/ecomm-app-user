"use client";

import Stepper from "@/components/wholesale-request/Stepper";
import WholesaleContainer from "@/components/wholesale-request/WholesaleContainer";
import React from "react";

const page = () => {
  return (
    <div className="my-8">
      <h3>Submit your Wholesale request</h3>
      <Stepper />
      <WholesaleContainer />
    </div>
  );
};

export default page;
