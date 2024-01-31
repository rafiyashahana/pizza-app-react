import { useState, useContext, useEffect } from "react";
import styles from "./CartSlider.module.css";
import Button from "../button/Button";
import { RiCloseLine } from "@remixicon/react";
import CartItem from "../cartItem/CartItem";
import { CartContext } from "../../contexts/cart.context";

const CartSlider = ({ isOpen }) => {
  const { state } = useContext(CartContext);
  const [showSlider, setShowSlider] = useState(false);
  const [total, setTotal] = useState();
  const handleClick = () => {
    setShowSlider(!showSlider);
    if (isOpen) isOpen();
  };
  console.log(state);

  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => Number(acc + curr.price), 0));
  }, [state.cart]);
  return (
    <div className={`${styles.cart_container}`}>
      <div className={styles.close} onClick={handleClick}>
        <RiCloseLine />
      </div>
      {state.cart.length > 0 ? (
        <div className={styles.cart_content}>
          {state.cart.map((item) => (
            <CartItem item={item} />
          ))}

          <h4>Subtotal: $ {total}</h4>
          <Button className={styles.checkout_btn}>Checkout</Button>
        </div>
      ) : (
        <h4>Cart is Empty! </h4>
      )}
    </div>
  );
};

export default CartSlider;
