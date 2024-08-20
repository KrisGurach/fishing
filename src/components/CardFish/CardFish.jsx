import React, { useState } from "react";
import fish from "../../utils/fish";

export default function CardFish() {
  return (
    <div className="card">
      {fish.map((x, index) => (
        <FishCard key={index} title={x.title} description={x.description} images={x.images} />
      ))}
    </div>
  );
}

function FishCard({ title, description, images }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card__container">
      <div
        className="card__image"
        style={{
          backgroundImage: `url(${isHovered ? images[1] : images[0]})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      <h2 className="card__title">{title}</h2>
      <p className="card__question">На что ловить?</p>
      <p className="card__text">{description}</p>
    </div>
  );
}
