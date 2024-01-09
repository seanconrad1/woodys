"use client";
import styles from "./page.module.css";
import ImageCrossfader from "./components/ImageCrossfader/ImageCrossfader";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageCrossfader />
    </main>
  );
}
