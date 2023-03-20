import React from "react";
import Class from "./NavigationOptions.module.css";

const NavigationOptions = (props) => {
  const updateURL = () => {};
  const options = ["Home", "Explore", "Kids", "Shorts", "Mindblown", "Premium"];
  const renderOptions = options.map((op) => (
    <a key={op} onClick={updateURL} className={Class.option}>
      {op}
    </a>
  ));
  return (
    <nav className={`${Class.navigation} ${props.className}`}>
      {renderOptions}
    </nav>
  );
};

export default NavigationOptions;
