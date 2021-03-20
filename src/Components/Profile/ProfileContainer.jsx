import React from "react";
import { addCommentActionCreator } from "./../../Redux/profile-reducer";
import { connect } from "react-redux";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Comment from "./Comment/Comment";
import { Redirect, withRouter } from "react-router-dom";
import Preloader from "../../Images/Preloader/Preloader";
import {
  getStatusThunk,
  setProfileThunk,
  updateUserStatusThunk,
} from "../../Redux/profile-reducer";
import withAuthRedirector from "../../HOC/withAuthRedirector";
import { compose } from "redux";

class Profile extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userProfile.userId;
    }
    this.props.setProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <div className={style.profileContent}>
        {this.props.userProfile ? (
          <ProfileInfo {...this.props} userProfile={this.props.userProfile} />
        ) : (
          <Preloader />
        )}
        <Comment
          addComment={this.props.addComment}
          commentData={this.props.commentData}
        />
      </div>
    );
  }
}

const stateData = (state) => {
  return {
    commentData: state.profile.commentData,
    userProfile: state.profile.userProfile,
    status: state.profile.status,
  };
};

const reducerData = (dispatch) => {
  return {
    addComment: (comment) => {
      dispatch(addCommentActionCreator(comment));
    },
    setProfileThunk: (userId) => {
      dispatch(setProfileThunk(userId));
    },
    getStatusThunk: (userId) => {
      dispatch(getStatusThunk(userId));
    },
    updateUserStatusThunk: (status) => {
      dispatch(updateUserStatusThunk(status));
    },
  };
};

export default compose(
  connect(stateData, reducerData),
  withRouter /*withAuthRedirector*/
)(Profile);
