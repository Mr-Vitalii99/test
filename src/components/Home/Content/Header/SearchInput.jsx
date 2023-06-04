import React from "react";
import "./SearchInput.scss";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/icon-search.svg";
import { useState } from "react";
// import axios from "axios";
import firebase from "../../../../utils/fb-config";
import { SearchCard } from "./SearchCard";


export const SearchInput = ({searchInput, setSearchInput }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const searchHandler = (e) => {
    const text = e.target.value.toLowerCase().trim();
    setSearchInputValue(text);
    if (text) {
       
    firebase
      .database()
      .ref()
      .child(`all`)
      .once("value")
      .then( (data)  => 
        setAllProducts(
          Object.values(data.val())
            .reduce((acc, rec) => {
              return [
                ...acc,
                rec.filter((item) =>
                  item.name.toLowerCase().trim().startsWith(text)
                ),
              ];
            }, [])
            .flat()
        )
      );
    } else {
      setAllProducts([]);
     }
  };

  return (
    <div className="search">
      {searchInput && (
        <input
          value={searchInputValue}
          type="search"
          className="search__input"
          onChange={searchHandler}
        />
      )}
      <button
        type="button"
        className="search__button"
        onClick={() => setSearchInput(!searchInput)}
      >
        <SearchIcon />
      </button>
      {searchInput && allProducts.length > 0 && (
        <ul className="search__list">
          {allProducts.map((product) => (
            <SearchCard
              key={`${product.id}-${product.name}`}
              product={product}
              setSearchInput={setSearchInput}
              setSearchInputValue={setSearchInputValue}
              setAllProducts={setAllProducts}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
