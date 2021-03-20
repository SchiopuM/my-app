import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import style from "./LoginStyle.module.css";
import { logInThunk } from "../../Redux/auth-reducer";

const LoginForm = (props) => {
  return (
    <Form
      onSubmit={(values) =>
        props.logInThunk(values.userName, values.password, values.rememberMe)
      }
      validate={(values) => {
        const errors = {};
        if (!values.userName) {
          errors.userName = "This Field is Required";
        }
        if (values.userName) {
          if (values.userName.length > 40) {
            errors.userName = "Max number of symbols is 40";
          }
        }
        if (!values.password) {
          errors.password = "This Field is Required";
        }
        if (values.password) {
          if (values.password.length < 4) {
            errors.password = "Your password is too short";
          }
        }

        return errors;
      }}
      render={({ handleSubmit, submitting, pristine, form }) => (
        <form onSubmit={handleSubmit}>
          <Field name={"userName"}>
            {({ input, meta }) => (
              <div>
                <strong>User Name</strong> <br />
                <input
                  {...input}
                  placeholder={"user name"}
                  className={meta.error && meta.touched ? style.errorArea : ""}
                />
                {meta.error && meta.touched && (
                  <span className={style.error}>{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name={"password"}>
            {({ input, meta }) => (
              <div>
                <strong>Password</strong> <br />
                <input
                  {...input}
                  placeholder={"password"}
                  type={"password"}
                  className={meta.error && meta.touched ? style.errorArea : ""}
                />
                {meta.error && meta.touched && (
                  <span className={style.error}>{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name={"rememberMe"}>
            {({ input }) => (
              <div>
                <input {...input} type={"checkbox"} /> Remember Me
              </div>
            )}
          </Field>
          <div>
            <button type={"submit"} disabled={submitting}>
              Log In
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
};

const Login = (props) => {
  return (
    <div className={style.formBody}>
      <h1>LOG IN</h1>
      <LoginForm {...props} />
    </div>
  );
};

const stateData = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(stateData, { logInThunk })(Login);
