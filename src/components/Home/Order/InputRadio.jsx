import React from 'react'

export const InputRadio = ({ option, value, register }) => {
  
  return (
    <input
      {...register(option)}
      type="radio"
      value={value}
      checked={option === value}
      style={{ display: "none" }}
    />
  );
};
