import Button from "../button/Button";
import { RiShoppingCartLine } from "@remixicon/react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1>PizzaCo.</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className={styles.btn_container}>
          <Button className={styles.btn}>Register</Button>
          <Button className={styles.btn}>Login</Button>

          <RiShoppingCartLine />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
