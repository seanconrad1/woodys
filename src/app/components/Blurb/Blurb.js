import React from "react";
import styles from "./Blurb.module.css";
import Image from "next/image";

const Blurb = ({ image, backgroundColor, blurbHeader, blurb, opposite }) => {
  return (
    <div style={{ backgroundColor }} className={styles.blurbContainer}>
      {opposite ? (
        <>
          <div className={styles.blurbTextContainer}>
            <div className={styles.blurbHeader}>{blurbHeader}</div>
            <div className={styles.blurb}>{blurb}</div>
          </div>
          <Image src={image} alt={""} className={styles.blurbImage} />
        </>
      ) : (
        <>
          <Image src={image} alt={""} className={styles.blurbImage} />
          <div className={styles.blurbTextContainer}>
            <div className={styles.blurbHeader}>{blurbHeader}</div>
            <div className={styles.blurb}>{blurb}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Blurb;
