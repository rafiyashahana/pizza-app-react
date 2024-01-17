import styles from "./Modal.module.css";
import { RiCloseLine } from "@remixicon/react";
const Modal = ({ className, children }) => {
  return (
    <div className={`${styles.container} ${className} `}>
      <div className={styles.close}>
        <RiCloseLine />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
