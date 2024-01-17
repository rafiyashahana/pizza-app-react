import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          Everything is better with a <span>Pizza</span>
        </h1>
        <p>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>

        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
