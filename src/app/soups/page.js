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

  const getMonthFromName = (name) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (let i = 0; i < monthNames.length; i++) {
      if (name.includes(monthNames[i])) {
        return i; // Return the month index (0 for January, 1 for February, etc.)
      }
    }
    return -1; // Return -1 if no month is found
  };

  const currentMonth = new Date().getMonth();
  const nextMonth = (currentMonth + 1) % 12;

  let soupsSorted = soups
    ? soups.sort((a, b) => {
        // Check if name is "Everyday"
        // If it is, it should be first
        if (a.fields.name === "Everyday") return -1;

        // Extract date numbers from names
        // To be able to sort by date
        const dateNumberA = parseInt(a.fields.name.match(/\d+/g) || Infinity);
        const dateNumberB = parseInt(b.fields.name.match(/\d+/g) || Infinity);

        // Check if a.fields.name includes a month that is before the next month
        const monthA = getMonthFromName(a.fields.name);
        const monthB = getMonthFromName(b.fields.name);
        if (monthA !== -1 && monthB !== -1) {
          if (monthA < nextMonth && monthB >= nextMonth) return -1;
          if (monthA >= nextMonth && monthB < nextMonth) return 1;
        }

        // Compare date numbers
        return dateNumberA - dateNumberB;
      })
    : [];

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
            priority="true"
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
