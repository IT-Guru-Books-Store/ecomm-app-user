"use client";

import React, { useEffect, useState } from "react";

const WholeSaleBookList = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    setBookList([
      {
        name: "ICT - AL - 2013",
        desc: "none",
        qty: 10,
      },
      {
        name: "SFT - AL - 2013",
        desc: "none",
        qty: 20,
      },
    ]);
  }, []);

  return (
    <div>
      <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Books
      </h3>
      <div>
        <p className="block mb-1 text-sm font-normal text-gray-400 dark:text-gray-200">
          Added Books
        </p>
        <div className="p-3 shadow-md rounded-md">
          {bookList?.map((book) => {
            return (
              <div key={book}>
                <span>{book.name}</span>
                <button>-</button>
                <span>{book.qty}</span>
                <button>+</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WholeSaleBookList;
