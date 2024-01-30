import { RiDeleteBin4Line } from "@remixicon/react";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.item_container}>
      <img src={item.img} />
      <div className={styles.item_price}>
        <p>{item.name} </p>
        <p> 1 X $ {item.price}</p>
      </div>
      <RiDeleteBin4Line className={styles.bin} />
    </div>
  );
};

export default CartItem;
