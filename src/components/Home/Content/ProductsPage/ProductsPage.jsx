import React from "react";
import "./ProductsPage.scss";

import { useEffect } from "react";
import { useState } from "react";
import firebase from "../../../../utils/fb-config";
// import axios from "axios";
import { ProductSvgSelector } from "../../ProductSvgSelector";

import { ProductCard } from "../ProductCard/ProductCard";
import { Sort } from "./Sort";
import { Spinner } from "../../../Spinner/Spinner";

export const ProductsPage = ({ productIcon, title, path }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios(`http://localhost:8080/${path}`).then(({ data }) =>
  //     setProducts(data)
  //   );
  // }, [path]);


  useEffect(() => {
    firebase
      .database()
      .ref()
      .child(`${path}`)
      .once("value")
      .then((data) => setProducts(data.val()));
  }, [path]);

  return (
    <section className="products">
      <div className="products__header">
        <div className="products__header-left">
          <ProductSvgSelector
            id={productIcon}
            className="products__header-icon"
          />
          <h3 className="products__header-title"> {title}</h3>
        </div>
        <Sort path={path} products={products} setProducts={setProducts} />
      </div>

      <div className="products__cards-container">
        {products ? (
          products.map((product) => (
            <ProductCard
              key={`${product.id}-${product.name}`}
              path={path}
              product={product}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};
