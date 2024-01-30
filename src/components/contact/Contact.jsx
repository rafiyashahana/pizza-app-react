import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.header}>
      <h3>DON'T HESITATE TO </h3>
      <h2>Contact Us </h2>
      <div className={styles.container}>
        <div className={styles.left}>
          <h4>We Love Feedback, So Tell Us What You Think</h4>
          <p>
            If you just placed an order, look out for our feedback survey via
            email. It’s your chance to tell us how your order went. Your opinion
            matters and feedback helps us to improve our service. And our pizza.
          </p>
        </div>
        <div className={styles.contact_container}>
          <Input className={styles.inp} placeholder="Username" />
          <Input className={styles.inp} placeholder="Email" />
          <textarea className={styles.desc} placeholder="Description" />
          <Button className={styles.reg_btn}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
