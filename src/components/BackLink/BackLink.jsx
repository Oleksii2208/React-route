import { Link } from "react-router-dom";
import s from "./BackLink.module.css";
import { HiArrowLeft } from "react-icons/hi";

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={s.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

export default BackLink;
