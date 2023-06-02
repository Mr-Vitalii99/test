import React from 'react';
import "./ModalContent.scss";
import image from  "../../../assets/images/bon_appetit.png";

export const ModalContent = () => {
  return (
    <div className="product-modal">
      <h2 className="product-modal__title">Ваше замовлення прийнято!</h2>
      <p className="product-modal__text">
        Ми дуже раді що ви обрали наш ресторан.
      </p>
      <p className="product-modal__text">
        Протягом 10 хвилин з Вами зв'яжеться наш менеджер.
      </p>
      <p className="product-modal__bold">СМАЧНОГО!!</p>
      <img className="product-modal__img" src={image} alt="японська дівчина" />
    </div>
  );
}
