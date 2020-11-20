import React from "react";
import BigImage from './../../../images/big_image.jpg';
import AvaImage from './../../../images/ava_image.jpg';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
      <div>
        <div>
          <img className={s.big_image} src={BigImage} />
        </div>
        <div className={s.discripton_block}>
          <div>{<img src={props.profile.photos.large} />}</div>
          <div className={s.account_inf}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.lookingForAJob}</div>
          </div>
        </div>
      </div>
    );
}

export default ProfileInfo;