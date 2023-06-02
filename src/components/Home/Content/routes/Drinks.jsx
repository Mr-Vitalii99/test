import React from 'react'
import { ProductsPage } from "../ProductsPage/ProductsPage";

export const Drinks = () => {
  return (
    <div>
      <ProductsPage
        productIcon={"icon-drinks"}
        title={"Напої"}
        path={"drinks"}
      />
    </div>
  );
}
