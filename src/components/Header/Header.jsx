import React from "react";
import { NavLink } from "react-router-dom";
import LogoFile from './../../images/logo_profile.png';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={LogoFile} />
      <div className={s.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;