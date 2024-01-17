import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>LETS' DO THIS</h3>
      <h2>Hot Deals</h2>
      <div className={styles.contact_container}>
        <img src={require("../../assets/images/deal1.jpg")} />
        <img src={require("../../assets/images/deal2.jpg")} />
      </div>
    </div>
  );
};

export default Contact;
