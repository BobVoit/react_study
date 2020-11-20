import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostContainer';
import Preloader from '../common/Preloader/Preloader';
import s from './Profile.module.css';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
