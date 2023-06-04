import React from 'react';
import './ReviewForm.scss';
import { useForm } from "react-hook-form";
// import axios from "axios";
import firebase from "../../../../utils/fb-config";

export const ReviewForm = ({ isShowReview, setIsShowReview }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear()).substring(2);
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  // const addReview = (data) => {
  //   axios.post("http://localhost:8080/reviews", data);
  //   setIsShowReview(!isShowReview);
  //   reset();
  // };

  const addReview = (data) => {
    const reviewsRef = firebase.database().ref("reviews");
    reviewsRef
      .once("value")
      .then((snapshot) => {
        const currentReviews = snapshot.val() || [];
        const newReviewId = currentReviews.length + 1;
        currentReviews.push({ ...data, id: newReviewId });
        reviewsRef
          .set(currentReviews)
          .then(() => {
            setIsShowReview(!isShowReview);
            reset();
          })
          .catch((error) => {
            console.log("Помилка додавання відгуку:", error);
          });
      })
      .catch((error) => {
        console.log("Помилка отримання відгуків:", error);
      });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit(addReview)}>
      <label className="review-form__label">
        <input
          {...register("user_name", {
            required: "Це поле обов'язково до заповнення.",
          })}
          className="review-form__input"
          placeholder="Ім'я"
          type="text"
        />
        <p style={{ color: "red" }}>
          {errors?.user_name && errors?.user_name?.message}
        </p>
      </label>
      <label className="review-form__label">
        <textarea
          {...register("review", {
            required: "Це поле обов'язково до заповнення.",
          })}
          className="review-form__textarea"
          placeholder="Напишіть тут свій відгук"
        />
        <p style={{ color: "red" }}>
          {errors?.review && errors?.review?.message}
        </p>
      </label>
      <input
        {...register("user_date")}
        type="hidden"
        value={getCurrentDate()}
      />
      <div>
        <button className="review-form__button" type="submit">
          Відправити
        </button>
        <button
          onClick={() => setIsShowReview(!isShowReview)}
          className="review-form__button"
          type="reset"
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};
