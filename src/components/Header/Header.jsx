import React from "react";
import LogoFile from './../../images/logo_profile.png';
import s from './Header.module.css'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={LogoFile} />
    </header>
  );
};

export default Header;