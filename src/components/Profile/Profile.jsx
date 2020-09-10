import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
        addPost={props.addPost} 
        posts={props.profilePage.posts} 
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
