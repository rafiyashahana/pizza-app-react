import styles from "./Input.module.css";
const Input = ({ className, label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
