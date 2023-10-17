import React from "react";
import Header from "./Header/Header";
import Top from "./Main/Top/Top";
import "./index.css";
import Middle from "./Main/Middle/Middle";
import Bottom from "./Main/Bottom/Bottom";

function Main() {
  return (
    <div className="right-side-content-wrapper">
      <Header />
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default Main;
