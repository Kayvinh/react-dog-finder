import React from 'react';
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ dogNames }) => {
  return (
    <nav className="Nav">
      <NavLink to="/dogs" end>Home</NavLink>
      {dogNames.map(d =>
        <NavLink to={`/dogs/${d}`}>
          {d.charAt(0).toUpperCase() + d.slice(1)}
        </NavLink>)}
    </nav>
  );
};

export default Nav;