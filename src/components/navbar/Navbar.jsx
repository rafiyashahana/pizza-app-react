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
        <div className={styles.login_container}>
          <button>Register</button>
          <button>Login</button>
          <RiShoppingCartLine />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
