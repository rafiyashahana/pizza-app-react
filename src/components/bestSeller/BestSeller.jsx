import Card from "../card/Card";
import styles from "./BestSeller.module.css";
const BestSeller = () => {
  return (
    <div className={styles.container}>
      <h3>CHECK OUT </h3>
      <h2>Our Best Sellers</h2>
      <div className={styles.card_container}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BestSeller;
