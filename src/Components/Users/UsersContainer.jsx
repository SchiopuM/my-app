import { connect } from "react-redux";
import {
  setCurrentPageAC,
  getUsersThunk,
  followRequestFunk,
  unFollowRequestFunk,
} from "../../Redux/usersReducer";
import React from "react";
import Users from "./Users";
import style from "./Users.module.css";
import Preloader from "../../Images/Preloader/Preloader";

class UsersC extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPageAC(pageNumber);
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <div className={style.body}>
        {this.props.isFetching ? <Preloader /> : null}

        <Users {...this.props} pages={pages} onPageChange={this.onPageChange} />
      </div>
    );
  }
}

const stateData = (state) => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
  };
};

const reducerData = (dispatch) => {
  return {
    setCurrentPageAC: (pageNumber) => {
      return dispatch(setCurrentPageAC(pageNumber));
    },

    getUsersThunk: (currentPage, pageSize) => {
      return dispatch(getUsersThunk(currentPage, pageSize));
    },
    followRequestFunk: (u) => {
      return dispatch(followRequestFunk(u));
    },
    unFollowRequestFunk: (u) => {
      return dispatch(unFollowRequestFunk(u));
    },
  };
};

const UsersContainer = connect(stateData, reducerData)(UsersC);
export default UsersContainer;
