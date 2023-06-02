import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import { ReactComponent as IconClock } from "../../../../assets/icons/icon-clock.svg";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  const [searchInput, setSearchInput] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      {isMobile && (
        <Link to="/">
          <img className="header__logo" src={logo} alt="site logo" />
        </Link>
      )}
      <div className="header__left">
        {isMobile && searchInput === false ? (
          <div className="header__phone">
            <div className="header__phone-block">
              <p className="header__phone-title">Наш телефон</p>
              <a className="header__phone-link" href="tel:+380998989777">
                +38 099 89 89 777
              </a>
              <br />
              <a className="header__phone-link" href="tel:+380998989555">
                +38 099 89 89 555
              </a>
            </div>
            <div className="header__phone-time">
              <IconClock />
              <span>працюємо з</span>
              <span>10:00 по 00:00</span>
            </div>
          </div>
        ) : isMobile === false ? (
          <div className="header__phone">
            <div className="header__phone-block">
              <p className="header__phone-title">Наш телефон</p>
              <a className="header__phone-link" href="tel:+380998989777">
                +38 099 89 89 777
              </a>
              <br />
              <a className="header__phone-link" href="tel:+380998989555">
                +38 099 89 89 555
              </a>
            </div>
            <div className="header__phone-time">
              <IconClock />
              <span>працюємо з</span>
              <span>10:00 по 00:00</span>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="header__address">
          <p className="header__title">місто</p>
          <p className="header__city">Харків</p>
        </div>
      </div>
      <div className="header__right">
        {searchInput === false && (
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink className="header__link" to="/reviews">
                Відгуки
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink className="header__link" to="/express">
                Доставка і оплата
              </NavLink>
            </li>
          </ul>
        )}
        <SearchInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
    </header>
  );
};
