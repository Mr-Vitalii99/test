import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category, path }) => {
  return (
    <li className="category-card">
      <Link to={`/${path}`}>
        <img
          className="category-card__img"
          src={category.pic}
          alt={category.name}
        />
      </Link>
      <span className="category-card__text">{category.name}</span>
    </li>
  );
};
