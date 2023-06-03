import React from 'react';
import './Spinner.scss';
import spinner from "../../assets/images/spinner.gif";


export const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
}
