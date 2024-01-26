import React, { useState, useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import "./starRating.css";

const StarRating = ({ alteredRadio, formSubmitted, formSubmittedChanged }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    // Verifica se o formulário foi enviado e reinicializa o estado 'rating'
    if (formSubmitted) {
      setRating(null);
      formSubmittedChanged(false);
    }});

  const handleRadioClick = (ratingValue) => {
    setRating(ratingValue);
    alteredRadio(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
            className="input-star"
              required={true}
              type="radio"
              name="rating"
              value={ratingValue}
              checked={rating === ratingValue}
              onChange={() => handleRadioClick(ratingValue)}
            />
            <IoMdStar
              key={i}
              className="star"
              size={100}
              color={ratingValue <= (hover || rating) ? "#091F1A" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {/* <p>Rating is: {rating}</p> */}
    </div>
  );
};

export default StarRating;
