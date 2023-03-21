import React from "react";
import Play from "../../../images/play.png";
import MediumText from "../../atoms/textContent/MediumText";

const WatchSection = (props) => {
  return (
    <div className={props.className} style={{ width: "fit-content" }}>
      <img src={Play}></img>
      <MediumText>Watch</MediumText>
    </div>
  );
};

export default WatchSection;
