import { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "@remixicon/react";
const Modal = ({ className, children, props, contentStyle }) => {
  const [showModal, setShowModal] = useState(true);
  const handleClick = (e) => {
    setShowModal(false);
  };
  return (
    <div className={showModal ? `${styles.overlay}` : `${styles.hideModal}`}>
      <div className={`${styles.container} ${className}  `} {...props}>
        <div className={styles.close} onClick={(e) => handleClick(e)}>
          <RiCloseLine />
        </div>
        <div className={`{${styles.content} ${contentStyle} `}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
