import image1 from "../../images/terrain.png";
import image2 from "../../images/pirs1.jpg";
import image3 from "../../images/pirs2.jpg";
import image4 from "../../images/pirs3.jpg";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

export default function TerrainSlider() {
  const terrainImages = [image1, image2, image3, image4];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  const updateSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    window.addEventListener("resize", updateSlider);
    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  return (
      <div className="terrain__flex-container">
        <div className="terrain__slider-container">
          <Slider ref={sliderRef} {...settings}>
            {terrainImages.map((image, index) => (
              <img
                key={index}
                className="terrain__image"
                src={image}
                alt="фото пирсов"
              />
            ))}
          </Slider>

          <div className="terrain__slider-dots">
            {terrainImages.map((_, index) => (
              <span
                key={index}
                className={`terrain__slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="terrain__description">
          <h3 className="terrain__header">
            Комфортабельные места подхода и пирсы
          </h3>
          <p className="terrain__text">
            Также как консультация с широким активом требует от нас анализа
            инновационных методов управления процессами. В своём стремлении
            улучшить пользовательский опыт мы упускаем, что активно
            развивающиеся страны третьего мира объединены в целые кластеры себе
            подобных.
          </p>
          <div className="terrain__slider-navigation">
            <button className="terrain__nav-button terrain__nav-button_left" onClick={prevSlide}></button>
            <button className="terrain__nav-button terrain__nav-button_right" onClick={nextSlide}></button>
          </div>
        </div>
      </div>
  );
}
