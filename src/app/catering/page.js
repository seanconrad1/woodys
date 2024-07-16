"use client";
import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav/SideNav";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./catering.module.css";
import { getCateringInfo } from "@/utils/api";

const Page = () => {
  const [text, setText] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await getCateringInfo();
      setText(result);
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  if (loading === false) {
    return (
      <div className={styles.pageContainer}>
        <SideNav />
        <div className={styles.headerContainer}>
          <h1 className={styles.pageHeader}>
            {"Catering delivery available!​"}
          </h1>
          <div className={styles.subHeader}>
            {documentToReactComponents(text.text, options)}
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
