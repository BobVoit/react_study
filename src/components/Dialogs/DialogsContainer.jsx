import React from "react";
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  }
}

compose( // write order of calls down top
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)

export default compose( // write order of calls down top
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);