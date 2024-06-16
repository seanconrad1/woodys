/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import { getBrandImageDesktop } from "@/utils/api";

const Footer = () => {
  const [brandImage, setBrandImage] = useState("");
  useEffect(() => {
    async function fetchMyAPI() {
      const image = await getBrandImageDesktop();
      setBrandImage(image);
    }
    fetchMyAPI();
  }, []);


  return (
    <footer className={styles.footerContainer}>
      <div className={styles.brandImgContainer}>
        {!brandImage ? (
          <div>Loading...</div>
        ) : (
          <img
            as="image"
            rel="preload"
            priority={true}
            className={styles.brandImg}
            alt="Woodys Restaurant"
            src={"https:" + brandImage}
          />
        )}
      </div>
      <div className={styles.infoItemsContainer}>
        <SocialsContainer size={"2xl"} color={"white"} />
      </div>
      <div className={styles.byFooter}>© 2024 Woodys Restaurant</div>
    </footer>
  );
};

export default Footer;
