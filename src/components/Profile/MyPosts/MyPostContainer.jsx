import React from "react";
import MyPosts from './MyPosts';
import {updateNewPostActionCreator, addPostActionCreator} from '../../../redux/profileReducer';



const MyPostsContainer = (props) => {
  console.log(props);
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts 
      updateNewPostText={onPostChange} 
      addPost={addPost} 
      posts={state.profilePage.posts} 
      newPostText={state.profilePage.newPostText}
    />
  )
};

export default MyPostsContainer;
