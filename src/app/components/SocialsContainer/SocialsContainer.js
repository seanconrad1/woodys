"use client";
import React from "react";
import styles from "./SocialsContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faSquareXTwitter,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { sendGTMEvent } from "@next/third-parties/google";

const SocialsContainer = ({ color, size }) => {
  const urls = {
    instagram: "https://www.instagram.com/woodysfamoussalads/?hl=en",
    facebook: "https://www.facebook.com/Woodysfamoussalads/?ref=bookmarks",
    twitter: "https://twitter.com/WoodysSalads",
    googleMaps: "https://maps.app.goo.gl/1zw2Ao5SbUtyKqnq8",
    yelp: "https://www.yelp.com/biz/woodys-famous-salads-tampa",
  };

  const handleClick = (type) => {
    sendGTMEvent({ event: `social-link-clicked`, value: type });
  };

  return (
    <div className={styles.menuSocialContainer}>
      <a
        href={urls.instagram}
        target="_blank"
        onClick={() => handleClick("instagram")}
        className={styles.icon}
      >
        <FontAwesomeIcon
          className={styles.faIcon}
          color={color}
          size={size}
          icon={faInstagramSquare}
        />
      </a>
      <a
        href={urls.facebook}
        target="_blank"
        onClick={() => handleClick("facebook")}
        className={styles.icon}
      >
        <FontAwesomeIcon
          className={styles.faIcon}
          color={color}
          size={size}
          icon={faFacebookSquare}
        />
      </a>
      <a
        href={urls.twitter}
        target="_blank"
        onClick={() => handleClick("twitter")}
        className={styles.icon}
      >
        <FontAwesomeIcon
          className={styles.faIcon}
          color={color}
          size={size}
          icon={faSquareXTwitter}
        />
      </a>
      <a
        href={urls.googleMaps}
        target="_blank"
        className={styles.icon}
        onClick={() => handleClick("googleMaps")}
      >
        <FontAwesomeIcon
          className={styles.faIcon}
          color={color}
          size={size}
          icon={faMapLocationDot}
        />
      </a>
      <a
        href={urls.yelp}
        target="_blank"
        className={styles.icon}
        onClick={() => handleClick("yelp")}
      >
        <FontAwesomeIcon
          className={styles.faIcon}
          color={color}
          size={size}
          icon={faYelp}
        />
      </a>
    </div>
  );
};

export default SocialsContainer;
