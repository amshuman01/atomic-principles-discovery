import React from "react";
import Play from "../../../images/play.png";
import LargeText from "../../atoms/textContent/LargeText";

const Playsection = () => {
  return (
    <>
      <img src={Play} style={{ width: "80px" }}></img>
      <LargeText>Play</LargeText>
    </>
  );
};

export default Playsection;
