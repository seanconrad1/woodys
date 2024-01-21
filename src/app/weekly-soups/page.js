import React from "react";
import SideNav from "../components/SideNav/SideNav";
import styles from "./weekly-soups.module.css";
import { getSoups } from "../../utils/api";

const page = async () => {
  const { soup } = await getSoups();

  return (
    <div className={styles.pageContainer}>
      <SideNav />
      {soup}
    </div>
  );
};

export default page;
