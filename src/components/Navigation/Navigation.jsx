import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        <FaHome />
        &nbsp;Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClassName} to="/contacts">
          <MdContactPhone /> &nbsp;Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
