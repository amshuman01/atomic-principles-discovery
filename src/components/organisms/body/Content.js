import React from "react";
import CarouselContainer from "../../molecules/carauselContainer/CarouselContainer";
import Class from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={`${Class.container} ${props.className}`}>
      <CarouselContainer />
    </div>
  );
};

export default Content;
