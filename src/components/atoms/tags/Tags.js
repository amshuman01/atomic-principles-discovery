import React from "react";
import Class from "./Tags.module.css";

const Tags = (props) => {
  return <div className={Class.tag}>{props.children}</div>;
};

export default Tags;
