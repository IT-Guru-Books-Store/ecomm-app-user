import React from "react";

const OrderItemCard = ({ book }) => {
  return (
    <div className="border p-2 my-1 rounded-md">
      <h2 className="text-[24px]">
        Rs. <span>{book.priceWithDiscount}</span>
        <span className="text-gray-500 text-sm">(Price with discount)</span>
      </h2>
      <h4 className="text-">{book.name}</h4>
      <div className="grid grid-cols-1 text-gray-500 text-sm ">
        <span>Price Per Book: Rs. {book.price}</span>
        <span>Qty: {book.quantity} </span>
        <span>
          Discount Per Book:{" "}
          <span className="bg-green-400 text-white text-lg p-1 rounded-sm">
            {book.discountPerBook}
          </span>
        </span>
      </div>
    </div>
  );
};

export default OrderItemCard;
