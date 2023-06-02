import React from "react";

export const ProductPrice = ({ product, pizzaSize }) => {
  const price =
    product.category === "pizza" && pizzaSize === "small"
      ? product.priceSmall
      : product.category === "pizza" && pizzaSize === "middle"
      ? product.priceMiddle
      : product.category === "pizza" && pizzaSize === "large"
      ? product.priceLarge
      : product.price;

  return <span className="card__price">{price}</span>;
};
