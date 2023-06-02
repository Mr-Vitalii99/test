import React from "react";
import { useState } from "react";
import "./PizzaSize.scss";

export const PizzaSize = ({ product, setPizzaSize, className }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (e, index) => {
    setActiveItem(index);
    const size = e.target.textContent;
    choosePizzaSize(size);
  };

  const choosePizzaSize = (size) => {
    switch (size) {
      case "26":
        setPizzaSize("small");
        product.size = "small";
        break;
      case "32":
        setPizzaSize("middle");
        product.size = "middle";
        break;
      case "40":
        setPizzaSize("large");
        product.size = "large";
        break;

      default:
        break;
    }
  };

  return (
    <>
      {product.sizes ? (
        <ul className={`sizes-list ${className ?? ""}`}>
          {product.sizes.map((size, index) => (
            <li
              className={`sizes-list__item ${
                activeItem === index ? "active" : ""
              } }`}
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
              {size}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
