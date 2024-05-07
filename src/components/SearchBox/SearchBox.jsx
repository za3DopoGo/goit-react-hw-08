import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filters.name);
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={css.input}
      placeholder="Find contact by name or number"
      value={filter}
      type="text"
      onChange={onChangeFilter}
    />
  );
};

export default SearchBox;
