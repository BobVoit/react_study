import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../images/user.jpg';
import Paginator from "./Paginator/Paginator";
import User from './User';
import s from './Users.module.css';

const Users = ({currentPage, onPageChanged, pageSize, totalUsersCount, ...props}) => {
    return (
      <div>
        <Paginator
         currentPage={currentPage} 
         onPageChanged={onPageChanged}
         totalItemsCount={totalUsersCount}
         pageSize={pageSize}
        />
        <div>
        {props.users.map((user) => 
          <User key={user.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            user={user}
          /> )}
        </div>
      </div>
    );
}

export default Users;