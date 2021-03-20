import React from "react";
import style from "./ProfileInfo.module.css";
import Post from "../Post/Post";
import avatar from "./../../../Images/userMale.png";
import ProfileStatus2 from "./ProfileStatus2";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={style.avatar}>
        <img
          src={
            props.userProfile.photos.large
              ? props.userProfile.photos.large
              : avatar
          }
        />
      </div>
      <div className={style.info}>
        <strong>Name</strong>: {props.userProfile.fullName} <br />
        <strong>Status</strong> : <ProfileStatus2 {...props} />
      </div>
      <h2>My posts</h2>
      <Post />
    </div>
  );
};

export default ProfileInfo;
