import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

const MESSAGE_AREA_CHANGE = "MESSAGE-AREA-CHANGE";
const SEND_MESSAGE = "SEND-MESSAGE";
const ADD_COMMENT = "ADD-COMMENT";
const CHANGE_AREA = "CHANGE-AREA";

let store = {
  renderStore() {
    console.log("chanded");
  },
  _state: {
    messages: {
      userData: [
        { id: 1, name: "Andrei" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Nicolai" },
        { id: 4, name: "Sergiu" },
      ],

      messageData: [
        { id: 1, message: "hello" },
        { id: 2, message: "how are you?" },
        { id: 3, message: "yooo" },
        { id: 4, message: "good news" },
      ],
      messageArea: "",
    },
    comment: {
      commentData: [
        { id: 1, comment: "yoo my friend", likesCount: 11 },
        { id: 2, comment: "yoo", likesCount: 21 },
        { id: 3, comment: "my favorite move", likesCount: 5 },
      ],
      areaChange: "",
    },
  },
  getState() {
    return this._state;
  },

  subscriber(observer) {
    this.renderStore = observer;
  },

  dispatch(action) {
    this._state.messages = messageReducer(this._state.messages, action);
    this._state.comment = profileReducer(this._state.comment, action);
    this.renderStore(this._state)
  },
};

export const addCommentActionCreator = () => {
  return {
    type: ADD_COMMENT,
  };
};

export const changeAreaActionCreator = (textAreaValue) => {
  return {
    type: CHANGE_AREA,
    changeText: textAreaValue,
  };
};

export const messageAreaChangeActionCreator = (areaValue) => {
  return {
    type: MESSAGE_AREA_CHANGE,
    newChange: areaValue,
  };
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default store;
