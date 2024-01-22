import { useState } from "react";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import styles from "./Menu.module.css";
import best2 from "../../assets/images/best2.jpeg";

import Customize from "../../components/customize/Customize";

const Menu = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const handleClick = () => {
    setShowCustomize(!showCustomize);
  };
  return (
    <div className={styles.container}>
      <div className={styles.pizza_container}>
        <Card className={styles.card}>
          <img src={best2} />
          <h4>Cheesy Pepperoni Pizza</h4>
          <p>Tomato sauce, mozzarella, oregano, pepperoni, cheese, olives</p>
          <Button onClick={handleClick} className={styles.btn}>
            Add to cart (from $12)
          </Button>
        </Card>
        {showCustomize && <Customize onClose={() => setShowCustomize(false)} />}

        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Menu;
