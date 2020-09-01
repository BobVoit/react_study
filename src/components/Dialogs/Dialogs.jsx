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

  const dialogsData = [
    {id: 1, name: "Rodjer"},
    {id: 2, name: "Vadik"},
    {id: 3, name: "Ton"},
    {id: 4, name: "Sedoy"},
  ];

  const messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your react app?"},
    {id: 3, message: "Very good!!!"},
    {id: 4, message: "Yo"},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
}


export default Dialogs;