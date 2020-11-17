import React from "react";
import s from './Dialogs.module.css'
import UserMessages from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />);

  const messagesElements = state.messages.map( m => <UserMessages message={m.message} key={m.id} />);

  const newMessageBody = state.newMessageBody;

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea 
              value={newMessageBody}  
              onChange={onNewMessageChange}
              placeholder="Enter your message">
            </textarea>
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
}


export default Dialogs;