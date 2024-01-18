"use client";
import styles from "./page.module.css";
import ImageCrossfader from "./components/ImageCrossfader/ImageCrossfader";
import Blurb from "./components/Blurb/Blurb";
import Blurb2 from "./components/Blurb2/Blurb2";
import SideNav from "./components/SideNav/SideNav";
import image1 from "./assets/saladpics/chef-salad.jpg";
import image2 from "./assets/carouselImages/doordash-profile.jpg";

import soup from "./assets/woodyspicscont2/lemon-chicken-feta.jpg";
import salad from "./assets/saladpics/fresh-spinach-and-strawberries.jpg";
import sandwich from "./assets/sandwichpics/festivale.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navAndImageCrossFade}>
        <SideNav />
        <ImageCrossfader />
      </div>
      <Blurb
        image={image1}
        backgroundColor={"#F2F2F5"}
        blurbHeader={"COME SEE US FOR LUNCH"}
        blurb={
          "We provide farm fresh fruits and vegetables from our local farmer's market. They are the base of all our creations at Woody\'s.  Add in Frontier's organic herbs \& spices, Boar\'s Head provisions and you have an ideal option for your dining and catering portfolio!"
        }
      />
      <Blurb
        opposite={true}
        image={image2}
        backgroundColor={"white"}
        blurbHeader={"MADE FROM SCRATCH"}
        blurb={
          "We make almost everything from scratch here at Woodys. All are Soups are made every morning! We make most of all our dressings in house, including our Blue Cheese! That FAMOUS POTATO SALAD is made fresh in house daily also!"
        }
      />
      <Blurb2
        soup={soup}
        salad={salad}
        sandwich={sandwich}
        backgroundColor={"#F2F2F5"}
        blurb1={
          "Our Soups are gaining in popularity because ALL of our soups begin with a recipe, are water-based and DO NOT CONTAIN any flour, cornstarch, preservatives or MSG."
        }
        blurb2={
          "​​Our Salads have long been a staple in South Tampa beginning with the original Famous Greek Salad. "
        }
        blurb3={
          "Our Sandwiches are made with Boar\'s Head Provisons.  We've been a proud partners of the Boar\'s Head family for over 30 years! "
        }
      />
    </main>
  );
}
