import React from "react";
import MediumText from "../../atoms/textContent/MediumText";
import Class from "./footLinks.module.css";
const FootLinks = () => {
  return (
    <div className={Class.footLinks}>
      <div className={Class.flPart1}>
        <MediumText>Advertising Services Terms & Conditions</MediumText>
        <MediumText>Online Advertising Order</MediumText>
        <MediumText>Support</MediumText>
      </div>
      <div className={Class.faq}>
        <div className={Class.faqP1}>
          <MediumText>Privacy Policy</MediumText>
          <MediumText>Terms of Use</MediumText>
          <MediumText>FAQ's</MediumText>
        </div>
        <MediumText className={Class.fapP2}>
          Copyright © 2022 Discovery, Inc. or its subsidiaries and affiliates.
          All rights reserved.
        </MediumText>
      </div>
    </div>
  );
};

export default FootLinks;
