import { useState, useContext } from "react";
import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./BestSeller.module.css";
import Customize from "../customize/Customize";
import { CartContext } from "../../contexts/cart.context";
const BestSeller = () => {
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
      <h3>CHECK OUT </h3>
      <h2>Our Best Sellers</h2>
      <div className={styles.card_container}>
        {state.products
          .slice(Math.max(state.products.length - 4))
          .map((pizza) => {
            return (
              <Card key={pizza.id} className={styles.card}>
                <img src={pizza.img} />
                <h4>{pizza.name}</h4>
                <p>{pizza.desc}</p>
                <Button
                  className={styles.btn}
                  value={pizza.id}
                  onClick={(e) => handleClick(e, pizza)}
                >
                  Add to cart (from ${pizza.price})
                </Button>
              </Card>
            );
          })}
      </div>
      {showCustomize && (
        <Customize
          pizza={selectedPizza}
          onClose={() => setShowCustomize(false)}
        />
      )}
    </div>
  );
};

export default BestSeller;
