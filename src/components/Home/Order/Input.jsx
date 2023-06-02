import React from "react";

export const Input = ({ register, name, placeholder, errors }) => {

  const validationRules = {};
  const phonePattern = {};

  if (errors) {
    validationRules.required = "Це поле обов'язково до заповнення.";
  }

  if (name === "phone") {
    phonePattern.value = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    phonePattern.message =
      "Неправильний формат номера телефону. Приклад номеру +38 093 123 4567 або 093 123 4567 ";
    validationRules.pattern = phonePattern;
  }

  return (
    <div className="order-form__input-container">
      <input
        {...register(name, validationRules)}
        type="text"
        placeholder={placeholder}
      />

      <p style={{ color: "red", fontSize: "11px", fontWeight: "bold" }}>
        {errors ? errors[name] && errors[name].message : ""}
      </p>
    </div>
  );
};
