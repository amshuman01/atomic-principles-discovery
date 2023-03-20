import React from "react";

const TextInput = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      className={props.className}
    ></input>
  );
};

export default TextInput;
