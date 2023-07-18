import React, { useState } from "react";
import { CarouselItem } from "react-bootstrap";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [

  ];

  return (
    <div className="carousel">
      <div className="inner"
          style={{transform : `translate:(-${activeIndex * 100})`}}>
        {items.map((item)=>{
          return (<CarouselItem />)
        })}
      </div>
    </div>
  )
}

export default Carousel;