import React from 'react'

//* Swiper ////-----------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
//* Swiper ////-----------------------------------------------

import { ProductCard } from "./ProductCard";

export const ProductSwiper = ({ recommendedProduct }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      slidesPerView={2}
      spaceBetween={10}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        1170: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {recommendedProduct.map((item, idx) => (
        <SwiperSlide key={idx}>
          <ProductCard
            path={item.category}
            product={item}
            className={"product__swiper-card"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
