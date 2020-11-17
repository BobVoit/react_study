import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Gucci flip flap", likesCount: 11 },
        { id: 4, message: "I can study react!", likesCount: 11 },
      ],
      newPostText: 'it-magic',
    },
    dialogsPage: {
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
      ],
      newMessageBody: "",
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) { // отправляем объект {type: 'ADD-POST' }

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};



export default store;
window.store = store;