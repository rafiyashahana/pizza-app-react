import Button from "../button/Button";
import { RiShoppingCartLine } from "@remixicon/react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1>PizzaCo.</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.btn_container}>
          <Button className={styles.btn}>Register</Button>
          {/* <h3>Hello, User</h3> */}
          <Button className={styles.btn}>Login</Button>
          <RiShoppingCartLine />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
