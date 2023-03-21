import React from "react";
import Class from "./footer.module.css";
import Call from "../../../images/call-icon.png";
import Mail from "../../../images/mail-icon.png";
import Disc from "../../../images/discovery-small.png";
import FootInfo from "../../molecules/footInfo/FootInfo";
import SocialLinks from "../../molecules/footInfo/SocialLinks";

const info = [
  { src: Call, text: "hello@discovery.com" },
  {
    src: Mail,
    text: `022-43491100 +91-8433774761 (Mon-Fri, excluding Holidays 11am-4pm)`,
  },
  {
    src: Disc,
    text: "Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla Complex, Mumbai 400051",
  },
];

const Footer = (props) => {
  const renderInfo = info.map((ele, index) => (
    <FootInfo key={index} src={ele.src} text={ele.text}></FootInfo>
  ));
  return (
    <div className={props.className}>
      <div className={Class.footerContainer}>
        <div className={Class.footInfo}>
          <div className={Class.info}>{renderInfo}</div>
          <SocialLinks></SocialLinks>
        </div>
        <div className={Class.footLinks}>ad and support policy faq</div>
      </div>
    </div>
  );
};

export default Footer;
