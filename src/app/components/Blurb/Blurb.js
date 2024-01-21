import React from "react";
import styles from "./Blurb.module.css";
import Image from "next/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Blurb = ({ image, backgroundColor, blurbHeader, blurb, opposite }) => {
  const { windowWidth } = useWindowDimensions();

  if (windowWidth < 570) {
    return (
      <div style={{ backgroundColor }} className={styles.blurbContainer}>
        <div className={styles.blurbHeader}>{blurbHeader}</div>
        <Image
          layout=""
          width={400}
          height={400}
          src={image?.replace("//", "https://")}
          alt={""}
          className={styles.blurbImage}
        />
        <div className={styles.blurbTextContainer}>
          <div className={styles.blurb}>{blurb}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor }} className={styles.blurbContainer}>
        {opposite ? (
          <>
            <div className={styles.blurbTextContainer}>
              <div className={styles.blurbHeader}>{blurbHeader}</div>
              <div className={styles.blurb}>{blurb}</div>
            </div>
            <Image
              width={400}
              height={400}
              src={image?.replace("//", "https://")}
              alt={""}
              className={styles.blurbImage}
            />
          </>
        ) : (
          <>
            <Image
              width={400}
              height={400}
              src={image?.replace("//", "https://")}
              alt={""}
              className={styles.blurbImage}
            />
            <div className={styles.blurbTextContainer}>
              <div className={styles.blurbHeader}>{blurbHeader}</div>
              <div className={styles.blurb}>{blurb}</div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Blurb;
