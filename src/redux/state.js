import { rerenderEntireTree } from "../render";

const state = {
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
  },
  sidebar: {}
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;