import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import woodysWhite from "../../assets/woodys_white.jpeg";
import SocialsContainer from "../SocialsContainer/SocialsContainer";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.brandImgContainer}>
        <Image
          className={styles.brandImg}
          alt="Woodys Restaurant"
          src={woodysWhite}
        />
      </div>
      <div className={styles.infoItemsContainer}>
        <SocialsContainer size={"2xl"} color={"white"} />
      </div>
      <div className={styles.byFooter}>© 2024 Woodys Restaurant</div>
    </footer>
  );
};

export default Footer;
