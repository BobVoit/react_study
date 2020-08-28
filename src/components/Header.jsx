import React from "react";
import LogoFile from './../images/transparent-logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <img src={LogoFile} />
    </header>
  );
};

export default Header;