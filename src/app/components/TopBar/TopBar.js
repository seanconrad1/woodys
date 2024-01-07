import React from "react";
import styles from "./TopBar.module.css";
import brandImage from "../../assets/brand.jpeg";
import Image from "next/image";

const TopBar = () => {

  return (
    <div className={styles.topBarContainer}>
      <a href="/">
        <Image
          src={brandImage}
          alt="Woodys Restaurant"
          className={styles.brandImage}
        ></Image>
      </a>
    </div>
  );
};

export default TopBar;
