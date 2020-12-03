import React from "react";
import s from './Dialogs.module.css'
import UserMessages from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />);

  const messagesElements = state.messages.map( m => <UserMessages message={m.message} key={m.id} />);

  const newMessageBody = state.newMessageBody;

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  } 

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
  return ( // handleSubmit появляется благодаря reduxForm
    <form onSubmit={props.handleSubmit} > 
      <div>
        <Field
          placeholder="Enter your message"
          component={Textarea}
          name={"newMessageBody"}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;