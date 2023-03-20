import React from "react";
import Class from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`${props.className} ${Class.buttonRadius}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
