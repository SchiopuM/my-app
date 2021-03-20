const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
    userData: [
        {id: 1, name: "Andrei"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Nicolai"},
        {id: 4, name: "Sergiu"},
    ],

    messageData: [
        {id: 1, message: "hello"},
        {id: 2, message: "how are you?"},
        {id: 3, message: "yooo"},
        {id: 4, message: "good news"},
    ],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let text = action.message
            return {
                ...state,
                messageData: [...state.messageData, {id: 10, message: text},],
            }

        default:
            return state;
    }

};


export const sendMessageActionCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        message: message
    };
};

export default messageReducer;
