import Button from "../button/Button";
import RadioCheckbox from "../radioCheckbox/RadioCheckbox";
import Modal from "../modal/Modal";
import styles from "./Customize.module.css";
import best4 from "../../assets/images/best4.png";
import { pizzaMenu } from "../../pizzaMenu";

const Customize = ({ pizza, onClose }) => {
  return (
    <Modal
      className={styles.customize_container}
      contentStyle={styles.content}
      onClose={onClose}
    >
      <div key={pizza.id}>
        <img src={pizza.img} alt="pzza_img" />
        <h3>{pizza.name} </h3>
        <p>{pizza.desc}</p>
        <h5>Pick your Size</h5>
        <div className={styles.radioCheck_container}>
          <RadioCheckbox type="radio" label="Small $12" />
          <RadioCheckbox type="radio" label="Medium $14" />
          <RadioCheckbox type="radio" label="Large $16" />
        </div>

        <h5>Any Extras?</h5>
        <div className={styles.radioCheck_container}>
          <RadioCheckbox type="checkbox" label="Extra Cheese +$1" />
          <RadioCheckbox type="checkbox" label="Extra Pepperoni +$2" />
        </div>
        <Button className={styles.btn}> Add to Cart ${pizza.price}</Button>
      </div>
    </Modal>
  );
};

export default Customize;
