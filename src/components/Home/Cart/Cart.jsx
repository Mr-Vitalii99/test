import React from "react";
import "./Cart.scss";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CustomContext } from "../../Context/Context";
import { ReactComponent as IconPlus } from "../../../assets/icons/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../../assets/icons/icon-minus.svg";
import { IconButton } from "../../Buttons/IconButton";
import { CartTotalContainer } from "./CartTotalContainer";

export const Cart = () => {
  const {
    cart,
    increaseProductQuantity,
    decreaseProductQuantity,
    deleteProductCard,
  } = useContext(CustomContext);

  const location = useLocation();
  const isOrderPage = location.pathname === "/order";

  return (
    <div className="cart">
      {cart.length ? (
        <div className="cart__card-container">
          <h2 className="cart__title">Кошик</h2>
          <ul className="cart__card-list">
            {cart.map((card, index) => (
              <li key={`${card.id}-${index}`} className="cart__card-item">
                <img
                  className="cart__card-img"
                  src={card.pic}
                  alt={card.name}
                />
                <div className="cart__card-info">
                  <h3 className="cart__card-title">{card.name}</h3>
                  <p className="cart__card-size">
                    {card.category === "pizza" && <span>розмір: </span>}
                    <span>
                      {card.category === "pizza" && card.size === "small"
                        ? "26 см"
                        : card.category === "pizza" && card.size === "middle"
                        ? "32 см"
                        : card.category === "pizza" && card.size === "large"
                        ? "40 см"
                        : ""}
                    </span>
                  </p>
                  <div className="cart__card-pay">
                    <div className="cart__card-quantity">
                      <IconButton
                        aria-label="Відняти один"
                        onClick={() => decreaseProductQuantity(card)}
                        style={{ backgroundColor: "white" }}
                      >
                        <IconMinus
                          width={"16px"}
                          height={"16px"}
                          style={{ fill: "white" }}
                        />
                      </IconButton>

                      <span className="cart__card-quantity-count">
                        {card.count}
                      </span>
                      <IconButton
                        aria-label="Додати один"
                        onClick={() => increaseProductQuantity(card)}
                      >
                        <IconPlus width={"16px"} height={"16px"} />
                      </IconButton>
                    </div>
                    <span className="cart__card-price">
                      {card.count * parseInt(card.price)} грн.
                    </span>
                  </div>
                </div>
                <span
                  className="cart__card-delete"
                  onClick={() => deleteProductCard(card)}
                >
                  &#x2715;
                </span>
              </li>
            ))}
          </ul>
          {isOrderPage && <CartTotalContainer />}
          {!isOrderPage &&
            <div className="cart__bottom">
              <span className="cart__bottom-price">
                {cart.reduce((acc, rec) => {
                  return acc + parseInt(rec.price) * rec.count;
                }, 0)}{" "}
                грн.
              </span>
              <NavLink to="/order">
                <button className="cart__bottom-button">
                  Оформити замовлення
                </button>
              </NavLink>
            </div>
          }
        </div>
      ) : (
        <div className="cart__container">
          <h2 className="cart__title">Ваш кошик порожній</h2>
          <p className="cart__text">Додайте ж швидше щось!</p>
          <div className="cart__free">Безкоштовна доставка від 800 СОМ</div>
        </div>
      )}
    </div>
  );
};
