import React from "react";
import "./Banner.scss";
import sushiSetImage from "../../../../assets/images/sushi-set.jpg";
import pizzaImage from "../../../../assets/images/pizza.jpg";
import saladImage from "../../../../assets/images/salad.jpg";
import soupImage from "../../../../assets/images/soup.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

export const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper banner"
      >
        <SwiperSlide>
          <img src={sushiSetImage} alt="Slide sushi-set"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizzaImage} alt="Slide pizza"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={saladImage} alt="Slide salad"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={soupImage} alt="Slide soup"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
