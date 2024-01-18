import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import styles from "./Menu.module.css";
import best2 from "../../assets/images/best2.jpeg";
import Register from "../register/Register";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pizza_container}>
        <Card className={styles.card}>
          <img src={best2} />
          <h4>Cheesy Pepperoni Pizza</h4>
          <p>Tomato sauce, mozzarella, oregano, pepperoni, cheese, olives</p>
          <Button className={styles.btn}>Add to cart (from $12)</Button>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Register />
    </div>
  );
};

export default Menu;
