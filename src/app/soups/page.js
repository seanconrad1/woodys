/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav/SideNav";
import styles from "./soups.module.css";
import { getSoups, getSoupPageImage } from "../../utils/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";

const Page = () => {
  const [soups, setSoups] = useState("");
  const [image, setSoupImage] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      const items = await getSoups();
      const { image } = await getSoupPageImage();
      setSoups(items);
      setSoupImage(image);
    }
    fetchMyAPI();
  }, []);


  let soupsSorted = soups ? soups.sort((a, b) => {
    // Extract date numbers from names
    const dateNumberA = parseInt(a.fields.name.match(/\d+/g) || Infinity);
    const dateNumberB = parseInt(b.fields.name.match(/\d+/g) || Infinity);

    // Check if name is "Everyday"
    if (a.fields.name === "Everyday") return -1;
    if (b.fields.name === "Everyday") return 1;

    // Compare date numbers
    return dateNumberA - dateNumberB;
  }) : [];


  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const today = new Date();
  // Gets the abbreviated day name
  const dayName = days[today.getDay()].toUpperCase();

  // Returns the text with "TODAY -> " in front of it if it is today's date.
  const todaysDate = (text) => {
    const day = text.split(" ")[0];
    if (dayName === day) {
      return <span className={styles.todaysDate}>{`TODAY -> ${text}`}</span>;
    } else {
      return text;
    }
  };

  /**
   * Options for rendering text.
   * @typedef {Object} Options
   * @property {function} renderText - A function that renders the text.
   */
  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  if (!soups) {
    return null;
  }
  return (
    <div className={styles.pageContainer}>
      <SideNav />

      <div className={styles.headerAndSoups}>
        <div className={styles.headerContainer}>
          <h1 className={styles.pageHeader}>Weekly Soups</h1>
          <div className={styles.subHeader}>
            {
              "Woodys' offers over 30 different signature soups! We have a weekly revolving list below."
            }
          </div>
        </div>
        <div className={styles.soupAndImage}>
          <div className={styles.soupsContainer}>
            {soupsSorted.map((item, idx) => {
              return (
                <div key={idx} className={styles.weeklySoupContainer}>
                  <h2 className={styles.header}>{item.fields.name}</h2>
                  <div className={styles.soups}>
                    {documentToReactComponents(item.fields.weeklySoup, options)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${styles.allergyGroup} ${styles.middle}`}>
            <div>*GF = Gluten free</div>
            <div>DF = Dairy free</div>
            <div>V = Vegan</div>
          </div>
          <img
            priority
            rel="preload"
            as="image"
            className={styles.image}
            alt={""}
            src={image?.fields.file.url.replace("//", "https://")}
            width={500}
            height={500}
          />
        </div>
        <div className={`${styles.allergyGroup} ${styles.bottom}`}>
          <div>*GF = Gluten free</div>
          <div>DF = Dairy free</div>
          <div>V = Vegan</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
