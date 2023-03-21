import React from "react";
import Ad from "../../atoms/ad/Ad";
import Class from "./CarouselContainer.module.css";

const CarouselContainer = () => {
  return (
    <div className={Class.container}>
      <Ad></Ad>
      <div className={Class.mainCarousel}></div>
    </div>
  );
};

export default CarouselContainer;
