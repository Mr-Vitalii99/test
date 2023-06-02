import React from "react";
import './SideBarRight.scss';
import { Cart } from "../Cart/Cart";

export const SideBarRight = () => {
  return (
    <div className="sidebar-right">
      <Cart />
    </div>
  );
};
