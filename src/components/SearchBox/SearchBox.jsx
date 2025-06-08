import { HiSearch } from "react-icons/hi";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <HiSearch className={s.icon} />
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
