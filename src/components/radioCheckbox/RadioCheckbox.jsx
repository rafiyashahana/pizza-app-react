import styles from "./RadioCheckbox.module.css.module.css";

const RadioCheckbox = ({ props, label, className, type }) => {
  return (
    <div className={`${styles.inp_container} ${className}`}>
      <input type={type} className={styles.inp} {...props} />
      <label className={styles.radioCheck_label} {...props}>
        {label}
      </label>
    </div>
  );
};

export default RadioCheckbox;
