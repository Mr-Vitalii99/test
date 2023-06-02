import React from 'react'
import { ReactComponent as IconCheckboxEmpty } from '../../../assets/icons/icon-checkbox-empty.svg';
import { ReactComponent as IconCheck } from '../../../assets/icons/icon-check.svg';

export const Checkbox = ({ register }) => {
  return (
    <>
      <input
        {...register("isNeedChange")}
       /*  name="isNeedChange" */
        className="order-form__checkbox"
        type="checkbox"
        /* id="order-form__checkbox" */
      />
      <IconCheckboxEmpty className="order-form__icon icon-checkbox--empty" />
      <IconCheck className="order-form__icon icon-checkbox--checked" />
    </>
  );
};
