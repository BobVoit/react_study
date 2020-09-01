import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  const postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
  ];

  return (
    <div className={s.posts_block}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
