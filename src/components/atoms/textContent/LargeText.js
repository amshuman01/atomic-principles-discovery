import React from "react";

const LargeText = (props) => {
  return <h2 className={props.className}>{props.children}</h2>;
};

export default LargeText;
