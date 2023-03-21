import React from "react";
import CarouselContainer from "../../molecules/carauselContainer/CarouselContainer";
import ShowList from "../../molecules/showList/ShowList";
import Class from "./Content.module.css";
const showList = ["Newly Added Shows", "Shows You Love", "Stream For Free Now"];

const Content = (props) => {
  const dispShows = showList.map((shows) => (
    <ShowList title={shows}></ShowList>
  ));
  return (
    <div className={`${Class.container} ${props.className}`}>
      <CarouselContainer />
      {dispShows}
    </div>
  );
};

export default Content;
