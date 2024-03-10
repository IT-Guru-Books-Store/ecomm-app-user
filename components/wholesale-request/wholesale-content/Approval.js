import { WHOLESALE_REQUEST_WAITING_MSG } from "@/constants/constant";
import React from "react";

const Approval = () => {
  return (
    <div>
      <div className="border rounded-md p-4 bg-blue-300">
        <div className="flex">
          <h3 className="font-semibold mb-2">Information</h3>
        </div>
        <div>
          <p className="text-gray-700">{WHOLESALE_REQUEST_WAITING_MSG}</p>
        </div>
      </div>
    </div>
  );
};

export default Approval;
