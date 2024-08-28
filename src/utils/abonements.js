import abonement1 from "../images/abonement1.svg";
import abonement2 from "../images/abonement2.svg";

const abonements = [
  {
    image: abonement1,
    description: (
      <>
        <p className="abonement__description">Клубная карта дает право на неограниченное посещение рыболовного клуба в период:
          с апреля по декабрь 2023 года включительно. Самовылов не более
          <strong style={{ color: 'blue' }}> 5 кг/сутки</strong>,
          с ограничением на <strong style={{ color: 'blue' }}>4 удочки</strong>.</p>
      </>
    ),
    text: "Стоимость:",
    price: "16 000 ₽",
  },

  {
    image: abonement2,
    description: (
      <>
        <p className="abonement__description">Клубная карта дает право на неограниченное посещение рыболовного клуба в период:
          с апреля по декабрь 2023 года включительно. Самовылов не более
          <strong style={{ color: '#F15A29' }}> 3 кг/сутки</strong>,
          с ограничением на <strong style={{ color: '#F15A29' }}>4 удочки</strong>.</p>
      </>
    ),
    text: "Стоимость:",
    price: "12 000 ₽",
  }

]

export default abonements;
