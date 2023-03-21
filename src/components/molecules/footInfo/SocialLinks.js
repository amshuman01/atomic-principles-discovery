import React from "react";
import MediumText from "../../atoms/textContent/MediumText";
import YT from "../../../images/youtube-icon.png";
import FB from "../../../images/facebook-icon.png";
import CurverPng from "../../atoms/image/CurverPng";
import Store from "../../../images/playstore-icon.png";
import Apple from "../../../images/appstore-icon.png";
import Class from "./socialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={Class.social}>
      <div>
        <MediumText>Follow Us</MediumText>
        <div className={Class.imgGroup}>
          <CurverPng src={YT} style={{ marginRight: "10px" }} />
          <CurverPng src={FB}></CurverPng>
        </div>
      </div>
      <div>
        <MediumText>Discovery+ App</MediumText>
        <div className={`${Class.imgGroup} ${Class.largeImg}`}>
          <CurverPng src={Apple} style={{ marginRight: "10px" }}></CurverPng>
          <CurverPng src={Store} />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
