import React from "react";
import avatar1 from "./../../../../images/avatar1.jpg";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={avatar1} />
        {props.message}
      <div>
        <span>like</span><span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
