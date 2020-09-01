import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return <div className="message">{props.message}</div>;
}


const Dialogs = (props) => {

  const dialogs = [
    {id: 1, name: "Rodjer"},
    {id: 2, name: "Vadik"},
    {id: 3, name: "Ton"},
    {id: 4, name: "Sedoy"},
  ];

  const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your react app?"},
    {id: 3, message: "Very good!!!"},
    {id: 4, message: "Yo"},
  ];

  const dialogsElements = dialogs
    .map( d =>  <DialogItem name={d.name} id={d.id} />);

  const messagesElements = messages
    .map( m =>  <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
}


export default Dialogs;