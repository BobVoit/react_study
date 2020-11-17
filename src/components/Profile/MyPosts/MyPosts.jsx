import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'


const MyPosts = (props) => {

  const postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />  );

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts_block}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
