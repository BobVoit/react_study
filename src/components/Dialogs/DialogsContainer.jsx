import Dialogs from './Dialogs';
import { sendMessageCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
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