import React from "react";
import styles from "./menu.module.css";

const page = () => {
  return (
    <iframe
      className={styles.iframe}
      src="https://places.singleplatform.com/woodys-47/menu_widget?api_key=ke09z8icq4xu8uiiccighy1bw&base_font_size=18px&hide_cover_photo=false&hide_disclaimer=true&item_desc_font_color=%23514b4b&item_price_font_color=%23514b4b&item_title_font_color=%23514b4b&menu_desc_background_color=%23ffffff&menu_desc_font_color=%23514b4b&primary_background_color=%23ffffff&primary_font_color=%23514b4b&primary_font_family=Open%20Sans&section_desc_background_color=%23ffffff&section_desc_font_color=%23514b4b&section_title_background_color=%23ffffff&section_title_font_color=%23514b4b&stylesheet=https%3A//fonts.googleapis.com/css%3Ffamily%3DOpen+Sans&widget_background_color=rgba%280%2C%200%2C%200%2C%200%29"
    />
  );
};

export default page;
// ask about tripadvisor account