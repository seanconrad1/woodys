import React from "react";
import styles from "./Blurb2.module.css";
import Image from "next/image";

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
          <Image
            width={280}
            height={280}
            src={salad?.replace("//", "https://")}
            alt={""}
            className={styles.blurbImage}
          />
          <div className={styles.blurb}>{blurb1}</div>
        </div>
        <div className={styles.blurbTextContainer}>
          <Image
            width={280}
            height={280}

            src={soup?.replace("//", "https://")}
            alt={""}
            className={styles.blurbImage}
          />
          <div className={styles.blurb}>{blurb2}</div>
        </div>
        <div className={styles.blurbTextContainer}>
          <Image
            width={280}
            height={280}
            src={sandwich?.replace("//", "https://")}
            alt={""}
            className={styles.blurbImage}
          />
          <div className={styles.blurb}>{blurb3}</div>
        </div>
      </div>
    </div>
  );
};

export default Blurb2;
