"use client"
import SideNav from "./components/SideNav/SideNav";
import styles from "./page.module.css";
import TopBar from "./components/TopBar/TopBar";
import ImageCrossfader from "./components/ImageCrossfader/ImageCrossfader";
import localFont from 'next/font/local'

const myFont = localFont({ src: './assets/fonts/pt_sans.woff' })

console.log(myFont);

export default function Home() {
  return (
    <main className={`${styles.main} ${myFont.className}`}>
      <div className={styles.container}>
        <TopBar />

        <div className={styles.sideNavAndImageContainer}>
          <SideNav />
          <ImageCrossfader />
        </div>
      </div>
    </main>
  );
}
