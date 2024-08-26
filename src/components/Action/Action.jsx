import action from "../../utils/action";

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

export default function Action() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <>
      <div className="action-container">
        <button
          className="terrain__nav-button action__nav-button_left"
          onClick={prevSlide}
        ></button>
        <div style={{ flex: "1"}}>
          <Slider ref={sliderRef} {...settings}>
            {action.map((x, index) => (
              <div key={index}>
                <div
                  className="action__flex-container"
                  style={{ display: "flex" }}
                >
                  <div className="action__text-container">
                    <p className="action__title">{x.title}</p>
                    <p>{x.description}</p>
                  </div>
                  <div className="action__image"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="terrain__nav-button action__nav-button_right"
          onClick={nextSlide}
        ></button>
      </div>
    </>
  );
}
