import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  const postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

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
