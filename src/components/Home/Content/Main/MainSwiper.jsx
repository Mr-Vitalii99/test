import axios from "axios";
import React, { useState, useEffect } from "react";
import "./MainSwiper.scss";

//* Swiper ////-----------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
//* Swiper ////-----------------------------------------------


import { ProductCard } from "../ProductCard/ProductCard";

export const MainSwiper = () => {
  const [products, setProducts] = useState([]);
  const [path, setPath] = useState("new");

  useEffect(() => {
    axios(`http://localhost:8080/${path}`).then(({ data }) =>
      setProducts(data)
    );
  }, [path]);

  const getNewProduct = (e) => {
    setPath("new");
  };
  const getPopularProduct = () => {
    setPath("popular");
  };

  return (
    <div className="main-swiper">
      <div className="main-swiper__header">
        <button
          className={`main-swiper__button ${path === "new" ? "active" : ""}`}
          onClick={getNewProduct}
        >
          Новинки
        </button>
        <button
          className={`main-swiper__button ${
            path === "popular" ? "active" : ""
          }`}
          onClick={getPopularProduct}
        >
          Популярне
        </button>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={`${product.id}-${product.name}`}>
            <ProductCard
              path={product.category}
              product={product}
              className={"main-swiper__card"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
