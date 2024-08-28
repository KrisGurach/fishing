import { useRef, useState } from "react";
import photo from "../../images/form-review.svg";

export default function FormReview() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // Создаем реф для инпута

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <form className="form">
        <div className="form__flex-container">
          <div>
            <div>
              <div
                className="form__image-container"
                onClick={handleContainerClick}
                style={{
                  background: image
                    ? "none"
                    : "linear-gradient(90deg, #0062BD 100%, #0066FF 100%)",
                }}
              >
                {image ? (
                  <img className="form__preview" src={image} alt="загруженное изображение" />
                ) : (
                  <div className="form__image-placeholder">
                    <img
                      className="form__photo-placeholder"
                      src={photo}
                      alt="загрузите фото"
                    />
                    <div className="form__text-placeholder">Загрузите фото с уловом</div>
                  </div>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div>
            <div className="form__flex-container form__contacts">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                className="form__input form__input_name"
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                required
                className="form__input form__input_phone"
              />
            </div>

            <textarea
              placeholder="Оставьте свой отзыв, не более 500 символов"
              required
              rows="5"
              className="form__input form__input_review"
            />

            <div className="form__flex-container form__star-rating">
              <p className="form__star-text">Ваша оценка</p>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  filled={index < rating}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
            <div className="form__flex-container">
              <button className="form__button">Отправить отзыв</button>
              <p className="form__notice">
                Нажимая кнопку «Отправить отзыв», вы даете согласие на обработку
                персональных данных и соглашаетесь с Политикой
                конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const Star = ({ filled, onClick }) => {
  return (
    <span className={`form__star ${filled ? "filled" : ""}`} onClick={onClick}>
      ★
    </span>
  );
};
