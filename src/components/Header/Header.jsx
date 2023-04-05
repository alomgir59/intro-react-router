import React from "react";
import { Link as ActiveLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/friends">Friend</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/About">About</ActiveLink>
      <ActiveLink to="/Contact">Contact</ActiveLink>
    </nav>
  );
};

export default Header;
