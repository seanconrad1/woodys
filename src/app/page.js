"use client";
import React, { useState, useEffect } from "react";
import Blurb from "./components/Blurb/Blurb";
import Blurb2 from "./components/Blurb2/Blurb2";
import ImageCrossfader from "./components/ImageCrossfader/ImageCrossfader";
import SideNav from "./components/SideNav/SideNav";
import styles from "./page.module.css";
import { getBlurbs, getFoodCards } from "@/utils/api";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blurbs, setBlurbs] = useState([]);
  const [foodCards, setFoodCards] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const blurbResults = await getBlurbs();
      const foodCardResults = await getFoodCards();
      setBlurbs(blurbResults);
      setFoodCards(foodCardResults);
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.navAndImageCrossFade}>
        <SideNav />
        <ImageCrossfader />
      </div>
      <Blurb
        image={blurbs[0]?.fields.foodImage.fields.file.url}
        backgroundColor={"#F2F2F5"}
        blurbHeader={blurbs[0]?.fields.blurbHeader}
        blurb={blurbs[0]?.fields.blurbDescription.content[0].content[0].value}
      />
      <Blurb
        opposite={true}
        image={blurbs[1]?.fields.foodImage.fields.file.url}
        backgroundColor={"white"}
        blurbHeader={blurbs[1]?.fields.blurbHeader}
        blurb={blurbs[1]?.fields.blurbDescription.content[0].content[0].value}
      />
      <Blurb2
        salad={foodCards[1]?.fields.foodImage.fields.file.url}
        soup={foodCards[0]?.fields.foodImage.fields.file.url}
        sandwich={foodCards[2]?.fields.foodImage.fields.file.url}
        backgroundColor={"#F2F2F5"}
        blurb1={foodCards[1]?.fields.description.content[0].content[0].value}
        blurb2={foodCards[0]?.fields.description.content[0].content[0].value}
        blurb3={foodCards[2]?.fields.description.content[0].content[0].value}
      />
    </main>
  );
}
