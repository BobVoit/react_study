import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  return (
  <div>
    My Posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, how are you?' />
      <Post message="It's my first post" />
    </div>
  </div>
  );
};

export default MyPosts;
