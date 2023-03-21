import React from "react";
import HamburgerIcon from "../../../images/hamburger-icon.png";
import Button from "../../atoms/buttons/Button";
import LogoNavigation from "../../molecules/logoNavigation/LogoNavigation";
import NavigationOptions from "../../molecules/navigationOptions/NavigationOptions";
import SearchBar from "../../molecules/searchBar/SearchBar";
import Class from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={`${Class.titleContainer} ${props.className}`}>
      <div className={Class.title}>
        <div className={Class.headerStart}>
          <img src={HamburgerIcon} alt="menu" className={Class.iconSmall}></img>
          <LogoNavigation className={Class.iconSmall} />
          <NavigationOptions className={Class.marginLeft} />
        </div>

        <div className={Class.searchLogin}>
          <SearchBar className={Class.marginRight} />
          <Button
            id="sign-in"
            className={`${Class.signIn} ${Class.marginRight}`}
          >
            Sign In
          </Button>
          <Button id="buy-plan" className={Class.buyPlan}>
            Buy Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
