import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  const posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 3, message: "Gucci flip flap", likesCount: 11},
    {id: 4, message: "I can study react!", likesCount: 11},
  ];

  const postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

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
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
