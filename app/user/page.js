import React from "react";
import OrderTable from "@/components/order table/OrderTable";

const User = () => {
  return (
    <div className="w-full mb-5 flex flex-col">
      <div className="w-full flex flex-col mt-8">
        <h1 className="flex items-center text-2xl ml-4">Profile</h1>
        <h2 className="flex items-center text-base ml-4">
          You can edit your profile information here
        </h2>

        <div className="flex items-center w-full md:w-[70%] bg-[#eff0f4] p-4 border-gray-200 rounded-md md:ml-4 my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-4 gap-x-5">
            <div className="flex flex-col bg-white rounded-md p-2">
              <div className="text-sm">User Name</div>
              <div className="text-base">Dominic Lakshan</div>
            </div>
            <div className="flex flex-col bg-white rounded-md p-2">
              <div className="text-sm">Email</div>
              <div className="text-base">Lakshan@gmail.com</div>
            </div>
            <div className="flex flex-col bg-white rounded-md p-2">
              <div className="text-sm">Address</div>
              <div className="text-base">142/1,Wewalduwa road,Kelaniya</div>
            </div>
            <div className="flex flex-col bg-white rounded-md p-2">
              <div className="text-sm">Mobile No</div>
              <div className="text-base">077 8707815</div>
            </div>
            <div className="mt-4 w-full md:col-span-2 flex md:justify-end">
              <button className="text-white w-full md:max-w-[180px] bg-[#073763] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <h1 className="flex items-center text-2xl ml-4 mb-2">My Orders</h1>
        <div className="md:w-[70%] mx-2  md:ml-4">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default User;
