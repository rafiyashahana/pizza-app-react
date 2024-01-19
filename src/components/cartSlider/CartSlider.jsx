import styles from "./CartSlider.module.css";
import Button from "../button/Button";
import { RiCloseLine } from "@remixicon/react";
import CartItem from "../cartItem/CartItem";

const CartSlider = () => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.close}>
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
