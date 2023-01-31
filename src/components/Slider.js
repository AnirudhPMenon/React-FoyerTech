import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Slider({slides}) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.image}>
        <img
          className="d-block w-100"
          src={slide.image}
          alt="First slide"
        />
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;