import React from 'react'

export const OrderButton = ({ option, chooseOption, name, children }) => {
  return (
    <button
      type="button"
      className={`order-form__button  order-form__button--previous 
              ${option === name ? "checked" : ""} `}
      onClick={() => chooseOption(name)}
    >
      {children}
      <span>{name}</span>
    </button>
  );
};
