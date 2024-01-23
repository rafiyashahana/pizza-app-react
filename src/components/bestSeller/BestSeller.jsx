import { useState } from "react";
import Button from "../button/Button";
import Card from "../card/Card";
import { pizzaMenu } from "../../pizzaMenu";
import styles from "./BestSeller.module.css";
import Customize from "../customize/Customize";
const BestSeller = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const handleClick = () => {
    setShowCustomize(!showCustomize);
  };
  return (
    <div className={styles.container}>
      <h3>CHECK OUT </h3>
      <h2>Our Best Sellers</h2>
      <div className={styles.card_container}>
        {pizzaMenu.slice(Math.max(pizzaMenu.length - 4)).map((pizza) => {
          return (
            <Card key={pizza.id} className={styles.card}>
              <img src={pizza.img} />
              <h4>{pizza.name}</h4>
              <p>{pizza.desc}</p>
              <Button className={styles.btn} onClick={handleClick}>
                Add to cart (from ${pizza.price})
              </Button>
            </Card>
          );
        })}
        {showCustomize && <Customize onClose={() => setShowCustomize(false)} />}
      </div>
    </div>
  );
};

export default BestSeller;
