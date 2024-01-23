import { useState } from "react";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import styles from "./Menu.module.css";

import { pizzaMenu } from "../../pizzaMenu";

import Customize from "../../components/customize/Customize";

const Menu = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const handleClick = () => {
    setShowCustomize(!showCustomize);
  };
  return (
    <div className={styles.container}>
      <h3>HUNGRY? </h3>
      <h2>Our Signature Pizzas </h2>
      <div className={styles.pizza_container}>
        {pizzaMenu.map((pizza) => {
          return (
            <Card key={pizza.id} className={styles.card}>
              <img src={pizza.img} />
              <h4>{pizza.name}</h4>
              <p>{pizza.desc}</p>
              <Button onClick={handleClick} className={styles.btn}>
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

export default Menu;
