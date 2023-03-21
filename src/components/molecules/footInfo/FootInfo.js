import React from "react";
import SmallText from "../../atoms/textContent/SmallText";
import Class from "./footInfo.module.css";

const FootInfo = (props) => {
  return (
    <div className={Class.infoContainer}>
      <div>
        <img src={props.src}></img>
      </div>
      <SmallText>{props.text}</SmallText>
    </div>
  );
};

export default FootInfo;
