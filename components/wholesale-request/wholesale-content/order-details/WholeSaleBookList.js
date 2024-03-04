"use client";

import React, { useEffect, useState } from "react";

const WholeSaleBookList = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    setBookList([
      {
        name: "ICT - AL - 2013",
        qty: 10,
      },
      {
        name: "SFT - AL - 2013",
        qty: 20,
      },
    ]);
  }, []);

  return (
    <div>
      <h3>Books</h3>
      <div>
        <p>Added Books</p>
        <div>
          {bookList?.map((book) => {
            return (
              <div key={book}>
                <span>{book.name}</span>
                <span>{book.qty}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WholeSaleBookList;
