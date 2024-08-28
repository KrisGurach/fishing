import { useRef, useState } from "react";

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
      fileInputRef.current.click(); // Имитация клика по инпуту
  };

  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1); // Устанавливаем рейтинг, основываясь на индексе звезды
  };
  return (
    <div>
      <form>
      <div>
            <div
                className="image-container"
                onClick={handleContainerClick}
                style={{ cursor: 'pointer' }} // Указатель на курсор
            >
                {image ? (
                    <img
                        src={image}
                        alt="Preview"
                        style={{ width: '300px', height: 'auto' }}
                    />
                ) : (
                    <div className="placeholder">Кликните для загрузки изображения</div>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef} // Привязка рефа к инпуту
                style={{ display: 'none' }} // Скрываем инпут
            />
        </div>

        <div className="form__contacts">
          <input></input>
          <input></input>
        </div>
        <input></input>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              filled={index < rating}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div>
          <button>Отправить отзыв</button>
          <p>
            Нажимая кнопку «Отправить отзыв», вы даете согласие на обработку
            персональных данных и соглашаетесь с Политикой конфиденциальности
          </p>
        </div>
      </form>
    </div>
  );
}

const Star = ({ filled, onClick }) => {
  return (
    <span className={`star ${filled ? "filled" : ""}`} onClick={onClick}>
      ★
    </span>
  );
};
