import { NavLink } from "react-router-dom";
import { getNavLinkClassName } from "../Navigation/Navigation";
import css from "./AuthNav.module.css";
import { CiLogin } from "react-icons/ci";
import { MdAppRegistration } from "react-icons/md";

const AuthNav = () => {
  return (
    <div className={css.authNavContainer}>
      <NavLink className={getNavLinkClassName} to="/register">
        <MdAppRegistration /> &nbsp;Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        <CiLogin />
        &nbsp; Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
