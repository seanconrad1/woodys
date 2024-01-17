"use client";
import styles from "./page.module.css";
import ImageCrossfader from "./components/ImageCrossfader/ImageCrossfader";
import Blurb from "./components/Blurb/Blurb";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageCrossfader />
    </main>
  );
}
