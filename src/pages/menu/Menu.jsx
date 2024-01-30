import { useState, useContext } from "react";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import styles from "./Menu.module.css";
import { CartContext } from "../../contexts/cart.context";

import Customize from "../../components/customize/Customize";

const Menu = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const { state } = useContext(CartContext);
  const handleClick = (e, pizza) => {
    e.preventDefault();
    setShowCustomize(!showCustomize);
    setSelectedPizza(pizza);
  };
  return (
    <div className={styles.container}>
      <h3>HUNGRY? </h3>
      <h2>Our Signature Pizzas </h2>
      <div className={styles.pizza_container}>
        {state.products.map((pizza) => {
          return (
            <Card key={pizza.id} className={styles.card}>
              <img src={pizza.img} />
              <h4>{pizza.name}</h4>
              <p>{pizza.desc}</p>
              <Button
                onClick={(e) => handleClick(e, pizza)}
                className={styles.btn}
                value={pizza.id}
              >
                Add to cart (from ${pizza.price})
              </Button>
            </Card>
          );
        })}

        {showCustomize && (
          <Customize
            pizza={selectedPizza}
            onClose={() => setShowCustomize(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
