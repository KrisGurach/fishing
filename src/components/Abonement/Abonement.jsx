import abonements from "../../utils/abonements";

export default function Abonement() {
  return (
    <div className="abonement-container">
      {abonements.map((x, index) => (
        <AbonementCard
          key={index}
          image={x.image}
          description={x.description}
          text={x.text}
          price={x.price}
        />
      ))}
    </div>
  );
}

function AbonementCard({ image, description, text, price }) {
  return (
    <div className="abonement-card">
      <img src={image} alt="изображение абонемента" />
      <p className="abonement-card__description">{description}</p>
      <div className="abonement-card__text-container">
        <p className="abonement-card__text">{text}</p>
        <p className="abonement-card__text">{price}</p>
      </div>
    </div>
  );
}
