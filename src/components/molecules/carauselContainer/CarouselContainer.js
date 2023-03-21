import React, { useState, useEffect } from "react";
import Ad from "../../atoms/ad/Ad";
import Class from "./CarouselContainer.module.css";
import LeftArrow from "../../../images/left-arrow.png";
import RightArrow from "../../../images/right-arrow.png";
import LargeText from "../../atoms/textContent/LargeText";
import MediumText from "../../atoms/textContent/MediumText";
import Moon from "../../../images/moon.jpeg";
import Tags from "../../atoms/tags/Tags";
import CategoryList from "./CategoryList";
import Playsection from "./Playsection";
import WatchSection from "./WatchSection";

const CarouselContainer = () => {
  const [mobileFlag, setMobile] = useState(false);

  return (
    <div className={Class.container}>
      <Ad></Ad>
      <div className={Class.mainCarousel}>
        <img
          src={LeftArrow}
          alt="left-arrow"
          className={Class.smallImage}
        ></img>
        <div className={Class.textContainer}>
          <LargeText className={Class.large}>The Moon And Beyond</LargeText>
          <MediumText className={Class.medium}>
            The thrilling tale of two events -Neil Armstrong's first step &
            China's landing.
          </MediumText>

          <div className={Class.tagSection}>
            <Tags>Space</Tags>
            <Tags>Science</Tags>
          </div>

          <div className={Class.play}>
            <Playsection></Playsection>
          </div>
        </div>
        <div className={Class.moonContainer}>
          <img src={Moon} className={Class.moon}></img>
        </div>

        <img
          src={RightArrow}
          alt="left-arrow"
          className={`${Class.smallImage} ${Class.marginNone}`}
        ></img>
        <WatchSection className={Class.watch}></WatchSection>
      </div>
      <CategoryList></CategoryList>
    </div>
  );
};

export default CarouselContainer;
