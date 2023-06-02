import React, { useContext } from "react";
import "./CardButton.scss";
import { CustomContext } from "../../../Context/Context";

export const CardButton = ({ product, pizzaSize, className }) => {
  const { addProductToCart } = useContext(CustomContext);
  return (
    <button
      type="button"
      className={`card-button ${className ?? ""}`}
      onClick={() => addProductToCart(product, pizzaSize)}
    >
      {className !== "product__swiper-card" ? "Хочу!" : "+"}
    </button>
  );
};
