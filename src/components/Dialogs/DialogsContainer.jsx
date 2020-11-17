import React from "react";
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <Dialogs 
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
}


export default DialogsContainer;