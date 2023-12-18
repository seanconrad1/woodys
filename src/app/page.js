import Image from "next/image";
import Nav from "./components/Nav/Nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundImageWrapper}>
				<div className={styles.gradient}/>
        <div className={styles.backgroundImage}>
					
          <Nav />

          <header>
            <h1>WOODYS</h1>
            <p>Your tagline or additional information</p>
          </header>

        </div>
      </div>
    </main>
  );
}
