import React from "react";
import { createClient } from "contentful";
import SideNav from "../components/SideNav/SideNav";
import styles from "./weekly-soups.module.css";

async function getSoups() {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
    host: "cdn.contentful.com",
  });
  const res = await client.getEntry("6gvl2wdvgjmtdf0p9En36F");
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return res.fields;
}

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
