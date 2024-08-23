import CardFish from "../CardFish/CardFish";
import Price from "../Price/Price";
import TerrainSlider from "../TerrainSlider/TerrainSlider";

export default function Main() {
  return (
    <section className="main">
      <div className="promotion">
        <div className="promotion__background-image">
          <h1 className="promotion__header">Трофейная рыбалка</h1>
          <p className="promotion__text">
            Поймайте рыбу свыше 5 кг, вызовите егеря, зарегистрируйте свою удачу, отпустите рыбу и получите бесплатную рыбалку
            на следующее посещение. <br />
            Акция действует только при условии отпуска рыбы в водоем БЕЗ травм.
          </p>
          {/* сделать ссылку на подробнее */}
          <button className="promotion__button">Подробнее</button>
        </div>
        <div className="promotion__container"></div>
      </div>

      <TerrainSlider />

      <section className="bestiary" id="bestiary">
        <h2 className="section-header">Бестиарий</h2>
        <CardFish />
      </section>

      <section className="price" id="price">
        <h2 className="section-header">Прайс</h2>
        <Price />
      </section>

      <section className="discount" id="discount">
        <h2 className="section-header">Акции</h2>
      </section>

      <section className="abonement" id="abonement">
        <h2 className="section-header">Абонементы</h2>
      </section>

      <section className="rules" id="rules">
        <h2 className="section-header">Правила отдыха</h2>
      </section>

      <section className="reviews" id="reviews">
        <h2 className="section-header">Отзывы наших гостей</h2>
      </section>

      <section className="about the catch">
        <h2 className="section-header">Похвастайся уловом</h2>
        <form>

        </form>
      </section>

      <section className="contacts" id="contacts">
        <h2 className="section-header">Контакты</h2>
      </section>
    </section>
  )
}
