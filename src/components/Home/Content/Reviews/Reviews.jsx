import React, { useEffect, useState } from "react";
import "./Reviews.scss";
// import axios from "axios";
import firebase from "../../../../utils/fb-config";
import { ReviewForm } from "./ReviewForm";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isShowReview, setIsShowReview] = useState(false);

  // useEffect(() => {
  //   axios("http://localhost:8080/reviews").then(({ data }) => setReviews(data));
  // }, [isShowReview]);

   useEffect(() => {
     firebase
       .database()
       .ref()
       .child(`reviews`)
       .once("value")
       .then((data) => setReviews(data.val()));
   }, [isShowReview]);
  

  return (
    <div className="reviews">
      <div className="reviews__header">
        <h2 className="reviews__title">Отзывы</h2>
        <button
          onClick={() => setIsShowReview(!isShowReview)}
          type="button"
          className="reviews__button"
        >
          + Додати відгук
        </button>
      </div>
      {isShowReview && (
        <ReviewForm
          isShowReview={isShowReview}
          setIsShowReview={setIsShowReview}
        />
      )}
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <div className="reviews__item-header">
              <h3 className="reviews__item-title">{review.user_name}</h3>
              <span className="reviews__item-date">{review.user_date}</span>
            </div>
            <p className="reviews__item-text">{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};




