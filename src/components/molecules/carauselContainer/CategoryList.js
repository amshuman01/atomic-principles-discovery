import React from "react";
import Adv from "../../../images/adventure.jpeg";
import His from "../../../images/history.jpeg";
import Inv from "../../../images/investigation.jpeg";
import free from "../../../images/free-watch.jpeg";
import Scn from "../../../images/science.jpeg";
import Class from "./categoryList.module.css";
import MediumText from "../../atoms/textContent/MediumText";

const catList = [
  {
    src: Adv,
    cName: "Adventure",
  },
  {
    src: Scn,
    cName: "Science",
  },
  {
    src: His,
    cName: "History",
  },
  {
    src: free,
    cName: "Free Watch",
  },
  {
    src: Inv,
    cName: "Investigation",
  },
];

const CategoryList = () => {
  return (
    <div className={Class.catContainer}>
      {catList.map((category, index) => {
        return (
          <div className={Class.cat} key={index}>
            <img src={category.src} className={Class.catImg}></img>
            <MediumText className={Class.catTitle}>{category.cName}</MediumText>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
