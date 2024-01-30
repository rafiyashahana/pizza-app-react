import { useState, useContext } from "react";
import styles from "./CartSlider.module.css";
import Button from "../button/Button";
import { RiCloseLine } from "@remixicon/react";
import CartItem from "../cartItem/CartItem";
import { CartContext } from "../../contexts/cart.context";

const CartSlider = ({ isOpen }) => {
  const { state } = useContext(CartContext);
  const [showSlider, setShowSlider] = useState(false);
  const handleClick = () => {
    setShowSlider(!showSlider);
    if (isOpen) isOpen();
  };
  console.log(state);
  return (
    <div className={`${styles.cart_container}`}>
      <div className={styles.close} onClick={handleClick}>
        <RiCloseLine />
      </div>
      <div className={styles.cart_content}>
        {state.cart.map((item) => (
          <CartItem item={item} />
        ))}

        <h4>Subtotal: $25.4</h4>
        <Button className={styles.checkout_btn}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartSlider;
