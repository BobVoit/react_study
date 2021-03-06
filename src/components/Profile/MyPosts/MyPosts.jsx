import React from "react";
import Post from './Post/Post.jsx'
import s from './MyPosts.module.css'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators.js";
import { Textarea } from "../../common/FormsControls/FormsControls.js";


const MyPosts = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }

  const postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />  );

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.posts_block}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux 
        onSubmit={onAddPost} 
      />
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field 
          name={"newPostText"}
          component={Textarea}
          validate={[required, maxLength10]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
   </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: "profileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;
