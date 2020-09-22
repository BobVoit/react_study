import React from "react";
import s from './Dialogs.module.css'
import UserMessages from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

const Dialogs = (props) => {


  const dialogsElements = props.state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} />);

  const messagesElements = props.state.messages.map( m =>  <UserMessages message={m.message} />);

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