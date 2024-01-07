import React from "react";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={styles.sideNavContainer}>
      <nav className={styles.sideNav}>
        <ul className={styles.sideNavMenu}>
          <li className={`${styles.listItem} ${styles.location}`}>
            <div>TAMPA</div>
          </li>
          <li className={styles.listItem}>
            <a href="home" className={styles.listItemLink}>
              Home
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="menu" className={styles.listItemLink}>
              Menu & Catering
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="weekly-soups" className={styles.listItemLink}>
              Weekly Soups
            </a>
          </li>

          <li className={styles.listItem}>
            <a className={styles.listItemLink}>Gallery</a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.listItemLink}>Contact</a>
          </li>
        </ul>
      </nav>

      <div className={styles.menuSocialContainer}>
				<ul>
					<a target="_blank" href="https://www.instagram.com/woodysfamoussalads/?hl=en">
						<div>insta</div>
					</a>
					<a target="_blank" href="https://www.facebook.com/Woodysfamoussalads/?ref=bookmarks">
						<div>facebook</div>
					</a>
					<a target="_blank" href="https://twitter.com/WoodysSalads">
						<div>twitter</div>
					</a>
					<a target="_blank" href="https://maps.app.goo.gl/1zw2Ao5SbUtyKqnq8">
						<div>google maps</div>
					</a>
					<a target="_blank" href="https://www.yelp.com/biz/woodys-famous-salads-tampa">
						<div>yelp</div>
					</a>
				</ul>

			</div>
    </div>
  );
};

export default SideNav;
