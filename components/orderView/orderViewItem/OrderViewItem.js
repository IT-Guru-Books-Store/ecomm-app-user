import React from "react";
import Image from "next/image";
import prodImg from "../../../assets/images/it book.png";

const OrderViewItem = () => {
  return (
    <div className="bg-white p-4 my-4 border-b border-gray-100 max-w-[500px]">
      <div className="flex flex-row">
        <Image
          src={prodImg}
          alt="product-img"
          className="rounded-lg w-[26%] object-cover"
        />
        <div className="flex-1 ml-4">
          <div className="flex flex-row items-start justify-between">
            <h1 className="text-[16px] w-[85%]">ICT</h1>
          </div>
          <span className="text-[13px] text-gray-400">Janith Kumarasinghe</span>
          <div className="mt-1 flex flex-row gap-x-2">
            <div>
              <span className="text-[13px] bg-green-500 text-white p-1 rounded-md">
                Rs.400
              </span>
            </div>
            <div>
              <span className="text-[13px] text-black p-1 rounded-md">
                ( X 1 )
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewItem;
