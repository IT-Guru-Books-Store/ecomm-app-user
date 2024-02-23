import React from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({ item }) => {
  return (
    <div className="bg-white p-4 my-4 border-b border-gray-100 max-w-[500px] mx-auto">
      <div className="flex flex-row">
        <img
          src={item.img}
          alt="product-img"
          className="rounded-lg w-[30%] object-cover"
        />
        <div className="flex-1 ml-4">
          <div className="flex flex-row items-start justify-between">
            <h1 className="text-[16px] w-[85%]">{item.bookName}</h1>
            <button className="text-gray-400">
              <MdDeleteOutline />
            </button>
          </div>
          <span className="text-[13px] text-gray-400">{item.author}</span>
          <div className="mt-1">
            <span className="text-[13px] bg-green-500 text-white p-1 rounded-md">
              Rs. {item.price}
            </span>
          </div>
          <div className="flex mt-3 w-30">
            <button className="bg-gray-200 px-2">
              <IoIosRemove />
            </button>
            <span className="w-[60px] flex justify-center border-solid border-2">
              {item.quantity}
            </span>
            <button className="bg-gray-200 px-2">
              <IoIosAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
