import React from "react";
import './Sort.scss';
import { useState } from "react";
import { ReactComponent as IconArrowDown } from "../../../../assets/icons/icon-arrow-down.svg";
import { SortProduct } from "./SortProduct";

export const Sort = ({ path, products, setProducts }) => {
  const [sortCategory, setSortCategory] = useState("За замовчуванням");
  let sortedProducts = [...products]; 
  
  const sortProduct = (categoryName) => {
    switch (categoryName) {
      case "За замовчуванням":
        sortedProducts.sort((a, b) => a.id - b.id);
        setProducts(sortedProducts);
        break;
      case "Назва":
        sortedProducts.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        setProducts(sortedProducts);
        break;
      case "Спочатку дешевше":
        sortedProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        setProducts(sortedProducts);
        break;
      case "Спочатку дорожче":
        sortedProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        setProducts(sortedProducts);
        break;
      case "Кількість шматочків":
        sortedProducts.sort(
          (a, b) =>
            parseInt(a.info.split(" ")[2]) - parseInt(b.info.split(" ")[2])
        );
        setProducts(sortedProducts);
        break;
      case "Вага":
        sortedProducts.sort(
          (a, b) =>
            parseInt(a.info.split(" ")[0]) - parseInt(b.info.split(" ")[0])
        );
        setProducts(sortedProducts);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sort">
      <p className="sort__title">Сортування</p>
      <p className="sort__title-default">
        {sortCategory} <IconArrowDown />
      </p>
      <div className="sort__line"></div>
      <ul className="sort__list">
        <SortProduct
          text="За замовчуванням"
          setSortCategory={setSortCategory}
          sortProduct={sortProduct}
        />
        <SortProduct
          text="Назва"
          setSortCategory={setSortCategory}
          sortProduct={sortProduct}
        />
        <SortProduct
          text="Спочатку дешевше"
          setSortCategory={setSortCategory}
          sortProduct={sortProduct}
        />
        <SortProduct
          text="Спочатку дорожче"
          setSortCategory={setSortCategory}
          sortProduct={sortProduct}
        />
        {path === "sets" || path === "rolls" || path === "sushi" ? (
          <>
            <SortProduct
              text="Кількість шматочків"
              setSortCategory={setSortCategory}
              sortProduct={sortProduct}
            />
            <SortProduct
              text="Вага"
              setSortCategory={setSortCategory}
              sortProduct={sortProduct}
            />
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
