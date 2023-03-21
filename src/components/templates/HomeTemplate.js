import React from "react";
// import Content from "../organisms/Content";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header.js";
import Content from "../organisms/body/Content";
import Class from "./Template.module.css";

const HomeTemplate = () => {
  return (
    <div className={Class.template}>
      <Header className={Class.header}></Header>
      <Content className={Class.content}></Content>
      <Footer className={Class.footer}></Footer>
    </div>
  );
};

export default HomeTemplate;
