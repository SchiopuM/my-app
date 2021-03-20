import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateRedirectToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirector = (Component) => {
  class RedirectorComponent extends React.Component {
    
    render() {
      if (!this.props.isAuth) {
        return <Redirect to='/login' />;
      }
      return <Component {...this.props} />;
    }
  }

  const connectAuthRedirectComponent = connect(mapStateRedirectToProps, null)(
    RedirectorComponent
  );

  return connectAuthRedirectComponent;
};

export default withAuthRedirector;

