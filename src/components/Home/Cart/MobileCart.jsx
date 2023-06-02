import React from "react";
import "./Cart.scss";
import { Cart } from "./Cart";
import { CartTotalContainer } from "./CartTotalContainer";
import { useContext } from "react";
import { CustomContext } from "../../Context/Context";

export const MobileCart = () => {
  const { cart } = useContext(CustomContext);

  return (
    <>
      <Cart />
    </>
  );
};
