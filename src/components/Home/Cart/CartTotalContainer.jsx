import React from "react";
import "./CartTotalContainer.scss";
import { useContext } from "react";
import { CustomContext } from "../../Context/Context";

export const CartTotalContainer = () => {
  const { totalCount, totalPrice, orderDiscount, deliveryCost } =
    useContext(CustomContext);

  return (
    <div className="cart-total">
      <h2 className="cart-total__title">Разом</h2>
      <div className="cart-total__container">
        <div className="cart-total__quantity">
          <span className="cart-total__text">{totalCount}</span>
          <span className="cart-total__text">шт.</span>
        </div>
          <span className="cart-total__bold">{totalPrice} грн.</span>
      </div>
      <div className="cart-total__container">
        <span className="cart-total__text">Знижка: </span>
        <span className="cart-total__bold">{orderDiscount} грн.</span>
      </div>
      <div className="cart-total__container">
        <span className="cart-total__text">Доставка: </span>
        <span className="cart-total__bold">{deliveryCost}</span>
      </div>
    </div>
  );
};
