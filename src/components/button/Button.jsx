import styles from "./Button.module.css";
const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
