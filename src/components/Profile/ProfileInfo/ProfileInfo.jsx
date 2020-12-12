import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {  
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.discripton_block}>
        <div>{<img src={profile.photos.large} />}</div>
        <div className={s.account_inf}>
          <div>
            <div>{profile.fullName}</div>
          </div>
          <ProfileStatusWithHooks
            status={status}
            updateStatus={updateStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;