const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
      { id: 1, name: "Rodjer" },
      { id: 2, name: "Vadik" },
      { id: 3, name: "Ton" },
      { id: 4, name: "Sedoy" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your react app?" },
      { id: 3, message: "Very good!!!" },
      { id: 4, message: "Yo" },
    ]
};


const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
      case SEND_MESSAGE: {   
        let body = action.newMessageBody;
        return {
          ...state, 
          messages: [...state.messages, { id: 5, message: body }],         
        };       
      }  
      default:
        return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;