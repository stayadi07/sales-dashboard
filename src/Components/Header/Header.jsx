import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-welcome">Hello Aditya👋,</div>
        <div className="header-search-bar">
          <span class="material-symbols-outlined search-icon">search</span>
          <span className="search-bar-text">Search</span>
        </div>
      </div>
    </>
  );
}

export default Header;
