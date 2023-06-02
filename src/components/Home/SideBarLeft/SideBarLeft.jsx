import React from "react";
import "./SideBarLeft.scss";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ProductSvgSelector } from "../ProductSvgSelector";

export const SideBarLeft = () => {
  return (
    <aside className="sidebar-left">
      <div className="sidebar-left__top">
        <Link to="/">
          <img className="sidebar-left__logo" src={logo} alt="site logo" />
        </Link>
        <h1 className="sidebar-left__title">Romsem</h1>
      </div>

      <ul className="sidebar-left__list">
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-pizza" />
          <NavLink className="sidebar-left__list-link" to="/pizza">
            Піца
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-sets" />
          <NavLink className="sidebar-left__list-link" to="/sets">
            Сети
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-wok" />
          <NavLink className="sidebar-left__list-link" to="/wok">
            WOK
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-rolls" />
          <NavLink className="sidebar-left__list-link" to="/rolls">
            Роли
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-sushi" />
          <NavLink className="sidebar-left__list-link" to="/sushi">
            Суши
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-salad" />
          <NavLink className="sidebar-left__list-link" to="/salad">
            Салати
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-soup" />
          <NavLink className="sidebar-left__list-link" to="/soup">
            Супи
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-corn" />
          <NavLink className="sidebar-left__list-link" to="/corndog">
            Корн доги
          </NavLink>
        </li>
        <li className="sidebar-left__list-item">
          <ProductSvgSelector id="icon-drinks" />
          <NavLink className="sidebar-left__list-link" to="/drinks">
            Напої
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
