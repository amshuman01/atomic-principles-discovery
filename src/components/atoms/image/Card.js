import React from "react";
import Class from "./image.module.css";

const Card = (props) => {
  return (
    <div className={Class.card}>
      <img src={props.src}></img>
    </div>
  );
};

export default Card;
