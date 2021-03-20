import { sendMessageActionCreator } from "./../../Redux/messages-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import withAuthRedirector from "../../HOC/withAuthRedirector";
import { compose } from "redux";

const reducerData = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    },
  };
};


const stateData = (state) => {
  return {
    userData: state.messages.userData,
    messageData: state.messages.messageData,
  };
};

export default compose(connect(stateData, reducerData), withAuthRedirector)(
  Messages
);
