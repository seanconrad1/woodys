import React from "react";
import styles from "./Blurb2.module.css";
import Image from "next/image";
import salad from "../../assets/saladpics/sss2.jpg";
import soup from "../../assets/woodyspicscont2/lemon-chicken-feta.jpg";
import sandwich from "../../assets/sandwichpics/festivale.jpg";

const Blurb2 = ({
  soup,
  salad,
  sandwich,
  backgroundColor,
  blurb1,
  blurb2,
  blurb3,
}) => {
  return (
    <div style={{ backgroundColor }} className={styles.blurbContainer}>
      <div className={styles.imageList}>
        <div className={styles.blurbTextContainer}>
          <Image src={soup} alt={""} className={styles.blurbImage} />
          <div className={styles.blurb}>{blurb1}</div>
        </div>
        <div className={styles.blurbTextContainer}>
          <Image src={salad} alt={""} className={styles.blurbImage} />
          <div className={styles.blurb}>{blurb2}</div>
        </div>
        <div className={styles.blurbTextContainer}>
          <Image src={sandwich} alt={""} className={styles.blurbImage} />
          <div className={styles.blurb}>{blurb3}</div>
        </div>
      </div>
    </div>
  );
};

export default Blurb2;
