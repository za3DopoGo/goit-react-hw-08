import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { FaAddressBook } from "react-icons/fa";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <div className={css.homePageContainer}>
      <h1 className={css.header}>Welcome to the phonebook!</h1>
      {isLoggedIn ? (
        <NavLink to="/contacts">
          <p className={css.text}>
            To view your contacts, click here&nbsp;
            <FaAddressBook size="30" color="red" />
          </p>
        </NavLink>
      ) : (
        <p className={css.text}>Register or login to use the phonebook</p>
      )}
    </div>
  );
};

export default HomePage;
