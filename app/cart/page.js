import CartItem from "@/components/cart/CartItem";
import CartTotal from "@/components/cart/CartTotal";
import { cartData } from "@/data/dataModels";
import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="max-w-6xl mx-[16px] sm:mx-[128px] lg:mx-auto mt-8">
        <h1 className="flex items-center text-2xl">
          My Cart{" "}
          <span className="bg-blue-100 text-[#073763] text-[13px] px-2.5 py-0.1 rounded dark:bg-blue-200 ark:text-blue-800 ms-2">
            4 books
          </span>
        </h1>
      </div>
      <div className="max-w-6xl mx-[16px] sm:mx-[128px] lg:grid md:grid-cols-2 lg:gap-3 lg:mx-auto">
        <div>
          <CartItem item={cartData[0]} />
          <CartItem item={cartData[1]} />
          <CartItem item={cartData[1]} />
          <CartItem item={cartData[0]} />
        </div>
        <div>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;

// <div className="grid lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto px-4">
//       <div className="grid gap-2">
//         <h1 className="font-bold sm:text-3xl text-2xl text-[#073763]">
//           Your Cart
//         </h1>
//         <p className="text-start text-gray-500 text-1xl">
//           You have {number} books in your cart.
//         </p>
//         <div>
//           {/* <CartItemTable /> */}
//           <CartItem item={cartData[1]} />
//         </div>
//       </div>
//     </div>
