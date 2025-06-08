import clsx from "clsx";
import s from "./AppBar.module.css";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <p className={s.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{" "}
        GoMerch Store
      </p>

      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
