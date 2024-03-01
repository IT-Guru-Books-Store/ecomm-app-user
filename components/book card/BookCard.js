import React from "react";
import book from "../../assets/images/it book.png";
import Image from "next/image";

const BookCard = () => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:max-xl:w-[145px] xl:w-[230px] md:hover:border-[#073763] md:hover:border-2">
      <div className="relative mx-4 mt-4 p-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl md:max-xl:h-[50px] xl:h-[190px] bg-[#f5f5f5]">
        {/* <img
          src="https://media.gettyimages.com/id/1329616170/vector/brochure-cover-design-layout-for-business-stock-illustration.jpg?s=1024x1024&w=gi&k=20&c=Bvv5pm3_7fQcfirmfHaD_U9a1SKdJHkW_0y18oIKuWA="
          alt="card-image"
          className="object-cover w-full h-full"
        /> */}
        <Image
          src={book}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ICT
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            Rs.1200.00
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          Grade 12 | Janith Kumarasinghe
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="bg-[#073763] align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-[#fff] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
