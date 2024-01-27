import React from "react";
import styles from "./menu.module.css";
import MenuItem from "../components/MenuItem/MenuItem";

const page = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.header}>Salads</h2>
      <div className={styles.menuGrid}>
        {Array(10)
          .fill()
          .map((_, i) => (
            <MenuItem key={i} />
          ))}
      </div>
    </div>
  );
};

export default page;
// ask about tripadvisor account
