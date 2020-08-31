import React from "react";
import BigImage from './../../images/big_image.jpg';
import AvaImage from './../../images/ava_image.jpg';
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.big_image} src={BigImage} />
      </div>
      <div>
        <div>{<img src={AvaImage} />}</div>
        <div className={s.account_inf}></div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
