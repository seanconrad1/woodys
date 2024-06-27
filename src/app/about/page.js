/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import styles from "./about.module.css";
import localFont from "next/font/local";
import { getAboutUs } from "../../utils/api";
import Image from "next/image";

const avenirFont = localFont({ src: "../assets/fonts/avenir_next.woff2" });

export default function About() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await getAboutUs();
      setData(result);
    }
    fetchMyAPI();
  }, []);

  const { aboutUs, woodyPhoto } = data;
  
  if (aboutUs) {
    const copy = aboutUs.content[0].content[0].value;
    return (
      <div className={`${styles.aboutContainer} ${avenirFont.className}`}>
        <h1 className={styles.aboutUsHeader}>About Us</h1>
        <p className={styles.about}>{copy}</p>
        <img
          rel="preload"
          priority="true"
          width={300}
          as="image"
          height={400}
          className={styles.woodyImage}
          src={woodyPhoto.fields.file.url.replace("//", "https://")}
          alt="Photo of Woody Gilbert in flight suit, 1945 Manilla"
        />
        {"test"}
      </div>
    );
  }
}
