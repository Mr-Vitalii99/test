import React, { useEffect, useState } from "react";
import "./Order.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CustomContext } from "../../Context/Context";

import { ReactComponent as CardIcon } from "../../../assets/icons/icon-card.svg";
import { ReactComponent as WalletIcon } from "../../../assets/icons/icon-wallet.svg";
import { ReactComponent as IconPlus } from "../../../assets/icons/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../../assets/icons/icon-minus.svg";
import { InputRadio } from "./InputRadio";
import { Input } from "./Input";
import { OrderButton } from "./OrderButton";
import { Checkbox } from "./Checkbox";
import { IconButton } from "../../Buttons/IconButton";
import { CartTotalContainer } from "../Cart/CartTotalContainer";
import { Modal } from "../../Modal/Modal";
import { ModalContent } from "./ModalContent";

export const Order = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [deliveryOption, setDeliveryOption] = useState("Кур'єром");
  const [payOption, setPayOption] = useState("Готівкою");
  const [stickAmount, setStickAmount] = useState(1);

  useEffect(() => {
    setValue("delivery", deliveryOption);
  }, [setValue, deliveryOption]);
  useEffect(() => {
    setValue("pay", payOption);
  }, [setValue, payOption]);
  useEffect(() => {
    setValue("stickAmount", stickAmount);
  }, [setValue, stickAmount]);

  const chooseOption = (option) => {
    switch (option) {
      case "Кур'єром":
      case "Самовивіз":
        setDeliveryOption(option);
        break;
      case "Готівкою":
      case "Карткою":
        setPayOption(option);
        break;

      default:
        break;
    }
  };

  const { cart, totalCount, totalPrice, orderDiscount, deliveryCost } =
    useContext(CustomContext);

  const TOKEN = "6275533372:AAE8QMB0Cznj68Kw4xmhctaa2aVOze3D95A";
  const CHAT_ID = "-1001850985728";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const onSubmit = (data) => {

    console.log(cart.length);

    if (!cart.length) {
      toast.warn("Спочатку треба замовити товар.");
      return;
    }

    let message = `<b>Замовлення</b>\n \n`;
    message = `<b>Дані замовника</b>\n \n`;
    message += `<b>Ім'я: </b>${data.firstName}\n`;
    message += `<b>Прізвище: </b>${data.lastName}\n`;
    message += `<b>Форма доставки: </b>${data.delivery}\n`;
    message += `<b>Вулиця: </b>${data.street}\n`;
    message += `<b>Будинок: </b>${data.house}\n`;
    message += `<b>Квартира: </b>${data.apartment}\n`;
    message += `<b>Під'їзд: </b>${data.entrance}\n`;
    message += `<b>Поверх: </b>${data.floor}\n`;
    message += `<b>Код під'їзду: </b>${data.code}\n`;
    message += `<b>Форма оплати: </b>${data.pay}\n`;
    message += `<b>Підготувати здачу з: </b>${data.change}\n`;
    message += `<b>Телефон: </b>${data.phone}\n`;
    message += `<b>Коментар до замовлення: </b>${data.comment}\n`;
    message += `<b>Палички + соусник звичайні: </b>${data.stickAmount}\n \n`;

    message += `<b>Дані про замовлення</b>\n \n`;
    cart.forEach((product, idx) => {
      message += `<b>Товар № ${idx + 1}: </b>${product.name}
  ${product.category === "pizza" ? "розмір: " + product.size : ""} 
  кількість: ${product.count}\n\n`;
    });
    message += `<b>Загальна сума завомлення: </b>${totalPrice} грн.\n`;
    message += `<b>Знижка: </b>${orderDiscount} грн.\n`;
    message += `<b>Вартість з урахуванням знижки: </b>${
      totalPrice - orderDiscount
    } грн.\n`;
    message += `<b>Вартість доставки: </b>${deliveryCost}\n`;

    console.log(message);

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    // reset();
    openModal();
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };
  const closeModal = () => {
    document.body.style.overflow = "";
    setShowModal(false);
  };

  return (
    <>
      <section className="order">
        <h2 className="order__title">Ваші дані</h2>
        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="order-form__block">
            <Input
              register={register}
              name={"firstName"}
              placeholder={"Ім'я"}
              errors={errors}
            />
            <Input
              register={register}
              name={"lastName"}
              placeholder={"Прізвище"}
              errors={errors}
            />
          </div>
          <div className="order-form__block">
            <InputRadio
              option={"delivery"}
              value={deliveryOption}
              register={register}
            />
            <InputRadio
              option={"delivery"}
              value={deliveryOption}
              register={register}
            />
            <OrderButton
              option={deliveryOption}
              chooseOption={chooseOption}
              name={"Кур'єром"}
            />
            <OrderButton
              option={deliveryOption}
              chooseOption={chooseOption}
              name={"Самовивіз"}
            />
          </div>
          <div className="order-form__block">
            <Input
              register={register}
              name={"street"}
              placeholder={"Вулиця"}
              errors={errors}
            />
          </div>
          <div className="order-form__block">
            <Input
              register={register}
              name={"house"}
              placeholder={"Будинок"}
              errors={errors}
            />
          </div>

          <div className="order-form__block">
            <Input register={register} name={"apartment"} placeholder={"Кв"} />
            <Input
              register={register}
              name={"entrance"}
              placeholder={"Під'їзд"}
            />
          </div>
          <div className="order-form__block">
            <Input register={register} name={"floor"} placeholder={"Поверх"} />
            <Input
              register={register}
              name={"code"}
              placeholder={"Код під'їзду"}
            />
          </div>

          <div className="order-form__block">
            <InputRadio option={"pay"} value={payOption} register={register} />
            <InputRadio option={"pay"} value={payOption} register={register} />
            <OrderButton
              option={payOption}
              chooseOption={chooseOption}
              name={"Готівкою"}
            >
              <WalletIcon className="order-form__icon" />
            </OrderButton>
            <OrderButton
              option={payOption}
              chooseOption={chooseOption}
              name={"Карткою"}
            >
              <CardIcon className="order-form__icon" />
            </OrderButton>
          </div>

          <div className="order-form__checkbox-container">
            <label className="order-form__checkbox-field">
              <Checkbox register={register} />
              <span>Підготувати здачу з</span>
              <input {...register("change")} type="text" placeholder="Сума" />
            </label>
          </div>

          <div className="order-form__block">
            <Input
              register={register}
              name={"phone"}
              placeholder={"Телефон"}
              errors={errors}
            />
          </div>
          <div className="order-form__block">
            <Input
              register={register}
              name={"comment"}
              placeholder={"Коментар до замовлення"}
            />
          </div>

          <div className="order-form__block">
            <span> Палички + соусник звичайні</span>
            <div className="order-form__quantity-button-container">
              <IconButton
                aria-label="Додати один"
                onClick={() => {
                  setStickAmount(stickAmount + 1);
                }}
              >
                <IconPlus width={"20px"} height={"20px"} />
              </IconButton>
              <span className="order-form__quantity">{stickAmount}</span>
              <IconButton
                style={{ backgroundColor: "transparent" }}
                aria-label="Відняти один"
                onClick={() => {
                  setStickAmount(
                    stickAmount === 0 ? stickAmount : stickAmount - 1
                  );
                }}
              >
                <IconMinus width={"20px"} height={"20px"} />
              </IconButton>
            </div>
          </div>
          <div className="order__total">
            <CartTotalContainer />
          </div>
          <button type="submit" className="order-form__submit-button">
            Оформити замовлення
          </button>
          <p className="order-form__text">
            Натискаючи на кнопку Оформити замовлення, Ви підтверджуєте свою
            згоду на обробку персональних даних відповідно до{" "}
            <a href="#" className="order-form__link">
              Публічної оферти
            </a>
          </p>
        </form>
        {showModal && (
          <Modal closeModal={closeModal}>
           <ModalContent/>
          </Modal>
        )}
      </section>
    </>
  );
};
