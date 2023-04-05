import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, Children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {Children}
    </NavLink>
  );
};

export default ActiveLink;
