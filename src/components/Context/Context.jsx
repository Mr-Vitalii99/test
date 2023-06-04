import React from "react";
import { useState, createContext } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useState([]);

  const findIndexSameProduct = (product) => {
    const idx = cart.findIndex((el) => {
      if (product.category === "pizza") {
        return el.name === product.name && el.size === product.size;
      } else {
        return el.name === product.name;
      }
    });
    return idx;
  };

  const setProductPrice = (product, pizzaSize) => {
    if (product.category === "pizza") {
      switch (pizzaSize) {
        case "small":
          product.price = product.priceSmall;
          break;
        case "middle":
          product.price = product.priceMiddle;
          break;
        case "large":
          product.price = product.priceLarge;
          break;
        default:
          break;
      }
    }
  };

  const addProductToCart = (product, pizzaSize) => {
    setProductPrice(product, pizzaSize);

    const indexSameProduct = findIndexSameProduct(product);

    if (indexSameProduct >= 0) {
      cart[indexSameProduct].count = cart[indexSameProduct].count + 1;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          count: 1,
        },
      ]);
    }
  };

  const increaseProductQuantity = (product, pizzaSize) => {
    setProductPrice(product, pizzaSize);
    const indexSameProduct = findIndexSameProduct(product);

    if (indexSameProduct >= 0) {
      setCart(
        cart.map((el) => {
          if (product.category === "pizza") {
            if (product.name === el.name && el.size === product.size) {
              return { ...el, count: el.count + 1 };
            } else {
              return el;
            }
          } else if (product.name === el.name) {
            return { ...el, count: el.count + 1 };
          } else {
            return el;
          }
        })
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          count: 2,
        },
      ]);
    }
  };

  const decreaseProductQuantity = (product) => {
    const indexSameProduct = findIndexSameProduct(product);

    if (cart[indexSameProduct] && cart[indexSameProduct].count > 1) {
      setCart(
        cart.map((el) => {
          if (el.category === "pizza") {
            if (product.name === el.name && el.size === product.size) {
              return { ...el, count: el.count - 1 };
            } else {
              return el;
            }
          } else if (product.name === el.name) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        })
      );
    } else {
      setCart(
        cart.filter((el) => {
          if (el.category === "pizza") {
            return el.name !== product.name || el.size !== product.size;
          } else {
            return el.name !== product.name;
          }
        })
      );
    }
  };

  const deleteProductCard = (productCard) => {
    setCart(
      cart.filter((el) => {
        if (productCard.category === "pizza") {
          return el.name !== productCard.name || el.size !== productCard.size;
        } else {
          return el.name !== productCard.name;
        }
      })
    );
  };

  const emptyСart = () => {
    setCart([]);
  }

  const discount = 10;

  const totalCount = cart.reduce((acc, rec) => {
    return acc + rec.count;
  }, 0);

  const totalPrice = cart.reduce((acc, rec) => {
    return acc + parseInt(rec.price) * rec.count;
  }, 0);

  const orderDiscount =
    totalPrice > 1000 ? Math.round((totalPrice / 100) * discount) : totalPrice;
  
  const deliveryCost =
    totalPrice > 700 ? "Безкоштовно" : "150 грн" ;

  const value = {
    cart,
    addProductToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    deleteProductCard,
    emptyСart,
    totalCount,
    totalPrice,
    orderDiscount,
    deliveryCost,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
