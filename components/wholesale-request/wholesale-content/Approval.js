import { WHOLESALE_REQUEST_WAITING_MSG } from "@/constants/constant";
import Image from "next/image";
import React from "react";
import Waiting from "../../../assets/svg/Waiting.svg";

const Approval = () => {
  return (
    <div>
      <div className="border rounded-md p-4 bg-blue-300">
        <div className="flex">
          <h3 className="font-semibold mb-2">Information</h3>
        </div>
        <div>
          <p className="text-gray-700">{WHOLESALE_REQUEST_WAITING_MSG}</p>
          <Image
            className="m-auto"
            src={Waiting}
            width={300}
            height={300}
            alt="wiating for confirmation"
          />
        </div>
      </div>
    </div>
  );
};

export default Approval;
