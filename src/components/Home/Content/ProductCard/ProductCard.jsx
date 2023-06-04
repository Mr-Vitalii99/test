import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { PizzaSize } from "./PizzaSize";
import { CardButton } from "./CardButton";
import { ProductPrice } from "./ProductPrice";
import { useState } from "react";

export const ProductCard = ({ path, product, className }) => {
  const [pizzaSize, setPizzaSize] = useState("small");

  return (
    <div className={`card ${className ?? ""}`}>
      <Link className="card__link" to={`/${path}/product/${product.id}`}>
        <img className="card__img" src={product.pic} alt={product.name} />
      </Link>
      <div className="card__body">
        <h4 className="card__title">{product.name}</h4>
        <p className="card__text">{product.info}</p>
        {product.category === "pizza" ? (
          <PizzaSize product={product} setPizzaSize={setPizzaSize} />
        ) : (
          ""
        )}
        {product.category === "sets" ||
        product.category === "rolls" ||
        product.category === "sushi" ? (
          <div>
            <span className="card__text">{product.pieces}</span>{" "}
            <span className="card__text">{product.grams}</span>
          </div>
        ) : (
          ""
        )}

        <div className="card__bottom">
          <ProductPrice product={product} pizzaSize={pizzaSize} />
          <CardButton
            product={product}
            pizzaSize={pizzaSize}
            className={className}
          />
        </div>
      </div>
    </div>
  );
};
