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
          <div>{<img src={AvaImage} />}</div>
          <div className={s.account_inf}></div>
        </div>
      </div>
    );
}

export default ProfileInfo;