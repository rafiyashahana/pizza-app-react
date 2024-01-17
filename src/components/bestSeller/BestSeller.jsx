import Button from "../button/Button";
import Card from "../card/Card";
import best1 from "../../assets/images/best1.jpeg";
import best2 from "../../assets/images/best2.jpeg";
import best4 from "../../assets/images/best4.jpeg";
import styles from "./BestSeller.module.css";
const BestSeller = () => {
  return (
    <div className={styles.container}>
      <h3>CHECK OUT </h3>
      <h2>Our Best Sellers</h2>
      <div className={styles.card_container}>
        <Card className={styles.card}>
          <img src={best2} />
          <Button className={styles.btn}>Add to cart</Button>
        </Card>
        <Card className={styles.card}>
          <img src={best1} />
          <Button className={styles.btn}>Add to cart</Button>
        </Card>
        <Card className={styles.card}>
          <img src={best4} />
          <Button className={styles.btn}>Add to cart</Button>
        </Card>
      </div>
    </div>
  );
};

export default BestSeller;
