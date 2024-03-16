import { addedBookList } from "@/data/dataModels";
import React from "react";

const WholeSaleBookList = () => {
  const bookList = addedBookList;
  return (
    <div>
      <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Books
      </h3>
      <div className="border p-4 rounded-md">
        <p className="block mb-1 text-sm font-normal text-gray-400 dark:text-gray-200">
          Added Books
        </p>
        <div className="p-2 border-t mt-2">
          {bookList?.map((book, index) => {
            return (
              <div
                key={book.id}
                className={`flex justify-between p-2 ${
                  index !== bookList.length - 1 ? "border-b" : ""
                }`}
              >
                <span>{book.name}</span>
                <div className="flex">
                  <button className="bg-gray-200 px-2">-</button>
                  <span className="w-[50px] flex justify-center border-solid border-2">
                    {book.qty}
                  </span>
                  <button className="bg-gray-200 px-2">+</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WholeSaleBookList;

// Need to give delete option.
