import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav id="menu" className="nav">
        <NavLink exact to="/" className="btn home" activeClassName="active">
          <span className="blind">HOME</span>
        </NavLink>
        <NavLink to="/community" className="btn talk" activeClassName="active">
          <span className="blind">TALK</span>
        </NavLink>
        <NavLink to="/pick" className="btn pick" activeClassName="active">
          <span className="blind">PICK</span>
        </NavLink>
        <NavLink to="/ranking" className="btn rank" activeClassName="active">
          <span className="blind">RANKING</span>
        </NavLink>
        <NavLink to="/mypage" className="btn my" activeClassName="active">
          <span className="blind">MY</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
