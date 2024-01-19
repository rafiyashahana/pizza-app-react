import best4 from "../../assets/images/best4.png";
import { RiDeleteBin4Line } from "@remixicon/react";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={styles.item_container}>
      <img src={best4} />
      <div className={styles.item_price}>
        <p>Chicken Pizza</p>
        <p> 1 X $ 13</p>
      </div>
      <RiDeleteBin4Line className={styles.bin} color="#d3d6db" />
    </div>
  );
};

export default CartItem;
