import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Send a feedback</h2>
      <div className={styles.contact_container}>
        <Input className={styles.inp} placeholder="Username" />
        <Input className={styles.inp} placeholder="Email" />
        <textarea className={styles.desc} placeholder="Description" />
        <Button className={styles.reg_btn}>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
