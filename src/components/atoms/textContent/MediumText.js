import React from "react";
import Class from "./textContent.module.css";

const MediumText = (props) => {
  return (
    <p className={`${props.className} ${Class.mediumText}`}>{props.children}</p>
  );
};

export default MediumText;
