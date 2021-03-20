import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOutThunk } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

const stateData = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authId: state.auth.id,
  };
};

export default connect(stateData, { logOutThunk })(HeaderContainer);
