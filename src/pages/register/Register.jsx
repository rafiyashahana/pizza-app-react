import styles from "./Register.module.css";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Register = ({ onClose }) => {
  return (
    <div>
      <Modal
        className={styles.register_container}
        contentStyle={styles.content_container}
        onClose={onClose}
      >
        <h1>Register</h1>
        <div className={styles.input_container}>
          <Input className={styles.inp} placeholder="Username" />
          <Input className={styles.inp} placeholder="Email" />
          <Input className={styles.inp} placeholder="Password" />
        </div>
        <Button className={styles.reg_btn}>Register</Button>
        <p className="error-msg"></p>

        <p>
          Already have an account?
          <a id="signIn-link" href="">
            Sign In
          </a>
        </p>
      </Modal>
    </div>
  );
};

export default Register;
