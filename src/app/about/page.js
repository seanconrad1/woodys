import React from "react";
import styles from "./about.module.css";
import localFont from "next/font/local";
import { getAboutUs } from "../../utils/api";

const avenirFont = localFont({ src: "../assets/fonts/avenir_next.woff2" });

export default async function About() {
  const { aboutUs } = await getAboutUs();
  const data = aboutUs.content[0].content[0].value
  
  return (
    <div className={`${styles.aboutContainer} ${avenirFont.className}`}>
      <h1 className={styles.aboutUsHeader}>About Us</h1>
      <p className={styles.about}>{data}</p>
    </div>
  );
}
