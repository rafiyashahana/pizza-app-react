import styles from "./Modal.module.css";
import { RiCloseLine } from "@remixicon/react";
const Modal = ({ className, children, props, contentStyle }) => {
  return (
    <div className={`${styles.container} ${className}  `} {...props}>
      <div className={styles.close}>
        <RiCloseLine />
      </div>
      <div className={`{${styles.content} ${contentStyle} `}>{children}</div>
    </div>
  );
};

export default Modal;
