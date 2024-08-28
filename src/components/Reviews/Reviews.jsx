import React, { useRef } from "react";
import reviews from "../../utils/reviews";

export default function Reviews() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="review__scroll-container">
      <button onClick={scrollLeft} className="review__scroll-button review__scroll-button_left"></button>
      <div className="review__scroll-wrapper" ref={scrollRef}>
        <div className="review__scroll-content">
          {reviews.map((x, index) => (
            <ReviewCard
              key={index}
              image={x.image}
              stars={x.stars}
              name={x.name}
              review={x.review}
            />
          ))}
        </div>
      </div>
      <button onClick={scrollRight} className="review__scroll-button review__scroll-button_right"></button>
    </div>
  );
}

  function ReviewCard({ image, stars, name, review }) {
    return (
      <div className="review-card">
        <img src={image} className="review__photo" alt="изображение" />
        <img src={stars} className="review__stars" alt="изображение" />
        <p className="review__name">{name}</p>
        <p className="review__review">{review}</p>
      </div>
    );
}
