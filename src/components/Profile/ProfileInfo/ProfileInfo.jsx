import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    return (
      <div>
        {/* <div>
          <img className={s.big_image} src={BigImage} />
        </div> */}
        <div className={s.discripton_block}>
          <div>{<img src={props.profile.photos.large} />}</div>
          <div className={s.account_inf}>
            <div>
              <div>{props.profile.fullName}</div>
            </div>
            <ProfileStatus status={"sfgfgb"} />
          </div>
        </div>
      </div>
    );
}

export default ProfileInfo;