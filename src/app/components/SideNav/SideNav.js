import React from "react";
import styles from "./SideNav.module.css";
import SocialsContainer from "../SocialsContainer/SocialsContainer";

const SideNav = () => {
  const iconColor = "black";

  return (
    <div className={styles.sideNavContainer}>
      <nav className={styles.sideNav}>
        <ul className={styles.sideNavMenu}>
          <li className={`${styles.listItem} ${styles.location}`}>
            <div>TAMPA</div>
          </li>
          <li className={styles.listItem}>
            <a href="/" className={styles.listItemLink}>
              Home
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/menu-catering" className={styles.listItemLink}>
              Menu & Catering
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/weekly-soups" className={styles.listItemLink}>
              Weekly Soups
            </a>
          </li>

          <li className={styles.listItem}>
            <a href="/gallery" className={styles.listItemLink}>
              Gallery
            </a>
          </li>
        </ul>
      </nav>

      <SocialsContainer size={"xl"} color={"black"} />
    </div>
  );
};

export default SideNav;
