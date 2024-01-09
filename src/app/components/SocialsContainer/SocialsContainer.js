import React from "react";
import styles from './SocialsContainer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const SocialsContainer = ({color, size}) => {
  return (
    <div className={styles.menuSocialContainer}>
      <ul>
        <a
          className={styles.icon}
          target="_blank"
          href="https://www.instagram.com/woodysfamoussalads/?hl=en"
        >
          <FontAwesomeIcon
            className={styles.faIcon}
            color={color}
            size={size}
            icon={faInstagramSquare}
          />
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href="https://www.facebook.com/Woodysfamoussalads/?ref=bookmarks"
        >
          <FontAwesomeIcon
            className={styles.faIcon}
            color={color}
            size={size}
            icon={faFacebookSquare}
          />
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href="https://twitter.com/WoodysSalads"
        >
          <FontAwesomeIcon
            className={styles.faIcon}
            color={color}
            size={size}
            icon={faTwitterSquare}
          />
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href="https://maps.app.goo.gl/1zw2Ao5SbUtyKqnq8"
        >
          <FontAwesomeIcon
            className={styles.faIcon}
            color={color}
            size={size}
            icon={faMapLocationDot}
          />
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href="https://www.yelp.com/biz/woodys-famous-salads-tampa"
        >
          <FontAwesomeIcon
            className={styles.faIcon}
            color={color}
            size={size}
            icon={faYelp}
          />
        </a>
      </ul>
    </div>
  );
};

export default SocialsContainer;
