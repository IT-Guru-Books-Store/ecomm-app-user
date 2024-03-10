import React, { useState } from "react";
import WholesaleOrderDetails from "./wholesale-content/WholesaleOrderDetails";
import Approval from "./wholesale-content/Approval";
import Confirmation from "./wholesale-content/Confirmation";

const WholesaleContainer = () => {
  const [currentStep, setCurrentState] = useState(3);
  if (currentStep === 1) return <WholesaleOrderDetails />;
  else if (currentStep === 2) return <Approval />;
  else if (currentStep === 3) return <Confirmation />;
  else return <div>No content: Error has occurred!!</div>;
};

export default WholesaleContainer;
