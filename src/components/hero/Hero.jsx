import Button from "../button/Button";
import styles from "./Hero.module.css";
import Navbar from "../navbar/Navbar";
import { RiArrowRightDoubleLine } from "@remixicon/react";
import Customize from "../customize/Customize";
// import Register from "../../pages/register/Register";
// import Login from "../../pages/login/Login";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          Everything <br />
          is better
          <br /> with a <span>Pizza</span>
        </h1>
        <p>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>

        <Button>
          Order Now
          <RiArrowRightDoubleLine color="#fff" />
        </Button>
      </div>
      <Customize />
      {/* <Register />
      <Login /> */}
    </div>
  );
};

export default Hero;
