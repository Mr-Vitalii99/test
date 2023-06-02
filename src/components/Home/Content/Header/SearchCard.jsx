import React from "react";
import './SearchCard.scss'
import { Link } from "react-router-dom";

export const SearchCard = ({
  product,
  setSearchInput,
  setSearchInputValue,
  setAllProducts,
}) => {
  return (
    <Link
      to={`/${product.category}/product/${product.id}`}
      onClick={() => {
        setSearchInput(false);
        setSearchInputValue("");
        setAllProducts([]);
      }}
    >
      <li className="search-card">
        <img
          src={product.pic}
          alt={product.name}
          className="search-card__img"
        />
        <div className="search-card__info">
          <h2 className="search-card__title">{product.name}</h2>
          <p className="search-card__price">{product.price}</p>
        </div>
      </li>
    </Link>
  );
};
