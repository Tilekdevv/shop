import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>Contact us</h3>

      <div className={styles.icons}>
        <a
          href="https://wa.me/996705203244"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="whatsapp"
          />
        </a>

        <a
          href="https://instagram.com/akylbekovicc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="instagram"
          />
        </a>

        <a
          href="https://t.me/akybekovicc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png"
            alt="telegram"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
