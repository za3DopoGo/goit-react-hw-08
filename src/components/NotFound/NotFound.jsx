import { Link } from "react-router-dom";
import css from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div>
      <p className={css.notfound}>Sorry, this page not found</p>
    </div>
  );
};

export default NotFound;
