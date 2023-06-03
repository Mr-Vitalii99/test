import React from "react";
import "./Content.scss";

import { Header } from "./Header/Header";
import { Routes, Route } from "react-router-dom";

import { Pizza } from "./routes/Pizza";
import { Sets } from "./routes/Sets";
import { Wok } from "./routes/Wok";
import { Rolls } from "./routes/Rolls";
import { Sushi } from "./routes/Sushi";
import { Salad } from "./routes/Salad";
import { Soup } from "./routes/Soup";
import { CornDog } from "./routes/CornDog";
import { Drinks } from "./routes/Drinks";
import { Main } from "./Main/Main";
import { Product } from "./ProductCard/Product";
import { Reviews } from "./Reviews/Reviews";
import { Express } from "./Express/Express";
import { Footer } from "./Footer/Footer";
import { ContentLayout } from "./ContentLayout/ContentLayout";
import { Order } from "../Order/Order";
import { MobileCart } from "../Cart/MobileCart";

export const Content = () => {
  return (
    <div className="home__content">
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ContentLayout />}>
              <Route path="/" element={<Main />} />
              <Route path="pizza" element={<Pizza />} />
              <Route path="sets" element={<Sets />} />
              <Route path="wok" element={<Wok />} />
              <Route path="rolls" element={<Rolls />} />
              <Route path="sushi" element={<Sushi />} />
              <Route path="salad" element={<Salad />} />
              <Route path="soup" element={<Soup />} />
              <Route path="corndog" element={<CornDog />} />
              <Route path="drinks" element={<Drinks />} />
            </Route>
            <Route path=":path/product/:id" element={<Product />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="express" element={<Express />} />
            <Route path="cart" element={<MobileCart />} />
            <Route path="order" element={<Order />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};
