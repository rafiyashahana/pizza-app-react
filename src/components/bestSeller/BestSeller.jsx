import Button from "../button/Button";
import Card from "../card/Card";
import best1 from "../../assets/images/best1.jpeg";
import best2 from "../../assets/images/best2.jpeg";
import best4 from "../../assets/images/best4.jpeg";
import { RiArrowDownDoubleLine } from "@remixicon/react";
import styles from "./BestSeller.module.css";
const BestSeller = () => {
  return (
    <div className={styles.container}>
      <h3>CHECK OUT </h3>
      <h2>Our Best Sellers</h2>
      <div className={styles.card_container}>
        <Card className={styles.card}>
          <img src={best2} />
          <h4>Cheesy Pepperoni Pizza</h4>
          <p>Tomato sauce, mozzarella, oregano, pepperoni, cheese, olives</p>
          <Button className={styles.btn}>Add to cart (from $12)</Button>
        </Card>

        <Card className={styles.card}>
          <img src={best1} />
          <h4>Vegetarian Pizza</h4>
          <p> Cheese Mix, Tomato, Olive, Onion, Green Pepper, Mushroom</p>
          <Button className={styles.btn}>Add to cart $13</Button>
        </Card>

        <Card className={styles.card}>
          <img src={best4} />
          <h4>Spicy BBQ Pizza</h4>
          <p>Ranch Sauce, Cheese Mix, Grilled Chicken, Onion, BBQ Swirl</p>
          <Button className={styles.btn}>Add to cart (from $14)</Button>
        </Card>
      </div>
    </div>
  );
};

export default BestSeller;
