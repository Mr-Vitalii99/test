import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { FooterSvgSelector } from "./FooterSvgSelector";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <NavLink className="footer__left-title" to="/express">
          Доставка і оплата
        </NavLink>
        <NavLink className="footer__left-title" to="/reviews">
          Відгуки
        </NavLink>
      </div>

      <div className="footer__mid">
        <span className="footer__mid-text">
          Виберіть зручний месенджер для спілкування
        </span>

        <div className="footer__mid-messengers">
          <a target="_blank" href="https://web.whatsapp.com/" rel="noreferrer">
            <FooterSvgSelector id="icon-whatsApp" />
          </a>

          <a
            target="_blank"
            href="https://web.telegram.org/k/"
            rel="noreferrer"
          >
            <FooterSvgSelector id="icon-telegram" />
          </a>

          <a target="_blank" href="https://instagram.com" rel="noreferrer">
            <FooterSvgSelector id="icon-instagram" />
          </a>
        </div>
      </div>

      <div className="footer__right">
        <a href="tel:+380998989777" className="footer__right-link">
          +38 099 89 89 777
        </a>
        <a href="tel:+380998989777" className="footer__right-link">
          +38 099 89 89 555
        </a>
        <p className="footer__right-text">Адреса: Свободи 126</p>
      </div>
      <div className="footer__mobile-menu">
        <NavLink className="footer__mobile-menu-link" to="/">
          <FooterSvgSelector id="icon-menu" />
          <p>Меню</p>
        </NavLink>
        <NavLink className="footer__mobile-menu-link" to="/cart">
          <FooterSvgSelector id="icon-basket" />
          <p>Кошик</p>
        </NavLink>
        <NavLink className="footer__mobile-menu-link" to="/reviews">
          <FooterSvgSelector id="icon-reviews" />
          <p>Відгуки</p>
        </NavLink>
      </div>
    </footer>
  );
};
