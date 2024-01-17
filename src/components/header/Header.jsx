import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
const Header = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
