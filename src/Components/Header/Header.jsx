import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        MIHAIL'S <br />
        PROJECT
      </div>
      <div className={style.auth}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logOutThunk}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
