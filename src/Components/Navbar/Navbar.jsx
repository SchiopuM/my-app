import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={style.nav}>
      <div>
        <NavLink to={"/profile/15586"} activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/messages" activeClassName={style.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/algorithms" activeClassName={style.active}>
          Algorithms
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" activeClassName={style.active}>
          Users
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
