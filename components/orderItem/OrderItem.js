import React from "react";
import Image from "next/image";
import prodImg from "../../assets/images/it book.png";

const OrderItem = () => {
  return (
    <div className="bg-white p-4 my-4 border-b border-gray-100 max-w-[500px] mx-auto">
      <div className="flex flex-row">
        <Image
          src={prodImg}
          alt="product-img"
          className="rounded-lg w-[30%] object-cover"
        />
        <div className="flex-1 ml-4">
          <div className="flex flex-row items-start justify-between">
            <h1 className="text-[16px] w-[85%]">ICT</h1>
            {/* <button className="text-gray-400">
              <MdDeleteOutline />
            </button> */}
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
          {/* <div className="flex mt-3 w-30">
            <button className="bg-gray-200 px-2">
              <IoIosRemove />
            </button>
            <span className="w-[60px] flex justify-center border-solid border-2">
              {item.quantity}
            </span>
            <button className="bg-gray-200 px-2">
              <IoIosAdd />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
