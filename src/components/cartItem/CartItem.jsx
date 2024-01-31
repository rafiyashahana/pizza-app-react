import { useContext } from "react";
import { RiDeleteBin4Line } from "@remixicon/react";
import styles from "./CartItem.module.css";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className={styles.item_container}>
      <img src={item.img} />
      <div className={styles.item_price}>
        <p>{item.name} </p>
        <p> 1 X $ {item.price}</p>
      </div>
      <RiDeleteBin4Line
        className={styles.bin}
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
      />
    </div>
  );
};

export default CartItem;
