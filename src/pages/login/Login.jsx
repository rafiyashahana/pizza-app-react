import styles from "./Login.module.css";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Login = () => {
  return (
    <div>
      <Modal className={styles.login_container}>
        <h1>Login</h1>
        <div className={styles.input_container}>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
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
