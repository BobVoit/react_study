import React from "react";
import s from './DialogItem.module.css';
import { NavLink } from "react-router-dom";
import avatar1 from './../../../images/avatar1.jpg'

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <img src={avatar1} alt="ava"/>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;