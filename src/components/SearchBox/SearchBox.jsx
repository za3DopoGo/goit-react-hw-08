import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filters.name);
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        value={filter}
        type="text"
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
