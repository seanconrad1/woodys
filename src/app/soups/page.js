import React from "react";
import SideNav from "../components/SideNav/SideNav";
import styles from "./soups.module.css";
import { getSoups, getSoupPageImage } from "../../utils/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";
import soup1 from "../assets/woodyspicscont2/cajun-chicken-pasta.jpg";

const items = await getSoups();
const { image } = await getSoupPageImage();

// Sorts the items by date created.
items.sort((a, b) => {
  if (moment(a.sys.createdAt).isAfter(b.sys.createdAt)) {
    return 1;
  } else {
    return -1;
  }
});

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

const page = async () => {
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
            {items.map((item, idx) => {
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
          <Image
            className={styles.image}
            alt={""}
            src={image?.fields.file.url.replace("//", "https://")}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.allergyGroup}>
          <div>*GF = Gluten free</div>
          <div>DF = Dairy free</div>
          <div>V = Vegan</div>
        </div>
      </div>
    </div>
  );
};

export default page;
