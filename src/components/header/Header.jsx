import styles from "./Header.module.css";

import Hero from "../hero/Hero";
const Header = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Header;
