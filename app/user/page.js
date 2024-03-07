import React from "react";
import OrderTable from "@/components/order table/OrderTable";

const User = () => {
  return (
    <div className="w-full mb-5">
      <div className="w-full flex flex-col mt-8 bg-blue-600">
        <h1 className="flex items-center text-2xl ml-4">Profile</h1>
        <h2 className="flex items-center text-lg ml-4">
          You can edit your profile information here
        </h2>

        <div className="flex items-center w-full md:w-[70%] bg-yellow-200 p-4 border-gray-200 rounded-md ml-4 my-4">
          <div className="grid grid-cols-2 w-full gap-y-4 gap-x-5">
            <div className="flex flex-col">
              <div>User Name</div>
              <div>Dominic Lakshan</div>
            </div>
            <div>
              <div>Email</div>
              <div>Lakshan@gmail.com</div>
            </div>
            <div>
              <div>Address</div>
              <div>142/1,Wewalduwa road,Kelaniya</div>
            </div>
            <div>
              <div>Mobile No</div>
              <div>077 8707815</div>
            </div>
            <div className="mt-4">
              <button className="text-white bg-[#073763] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <h1 className="flex items-center text-2xl ml-4 mb-2">My Orders</h1>
        <div className="md:w-[70%] ml-4">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default User;
