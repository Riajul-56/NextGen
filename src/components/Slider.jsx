import React from "react";
import Slider from "react-slick";

function SliderComponent({ settings, children, className }) {
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
}

export default SliderComponent;
