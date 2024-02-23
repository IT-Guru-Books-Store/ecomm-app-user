"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import sl_1 from "../../assets/images/11.jpg";
import sl_2 from "../../assets/images/010.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        rewind={"true"}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[400px] md:max-lg:w-[85%] md:max-lg:h-[85%] lg:w-[70%] lg:h-[70%]"
      >
        <SwiperSlide>
          <Image src={sl_1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sl_2} />
        </SwiperSlide>
      </Swiper>

      {/*  <SwiperSlide>
          <Image src={sl_1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sl_2} />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Slider;
