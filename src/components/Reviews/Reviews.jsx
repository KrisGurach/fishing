import React, { useRef } from "react";
import reviews from "../../utils/reviews";

export default function Reviews() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-container">
      <button onClick={scrollLeft} className="scroll-button">
        ⬅️
      </button>
      <div className="scroll-wrapper" ref={scrollRef}>
        <div className="scroll-content">
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
      <button onClick={scrollRight} className="scroll-button">
        ➡️
      </button>
    </div>
  );
}

  function ReviewCard({ image, stars, name, review }) {
    return (
      <div className="review-card">
        <img src={image} alt="изображение" />
        <div className="review__stars">{stars}</div>
        <p className="review__name">{name}</p>
        <p className="review__review">{review}</p>
      </div>
    );
}
