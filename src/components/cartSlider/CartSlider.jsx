import { useState } from "react";
import styles from "./CartSlider.module.css";
import Button from "../button/Button";
import { RiCloseLine } from "@remixicon/react";
import CartItem from "../cartItem/CartItem";

const CartSlider = () => {
  const [showSlider, setShowSlider] = useState(true);
  const handleClick = () => {
    setShowSlider(false);
  };
  return (
    <div
      className={
        showSlider
          ? `${styles.cart_container}`
          : `${styles.cart_container} ${styles.hideSlider}`
      }
    >
      <div className={styles.close} onClick={() => handleClick()}>
        <RiCloseLine />
      </div>
      <div className={styles.cart_content}>
        <CartItem />
        <CartItem />
        <CartItem />
        <h4>Subtotal: $25.4</h4>
        <Button className={styles.checkout_btn}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartSlider;
