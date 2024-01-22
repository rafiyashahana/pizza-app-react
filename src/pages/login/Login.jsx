import styles from "./Login.module.css";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Login = ({ onClose }) => {
  return (
    <div>
      <Modal
        className={styles.login_container}
        contentStyle={styles.content_container}
        onClose={onClose}
      >
        <h1>Login</h1>
        <div className={styles.input_container}>
          <Input className={styles.inp} placeholder="Email" />
          <Input className={styles.inp} placeholder="Password" />
          <p className="error-msg"></p>
        </div>
        <Button className={styles.login_btn}>Login</Button>

        <p>
          No account?
          <a id="signIn-link" href="">
            Register here
          </a>
        </p>
      </Modal>
    </div>
  );
};

export default Login;
