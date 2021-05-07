import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header id="header" className="header">
        <h1>
          <Link to="/" className="logo">
            <span className="blind">LOLPICK</span>
          </Link>
        </h1>
        <div className="header-nav left">&nbsp;</div>
        <div className="header-nav right">
          <a href="STO_01.html" className="btn store">
            <span className="blind">STORE</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
