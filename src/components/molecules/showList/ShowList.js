import React from "react";
import LargeText from "../../atoms/textContent/LargeText";
import Img1 from "../../../images/bose.jpeg";
import Img2 from "../../../images/man-wild.jpeg";
import Img3 from "../../../images/moon.jpeg";
import Img4 from "../../../images/tech.jpeg";
import Card from "../../atoms/image/Card";
import Class from "./showlist.module.css";
import MediumText from "../../atoms/textContent/MediumText";
const imgList = [Img1, Img2, Img3, Img4];

const ShowList = (props) => {
  return (
    <div className={Class.showList}>
      <div className={Class.showTop}>
        <LargeText className={Class.title}>{props.title}</LargeText>
        <MediumText className={Class.color}>View All</MediumText>
      </div>

      <div className={Class.showContainer}>
        {imgList.map((img, index) => (
          <Card key={index} src={img}></Card>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
