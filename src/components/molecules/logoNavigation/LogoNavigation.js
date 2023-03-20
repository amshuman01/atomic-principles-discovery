import React from "react";
import DiscoveryLogo from "../../../images/discovery-logo.png";

const LogoNavigation = (props) => {
  const navigateHome = () => {};
  return (
    <img
      src={DiscoveryLogo}
      onClick={navigateHome}
      className={props.className}
    ></img>
  );
};

export default LogoNavigation;
