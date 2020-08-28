import React from "react";
import BigImage from './../images/big_image.jpg';
import AvaImage from './../images/ava_image.jpg';

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src={BigImage} />
      </div>
      <div>{/* <img src={AvaImage} /> */}</div>
      <div>ava + discription</div>
      <div>
        <div>My post</div>
        <div>New post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
