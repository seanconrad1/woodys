import React from "react";
import styles from "./about.module.css";
import localFont from "next/font/local";
import { getAboutUs } from "../../utils/api";
import Image from "next/image";

const avenirFont = localFont({ src: "../assets/fonts/avenir_next.woff2" });

export default async function About() {
  const { aboutUs, woodyPhoto } = await getAboutUs();
  const data = aboutUs.content[0].content[0].value;
  return (
    <div className={`${styles.aboutContainer} ${avenirFont.className}`}>
      <h1 className={styles.aboutUsHeader}>About Us</h1>
      <p className={styles.about}>{data}</p>
      <Image
        rel="preload"
        priority
        width={300}
        as="image"
        height={400}
        className={styles.woodyImage}
        src={woodyPhoto.fields.file.url.replace("//", "https://")}
        alt="Photo of Woody Gilbert in flight suit, 1945 Manilla"
      />
    </div>
  );
}
