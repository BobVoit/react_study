import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'
import {updateNewPostActionCreator, addPostActionCreator} from './../../../redux/state';

const MyPosts = (props) => {
  const postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />  );

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.posts_block}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
