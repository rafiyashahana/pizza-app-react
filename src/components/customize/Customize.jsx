import Button from "../button/Button";
import RadioCheckbox from "../radioCheckbox/RadioCheckbox";
import Modal from "../modal/Modal";
import styles from "./Customize.module.css";
import best4 from "../../assets/images/best4.png";

const Customize = ({ onClose }) => {
  return (
    <Modal
      className={styles.customize_container}
      contentStyle={styles.content}
      onClose={onClose}
    >
      <img src={best4} alt="pzza_img" />
      <h3>Spicy Ranch </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        eius laboriosam cumque maxime incidunt illo officia ex. Accusamus,
        eligendi omnis quisquam consequuntur ut dolores eum aspernatur in ad
        sint rem!
      </p>
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
      <Button> Add to Cart</Button>
    </Modal>
  );
};

export default Customize;
