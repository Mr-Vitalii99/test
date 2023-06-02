import React from 'react'
import { ProductsPage } from "../ProductsPage/ProductsPage";

export const CornDog = () => {
  return (
    <div>
      <ProductsPage
        productIcon={"icon-corn"}
        title={"Корн доги"}
        path={"corn"}
      />
    </div>
  );
}
