import { useState } from "react";
import Button from "../button/Button";
import Register from "../../pages/register/Register";
import { RiShoppingCartLine } from "@remixicon/react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import Login from "../../pages/login/Login";
import CartSlider from "../../components/cartSlider/CartSlider";
const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCartSlider, setShowCartSlider] = useState(false);

  const handleRegister = () => setShowRegister(!showRegister);
  const handleLogin = () => setShowLogin(!showLogin);
  const handleShowCartSlider = () => setShowCartSlider(!showCartSlider);

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
          <Button className={styles.btn} onClick={() => handleRegister()}>
            Register
          </Button>
          {showRegister && <Register onClose={() => setShowRegister(false)} />}
          {/* <h3>Hello, User</h3> */}
          <Button className={styles.btn} onClick={handleLogin}>
            Login
          </Button>
          {showLogin && <Login onClose={() => setShowLogin(false)} />}
          <RiShoppingCartLine onClick={handleShowCartSlider} />
          {showCartSlider && (
            <CartSlider isOpen={() => setShowCartSlider(false)} />
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
