import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: 'Test 1',
      description: "blah",
      icon: require("../assets/logos/github/githubDark.png"),
    },
    {
      title: 'Test 2',
      description: "blah blah",
      icon: require("../assets/logos/github/githubDark.png"),
    },
    {
      title: 'Test 3',
      description: "blah blah blah",
      icon: require("../assets/logos/github/githubDark.png"),
    },
  ];

  return (
    <div className="carousel">
      <div className="inner" >
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </div>
    </div>
  )
}

export default Carousel;