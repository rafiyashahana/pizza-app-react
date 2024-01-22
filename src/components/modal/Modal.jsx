import { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "@remixicon/react";
const Modal = ({ className, children, onClose, contentStyle }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClick = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  return (
    showModal && (
      <div className={`${styles.overlay}`}>
        <div className={`${styles.modal} ${className}  `}>
          <div className={styles.close} onClick={handleClick}>
            <RiCloseLine />
          </div>
          <div className={`{${styles.content} ${contentStyle} `}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
