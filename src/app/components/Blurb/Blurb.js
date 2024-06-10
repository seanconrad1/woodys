import React from "react";
import styles from "./Blurb.module.css";
import Image from "next/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Blurb = ({
  loading,
  image,
  backgroundColor,
  blurbHeader,
  blurb,
  opposite,
}) => {
  const { windowWidth } = useWindowDimensions();

  if (windowWidth < 570) {
    return (
      <div style={{ backgroundColor }} className={styles.blurbContainer}>
        <div className={styles.blurbHeader}>{blurbHeader}</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Image
            rel="preload"
            priority
            as="image"
            width={400}
            height={400}
            src={"https:" + image}
            alt={""}
            className={styles.blurbImage}
          />
        )}
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
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Image
                rel="preload"
                priority
                as="image"
                width={400}
                height={400}
                src={"https:" + image}
                alt={""}
                className={styles.blurbImage}
              />
            )}
          </>
        ) : (
          <>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Image
                rel="preload"
                priority
                as="image"
                width={400}
                height={400}
                src={"https:" + image}
                alt={""}
                className={styles.blurbImage}
              />
            )}
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
