import "./Product.scss";
import axios from "axios";
import firebase from "../../../../utils/fb-config";

//* SVG/-----------------------------
import { ReactComponent as ArrowLeftIcon } from "../../../../assets/icons/icon-orange-arrow-left.svg";
import { ReactComponent as IconPlus } from "../../../../assets/icons/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../../../assets/icons/icon-minus.svg";
//* SVG/-----------------------------

import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { PizzaSize } from "./PizzaSize";
import { CardButton } from "./CardButton";
import { ProductPrice } from "./ProductPrice";
import { CustomContext } from "../../../Context/Context";
import { IconButton } from "../../../Buttons/IconButton";
import { ProductSwiper } from "./ProductSwiper";

export const Product = () => {
  const [product, setProduct] = useState({});
  const [recommendedProduct, setRecommendedProduct] = useState([]);
  const [pizzaSize, setPizzaSize] = useState("small");
  const [productCounter, setProductCounter] = useState(1);

  const { path, id } = useParams();
  
  const navigate = useNavigate();

  const { increaseProductQuantity, decreaseProductQuantity } =
    useContext(CustomContext);

  // useEffect(() => {
  //   axios(`http://localhost:8080/${path}/${id}`).then(({ data }) =>
  //     setProduct(data)
  //   );

  //   axios(`http://localhost:8080/${path}`).then(({ data }) => {
  //     setRecommendedProduct(data.slice(0, 6));
  //   });
  // }, [path, id]);

  useEffect(() => {
    firebase
      .database()
      .ref()
      .child(`${path}/${id}`)
      .once("value")
      .then((data) => setProduct(data.val()));

    firebase
      .database()
      .ref()
      .child(`${path}`)
      .once("value")
      .then((data) => setRecommendedProduct(data.val().slice(0, 6)));
  }, [path, id]);

  const increaseProductCounter = () => {
    setProductCounter(productCounter + 1);
  }
  const decreaseProductCounter = () => {
    setProductCounter(productCounter === 1 ? productCounter : productCounter - 1);
  };

  return (
    <div className="product">
      <div className="product__back-button" onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
        <span className="product__back-button-text">Назад</span>
      </div>
      <div className="product__content">
        <img
          className="product__content-img"
          src={product.pic}
          alt={product.name}
        />
        <div className="product__content-info">
          <h2 className="product__content-title">{product.name}</h2>
          <PizzaSize
            className="product__content-sizes"
            product={product}
            setPizzaSize={setPizzaSize}
          />

          <div className="product__content-buy">
            <ProductPrice product={product} pizzaSize={pizzaSize} />
            <div className="product__content-quantity">
              <IconButton
                style={{ backgroundColor: "transparent" }}
                aria-label="Відняти один"
                onClick={() => {
                  decreaseProductQuantity(product);
                  decreaseProductCounter();
                } }
              >
                <IconMinus width={"25px"} height={"25px"} />
              </IconButton>
              <span className="product__content-pay-quantity">
                {productCounter}
              </span>
              <IconButton
                aria-label="Додати один"
                onClick={() => {
                  increaseProductQuantity(product, pizzaSize);
                  increaseProductCounter();
                }}
              >
                <IconPlus width={"25px"} height={"25px"} />
              </IconButton>
            </div>
          </div>

          <div className="product__content-composition">
            <p className="product__content-composition-title">Склад</p>
            <p className="product__content-composition-text">{product.info}</p>
          </div>
          <CardButton
            product={product}
            pizzaSize={pizzaSize}
            className={"product__button"}
          />
        </div>
      </div>
      <h3 className="product__recommend">Рекомендуємо до цього товару</h3>
      <ProductSwiper recommendedProduct={recommendedProduct} />
    </div>
  );
};
