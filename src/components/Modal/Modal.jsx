import React from "react";
import "./Modal.scss";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, closeModal }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);



  const handleBackdropClick = (e) => {
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={() => closeModal()}>
        <button className="modal-close-btn">&#x2715;</button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
