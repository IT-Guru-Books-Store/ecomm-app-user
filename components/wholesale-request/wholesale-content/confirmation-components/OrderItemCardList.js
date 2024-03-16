import React from "react";
import WholeSaleBookList from "../order-details/WholeSaleBookList";
import { orderedItemsForWholesaleConfirmation } from "@/data/dataModels";
import OrderItemCard from "./OrderItemCard";

const OrderItemCardList = () => {
  const bookList = orderedItemsForWholesaleConfirmation;
  return (
    <div>
      {bookList?.map((book) => (
        <OrderItemCard book={book} key={book.id} />
      ))}
    </div>
  );
};

export default OrderItemCardList;
