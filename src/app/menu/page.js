'use client';
import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";
import MenuItem from "../components/MenuItem/MenuItem";
import { getMenuItems } from "../../utils/api";
import SideNav from "../components/SideNav/SideNav";

const Page = () => {
  
  const [menuItems, setMenuItems] = useState("");
  
  useEffect(() => {
    async function fetchMyAPI() {
      const items = await getMenuItems();
      setMenuItems(items);
    }
    fetchMyAPI();
  }, []);

  if(!menuItems) return null;
  return (
    <div className={styles.pageContainer}>
      <SideNav />
      <div className={styles.flex}>
        {menuItems.map((i) => {
          return (
            <div key={i} className={styles.categoryContainer}>
              <h2 id={Object.keys(i)[0].toLowerCase()} className={styles.header}>{Object.keys(i)[0]}</h2>
              <div className={styles.menuGrid}>
                {i[Object.keys(i)].map((item, i) => (
                  <MenuItem
                    key={item.fields.name}
                    name={item?.fields?.name}
                    price={item?.fields?.price}
                    image={item?.fields?.image?.fields?.file?.url.replace(
                      "//",
                      "https://"
                    )}
                    description={
                      item?.fields?.description?.content[0].content[0].value
                    }
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
