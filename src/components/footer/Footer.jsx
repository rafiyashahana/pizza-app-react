import styles from "./Footer.module.css";
import { RiCodeSSlashLine, RiReactjsLine, RiHeartFill } from "@remixicon/react";
const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        {" "}
        <RiCodeSSlashLine size="0.7rem" color="#000" /> with{" "}
        <RiHeartFill size="0.7rem" color="#000" />
        by Rafiya Shahana using
        <RiReactjsLine size="0.7rem" color="#61dbfb" />
      </p>
      <p>
        Project code is open source. Feel free to fork and make your own
        version.
      </p>
    </div>
  );
};

export default Footer;
