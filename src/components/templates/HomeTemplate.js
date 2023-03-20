import React from "react";
// import Content from "../organisms/Content";
import Footer from "../organisms/Footer";
import Header from "../organisms/header/Header.js";
import Content from "../organisms/body/Content";

const HomeTemplate = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Content></Content>
      {/* <Footer></Footer>  */}
    </React.Fragment>
  );
};

export default HomeTemplate;
