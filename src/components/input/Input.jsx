import styles from "./Input.module.css";
const Input = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label className={styles.inp_label} {...props}>
        {label}
      </label>
      <input className={styles.inp} {...props} />
    </div>
  );
};

export default Input;
