import React from "react";
import styles from "./about.module.css";
import localFont from "next/font/local"
 
const avenirFont = localFont({ src: '../assets/fonts/avenir_next.woff2' })

export default function About() {
  return (
    <div className={`${styles.aboutContainer} ${avenirFont.className}`}>
			<h1 className={styles.aboutUsHeader}>About Us</h1>
      <p className={styles.about}>
        {"Everybody knows we're not just salads! With Boar\'s Head Provisions, we make some of the finest gourmet sandwiches in Tampa. Check out the selection and ingredients in the Sandwich Menu! And, we\'ve got REAL homemade soups - not the frozen-block kind but the kind you make from a recipe! I know, I know, everybody says their stuff is homemade - but ours really is! Our soup recipes range from the very exotic to great American classics. Tasting is believing - check out the Soup Menu for our collection and ingredients! Located in the heart of South Tampa, Woody\'s is an institution! With 30+ years in the restaurant business, Woody\'s still showcases its original product - The Famous Greek Salad! We\'ve sold over a MILLION Greek Salads and made at least a million new friends! Here\'s why: Crispy California Lettuce, Homemade Greek Potato Salad, Imported Kalamata Olives, Imported Greek Pepperoncinis, Radish, Scallion, Feta, Beet, Shrimp, Vine-Ripened & Locally Grown Tomatoes, Cucumbers and Imported Greek Vinaigrette Dressing. To Die For."}
      </p>
    </div>
  );
}
