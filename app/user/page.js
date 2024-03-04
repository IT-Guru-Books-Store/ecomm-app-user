import CartItem from "@/components/cart/CartItem";
import CartTotal from "@/components/cart/CartTotal";
import React from "react";

const User = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 bg-blue-600">
        <h1 className="flex items-center text-2xl">Profile</h1>

        <div className="flex items-center w-full md:w-[70%] bg-yellow-200 p-4">
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col">
              <div className="bg-blue-500">First Name</div>
              <div className="bg-red-600">Dominic</div>
            </div>
            <div>
              <div>Last Name</div>
              <div>Lakshan</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-6xl mx-[16px] sm:mx-[128px] lg:grid md:grid-cols-2 lg:gap-3 lg:mx-auto">
        <div>
         
        </div>
        <div>
          <CartTotal />
        </div>
      </div> */}
    </div>
  );
};

export default User;
