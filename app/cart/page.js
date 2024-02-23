import CartItem from "@/components/cart/CartItem";
import CartItemTable from "@/components/cart/CartItemTable";
import CartTotal from "@/components/cart/CartTotal";
import { cartData } from "@/data/dataModels";
import React from "react";

const Cart = () => {
  const number = 3;
  return (
    <div className="grid grid-cols-1 mx-[16px]">
      <CartItem item={cartData[0]} />
      <CartItem item={cartData[1]} />
      <CartTotal />
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
