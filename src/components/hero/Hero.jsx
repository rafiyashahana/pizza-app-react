import Button from "../button/Button";
import styles from "./Hero.module.css";
import { RiArrowRightDoubleLine } from "@remixicon/react";
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
    </div>
  );
};

export default Hero;
