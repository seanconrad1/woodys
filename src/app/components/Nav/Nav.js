import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
		<>
    <nav className={styles.siteNav}>
      <ul className={styles.siteNavMenu}>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Home</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Menu & Catering</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Weekly Soups</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Order Online - Pickup</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>UberEats Delivery</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Hours & Location</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Gallery</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Contact</a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.listItemLink}>Media</a>
        </li>
      </ul>
    </nav>
		</>
  );
};

export default Nav;
