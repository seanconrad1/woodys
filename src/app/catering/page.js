import React from "react";
import SideNav from "../components/SideNav/SideNav";
import styles from "./catering.module.css";

const page = () => {
  return (
    <div className={styles.pageContainer}>
      <SideNav />
      <div className={styles.headerContainer}>
        <h1 className={styles.pageHeader}>{"Catering delivery available!​"}</h1>
        <div className={styles.subHeader}>
          Please call us for your catering needs and we will schedule your
          delivery accordingly. Call{" "}
          <span>
            <a href="tel:813-254-2806"><b>813-254-2806</b></a>
          </span>{" "}
          and ask for Jordyn or Adam, our catering specialists!
        </div>
      </div>
    </div>
  );
};

export default page;
