import React from 'react'

export const SortProduct = ({ text, setSortCategory, sortProduct }) => {

  const sortByCategory = () => {
    setSortCategory(text);
    sortProduct(text);
  };

  return (
    <li className="sort__item" onClick={sortByCategory}>
      {text}
    </li>
  );
};
