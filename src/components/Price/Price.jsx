import price from "../../utils/price";

export default function Price() {
  return(
    <div className="price-container">
      {price.map((x, index) => (
        <PriceCard
          key={index}
          title={x.title}
          description={x.description}
          price={x.price}
        />
      ))}
    </div>
  )
}

function PriceCard({ title, description, price}) {
  return(
    <div className="price-card">
      <h3 className="price-card__title">{title}</h3>
      <p className="price-card__text">{description}</p>
      <p className="price-card__price">{price}</p>
    </div>
  )
}
